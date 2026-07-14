export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

const hubCards: ResourceCard[] = [
  {
    title: "Junction Visit Guide",
    href: "/resources/junction-visit-guide",
    text: "Plan a clean stop around Dundas St W, Keele, High Park North, and The Junction.",
  },
  {
    title: "Menu Guide",
    href: "/resources/menu-guide",
    text: "Use a category-first path for flower, pre-rolls, edibles, vapes, concentrates, and accessories.",
  },
  {
    title: "Flower Tier Guide",
    href: "/resources/flower-guide",
    text: "Compare Exotic, Premium, AAA+, AA, and Budget with 3g and 6g bundle math included.",
  },
  {
    title: "Value Guide",
    href: "/resources/value-guide",
    text: "A simple way to shop affordable weed around The Junction without losing the plot.",
  },
  {
    title: "Native Smokes Prices",
    href: "/resources/native-smokes",
    text: "Brand and price notes for cigarettes, Backwoods, grabba, and nicotine pouches.",
  },
];

const menuCards: ResourceCard[] = [
  {
    title: "Flower Tiers",
    href: "/resources/flower-guide",
    text: "Start here for Exotic, Premium, AAA+, AA, and Budget flower paths.",
  },
  {
    title: "Pre-Roll Guide",
    href: "/resources/pre-roll-guide",
    text: "Keep singles, packs, and quick-trip pre-rolls in their own lane.",
  },
  {
    title: "Cigarette Menu",
    href: "/items/cigarettes",
    text: "Open the live cigarette category for the current brand list.",
  },
  {
    title: "GBP Store Page",
    href: "/weed-dispensary-toronto",
    text: "Use the protected local landing page for address, hours, and visit context.",
  },
];

const flowerCards: ResourceCard[] = [
  {
    title: "Exotic Flower",
    href: "/exotic",
    text: "$20/g, 3g for $40, or 6g for $60 where the menu tier deal is listed.",
  },
  {
    title: "Premium Flower",
    href: "/premium",
    text: "$15/g, 3g for $30, or 6g for $45 where the menu tier deal is listed.",
  },
  {
    title: "AAA+ Flower",
    href: "/aaa",
    text: "$10/g, 3g for $20, or 6g for $30 where the menu tier deal is listed.",
  },
  {
    title: "AA Flower",
    href: "/aa",
    text: "$4/g for a direct value lane.",
  },
  {
    title: "Budget Flower",
    href: "/budget",
    text: "$3/g for the lowest posted flower tier lane.",
  },
];

