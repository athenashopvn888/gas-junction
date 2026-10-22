import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "GJC01";
export const FLEET_STORE_NAME = "Gas Junction Cannabis";
export const FLEET_AREA = "The Junction";
export const FLEET_DOMAIN = "www.gasjunctioncannabis.com";
export const FLEET_DOMAINS = ["www.gasjunctioncannabis.com", "gasjunctioncannabis.com"] as const;
export const FLEET_ORIGIN = "https://www.gasjunctioncannabis.com";

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://fleet.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#111827",
  bannerText: "#ffffff",
} as const;

/** Digits or formatted numbers. An article containing any of these is dropped. */
export const FLEET_BLOCKED_PHONES: readonly string[] = [];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fort York Cannabis takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

export const CODED_NAP: Nap = {
  name: "Gas Junction Cannabis",
  street: "2813 Dundas St W",
  city: "Toronto",
  province: "ON",
  postalCode: "M6P 1Y6",
  cityLine: "Toronto, ON M6P 1Y6",
  area: "The Junction",
  intersection: "Keele & Dundas",
  areaLine: "Keele & Dundas, The Junction",
  phoneDisplay: "+1 (437) 291-0948",
  phoneTel: "+14372910948",
  hours: "Open 24 Hours Daily",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=2813+Dundas+St+W%2C+Toronto%2C+ON+M6P+1Y6",
  mapsEmbedUrl: "https://maps.google.com/maps?q=2813%20Dundas%20St%20W%2C%20Toronto%2C%20ON%20M6P%201Y6&z=16&output=embed",
  lat: "43.66517",
  lng: "-79.46306",
  schemaName: "Gas Junction Cannabis Dispensary Weed Delivery",
  website: "https://www.gasjunctioncannabis.com",
};

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/core-top-weed-tier.webp",
    codedImage: "/banners/core-top-weed-tier.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — Exotic, Premium and AAA+ top weed tiers`,
    title: `${FLEET_STORE_NAME} top weed tiers — Exotic, Premium and AAA+`,
    textBar: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
    caption: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — nicotine vapes and THC vapes`,
    title: `${FLEET_STORE_NAME} nicotine vapes and THC vapes`,
    textBar: "Nicotine + THC vapes",
    caption: "Nicotine + THC vapes",
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/native-cigarette-offer-20260822.webp",
    codedImage: "/banners/native-cigarette-offer-20260822.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: `${FLEET_STORE_NAME} cigarette offer — 2 packs $5 mix and match, $25 carton`,
    textBar: "2 PACKS $5 / $25 CARTON",
    caption: "2 PACKS $5 / $25 CARTON",
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-bb-marlboro-belmont.webp",
    codedImage: "/banners/core-premium-bb-marlboro-belmont.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — BB Full Flavor and Lights, Marlboro and Belmont premium cigarettes`,
    title: `${FLEET_STORE_NAME} premium cigarettes — BB, Marlboro and Belmont`,
    textBar: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
    caption: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: "Gas Junction Cannabis is the 24-hour walk-in dispensary at 2813 Dundas St W in The Junction, near Keele & Dundas, with fast discreet local cannabis delivery or a visit to the dispensary. Flower, pre-rolls, vapes, edibles, concentrates, and adult 19+ info.",
    metaTitle: "",
    metaDescription: "Gas Junction Cannabis is the 24-hour walk-in dispensary at 2813 Dundas St W in The Junction, near Keele & Dundas, with fast discreet local cannabis delivery or a visit to the dispensary. Flower, pre-rolls, vapes, edibles, concentrates, and adult 19+ info.",
  },
  Contact: {
    description: "Visit Gas Junction Cannabis at 2813 Dundas St W, Toronto, ON M6P 1Y6 in The Junction. Open 24 hours daily. Walk-ins welcome.",
    metaTitle: "Contact Us — Gas Junction Cannabis | 2813 Dundas St W, The Junction",
    metaDescription: "Visit Gas Junction Cannabis at 2813 Dundas St W, Toronto, ON M6P 1Y6 in The Junction. Open 24 hours daily. Walk-ins welcome.",
  },
};
