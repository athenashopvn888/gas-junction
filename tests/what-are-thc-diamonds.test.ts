import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { articleLinks, inlinePlainText, parseArticleMarkdown } from "../app/resources/articleMarkdown.ts";
import {
  THC_DIAMONDS_DESCRIPTION,
  THC_DIAMONDS_MARKDOWN,
  THC_DIAMONDS_TITLE,
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

test("THC diamonds article keeps the approved title, description, and verbatim body", () => {
  const page = getResourcePage("what-are-thc-diamonds");
  assert.ok(page);
  assert.equal(page.title, THC_DIAMONDS_TITLE);
  assert.equal(page.seoTitle, THC_DIAMONDS_TITLE);
  assert.equal(page.title, "THC Diamonds: The Crystal Concentrate Everyone Asks About, Explained");
  assert.equal(page.description, THC_DIAMONDS_DESCRIPTION);
  assert.ok(page.description.length <= 155);
  assert.equal(page.description, "Gas Junction Cannabis explains what THC diamonds are, what the sauce is, and how a legal label handles them.");
  assert.equal(page.markdown, THC_DIAMONDS_MARKDOWN);
  assert.equal(page.dateModified, "2026-11-12");
  assert.equal(visibleText(page.markdown || ""), strippedSource(page.markdown || ""));

  const blocks = parseArticleMarkdown(page.markdown || "");
  assert.equal(blocks[0].kind, "h1");
  if (blocks[0].kind === "h1") assert.equal(blocks[0].text, page.title);
  assert.deepEqual(
    blocks.filter((block) => block.kind === "h2").map((block) => (block.kind === "h2" ? block.text : "")),
    [
      "What are THC diamonds?",
      "THCA vs THC: why the acid matters",
      "Diamonds and sauce: the two-part look",
      "How they're made (the idea, not a recipe)",
      "Where diamonds sit legally",
      "Diamonds vs other concentrates",
      "What the word \"diamonds\" doesn't tell you",
      "Storage",
      "Quick answers",
      "A brisk diamond glossary",
      "How to compare two diamond products",
      "Come by the Junction",
    ],
  );
  const tables = blocks.filter((block) => block.kind === "table");
  assert.equal(tables.length, 3);
  const lists = blocks.filter((block) => block.kind === "ul" || block.kind === "ol");
  assert.equal(lists.length, 3);
  assert.equal(lists[0].kind, "ol");
  assert.equal(lists[1].kind, "ul");
  assert.equal(lists[2].kind, "ol");
  if (lists[0].kind === "ol") assert.equal(lists[0].items.length, 7);
  if (lists[1].kind === "ul") assert.equal(lists[1].items.length, 4);
  if (lists[2].kind === "ol") assert.equal(lists[2].items.length, 5);
  assert.match(visibleText(page.markdown || ""), /Last checked: October 25, 2026/);
  assert.equal(articleLinks(page.markdown || "").join(","), "/guides,/weed-dispensary-junction,/visit");
  assert.doesNotMatch(`${page.title}\n${page.description}\n${page.markdown}`, /3\.5|Farmers Link|tel:|coupon|promo|\$\d/);
  assert.doesNotMatch(page.markdown || "", /https?:\/\//);
});

test("THC diamonds page is self-canonical and does not rewrite other resource routes", () => {
  assert.match(metadata, /canonical: "https:\/\/www\.gasjunctioncannabis\.com\/resources\/what-are-thc-diamonds"/);
  assert.match(metadata, /robots: \{ index: true, follow: true \}/);
  assert.match(metadata, /title: \{ absolute: page\.seoTitle \}/);
  assert.match(view, /"@type": "Article"/);
  assert.match(view, /datePublished: page\.dateModified/);
  assert.match(view, /headline: page\.title/);
  assert.match(view, /mainEntityOfPage/);
  assert.doesNotMatch(view, /aggregateRating|Review|ratingValue|Offer/);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.match(redirects, /source: "\/resources\/flower-guide"/);
  assert.doesNotMatch(redirects, /what-are-thc-diamonds/);
  const home = getResourcePage("");
  assert.ok(home);
  assert.equal(home.cards.some((card) => card.href === "/resources/what-are-thc-diamonds"), false);
});
