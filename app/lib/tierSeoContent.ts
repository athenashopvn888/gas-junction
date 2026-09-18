export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed at Keele & Dundas | Gas Junction Cannabis",
    seoIntro:
      "Exotic Weed is the top-shelf flower collection at Gas Junction Cannabis on Dundas West. Shoppers who already walk the Keele & Dundas strip use this tier when they want the loudest, most limited jars in the shop — not a generic Toronto exotic list.",
    sections: [
      {
        heading: "Top-shelf flower for the Dundas West walk-in",
        body:
          "Exotic Weed sits at the top of the Gas Junction Cannabis flower wall. It is the collection for Junction regulars who want the headliner jars after dinner on Dundas, or for High Park North and Junction Triangle adults who came specifically for this tier rather than a mid-shelf pick.",
      },
      {
        heading: "How Exotic Weed sits beside the other four collections",
        body:
          "Premium Weed is the step under this tier, then AAA+ Weed, AA Weed, and Budget Weed. Move between those collections when you want a different spend or a more everyday jar. Exotic Weed stays the narrow owner for the highest flower band at this Keele & Dundas counter.",
      },
    ],
    faqs: [
      {
        q: "What makes Exotic Weed different from Premium Weed at Gas Junction Cannabis?",
        a: "Exotic Weed is the top flower band at this Dundas West shop. Premium Weed is the collection directly under it for shoppers who want a strong jar without stepping all the way into Exotic.",
      },
      {
        q: "Who usually shops Exotic Weed around Keele and Dundas?",
        a: "Adults already on the Junction strip, plus walk-ins from Junction Triangle and High Park North who came for the loudest flower this counter puts out — not a city-wide exotic catalogue.",
      },
      {
        q: "Which other flower collections sit under Exotic Weed?",
        a: "Premium Weed, AAA+ Weed, AA Weed, and Budget Weed. Each collection is a separate band so you can compare without treating one label as a universal ranking.",
      },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed in The Junction | Gas Junction Cannabis",
    seoIntro:
      "Premium Weed is the connoisseur-grade flower collection at Gas Junction Cannabis in The Junction. It is the band Junction shoppers use when they want a polished jar without jumping to Exotic Weed — a neighbourhood collection, not a Toronto premium directory.",
    sections: [
      {
        heading: "Connoisseur flower on the Junction strip",
        body:
          "Premium Weed is built for adults walking Dundas West who want a refined jar for the night, not the cheapest gram and not the exotic headliner. It is the collection people reach for when they are already in The Junction and want a clear step up from AAA+ Weed.",
      },
      {
        heading: "Premium Weed beside Exotic, AAA+, AA, and Budget",
        body:
          "Exotic Weed sits above this tier. AAA+ Weed, AA Weed, and Budget Weed sit below it. Use Premium Weed when you want that middle-upper band at the Keele & Dundas counter, then hop to a sibling collection if the spend or style should move.",
      },
    ],
    faqs: [
      {
        q: "When is Premium Weed the better pick than Exotic Weed?",
        a: "Choose Premium Weed when you want a polished Junction jar without stepping into the Exotic Weed band. Exotic Weed stays the top collection; Premium Weed is the collection directly under it.",
      },
      {
        q: "Is Premium Weed a Junction neighbourhood collection or a city-wide list?",
        a: "It is the Premium Weed collection for this Keele & Dundas walk-in in The Junction. It is not a Toronto-wide premium directory.",
      },
      {
        q: "Which collections sit beside Premium Weed?",
        a: "Exotic Weed above, then AAA+ Weed, AA Weed, and Budget Weed below. Compare those four siblings when Premium Weed is not the band you want.",
      },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed for Junction Walk-Ins | Gas Junction Cannabis",
    seoIntro:
      "AAA+ Weed is the everyday-plus flower collection at Gas Junction Cannabis for Junction walk-ins. It sits between Premium Weed and AA Weed — proven strains for people already on Dundas West who want more than a value jar without going connoisseur.",
    sections: [
      {
        heading: "Everyday-plus flower at Keele & Dundas",
        body:
          "AAA+ Weed is the workhorse-plus band at this Junction counter. Shoppers coming north from High Park North or cutting over from Junction Triangle use it when they want a familiar, heavier jar that is still not Premium Weed or Exotic Weed.",
      },
      {
        heading: "Where AAA+ Weed sits on the flower wall",
        body:
          "Premium Weed and Exotic Weed sit above AAA+ Weed. AA Weed and Budget Weed sit below it. Stay on AAA+ Weed when that middle band is the point of the stop; move to a sibling collection when you want louder or cheaper flower.",
      },
    ],
    faqs: [
      {
        q: "What does AAA+ Weed cover at Gas Junction Cannabis?",
        a: "AAA+ Weed is the middle flower band for Junction walk-ins — heavier, proven jars that sit under Premium Weed and above AA Weed.",
      },
      {
        q: "Is AAA+ Weed closer to AA Weed or to Premium Weed?",
        a: "It sits between them. Choose AAA+ Weed when AA Weed feels too light and Premium Weed is more jar than you want for this stop.",
      },
      {
        q: "Can Junction Triangle shoppers compare AAA+ Weed with other collections?",
        a: "Yes. Exotic Weed, Premium Weed, AA Weed, and Budget Weed are the four sibling collections beside AAA+ Weed at this Dundas West counter.",
      },
    ],
  },
  AA: {
    seoTitle: "AA Weed Near Junction Triangle | Gas Junction Cannabis",
    seoIntro:
      "AA Weed is the daily-driver flower collection at Gas Junction Cannabis for shoppers coming from Junction Triangle, High Park North, and the Dundas West face. It is familiar, steady flower — not Budget Weed shreds and not the AAA+ step up.",
    sections: [
      {
        heading: "Daily flower east of the rail corridors",
        body:
          "AA Weed is the collection Junction Triangle and High Park North walk-ins use when they want a reliable jar without climbing into AAA+ Weed. It is the everyday band on this Dundas West wall, written for people already in the neighbourhood rather than a city-wide AA list.",
      },
      {
        heading: "AA Weed versus Budget Weed and AAA+ Weed",
        body:
          "Budget Weed sits under AA Weed for the value band. AAA+ Weed, Premium Weed, and Exotic Weed sit above it. Stay here when a steady daily jar is the point; move up or down a sibling collection when the stop should be louder or cheaper.",
      },
    ],
    faqs: [
      {
        q: "What is AA Weed for High Park North and Junction Triangle shoppers?",
        a: "AA Weed is the daily-driver flower collection at this Keele & Dundas counter — familiar jars for neighbourhood walk-ins who are not shopping Budget Weed or AAA+ Weed.",
      },
      {
        q: "How is AA Weed different from Budget Weed?",
        a: "Budget Weed is the value band under AA Weed. AA Weed is the step up for shoppers who want a steadier daily jar without moving into AAA+ Weed.",
      },
      {
        q: "Where else can I browse flower besides AA Weed?",
        a: "Budget Weed sits below. AAA+ Weed, Premium Weed, and Exotic Weed sit above. Those four sibling collections cover the rest of the Gas Junction Cannabis flower wall.",
      },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed on Dundas West | Gas Junction Cannabis",
    seoIntro:
      "Budget Weed is the value flower collection at Gas Junction Cannabis on Dundas West. It is the band Annette Street, Runnymede, and Junction walk-ins use when the stop is about spend — not a Toronto cheap-weed directory and not the AA daily-driver band.",
    sections: [
      {
        heading: "Value flower on the Dundas face",
        body:
          "Budget Weed is the lowest flower band at this Keele & Dundas counter. Shoppers walking The Junction, dropping down from Annette Street, or coming east from Runnymede use it when they want the value jars without mixing them into AA Weed or AAA+ Weed.",
      },
      {
        heading: "Budget Weed under AA, AAA+, Premium, and Exotic",
        body:
          "AA Weed is the next band up, then AAA+ Weed, Premium Weed, and Exotic Weed. Budget Weed stays the narrow owner for value flower at Gas Junction Cannabis. Compare those four siblings when you want more than a value jar.",
      },
    ],
    faqs: [
      {
        q: "What is Budget Weed at Gas Junction Cannabis?",
        a: "Budget Weed is the value flower collection on this Dundas West wall — the lowest band, kept separate from AA Weed so shoppers can compare spend without mixing the two.",
      },
      {
        q: "Is Budget Weed only for Annette Street and Runnymede walk-ins?",
        a: "No. Those streets are part of the catchment, but Budget Weed is for any adult already in The Junction who wants the value band at Keele & Dundas.",
      },
      {
        q: "Which collections sit above Budget Weed?",
        a: "AA Weed, AAA+ Weed, Premium Weed, and Exotic Weed. Each is a separate flower band at this shop, not a substitute label for Budget Weed.",
      },
    ],
  },
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC:
    "Exotic Weed at Gas Junction Cannabis on Keele & Dundas — top-shelf flower for The Junction walk-in, with Premium, AAA+, AA, and Budget collections beside it.",
  PREMIUM:
    "Premium Weed in The Junction at Gas Junction Cannabis. Connoisseur-grade flower on Dundas West, between Exotic Weed and AAA+ Weed.",
  "AAA+":
    "AAA+ Weed for Junction walk-ins at Gas Junction Cannabis. Everyday-plus flower at Keele & Dundas, between Premium Weed and AA Weed.",
  AA:
    "AA Weed near Junction Triangle at Gas Junction Cannabis. Daily-driver flower on Dundas West, between AAA+ Weed and Budget Weed.",
  BUDGET:
    "Budget Weed on Dundas West at Gas Junction Cannabis. Value flower for The Junction, Annette Street, and Runnymede walk-ins, under AA Weed.",
};

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed at Keele & Dundas",
  PREMIUM: "Premium Weed in The Junction",
  "AAA+": "AAA+ Weed for Junction Walk-Ins",
  AA: "AA Weed Near Junction Triangle",
  BUDGET: "Budget Weed on Dundas West",
};
