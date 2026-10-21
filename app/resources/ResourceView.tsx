import { Fragment } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./resources.module.css";
import { inlinePlainText, parseArticleMarkdown, type ArticleBlock, type InlineNode } from "./articleMarkdown";
import type { ResourcePage } from "./resourceData";

type ResourceViewProps = {
  page: ResourcePage;
};

function InlineText({ inlines }: { inlines: InlineNode[] }) {
  return (
    <>
      {inlines.map((node, index) => {
        if (node.type === "break") return <br key={`br-${index}`} />;
        if (node.type === "bold") return <strong key={`b-${index}`}>{node.text}</strong>;
        if (node.type === "link") {
          return (
            <Link key={`a-${index}`} href={node.href} className={styles.inlineLink}>
              {node.text}
            </Link>
          );
        }
        return <span key={`t-${index}`}>{node.text}</span>;
      })}
    </>
  );
}

function MarkdownResource({ page }: ResourceViewProps) {
  const blocks = parseArticleMarkdown(page.markdown || "");
  const canonical = `https://www.gasjunctioncannabis.com/resources/${page.slug}`;
  const intro: ArticleBlock[] = [];
  const sections: { heading: string; paragraphs: Extract<ArticleBlock, { kind: "p" }>[] }[] = [];
  let current: (typeof sections)[number] | null = null;

  for (const block of blocks) {
    if (block.kind === "h2") {
      current = { heading: block.text, paragraphs: [] };
      sections.push(current);
    } else if (current) {
      current.paragraphs.push(block);
    } else {
      intro.push(block);
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    dateModified: page.dateModified,
    datePublished: page.dateModified,
    inLanguage: "en-CA",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    url: canonical,
    author: {
      "@type": "Organization",
      name: "Gas Junction Cannabis",
      url: "https://www.gasjunctioncannabis.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Gas Junction Cannabis",
      url: "https://www.gasjunctioncannabis.com",
    },
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <h1>{page.title}</h1>
          {intro.map((block) => {
            if (block.kind !== "p") return null;
            const text = inlinePlainText(block.inlines);
            const breakAt = text.startsWith("Last checked:") ? block.inlines.findIndex((node) => node.type === "break") : -1;
            if (breakAt === -1) {
              return (
                <p key={text} className={text.startsWith("Last checked:") ? styles.lastChecked : styles.intro}>
                  <InlineText inlines={block.inlines} />
                </p>
              );
            }
            const checked = block.inlines.slice(0, breakAt);
            const rest = block.inlines.slice(breakAt + 1);
            return (
              <Fragment key={text}>
                <p className={styles.lastChecked}>
                  <InlineText inlines={checked} />
                </p>
                {rest.length > 0 && (
                  <p className={styles.intro}>
                    <InlineText inlines={rest} />
                  </p>
                )}
              </Fragment>
            );
          })}
        </div>
      </section>
      <section className={styles.body}>
        {sections.map((section) => (
          <article key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={inlinePlainText(paragraph.inlines)}>
                <InlineText inlines={paragraph.inlines} />
              </p>
            ))}
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default function ResourceView({ page }: ResourceViewProps) {
  if (page.markdown) return <MarkdownResource page={page} />;
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className={styles.intro}>{page.intro}</p>
        </div>
      </section>

      {page.cards.length > 0 && (
        <section className={styles.cardsSection}>
          <div className={styles.grid}>
            {page.cards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.card}>
                <span>{card.title}</span>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.body}>
        {page.sections.map((section) => (
          <article key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.link && (
              <Link href={section.link.href} className={styles.sectionLink}>
                {section.link.title}
              </Link>
            )}
          </article>
        ))}
        {page.faqs && page.faqs.length > 0 && (
          <article className={styles.section}>
            <h2>{page.faqHeading || "Frequently Asked Questions"}</h2>
            <div className={styles.faqList}>
              {page.faqs.map((faq) => (
                <section key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </section>
              ))}
            </div>
          </article>
        )}
      </section>
      <Footer />
    </main>
  );
}
