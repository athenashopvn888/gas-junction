import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Gas Junction Cannabis | Toronto",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Gas Junction Cannabis in Toronto.",
  alternates: {
    canonical: "https://gasjunctioncannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
