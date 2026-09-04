import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const data = fs.readFileSync("app/resources/resourceData.ts", "utf8");
const view = fs.readFileSync("app/resources/ResourceView.tsx", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");

const slug = "cannabis-dispensary-vs-weed-dispensary";
const title = "Weed vs Cannabis Dispensary | Gas Junction Cannabis Toronto";
const h1 = "What Does “Dispensary Near Me” Mean in a Cannabis Search?";

test("GJC01 publishes one informational dispensary authority resource", () => {
  assert.match(data, new RegExp(`slug: "${slug}"`));
  assert.match(data, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(data, new RegExp(h1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(data, /Frequently Asked Questions/);
  assert.match(data, /cannabis dispensary near me/);
  assert.match(data, /weed dispensary near me/);
  assert.match(data, /cannabis store near me/);
});

test("resource supports the existing local owner without public workflow language", () => {
  const start = data.indexOf(`slug: "${slug}"`);
  const end = data.indexOf('slug: "weed-flower-guide"', start);
  const resource = data.slice(start, end);
  assert.match(resource, /href: "\/weed-dispensary-toronto"/);
  assert.doesNotMatch(resource, /business entity|authority\/support page|replacement location page|canonical visit-intent|internal link/i);
  assert.doesNotMatch(resource, /price|deal|stock|availability|order now|buy now|delivery/i);
  assert.equal(data.split(`href: "/resources/${slug}"`).length - 1, 1);
});

test("dynamic metadata and sitemap retain the preferred www owner", () => {
  assert.match(view, /page\.faqHeading \|\| "Frequently Asked Questions"/);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.match(sitemap, /https:\/\/www\.gasjunctioncannabis\.com/);
});
