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

export const HOME_FAQS = [
  {
    q: "What are the hours for Gas Junction Cannabis?",
    a: "Gas Junction Cannabis at 2813 Dundas St W in The Junction is open 24 hours daily. Walk in any hour — no appointment needed.",
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
    q: "What is the cheapest weed at Gas Junction Cannabis?",
    a: "Budget flower is shown from $3/g, with AA and AAA+ tiers listed separately. Confirm current pricing and listings on the menu before visiting.",
  },
] as const;
