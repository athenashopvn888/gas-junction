import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const layout = readFileSync("app/layout.tsx", "utf8");
const store = readFileSync("app/lib/store.ts", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const cityPage = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const nextConfig = readFileSync("next.config.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const delivery = readFileSync("app/delivery/DeliveryCatalog.tsx", "utf8");
const deliveryPage = readFileSync("app/delivery/page.tsx", "utf8");
const seoPages = readFileSync("app/lib/seoPages.ts", "utf8");
const publicCopy = [
  layout,
  store,
  home,
  visit,
  cityPage,
  footer,
  navbar,
  delivery,
  deliveryPage,
  readFileSync("app/lib/gbp-location.ts", "utf8"),
  readFileSync("app/lib/weedDiscovery.ts", "utf8"),
  readFileSync("app/resources/resourceData.ts", "utf8"),
].join("\n");

test("CannabisStore JSON-LD stays locked to the homepage NAP", () => {
  assert.match(layout, /"@type": "CannabisStore"/);
  assert.match(layout, /url: STORE\.origin/);
  assert.match(layout, /telephone: STORE\.phoneTel/);
  assert.match(store, /phoneTel: "\+14372910948"/);
  assert.match(store, /streetAddress: "2813 Dundas St W"/);
  assert.match(store, /postalCode: "M6P 1Y6"/);
  assert.match(store, /hoursLabel: "Open 24 Hours Daily"/);
  assert.match(store, /origin: "https:\/\/www\.gasjunctioncannabis\.com"/);
  assert.match(layout, /openGraph:[\s\S]*url: STORE\.origin/);
  assert.match(layout, /canonical: STORE\.origin/);
});

test("homepage FAQPage JSON-LD mirrors visible Junction FAQs", () => {
  assert.match(home, /"@type": "FAQPage"/);
  assert.match(home, /HOME_FAQS/);
  assert.match(store, /How do I get to Gas Junction Cannabis from Keele Station\?/);
  assert.match(store, /Where is Gas Junction Cannabis in The Junction\?/);
  assert.match(home, /href="\/visit"/);
  assert.match(home, /STORE\.mapsEmbedUrl/);
  assert.match(home, /Keele &amp; Dundas/);
});

test("/visit is a supporting how-to-reach page with NAP, transit, and parking", () => {
  assert.match(visit, /The Junction — How to Get to Gas Junction Cannabis/);
  assert.match(visit, /2813 Dundas St W/);
  assert.match(visit, /Toronto, ON M6P 1Y6/);
  assert.match(visit, /STORE\.phoneDisplay/);
  assert.match(visit, /STORE\.hoursLabel/);
  assert.match(store, /\+1 \(437\) 291-0948/);
  assert.match(visit, /Keele Station/);
  assert.match(visit, /40 Junction bus/);
  assert.match(visit, /Street parking/);
  assert.match(visit, /canonical: `\$\{STORE\.origin\}\/visit`/);
  assert.doesNotMatch(visit, /"@type": "CannabisStore"/);
});

test("city head URL is noindexed and canonicalized to the homepage", () => {
  assert.match(cityPage, /index: false/);
  assert.match(cityPage, /canonical: STORE\.origin/);
  assert.match(cityPage, /openGraph:[\s\S]*url: STORE\.origin/);
  assert.doesNotMatch(sitemap, /weed-dispensary-toronto/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
  assert.match(seoPages, /slug: "toronto-weed-dispensary"[\s\S]*noindex: true[\s\S]*canonicalToHome: true/);
  assert.match(seoPages, /slug: "cheap-weed-toronto"[\s\S]*noindex: true/);
});

test("/location aliases to /visit and nav exposes the reach guide", () => {
  assert.match(nextConfig, /source: "\/location", destination: "\/visit", permanent: true/);
  assert.match(navbar, /href: "\/visit", label: "Visit"/);
  assert.match(footer, /href="\/visit"/);
});

test("delivery copy is neighbourhood-scoped and not POD3 branded", () => {
  assert.match(delivery, /JUNCTION NEIGHBOURHOOD DELIVERY/);
  assert.match(delivery, /The Junction, High Park, and Bloor West Village/);
  assert.match(deliveryPage, /Cannabis Delivery Menu/);
  assert.doesNotMatch(delivery, /POD 3 DELIVERY/);
  assert.doesNotMatch(publicCopy, /Kensington Green|Green Pentagon|King Rock|sister store/i);
  assert.doesNotMatch(delivery, /\bPOD3\b|\bPOD 3\b/);
});
