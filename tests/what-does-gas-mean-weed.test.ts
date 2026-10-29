import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { articleLinks, inlinePlainText, parseArticleMarkdown } from "../app/resources/articleMarkdown.ts";
import { GAS_WEED_DESCRIPTION, GAS_WEED_MARKDOWN, GAS_WEED_TITLE, getResourcePage } from "../app/resources/resourceData.ts";

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

test("gas slang article keeps the approved title, description, and verbatim body", () => {
  const page = getResourcePage("what-does-gas-mean-weed");
  assert.ok(page);
  assert.equal(page.title, GAS_WEED_TITLE);
  assert.equal(page.seoTitle, GAS_WEED_TITLE);
  assert.equal(page.title, 'Weed Gas, Decoded: What "Gas" Means in Weed Slang (and What It Can\'t Tell You)');
  assert.equal(page.description, GAS_WEED_DESCRIPTION);
  assert.ok(page.description.length <= 155);
  assert.equal(page.markdown, GAS_WEED_MARKDOWN);
  assert.equal(page.dateModified, "2026-10-29");
  assert.equal(visibleText(page.markdown || ""), strippedSource(page.markdown || ""));

  const blocks = parseArticleMarkdown(page.markdown || "");
  assert.equal(blocks[0].kind, "h1");
  if (blocks[0].kind === "h1") assert.equal(blocks[0].text, page.title);
  assert.deepEqual(
    blocks.filter((block) => block.kind === "h2").map((block) => (block.kind === "h2" ? block.text : "")),
    [
      'What "gas" means in weed slang',
      "The neighbours: loud, dank and za",
      "Weed gas vs. the label: what the package can actually confirm",
      'What "gas" doesn\'t mean',
      "How to use the word without getting lost",
      "Gas Junction Cannabis: a sign with a sense of humour",
    ],
  );
  const table = blocks.find((block) => block.kind === "table");
  assert.ok(table && table.kind === "table");
  if (table && table.kind === "table") {
    assert.deepEqual(table.headers.map((cell) => inlinePlainText(cell)), [
      "Word",
      "What people are usually describing",
      "What it doesn't prove",
    ]);
    assert.equal(table.rows.length, 4);
    assert.equal(inlinePlainText(table.rows[0][0]), "Gas");
  }
  const lists = blocks.filter((block) => block.kind === "ul" || block.kind === "ol");
  assert.equal(lists.length, 3);
  assert.equal(lists[0].kind, "ul");
  assert.equal(lists[1].kind, "ul");
  assert.equal(lists[2].kind, "ol");
  if (lists[0].kind === "ul") assert.equal(lists[0].items.length, 6);
  if (lists[1].kind === "ul") assert.equal(lists[1].items.length, 4);
  if (lists[2].kind === "ol") assert.equal(lists[2].items.length, 4);
  assert.match(visibleText(page.markdown || ""), /Last checked: October 21, 2026/);
  assert.match(visibleText(page.markdown || ""), /\bmay\b/);
  assert.equal(articleLinks(page.markdown || "").join(","), "/visit");
  assert.doesNotMatch(`${page.title}\n${page.description}\n${page.markdown}`, /3\.5|Farmers Link|tel:|\bhours\b|\bdelivery\b|coupon|promo/i);
  assert.doesNotMatch(page.markdown || "", /https?:\/\//);
});

test("gas slang page is self-canonical and does not rewrite other resource routes", () => {
  assert.match(metadata, /canonical: "https:\/\/www\.gasjunctioncannabis\.com\/resources\/what-does-gas-mean-weed"/);
  assert.match(metadata, /robots: \{ index: true, follow: true \}/);
  assert.match(metadata, /title: \{ absolute: page\.seoTitle \}/);
  assert.match(view, /"@type": "Article"/);
  assert.match(view, /datePublished: page\.dateModified/);
  assert.match(view, /headline: page\.title/);
  assert.doesNotMatch(view, /aggregateRating|Review|ratingValue|Offer/);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.match(redirects, /source: "\/resources\/flower-guide"/);
  assert.doesNotMatch(redirects, /what-does-gas-mean-weed/);
  const home = getResourcePage("");
  assert.ok(home);
  assert.equal(home.cards.some((card) => card.href === "/resources/what-does-gas-mean-weed"), false);
});
