import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { articleLinks, inlinePlainText, parseArticleMarkdown } from "../app/resources/articleMarkdown.ts";
import {
  DEATH_VALLEY_DESCRIPTION,
  DEATH_VALLEY_MARKDOWN,
  DEATH_VALLEY_TITLE,
  getResourcePage,
} from "../app/resources/resourceData.ts";

const metadata = readFileSync("app/resources/[...slug]/page.tsx", "utf8");
const view = readFileSync("app/resources/ResourceView.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");

function visibleText(markdown: string): string {
  const parts: string[] = [];
  for (const block of parseArticleMarkdown(markdown)) {
    if (block.kind === "h1" || block.kind === "h2") parts.push(block.text);
    else if (block.kind === "p") parts.push(inlinePlainText(block.inlines));
    else if (block.kind === "ul" || block.kind === "ol") {
      for (const item of block.items) parts.push(inlinePlainText(item));
    } else if (block.kind === "table") {
      for (const cell of block.headers) parts.push(inlinePlainText(cell));
      for (const row of block.rows) for (const cell of row) parts.push(inlinePlainText(cell));
    }
  }
  return parts.map((part) => part.trim()).filter(Boolean).join("\n");
}

function strippedSource(markdown: string): string {
  return markdown
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/gm, "")
    .replace(/^\s*\|/gm, "")
    .replace(/\|\s*$/gm, "")
    .replace(/\|/g, "\n")
    .replace(/^-\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

test("Death Valley article keeps the approved title, description, and verbatim body", () => {
  const page = getResourcePage("death-valley-strain");
  assert.ok(page);
  assert.equal(page.title, DEATH_VALLEY_TITLE);
  assert.equal(page.seoTitle, DEATH_VALLEY_TITLE);
  assert.equal(page.title, "Death Valley Strain, Explained: A Place Name With a Thin Paper Trail");
  assert.equal(page.description, DEATH_VALLEY_DESCRIPTION);
  assert.ok(page.description.length <= 155);
  assert.equal(
    page.description,
    "The Death Valley strain sounds dramatic, but the name points at something pretty ordinary: a real place on a map.",
  );
  assert.equal(page.markdown, DEATH_VALLEY_MARKDOWN);
  assert.equal(page.dateModified, "2026-11-19");
  assert.equal(visibleText(page.markdown || ""), strippedSource(page.markdown || ""));

  const blocks = parseArticleMarkdown(page.markdown || "");
  assert.equal(blocks[0].kind, "h1");
  if (blocks[0].kind === "h1") assert.equal(blocks[0].text, page.title);
  assert.deepEqual(
    blocks.filter((block) => block.kind === "h2").map((block) => (block.kind === "h2" ? block.text : "")),
    [
      "What is the Death Valley strain?",
      "Where does the name Death Valley come from?",
      'Death Valley weed: why do people search "Death Valley Diesel strain"?',
      "What does Death Valley weed smell like?",
      "How do you read a Death Valley label?",
      "Looking for Death Valley on the menu?",
      "Quick answers",
      "Check the Death Valley strain on the label at Gas Junction Cannabis",
    ],
  );
  const tables = blocks.filter((block) => block.kind === "table");
  assert.equal(tables.length, 2);
  const flavour = tables[0];
  assert.ok(flavour && flavour.kind === "table");
  if (flavour && flavour.kind === "table") {
    assert.deepEqual(flavour.headers.map((cell) => inlinePlainText(cell)), [
      "Flavour word",
      "What it usually means on a description",
    ]);
    assert.equal(flavour.rows.length, 3);
    assert.equal(inlinePlainText(flavour.rows[0][0]), "Skunky");
  }
  const lists = blocks.filter((block) => block.kind === "ul" || block.kind === "ol");
  assert.equal(lists.length, 1);
  assert.equal(lists[0].kind, "ol");
  if (lists[0].kind === "ol") assert.equal(lists[0].items.length, 2);
  assert.match(visibleText(page.markdown || ""), /Last checked: November 11, 2026/);
  assert.equal(articleLinks(page.markdown || "").join(","), "/resources/what-does-gas-mean-weed,/visit");
  assert.doesNotMatch(`${page.title}\n${page.description}\n${page.markdown}`, /3\.5|Farmers Link|tel:|\bhours\b|\bdelivery\b|coupon|promo|\$\d/);
  assert.doesNotMatch(page.markdown || "", /https?:\/\//);
  assert.doesNotMatch(page.markdown || "", /\/flower\/|\/items\//);
});

test("Death Valley page is self-canonical and does not rewrite other resource routes", () => {
  assert.match(metadata, /canonical: "https:\/\/www\.gasjunctioncannabis\.com\/resources\/death-valley-strain"/);
  assert.match(metadata, /robots: \{ index: true, follow: true \}/);
  assert.match(metadata, /title: \{ absolute: page\.seoTitle \}/);
  assert.match(view, /"@type": "Article"/);
  assert.match(view, /datePublished: page\.dateModified/);
  assert.match(view, /headline: page\.title/);
  assert.match(view, /mainEntityOfPage/);
  assert.doesNotMatch(view, /aggregateRating|Review|ratingValue|Offer|Product/);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.match(redirects, /source: "\/resources\/flower-guide"/);
  assert.doesNotMatch(redirects, /death-valley-strain/);
  const home = getResourcePage("");
  assert.ok(home);
  assert.equal(home.cards.some((card) => card.href === "/resources/death-valley-strain"), false);
});
