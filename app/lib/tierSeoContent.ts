// Tier-specific SEO content for below-the-fold sections.

export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Cannabis Flower Toronto | Gas Junction Cannabis",
    seoIntro:
      "Browse Exotic flower category information at Gas Junction Cannabis in Toronto. Confirm current strains, pricing, and listings on the menu before visiting 2813 Dundas St W in The Junction.",
    sections: [
      {
        heading: "What Makes Exotic Flower Different?",
        body:
          "The Exotic tier is used for higher-end flower options on the Gas Junction Cannabis menu. Product details can rotate, so shoppers should confirm current strain names, pricing, and listings before visiting.",
      },
      {
        heading: "The Junction Location",
        body:
          "Gas Junction Cannabis is located at 2813 Dundas St W in The Junction area of Toronto, close to Keele, High Park North, Junction Triangle, Bloor West Village, Runnymede, Dundas West, and Roncesvalles.",
      },
    ],
    faqs: [
      {
        q: "What is Exotic cannabis flower?",
        a: "Exotic is a higher-end flower tier on the menu. Current strain details and listings can change.",
      },
      {
        q: "How do I check current Exotic options?",
        a: "Review the current menu before visiting Gas Junction Cannabis at 2813 Dundas St W.",
      },
    ],
  },

  PREMIUM: {
    seoTitle: "Premium Cannabis Flower Toronto | Gas Junction Cannabis",
    seoIntro:
      "Review Premium flower category information for Gas Junction Cannabis in Toronto. Current product details should be confirmed before visiting the Junction store.",
    sections: [
      {
        heading: "Premium Flower Category",
        body:
          "The Premium tier helps shoppers compare higher-quality flower options without mixing them into value categories. Listings and pricing can change as stock rotates.",
      },
      {
        heading: "Built for Easier Menu Browsing",
        body:
          "Gas Junction Cannabis organizes flower into tiers so adult 19+ shoppers can compare category levels, product styles, and budget ranges before coming in.",
      },
    ],
    faqs: [
      {
        q: "What is Premium cannabis flower?",
        a: "Premium is a flower tier used for higher-quality menu options. Confirm current products and pricing before visiting.",
      },
      {
        q: "Where is Gas Junction Cannabis?",
        a: "The store is located at 2813 Dundas St W in The Junction, Toronto.",
      },
    ],
  },

  "AAA+": {
    seoTitle: "AAA+ Cannabis Flower Toronto | Gas Junction Cannabis",
    seoIntro:
      "Browse AAA+ flower category information at Gas Junction Cannabis in Toronto. Check current menu details before visiting the store at 2813 Dundas St W.",
    sections: [
      {
        heading: "AAA+ Flower Category",
        body:
          "AAA+ is one of the flower tiers used to help shoppers compare product levels on the Gas Junction Cannabis menu. Current strain listings and pricing can change.",
      },
      {
        heading: "Compare Before You Visit",
        body:
          "Use the menu to compare AAA+ options with Budget, AA, Premium, and Exotic tiers, then confirm current details before heading to The Junction location.",
      },
    ],
    faqs: [
      {
        q: "What is AAA+ cannabis flower?",
        a: "AAA+ is a flower tier on the Gas Junction Cannabis menu. It helps organize products by category level.",
      },
      {
        q: "Do listings change?",
        a: "Yes. Flower listings can rotate, so check the current menu before visiting.",
      },
    ],
  },

  AA: {
    seoTitle: "AA Cannabis Flower Toronto | Gas Junction Cannabis",
    seoIntro:
      "Review AA flower category information for Gas Junction Cannabis in Toronto. Check the current menu before visiting 2813 Dundas St W.",
    sections: [
      {
        heading: "AA Flower Category",
        body:
          "AA is used as an everyday flower tier on the Gas Junction Cannabis menu. It gives shoppers another way to compare product categories and budget ranges.",
      },
      {
        heading: "Local Store Details",
        body:
          "Gas Junction Cannabis is located in The Junction at 2813 Dundas St W, Toronto, ON M6P 1Y6. The listed hours are open daily from 09:00 AM to 02:00 AM.",
      },
    ],
    faqs: [
      {
        q: "What is AA cannabis flower?",
        a: "AA is a flower tier used for menu organization. Check current products and listings before visiting.",
      },
      {
        q: "Can I walk in?",
        a: "Adults 19+ can walk in during posted store hours.",
      },
    ],
  },

  BUDGET: {
    seoTitle: "Budget Cannabis Toronto | Gas Junction Cannabis",
    seoIntro:
      "Browse budget flower category information at Gas Junction Cannabis in Toronto. Confirm current value options and listings before visiting.",
    sections: [
      {
        heading: "Budget Flower Category",
        body:
          "The Budget tier helps shoppers find value-oriented flower options when they are listed. Product details, pricing, and listings can change as stock rotates.",
      },
      {
        heading: "Check Current Value Options",
        body:
          "Use the current menu to compare Budget with AA, AAA+, Premium, and Exotic tiers before visiting Gas Junction Cannabis at 2813 Dundas St W in The Junction.",
      },
    ],
    faqs: [
      {
        q: "What is the Budget tier?",
        a: "Budget is the value-oriented flower tier on the Gas Junction Cannabis menu.",
      },
      {
        q: "Does the Budget page guarantee current pricing?",
        a: "No. Check the current menu for the latest product details and pricing before visiting.",
      },
    ],
  },
};
