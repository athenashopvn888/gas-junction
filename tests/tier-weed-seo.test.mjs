import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tierCopy = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");

test("all five verified Gas Junction tier keys have approved copy", () => {
  for (const key of ["EXOTIC", "PREMIUM", '"AAA+"', "AA", "BUDGET"]) {
    assert.ok(tierCopy.includes(`${key}:`), `missing ${key}`);
  }
  assert.match(tierPage, /TIER_META_DESCRIPTION\[tierInfo\.key\]/);
  assert.match(tierPage, /TIER_H1\[tierInfo\.key\]/);
});

test("tier canonicals and the protected broad Weed owner stay in place", () => {
  assert.match(
    tierPage,
    /canonical: `https:\/\/www\.gasjunctioncannabis\.com\/\$\{tierSlug\}`/,
  );
  assert.match(footer, /href="\/weed-dispensary-toronto\/"/);
});

test("new tier copy omits the unresolved NAP and commercial claims", () => {
  assert.doesNotMatch(tierCopy, /2813 Dundas|437[- )]|24 hours/i);
  assert.doesNotMatch(tierCopy, /now in stock|available today|free delivery|sale price|posted prices|current menu/i);
});
