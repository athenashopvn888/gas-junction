import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

import { getTvTheme, TV_THEMES } from "../app/tv-theme/theme.ts";
import {
  CIGARETTE_OFFER_CYCLE_MS,
  CIGARETTE_OFFER_VISIBLE_MS,
  CIGARETTE_PROMOS,
  getCigaretteOfferPromo,
} from "../app/tv2/tv2Promos.ts";

test("GJC01 theme assets and data entry are complete", async () => {
  assert.equal(getTvTheme("GJC01"), TV_THEMES.GJC01);
  for (const file of ["header.webp", "background.webp", "corner-left.png", "corner-right.png"]) {
    const info = await stat(`public/tv-theme/gjc01/${file}`);
    assert.ok(info.size > 0 && info.size < 500 * 1024, `${file} must be below 500 KB`);
  }
});

test("GJC01 TV boards center in the full viewport and do not reserve QR width", async () => {
  const [tv, tv2] = await Promise.all([
    readFile("app/tv/page.tsx", "utf8"),
    readFile("app/tv2/page.tsx", "utf8"),
  ]);
  for (const page of [tv, tv2]) {
    assert.doesNotMatch(page, /reviewQrSafeArea|availableW/);
    assert.match(page, /Math\.min\(W\s*\/\s*3840, H\s*\/\s*2160\)/);
    assert.match(page, /Math\.round\(\(W - 3840\*s\)\/2\)/);
  }
});

test("homepage hero is optimized, stable and linked only to matching tiers", async () => {
  const [page, css, hero] = await Promise.all([
    readFile("app/page.tsx", "utf8"),
    readFile("app/page.module.css", "utf8"),
    stat("public/home/gjc01-hero.webp"),
  ]);
  assert.ok(hero.size > 0 && hero.size < 500 * 1024, "homepage hero must be below 500 KB");
  assert.match(page, /alt="Gas Junction Cannabis Dispensary - Weed Delivery"/);
  assert.match(page, /width=\{1672\}[\s\S]*height=\{941\}[\s\S]*priority[\s\S]*sizes="100vw"/);
  for (const route of ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"]) {
    assert.match(page, new RegExp(`href="/${route}"`));
  }
  assert.match(css, /\.welcomeBannerImg[\s\S]*object-fit: contain/);
});

test("cigarette promos alternate for five seconds every thirty seconds", () => {
  assert.equal(CIGARETTE_OFFER_CYCLE_MS, 30_000);
  assert.equal(CIGARETTE_OFFER_VISIBLE_MS, 5_000);
  assert.equal(getCigaretteOfferPromo(0)?.src, CIGARETTE_PROMOS[0].src);
  assert.equal(getCigaretteOfferPromo(5_000), undefined);
  assert.equal(getCigaretteOfferPromo(30_000)?.src, CIGARETTE_PROMOS[1].src);
});

test("TV boards keep the QR, feed-gated carton flash, full images and no ticker deal", async () => {
  const [tv, tv2, tvCss, tv2Css, ribbon, qr] = await Promise.all([
    readFile("app/tv/page.tsx", "utf8"),
    readFile("app/tv2/page.tsx", "utf8"),
    readFile("app/tv/tv.module.css", "utf8"),
    readFile("app/tv2/tv2.module.css", "utf8"),
    readFile("app/components/HiringRibbon.tsx", "utf8"),
    readFile("app/TvReviewQr.tsx", "utf8"),
  ]);
  assert.match(tv, /getTvTheme/);
  assert.match(tv2, /item\.promoImage === "CIG_2_FOR_5"/);
  assert.match(tv2, /getCigaretteOfferPromo/);
  assert.match(tvCss, /\.budImg[\s\S]*?object-fit: contain/);
  assert.match(tv2Css, /\.budImg[\s\S]*?object-fit: contain/);
  assert.doesNotMatch(tv, /CIGARETTE_FLASH_MESSAGE/);
  assert.doesNotMatch(tv2, /CIGARETTE_FLASH_MESSAGE/);
  assert.doesNotMatch(ribbon, /CIGARETTE_FLASH_MESSAGE/);
  assert.match(qr, /SCAN FOR REVIEW/);
});
