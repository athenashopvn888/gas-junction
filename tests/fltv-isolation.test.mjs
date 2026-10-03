import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("FLTV routes use their isolated header and visible page names", async () => {
  const [fltv, fltv2, header, fltvLayout, fltv2Layout] = await Promise.all([
    read("../app/fltv/page.tsx"),
    read("../app/fltv2/page.tsx"),
    read("../app/components/FlTvStoreHeader.tsx"),
    read("../app/fltv/layout.tsx"),
    read("../app/fltv2/layout.tsx"),
  ]);

  assert.match(fltv, /components\/FlTvStoreHeader/);
  assert.match(fltv, /FLTV • Flower Menu Board/);
  assert.match(fltv2, /components\/FlTvStoreHeader/);
  assert.match(fltv2, /FLTV2 • Secondary Menu Board/);
  assert.match(header, /src="\/storeFavicon\.webp"/);
  assert.match(fltvLayout, /title: "FLTV \| Gas Junction Cannabis"/);
  assert.match(fltv2Layout, /title: "FLTV2 \| Gas Junction Cannabis"/);
});

test("FLTV card chrome uses green and gold framing with compact tier accents", async () => {
  const [fltv, fltvCss, fltv2Css] = await Promise.all([
    read("../app/fltv/page.tsx"),
    read("../app/fltv/tv.module.css"),
    read("../app/fltv2/tv2.module.css"),
  ]);

  assert.match(fltv, /"--tier-accent": accent/);
  assert.match(fltv, /HARVEST MAP/);
  assert.match(fltvCss, /border-bottom: 7px solid var\(--tier-accent/);
  assert.match(fltvCss, /linear-gradient\(180deg, #172317 0%, #040704 100%\)/);
  assert.match(fltvCss, /\.harvestRail/);
  assert.match(fltvCss, /aspect-ratio: 1 \/ 1/);
  assert.match(fltvCss, /border-radius: 50%/);
  assert.match(fltv2Css, /border-bottom: 7px solid var\(--accent/);
  assert.match(fltv2Css, /0 0 0 5px rgba\(51, 105, 33, \.76\)/);
  assert.match(fltv2Css, /\.marketBanner/);
  assert.match(fltv2Css, /\.sectionCode/);
});
