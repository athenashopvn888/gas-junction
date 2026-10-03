import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLTV2 | Gas Junction Cannabis",
  description: "FL-themed in-store accessories menu preview for Gas Junction Cannabis.",
  robots: { index: false, follow: false },
};

export default function FlTvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
