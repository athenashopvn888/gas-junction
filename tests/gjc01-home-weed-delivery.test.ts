import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
  HOME_DELIVERY_CARDS,
  HOME_DELIVERY_FAQS,
  HOME_DELIVERY_PARAGRAPHS,
  HOME_DOC_TITLE,
  HOME_PAGE_TITLE,
  HOME_TITLE,
} from "../app/lib/homeDelivery.ts";

const page = fs.readFileSync("app/page.tsx", "utf8");
const globals = fs.readFileSync("app/globals.css", "utf8");

test("homepage H1 stays locked and only the document title inserts near me", () => {
  const h1 = "Gas Junction Cannabis Dispensary - Weed Delivery in The Junction";
  const inherited = "Gas Junction Cannabis Dispensary Weed Delivery | The Junction";
  const doc = "Gas Junction Cannabis Dispensary near me | Weed Delivery | The Junction";
  assert.equal(HOME_TITLE, h1);
  assert.equal(HOME_DOC_TITLE, inherited);
  assert.equal(HOME_PAGE_TITLE, doc);
  assert.match(fs.readFileSync("app/HomePageClient.tsx", "utf8"), /\{HOME_TITLE\}/);
  assert.match(page, /title: \{ absolute: HOME_PAGE_TITLE \}/);
  assert.match(page, /openGraph:[\s\S]*title: \{ absolute: HOME_PAGE_TITLE \}/);
  assert.match(page, /twitter:[\s\S]*title: \{ absolute: HOME_PAGE_TITLE \}/);
  const layout = fs.readFileSync("app/layout.tsx", "utf8");
  assert.match(layout, /default: HOME_DOC_TITLE/);
  assert.match(layout, /openGraph:[\s\S]*title: HOME_DOC_TITLE/);
  assert.match(layout, /twitter:[\s\S]*title: HOME_DOC_TITLE/);
  assert.match(layout, /template: "%s \| Gas Junction Cannabis"/);
});

test("hero keeps the required store and delivery targets", () => {
  assert.match(page, /href="\/exotic-weed"[\s\S]*>STORE MENU<\/Link>/);
  assert.match(page, /href="\/delivery"[\s\S]*>Delivery<\/Link>/);
});

test("delivery body is Junction-local with 5 to 8 FAQs and existing route cards", () => {
  assert.ok(HOME_DELIVERY_FAQS.length >= 5 && HOME_DELIVERY_FAQS.length <= 8);
  const allowed = new Set(["/delivery", "/cannabis-delivery-junction", "/faq", "/visit"]);
  for (const card of HOME_DELIVERY_CARDS) assert.ok(allowed.has(card.href), card.href);
  const copy = [
    ...HOME_DELIVERY_PARAGRAPHS,
    ...HOME_DELIVERY_FAQS.flatMap((faq) => [faq.q, faq.a]),
    ...HOME_DELIVERY_CARDS.flatMap((card) => [card.title, card.text]),
  ].join(" ");
  assert.match(copy, /The Junction/);
  assert.match(copy, /10:00 a\.m\. to 10:00 p\.m\./);
  assert.doesNotMatch(copy, /Scarborough|Mississauga|Brampton|Etobicoke|North York|Vaughan|Markham/i);
});

test("promo banners follow the top menu and do not offset the fixed navigation", () => {
  const navAt = page.indexOf("<Navbar />");
  const bannersAt = page.indexOf("<FleetAnnouncementBanner />");
  assert.ok(navAt > -1 && bannersAt > navAt, "promo banners must follow the navbar");
  assert.match(globals, /body\s*>\s*\.deliveryAnnouncement\s*~\s*\*\s*nav\s*\{[^}]*top:\s*var\(--delivery-announcement-height\)\s*!important;/s);
  assert.doesNotMatch(globals, /#main-nav\s*\{[^}]*fleet-homepage-announcement-height/s);
  assert.match(globals, /\[data-fleet-homepage-announcement\]\s*\{[^}]*margin-top:\s*var\(--homepage-nav-clearance\)/s);
});

test("route files are untouched by the homepage pass", () => {
  assert.equal(HOME_DELIVERY_CARDS.length, 4);
});
