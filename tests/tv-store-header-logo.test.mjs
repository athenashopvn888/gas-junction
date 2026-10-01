import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const headerPath = new URL("../app/components/TvStoreHeader.tsx", import.meta.url);

test("TV and TV2 share the Gas Junction logo asset", async () => {
  const header = await readFile(headerPath, "utf8");

  assert.match(header, /src="\/storeFavicon\.webp"/);
  assert.match(header, /alt="Gas Junction Cannabis logo"/);
  assert.doesNotMatch(header, /banners\/logo\.jpg/);
});
