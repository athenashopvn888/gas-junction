import type { Metadata } from "next";
import TvReviewQr from "../TvReviewQr";

export const metadata: Metadata = {
  title: "Gas Junction In-Store Flower Display",
  description: "Operational in-store flower menu display for Gas Junction Cannabis.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <TvReviewQr storeName="Gas Junction Cannabis" />
    </>
  );
}
