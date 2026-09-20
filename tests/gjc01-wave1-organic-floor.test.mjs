import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import test from "node:test";

const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const storeFile = readFileSync("app/lib/store.ts", "utf8");
const hoursPage = readFileSync("app/24-hour-junction-dispensary/page.tsx", "utf8");
const cityPage = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tierCopy = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const seoPages = readFileSync("app/lib/seoPages.ts", "utf8");
const infoPage = readFileSync("app/info/[seoPage]/page.tsx", "utf8");
const mesh = readFileSync("app/components/LocalSeoMesh.tsx", "utf8");

const publicBundle = [
  home,
  visit,
  hoursPage,
  cityPage,
  footer,
  navbar,
  tierCopy,
  seoPages,
  readFileSync("app/lib/weedDiscovery.ts", "utf8"),
].join("\n");

test("dedicated 24h Junction LP exists with unique H1, NAP, and FAQ schema", () => {
  assert.ok(existsSync("app/24-hour-junction-dispensary/page.tsx"));
  assert.match(hoursPage, /<h1>24-Hour Dispensary Open Now in The Junction<\/h1>/);
  assert.match(hoursPage, /canonical: `\$\{STORE\.origin\}\/24-hour-junction-dispensary`/);
  assert.match(hoursPage, /"@type": "FAQPage"/);
  assert.match(hoursPage, /Is Gas Junction Cannabis a 24-hour dispensary in The Junction\?/);
  assert.match(hoursPage, /STORE\.hoursLabel/);
  assert.match(hoursPage, /2813 Dundas St W/);
  assert.match(hoursPage, /Keele &amp; Dundas/);
  assert.doesNotMatch(hoursPage, /Ottawa|Gatineau|ByWard/);
  assert.match(hoursPage, /not a Toronto-wide 24-hour directory/);
  assert.match(hoursPage, /\{STORE\.addressLine\}/);
  assert.match(sitemap, /\$\{BASE\}\/24-hour-junction-dispensary/);
});

test("city geo URL stays noindexed while Junction geo owner is indexed and unique", () => {
  const verticals = readFileSync("app/lib/organicVerticalPages.ts", "utf8");
  assert.match(cityPage, /index: false/);
  assert.match(cityPage, /canonical: STORE\.origin/);
  assert.doesNotMatch(sitemap, /weed-dispensary-toronto/);
  assert.match(verticals, /h1: "Weed Dispensary in The Junction"/);
  assert.match(verticals, /Is Gas Junction Cannabis a weed dispensary in The Junction\?/);
  assert.match(verticals, /not a city-wide Toronto dispensary listing/);
  assert.match(seoPages, /slug: "weed-store-near-the-junction"[\s\S]*canonicalPath: "\/weed-dispensary-junction"/);
  assert.match(infoPage, /href="\/24-hour-junction-dispensary"/);
  assert.match(infoPage, /href="\/visit"/);
  assert.match(infoPage, /href="\/weed-dispensary-junction"/);
  assert.match(infoPage, /"@type": "FAQPage"/);
});

test("five flower tiers have unique H1, title, and FAQ questions", () => {
  const h1s = [...tierCopy.matchAll(/^\s+(EXOTIC|PREMIUM|"AAA\+"|AA|BUDGET): "([^"]+)"/gm)].map(
    (match) => match[2],
  );
  assert.equal(h1s.length, 5, `expected 5 H1s, got ${h1s.join(" | ")}`);
  assert.equal(new Set(h1s).size, 5);
  for (const banned of ["in Toronto", "Cannabis Flower in Toronto"]) {
    assert.ok(h1s.every((h1) => !h1.includes(banned)), `H1 still uses ${banned}`);
  }

  const titles = [...tierCopy.matchAll(/seoTitle: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(titles.length, 5);
  assert.equal(new Set(titles).size, 5);

  const questions = [...tierCopy.matchAll(/q: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(questions.length, 15);
  assert.equal(new Set(questions).size, 15);

  assert.match(tierPage, /LocalSeoMesh/);
  assert.match(tierPage, /"@type": "FAQPage"/);
});

test("internal mesh links homepage, visit, 24h, Junction geo, and tiers", () => {
  assert.match(storeFile, /href: "\/", label: "Store homepage"/);
  assert.match(storeFile, /href: "\/visit"/);
  assert.match(storeFile, /href: "\/weed-dispensary-junction"/);
  assert.match(storeFile, /href: "\/24-hour-junction-dispensary"/);
  assert.match(mesh, /LOCAL_MESH_LINKS/);
  assert.match(home, /href="\/24-hour-junction-dispensary"/);
  assert.match(home, /href="\/weed-dispensary-junction"/);
  assert.match(home, /href="\/visit"/);
  assert.match(visit, /href="\/24-hour-junction-dispensary"/);
  assert.match(visit, /href="\/weed-dispensary-junction"/);
  assert.match(hoursPage, /href="\/visit"/);
  assert.match(hoursPage, /LocalSeoMesh/);
  assert.match(footer, /href="\/24-hour-junction-dispensary"/);
  assert.match(navbar, /href: "\/24-hour-junction-dispensary"/);
  assert.match(storeFile, /LOCAL_MESH_LINKS/);
});

test("homepage remains the NAP / hours / map hub and visit keeps schema match", () => {
  assert.match(home, /STORE\.mapsEmbedUrl/);
  assert.match(home, /STORE\.hoursLabel/);
  assert.match(home, /STORE\.streetAddress/);
  assert.match(home, /"@type": "FAQPage"/);
  assert.match(home, /HOME_FAQS/);
  assert.match(visit, /"@type": "FAQPage"/);
  assert.match(visit, /VISIT_FAQS/);
  assert.match(visit, /Is the Junction shop open overnight\?/);
  assert.doesNotMatch(visit, /"@type": "CannabisStore"/);
});

test("Wave 1 Organic does not add smoke SEO verticals or sister-store language", () => {
  assert.doesNotMatch(hoursPage, /nicotine-pouches|grabba-/i);
  assert.doesNotMatch(publicBundle, /sister store|also visit our other locations|Ottawa|Gatineau|ByWard/i);
  assert.doesNotMatch(tierCopy, /2813 Dundas|437[- )]|24 hours/i);
});
