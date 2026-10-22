import { FLEET_ARTICLES_PATH, FLEET_ORIGIN, FLEET_STORE_NAME } from "../../lib/fleet/config";
import type { FleetArticle } from "../../lib/fleet/articles";

function jsonLd(article: FleetArticle) {
  const url = `${FLEET_ORIGIN}${FLEET_ARTICLES_PATH}/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.publishedAt,
        image: article.heroImage || undefined,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: FLEET_STORE_NAME, url: FLEET_ORIGIN },
        publisher: { "@type": "Organization", name: FLEET_STORE_NAME, url: FLEET_ORIGIN },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: FLEET_ORIGIN },
          { "@type": "ListItem", position: 2, name: "Articles", item: `${FLEET_ORIGIN}${FLEET_ARTICLES_PATH}` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}

export default function FleetArticleView({ article }: { article: FleetArticle }) {
  return (
    <article data-fleet-article={article.slug}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(article)).replace(/</g, "\\u003c") }} />
      <p><a href={FLEET_ARTICLES_PATH}>Articles</a></p>
      <h1>{article.title}</h1>
      {article.heroImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={article.heroImage} alt={article.alt} />
      ) : null}
      <div data-fleet-article-body="" dangerouslySetInnerHTML={{ __html: article.html }} />
      {article.faqs.length > 0 ? (
        <section>
          <h2>Questions</h2>
          {article.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </details>
          ))}
        </section>
      ) : null}
    </article>
  );
}
