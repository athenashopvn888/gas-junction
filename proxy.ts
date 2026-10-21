import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cigaretteRedirectPath } from "./app/lib/cigaretteVisibility";
import { SHOW_CIGARETTES } from "./app/lib/siteConfig";

export function proxy(request: NextRequest) {
  if (SHOW_CIGARETTES) return NextResponse.next();
  const destination = cigaretteRedirectPath(request.nextUrl.pathname);
  if (!destination) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = destination;
  url.search = "";
  return NextResponse.redirect(url, 302);
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
