import { STORE } from "./store";

export type OrganicVerticalFaq = { q: string; a: string };
export type OrganicVerticalSection = { heading: string; body: string };

export type OrganicVerticalPageData = {
  path: string;
  title: string;
  description: string;
  ogDescription: string;
  kicker: string;
  h1: string;
  lede: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  extraActions?: readonly { href: string; label: string }[];
  panels: readonly [OrganicVerticalSection, OrganicVerticalSection];
  sections: readonly OrganicVerticalSection[];
  faqs: readonly OrganicVerticalFaq[];
  faqHeading: string;
  warning?: string;
};

export const CANNABIS_DELIVERY_JUNCTION: OrganicVerticalPageData = {
  path: "/cannabis-delivery-junction",
  title: "Cannabis Delivery in The Junction | Gas Junction Cannabis",
  description:
    "Neighbourhood cannabis delivery from Gas Junction Cannabis at 2813 Dundas St W. Radius: The Junction, High Park, and Bloor West Village — not city-wide Toronto delivery. Adults 19+.",
  ogDescription:
    "Junction / Dundas West cannabis delivery from the Keele & Dundas shop. Browse the delivery menu, then order in the posted window.",
  kicker: "The Junction · High Park · Bloor West Village · Adults 19+",
  h1: "Cannabis Delivery in The Junction",
  lede: `This page owns neighbourhood cannabis delivery for Gas Junction Cannabis at ${STORE.addressLine}. Orders leave the Keele & Dundas shop for The Junction, High Park, and Bloor West Village — not a city-wide Toronto delivery listing. The live catalog stays on the delivery menu.`,
  primaryHref: "/delivery",
  primaryLabel: "Open delivery menu",
  secondaryHref: "/visit",
  secondaryLabel: "Walk-in directions",
  extraActions: [
    { href: "/24-hour-junction-dispensary", label: "Open now — 24-hour dispensary" },
    { href: "/weed-dispensary-junction", label: "Weed dispensary in The Junction" },
    { href: "/", label: "Store homepage" },
  ],
  panels: [
    {
      heading: "Radius from Keele & Dundas",
      body: "Delivery is scoped to The Junction, High Park, and Bloor West Village — the streets around this Dundas West counter. If you searched for cannabis delivery near Keele & Dundas, Junction Triangle, or the High Park face, this is the neighbourhood page. We do not treat this URL as a Toronto-wide delivery directory.",
    },
    {
      heading: "Delivery window vs the 24-hour door",
      body: "The walk-in at 2813 Dundas St W stays open 24 hours daily. Delivery is a separate window, listed on the delivery menu as 10:00 a.m. to 10:00 p.m. If you need a counter after that window, use the 24-hour Junction dispensary guide and walk in.",
    },
  ],
  sections: [
    {
      heading: "How Junction delivery orders start",
      body: "Browse the delivery menu, note product names and weights, then send the live dispatcher your list. New customers complete private selfie-with-ID checks in the order chat. The dispatcher confirms availability, the address inside the radius, and next steps. Government-issued photo ID is required. You must be 19+.",
    },
    {
      heading: "What this page does not replace",
      body: "This is the neighbourhood owner for Junction cannabis delivery. It does not replace the homepage NAP hub, the how-to-get-here walk-in guide, or the live delivery menu. Flower tiers on the store menu are for the counter; delivery listings live on the delivery menu and can differ.",
    },
  ],
  faqs: [
    {
      q: "Do you offer cannabis delivery in The Junction?",
      a: "Yes. Gas Junction Cannabis delivers from 2813 Dundas St W to The Junction, High Park, and Bloor West Village. This page is the neighbourhood delivery owner; the delivery menu is the live catalog.",
    },
    {
      q: "Is Junction cannabis delivery the same as the 24-hour walk-in?",
      a: "No. The Keele & Dundas door is open 24 hours. Delivery runs in the posted 10:00 a.m. to 10:00 p.m. window. Overnight shoppers should walk in.",
    },
    {
      q: "Which neighbourhoods does this delivery page cover?",
      a: "The Junction, High Park, and Bloor West Village. That is the listed radius from this Dundas West shop — not a city-wide Toronto delivery area.",
    },
    {
      q: "Where do I browse the current delivery menu?",
      a: "Use the delivery menu. This page explains the Junction radius and how delivery sits beside the 24-hour walk-in. Listings on the menu can change.",
    },
    {
      q: "Do I need to be 19+ for Junction cannabis delivery?",
      a: "Yes. Delivery and the walk-in are for adults 19+ with valid government-issued photo ID.",
    },
  ],
  faqHeading: "Junction delivery questions",
};

