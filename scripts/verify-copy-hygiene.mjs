import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const appDir = join(root, "app");
const seoPagesPath = join(appDir, "lib", "seoPages.ts");
const allowedLegacyRedirectFile = relative(root, seoPagesPath).replaceAll("\\", "/");

const staleLocationPatterns = [
  /\bWeston\b/i,
  /Nearby Expressway/i,
  /\bMississauga\b/i,
  /ByWard Market/i,
  /\bToronto St\b/i,
  /North Toronto/i,
  /\bPeel\b/i,
  /\bBrampton\b/i,
  /\bScarborough\b/i,
  /\bMohawk\b/i,
  /mohawkmedicine/i,
];

const stalePublicLinkPatterns = [
  /\/info\/york-/i,
  /\/info\/cheap-weed-york/i,
  /\/info\/native-cigarettes-york/i,
  /\/info\/dispensary-near-me-york/i,
  /\/info\/weed-store-near-mississauga/i,
];

const requiredSeoSlugs = [
  "toronto-weed-dispensary",
  "cheap-weed-toronto",
  "native-cigarettes-toronto",
  "weed-store-near-the-junction",
  "dispensary-near-me-toronto",
];

const requiredLegacyRedirects = [
  `"york-weed-dispensary": "toronto-weed-dispensary"`,
  `"cheap-weed-york": "cheap-weed-toronto"`,
  `"native-cigarettes-york": "native-cigarettes-toronto"`,
  `"weed-store-near-mississauga": "weed-store-near-the-junction"`,
  `"dispensary-near-me-york": "dispensary-near-me-toronto"`,
];

function collectFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) return collectFiles(path);
    return /\.(tsx?|jsx?)$/.test(entry) ? [path] : [];
  });
}

const failures = [];

for (const file of collectFiles(appDir)) {
  const rel = relative(root, file).replaceAll("\\", "/");
  const text = readFileSync(file, "utf8");
  const searchableText =
    rel === allowedLegacyRedirectFile
      ? text.split("const LEGACY_SEO_REDIRECTS")[0]
      : text;

  for (const pattern of staleLocationPatterns) {
    if (pattern.test(searchableText)) {
      failures.push(`${rel}: stale location phrase matched ${pattern}`);
    }
  }

  if (rel !== allowedLegacyRedirectFile) {
    for (const pattern of stalePublicLinkPatterns) {
      if (pattern.test(text)) {
        failures.push(`${rel}: stale public info link matched ${pattern}`);
      }
    }
  }
}

const seoPages = readFileSync(seoPagesPath, "utf8");
for (const slug of requiredSeoSlugs) {
  if (!seoPages.includes(`slug: "${slug}"`)) {
    failures.push(`${allowedLegacyRedirectFile}: missing SEO slug ${slug}`);
  }
}

for (const redirect of requiredLegacyRedirects) {
  if (!seoPages.includes(redirect)) {
    failures.push(`${allowedLegacyRedirectFile}: missing legacy redirect ${redirect}`);
  }
}

if (!seoPages.includes("getLegacySeoRedirect")) {
  failures.push(`${allowedLegacyRedirectFile}: missing getLegacySeoRedirect export`);
}

if (failures.length) {
  console.error("Copy hygiene verification failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Copy hygiene verification passed.");
