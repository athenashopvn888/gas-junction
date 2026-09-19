import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { CATEGORY_CONFIG } from "../app/lib/products.ts";
import {
  CANNABIS_DELIVERY_JUNCTION,
  NATIVE_CIGARETTES_JUNCTION,
  NICOTINE_VAPE_JUNCTION,
  ORGANIC_VERTICAL_PAGES,
} from "../app/lib/organicVerticalPages.ts";
import { HOME_FAQS, LOCAL_MESH_LINKS, TIER_MESH_LINKS } from "../app/lib/store.ts";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const hoursPage = readFileSync("app/24-hour-junction-dispensary/page.tsx", "utf8");
const visitPage = readFileSync("app/visit/page.tsx", "utf8");
const homePage = readFileSync("app/page.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const deliveryPage = readFileSync("app/delivery/page.tsx", "utf8");
const deliveryCatalog = readFileSync("app/delivery/DeliveryCatalog.tsx", "utf8");
const nearMe = SEO_PAGES.find((page) => page.slug === "weed-store-near-the-junction");

test("Big Three Junction LPs have unique titles, H1s, and FAQ questions", () => {
  const titles = ORGANIC_VERTICAL_PAGES.map((page) => page.title);
  const h1s = ORGANIC_VERTICAL_PAGES.map((page) => page.h1);
  const faqs = ORGANIC_VERTICAL_PAGES.flatMap((page) => page.faqs.map((faq) => faq.q));

  assert.equal(new Set(titles).size, titles.length);
  assert.equal(new Set(h1s).size, h1s.length);
  assert.equal(new Set(faqs).size, faqs.length);

  assert.equal(CANNABIS_DELIVERY_JUNCTION.path, "/cannabis-delivery-junction");
  assert.equal(NATIVE_CIGARETTES_JUNCTION.path, "/native-cigarettes-junction");
  assert.equal(NICOTINE_VAPE_JUNCTION.path, "/nicotine-vape-junction");

  assert.equal(CANNABIS_DELIVERY_JUNCTION.h1, "Cannabis Delivery in The Junction");
  assert.equal(NATIVE_CIGARETTES_JUNCTION.h1, "Native Cigarettes in The Junction");
  assert.equal(NICOTINE_VAPE_JUNCTION.h1, "Nicotine Vape in The Junction");
});

test("Big Three H1s stay distinct from visit, 24h, and near-me owners", () => {
  const ownerH1s = [
    "The Junction — How to Get to Gas Junction Cannabis",
    "24-Hour Dispensary in The Junction",
    nearMe?.h1,
    ...ORGANIC_VERTICAL_PAGES.map((page) => page.h1),
  ];
  assert.ok(nearMe?.h1);
  assert.equal(new Set(ownerH1s).size, ownerH1s.length);
});

test("mesh includes homepage, visit, 24h, geo, Big Three, delivery menu, and tiers", () => {
  const hrefs = LOCAL_MESH_LINKS.map((link) => link.href);
  for (const href of [
    "/",
    "/visit",
    "/24-hour-junction-dispensary",
    "/info/weed-store-near-the-junction",
    "/cannabis-delivery-junction",
    "/delivery",
    "/native-cigarettes-junction",
    "/nicotine-vape-junction",
  ]) {
    assert.ok(hrefs.includes(href), `missing mesh link ${href}`);
  }
  assert.deepEqual(
    TIER_MESH_LINKS.map((link) => link.href),
    ["/exotic-weed", "/premium-weed", "/aaa-weed", "/aa-weed", "/budget-weed"],
  );
});

test("nicotine Junction LP links the vape category and does not invent prices", () => {
  assert.equal(NICOTINE_VAPE_JUNCTION.primaryHref, "/items/vapes");
  assert.match(NICOTINE_VAPE_JUNCTION.lede, /\/items\/vapes|nicotine vape category/i);
  assert.match(NICOTINE_VAPE_JUNCTION.warning ?? "", /Nicotine is addictive/);
  const blob = [
    NICOTINE_VAPE_JUNCTION.lede,
    ...NICOTINE_VAPE_JUNCTION.panels.map((panel) => panel.body),
    ...NICOTINE_VAPE_JUNCTION.sections.map((section) => section.body),
    ...NICOTINE_VAPE_JUNCTION.faqs.map((faq) => `${faq.q} ${faq.a}`),
  ].join("\n");
  assert.doesNotMatch(blob, /\$\d/);
  assert.match(blob, /does not invent|does not list prices/i);
});

test("delivery Junction LP stays neighbourhood-scoped and meshes the menu", () => {
  assert.equal(CANNABIS_DELIVERY_JUNCTION.primaryHref, "/delivery");
  assert.match(CANNABIS_DELIVERY_JUNCTION.lede, /The Junction, High Park, and Bloor West Village/);
  assert.match(CANNABIS_DELIVERY_JUNCTION.lede, /not a city-wide Toronto delivery listing/);
  assert.match(deliveryPage, /DeliverySeoBridge/);
  assert.match(deliveryCatalog, /cannabis-delivery-junction/);
});

test("24h LP gained open-now / near-me FAQ and Big Three mesh", () => {
  assert.match(hoursPage, /24-hour dispensary near me around Keele/);
  assert.match(hoursPage, /open now if I am in Junction Triangle/);
  assert.match(hoursPage, /open now include cannabis delivery/);
  assert.match(hoursPage, /cannabis-delivery-junction/);
  assert.match(hoursPage, /Open now \/ near me on Dundas West/);
});

test("homepage and visit mesh the new Junction verticals", () => {
  assert.match(homePage, /cannabis-delivery-junction/);
  assert.match(homePage, /native-cigarettes-junction/);
  assert.match(homePage, /nicotine-vape-junction/);
  assert.match(visitPage, /cannabis-delivery-junction/);
  assert.match(visitPage, /native-cigarettes-junction/);
  assert.match(visitPage, /nicotine-vape-junction/);
  assert.ok(HOME_FAQS.some((faq) => /deliver cannabis in The Junction/.test(faq.q)));
});

test("cigarettes and vapes category SEO is Junction-true", () => {
  assert.match(CATEGORY_CONFIG.CIGARETTES.seoTitle, /Keele & Dundas/);
  assert.doesNotMatch(CATEGORY_CONFIG.CIGARETTES.seoTitle, /Toronto/);
  assert.match(CATEGORY_CONFIG.CIGARETTES.seoIntro, /The Junction/);
  assert.match(CATEGORY_CONFIG["VAPE PENS"].seoTitle, /Keele & Dundas/);
  assert.doesNotMatch(CATEGORY_CONFIG["VAPE PENS"].seoTitle, /Toronto/);
  assert.match(CATEGORY_CONFIG["VAPE PENS"].seoIntro, /nicotine vape in The Junction/);
});

test("sitemap lists the three Junction vertical LPs", () => {
  assert.match(sitemap, /\/cannabis-delivery-junction/);
  assert.match(sitemap, /\/native-cigarettes-junction/);
  assert.match(sitemap, /\/nicotine-vape-junction/);
});

test("new copy stays 19+ and avoids medical or fleet language", () => {
  const blob = ORGANIC_VERTICAL_PAGES.map((page) =>
    [page.lede, page.warning, ...page.sections.map((section) => section.body), ...page.faqs.map((faq) => faq.a)].join("\n"),
  ).join("\n");
  assert.match(blob, /19\+/);
  assert.doesNotMatch(blob, /\bmedical\b|\bprescription\b|\bfleet\b/i);
});
