import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import {
  HOME_DELIVERY_CARDS,
  HOME_DELIVERY_FAQS,
  HOME_DELIVERY_PARAGRAPHS,
  HOME_TITLE,
} from "../app/lib/homeDelivery.ts";

const page = fs.readFileSync("app/page.tsx", "utf8");
const globals = fs.readFileSync("app/globals.css", "utf8");

test("homepage title, Open Graph title, and H1 use the locked phrase", () => {
  const locked = "Gas Junction Cannabis - Weed Delivery & Cannabis Dispensary in The Junction";
  assert.equal(HOME_TITLE, locked);
  assert.match(page, /\{HOME_TITLE\}/);
  const layout = fs.readFileSync("app/layout.tsx", "utf8");
  assert.match(layout, /default: HOME_TITLE/);
  assert.match(layout, /openGraph:[\s\S]*title: HOME_TITLE/);
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
