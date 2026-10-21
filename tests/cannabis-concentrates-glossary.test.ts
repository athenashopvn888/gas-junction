import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { articleLinks, inlinePlainText, parseArticleMarkdown } from "../app/resources/articleMarkdown.ts";
import {
  CONCENTRATES_GLOSSARY_DESCRIPTION,
  CONCENTRATES_GLOSSARY_MARKDOWN,
  CONCENTRATES_GLOSSARY_TITLE,
  getResourcePage,
} from "../app/resources/resourceData.ts";

const metadata = readFileSync("app/resources/[...slug]/page.tsx", "utf8");
const view = readFileSync("app/resources/ResourceView.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");

test("glossary page uses the approved title, description, and body", () => {
  const page = getResourcePage("cannabis-concentrates-glossary");
  assert.ok(page);
  assert.equal(page.title, CONCENTRATES_GLOSSARY_TITLE);
  assert.equal(page.seoTitle, CONCENTRATES_GLOSSARY_TITLE);
  assert.equal(page.title, "Cannabis concentrates, decoded: a plain-language glossary");
  assert.equal(page.description, CONCENTRATES_GLOSSARY_DESCRIPTION);
  assert.equal(page.markdown, CONCENTRATES_GLOSSARY_MARKDOWN);
  assert.equal(page.dateModified, "2026-09-30");

  const blocks = parseArticleMarkdown(page.markdown || "");
  const headings = blocks.filter((block) => block.kind === "h2").map((block) => block.text);
  assert.deepEqual(headings, [
    "First, two words that get mixed up",
    "The glossary, A to Z",
    "What the texture name doesn't tell you",
    "Carrying concentrates in public: the 7.5 g figure",
    "Finding us",
  ]);
  assert.equal(blocks[0].kind, "p");
  if (blocks[0].kind === "p") {
    assert.ok(inlinePlainText(blocks[0].inlines).startsWith("Last checked: September 30, 2026\n"));
  }
  assert.equal(articleLinks(page.markdown || "").join(","), "/visit");
  assert.doesNotMatch(page.markdown || "", /https?:\/\//);
  assert.match(page.markdown || "", /2813 Dundas St W, near Keele Street/);
  assert.match(page.markdown || "", /7\.5 g/);
});

test("resources index lists the glossary without changing other resource card sets", () => {
  const home = getResourcePage("");
  const launch = getResourcePage("resource-centre-launch");
  assert.ok(home);
  assert.ok(launch);
  assert.equal(
    home.cards.filter((card) => card.href === "/resources/cannabis-concentrates-glossary").length,
    1,
  );
  assert.equal(
    launch.cards.some((card) => card.href === "/resources/cannabis-concentrates-glossary"),
    false,
  );
});

test("glossary metadata is self-canonical, indexable, and mapped by the existing sitemap", () => {
  assert.match(metadata, /title: \{ absolute: page\.seoTitle \}/);
  assert.match(metadata, /canonical: "https:\/\/www\.gasjunctioncannabis\.com\/resources\/cannabis-concentrates-glossary"/);
  assert.match(metadata, /robots: \{ index: true, follow: true \}/);
  assert.match(view, /"@type": "Article"/);
  assert.doesNotMatch(view, /aggregateRating|Review|ratingValue/);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.match(redirects, /source: "\/blog"/);
  assert.match(redirects, /source: "\/blog\/:path\*"/);
});
