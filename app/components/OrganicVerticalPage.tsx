import CigaretteSeasonalNotice from "./CigaretteSeasonalNotice";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LocalSeoMesh from "./LocalSeoMesh";
import { STORE } from "../lib/store";
import CigaretteUnavailable from "./CigaretteUnavailable";
import { isCigaretteHref, isCigarettePublicPath, scrubCigaretteCopy } from "../lib/cigaretteVisibility";
import { getCigaretteSnapshot } from "../lib/cigaretteFeed";
import type { OrganicVerticalPageData } from "../lib/organicVerticalPages";
import styles from "../visit/visit.module.css";
import VapeActionPanel from "./VapeActionPanel";

function presentedPage(page: OrganicVerticalPageData, showCigarettes: boolean): OrganicVerticalPageData {
  if (showCigarettes) return page;
  const copy = (text: string) => scrubCigaretteCopy(text, false);
  return {
    ...page,
    kicker: copy(page.kicker),
    h1: copy(page.h1),
    lede: copy(page.lede),
    warning: page.warning ? copy(page.warning) : page.warning,
    extraActions: (page.extraActions ?? []).filter((action) => !isCigaretteHref(action.href)),
    panels: page.panels.map((panel) => ({ ...panel, heading: copy(panel.heading), body: copy(panel.body) })),
    sections: page.sections.map((section) => ({ ...section, heading: copy(section.heading), body: copy(section.body) })),
    faqs: page.faqs
      .map((faq) => ({ q: copy(faq.q), a: copy(faq.a) }))
      .filter((faq) => faq.q && faq.a && !/\b(cigarette|tobacco)\b/i.test(`${faq.q} ${faq.a}`)),
    faqHeading: copy(page.faqHeading),
  } as unknown as OrganicVerticalPageData;
}

export default async function OrganicVerticalPage({ page }: { page: OrganicVerticalPageData }) {
  const showCigarettes = (await getCigaretteSnapshot()).web.show;
  const view = presentedPage(page, showCigarettes);
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
      {isCigarettePublicPath(view.path) && !showCigarettes ? <CigaretteUnavailable /> : null}
      {view.path.includes("native-cigarettes") && showCigarettes ? <CigaretteSeasonalNotice sticky /> : null}

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
