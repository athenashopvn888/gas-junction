export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string | string[];
  bullets?: string[];
  link?: ResourceCard;
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
  faqs?: { question: string; answer: string }[];
  faqHeading?: string;
  markdown?: string;
  dateModified?: string;
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
    text: "Use a category-guided path for flower, pre-rolls, edibles, vapes, concentrates, and accessories.",
  },
  {
    title: "Weed & Flower Tier Guide",
    href: "/resources/weed-flower-guide",
    text: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed in one concise guide.",
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
    href: "/resources/weed-flower-guide",
    text: "Start here for Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed.",
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
    title: "How to Get Here",
    href: "/visit",
    text: "Use the reach guide for address, hours, transit, and parking in The Junction.",
  },
];

const flowerCards: ResourceCard[] = [
  {
    title: "Explore Gas Junction Cannabis Weed in The Junction",
    href: "/",
    text: "Start on the homepage for The Junction walk-in, then narrow into a flower collection.",
  },
  {
    title: "Exotic Weed",
    href: "/exotic-weed",
    text: "Explore the Gas Junction Cannabis Exotic Weed flower collection.",
  },
  {
    title: "Premium Weed",
    href: "/premium-weed",
    text: "Browse the dedicated Premium Weed flower collection.",
  },
  {
    title: "AAA+ Weed",
    href: "/aaa-weed",
    text: "Explore the Gas Junction Cannabis AAA+ Weed flower collection.",
  },
  {
    title: "AA Weed",
    href: "/aa-weed",
    text: "Browse the dedicated AA Weed flower collection.",
  },
  {
    title: "Budget Weed",
    href: "/budget-weed",
    text: "Explore the Gas Junction Cannabis Budget Weed flower collection.",
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

export const CONCENTRATES_GLOSSARY_TITLE = "Cannabis concentrates, decoded: a plain-language glossary";

export const CONCENTRATES_GLOSSARY_DESCRIPTION =
  "This glossary explains the words you're most likely to see in a Toronto store, focusing on how each type is made and what it looks like.";

export const CONCENTRATES_GLOSSARY_MARKDOWN = `Last checked: September 30, 2026
Concentrate menus use a lot of shorthand: rosin, sift, sauce, "Moroccan-style." Unless you already know the vocabulary, a list of names doesn't tell you much. This glossary explains the words you're most likely to see in a Toronto store, focusing on **how each type is made and what it looks like**. It's written for adults 19+ and doesn't rank one type above another.

When we checked our own online concentrates category at Gas Junction at the end of September 2026, it was mostly pressed hash. Menus change, so treat that as a snapshot, not a promise of what's in stock today. That's why the hash entries below go into more detail than the rest.

## First, two words that get mixed up

**Concentrate** is the everyday word. It means any product where the resin from the cannabis plant has been separated out and collected, whether by hand, water, heat, pressure or a solvent.

**Cannabis extract** is the legal category most concentrates fall into under the federal Cannabis Regulations. Vape cartridges and many other products belong to it too. When you see "extract" on a label, that's the regulatory term.

## The glossary, A to Z

**Afghan-style / Moroccan-style (hash)**
Traditional names for particular hash styles, usually describing texture, colour and how the hash was pressed. On a legal Canadian menu, treat them as **style names**. The name alone tells you nothing about how strong the product is, so read the label for that.

**Badder / budder**
Extract whipped while it's being made so it ends up soft, opaque and spreadable.

**Bubble hash (ice-water hash)**
Resin knocked off the plant using ice-cold water and agitation, then filtered through a series of fine mesh bags. The result is dried and often pressed. No chemical solvent is involved.

**Cold cure**
A finishing step for rosin: it's rested at low temperature so the texture changes. You'll sometimes see it printed next to the product name.

**Diamonds and sauce**
Crystal-like solids ("diamonds") sitting in a runnier, aromatic liquid ("sauce"). Both are separated during extraction.

**Distillate**
Extract refined until it's mostly a single compound, leaving a clear, thick oil. It's common inside vape cartridges and as an ingredient in other products.

**Dry sift**
Resin separated by shaking dried cannabis over fine screens, with no water or solvent. Pressed dry sift becomes a form of hash.

**Hash (pressed hash)**
One of the oldest concentrate formats: collected resin (sift, kief or ice-water hash) pressed into a block, slab or ball. Colour ranges from light blond to near-black depending on the method and how it was pressed.

**Kief**
The loose, powdery resin that collects at the bottom of a grinder or screen. Kief is the raw material many hash styles start from.

**Live resin**
Extract made from plant material that was frozen right after harvest instead of dried and cured first. "Live" refers to the fresh-frozen starting material, not the finished texture.

**Rosin**
Extract made by pressing cannabis, hash or sift between heated plates, with no chemical solvent. "Live rosin" is rosin pressed from ice-water hash made from fresh-frozen plants.

**Shatter**
A hard, glassy, translucent extract that snaps cleanly when it's cold, a bit like a thin pane of glass.

**Solventless**
An umbrella label for anything made without a chemical solvent: hash, dry sift, ice-water hash and rosin.

**Wax / crumble**
Extract with an opaque, waxy or crumbly texture, depending on moisture and how it was handled after extraction.

## What the texture name doesn't tell you

A texture word (badder, shatter, crumble) describes **consistency**. A process word (solventless, live, rosin) describes **how it was made**. Neither one tells you the THC content, freshness or anything about the effects. For that, read the product label: it lists THC and CBD amounts, the packaged-on date and the producer.

## Carrying concentrates in public: the 7.5 g figure

In Ontario, an adult may carry up to 30 grams of dried cannabis in public, or an equivalent amount of other formats. Under Schedule 3 of the Cannabis Act, 1 g of dried cannabis equals 0.25 g of concentrates, so the concentrate equivalent of the 30 g limit is **7.5 g**. If you're carrying more than one format, it all counts toward the same total.

Here's a worked example. Say you're carrying 3.75 g of hash. Multiply by four (because 0.25 g of concentrate counts as 1 g of dried cannabis) and it counts as 15 g of dried cannabis, which is half the limit. That leaves room for 15 g of dried flower and nothing else. Ontario's "Cannabis laws" page on ontario.ca lists the same equivalents for other formats, including edibles and beverages.

## Finding us

Gas Junction Cannabis is at 2813 Dundas St W, near Keele Street in the Junction. For directions, parking and getting here by TTC, see our [visit page](/visit).

If a word on our concentrates list isn't in this glossary, ask at the counter and we'll explain it. Bring government-issued photo ID; you need to be 19 or older.
`;

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Gas Junction Cannabis Resources",
    seoTitle: "Gas Junction Cannabis Resources | The Junction Menu and Visit Guides",
    description:
      "Gas Junction Cannabis resource pages for The Junction shoppers, with local visit planning, menu guidance, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.",
    eyebrow: "The Junction Resource Hub",
    intro:
      "A useful stop before the stop. These Gas Junction Cannabis resources keep The Junction, Dundas St W, Keele, High Park North, Junction Triangle, Bloor West Village, Runnymede, and Annette Street shoppers pointed at the right product category.",
    cards: [
      ...hubCards,
      {
        title: CONCENTRATES_GLOSSARY_TITLE,
        href: "/resources/cannabis-concentrates-glossary",
        text: CONCENTRATES_GLOSSARY_DESCRIPTION,
      },
    ],
    sections: [
      {
        heading: "Built Around The Junction Shopper",
        body:
          "Gas Junction Cannabis sits at 2813 Dundas St W, so the resource section is organized around how local shoppers actually move: check the homepage or how-to-get-here page, pick the category, compare the right shelf, then head in with fewer tabs open.",
        bullets: [
          "Use the homepage or /visit for store address, hours, and how to get here.",
          "Use /resources/menu-guide when you are choosing between categories.",
          "Use /resources/native-smokes when cigarettes, Backwoods, grabba, or pouches are part of the same stop.",
        ],
      },
      {
        heading: "Hours And Local Intent",
        body:
          "The listed store hours are 24 hours daily. That makes the resource hub useful for Junction-area visit planning at any time of day.",
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
      "Use this page when the search starts local: weed dispensary in The Junction, cannabis near Keele & Dundas, or a late stop near High Park North, Junction Triangle, Runnymede, Annette, or Bloor West Village.",
    cards: [
      {
        title: "Weed Dispensary in The Junction",
        href: "/weed-dispensary-junction",
        text: "Neighbourhood weed-dispensary owner for the Keele & Dundas walk-in.",
      },
      {
        title: "How to Get Here",
        href: "/visit",
        text: "Transit, parking, and landmark notes for 2813 Dundas St W.",
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
      {
        title: "Cannabis Dispensary and Weed Dispensary Guide",
        href: "/resources/cannabis-dispensary-vs-weed-dispensary",
        text: "Learn how common dispensary and near-me wording can describe related local searches.",
      },
    ],
    sections: [
      {
        heading: "Address Anchor",
        body:
          "Gas Junction Cannabis is listed at 2813 Dundas St W, Toronto, ON M6P 1Y6. Keep that address as the anchor, then use the menu categories to decide whether this trip is about flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes.",
      },
      {
        heading: "Neighborhood Shopping Notes",
        body:
          "The Junction page should catch shoppers who describe the area in different ways. This guide naturally helps shoppers around Dundas St W, Keele, High Park North, Junction Triangle, Bloor West Village, Runnymede, and Annette Street without turning the page into a keyword wall.",
        bullets: [
          "The Junction and Dundas St W for the core local search.",
          "Keele and High Park North for nearby direction-based searches.",
          "Junction Triangle, Runnymede, Bloor West Village, and Annette Street for nearby shopping trips.",
        ],
      },
      {
        heading: "Best First Click",
        body:
          "If you are not sure what to buy yet, do not start deep inside an item page. Start with the menu guide, then choose the shelf. If the visit is mostly about current store details, use the homepage or how-to-get-here page first.",
      },
    ],
  },
  {
    slug: "menu-guide",
    title: "Gas Junction Cannabis Menu Guide",
    seoTitle: "Gas Junction Cannabis Menu Guide | Flower, Vapes, Edibles, Pre-Rolls",
    description:
      "A category-guided menu guide for Gas Junction Cannabis shoppers comparing flower tiers, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes.",
    eyebrow: "Menu Guide",
    intro:
      "The cleanest way to shop the Gas Junction Cannabis menu is to choose the section first. Flower shoppers need tier logic. Pre-roll shoppers need format logic. Cigarette shoppers need brand and price notes. Treat each category like its own shelf.",
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
          "The menu guide is for deciding what to shop. The homepage and how-to-get-here page cover address, hours, and local visit planning.",
      },
    ],
  },
  {
    slug: "cannabis-dispensary-vs-weed-dispensary",
    title: "What Does “Dispensary Near Me” Mean in a Cannabis Search?",
    seoTitle: "Weed vs Cannabis Dispensary | Gas Junction Cannabis Toronto",
    description:
      "Learn the difference between cannabis dispensary, weed dispensary and cannabis store terminology, plus how near-me searches relate in Toronto.",
    eyebrow: "Gas Junction Cannabis · Toronto",
    intro:
      "People looking for a nearby cannabis business do not all use the same words. One person may search “cannabis dispensary near me,” another may type “weed dispensary near me,” and someone else may shorten the search to “dispensary near me.” The phrases are different, but the local goal is often very similar: identify a nearby business and then confirm accurate store information.",
    cards: [],
    sections: [
      {
        heading: "Why “Dispensary Near Me” Matters",
        body: [
          "The phrase “near me” signals that location matters. The searcher is not only learning about cannabis terminology; they are trying to identify a nearby place.",
          "Longer versions such as “cannabis dispensary near me” and “weed dispensary near me” make the cannabis context explicit. The shorter “dispensary near me” removes the modifier but keeps strong local intent.",
        ],
      },
      {
        heading: "Local Context for Toronto",
        body:
          "Gas Junction Cannabis serves adults 19+ in Toronto. The terminology in this guide helps explain common local searches without changing the practical store information visitors need.",
        link: {
          title: "For store information and details about visiting Gas Junction Cannabis, see the homepage and how-to-get-here page.",
          href: "/visit",
          text: "Gas Junction Cannabis Toronto weed dispensary information",
        },
      },
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is a weed dispensary different from a cannabis dispensary?",
        answer: "Usually the main difference is wording. Cannabis is the more formal term, while weed is common conversational language.",
      },
      {
        question: "Does “dispensary near me” include cannabis dispensaries?",
        answer: "In a cannabis-related search context, people commonly use the shorter phrase to look for a nearby cannabis dispensary.",
      },
      {
        question: "Is “cannabis store near me” related?",
        answer: "Yes. Cannabis store is another common way to describe a nearby cannabis retail business.",
      },
      {
        question: "Do closely related search phrases need separate pages?",
        answer: "No. One useful guide can explain related wording clearly, while the homepage and how-to-get-here page provide practical store and visit information.",
      },
    ],
  },
  {
    slug: "weed-flower-guide",
    title: "Gas Junction Weed & Flower Tier Guide",
    seoTitle: "Weed & Flower Tier Guide Toronto | Gas Junction Cannabis",
    description:
      "Explore Gas Junction Cannabis flower collections including Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed, with links to each dedicated tier.",
    eyebrow: "Gas Junction Cannabis · Weed & Flower",
    intro:
      "Gas Junction Cannabis brings together five Weed flower collections for shoppers who want to compare different parts of the selection: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Explore the collections that interest you, or begin on the homepage before narrowing your browsing.",
    cards: flowerCards,
    sections: [
      {
        heading: "Explore Five Weed Flower Collections",
        body:
          "The five collections give shoppers different parts of the Gas Junction Cannabis flower selection to explore. Start with one that interests you or compare several before narrowing your browsing.",
        bullets: [
          "Explore Exotic Weed, Premium Weed and AAA+ Weed.",
          "Browse AA Weed and Budget Weed.",
          "Explore the Gas Junction Cannabis homepage for a broader starting point.",
        ],
      },
      {
        heading: "Weed, Cannabis and Flower at Gas Junction Cannabis",
        body:
          "Weed, cannabis, bud and flower are common terms shoppers use while browsing dispensary selections. Gas Junction Cannabis uses those terms naturally while keeping the five flower collections easy to distinguish.",
      },
      {
        heading: "Compare the Collections That Interest You",
        body:
          "You can move between Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed and explore the information presented within each collection before deciding where to continue.",
      },
    ],
  },
  {
    slug: "value-guide",
    title: "Gas Junction Value Weed Guide",
    seoTitle: "Gas Junction Value Weed Guide | Cheap Weed Near The Junction",
    description:
      "A value shopping guide for Gas Junction Cannabis near The Junction, covering Budget, AA, AAA+, 6g deals, and affordable weed menu sections.",
    eyebrow: "Value Guide",
    intro:
      "Value shopping does not have to mean scrolling the whole store. At Gas Junction Cannabis, start with Budget, AA, and AAA+ if the search is cheap weed, budget weed, or affordable flower near The Junction.",
    cards: [
      {
        title: "Budget Flower",
        href: "/budget-weed",
        text: "$3/g for the lowest posted flower lane.",
      },
      {
        title: "AA Flower",
        href: "/aa-weed",
        text: "$4/g for a simple value shelf.",
      },
      {
        title: "AAA+ Flower",
        href: "/aaa-weed",
        text: "$10/g, 3g for $20, or 6g for $30 where listed.",
      },
      {
        title: "Flower Tier Guide",
        href: "/resources/weed-flower-guide",
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
        href: "/resources/weed-flower-guide",
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
    title: "Gas Junction Resource Guide Refresh",
    seoTitle: "Gas Junction Resource Guide Refresh | Local Menu Guides",
    description:
      "Gas Junction Cannabis resource guide refresh with local Junction visit planning, menu guide pages, flower tier pricing, value shopping, and Native smokes prices.",
    eyebrow: "Resource Update",
    intro:
      "The resource centre has been rebuilt around real shopping trips: local visit planning, category-guided menu browsing, flower tier math, value shopping, quick pre-roll trips, and cigarette price notes.",
    cards: hubCards,
    sections: [
      {
        heading: "What Changed",
        body:
          "The resources are now specific to Gas Junction Cannabis and The Junction instead of reading like a copied store template. They support the homepage visit hub, menu categories, flower tiers, and cigarette category without replacing any of those pages.",
      },
      {
        heading: "What Stayed Protected",
        body:
          "The important SEO paths stay intact: /, /visit, /resources, /resources/menu-guide, /resources/weed-flower-guide, /resources/value-guide, /resources/pre-roll-guide, /resources/native-smokes, and /resources/native-smokes/native-cigarettes-guide.",
      },
    ],
  },
  {
    slug: "cannabis-concentrates-glossary",
    title: CONCENTRATES_GLOSSARY_TITLE,
    seoTitle: CONCENTRATES_GLOSSARY_TITLE,
    description: CONCENTRATES_GLOSSARY_DESCRIPTION,
    eyebrow: "",
    intro: CONCENTRATES_GLOSSARY_DESCRIPTION,
    cards: [],
    sections: [],
    markdown: CONCENTRATES_GLOSSARY_MARKDOWN,
    dateModified: "2026-09-30",
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
