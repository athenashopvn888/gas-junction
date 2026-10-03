import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const files = {
  tvPage: new URL("../app/tv/page.tsx", import.meta.url),
  tvCss: new URL("../app/tv/tv.module.css", import.meta.url),
  tv2Page: new URL("../app/tv2/page.tsx", import.meta.url),
  tv2Css: new URL("../app/tv2/tv2.module.css", import.meta.url),
  headerCss: new URL("../app/components/TvStoreHeader.module.css", import.meta.url),
};

test("TV and TV2 use the shared dark green and gold presentation system", async () => {
  for (const target of [files.tvCss, files.tv2Css]) {
    const css = await readFile(target, "utf8");
    assert.match(css, /--brand-black:\s*#030503/);
    assert.match(css, /--brand-green:\s*#4f8f2f/);
    assert.match(css, /--brand-gold:\s*#f4b812/);
    assert.doesNotMatch(css, /TVbackground\.png/);
  }
});

test("TV routes no longer override the brand treatment with rotating photo backgrounds", async () => {
  for (const target of [files.tvPage, files.tv2Page]) {
    const page = await readFile(target, "utf8");
    assert.doesNotMatch(page, /backgrounds\/list\.json/);
    assert.doesNotMatch(page, /backgroundImage:\s*`url/);
  }
});

test("Gas Junction identity remains prominent in the shared header", async () => {
  const css = await readFile(files.headerCss, "utf8");
  assert.match(css, /\.brand img[\s\S]*width:\s*152px/);
  assert.match(css, /background:\s*#fff/);
  assert.match(css, /#f4b812/);
});
