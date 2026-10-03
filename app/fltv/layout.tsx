import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLTV | Gas Junction Cannabis",
  description: "FL-themed in-store flower menu preview for Gas Junction Cannabis.",
  robots: { index: false, follow: false },
};

export default function FlTvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
