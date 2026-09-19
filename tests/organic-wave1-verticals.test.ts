import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";

const verticals = readFileSync("app/lib/organicVerticalPages.ts", "utf8");
const store = readFileSync("app/lib/store.ts", "utf8");
const products = readFileSync("app/lib/products.ts", "utf8");
const hoursPage = readFileSync("app/24-hour-junction-dispensary/page.tsx", "utf8");
const visitPage = readFileSync("app/visit/page.tsx", "utf8");
const homePage = readFileSync("app/page.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const deliveryPage = readFileSync("app/delivery/page.tsx", "utf8");
const deliveryCatalog = readFileSync("app/delivery/DeliveryCatalog.tsx", "utf8");
const seoPages = readFileSync("app/lib/seoPages.ts", "utf8");

const h1s = [
  verticals.match(/h1: "Cannabis Delivery in The Junction"/),
  verticals.match(/h1: "Native Cigarettes in The Junction"/),
  verticals.match(/h1: "Nicotine Vape in The Junction"/),
  hoursPage.match(/<h1>24-Hour Dispensary Open Now in The Junction<\/h1>/),
  visitPage.match(/<h1>The Junction — How to Get to Gas Junction Cannabis<\/h1>/),
  seoPages.match(/h1: "Weed Dispensary in The Junction"/),
];

test("Big Three Junction LPs have unique titles, H1s, and FAQ questions", () => {
  assert.match(verticals, /path: "\/cannabis-delivery-junction"/);
  assert.match(verticals, /path: "\/native-cigarettes-junction"/);
  assert.match(verticals, /path: "\/nicotine-vape-junction"/);
  assert.match(verticals, /title: "Cannabis Delivery in The Junction \| Gas Junction Cannabis"/);
  assert.match(verticals, /title: "Native Cigarettes in The Junction \| Gas Junction Cannabis"/);
  assert.match(verticals, /title: "Nicotine Vape in The Junction \| Gas Junction Cannabis"/);
  assert.equal(h1s.filter(Boolean).length, h1s.length);
  assert.equal(new Set(h1s.map((match) => match?.[0])).size, h1s.length);

  const faqQuestions = [...verticals.matchAll(/q: "([^"]+)"/g)].map((match) => match[1]);
  assert.ok(faqQuestions.length >= 12);
  assert.equal(new Set(faqQuestions).size, faqQuestions.length);
});

test("mesh includes homepage, visit, 24h, geo, Big Three, delivery menu, and tiers", () => {
  for (const href of [
    '"/"',
    '"/visit"',
    '"/24-hour-junction-dispensary"',
    '"/info/weed-store-near-the-junction"',
    '"/cannabis-delivery-junction"',
    '"/delivery"',
    '"/native-cigarettes-junction"',
    '"/nicotine-vape-junction"',
    '"/exotic-weed"',
    '"/premium-weed"',
    '"/aaa-weed"',
    '"/aa-weed"',
    '"/budget-weed"',
  ]) {
    assert.ok(store.includes(`href: ${href}`), `missing mesh href ${href}`);
  }
});

test("nicotine Junction LP links the vape category and does not invent prices", () => {
  const nicotineBlock = verticals.slice(verticals.indexOf("NICOTINE_VAPE_JUNCTION"));
  assert.match(nicotineBlock, /primaryHref: "\/items\/vapes"/);
  assert.match(nicotineBlock, /Nicotine is addictive/);
  assert.doesNotMatch(nicotineBlock, /\$\d/);
  assert.match(nicotineBlock, /does not invent|does not list prices/i);
});

test("delivery Junction LP stays neighbourhood-scoped and meshes the menu", () => {
  assert.match(verticals, /primaryHref: "\/delivery"/);
  assert.match(verticals, /The Junction, High Park, and Bloor West Village/);
  assert.match(verticals, /not a city-wide Toronto delivery listing/);
  assert.match(deliveryPage, /DeliverySeoBridge/);
  assert.match(deliveryCatalog, /cannabis-delivery-junction/);
});

test("24h LP is first-class open-now / 24h-near-me and meshes the Big Three", () => {
  assert.match(hoursPage, /24-Hour Dispensary Open Now in The Junction/);
  assert.match(hoursPage, /24-hour dispensary near me around Keele/);
  assert.match(hoursPage, /open now if I am in Junction Triangle/);
  assert.match(hoursPage, /open now include cannabis delivery/);
  assert.match(hoursPage, /cannabis-delivery-junction/);
  assert.match(hoursPage, /native-cigarettes-junction/);
  assert.match(hoursPage, /nicotine-vape-junction/);
  assert.match(hoursPage, /Open now \/ 24h near me questions/);
  assert.match(store, /Open now — 24-hour Junction dispensary/);
  assert.match(verticals, /Open now — 24-hour dispensary/);
  assert.equal((verticals.match(/Open now — 24-hour dispensary/g) || []).length, 3);
  assert.match(sitemap, /24-hour-junction-dispensary[\s\S]*priority: 0\.8/);
  assert.match(sitemap, /cannabis-delivery-junction[\s\S]*priority: 0\.8/);
  assert.match(sitemap, /native-cigarettes-junction[\s\S]*priority: 0\.8/);
  assert.match(sitemap, /nicotine-vape-junction[\s\S]*priority: 0\.8/);
});

test("homepage and visit mesh the new Junction verticals", () => {
  assert.match(homePage, /cannabis-delivery-junction/);
  assert.match(homePage, /native-cigarettes-junction/);
  assert.match(homePage, /nicotine-vape-junction/);
  assert.match(visitPage, /cannabis-delivery-junction/);
  assert.match(visitPage, /native-cigarettes-junction/);
  assert.match(visitPage, /nicotine-vape-junction/);
  assert.match(store, /Do you deliver cannabis in The Junction\?/);
  assert.match(store, /Is there a 24-hour dispensary open now in The Junction\?/);
});

test("cigarettes and vapes category SEO is Junction-true", () => {
  assert.match(products, /seoTitle: "Cigarette Menu at Keele & Dundas \| Gas Junction Cannabis"/);
  assert.match(products, /seoTitle: "Nicotine Vape Menu at Keele & Dundas \| Gas Junction Cannabis"/);
  assert.doesNotMatch(products, /Native Cigarettes Toronto — Discount Tobacco/);
  assert.doesNotMatch(products, /Nicotine Vapes Toronto \| Gas Junction Cannabis/);
});

test("sitemap lists the three Junction vertical LPs", () => {
  assert.match(sitemap, /\/cannabis-delivery-junction/);
  assert.match(sitemap, /\/native-cigarettes-junction/);
  assert.match(sitemap, /\/nicotine-vape-junction/);
});

test("new copy stays 19+ and avoids prescription or fleet language", () => {
  assert.match(verticals, /19\+/);
  assert.doesNotMatch(verticals, /\bprescription\b|\bfleet\b/i);
});

test("authoritative brief: neighbourhood-only titles and hard menu swimlane ban", () => {
  assert.doesNotMatch(verticals, /weed delivery toronto|native cigarettes toronto|nicotine vapes toronto/i);
  assert.doesNotMatch(verticals, /flowers\.json|items\.json|prebuild-stock|adcInventory/i);
  assert.match(seoPages, /slug: "native-cigarettes-toronto"[\s\S]*canonicalPath: "\/native-cigarettes-junction"/);
  assert.match(seoPages, /slug: "nicotine-vapes-toronto"[\s\S]*canonicalPath: "\/nicotine-vape-junction"/);
  assert.match(sitemap, /native-cigarettes-toronto/);
  assert.match(sitemap, /nicotine-vapes-toronto/);
});
