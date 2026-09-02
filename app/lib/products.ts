/* -- Product & Item Types -- */
export interface FlowerProduct {
  sku: string;
  name: string;
  slug: string;
  tier: string;
  type: "indica" | "sativa" | "hybrid";
  isHot: boolean;
  isSale: boolean;
  thc: string;
  price3g: PricePoint | null;
  price5g: PricePoint | null;
  price14g: PricePoint | null;
  price28g: PricePoint | null;
  image: string;
}

export interface PricePoint {
  regular: number;
  sale: number | null;
}

export interface ItemProduct {
  sku: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  thc: string;
  mg: string;
  price: string;
  image: string;
  promoImage: string | null;
}

/* ── Data imports (static fallback) ── */
import flowersJson from "./flowers.json";
import itemsJson from "./items.json";

export const allFlowers: FlowerProduct[] = flowersJson as FlowerProduct[];
export const allItems: ItemProduct[] = itemsJson as ItemProduct[];

/* ── Live stock fetch from Apps Script ── */
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || "";

interface LiveStockResponse {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  storeCode?: string;
  stockDate?: string;
}

/**
 * Fetch live stock-filtered products from Apps Script endpoint.
 * Used at build time (getStaticProps / generateStaticParams).
 * Falls back to static JSON if endpoint not configured.
 */
