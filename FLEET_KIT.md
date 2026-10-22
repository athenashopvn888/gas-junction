# Fleet content kit

Drop-in sheet content for one store. `app/lib/fleet/config.ts` is the only store-specific file. Everything else in `app/lib/fleet` and `app/components/fleet` is shared kit code.

Gas Junction keeps its current pages when the blob is missing, the manifest is invalid, or the kill switch is on. Sheet rows only add or replace the slots documented below.

## Copy steps

1. Copy `app/lib/fleet` and `app/components/fleet` into the other repo.
2. Replace `app/lib/fleet/config.ts` with that store's code, domain, colours, coded NAP, coded banners, TV card names, fullscreen spot names, blocked phone numbers, and blob origin.
3. Copy the thin routes `app/api/tv-manifest/route.ts`, `app/api/revalidate/route.ts`, and `app/api/content-status/route.ts`. Point content-status at that store's cigarette snapshot.
4. Wire the touchpoints below. Leave coded pages and URLs in place.
5. Run the checklist.

No manifest env var is required. The reader requests `https://dhaah0upvlpukv56.public.blob.vercel-storage.com/{STORE_CODE}/manifest.json` (`FLEET_BLOB_ORIGIN` in `config.ts`). `FLEET_CONTENT_MANIFEST_URL` still overrides that URL when it is set. A 404 or invalid file keeps the last good bundle, or coded content when there has never been one. `EDGE_CONFIG` item `contentMode=coded` forces coded content everywhere, sheet articles included (`/articles` and `/articles/[slug]` return 404 and drop out of the sitemap). The check lives in `app/lib/fleet/emergency.ts`, which is shared kit code; copy it with the rest of `app/lib/fleet`. The home page only switches to kit banners when at least one banner row differs from coded, so a store with no Home rows keeps its exact coded banner markup.

`/contact`, `/tv`, and `/tv2` are dynamic so the layout meta is rendered with that read, not a build-time snapshot. `/` and the tier pages are already dynamic. The meta tag is `<meta name="fleet-content-version" content={fleet.version} />`, and `fleet.version` is `{storeCode}:{manifest.contentVersion}`.

Publish refresh is `POST /api/revalidate` with header `x-fleet-revalidate-secret`. The route clears the in-memory bundle and article cache, calls `revalidateTag("fleet-content", "max")`, and revalidates `FLEET_AFFECTED_PATHS` plus `/articles/[slug]`.

## Integration touchpoints

