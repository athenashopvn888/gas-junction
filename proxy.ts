import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isRealCigaretteItem } from "./app/lib/cigMarkers";
import { readCigaretteFeed } from "./app/lib/cigaretteFeed";
import { VAPE_PAGE_PATH, cigaretteRedirectPath } from "./app/lib/cigaretteVisibility";

function cleanPath(pathname: string): string {
  const path = pathname.split("?")[0].split("#")[0];
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

function redirectTo(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  url.search = "";
  return NextResponse.redirect(url, 302);
}

export async function proxy(request: NextRequest) {
  const path = cleanPath(request.nextUrl.pathname);
  const destination = cigaretteRedirectPath(path);
  const itemSlug = path.startsWith("/item/") ? decodeURIComponent(path.slice("/item/".length)) : "";
  if (!destination && path !== "/cigarettes" && !itemSlug) return NextResponse.next();

  const snap = await readCigaretteFeed();
  const webOn = snap.web.show === true;

  if (path === "/cigarettes") {
    return redirectTo(request, webOn ? "/items/cigarettes" : VAPE_PAGE_PATH);
  }
  if (destination && !webOn) return redirectTo(request, VAPE_PAGE_PATH);
  if (!destination && itemSlug && !webOn) {
    const item = snap.items.find((entry) => entry.slug === itemSlug);
    if (item && isRealCigaretteItem(item)) return redirectTo(request, VAPE_PAGE_PATH);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cigarettes",
    "/items/cigarettes",
    "/native-cigarettes-junction",
    "/info/native-cigarettes-toronto",
    "/info/native-cigarettes-york",
    "/resources/native-smokes",
    "/resources/native-smokes/:path*",
    "/guides/:slug",
    "/item/:slug",
  ],
};
