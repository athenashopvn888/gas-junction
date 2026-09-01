export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "Gas Junction Cannabis uses the Exotic tier as a focused way to explore one defined level within its broader cannabis flower structure. This page stays specific to Exotic weed and flower while the main Toronto Weed page remains the broader store-level destination.",
    sections: [
      { heading: "Explore the Exotic Weed Tier", body: "The Exotic section is a dedicated category within Gas Junction Cannabis's flower architecture. It helps separate Exotic weed and cannabis flower from the other established tiers without turning the page into a general store overview." },
      { heading: "How Exotic Fits the Gas Junction Flower Structure", body: "Exotic sits alongside Premium, AAA+, AA and Budget as a distinct browsing tier. Shoppers looking for the wider Gas Junction Weed experience should continue to the broader Weed Dispensary in Toronto page." },
    ],
    faqs: [
      { q: "What is the Exotic tier at Gas Junction Cannabis?", a: "Exotic is one of Gas Junction Cannabis's defined cannabis flower tiers and has its own dedicated page." },
      { q: "Is the Exotic page the main Gas Junction Weed page?", a: "No. This page is limited to the Exotic flower tier, while the broader Weed Dispensary in Toronto page covers the wider store-level Weed topic." },
      { q: "What other flower tiers does Gas Junction Cannabis use?", a: "The site also separates flower into Premium, AAA+, AA and Budget tier pages." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "The Premium tier gives Gas Junction Cannabis a dedicated page for Premium weed and cannabis flower within its larger tier system. Its role is intentionally narrower than the protected Toronto Weed owner page.",
    sections: [
      { heading: "Explore the Premium Weed Tier", body: "This section keeps Premium weed and flower organized as its own category instead of combining every flower tier on one page. The focus remains on the Premium tier itself." },
      { heading: "Premium Within the Gas Junction Tier System", body: "Premium is one part of a five-tier flower structure that also includes Exotic, AAA+, AA and Budget. The broader Gas Junction Weed page remains the primary destination for general Weed intent." },
    ],
    faqs: [
      { q: "What is the Premium tier at Gas Junction Cannabis?", a: "Premium is a dedicated cannabis flower tier within the Gas Junction site structure." },
      { q: "Does the Premium page replace the main Weed page?", a: "No. The Premium page serves narrow tier intent and remains subordinate to the broader Weed Dispensary in Toronto page." },
      { q: "Can I compare Premium with other Gas Junction flower tiers?", a: "Yes. Separate pages are provided for Exotic, AAA+, AA and Budget so each tier can be explored independently." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "Gas Junction Cannabis gives AAA+ its own narrow flower page so that this tier can be explored separately from the broader Weed category. The page supports the existing tier architecture without competing with the main Toronto Weed owner.",
    sections: [
      { heading: "Explore the AAA+ Weed Tier", body: "The AAA+ section is dedicated specifically to the AAA+ level in the Gas Junction flower structure. It provides a clearer category path while keeping general Weed intent on the broader owner page." },
      { heading: "AAA+ and the Other Gas Junction Flower Tiers", body: "AAA+ is positioned alongside Exotic, Premium, AA and Budget as one of five separate flower tiers. Each tier keeps a distinct role rather than duplicating the site's broader Weed page." },
    ],
    faqs: [
      { q: "What does AAA+ represent on the Gas Junction site?", a: "AAA+ is the name of one of Gas Junction Cannabis's dedicated cannabis flower tiers." },
      { q: "Is AAA+ a separate Weed category page?", a: "Yes. It has its own narrow tier page while the main Weed Dispensary in Toronto page remains the broad Weed owner." },
      { q: "Which other flower tiers are separated on the site?", a: "Gas Junction also has dedicated Exotic, Premium, AA and Budget tier pages." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "The AA page gives Gas Junction Cannabis a specific destination for the AA flower tier instead of asking one broad page to cover every category. It remains a narrow tier page beneath the site's broader Toronto Weed architecture.",
    sections: [
      { heading: "Explore the AA Weed Tier", body: "AA is organized as its own cannabis flower category within the Gas Junction site. This page keeps the AA tier distinct from the other flower levels and from the main Weed owner." },
      { heading: "Where AA Sits in the Gas Junction Flower Structure", body: "The AA tier sits alongside Exotic, Premium, AAA+ and Budget. This separation gives each flower tier a clear role while preserving the broader Weed Dispensary in Toronto page for general Weed searches." },
    ],
    faqs: [
      { q: "What is the AA tier at Gas Junction Cannabis?", a: "AA is one of the site's five dedicated cannabis flower tiers." },
      { q: "Why does AA have its own page?", a: "The separate page keeps AA-specific browsing distinct from other flower tiers and from the broader Gas Junction Weed page." },
      { q: "What other tier pages are available?", a: "The site also separates Exotic, Premium, AAA+ and Budget into their own flower pages." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "Gas Junction Cannabis uses a dedicated Budget tier page as part of its established flower structure. The page focuses only on that category label and does not make claims about current pricing, promotions, availability or product status.",
    sections: [
      { heading: "Explore the Budget Weed Tier", body: "The Budget section is a distinct cannabis flower tier within the Gas Junction site architecture. Its purpose is to provide a focused category path without expanding into price or promotional claims." },
      { heading: "Budget Within the Gas Junction Flower Structure", body: "Budget appears alongside Exotic, Premium, AAA+ and AA as one of the site's five flower tiers. Broader Weed intent remains with the protected Weed Dispensary in Toronto page." },
    ],
    faqs: [
      { q: "What is the Budget tier at Gas Junction Cannabis?", a: "Budget is the name of one of Gas Junction Cannabis's dedicated cannabis flower tiers." },
      { q: "Does the Budget label guarantee a particular price or promotion?", a: "No. The tier name identifies the site's category structure and should not be interpreted as a current price, deal or promotion claim." },
      { q: "What other Gas Junction flower tiers are available to explore?", a: "Separate tier pages exist for Exotic, Premium, AAA+ and AA." },
    ],
  },
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC: "Explore the Exotic weed and cannabis flower tier at Gas Junction Cannabis in Toronto, kept distinct from the site's broader Weed category.",
  PREMIUM: "Explore the Premium weed and cannabis flower tier at Gas Junction Cannabis in Toronto within its established five-tier flower structure.",
  "AAA+": "Explore the AAA+ weed and cannabis flower tier at Gas Junction Cannabis in Toronto while the main Toronto Weed page remains the broad owner.",
  AA: "Explore the AA weed and cannabis flower tier at Gas Junction Cannabis in Toronto as a dedicated part of its flower category structure.",
  BUDGET: "Explore the Budget weed and cannabis flower tier at Gas Junction Cannabis in Toronto without implying current price, promotion or availability.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed & Cannabis Flower in Toronto",
  PREMIUM: "Premium Weed & Cannabis Flower in Toronto",
  "AAA+": "AAA+ Weed & Cannabis Flower in Toronto",
  AA: "AA Weed & Cannabis Flower in Toronto",
  BUDGET: "Budget Weed & Cannabis Flower in Toronto",
};
