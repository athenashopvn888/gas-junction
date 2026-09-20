/** Single NAP / hours / domain source for Gas Junction Cannabis (GJC01). */
export const STORE = {
  name: "Gas Junction Cannabis",
  domainHost: "www.gasjunctioncannabis.com",
  origin: "https://www.gasjunctioncannabis.com",
  streetAddress: "2813 Dundas St W",
  city: "Toronto",
  region: "ON",
  postalCode: "M6P 1Y6",
  country: "CA",
  addressLine: "2813 Dundas St W, Toronto, ON M6P 1Y6",
  neighborhood: "The Junction",
  intersection: "Keele & Dundas",
  phoneDisplay: "+1 (437) 291-0948",
  phoneTel: "+14372910948",
  hoursLabel: "Open 24 Hours Daily",
  openingHours: "Mo-Su 00:00-23:59",
  opens: "00:00",
  closes: "23:59",
  latitude: 43.66517,
  longitude: -79.46306,
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=2813+Dundas+St+W%2C+Toronto%2C+ON+M6P+1Y6",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=2813%20Dundas%20St%20W%2C%20Toronto%2C%20ON%20M6P%201Y6&z=16&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=2813+Dundas+St+W%2C+Toronto%2C+ON+M6P+1Y6",
  deliveryRadius: ["The Junction", "High Park", "Bloor West Village"],
} as const;

export const LOCAL_MESH_LINKS = [
  { href: "/", label: "Store homepage" },
  { href: "/visit", label: "How to get here" },
  { href: "/weed-dispensary-junction", label: "Weed dispensary in The Junction" },
  { href: "/24-hour-junction-dispensary", label: "Open now — 24-hour Junction dispensary" },
  { href: "/cannabis-delivery-junction", label: "Cannabis delivery in The Junction" },
  { href: "/delivery", label: "Delivery menu" },
  { href: "/native-cigarettes-junction", label: "Native cigarettes in The Junction" },
  { href: "/nicotine-vape-junction", label: "Nicotine vape in The Junction" },
] as const;

export const TIER_MESH_LINKS = [
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
] as const;

export const HOME_FAQS = [
  {
    q: "Is there a 24-hour dispensary open now in The Junction?",
    a: "Yes. Gas Junction Cannabis at 2813 Dundas St W is open 24 hours daily — that is the walk-in door, not the delivery window. The 24-hour Junction dispensary page is the open-now / 24h-near-me owner, same weight as the Junction weed dispensary, delivery, Native cigarettes, and nicotine vape pages.",
  },
  {
    q: "How do I get to Gas Junction Cannabis from Keele Station?",
    a: "From Keele Station on Line 2, walk north on Keele Street to Dundas Street West, then a short walk west to 2813 Dundas St W, just west of Keele & Dundas. Transit, parking, and landmark notes are on the how-to-get-here page.",
  },
  {
    q: "Where is Gas Junction Cannabis in The Junction?",
    a: "We are at 2813 Dundas St W, Toronto, ON M6P 1Y6, in The Junction near Keele & Dundas. Call +1 (437) 291-0948. Street parking is the usual option; check posted signs when you arrive.",
  },
  {
    q: "Can I walk in overnight after Junction restaurants close?",
    a: "Yes. The Keele & Dundas door stays open 24 hours daily, including after the Dundas West strip winds down. Use the 24-hour Junction dispensary guide for overnight walk-ins and the how-to-get-here page for transit.",
  },
  {
    q: "What is the cheapest weed at Gas Junction Cannabis?",
    a: "Budget flower is shown from $3/g, with AA and AAA+ tiers listed separately. Confirm current pricing and listings on the menu before visiting.",
  },
  {
    q: "Do you deliver cannabis in The Junction?",
    a: "Yes. Neighbourhood delivery from 2813 Dundas St W covers The Junction, High Park, and Bloor West Village during the posted delivery window. The cannabis delivery in The Junction page is the radius guide; the delivery menu is for browsing and ordering. The Keele & Dundas walk-in stays open 24 hours.",
  },
  {
    q: "Do you sell cigarettes and nicotine vapes at Keele & Dundas?",
    a: "Yes. The walk-in keeps a cigarette category and a nicotine vape category, separate from THC vapes. Junction notes live on the Native cigarettes and nicotine vape pages. Confirm current listings on those category menus. Adults 19+.",
  },
  {
    q: "Is there a weed dispensary in The Junction?",
    a: "Yes. Gas Junction Cannabis at 2813 Dundas St W is the Keele & Dundas weed dispensary. The weed dispensary in The Junction page is the neighbourhood owner for that walk-in — not a city-wide Toronto listing. Flower tiers, 24-hour hours, and how to get here sit beside it.",
  },
] as const;
