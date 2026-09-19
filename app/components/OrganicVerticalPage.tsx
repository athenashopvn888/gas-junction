import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LocalSeoMesh from "./LocalSeoMesh";
import { STORE } from "../lib/store";
import type { OrganicVerticalPageData } from "../lib/organicVerticalPages";
import styles from "../visit/visit.module.css";

export default function OrganicVerticalPage({ page }: { page: OrganicVerticalPageData }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>{page.kicker}</p>
          <h1>{page.h1}</h1>
          <p className={styles.lede}>{page.lede}</p>
          {page.warning ? <p className={styles.warning}>{page.warning}</p> : null}

          <dl className={styles.napBar}>
            <div className={styles.napCard}>
              <dt>Address</dt>
              <dd>
                <address>
                  {STORE.name}
                  <br />
                  {STORE.streetAddress}
                  <br />
                  {STORE.city}, {STORE.region} {STORE.postalCode}
                </address>
              </dd>
            </div>
            <div className={styles.napCard}>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${STORE.phoneTel}`}>{STORE.phoneDisplay}</a>
              </dd>
            </div>
            <div className={styles.napCard}>
              <dt>Hours</dt>
              <dd>{STORE.hoursLabel}</dd>
            </div>
            <div className={styles.napCard}>
              <dt>Intersection</dt>
              <dd>
                {STORE.intersection}, {STORE.neighborhood}
              </dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <Link className={styles.primary} href={page.primaryHref}>
              {page.primaryLabel}
            </Link>
            <Link className={styles.secondary} href={page.secondaryHref}>
              {page.secondaryLabel}
            </Link>
            {(page.extraActions ?? []).map((action) => (
              <Link key={action.href} className={styles.secondary} href={action.href}>
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {page.panels.map((panel) => (
              <div key={panel.heading} className={styles.panel}>
                <h2>{panel.heading}</h2>
                <p>{panel.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
          <LocalSeoMesh currentPath={page.path} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>{page.faqHeading}</h2>
          {page.faqs.map((faq) => (
            <details key={faq.q} className={styles.faqItem}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
