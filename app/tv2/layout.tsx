import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gas Junction In-Store Accessories Display",
  description: "Operational in-store accessories menu display for Gas Junction Cannabis.",
  robots: { index: false, follow: false },
  other: { "store-tv-board": "1" },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