export const NATIVE_CIGARETTES_JUNCTION: OrganicVerticalPageData = {
  path: "/native-cigarettes-junction",
  title: "Native Cigarettes in The Junction | Gas Junction Cannabis",
  description:
    "Native cigarettes at Gas Junction Cannabis in The Junction, 2813 Dundas St W near Keele & Dundas. Review the cigarette category before visiting. Adults 19+.",
  ogDescription:
    "Junction-scoped cigarette notes for the Keele & Dundas walk-in. Current listings stay on the cigarette category.",
  kicker: "Keele & Dundas · Cigarette category · Adults 19+",
  h1: "Native Cigarettes in The Junction",
  lede: `Gas Junction Cannabis keeps a cigarette category at the 24-hour walk-in on Dundas West. This page is the Junction owner for that category — people already on Keele & Dundas, cutting over from Junction Triangle, or coming north from High Park North. It is not a city-wide Toronto tobacco listing.`,
  primaryHref: "/items/cigarettes",
  primaryLabel: "Cigarette category",
  secondaryHref: "/visit",
  secondaryLabel: "How to get here",
  extraActions: [
    { href: "/24-hour-junction-dispensary", label: "Open now — 24-hour dispensary" },
    { href: "/weed-dispensary-junction", label: "Weed dispensary in The Junction" },
    { href: "/nicotine-vape-junction", label: "Nicotine vape in The Junction" },
  ],
  panels: [
    {
      heading: "Cigarettes at the Keele & Dundas counter",
      body: "The same Junction shop that stocks flower tiers also lists cigarettes. Names on the category can rotate. Treat the website as a planning list, then confirm the pack you want on the floor before a special trip.",
    },
    {
      heading: "How this page sits beside the cigarette menu",
      body: "The live listing is the cigarette category. This page covers neighbourhood context for The Junction and Dundas West. Brand images or names you see elsewhere on the site are previews, not a promise that a specific pack is in the drawer tonight.",
    },
  ],
  sections: [
    {
      heading: "Same stop as flower — not a clinic",
      body: "Adults 19+ can pick up cigarettes on the same visit as flower, pre-rolls, or edibles. This is a retail counter, not a clinic. Staff can point you to the current cigarette shelf; they do not give health advice.",
    },
    {
      heading: "Overnight cigarette walk-ins",
      body: "The door stays open 24 hours, so a cigarette stop after the Dundas West restaurants close is still a walk-in. Bring government-issued photo ID. Tobacco and nicotine products are for adults 19+ every hour.",
    },
  ],
  faqs: [
    {
      q: "Does Gas Junction Cannabis sell Native cigarettes in The Junction?",
      a: "The shop includes a cigarette category at 2813 Dundas St W. This page is the Junction-scoped owner for that category. Confirm the current mix on the cigarette menu before visiting.",
    },
    {
      q: "Where is the current cigarette menu?",
      a: "Use the cigarette category. This page does not invent pack names, prices, or stock counts.",
    },
    {
      q: "Can I buy cigarettes at the Junction shop overnight?",
      a: "The walk-in is open 24 hours daily. Cigarette selection still has to be confirmed on the floor. Bring photo ID; you must be 19+.",
    },
    {
      q: "Is this a Toronto city cigarette page?",
      a: "No. This URL is for The Junction / Keele & Dundas / Dundas West. City-head cigarette URLs on this site are supporting paths, not the neighbourhood owner.",
    },
  ],
  faqHeading: "Junction cigarette questions",
  warning: "Adults 19+. Tobacco and nicotine products are addictive.",
};

