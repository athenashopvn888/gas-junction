import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlowerCard from "../components/FlowerCard";
import { getTierFromSlug, TIER_CONFIG } from "../lib/products";
import { getWebMenuData } from "../lib/webMenu";
import {
  TIER_H1,
  TIER_META_DESCRIPTION,
  TIER_SEO,
} from "../lib/tierSeoContent";
import LocalSeoMesh from "../components/LocalSeoMesh";
import styles from "./tier.module.css";
import { storeTierRange, tierRangeText } from "../lib/tierPriceRanges";
import { formatAsLowAsAfterPromos, formatPerGram, isBogoDeal, type BoardDeal } from "../lib/flowerDeals";

export const dynamic = "force-dynamic";

/* -- Generate all tier pages at build -- */
export function generateStaticParams() {
  return Object.values(TIER_CONFIG).map((t) => ({ tier: t.slug }));
}

/* -- Dynamic SEO metadata -- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}): Promise<Metadata> {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) return {};
  const { flowers: menuFlowers } = await getWebMenuData();
  const flowers = menuFlowers.filter((flower) => flower.tier.toUpperCase() === tierInfo.key.toUpperCase());
  const seo = TIER_SEO[tierInfo.key];

  return {
    title: {
      absolute:
        seo?.seoTitle ||
        `${tierInfo.config.name} Cannabis Flower — ${flowers.length} Strains`,
    },
    description:
      TIER_META_DESCRIPTION[tierInfo.key] ||
      `Explore the ${tierInfo.config.name.toLowerCase()} cannabis flower category at Gas Junction Cannabis.`,
    alternates: {
      canonical: `https://www.gasjunctioncannabis.com/${tierSlug}`,
    },
    openGraph: {
      title: seo?.seoTitle || `${tierInfo.config.name} Flower | Gas Junction Cannabis`,
      description:
        TIER_META_DESCRIPTION[tierInfo.key] ||
        `Explore the ${tierInfo.config.name.toLowerCase()} flower tier at Gas Junction Cannabis.`,
    },
  };
}

/* -- Page component -- */
export default async function TierPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) notFound();

  const { flowers: menuFlowers } = await getWebMenuData();
  const flowers = menuFlowers.filter((flower) => flower.tier.toUpperCase() === tierInfo.key.toUpperCase());
  const { config } = tierInfo;
  const seo = TIER_SEO[tierInfo.key];
  const rangeLine = tierRangeText(storeTierRange(flowers, tierInfo.key));

  const saleFlowers = flowers.filter((f) => f.isSale);
  const regularFlowers = flowers.filter((f) => !f.isSale);
  const hotFlowers = flowers.filter((f) => f.isHot);

  // Check if banner file exists in the public folder
  const bannerExists = config.banner
    ? fs.existsSync(path.join(process.cwd(), "public", config.banner))
    : false;

  const tierJsonLd = seo
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id": `https://www.gasjunctioncannabis.com/${tierSlug}#webpage`,
            url: `https://www.gasjunctioncannabis.com/${tierSlug}`,
            name: seo.seoTitle,
            description: TIER_META_DESCRIPTION[tierInfo.key],
            isPartOf: { "@type": "WebSite", "@id": "https://www.gasjunctioncannabis.com/#website" },
            about: { "@id": "https://www.gasjunctioncannabis.com/#store" },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: flowers.length,
              itemListElement: flowers.map((flower, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: flower.name,
                url: `https://www.gasjunctioncannabis.com/flower/${flower.slug}`,
              })),
            },
          },
          {
            "@type": "FAQPage",
            "@id": `https://www.gasjunctioncannabis.com/${tierSlug}#faq`,
            mainEntity: seo.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ],
      }
    : null;

  return (
    <main className={styles.main}>
      {tierJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tierJsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      <Navbar />

      {/* ── Banner Image (standalone, no overlay text) ── */}
      {bannerExists && (
        <section className={styles.bannerSection}>
          <img
            src={config.banner}
            alt={`${config.name} Cannabis Flower — ${config.tagline}`}
            className={styles.bannerImg}
          />
        </section>
      )}

      {/* ── Hero Content BELOW banner ── */}
      <section
        className={styles.heroInfo}
        style={{ "--tier-color": config.color } as React.CSSProperties}
      >
        <div className={styles.heroInfoInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTitleRow}>
              <span className={styles.heroIcon}>{config.icon}</span>
              <h1 className={styles.heroTitle}>
                <span style={{ color: config.color }}>
                  {TIER_H1[tierInfo.key] || config.name}
                </span>
              </h1>
            </div>
            <p className={styles.heroTagline}>{config.tagline}</p>
            {rangeLine ? <p className="tier-range-line"><strong className="price-scope-label">In-store price</strong>{rangeLine}</p> : null}
            <p className="price-rule-notice"><strong>IN-STORE PRICES ONLY.</strong> These prices do not apply to delivery orders. Delivery has its own prices. Why? <Link href="/faq#delivery-price-rule">See the FAQ</Link></p>
            <div className={styles.heroStats}>
              <span className={styles.stat}>
                <strong>{flowers.length}</strong> strains
              </span>
              {saleFlowers.length > 0 && (
                <span className={styles.statSale}>
                  🔥 {saleFlowers.length} on sale
                </span>
              )}
              {hotFlowers.length > 0 && (
                <span className={styles.statHot}>
                  ⚡ {hotFlowers.length} hot picks
                </span>
              )}
            </div>
          </div>

          <div className={styles.heroRight}>
            {isBogoDeal(config.deal6g) ? <><p className={styles.asLowAsBanner}>{formatAsLowAsAfterPromos(config.deal6g.price, config.deal6g.grams)}</p><p className={styles.listAnchor}>In-store list ${config.unitPrice}/g</p></> : <div className={styles.unitPriceBox}><span className={styles.unitPriceLabel}>In-store price · Starting at</span><span className={styles.unitPriceValue}>${config.unitPrice}/g</span></div>}

            {(config.deal3g || config.deal6g) && (
            <div className={styles.dealRow}>
              {[config.deal3g, config.deal6g].filter((deal): deal is BoardDeal => deal !== null).map((deal) => <div className={styles.dealBox} key={deal.total}><div className={styles.dealLabel}>{isBogoDeal(deal) ? deal.label : `In-store price · 🎁 ${deal.label}`}</div><div className={styles.dealPrice}>{isBogoDeal(deal) ? <>Pay <strong>${deal.price}</strong> = {deal.grams}g</> : <>= <strong>${deal.price}</strong> / {deal.total}</>}</div>{isBogoDeal(deal) ? <div className={styles.dealMeta}>{formatPerGram(deal.price, deal.grams)} · {deal.equals}</div> : null}</div>)}
            </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Product grid ── */}
      <section className={styles.products}>
        <div className={styles.container}>
          {saleFlowers.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>
                🔥 <span style={{ color: "#f43f5e" }}>On Sale</span>
              </h2>
              <div className={styles.grid}>
                {saleFlowers.map((f) => (
                  <FlowerCard
                    key={`${f.sku}-${f.slug}`}
                    flower={f}
                    tierKey={tierInfo.key}
                  />
                ))}
              </div>
            </>
          )}

          <h2 className={styles.sectionTitle}>
            All{" "}
            <span style={{ color: config.color }}>{config.name}</span>{" "}
            Strains
          </h2>
          <div className={styles.grid}>
            {regularFlowers.map((f) => (
              <FlowerCard
                key={`${f.sku}-${f.slug}`}
                flower={f}
                tierKey={tierInfo.key}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Content ── */}
      {seo && (
        <section className={styles.seoSection}>
          <div className={styles.container}>
            <h2 className={styles.seoMainTitle}>{seo.seoTitle}</h2>
            <p className={styles.seoIntro}>{seo.seoIntro}</p>

            {seo.sections.map((s, i) => (
              <div key={i} className={styles.seoBlock}>
                <h3 className={styles.seoHeading}>{s.heading}</h3>
                <p className={styles.seoBody}>{s.body}</p>
              </div>
            ))}

            {/* FAQ Accordion */}
            {seo.faqs.length > 0 && (
              <div className={styles.faqSection}>
                <h3 className={styles.seoHeading}>Frequently Asked Questions</h3>
                {seo.faqs.map((faq, i) => (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>{faq.q}</summary>
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  </details>
                ))}
              </div>
            )}

            <LocalSeoMesh currentPath={`/${tierSlug}`} variant="light" />
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
