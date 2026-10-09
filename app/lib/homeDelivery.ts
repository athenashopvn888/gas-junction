/** Homepage delivery block for the GJC01 Junction service area. Existing URLs only. */

export const HOME_TITLE =
  "Gas Junction Cannabis Dispensary - Weed Delivery in The Junction";

export const HOME_DELIVERY_H2 = "Weed Delivery in The Junction";

export const HOME_DELIVERY_PARAGRAPHS = [
  "Gas Junction Cannabis offers local weed delivery from 2813 Dundas St W for The Junction, High Park, and Bloor West Village. Delivery runs in the posted 10:00 a.m. to 10:00 p.m. window, while the Keele & Dundas walk-in stays open 24 hours daily. Adults 19+ need valid government-issued photo ID.",
  "Browse the delivery menu for current listings, note the product names and weights, then use LIVE ORDER to reach the Gas Junction dispatcher. New customers complete private selfie-with-ID verification in web chat. The dispatcher confirms availability, the address inside the local radius, and the next steps before an order moves.",
  "The delivery menu lists a $60 product minimum and a $10 delivery fee. Menu listings can change, so use the delivery catalog for current details rather than treating this homepage section as a stock promise. This is a neighbourhood delivery route, not a far-city directory.",
] as const;

export const HOME_DELIVERY_CARDS = [
  {
    href: "/delivery",
    title: "View the delivery menu",
    text: "Browse current delivery listings and connect with the Gas Junction dispatcher through LIVE ORDER.",
  },
  {
    href: "/cannabis-delivery-junction",
    title: "The Junction delivery guide",
    text: "Review the local radius, delivery window, ID steps, and how delivery differs from the 24-hour walk-in.",
  },
  {
    href: "/faq",
    title: "Store and delivery FAQ",
    text: "Read quick answers about the Keele & Dundas store, adult ID, menus, and neighbourhood delivery.",
  },
  {
    href: "/visit",
    title: "Visit the dispensary",
    text: "Use the walk-in guide when you would rather shop at the 24-hour Junction counter.",
  },
] as const;

export const HOME_DELIVERY_FAQS = [
  {
    q: "What time does Gas Junction weed delivery run?",
    a: "Delivery is posted from 10:00 a.m. to 10:00 p.m. daily. The walk-in at 2813 Dundas St W is open 24 hours, but storefront hours do not mean overnight delivery.",
  },
  {
    q: "Which neighbourhoods are in the Gas Junction delivery area?",
    a: "The listed local radius covers The Junction, High Park, and Bloor West Village. The dispatcher confirms the exact address before the order proceeds.",
  },
  {
    q: "What are the delivery minimum and fee?",
    a: "The delivery menu lists a $60 product minimum and a $10 delivery fee. The dispatcher confirms availability and delivery details before checkout.",
  },
  {
    q: "How do I start a delivery order?",
    a: "Open the delivery menu, note the product names and weights, then use LIVE ORDER to reach the Gas Junction dispatcher. New customers complete private selfie-with-ID verification in web chat.",
  },
  {
    q: "Do I need photo ID for delivery?",
    a: "Yes. Cannabis delivery and the walk-in are for adults 19+ with valid government-issued photo ID.",
  },
  {
    q: "Is delivery the same as the 24-hour dispensary?",
    a: "No. The Keele & Dundas dispensary is open 24 hours daily. Delivery is a separate local service with a posted 10:00 a.m. to 10:00 p.m. window.",
  },
] as const;

// Document <title> only (exact Google name | area). H1 keeps HOME_TITLE.
export const HOME_DOC_TITLE = "Gas Junction Cannabis Dispensary Weed Delivery | The Junction";
