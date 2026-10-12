import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { DELIVERY_GUIDE_REGISTRY, DELIVERY_GUIDE_STORE } from "../lib/deliveryGuideRegistry";
import styles from "./guides-index.module.css";

const BASE = `https://${DELIVERY_GUIDE_STORE.domain}`;
const CANONICAL = `${BASE}/guides`;
const TITLE = "Guides | Gas Junction Cannabis";
const DESCRIPTION = "Browse Gas Junction Cannabis guides for native cigarettes and nicotine vape in The Junction. Adults 19+ only; check today's menu for current listings.";

export const metadata: Metadata = { title: { absolute: TITLE }, description: DESCRIPTION, alternates: { canonical: CANONICAL }, robots: { index: true, follow: true } };

const LANES = [
  { lane: "native_cig", label: "Native Cigarettes" },
  { lane: "nic_vape", label: "Nicotine Vape" },
] as const;

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "CollectionPage", "@id": `${CANONICAL}#webpage`, url: CANONICAL, name: TITLE, description: DESCRIPTION, isPartOf: { "@id": `${BASE}/#website` } },
  { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Guides", item: CANONICAL },
  ] },
] };

export default function GuidesPage() {
  const groups = LANES.map(({ lane, label }) => ({ lane, label, guides: DELIVERY_GUIDE_REGISTRY.filter((guide) => guide.lane === lane) })).filter((group) => group.guides.length > 0);
  return <main className={styles.main}>
    <Navbar />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <section className={styles.hero}><div className={styles.heroInner}>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Guides</span></nav>
      <p className={styles.kicker}>Guide Directory</p><h1>{TITLE}</h1>
      <p className={styles.lede}>Every Gas Junction Cannabis guide in one place, from native cigarette brands to nicotine vape. Selection changes, so check today&apos;s menu to confirm what is on the shelf.</p><p className={styles.ageNote}>Adults 19+ only.</p>
    </div></section>
    <section className={styles.directory} aria-label="Guide directory">{groups.map((group) => <section className={styles.group} key={group.lane}>
      <div className={styles.groupHeading}><h2>{group.label}</h2><span>{group.guides.length} guides</span></div>
      <div className={styles.grid}>{group.guides.map((guide) => <Link className={styles.card} href={`/guides/${guide.slug}`} key={guide.slug}><span>{group.label}</span><h3>{guide.name}</h3><p>Read the {guide.name} guide</p></Link>)}</div>
    </section>)}</section>
    <section className={styles.nextSteps}><div><p className={styles.kicker}>Keep Exploring</p><h2>More from Gas Junction Cannabis</h2><p>Visit Resources for broader explainers or check the store page before you head over.</p></div><div className={styles.actions}><Link href="/resources">Resources</Link><Link href="/visit">Plan a Visit</Link></div></section>
    <Footer />
  </main>;
}
