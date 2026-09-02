export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "Gas Junction Cannabis presents Exotic Weed as one of its established Cannabis Flower collections for shoppers who want to explore this tier within the broader Weed selection. Browse the collection, review the product information shown with individual items, and compare Exotic Weed with other flower collections that interest you.",
    sections: [
      { heading: "Explore Exotic Weed at Gas Junction Cannabis", body: "Exotic Weed gives shoppers a focused Cannabis Flower collection to browse at Gas Junction Cannabis. Explore the products presented within this tier and use the information shown with each item to learn more as you browse." },
      { heading: "Compare Exotic Weed with Other Flower Collections", body: "Gas Junction Cannabis also organizes flower into Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Exploring more than one collection can help you compare different parts of the Cannabis Flower selection without assuming that one tier is the right choice for every shopper." },
    ],
    faqs: [
      { q: "What is Exotic Weed at Gas Junction Cannabis?", a: "Exotic Weed is one of Gas Junction Cannabis’s dedicated Cannabis Flower collections." },
      { q: "Can I compare Exotic Weed with other Gas Junction Cannabis flower collections?", a: "Yes. You can also explore Premium Weed, AAA+ Weed, AA Weed and Budget Weed." },
      { q: "Where can I start if I want broader Weed browsing?", a: "Use Gas Junction Cannabis’s established broader Weed selection in Toronto, then explore a specific flower collection when one interests you." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "Premium Weed is a dedicated Gas Junction Cannabis Cannabis Flower collection for shoppers who want to explore this tier within the broader Weed selection. Browse the products presented in the collection and compare Premium Weed with other flower collections as you explore.",
    sections: [
      { heading: "Browse Premium Weed at Gas Junction Cannabis", body: "Gas Junction Cannabis brings Premium Weed together as one of its established flower collections. Shoppers can explore the Cannabis Flower products presented within this tier and review the information shown with individual items." },
      { heading: "Explore Premium Weed Alongside Other Weed Collections", body: "Premium Weed sits alongside Exotic Weed, AAA+ Weed, AA Weed and Budget Weed. Each collection gives shoppers another part of the Gas Junction Cannabis flower selection to explore without suggesting that one tier is inherently better than another." },
    ],
    faqs: [
      { q: "What can I explore in the Premium Weed collection?", a: "Premium Weed contains the Cannabis Flower products presented within Gas Junction Cannabis’s Premium collection." },
      { q: "What other Weed flower collections are available to explore?", a: "Gas Junction Cannabis also organizes flower into Exotic Weed, AAA+ Weed, AA Weed and Budget Weed." },
      { q: "Can I browse broadly before choosing a flower collection?", a: "Yes. Gas Junction Cannabis’s broader Toronto Weed selection provides a wider starting point before narrowing your browsing to a specific flower collection." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "Gas Junction Cannabis AAA+ Weed gives shoppers a dedicated Cannabis Flower collection to explore within the broader Weed selection. Browse the products presented in this tier, compare them with other Gas Junction Cannabis flower collections, and use the information shown with individual items as you explore.",
    sections: [
      { heading: "Explore the AAA+ Weed Flower Collection", body: "AAA+ Weed is one of Gas Junction Cannabis’s established flower collections. It gives shoppers a focused section for exploring the Cannabis Flower products presented within this tier." },
      { heading: "Compare AAA+ Weed with Other Gas Junction Cannabis Collections", body: "AAA+ Weed can be explored alongside Exotic Weed, Premium Weed, AA Weed and Budget Weed. Moving between several collections gives shoppers different parts of the Gas Junction Cannabis flower selection to consider without assigning a universal ranking between them." },
    ],
    faqs: [
      { q: "What is AAA+ Weed at Gas Junction Cannabis?", a: "AAA+ Weed is a dedicated Cannabis Flower collection within the broader Gas Junction Cannabis Weed selection." },
      { q: "Can I compare AAA+ Weed with other flower collections?", a: "Yes. You can also explore Exotic Weed, Premium Weed, AA Weed and Budget Weed." },
      { q: "Where can I browse Gas Junction Cannabis Weed more broadly?", a: "Use the established broader Toronto Weed selection when you want to explore beyond one specific flower collection." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "AA Weed is one of Gas Junction Cannabis’s dedicated Cannabis Flower collections, giving shoppers a focused way to explore this part of the Weed selection. Browse the collection, review the information presented with individual products, and compare AA Weed with the other flower collections that interest you.",
    sections: [
      { heading: "Explore AA Weed Cannabis Flower", body: "Gas Junction Cannabis organizes AA Weed as a dedicated flower collection within its broader Weed selection. Shoppers can explore the Cannabis Flower products presented within this tier and continue comparing other collections as they browse." },
      { heading: "Compare AA Weed with Other Flower Collections", body: "AA Weed can be explored alongside Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed. The collections give shoppers several ways to browse Gas Junction Cannabis flower without treating one tier as automatically preferable." },
    ],
    faqs: [
      { q: "What is the AA Weed collection at Gas Junction Cannabis?", a: "AA Weed is one of Gas Junction Cannabis’s dedicated Cannabis Flower collections." },
      { q: "What other flower collections can I compare with AA Weed?", a: "You can also explore Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
      { q: "Can I start with broader Weed browsing first?", a: "Yes. Gas Junction Cannabis’s broader Toronto Weed selection gives you a wider starting point before exploring a specific flower collection." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower in Toronto | Gas Junction Cannabis",
    seoIntro: "Gas Junction Cannabis Budget Weed is a dedicated Cannabis Flower collection for shoppers who want to explore this part of the broader Weed selection. Browse the products presented within the collection and compare Budget Weed with other Gas Junction Cannabis flower collections as you explore.",
    sections: [
      { heading: "Explore the Budget Weed Flower Collection", body: "Budget Weed gives Gas Junction Cannabis shoppers a focused Cannabis Flower collection to browse. Explore the products presented within this tier and use the information shown with individual items as you continue." },
      { heading: "Compare Budget Weed with Other Weed Flower Collections", body: "Gas Junction Cannabis also organizes flower into AA Weed, AAA+ Weed, Premium Weed and Exotic Weed. Shoppers can explore more than one collection and compare the sections that interest them without assuming that one tier is inherently better than another." },
    ],
    faqs: [
      { q: "What is Budget Weed at Gas Junction Cannabis?", a: "Budget Weed is one of Gas Junction Cannabis’s dedicated Cannabis Flower collections within the broader Weed selection." },
      { q: "Can I compare Budget Weed with other Gas Junction Cannabis flower tiers?", a: "Yes. Budget Weed can be explored alongside AA Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
      { q: "Where can I browse more than one type of Weed at Gas Junction Cannabis?", a: "Use Gas Junction Cannabis’s established broader Toronto Weed selection for a wider starting point, then explore any flower collection that interests you." },
    ],
  },
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC: "Explore Exotic Weed and Cannabis Flower at Gas Junction Cannabis in Toronto, alongside four other established flower collections.",
  PREMIUM: "Explore Premium Weed and Cannabis Flower at Gas Junction Cannabis in Toronto, alongside four other established flower collections.",
  "AAA+": "Explore AAA+ Weed and Cannabis Flower at Gas Junction Cannabis in Toronto, alongside four other established flower collections.",
  AA: "Explore AA Weed and Cannabis Flower at Gas Junction Cannabis in Toronto, alongside four other established flower collections.",
  BUDGET: "Explore Budget Weed and Cannabis Flower at Gas Junction Cannabis in Toronto, alongside four other established flower collections.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed & Cannabis Flower in Toronto",
  PREMIUM: "Premium Weed & Cannabis Flower in Toronto",
  "AAA+": "AAA+ Weed & Cannabis Flower in Toronto",
  AA: "AA Weed & Cannabis Flower in Toronto",
  BUDGET: "Budget Weed & Cannabis Flower in Toronto",
};
