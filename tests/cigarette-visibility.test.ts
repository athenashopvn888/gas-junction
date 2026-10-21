import assert from "node:assert/strict";
import test from "node:test";
import { SHOW_CIGARETTES } from "../app/lib/siteConfig.ts";
import {
  cigaretteRedirectPath,
  isCigaretteGuideSlug,
  isCigaretteItem,
  isKeptCigaretteShelfItem,
  scrubCigaretteCopy,
  VAPE_PAGE_PATH,
} from "../app/lib/cigaretteVisibility.ts";

test("cigarette switch defaults off unless the public env var is enabled", () => {
  assert.equal(SHOW_CIGARETTES, false);
  assert.equal(VAPE_PAGE_PATH, "/items/vapes");
});

test("cigarette items are hidden and rolling papers, Backwoods, cigarillos, pouches, and nicotine vapes stay", () => {
  assert.equal(isCigaretteItem({ category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" }), true);
  assert.equal(isCigaretteItem({ category: "CIGARETTES", name: "BELMONT KING SIZE (PACK ONLY)", slug: "belmont-king-size-pack-only" }), true);
  assert.equal(isCigaretteItem({ category: "CIGARETTES", name: "GRABBA", slug: "grabba" }), true);
  assert.equal(isCigaretteItem({ category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" }), false);
  assert.equal(isCigaretteItem({ category: "CIGARETTES", name: "NEW BACKWOODS FLAVORS", slug: "new-backwoods-flavors" }), false);
  assert.equal(isCigaretteItem({ category: "ADD ONS", name: "RAW PAPER KING SIZE", slug: "raw-paper-king-size" }), false);
  assert.equal(isCigaretteItem({ category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa" }), false);
  assert.equal(isCigaretteItem({ category: "CIGARETTES", name: "ZYN NICOTINE POUCHES", slug: "zyn-nicotine-pouches" }), false);
  assert.equal(isCigaretteItem({ category: "CIGARETTES", name: "ZPods / ZPODS – Mango Pineapple", slug: "zpods-zpods-mango-pineapple-32-ml-pods-5-synthetic-nic" }), false);
  assert.equal(isKeptCigaretteShelfItem({ category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" }), true);
  assert.equal(isKeptCigaretteShelfItem({ category: "CIGARETTES", name: "BB LIGHTS CARTON", slug: "bb-lights-carton" }), false);
  assert.equal(isKeptCigaretteShelfItem({ category: "ADD ONS", name: "RAW PAPER KING SIZE", slug: "raw-paper-king-size" }), false);
});

test("cigarette urls 302 targets are the nicotine vape page and kept smoke urls are not", () => {
  for (const path of [
    "/cigarettes",
    "/items/cigarettes",
    "/native-cigarettes-junction",
    "/info/native-cigarettes-toronto",
    "/info/native-cigarettes-york",
    "/resources/native-smokes",
    "/resources/native-smokes/native-cigarettes-guide",
    "/item/bb-full-carton",
    "/item/belmont-king-size-pack-only",
    "/item/grabba",
    "/guides/bb-delivery-the-junction",
    "/guides/belmont-delivery-the-junction",
    "/guides/grabba-delivery-the-junction",
  ]) {
    assert.equal(cigaretteRedirectPath(path), "/items/vapes", path);
  }
  assert.equal(cigaretteRedirectPath("/item/backwoods-assorted-flavors-20-25"), null);
  assert.equal(cigaretteRedirectPath("/item/new-backwoods-flavors"), null);
  assert.equal(cigaretteRedirectPath("/item/raw-paper-king-size"), null);
  assert.equal(cigaretteRedirectPath("/item/zyn-nicotine-pouches"), null);
  assert.equal(cigaretteRedirectPath("/guides/backwoods-delivery-the-junction"), null);
  assert.equal(cigaretteRedirectPath("/items/vapes"), null);
  assert.equal(isCigaretteGuideSlug("backwoods-delivery-the-junction"), false);
  assert.equal(isCigaretteGuideSlug("bb-full-delivery-the-junction"), true);
});

test("hidden copy drops cigarette wording and the on switch returns the original string", () => {
  const samples = [
    [
      "From custom disposable vapes and concentrates to accessories and cigarettes.",
      "From custom disposable vapes and concentrates to accessories.",
    ],
    [
      "Flower tiers, pre-rolls, vapes, edibles, concentrates, accessories, and cigarettes.",
      "Flower tiers, pre-rolls, vapes, edibles, concentrates, accessories.",
    ],
    [
      "Do you sell cigarettes and nicotine vapes at Keele & Dundas?",
      "Do you sell nicotine vapes at Keele & Dundas?",
    ],
    [
      "Yes. The walk-in keeps a cigarette category and a nicotine vape category, separate from THC vapes. Junction notes live on the Native cigarettes and nicotine vape pages. Confirm current listings on those category menus. Adults 19+.",
      "Yes. The walk-in keeps a nicotine vape category, separate from THC vapes. Junction notes live on the nicotine vape pages. Confirm current listings on those category menus. Adults 19+.",
    ],
    [
      "The same stop covers pre-rolls, vapes, edibles, concentrates, accessories, and cigarettes. Named SKUs belong on those tier and category pages.",
      "The same stop covers pre-rolls, vapes, edibles, concentrates, accessories. Named SKUs belong on those tier and category pages.",
    ],
    [
      "Native cigarettes and nicotine vape have their own Junction pages. This URL is the weed-dispensary neighbourhood page.",
      "Nicotine vape has its own Junction page. This URL is the weed-dispensary neighbourhood page.",
    ],
    [
      "Do delivery, cigarettes, or nicotine vapes live on this weed-store path?",
      "Do delivery or nicotine vapes live on this weed-store path?",
    ],
    [
      "Visit, 24-hour hours, weed dispensary, delivery, cigarettes, vape, and flower",
      "Visit, 24-hour hours, weed dispensary, delivery, vape, and flower",
    ],
    [
      "The cleanest way to shop the Gas Junction Cannabis menu is to choose the section first. Flower shoppers need tier logic. Cigarette shoppers need brand and price notes. Treat each category like its own shelf.",
      "The cleanest way to shop the Gas Junction Cannabis menu is to choose the section first. Flower shoppers need tier logic. Treat each category like its own shelf.",
    ],
  ] as const;
  for (const [original, hidden] of samples) {
    assert.equal(scrubCigaretteCopy(original, true), original);
    assert.equal(scrubCigaretteCopy(original, false), hidden);
  }
});
