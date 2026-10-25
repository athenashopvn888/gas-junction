/**
 * In-store boards. The mobile action bar is omitted from their HTML,
 * and body padding is cleared by the store-tv-board meta they emit.
 */
export function hidesMobileBottomBar(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return path === "/tv" || path === "/tv2" || path.startsWith("/tv/") || path.startsWith("/tv2/");
}
