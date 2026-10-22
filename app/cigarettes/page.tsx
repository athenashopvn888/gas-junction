import ItemsCategoryPage, { generateMetadata as categoryMetadata } from "../items/[category]/page";

export function generateMetadata() {
  return categoryMetadata({ params: Promise.resolve({ category: "cigarettes" }) });
}

export default function CigarettesPage() {
  return ItemsCategoryPage({ params: Promise.resolve({ category: "cigarettes" }) });
}
