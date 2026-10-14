import strainGuideData from "./strainGuides.json";

/** GJC01 strain guides (50). Educational only: no prices, no potency numbers, no stock promises. Lineage is "commonly reported". */
export type StrainGuide = { slug: string; name: string; type: string; group: "indica" | "sativa" | "hybrid"; lineage: string; aroma: string; note: string; intro: string; about: string; tip: string; faq: { q: string; a: string }; compare: string[]; local: string; closer: string; h1: string; title: string; description: string };

export const STRAIN_GUIDE_STORE = {
  "code": "GJC01",
  "name": "Gas Junction Cannabis",
  "domain": "www.gasjunctioncannabis.com",
  "street": "2813 Dundas St W",
  "address": "2813 Dundas St W, Toronto, ON M6P 1Y6",
  "area": "The Junction",
  "near": "Keele & Dundas",
  "phone": "+1 (437) 291-0948",
  "hours": "open 24 hours daily",
  "delivery": true,
  "menuHref": "/"
} as const;

export const STRAIN_GUIDES = strainGuideData as StrainGuide[];
export const getStrainGuide = (slug: string) => STRAIN_GUIDES.find((guide) => guide.slug === slug);
