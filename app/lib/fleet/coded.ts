import { STORE } from "../store.ts";
import { FLEET_STORE_CODE, type Nap, type ResolvedBanner, type ResolvedPage } from "./types.ts";

const STORE_NAME = STORE.name;
const STORE_AREA = STORE.neighborhood;

export const CODED_NAP: Nap = {
  name: STORE.name,
  street: STORE.streetAddress,
  city: STORE.city,
  province: STORE.region,
  postalCode: STORE.postalCode,
  cityLine: `${STORE.city}, ${STORE.region} ${STORE.postalCode}`,
  area: STORE.neighborhood,
  intersection: STORE.intersection,
  areaLine: `${STORE.intersection}, ${STORE.neighborhood}`,
  phoneDisplay: STORE.phoneDisplay,
  phoneTel: STORE.phoneTel,
  hours: STORE.hoursLabel,
  mapsSearchUrl: STORE.mapsSearchUrl,
  mapsEmbedUrl: STORE.mapsEmbedUrl,
  lat: String(STORE.latitude),
  lng: String(STORE.longitude),
  schemaName: "Gas Junction Cannabis Dispensary Weed Delivery",
  website: STORE.origin,
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
    alt: `${STORE_NAME} in ${STORE_AREA} — Exotic, Premium and AAA+ top weed tiers`,
    title: `${STORE_NAME} top weed tiers — Exotic, Premium and AAA+`,
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
    alt: `${STORE_NAME} in ${STORE_AREA} — nicotine vapes and THC vapes`,
    title: `${STORE_NAME} nicotine vapes and THC vapes`,
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
    alt: `${STORE_NAME} in ${STORE_AREA} — 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: `${STORE_NAME} cigarette offer — 2 packs $5 mix and match, $25 carton`,
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
    alt: `${STORE_NAME} in ${STORE_AREA} — BB Full Flavor and Lights, Marlboro and Belmont premium cigarettes`,
    title: `${STORE_NAME} premium cigarettes — BB, Marlboro and Belmont`,
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

export function fleetVersion(contentVersion: number | null): string {
  return contentVersion == null ? `${FLEET_STORE_CODE}:coded` : `${FLEET_STORE_CODE}:${contentVersion}`;
}