export const NICOTINE_VAPE_JUNCTION: OrganicVerticalPageData = {
  path: "/nicotine-vape-junction",
  title: "Nicotine Vape in The Junction | Gas Junction Cannabis",
  description:
    "Nicotine vape at Gas Junction Cannabis in The Junction, 2813 Dundas St W. Current devices live on the nicotine vape category. Adults 19+. Nicotine is addictive.",
  ogDescription:
    "Junction-scoped nicotine vape notes for Keele & Dundas. Check /items/vapes for current listings — no prices on this page.",
  kicker: "Adults 19+ · Nicotine is addictive · Keele & Dundas",
  h1: "Nicotine Vape in The Junction",
  lede: `Nicotine vape at Gas Junction Cannabis is a walk-in category at ${STORE.streetAddress} in The Junction, kept separate from THC vapes. This page owns neighbourhood nicotine-vape intent for Keele & Dundas and Dundas West. Current names live on the nicotine vape category. This page does not list prices or guarantee a named device.`,
  primaryHref: "/items/vapes",
  primaryLabel: "Nicotine vape category",
  secondaryHref: "/visit",
  secondaryLabel: "How to get here",
  extraActions: [
    { href: "/24-hour-junction-dispensary", label: "Open now — 24-hour dispensary" },
    { href: "/weed-dispensary-junction", label: "Weed dispensary in The Junction" },
    { href: "/native-cigarettes-junction", label: "Native cigarettes in The Junction" },
  ],
  panels: [
    {
      heading: "Nicotine vape is not the THC vape aisle",
      body: "Gas Junction Cannabis keeps nicotine devices under the nicotine vape category and cannabis vapes under the THC vape category. Use this page when you searched for a nicotine vape near Keele & Dundas. Do not assume a THC disposable is a nicotine device, or the reverse.",
    },
    {
      heading: "Check the category before a special trip",
      body: "Open the nicotine vape category for the current public listing. Formats and names can move. This neighbourhood page will not invent SKUs, puff counts, or prices. If one exact device matters, call the shop or confirm on the floor.",
    },
  ],
  sections: [
    {
      heading: "Walk-in at Keele & Dundas",
      body: "The nicotine category is on the same 24-hour Junction counter as flower and cigarettes. Junction Triangle, High Park North, Bloor West Village, Runnymede, and Annette Street shoppers use the how-to-get-here page for the last mile, then ask for the nicotine shelf — not the THC vape case.",
    },
    {
      heading: "Adults 19+ only",
      body: "Nicotine products are for adults 19+ with valid government-issued photo ID. Nicotine is addictive. This page does not make health claims or compare devices as better or stronger.",
    },
  ],
  faqs: [
    {
      q: "Where should I check the current nicotine vape menu?",
      a: "Use the nicotine vape category at /items/vapes. This Junction page is neighbourhood context, not a stock list.",
    },
    {
      q: "Does this page list nicotine vape prices or SKUs?",
      a: "No. It does not invent device names, prices, or availability. Current listings belong on the nicotine vape category and on the product pages linked from there.",
    },
    {
      q: "Are nicotine vapes the same as cannabis vapes at this shop?",
      a: "No. Nicotine vape stays under /items/vapes. THC and cannabis vapes stay under /items/vape-disposables.",
    },
    {
      q: "Can I walk in now for a nicotine vape near Keele & Dundas?",
      a: "The Junction door is open 24 hours. Whether a specific nicotine device is on the shelf still has to be confirmed in the category or in store. Bring photo ID; you must be 19+.",
    },
  ],
  faqHeading: "Junction nicotine vape questions",
  warning: "Adults 19+. Nicotine is addictive.",
};