const cigaretteCards: ResourceCard[] = [
  {
    title: "$25 Cartons",
    href: "/items/cigarettes",
    text: "Canadian Lights, Canadian Full, Putters, Canadian Goose, Canadian Classics, Nexus, Rolled Gold, and Time listings.",
  },
  {
    title: "Backwoods",
    href: "/items/cigarettes",
    text: "Backwoods Assorted Flavors are listed $20-$25, with New Backwoods Flavors listed at $25.",
  },
  {
    title: "Grabba",
    href: "/items/cigarettes",
    text: "Grabba is listed at $5, and Grabba Shaker RedRose / Red Herring is listed at $19.",
  },
  {
    title: "Nicotine Pouches",
    href: "/items/cigarettes",
    text: "Nicotine pouches listed with Velo, Pablo, and Killa at $20.",
  },
];

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Gas Junction Cannabis Resources",
    seoTitle: "Gas Junction Cannabis Resources | The Junction Menu and Visit Guides",
    description:
      "Gas Junction Cannabis resource pages for The Junction shoppers, with local visit planning, menu guidance, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.",
    eyebrow: "The Junction Resource Hub",
    intro:
      "A useful stop before the stop. These Gas Junction Cannabis resources keep The Junction, Dundas St W, Keele, High Park North, Junction Triangle, Bloor West Village, Runnymede, Annette Street, Dundas West, and Roncesvalles shoppers pointed at the right product category.",
    cards: hubCards,
    sections: [
      {
        heading: "Built Around The Junction Shopper",
        body:
          "Gas Junction Cannabis sits at 2813 Dundas St W, so the resource section is organized around how local shoppers actually move: check the GBP landing page, pick the category, compare the right shelf, then head in with fewer tabs open.",
        bullets: [
          "Use /weed-dispensary-toronto for the protected local landing page.",
          "Use /resources/menu-guide when you are choosing between categories.",
          "Use /resources/native-smokes when cigarettes, Backwoods, grabba, or pouches are part of the same stop.",
        ],
      },
      {
        heading: "Hours And Local Intent",
        body:
          "The listed store hours are Open Daily: 09:00 AM - 02:00 AM. That makes the resource hub useful for daytime errands, after-work shopping, and later Junction-area searches for a weed dispensary near Dundas and Keele.",
      },
    ],
  },
  {
    slug: "junction-visit-guide",
    title: "The Junction Weed Dispensary Visit Guide",
    seoTitle: "The Junction Weed Dispensary Visit Guide | Gas Junction Cannabis",
    description:
      "A local visit guide for Gas Junction Cannabis at 2813 Dundas St W in The Junction, with nearby Toronto areas, menu shortcuts, hours, and shopping paths.",
    eyebrow: "Visit Guide",
    intro:
      "Use this page when the search starts local: weed dispensary in The Junction, cannabis near Dundas St W and Keele, or a late stop near High Park North, Junction Triangle, Runnymede, Annette, Bloor West, Dundas West, or Roncesvalles.",
    cards: [
      {
        title: "Local Landing Page",
        href: "/weed-dispensary-toronto",
        text: "The main GBP-connected page with address, hours, and visit planning.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Choose flower, pre-rolls, edibles, vapes, concentrates, accessories, or cigarettes first.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "Fast help for budget weed, cheap weed, and affordable flower comparisons.",
      },
    ],
    sections: [
      {
        heading: "Address Anchor",
        body:
          "Gas Junction Cannabis is listed at 2813 Dundas St W, Toronto, ON M6P 1Y6. Keep that address as the anchor, then use the menu categories to decide whether this trip is about flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes.",
      },
      {
        heading: "Neighborhood Search Paths",
        body:
          "The Junction page should catch shoppers who describe the area in different ways. This guide naturally supports searches around Dundas St W, Keele, High Park North, Junction Triangle, Bloor West Village, Runnymede, Annette Street, Dundas West, and Roncesvalles without turning the page into a keyword wall.",
        bullets: [
          "The Junction and Dundas St W for the core local search.",
          "Keele and High Park North for nearby direction-based searches.",
          "Junction Triangle, Runnymede, Bloor West, and Roncesvalles for nearby shopper paths.",
        ],
      },
      {
        heading: "Best First Click",
        body:
          "If you are not sure what to buy yet, do not start deep inside an item page. Start with the menu guide, then choose the shelf. If the visit is mostly about current store details, use the local landing page first.",
      },
    ],
  },
  {
    slug: "menu-guide",
    title: "Gas Junction Cannabis Menu Guide",
    seoTitle: "Gas Junction Cannabis Menu Guide | Flower, Vapes, Edibles, Pre-Rolls",
    description:
      "A category-first menu guide for Gas Junction Cannabis shoppers comparing flower tiers, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes.",
    eyebrow: "Menu Guide",
    intro:
      "The cleanest way to shop the Gas Junction Cannabis menu is to choose the lane first. Flower shoppers need tier logic. Pre-roll shoppers need format logic. Cigarette shoppers need brand and price notes. Treat each category like its own shelf.",
    cards: menuCards,
    sections: [
      {
        heading: "Pick The Shelf, Then Compare",
        body:
          "Start with the category that matches the trip. Flower should be compared by tier and bundle math. Pre-rolls should be compared by format. Edibles, vapes, concentrates, and accessories should be checked by product note and current listing.",
        bullets: [
          "Flower: compare Exotic, Premium, AAA+, AA, and Budget.",
          "Pre-rolls: compare singles, packs, infused options, and posted notes.",
          "Cigarettes: compare brand, full/light/menthol style, and posted price.",
        ],
      },
      {
        heading: "Use The Local Page For The Store Details",
        body:
          "The menu guide is for deciding what to shop. The GBP landing page is for address, hours, and local visit planning. Keeping those jobs separate helps protect the important local SEO page while making the resources more useful.",
      },
    ],
  },
  {
    slug: "flower-guide",
    title: "Gas Junction Flower Tier and 6g Price Guide",
    seoTitle: "Gas Junction Flower Tier Guide | 6g Bundle Prices and Budget Weed",
    description:
      "Compare Gas Junction Cannabis flower tiers with posted per-gram prices and 6g bundle math for Exotic, Premium, AAA+, AA, and Budget flower.",
    eyebrow: "Flower Tiers",
    intro:
      "This is the fast flower read: Exotic is posted at $20/g with 6g for $60, Premium at $15/g with 6g for $45, AAA+ at $10/g with 6g for $30, AA at $4/g, and Budget at $3/g. Use the tier page for current listings before you choose.",
    cards: flowerCards,
    sections: [
      {
        heading: "The 6g Math Matters",
        body:
          "For the top three flower tiers, the displayed 6g deal changes how the shelf feels. Exotic can show as 6g for $60, Premium as 6g for $45, and AAA+ as 6g for $30. That is different from only reading the straight per-gram line.",
        bullets: [
          "Exotic: $20/g, 3g for $40, 6g for $60.",
          "Premium: $15/g, 3g for $30, 6g for $45.",
          "AAA+: $10/g, 3g for $20, 6g for $30.",
        ],
      },
      {
        heading: "AA And Budget Are Straight Value Lanes",
        body:
          "AA is posted at $4/g and Budget is posted at $3/g. Those lanes are easier to understand when shoppers want cheap weed or affordable weed without comparing every premium shelf first.",
      },
      {
        heading: "Use Current Product Pages",
        body:
          "This guide explains the shelf math. Product names, strain notes, and availability can move, so the final check should always happen on the current tier page or at the counter.",
      },
    ],
  },
  {
    slug: "value-guide",
    title: "Gas Junction Value Weed Guide",
    seoTitle: "Gas Junction Value Weed Guide | Cheap Weed Near The Junction",
    description:
      "A value shopping guide for Gas Junction Cannabis near The Junction, covering Budget, AA, AAA+, 6g deals, and affordable weed menu paths.",
    eyebrow: "Value Guide",
    intro:
      "Value shopping does not have to mean scrolling the whole store. At Gas Junction Cannabis, start with Budget, AA, and AAA+ if the search is cheap weed, budget weed, or affordable flower near The Junction.",
    cards: [
      {
        title: "Budget Flower",
        href: "/budget",
        text: "$3/g for the lowest posted flower lane.",
      },
      {
        title: "AA Flower",
        href: "/aa",
        text: "$4/g for a simple value shelf.",
      },
      {
        title: "AAA+ Flower",
        href: "/aaa",
        text: "$10/g, 3g for $20, or 6g for $30 where listed.",
      },
      {
        title: "Flower Tier Guide",
        href: "/resources/flower-guide",
        text: "Use this if the 3g and 6g math matters.",
      },
    ],
    sections: [
      {
        heading: "Start Low, Then Move Up",
        body:
          "If the goal is value, start at Budget and AA. If you want a step up while still watching spend, check AAA+ and its 6g-for-$30 tier deal before jumping into Premium or Exotic.",
      },
      {
        heading: "Value Depends On The Trip",
        body:
          "A quick pre-roll stop, a flower restock, and a mixed menu visit do not need the same path. Use the category pages first so the value comparison stays clean.",
      },
    ],
  },
  {
    slug: "pre-roll-guide",
    title: "Gas Junction Pre-Roll and Quick Trip Guide",
    seoTitle: "Gas Junction Pre-Roll Guide | The Junction Cannabis Menu Tips",
    description:
      "A quick-trip guide for Gas Junction Cannabis pre-roll shoppers, with category shortcuts for pre-rolls, flower, edibles, vapes, and concentrates.",
    eyebrow: "Quick Trip",
    intro:
      "Pre-roll shoppers usually want a faster path than flower shoppers. Use this guide when the goal is ready-to-smoke options, a quick stop near The Junction, or a small add-on beside another category.",
    cards: [
      {
        title: "Pre-Rolls",
        href: "/items/prerolls",
        text: "Open the current pre-roll category.",
      },
      {
        title: "Flower Tiers",
        href: "/resources/flower-guide",
        text: "Switch here if the visit turns into loose flower instead.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Use this if the stop includes edibles, vapes, concentrates, or accessories.",
      },
    ],
    sections: [
      {
        heading: "Keep Pre-Rolls Separate From Flower",
        body:
          "Pre-rolls are not the same decision as loose flower. Compare the format, pack size, posted notes, and current price in the pre-roll category instead of dragging flower-tier logic into every choice.",
      },
      {
        heading: "Good For Mixed Stops",
        body:
          "If someone is coming from Dundas St W, Keele, or High Park North for a mixed stop, pre-rolls can be handled as a clean second lane after flower, edibles, THC vapes, or concentrates.",
      },
    ],
  },
  {
    slug: "native-smokes",
    title: "Gas Junction Native Smokes Price Guide",
    seoTitle: "Gas Junction Native Smokes Prices | Cigarettes, Backwoods, Grabba",
    description:
      "Gas Junction Cannabis Native smokes resource with cigarette brands and listed prices for Canadian, Putters, Canadian Goose, Nexus, Time, Backwoods, grabba, and pouches.",
    eyebrow: "Native Smokes",
    intro:
      "This page gives cigarette shoppers a real starting point instead of a vague category guide. Gas Junction Cannabis listings include $25 cigarette options, Backwoods, grabba, grabba shaker, nicotine pouches, and 10 x Premium Mix Cigarettes.",
    cards: cigaretteCards,
    sections: [
      {
        heading: "$25 Cigarette Brand List",
        body:
          "The cigarette menu lists Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Classics Original, Canadian Classics Silver, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full at $25.",
        bullets: [
          "Canadian Lights - $25",
          "Canadian Full - $25",
          "Putters - $25",
          "Canadian Goose Full - $25",
          "Canadian Goose Lights - $25",
          "Canadian Classics Original - $25",
          "Canadian Classics Silver - $25",
          "Rolled Gold Lights - $25",
          "Nexus Full - $25",
          "Nexus Lights - $25",
          "Time Full - $25",
        ],
      },
      {
        heading: "Backwoods, Grabba, And Pouches",
        body:
          "The menu also lists Nicotine Pouches with Velo, Pablo, and Killa at $20; Grabba at $5; Grabba Shaker RedRose / Red Herring at $19; Backwoods Assorted Flavors listed $20-$25; New Backwoods Flavors at $25; and 10 x Premium Mix Cigarettes at $3.",
      },
      {
        heading: "Confirm Before The Trip",
        body:
          "Cigarette inventory and flavor mix can move fast. Use the cigarette category for the latest public path, then confirm in store when one exact brand, full/light style, or flavor matters.",
      },
    ],
  },
  {
    slug: "native-smokes/native-cigarettes-guide",
    title: "Gas Junction Native Cigarettes Brand Guide",
    seoTitle: "Gas Junction Native Cigarettes Guide | $25 Brand List",
    description:
      "A detailed Native cigarettes brand guide for Gas Junction Cannabis, including $25 cigarette listings and add-on smoke category prices.",
    eyebrow: "Native Cigarettes",
    intro:
      "If the trip includes cigarettes, start with the brand list and price point first. The Gas Junction Cannabis cigarette category gives the clearest path for Canadian, Putters, Canadian Goose, Canadian Classics, Nexus, Rolled Gold, Time, Backwoods, grabba, and pouches.",
    cards: [
      {
        title: "Cigarette Category",
        href: "/items/cigarettes",
        text: "Open the current cigarette category.",
      },
      {
        title: "Native Smokes Overview",
        href: "/resources/native-smokes",
        text: "Return to the shorter price guide.",
      },
      {
        title: "Visit Guide",
        href: "/resources/junction-visit-guide",
        text: "Plan the local Junction stop.",
      },
    ],
    sections: [
      {
        heading: "Brand Names To Check",
        body:
          "The $25 cigarette shelf includes Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Classics Original, Canadian Classics Silver, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
      },
      {
        heading: "Add-On Smoke Items",
        body:
          "Gas Junction also lists Nicotine Pouches with Velo, Pablo, and Killa at $20, Grabba at $5, Grabba Shaker RedRose / Red Herring at $19, Backwoods Assorted Flavors at $20-$25, New Backwoods Flavors at $25, and 10 x Premium Mix Cigarettes at $3.",
      },
      {
        heading: "Keep Cannabis And Cigarettes Organized",
        body:
          "If the same visit includes flower, pre-rolls, edibles, vapes, or concentrates, handle cigarettes as a separate lane. It makes the menu easier and keeps the page useful for both cannabis shoppers and Native smokes shoppers.",
      },
    ],
  },
  {
    slug: "resource-centre-launch",
    title: "Gas Junction Resource Centre Update",
    seoTitle: "Gas Junction Resource Centre Update | Local Menu Guides",
    description:
      "Gas Junction Cannabis resource centre update with local Junction visit planning, menu guide pages, flower tier pricing, value shopping, and Native smokes prices.",
    eyebrow: "Resource Update",
    intro:
      "The resource centre has been rebuilt around real shopper paths: local visit planning, category-first menu browsing, flower tier math, value shopping, quick pre-roll trips, and cigarette price notes.",
    cards: hubCards,
    sections: [
      {
        heading: "What Changed",
        body:
          "The resources are now specific to Gas Junction Cannabis and The Junction instead of reading like a copied store template. They support the GBP landing page, menu categories, flower tiers, and cigarette category without replacing any of those pages.",
      },
      {
        heading: "What Stayed Protected",
        body:
          "The important SEO paths stay intact: /weed-dispensary-toronto, /resources, /resources/menu-guide, /resources/flower-guide, /resources/value-guide, /resources/pre-roll-guide, /resources/native-smokes, and /resources/native-smokes/native-cigarettes-guide.",
      },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
