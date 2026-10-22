import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import FleetArticleView from "../../components/fleet/FleetArticleView";
import Navbar from "../../components/Navbar";
import { loadFleetArticles, type FleetArticle } from "../../lib/fleet/articles";
import { FLEET_ARTICLES_PATH, FLEET_ORIGIN } from "../../lib/fleet/config";
import { RESOURCE_PAGES } from "../../resources/resourceData";

export const revalidate = 60;

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

async function findArticle(slug: string): Promise<FleetArticle | null> {
  if (!SLUG.test(slug) || RESOURCE_PAGES.some((page) => page.slug === slug)) return null;
  const loaded = await loadFleetArticles();
  if (!loaded.ok) return null;
  return loaded.articles.find((article) => article.slug === slug) ?? null;
}

export async function generateStaticParams() {
  const loaded = await loadFleetArticles();
  if (!loaded.ok) return [];
  const coded = new Set(RESOURCE_PAGES.map((page) => page.slug));
  return loaded.articles.filter((article) => !coded.has(article.slug)).map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await findArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `${FLEET_ORIGIN}${FLEET_ARTICLES_PATH}/${article.slug}` },
  };
}

export default async function FleetArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await findArticle(slug);
  if (!article) notFound();
  return (
    <>
      <Navbar />
      <main>
        <FleetArticleView article={article} />
      </main>
      <Footer />
    </>
  );
}
