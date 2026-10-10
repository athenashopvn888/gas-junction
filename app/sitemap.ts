import { getLiveMenu } from "./lib/liveMenu";
import type { MetadataRoute } from "next";
import { DELIVERY_GUIDE_REGISTRY, DELIVERY_GUIDE_STORE } from "./lib/deliveryGuideRegistry";
import { TIER_CONFIG, CATEGORY_CONFIG } from "./lib/products";
import { SEO_PAGES } from "./lib/seoPages";
import { RESOURCE_PAGES } from "./resources/resourceData";

// Products come from the same loader as /api/tv-data on every request.
export const dynamic = "force-dynamic";

// ONE product loader (same as /api/tv-data), filled per request by __loadMenuData(). Grok 2026-10-09.
let __menu!: Awaited<ReturnType<typeof getLiveMenu>>;
async function __loadMenuData(): Promise<void> {
  __menu = await getLiveMenu();

}

const BASE = "https://www.gasjunctioncannabis.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    await __loadMenuData();
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/visit`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/weed-dispensary-toronto`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/24-hour-junction-dispensary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/cannabis-delivery-junction`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/native-cigarettes-junction`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/nicotine-vape-junction`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/vape-shop-the-junction`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/weed-dispensary-junction`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/careers/budtender`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/hours`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/delivery`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  /* Tier pages */
  const tierPages: MetadataRoute.Sitemap = Object.values(TIER_CONFIG).map((t) => ({
    url: `${BASE}/${t.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  /* Item category pages */
  const itemPages: MetadataRoute.Sitemap = Object.values(CATEGORY_CONFIG).map((c) => ({
    url: `${BASE}/items/${c.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  /* Flower detail pages */
  const flowerPages: MetadataRoute.Sitemap = __menu.flowers.map((f) => ({
    url: `${BASE}/flower/${f.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* Item detail pages */
  const itemDetailPages: MetadataRoute.Sitemap = __menu.items.map((i) => ({
    url: `${BASE}/item/${i.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* SEO landing pages — omit city-head URLs that are noindexed */
  const demotedSeoSlugs = new Set([
    "toronto-weed-dispensary",
    "cheap-weed-toronto",
    "dispensary-near-me-toronto",
    "native-cigarettes-toronto",
    "nicotine-vapes-toronto",
    "weed-store-near-the-junction",
  ]);
  const seoPages: MetadataRoute.Sitemap = SEO_PAGES.filter((p) => !demotedSeoSlugs.has(p.slug)).map((p) => ({
    url: `${BASE}/info/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const resourcePages: MetadataRoute.Sitemap = RESOURCE_PAGES.map((page) => ({
    url: page.slug ? `${BASE}/resources/${page.slug}` : `${BASE}/resources`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.slug ? 0.65 : 0.75,
  }));

  const deliveryGuidePages: MetadataRoute.Sitemap = DELIVERY_GUIDE_REGISTRY.map((guide) => ({ url: `https://${DELIVERY_GUIDE_STORE.domain}/guides/${guide.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.75 }));
  return [...deliveryGuidePages, ...staticPages, ...tierPages, ...itemPages, ...flowerPages, ...itemDetailPages, ...seoPages, ...resourcePages];
}
