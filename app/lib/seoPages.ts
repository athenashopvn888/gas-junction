// Geo-targeted SEO landing pages for Gas Junction Cannabis.

const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly { name: string; image: string; sourceSlug?: string }[];
    disclosure: string;
    theme?: "cigarettes" | "nicotine";
    menuHref?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    identityStrip?: string;
    featuredHeading?: string;
    featuredIntro?: string;
    warning?: string;
  };
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  noindex?: boolean;
  canonicalToHome?: boolean;
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "toronto-weed-dispensary",
    title: "Toronto Weed Dispensary | Gas Junction Cannabis",
    metaDescription:
      "Gas Junction Cannabis is a Junction walk-in shop at 2813 Dundas St W near Keele & Dundas. Use the homepage for store details; this city URL is not the primary listing.",
    h1: "Toronto Weed Dispensary - Gas Junction Cannabis",
    icon: "\u2728",
    heroTagline:
      "2813 Dundas St W in The Junction | Open 24 hours daily | Walk-ins welcome",
    banner: "",
    noindex: true,
    canonicalToHome: true,
    sections: [
      {
        heading: "A Toronto Dispensary in The Junction",
        body:
          "Gas Junction Cannabis is located at 2813 Dundas St W, Toronto, ON M6P 1Y6, serving adult 19+ shoppers in The Junction and nearby west Toronto neighbourhoods. The store carries flower, pre-rolls, vapes, edibles, concentrates, accessories, and cigarettes, with menu details listed online before you visit.",
      },
      {
        heading: "Flower Tiers for Different Budgets",
        body:
          "The menu is organized into clear flower tiers so shoppers can compare everyday value options, familiar favourites, and higher-end picks by tier. Listings, pricing, and product details can change, so use the current menu to confirm what is listed before coming in.",
      },
      {
        heading: "Easy to Reach on Dundas St W",
        body:
          "The shop sits on Dundas St W near Keele in The Junction, close to TTC routes, High Park North, Junction Triangle, Bloor West Village, Runnymede, and Annette Street. Walk in during posted hours or call +1 (437) 291-0948 for store questions. Use the how-to-get-here page for transit and parking.",
      },
    ],
    faqs: [
      {
        q: "Where is Gas Junction Cannabis located?",
        a: "Gas Junction Cannabis is located at 2813 Dundas St W, Toronto, ON M6P 1Y6, in The Junction area.",
      },
      {
        q: "What are the hours for Gas Junction Cannabis?",
        a: "The listed store hours are 24 hours daily.",
      },
      {
        q: "What products does Gas Junction Cannabis carry?",
        a: "The site includes category information for flower, pre-rolls, vapes, edibles, concentrates, accessories, cigarettes, and other menu sections. Current listings should be confirmed on the menu before visiting.",
      },
      {
        q: "Can I walk in?",
        a: "Yes. Gas Junction Cannabis is set up for walk-in shopping for adults 19+ during posted store hours.",
      },
    ],
  },

  {
    slug: "cheap-weed-toronto",
    title: "Cheap Weed Toronto | Gas Junction Cannabis",
    metaDescription:
      "Compare budget cannabis options at Gas Junction Cannabis in The Junction. Visit 2813 Dundas St W near Keele & Dundas and confirm current flower pricing before shopping.",
    h1: "Cheap Weed Toronto",
    icon: "$",
    heroTagline:
      "Budget-friendly flower options | The Junction | Open 24 hours daily",
    banner: "",
    noindex: true,
    canonicalToHome: true,
    sections: [
      {
        heading: "Value Options Without the Guesswork",
        body:
          "Gas Junction Cannabis organizes flower by tier so shoppers can compare budget, AA, AAA+, premium, and exotic-style options more easily. The goal is simple: make it easier to find a product level that fits the session and the spend.",
      },
      {
        heading: "Check Current Pricing Before You Visit",
        body:
          "Cannabis pricing and listings can change as stock rotates. Use the current menu to confirm product details, bundle information, and category listings before heading to the store at 2813 Dundas St W.",
      },
      {
        heading: "Convenient for Junction Shoppers",
        body:
          "The Junction location is useful for shoppers around Dundas St W, Keele, High Park North, Junction Triangle, Bloor West Village, Runnymede, and Annette Street.",
      },
    ],
    faqs: [
      {
        q: "Where can I find budget weed options in Toronto?",
        a: "Gas Junction Cannabis lists budget-oriented flower tiers and menu categories for adults 19+ at 2813 Dundas St W in Toronto.",
      },
      {
        q: "Does the site guarantee current prices?",
        a: "No. The website helps shoppers browse category and menu information, but current product details should be confirmed before visiting.",
      },
      {
        q: "Is Gas Junction Cannabis open late?",
        a: "The listed hours are 24 hours daily.",
      },
    ],
  },

  {
    slug: "native-cigarettes-toronto",
    title: "Native Cigarettes Toronto | Gas Junction Cannabis",
    metaDescription:
      "Gas Junction Cannabis includes cigarette category information for Toronto shoppers at 2813 Dundas St W in The Junction. Confirm current in-store selection before visiting.",
    h1: "Native Cigarettes Toronto",
    icon: "\uD83C\uDFF7\uFE0F",
    heroTagline:
      "Cigarette category information | 2813 Dundas St W | Adults 19+",
    heroPreview: {
      eyebrow: "Gas Junction Cannabis · 2813 Dundas St W, The Junction",
      intro: "Cigarette category information for Toronto shoppers",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
    banner: "",
    sections: [
      {
        heading: "Cigarettes and Cannabis in One Stop",
        body:
          "Gas Junction Cannabis includes a cigarette category alongside cannabis flower, pre-rolls, vapes, edibles, concentrates, and accessories. Selection can rotate, so current cigarette listings should be confirmed in store.",
      },
      {
        heading: "The Junction Location",
        body:
          "The store is located at 2813 Dundas St W in The Junction, close to Keele & Dundas. It is built for straightforward walk-in shopping during posted store hours.",
      },
      {
        heading: "Adult 19+ Shopping",
        body:
          "Cannabis and tobacco-related purchases are for adults 19+. Bring valid government-issued ID and check current store information before making a special trip.",
      },
      {
        heading: "Junction neighbourhood owner",
        body:
          "The Junction-scoped cigarette page is Native cigarettes in The Junction. Use that URL for Keele & Dundas / Dundas West intent, then the cigarette category for current listings.",
      },
    ],
    faqs: [
      {
        q: "Does Gas Junction Cannabis sell cigarettes?",
        a: "The website includes a cigarette category. Current in-store selection and listings should be confirmed before visiting.",
      },
      {
        q: "Where is the store?",
        a: "Gas Junction Cannabis is at 2813 Dundas St W, Toronto, ON M6P 1Y6.",
      },
      {
        q: "What are the listed hours?",
        a: "The listed hours are 24 hours daily.",
      },
      {
        q: "Where is the Junction cigarette neighbourhood page?",
        a: "Use Native cigarettes in The Junction for Keele & Dundas / Dundas West context. The cigarette category is the live listing.",
      },
    ],
  },

  {
    slug: "weed-store-near-the-junction",
    title: "Weed Dispensary in The Junction | Gas Junction Cannabis",
    absoluteTitle: true,
    metaDescription:
      "Gas Junction Cannabis is the Keele & Dundas weed dispensary in The Junction at 2813 Dundas St W. Neighbourhood flower tiers and walk-in notes — not a city-wide Toronto listing.",
    h1: "Weed Dispensary in The Junction",
    icon: "\uD83D\uDCCD",
    heroTagline:
      "Keele & Dundas walk-in · Junction Triangle · High Park North · How to get here",
    banner: "",
    sections: [
      {
        heading: "The Junction weed shop — not a Toronto city listing",
        body:
          "Gas Junction Cannabis is the walk-in counter at 2813 Dundas St W, just west of Keele & Dundas in The Junction. This page owns neighbourhood weed intent for that strip: people already on Dundas, cutting over from Junction Triangle, or coming north from High Park North. City-wide Toronto URLs on this site are legacy paths, not the listing to use.",
      },
      {
        heading: "Catchment around Keele & Dundas",
        body:
          "Use this guide if you searched for a weed store near The Junction, Junction Triangle, High Park North, Bloor West Village, Runnymede, or Annette Street. Street-by-street transit and parking live on the how-to-get-here page. Overnight and open-now hours live on the 24-hour Junction dispensary guide.",
      },
      {
        heading: "Flower tiers at this Dundas West counter",
        body:
          "Flower is stacked as Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed so you can compare bands without a sales script. The same stop covers pre-rolls, vapes, edibles, concentrates, accessories, and cigarettes. Confirm a named SKU on the floor before a special trip.",
      },
    ],
    faqs: [
      {
        q: "Is this the Junction weed dispensary or a Toronto city page?",
        a: "This is the neighbourhood weed owner for Gas Junction Cannabis at 2813 Dundas St W in The Junction, near Keele & Dundas. It is not a city-wide Toronto dispensary listing.",
      },
      {
        q: "Does this shop cover Junction Triangle and High Park North?",
        a: "Yes. Those streets and pockets are the walk-up catchment, along with Bloor West Village, Runnymede, and Annette Street. The counter itself sits on Dundas just west of Keele.",
      },
      {
        q: "Where do I go for directions or overnight hours?",
        a: "Use the how-to-get-here page for transit and parking. Use the 24-hour Junction dispensary guide for late-night and open-now hours. The homepage keeps address, hours, phone, and the map.",
      },
      {
        q: "Do you deliver, and do you sell cigarettes or nicotine vapes here?",
        a: "Neighbourhood delivery is on cannabis delivery in The Junction. Cigarettes and nicotine vapes have Junction pages that link to their category menus. Confirm current listings before a special trip.",
      },
    ],
  },

  {
    slug: "dispensary-near-me-toronto",
    title: "Cannabis Dispensary Near Me Toronto | Gas Junction Cannabis",
    metaDescription:
      "Find Gas Junction Cannabis at 2813 Dundas St W in The Junction. Hours, location, and adult 19+ cannabis category information for the Keele & Dundas walk-in.",
    h1: "Cannabis Dispensary Near Me - Toronto",
    icon: "+",
    heroTagline:
      "The Junction dispensary | 2813 Dundas St W | Open 24 hours daily",
    banner: "",
    noindex: true,
    canonicalToHome: true,
    sections: [
      {
        heading: "A Nearby Option in The Junction",
        body:
          "If you are searching for a cannabis dispensary near Keele & Dundas, Gas Junction Cannabis is at 2813 Dundas St W in The Junction. The site gives adults 19+ a simple way to review store details and category information before visiting.",
      },
      {
        heading: "Products and Categories",
        body:
          "Gas Junction Cannabis includes category pages for flower, edibles, vapes, concentrates, pre-rolls, accessories, cigarettes, and more. Product listings changes, so current menu details should be confirmed before you make the trip.",
      },
      {
        heading: "Hours, Address, and Contact",
        body:
          "The listed hours are 24 hours daily. Visit 2813 Dundas St W, Toronto, ON M6P 1Y6, or call +1 (437) 291-0948 for store questions.",
      },
    ],
    faqs: [
      {
        q: "What is the address for Gas Junction Cannabis?",
        a: "2813 Dundas St W, Toronto, ON M6P 1Y6.",
      },
      {
        q: "Do I need an appointment?",
        a: "No appointment is listed as required. Adults 19+ can walk in during posted hours.",
      },
      {
        q: "Does Gas Junction Cannabis serve west Toronto neighbourhoods?",
        a: "The store is in The Junction and is useful for nearby areas such as Keele, High Park North, Junction Triangle, Bloor West Village, Runnymede, and Annette Street.",
      },
    ],
  },
  {
    slug: "nicotine-vapes-toronto",
    title: "Nicotine Vapes in Toronto | Gas Junction Cannabis",
    absoluteTitle: true,
    metaDescription: "Adults 19+: review six verified nicotine vape product pages from Gas Junction Cannabis in Toronto, then check /items/vapes for the current category. Nicotine is addictive.",
    h1: "Nicotine Vapes at Gas Junction Cannabis",
    icon: "NV",
    heroTagline: "Adults 19+ · Nicotine is addictive.",
    heroPreview: {
      eyebrow: "GAS JUNCTION CANNABIS • THE JUNCTION • ADULTS 19+",
      intro: "Searching for nicotine vapes near me in The Junction? This adult-only Gas Junction Cannabis guide features six verified VAPE PENS product pages. Compare the supported product names, then use /items/vapes for the current nicotine category. Product details can change. Nicotine is addictive.",
      products: [
        { name: "Geek Promax 5% — 30K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg", sourceSlug: "geek-promax-5-30k-puffs" },
        { name: "Geek Universe — 25K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp", sourceSlug: "geek-universe-25k-puffs" },
        { name: "Level X G2 Pod", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1086-Level-X-G2-pod.webp", sourceSlug: "level-x-g2-pod" },
        { name: "NEXA PIX — 30K Puffs — Many Flavors", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp", sourceSlug: "nexa-pix-30k-puffs-many-flavors" },
        { name: "OVNS 10000 5% — 10K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg", sourceSlug: "ovns-10000-5-10k-puffs" },
        { name: "OVNS Disposable 5% — 8 mL — Many Flavors", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp", sourceSlug: "ovns-disposable-5-8ml-many-flavors" },
      ],
      disclosure: "Featured cards are verified starting points, not guarantees of current stock, price or availability.",
      theme: "nicotine",
      menuHref: "/items/vapes",
      primaryLabel: "Browse Nicotine Vapes",
      secondaryLabel: "Compare the Six Featured Items",
      secondaryHref: "#featured-vapes",
      identityStrip: "Gas Junction Cannabis | The Junction | Adults 19+ | Nicotine is addictive.",
      featuredHeading: "Six Verified Gas Junction Vape Cards",
      featuredIntro: "This shortlist contains verified Geek, Level X, NEXA and OVNS VAPE PENS product pages. Use each card for its supported display name, then rely on /items/vapes for the current Gas Junction Cannabis category listing.",
      warning: "Adults 19+. Nicotine is addictive.",
    },
    sections: [
      { heading: "Read Each Product Format Carefully", body: "One verified page identifies a Level X G2 Pod, while another explicitly identifies an OVNS disposable. Keep those formats attached only to their respective products and do not relabel another featured item by assumption." },
      { heading: "Puff Counts Identify Listings", body: "Several verified names include puff counts. Use those numbers to distinguish the listings, not as guarantees of duration, performance or superiority." },
      { heading: "Keep Nicotine and Cannabis Vape Routes Separate", body: "This adult-only Gas Junction Cannabis guide uses VAPE PENS products under /items/vapes. THC and cannabis vape products under /items/vape-disposables are excluded." },
      { heading: "Review the Current Toronto Category", body: "Before choosing, open /items/vapes and the individual product page for current supported details. This guide does not claim prices, stock or guaranteed availability." },
      { heading: "Junction neighbourhood owner", body: "Keele & Dundas / Dundas West nicotine-vape intent now lives on nicotine vape in The Junction. That page links to /items/vapes and does not invent SKUs or prices." },
    ],
    faqs: [
      { q: "Where should I check Gas Junction Cannabis’s current nicotine selection?", a: "Use /items/vapes. The six featured cards are verified starting points while the current category listing controls selection information." },
      { q: "Does every featured item use the same format?", a: "No. The verified set explicitly identifies a Level X G2 Pod and an OVNS disposable. Read every current product page for its supported format and details." },
      { q: "Does this page include cannabis vapes?", a: "No. It covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded." },
      { q: "Where is the Junction nicotine vape page?", a: "Use nicotine vape in The Junction for neighbourhood context, then /items/vapes for the current category." },
    ],
  },
];

const LEGACY_SEO_REDIRECTS: Record<string, string> = {
  "york-weed-dispensary": "toronto-weed-dispensary",
  "cheap-weed-york": "cheap-weed-toronto",
  "native-cigarettes-york": "native-cigarettes-toronto",
  "weed-store-near-toronto": "weed-store-near-the-junction",
  "weed-store-near-mississauga": "weed-store-near-the-junction",
  "dispensary-near-me-york": "dispensary-near-me-toronto",
};

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

export function getLegacySeoRedirect(slug: string): string | undefined {
  return LEGACY_SEO_REDIRECTS[slug];
}
