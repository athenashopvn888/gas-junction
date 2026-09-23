import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tierCopy = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const products = readFileSync("app/lib/products.ts", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const resources = readFileSync("app/resources/resourceData.ts", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");
const itemCategoryPage = readFileSync("app/items/[category]/page.tsx", "utf8");

test("all five verified Gas Junction tier keys have approved copy", () => {
  for (const key of ["EXOTIC", "PREMIUM", '"AAA+"', "AA", "BUDGET"]) {
    assert.ok(tierCopy.includes(`${key}:`), `missing ${key}`);
  }
  assert.match(tierPage, /TIER_META_DESCRIPTION\[tierInfo\.key\]/);
  assert.match(tierPage, /TIER_H1\[tierInfo\.key\]/);
});

test("tier canonicals and the Junction visit hub stay in place", () => {
  assert.match(
    tierPage,
    /canonical: `https:\/\/www\.gasjunctioncannabis\.com\/\$\{tierSlug\}`/,
  );
  assert.match(footer, /href="\/visit"/);
  assert.doesNotMatch(footer, /href="\/weed-dispensary-toronto"/);
});

test("tier pages publish stable CollectionPage, ItemList and FAQPage schema", () => {
  assert.match(tierPage, /"@type": "CollectionPage"/);
  assert.match(tierPage, /"@type": "ItemList"/);
  assert.match(tierPage, /"@type": "FAQPage"/);
  assert.doesNotMatch(tierPage, /"@type": "Offer"/);
});

test("Version 2 Weed routes are the sole configured tier and guide owners", () => {
  const routeMap = [
    ["exotic", "exotic-weed"],
    ["premium", "premium-weed"],
    ["aaa", "aaa-weed"],
    ["aa", "aa-weed"],
    ["budget", "budget-weed"],
  ];

  for (const [legacy, canonical] of routeMap) {
    assert.match(redirects, new RegExp(`source: "/${legacy}", destination: "/${canonical}", permanent: true`));
    assert.match(products, new RegExp(`slug: "${canonical}"`));
    assert.doesNotMatch(navbar, new RegExp(`href: "/${legacy}"`));
    assert.doesNotMatch(home, new RegExp(`slug: "${legacy}"`));
  }

  assert.match(redirects, /source: "\/resources\/flower-guide", destination: "\/resources\/weed-flower-guide", permanent: true/);
  assert.match(resources, /slug: "weed-flower-guide"/);
  assert.doesNotMatch(resources, /href: "\/resources\/flower-guide"/);
  assert.match(footer, /href="\/visit"/);
  assert.doesNotMatch(footer, /href="\/weed-dispensary-toronto"/);
});

test("customer-facing tier labels include Weed", () => {
  for (const label of ["Exotic Weed", "Premium Weed", "AAA+ Weed", "AA Weed", "Budget Weed"]) {
    assert.ok(products.includes(`name: "${label}"`));
    assert.ok(navbar.includes(`label: "${label}"`));
    assert.ok(footer.includes(`>${label}</Link>`));
  }
});

test("GJC01 nicotine and THC vape categories remain separate", () => {
  const nicotine = products.slice(products.indexOf('"VAPE PENS"'), products.indexOf('"VAPE DISPOSABLE"'));
  const thc = products.slice(products.indexOf('"VAPE DISPOSABLE"'), products.indexOf("CONCENTRATES:"));
  assert.match(nicotine, /name: "Nicotine Vape"/);
  assert.match(nicotine, /seoTitle: "Nicotine Vape Menu at Keele & Dundas \| Gas Junction Cannabis"/);
  assert.match(nicotine, /stays separate from THC vapes/);
  assert.match(thc, /name: "THC Vape"/);
  assert.match(navbar, /href: "\/items\/vapes", label: "Nicotine Vape"/);
  assert.match(navbar, /href: "\/items\/vape-disposables", label: "THC Vape"/);
  assert.match(itemCategoryPage, /vapes: "Nicotine Vape Menu at Keele & Dundas"/);
  assert.match(itemCategoryPage, /<h1 className=\{styles\.heroTitle\}>\{categoryH1\}<\/h1>/);
});

test("held delivery route and behavior remain outside the migration", () => {
  assert.doesNotMatch(redirects, /weed-delivery/);
  assert.match(navbar, /href: "\/delivery", label: "🚗 Delivery"/);
  assert.match(home, /href="\/delivery"/);
});

test("new tier copy omits the unresolved NAP and commercial claims", () => {
  assert.doesNotMatch(tierCopy, /2813 Dundas|437[- )]|24 hours/i);
  assert.doesNotMatch(tierCopy, /now in stock|available today|free delivery|sale price|posted prices|current menu/i);
  assert.doesNotMatch(tierCopy, /\b(page|site structure|architecture|canonical|SEO owner|search intent|workflow)\b/i);
});

test("refreshed Weed flower guide omits hard-coded commercial claims", () => {
  const guide = resources.slice(resources.indexOf('slug: "weed-flower-guide"'), resources.indexOf('slug: "value-guide"'));
  assert.match(guide, /title: "Gas Junction Weed & Flower Tier Guide"/);
  assert.match(resources, /title: "Explore Gas Junction Cannabis Weed in The Junction"[\s\S]*href: "\/"/);
  assert.doesNotMatch(resources, /href: "\/weed-dispensary-toronto"/);
  assert.doesNotMatch(guide, /\$|\b(price|deal|bundle|stock|availability|potency|THC)\b/i);
});
