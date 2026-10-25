import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gas Junction In-Store Flower Display",
  description: "Operational in-store flower menu display for Gas Junction Cannabis.",
  robots: { index: false, follow: false },
  other: { "store-tv-board": "1" },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
