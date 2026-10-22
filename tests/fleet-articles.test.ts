import assert from "node:assert/strict";
import test from "node:test";
import { loadFleetArticles, mergeArticleLinks, parseArticleBody, parseArticleIndex, resetFleetArticleCache, textHasBlockedPhone, type ArticleIndexEntry } from "../app/lib/fleet/articles.ts";
import { markdownToHtml, sanitizeArticleHtml } from "../app/lib/fleet/sanitize.ts";

const entry: ArticleIndexEntry = {
  slug: "junction-hours",
  title: "Junction hours",
  metaTitle: "Hours meta",
  metaDescription: "Open all night",
  publishedAt: "2026-10-01T00:00:00.000Z",
  heroImage: "/hours.webp",
  alt: "The door",
};

test("article HTML is sanitized and blocked phone numbers drop the article", () => {
  const html = sanitizeArticleHtml(`<script>alert(1)</script><p onclick="steal()" style="color:red">Hi <a href="javascript:alert(1)">x</a></p><iframe src="https://evil"></iframe>`);
  assert.equal(html.includes("script"), false);
  assert.equal(html.includes("onclick"), false);
  assert.equal(html.includes("javascript:"), false);
  assert.equal(html.includes("iframe"), false);
  assert.match(html, /<p>Hi/);
  assert.match(markdownToHtml("# Title\n\nHello **there**"), /<h1>Title<\/h1><p>Hello <strong>there<\/strong><\/p>/);
  assert.equal(textHasBlockedPhone("Call (437) 000-0000 today", ["4370000000"]), true);
  assert.equal(textHasBlockedPhone("Call (437) 291-0948 today", ["4370000000"]), false);

  const blocked = parseArticleBody(JSON.stringify({ body: "<p>Call 437-000-0000</p>", faqs: [] }), entry, ["4370000000"]);
  assert.equal(blocked, null);
  const kept = parseArticleBody(JSON.stringify({
    format: "html",
    body: "<p>The door is open.</p><script>nope</script>",
    faqs: [{ question: "When?", answer: "<p>Always</p><img src=x onerror=alert(1)>" }],
  }), entry, ["4370000000"]);
  assert.ok(kept);
  assert.match(kept.html, /The door is open/);
  assert.equal(kept.html.includes("script"), false);
  assert.equal(kept.faqs[0].answer.includes("onerror"), false);
});

test("a missing index publishes nothing and a coded slug wins the clash", async () => {
  assert.equal(parseArticleIndex("{"), null);
  assert.equal(parseArticleIndex("[]")?.length, 0);
  const index = JSON.stringify({ articles: [entry, { ...entry, slug: "menu-guide", title: "Sheet menu" }] });
  resetFleetArticleCache();
  const bodies: Record<string, string> = {
    "https://fixture.test/articles/index.json": index,
    "https://fixture.test/articles/junction-hours.json": JSON.stringify({ slug: "junction-hours", format: "markdown", body: "Walk in any time." }),
    "https://fixture.test/articles/menu-guide.json": JSON.stringify({ body: "<p>Sheet body</p>" }),
  };
  const fetchImpl = async (url: string | URL) => {
    const body = bodies[String(url)];
    if (!body) return new Response("missing", { status: 404 });
    return new Response(body, { status: 200 });
  };
  const loaded = await loadFleetArticles({ fetchImpl: fetchImpl as typeof fetch, indexUrl: "https://fixture.test/articles/index.json", blockedPhones: [] });
  assert.equal(loaded.ok, true);
  if (!loaded.ok) return;
  assert.deepEqual(loaded.articles.map((article) => article.slug), ["junction-hours", "menu-guide"]);
  const merged = mergeArticleLinks([{ slug: "menu-guide", title: "Menu Guide", href: "/resources/menu-guide" }], loaded.articles);
  assert.deepEqual(merged.map((item) => item.href), ["/resources/menu-guide", "/articles/junction-hours"]);
  assert.equal(merged[0].source, "coded");
  assert.equal(merged[1].source, "fleet");

  const missing = await loadFleetArticles({
    fetchImpl: (async () => new Response("nope", { status: 404 })) as typeof fetch,
    indexUrl: "https://fixture.test/missing.json",
  });
  assert.equal(missing.ok, false);
  assert.deepEqual(missing.articles, []);
});
