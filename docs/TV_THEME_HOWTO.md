# TV store themes

The TV theme layer is data-driven. A store theme changes only the visual shell around the existing `/tv` and `/tv2` boards. Menu data, prices, feeds, cards, promotions, tickers, animations, timers, refresh logic, and routes remain owned by the existing TV components.

## Add a store theme

1. Create `public/tv-theme/<store-code-lowercase>/`.
2. Add these four optimized assets:
   - `header.webp`
   - `background.webp`
   - `corner-left.png`
   - `corner-right.png`
   GJC01 used a 2172×724 header, a 1672×941 background, and two 1254×1254 transparent corners.
3. Keep every asset below 500 KB. Use WebP for the opaque header and background; preserve transparency in the two corner PNGs.
4. Add one entry to `TV_THEMES` in `app/tv-theme/theme.ts`, keyed by the store code already used by `tvHiring.store`.
5. Fill every theme field: `headerImage`, `backgroundImage`, optional corners, colors, slogans, and footer copy.
6. Run lint, typecheck, build, and the TV theme tests.
7. Verify `/tv` and `/tv2` at 1920×1080 and 3840×2160. Confirm there is no scrolling or overlap and compare item counts, prices, promotions, animations, and timers with the unthemed baseline.

## Optional homepage hero

1. Add one optimized opaque image at `public/home/<store-code-lowercase>-hero.webp`. GJC01 uses a 1672×941 WebP.
2. Keep it below 500 KB and render it with explicit source width and height, `object-fit: contain`, a matching background color, and high fetch priority/preload for stable LCP layout.
3. Preserve the existing homepage H1, title, meta, canonical, and all content below the image.
4. Add hotspots only when labels in the supplied artwork exactly match existing routes or sections.

For the next store, theming requires only four TV assets plus one `TV_THEMES` entry. The homepage hero is optional and does not require TV layout or CSS changes.

No page-specific or store-specific CSS is required. A store without a `TV_THEMES` entry follows the existing unthemed rendering path.
