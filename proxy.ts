import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Cigarette URLs stay on their own path and return 200.
// Modules hide themselves when that surface's flag is off.
export function proxy(_request: NextRequest) {
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