export const WEED_DISPENSARY_JUNCTION: OrganicVerticalPageData = {
  path: "/weed-dispensary-junction",
  title: "Weed Dispensary in The Junction | Gas Junction Cannabis",
  description:
    "Gas Junction Cannabis is the weed dispensary at 2813 Dundas St W in The Junction, near Keele & Dundas. Walk-in flower tiers for Junction Triangle and High Park North — not a city-wide Toronto listing. Adults 19+.",
  ogDescription:
    "Keele & Dundas weed dispensary in The Junction. Flower tiers, 24-hour walk-in, and neighbourhood notes — not a Toronto city-wide directory.",
  kicker: "Keele & Dundas · Junction Triangle · High Park North · Adults 19+",
  h1: "Weed Dispensary in The Junction",
  lede: `This page owns neighbourhood weed-dispensary intent for Gas Junction Cannabis at ${STORE.addressLine}. The walk-in sits just west of Keele & Dundas on the Dundas West strip — for people already in The Junction, cutting over from Junction Triangle, or coming north from High Park North. It is not a city-wide Toronto dispensary listing.`,
  primaryHref: "/",
  primaryLabel: "Store homepage",
  secondaryHref: "/visit",
  secondaryLabel: "How to get here",
  extraActions: [
    { href: "/24-hour-junction-dispensary", label: "Open now — 24-hour dispensary" },
    { href: "/exotic-weed", label: "Flower tiers" },
    { href: "/cannabis-delivery-junction", label: "Junction delivery" },
  ],
  panels: [
    {
      heading: "The Junction weed dispensary — not a Toronto city listing",
      body: "Gas Junction Cannabis is the walk-in counter at 2813 Dundas St W, just west of Keele & Dundas. This URL is the neighbourhood owner for weed-dispensary searches that already mean The Junction: Dundas West, Junction Triangle, High Park North, Bloor West Village, Runnymede, and Annette Street. City-head dispensary URLs on this site are supporting paths, not the listing to use.",
    },
    {
      heading: "Catchment around Keele & Dundas",
      body: "Use this guide if you searched for a weed dispensary in The Junction, a weed shop near Keele & Dundas, or a walk-in from Junction Triangle or High Park North. Street-by-street transit and parking live on the how-to-get-here page. Overnight and open-now hours live on the 24-hour Junction dispensary guide. The homepage keeps address, phone, map, and the current store menu.",
    },
  ],
  sections: [
    {
      heading: "Flower tiers at this Dundas West counter",
      body: "Flower is stacked as Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed so you can compare bands without a sales script. The same stop covers pre-rolls, vapes, edibles, concentrates, accessories, and cigarettes. Named SKUs belong on those tier and category pages, then on the floor — this page does not invent stock counts or prices.",
    },
    {
      heading: "How this page sits beside visit, hours, delivery, and the menus",
      body: "How to get here is the reach guide. The 24-hour Junction dispensary page is the open-now / overnight owner. Cannabis delivery in The Junction covers the High Park / Bloor West Village radius. Native cigarettes and nicotine vape have their own Junction pages. This URL is the weed-dispensary neighbourhood page — not a second homepage.",
    },
    {
      heading: "Adults 19+ only",
      body: "The Keele & Dundas walk-in is for adults 19+ with valid government-issued photo ID. Overnight does not change that rule. This is a retail counter, not a clinic. Staff can point you to a flower tier or category; they do not give health advice.",
    },
  ],
  faqs: [
    {
      q: "Is Gas Junction Cannabis a weed dispensary in The Junction?",
      a: "Yes. The walk-in at 2813 Dundas St W, just west of Keele & Dundas, is the neighbourhood weed dispensary for The Junction. This page is that neighbourhood owner — not a city-wide Toronto dispensary listing.",
    },
    {
      q: "Which streets does this Junction weed dispensary cover?",
      a: "The counter is on Dundas West at 2813. The walk-up catchment is The Junction, Junction Triangle, High Park North, Bloor West Village, Runnymede, and Annette Street. Transit and parking notes stay on the how-to-get-here page.",
    },
    {
      q: "Where do flower tiers live next to this dispensary page?",
      a: "Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed are the five flower collections at this shop. Use those tier pages to compare bands, then confirm a named jar on the floor.",
    },
    {
      q: "Is this the same page as the 24-hour Junction hours guide?",
      a: "No. This URL is the neighbourhood weed-dispensary page for The Junction. The 24-hour Junction dispensary page is the open-now and overnight hours guide. The homepage keeps address, map, and the store menu.",
    },
    {
      q: "Do I need to be 19+ to walk into the Junction weed dispensary?",
      a: "Yes. The walk-in and neighbourhood delivery are for adults 19+ with valid government-issued photo ID. That rule holds at every clock hour.",
    },
  ],
  faqHeading: "Junction weed dispensary questions",
};

export const ORGANIC_VERTICAL_PAGES = [
  CANNABIS_DELIVERY_JUNCTION,
  NATIVE_CIGARETTES_JUNCTION,
  NICOTINE_VAPE_JUNCTION,
  WEED_DISPENSARY_JUNCTION,
] as const;

export function getOrganicVerticalPage(path: string): OrganicVerticalPageData | undefined {
  return ORGANIC_VERTICAL_PAGES.find((page) => page.path === path);
}
