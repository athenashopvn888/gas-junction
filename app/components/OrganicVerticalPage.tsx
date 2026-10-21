import CigaretteSeasonalNotice from "./CigaretteSeasonalNotice";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LocalSeoMesh from "./LocalSeoMesh";
import { STORE } from "../lib/store";
import { isCigaretteHref, visibleCopy } from "../lib/cigaretteVisibility";
import { SHOW_CIGARETTES } from "../lib/siteConfig";
import type { OrganicVerticalPageData } from "../lib/organicVerticalPages";
import styles from "../visit/visit.module.css";
import VapeActionPanel from "./VapeActionPanel";

function presentedPage(page: OrganicVerticalPageData): OrganicVerticalPageData {
  if (SHOW_CIGARETTES) return page;
  return {
    ...page,
    kicker: visibleCopy(page.kicker),
    h1: visibleCopy(page.h1),
    lede: visibleCopy(page.lede),
    warning: page.warning ? visibleCopy(page.warning) : page.warning,
    extraActions: (page.extraActions ?? []).filter((action) => !isCigaretteHref(action.href)),
    panels: page.panels.map((panel) => ({ ...panel, heading: visibleCopy(panel.heading), body: visibleCopy(panel.body) })),
    sections: page.sections.map((section) => ({ ...section, heading: visibleCopy(section.heading), body: visibleCopy(section.body) })),
    faqs: page.faqs
      .map((faq) => ({ q: visibleCopy(faq.q), a: visibleCopy(faq.a) }))
      .filter((faq) => faq.q && faq.a && !/\b(cigarette|tobacco)\b/i.test(`${faq.q} ${faq.a}`)),
    faqHeading: visibleCopy(page.faqHeading),
  } as unknown as OrganicVerticalPageData;
}

export default function OrganicVerticalPage({ page }: { page: OrganicVerticalPageData }) {
  const view = presentedPage(page);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: view.faqs.map((faq) => ({
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
      {view.path.includes("native-cigarettes") && SHOW_CIGARETTES ? <CigaretteSeasonalNotice sticky /> : null}

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>{view.kicker}</p>
          <h1>{view.h1}</h1>
          <p className={styles.lede}>{view.lede}</p>
          {view.warning ? <p className={styles.warning}>{view.warning}</p> : null}

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
            <Link className={styles.primary} href={view.primaryHref}>
              {view.primaryLabel}
            </Link>
            <Link className={styles.secondary} href={view.secondaryHref}>
              {view.secondaryLabel}
            </Link>
            {(view.extraActions ?? []).map((action) => (
              <Link key={action.href} className={styles.secondary} href={action.href}>
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {view.path === "/nicotine-vape-junction" && <VapeActionPanel compact />}

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {view.panels.map((panel) => (
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
          {view.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
          <LocalSeoMesh currentPath={view.path} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>{view.faqHeading}</h2>
          {view.faqs.map((faq) => (
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