export async function fetchLiveProducts(): Promise<{
  flowers: FlowerProduct[];
  items: ItemProduct[];
  isLive: boolean;
  stockDate: string | null;
}> {
  if (!APPS_SCRIPT_URL) {
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }

  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?store=GJC01`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: data.flowers || allFlowers,
      items: data.items || allItems,
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }
}

export const TIER_CONFIG: Record<
  string,
  {
    name: string; slug: string; color: string; icon: string; tagline: string; banner: string;
    unitPrice: number; /* $/g */
    deal3g: { label: string; total: string; price: number } | null; /* 3g bundle pricing */
    deal6g: { label: string; total: string; price: number } | null; /* 6g bundle pricing (top 3 only) */
  }
> = {
  EXOTIC: {
    name: "Exotic Weed",
    slug: "exotic-weed",
    color: "#f59e0b",
    icon: "\uD83D\uDD25",
    tagline: "Explore the exotic flower tier",
    banner: "/banners/exotics_banner.webp",
    unitPrice: 20,
    deal3g: { label: "3g bundle", total: "3G", price: 40 },
    deal6g: { label: "6g bundle", total: "6G", price: 60 },
  },
  PREMIUM: {
    name: "Premium Weed",
    slug: "premium-weed",
    color: "#a78bfa",
    icon: "\uD83D\uDC8E",
    tagline: "Hand-picked connoisseur grade \u00B7 THC 32-34%",
    banner: "/banners/premium_banner.webp",
    unitPrice: 15,
    deal3g: { label: "3g bundle", total: "3G", price: 30 },
    deal6g: { label: "6g bundle", total: "6G", price: 45 },
  },
  "AAA+": {
    name: "AAA+ Weed",
    slug: "aaa-weed",
    color: "#22d3ee",
    icon: "\u26A1",
    tagline: "Heavy hitters, proven strains \u00B7 THC 30-32%",
    banner: "/banners/aaa_plus_banner.webp",
    unitPrice: 10,
    deal3g: { label: "3g bundle", total: "3G", price: 20 },
    deal6g: { label: "6g bundle", total: "6G", price: 30 },
  },
  AA: {
    name: "AA Weed",
    slug: "aa-weed",
    color: "#34d399",
    icon: "\u2726",
    tagline: "Quality daily drivers \u00B7 THC 27-29%",
    banner: "/banners/aa_banner.webp",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
  },
  BUDGET: {
    name: "Budget Weed",
    slug: "budget-weed",
    color: "#94a3b8",
    icon: "\uD83D\uDCB0",
    tagline: "Shreds & value OZs \u00B7 From $40/oz",
    banner: "/banners/budget_banner.webp",
    unitPrice: 3,
    deal3g: { label: "$10 / 3g Special", total: "3G", price: 10 },
    deal6g: null,
  },
};

/* ── Item category config ── */
export interface CategoryInfo {
  name: string; slug: string; color: string; icon: string; banner?: string;
  seoTitle: string; seoIntro: string; seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const CATEGORY_CONFIG: Record<string, CategoryInfo> = {
  EDIBLES: {
    banner: "/banners/edibles_prerolls_more_banner.webp",
    name: "Edibles", slug: "edibles", color: "#f97316", icon: "🍬",
    seoTitle: "Cannabis Edibles in Toronto | Gas Junction Cannabis",
    seoIntro: "Browse edibles category information at Gas Junction Cannabis in Toronto.",
    seoDescription: "Review edible-related menu categories at Gas Junction Cannabis in Toronto and confirm current menu details before visiting. This page is intended for general category browsing and does not promise current product listings.",
    faqs: [
      { q: "What edible information can shoppers review?", a: "Customers can review edible-related category information and confirm current menu details before visiting Gas Junction Cannabis." },
      { q: "Does this page guarantee current edible listings?", a: "No. This page is for general category browsing; customers should confirm current menu details before visiting." },
      { q: "How does this page help Toronto shoppers?", a: "It helps shoppers find the Gas Junction Cannabis edibles category and review store/menu information in one place." },
    ],
  },
  "VAPE PENS": {
    banner: "/banners/01_Vape_Pens.webp",
    name: "Nicotine Vape", slug: "vapes", color: "#8b5cf6", icon: "💨",
    seoTitle: "Nicotine Vapes Toronto | Gas Junction Cannabis",
    seoIntro: "Explore Gas Junction Cannabis nicotine vape products in a category kept separate from THC vape products. Nicotine products are for adults 19+ and contain nicotine, which is addictive.",
    seoDescription: "Browse the nicotine vape category at Gas Junction Cannabis for products classified under Nicotine Vape. THC vape products remain in the separate THC Vape category so the two product types stay clearly distinguished.",
    faqs: [
      { q: "Are Nicotine Vape and THC Vape the same category?", a: "No. Gas Junction Cannabis keeps nicotine vape products separate from THC vape products. Nicotine Vape is under /items/vapes, while THC Vape remains under /items/vape-disposables." },
      { q: "Who is the Nicotine Vape category for?", a: "Nicotine products are for adults 19+. Nicotine is addictive." },
      { q: "Does this category show current stock or availability?", a: "Use the current product information presented while browsing. This category copy does not make separate stock or availability claims." },
    ],
  },
  "VAPE DISPOSABLE": {
    banner: "/banners/02_Vape_Disposable.webp",
    name: "THC Vape", slug: "vape-disposables", color: "#a78bfa", icon: "💨",
    seoTitle: "Disposable Vapes Toronto — THC Disposable Pens",
    seoIntro: "Review disposable vape category information at Gas Junction Cannabis in Toronto.",
    seoDescription: "Gas Junction Cannabis includes disposable vape category information for Toronto shoppers. Product details and listings can change, so confirm the current menu before visiting 2813 Dundas St W in The Junction.",
    faqs: [
      { q: "What disposable vape information can shoppers review?", a: "Visitors can use this page to review disposable vape category information and then confirm current menu details before visiting." },
      { q: "Does disposable vape listings change?", a: "Yes. Product selection can change, so shoppers should use the current menu before making a special trip." },
    ],
  },
  CONCENTRATES: {
    banner: "/banners/03_Concentrates.webp",
    name: "Concentrates", slug: "concentrates", color: "#f59e0b", icon: "💎",
    seoTitle: "Cannabis Concentrates in Toronto | Gas Junction Cannabis",
    seoIntro: "Browse concentrates category information at Gas Junction Cannabis in Toronto.",
    seoDescription: "Review concentrate-related menu categories at Gas Junction Cannabis in Toronto and confirm current menu details before visiting. This page is intended for general category browsing and does not promise current product listings.",
    faqs: [
      { q: "What concentrate information can shoppers review?", a: "Visitors can use this page to review concentrates category information and then confirm current menu details before visiting Gas Junction Cannabis." },
      { q: "Does this page guarantee current concentrate listings?", a: "No. Category details can change, so customers should confirm the current menu before visiting." },
    ],
  },
  PREROLLS: {
    banner: "/banners/04_Pre_Rolls.webp", name: "Pre-Rolls", slug: "prerolls", color: "#22c55e", icon: "🚬",
    seoTitle: "Pre-Rolls Toronto — Ready-to-Smoke Cannabis Joints",
    seoIntro: "Browse pre-roll category information at Gas Junction Cannabis in Toronto.",
    seoDescription: "Gas Junction Cannabis includes pre-roll category information for Toronto shoppers. Review the category, confirm current menu details, and visit 2813 Dundas St W during posted store hours.",
    faqs: [
      { q: "What pre-roll information can shoppers review?", a: "Visitors can review pre-roll category information and then confirm current menu details before visiting Gas Junction Cannabis." },
      { q: "Does this page guarantee current pre-roll listings?", a: "No. Category details can change, so customers should confirm the current menu before visiting." },
    ],
  },
  "ADD ONS": {
    banner: "/banners/05_Accessories.webp",
    name: "Accessories", slug: "add-ons", color: "#34d399", icon: "➕",
    seoTitle: "Cannabis Accessories Toronto — Grinders, Papers, Lighters & More",
    seoIntro: "Review cannabis accessory category information at Gas Junction Cannabis in Toronto.",
    seoDescription: "Gas Junction Cannabis includes accessory category information for Toronto shoppers. Check the current menu or contact the store before visiting 2813 Dundas St W for a specific accessory.",
    faqs: [
      { q: "What accessory information can shoppers review?", a: "Visitors can review accessory category information and confirm current details before visiting Gas Junction Cannabis." },
    ],
  },
  "MAGIC & OTHERS": {
    name: "Magic Stuff", slug: "magic", color: "#64748b", icon: "*",
    seoTitle: "Magic Stuff - Specialty Items",
    seoIntro: "Browse current menu for listed specialty products. Listings may vary by store.",
    seoDescription: "Specialty items are listed when they are carried on the menu. Product listings may vary by store and by day. Check current category details before visiting.",
    faqs: [
      { q: "What specialty items are listed?", a: "Selection varies by store and by day. Check the current menu for listed specialty products." },
      { q: "Do listings vary by location?", a: "Yes. Specialty item listings may vary by store, so please check the current menu for this location." },
    ],
  },
  CIGARETTES: {
    banner: "/banners/native-cigarette-offer-20260822.webp",
    name: "Cigarettes", slug: "cigarettes", color: "#78716c", icon: "🏷️",
    seoTitle: "Native Cigarettes Toronto — Discount Tobacco at Gas Junction Cannabis",
    seoIntro: "Native cigarette category information at Gas Junction Cannabis, Toronto.",
    seoDescription: "Gas Junction Cannabis includes cigarette category information for Toronto shoppers. Located at 2813 Dundas St W in The Junction, the store is open 24 hours daily.",
    faqs: [
      { q: "Do you sell cigarettes at Gas Junction Cannabis?", a: "The site includes a cigarettes category for Gas Junction Cannabis shoppers." },
      { q: "What cigarette brands do you carry?", a: "Brand mix can change. Check the current menu or contact the store before visiting for a specific cigarette brand." },
      { q: "Are your cigarette prices competitive?", a: "Check current in-store pricing before visiting, since cigarette selection and pricing can change." },
    ],
  },
};

/* ── Helper functions ── */
export function getFlowersByTier(tier: string): FlowerProduct[] {
  return allFlowers.filter(
    (f) => f.tier.toUpperCase() === tier.toUpperCase()
  );
}

export function getFlowerBySlug(slug: string): FlowerProduct | undefined {
  return allFlowers.find((f) => f.slug === slug);
}

export function getItemsByCategory(category: string): ItemProduct[] {
  return allItems.filter(
    (i) => i.category.toUpperCase() === category.toUpperCase()
  );
}

export function getTierFromSlug(
  slug: string
): { key: string; config: (typeof TIER_CONFIG)[string] } | undefined {
  const entry = Object.entries(TIER_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getCategoryFromSlug(
  slug: string
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const entry = Object.entries(CATEGORY_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getLowestPrice(flower: FlowerProduct): number | null {
  const prices = [flower.price3g, flower.price5g, flower.price14g, flower.price28g]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular);
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(p: PricePoint | null): string {
  if (!p) return "—";
  if (p.sale !== null) return `$${p.sale}`;
  return `$${p.regular}`;
}