1. Root layout: `getFleetContent()` in `generateMetadata`, `<meta name="fleet-content-version" content={fleet.version} />`, and `<FleetContentProvider value={{ active, version, nap }}>`.
2. Homepage: pass `fleet.active ? fleet.banners : undefined` into `FleetAnnouncementBanner`. With no bundle, the component renders the coded banner markup.
3. `/tv` and `/tv2`: call `useFleetTvManifest()` (polls `/api/tv-manifest` with `If-None-Match` every 60s) and mount `<FleetTvTakeover promos={fleetTv.fullscreenPromos} />`. TV2 also runs `pickTv2Sheet` for each card.
4. API routes: `/api/tv-manifest` (ETag + `Cache-Control: public, max-age=0, s-maxage=60, stale-while-revalidate=300`), `/api/revalidate`, `/api/content-status` (cigarette `web` / `tv` / `guides` flags).
5. Sitemap and articles: append fleet article URLs from `loadFleetArticles()`. Render the optional add-on at `/articles` (this site's `/blog` path only redirects to coded `/resources` guides). Coded resource URLs stay as they are.

## TV2 card slots

Page name: `TV2`. Spot name is the card name:

| Spot | Board |
| --- | --- |
| `PREROLLS_ADDONS` | Prerolls and add-ons |
| `VAPES` | Vapes |
| `EDIBLES` | Edibles |
| `CONCENTRATES` | Concentrates |
| `CIGARETTES` | Cigarettes |
| `MAGIC` | Magic and others |

```json
{
  "page": "TV2",
  "spot": "CIGARETTES",
  "mode": "Custom",
  "image": "https://example.blob.vercel-storage.com/cig-promo.webp",
  "offImage": "https://example.blob.vercel-storage.com/cig-off.webp",
  "alt": "Promo picture",
  "promoStart": "2026-10-22T12:00:00.000Z",
  "promoEnd": "2026-10-22T18:00:00.000Z"
}
```

`image` replaces the whole card only when `mode` is `Custom` and the current time is inside `[promoStart, promoEnd)`. `offImage` shows when that category is switched off or the card has no items (cigarettes: `tvOn` false). `Follow ALL` uses the matching ALL row when that row is `Custom`. `Coded` leaves the coded card alone. `Hidden` removes that card. The remaining cards reflow to fill the board, with no empty slot.

An empty URL or an image `onError` (including a broken image that finishes with `naturalWidth === 0`) drops back to today's card. For an empty cigarette card that is the collage. Other cards return to the normal item card or the existing daytime promo.

## Fullscreen TV promo

Page name: `TV`. Spots, in cycle order:

- `Fullscreen promo 1`
- `Fullscreen promo 2`
- `Fullscreen promo 3`

```json
{
  "page": "TV",
  "spot": "Fullscreen promo 1",
  "mode": "Custom",
  "image": "https://example.blob.vercel-storage.com/tv-full.webp",
  "alt": "Store promotion",
  "promoStart": "2026-10-22T12:00:00.000Z",
  "promoEnd": "2026-10-22T18:00:00.000Z",
  "showSeconds": 5,
  "everyMinutes": 1
}
```

The picture is mounted on `/tv` and `/tv2` only when `mode` is `Custom`, the window contains now, and the image loads. Otherwise the menu is unchanged and the takeover renders nothing. The slide matches Fort York Cannabis: first preview after 5 seconds, 650ms slide, hold `showSeconds` (default 5), repeat every `everyMinutes` minutes (default 1). The first active spot supplies `showSeconds` and `everyMinutes` for the whole cycle.

`/api/tv-manifest` keeps the original manifest fields and adds `tvCards` and `fullscreenPromos`. TVs that only read `contentVersion`, `bundleUrl`, and `ETag` are unchanged. Both 200 and 304 responses send the CDN cache header above.

## Articles

There is no article renderer on `/blog` (`/blog` redirects to `/resources`). Fleet articles render at `/articles` and `/articles/{slug}`. The index lists coded `/resources/...` links plus fleet articles. A fleet slug that matches a coded resource slug is omitted; the coded URL stays. A missing or invalid `index.json` returns 404 for `/articles` and adds no sitemap URLs, so coded guides are unchanged.

Files, on the same blob host:

- `{ORIGIN}/{CODE}/articles/index.json`
- `{ORIGIN}/{CODE}/articles/{slug}.json`

Index:

```json
{
  "articles": [
    {
      "slug": "junction-hours",
      "title": "Junction hours",
      "metaTitle": "Hours meta",
      "metaDescription": "Open all night",
      "publishedAt": "2026-10-01T00:00:00.000Z",
      "heroImage": "https://example.blob.vercel-storage.com/hours.webp",
      "alt": "The door"
    }
  ]
}
```

A bare array of those objects is also accepted. `slug` is lowercase letters, numbers, and single hyphens. `publishedAt` is an ISO instant. `heroImage` may be an `http(s)` URL or a site-relative path such as `/banners/core-top-weed-tier.webp`. Protocol-relative and other schemes are dropped. Entries missing a slug, title, or parseable date are skipped.

Body:

```json
{
  "slug": "junction-hours",
  "format": "html",
  "body": "<p>The door is open.</p>",
  "faqs": [{ "question": "When?", "answer": "<p>Always.</p>" }]
}
```

`format` is `html` or `markdown`. When it is omitted, a body with an HTML tag is treated as HTML and anything else as markdown. HTML is reduced to `p`, `br`, headings, lists, `a`, `strong`, `em`, `blockquote`, `code`, `pre`, `hr`, `img`, `figure`, and `figcaption`. Scripts, iframes, event handlers, and `javascript:` / `data:` URLs are removed. The article is dropped when the title, description, body, or FAQ contains a number from `FLEET_BLOCKED_PHONES` in `config.ts` (digits or the formatted string).

Each fleet article emits `Article` and `BreadcrumbList` JSON-LD, plus `FAQPage` when the body has FAQs. Schema `image` is absolute even when `heroImage` is site-relative. `/articles` and `/articles/[slug]` are `force-dynamic`: the root layout fetches the manifest with `cache: "no-store"`, and an ISR article page turns that into a 500 (`Page changed from static to dynamic at runtime`) for any slug that was not prerendered. A missing, rejected, or throwing article calls `notFound()` and responds 404. Article fetches still use `revalidate: 60` and the `fleet-content` tag, so `/api/revalidate` refreshes them. Sitemap entries are `{origin}/articles/{slug}` for fleet slugs that do not clash.

## Checklist

- [ ] `config.ts` store code, domains, colours, NAP, banners, TV card names, and blob origin match the store.
- [ ] Empty manifest (no env and a 404 blob) leaves homepage banners, NAP, `/tv`, and `/tv2` on coded content.
- [ ] `node --experimental-strip-types --experimental-specifier-resolution=node --test tests/fleet-content.test.ts tests/fleet-articles.test.ts tests/tv2-promos.test.ts`
- [ ] `npx next build`
- [ ] `POST /api/revalidate` with the secret returns 200, and a wrong secret returns 401.
- [ ] `/api/tv-manifest` sends `Cache-Control: public, max-age=0, s-maxage=60, stale-while-revalidate=300` and honors `If-None-Match`.
- [ ] A TV2 row outside the promo window does not change that card. A broken promo image returns to the coded card.
- [ ] A TV2 row with mode Hidden removes that card. Coded and Custom rows stay as they are.
- [ ] With no fullscreen rows, `/tv` and `/tv2` do not show a takeover.
- [ ] With no article index, `/resources` URLs are unchanged and `/articles` is a 404.
