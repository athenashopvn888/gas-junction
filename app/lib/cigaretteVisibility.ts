import { isKeptSmokeName, isRealCigaretteItem } from "./cigMarkers.ts";
import { SHOW_CIGARETTES } from "./siteConfig.ts";
import { DELIVERY_GUIDE_REGISTRY } from "./deliveryGuideRegistry.ts";
import itemsJson from "./items.json" with { type: "json" };

export const VAPE_PAGE_PATH = "/items/vapes";

type ShelfItem = { category?: string; name?: string; slug?: string };

const shelfItems = itemsJson as ShelfItem[];

/** Rolling papers, Backwoods, and cigarillos stay visible. */
const EXEMPT_SMOKE = /\b(backwoods|cigarillos?|rolling papers?|raw papers?)\b/i;

const STATIC_CIGARETTE_PATHS = new Set([
  "/cigarettes",
  "/items/cigarettes",
  "/native-cigarettes-junction",
  "/info/native-cigarettes-toronto",
  "/info/native-cigarettes-york",
  "/resources/native-smokes",
  "/resources/native-smokes/native-cigarettes-guide",
]);

const KEPT_GUIDE_SLUGS = new Set(["backwoods-delivery-the-junction"]);

const PHRASES: Array<[RegExp, string]> = [
  [/Cigarette shoppers need brand and price notes\.\s*/gi, ""],
  [/Native cigarettes and nicotine vape have their own Junction pages\./gi, "Nicotine vape has its own Junction page."],
  [/Cigarettes and nicotine vapes have their own Junction pages\./gi, "Nicotine vapes have their own Junction page."],
  [/Cigarettes and nicotine vapes are walk-in categories/gi, "Nicotine vapes are a walk-in category"],
  [/a cigarette category and /gi, ""],
  [/Native cigarettes and /gi, ""],
  [/cigarettes and /gi, ""],
  [/delivery, cigarettes, or nicotine/gi, "delivery or nicotine"],
  [/, Native cigarettes,/gi, ","],
  [/Native cigarettes, /gi, ""],
  [/native cigarettes, /gi, ""],
  [/, and Native smokes prices/gi, ""],
  [/, and cigarettes\b/gi, ""],
  [/ and cigarettes\b/gi, ""],
  [/, or cigarettes\b/gi, ""],
  [/ or cigarettes\b/gi, ""],
  [/, cigarettes,/gi, ","],
  [/cigarettes, /gi, ""],
  [/cigarette category/gi, ""],
  [/\bcigarette\b/gi, ""],
  [/\bcigarettes\b/gi, ""],
  [/tobacco-related /gi, ""],
  [/\btobacco\b/gi, ""],
  [/Native smokes /gi, ""],
  [/native smokes /gi, ""],
  [/\bMarlboro\b/gi, ""],
  [/\bBelmont\b/gi, ""],
];

function normalizePath(pathname: string): string {
  const withoutQuery = pathname.split("?")[0].split("#")[0];
  if (withoutQuery.length > 1 && withoutQuery.endsWith("/")) return withoutQuery.slice(0, -1);
  return withoutQuery || "/";
}

export function isExemptSmokeItem(item: ShelfItem): boolean {
  return isKeptSmokeName(item.name, item.slug) || EXEMPT_SMOKE.test(`${item.name || ""} ${item.slug || ""}`);
}

export function isCigaretteItem(item: ShelfItem): boolean {
  return isRealCigaretteItem(item);
}

/** Non-cigarette products that currently live on the cigarette shelf (Backwoods, pouches, nicotine devices). */
export function isKeptCigaretteShelfItem(item: ShelfItem): boolean {
  return (item.category || "").toUpperCase() === "CIGARETTES" && !isCigaretteItem(item);
}

export function isCigaretteGuideSlug(slug: string): boolean {
  if (KEPT_GUIDE_SLUGS.has(slug)) return false;
  const guide = DELIVERY_GUIDE_REGISTRY.find((entry) => entry.slug === slug);
  return guide?.lane === "native_cig";
}

export function isCigaretteResourceSlug(slug: string): boolean {
  return slug === "native-smokes" || slug.startsWith("native-smokes/");
}

export function isCigarettePublicPath(pathname: string): boolean {
  const path = normalizePath(pathname);
  if (STATIC_CIGARETTE_PATHS.has(path)) return true;
  const item = path.match(/^\/item\/([^/]+)$/);
  if (item) {
    const slug = decodeURIComponent(item[1]);
    const match = shelfItems.find((entry) => entry.slug === slug);
    return match ? isCigaretteItem(match) : false;
  }
  const guide = path.match(/^\/guides\/([^/]+)$/);
  if (guide) return isCigaretteGuideSlug(decodeURIComponent(guide[1]));
  const resource = path.match(/^\/resources\/(.+)$/);
  if (resource) return isCigaretteResourceSlug(decodeURIComponent(resource[1]));
  return false;
}

export function isCigaretteHref(href: string): boolean {
  if (!href.startsWith("/")) return false;
  return isCigarettePublicPath(href);
}

/** Cigarette URLs stay on their own path. Nothing redirects them. */
export function cigaretteRedirectPath(_pathname: string): string | null {
  return null;
}

export function isCigaretteSitemapUrl(url: string): boolean {
  try {
    return isCigarettePublicPath(new URL(url).pathname);
  } catch {
    return isCigarettePublicPath(url);
  }
}

function cleanupCopy(text: string): string {
  return text
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/,\s*,+/g, ",")
    .replace(/\s+,/g, ",")
    .replace(/\(\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^\s*[,.\-–—]\s*/g, "")
    .trim();
}

export function scrubCigaretteCopy(text: string, showCigarettes: boolean): string {
  if (showCigarettes || !text) return text;
  let next = text;
  for (const [pattern, replacement] of PHRASES) next = next.replace(pattern, replacement);
  next = next
    .split(/(?<=[.!?])\s+/)
    .filter((sentence) => !/\b(cigarettes?|tobacco|marlboro|belmont|native smokes)\b/i.test(sentence))
    .join(" ");
  return cleanupCopy(next);
}

export function visibleCopy(text: string): string {
  return scrubCigaretteCopy(text, SHOW_CIGARETTES);
}

export function keptCigaretteShelfItems<T extends ShelfItem>(items: T[]): T[] {
  if (SHOW_CIGARETTES) return [];
  return items.filter((item) => isKeptCigaretteShelfItem(item));
}
