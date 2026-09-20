import type { MetadataRoute } from "next";
import { TIER_CONFIG, CATEGORY_CONFIG, allFlowers, allItems } from "./lib/products";
import { SEO_PAGES } from "./lib/seoPages";
import { RESOURCE_PAGES } from "./resources/resourceData";

const BASE = "https://www.gasjunctioncannabis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/visit`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/24-hour-junction-dispensary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/cannabis-delivery-junction`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/native-cigarettes-junction`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/nicotine-vape-junction`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/weed-dispensary-junction`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/careers/budtender`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
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
  const flowerPages: MetadataRoute.Sitemap = allFlowers.map((f) => ({
    url: `${BASE}/flower/${f.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  /* Item detail pages */
  const itemDetailPages: MetadataRoute.Sitemap = allItems.map((i) => ({
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

  return [...staticPages, ...tierPages, ...itemPages, ...flowerPages, ...itemDetailPages, ...seoPages, ...resourcePages];
}
