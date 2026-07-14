"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlowerCard from "./components/FlowerCard";
import { allFlowers } from "./lib/products";

/* ── Bento Mosaic Config ── */
const BENTO_TIERS = [
  {
    name: "EXOTICS",
    slug: "exotic",
    price: "$10-$12/g",
    banner: "/banners/exotics_banner.webp",
    className: styles.bentoExotic,
  },
  {
    name: "PREMIUM",
    slug: "premium",
    price: "$7-$10/g",
    banner: "/banners/premium_banner.webp",
    className: styles.bentoPremium,
  },
  {
    name: "AAA+",
    slug: "aaa",
    price: "$5-$6/g",
    banner: "/banners/aaa_plus_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "AA",
    slug: "aa",
    price: "$4/g",
    banner: "/banners/aa_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "BUDGET",
    slug: "budget",
    price: "$3/g",
    banner: "/banners/budget_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "EDIBLES • PREROLLS • MORE",
    slug: "items/edibles",
    price: "Shop Tiers",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    className: styles.bentoEdibles,
  },
];

/* ── Explore Categories Config (New Banners) ── */
const EXPLORE_CATEGORIES = [
  { name: "Vape Pens", slug: "items/vapes", banner: "/banners/01_Vape_Pens.webp", icon: "💨" },
  { name: "Nic Vape", slug: "items/vape-disposables", banner: "/banners/02_Vape_Disposable.webp", icon: "💨" },
  { name: "Concentrates", slug: "items/concentrates", banner: "/banners/03_Concentrates.webp", icon: "💎" },
  { name: "Pre-Rolls", slug: "items/prerolls", banner: "/banners/04_Pre_Rolls.webp", icon: "🚬" },
  { name: "Accessories", slug: "items/add-ons", banner: "/banners/05_Accessories.webp", icon: "➕" },
  { name: "Cigarettes", slug: "items/cigarettes", banner: "/banners/06_Cigarettes.webp", icon: "🏷️" },
  { name: "Magic Stuff", slug: "items/magic", banner: "/banners/09_Magic_Stuff.webp", icon: "🍄" },
  { name: "Games Arcade", slug: "games", banner: "/banners/10_Games.webp", icon: "🎮" },
];

/* ── Local FAQs ── */
const LOCAL_FAQS = [
  {
    q: "What are the hours for Gas Junction Cannabis?",
    a: "Gas Junction Cannabis at 2813 Dundas St W, Toronto is open daily from 09:00 AM to 02:00 AM. Walk in anytime — no appointment needed.",
  },
  {
    q: "What cannabis products do you carry?",
    a: "The site organizes menu categories for flower tiers, edibles, pre-rolls, vapes, concentrates, accessories, and cigarettes. Confirm current product details before visiting.",
  },
  {
    q: "Where is Gas Junction Cannabis located?",
    a: "We are located at 2813 Dundas St W, Toronto, ON M6P 1Y6. Visit us in person or call us at (437) 535-7027. Check posted signs or the map listing for parking details.",
  },
  {
    q: "What is the cheapest weed at Gas Junction Cannabis?",
    a: "Budget flower is shown from $3/g, with AA and AAA+ tiers listed separately. Confirm current pricing and availability on the menu before visiting.",
  },
];

interface Review {
  name: string;
  comment: string;
  date: string;
}

interface ReviewStats {
  total: number;
  avg: number;
}

export default function HomePage() {
  const [featuredStrains, setFeaturedStrains] = useState<any[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsStats, setReviewsStats] = useState<ReviewStats | null>(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [welcomeBannerError, setWelcomeBannerError] = useState(false);
  const welcomeBannerSrc: string = "/banners/welcome_banner.webp";
  const hasWelcomeBanner = welcomeBannerSrc && welcomeBannerSrc !== "/banners/" && !welcomeBannerSrc.includes("HERO_BANNER") && !welcomeBannerSrc.includes("WELCOME_BANNER") && welcomeBannerSrc !== "";

  /* ── 1. Fetch Client-Side Google Reviews ── */
  useEffect(() => {
    const STORE_KEY = "GJC01";
    const SHEET_ID = "1-KeuyKFKprbU-Vl_qVQiZkEKMX_i5CmdScTToNTdkUY";
    const SHEET_NAME = "WEBSITE_REVIEWS";
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;

    fetch(url)
      .then((r) => r.text())
      .then((raw) => {
        const jsonStart = raw.indexOf("{");
        const jsonEnd = raw.lastIndexOf("}");
        const jsonString = raw.substring(jsonStart, jsonEnd + 1);
        const json = JSON.parse(jsonString);
        const rows = json.table.rows;
        const cols = json.table.cols;

        const colMap: Record<string, number> = {};
        cols.forEach((col: any, idx: number) => {
          if (col.label) colMap[col.label.trim()] = idx;
        });

        const skIdx = colMap["StoreKey"] !== undefined ? colMap["StoreKey"] : 0;
        const rnIdx = colMap["ReviewerName"] !== undefined ? colMap["ReviewerName"] : 1;
        const cmIdx = colMap["Comment"] !== undefined ? colMap["Comment"] : 2;
        const dtIdx = colMap["CreateTime"] !== undefined ? colMap["CreateTime"] : 3;

        const reviewsPool: Review[] = [];
        let totalVal: number | null = null;
        let avgVal: number | null = null;
        let hasStats = false;

        rows.forEach((row: any) => {
          if (!row.c) return;
          const sk = row.c[skIdx] ? row.c[skIdx].v || "" : "";
          if (sk !== STORE_KEY) return;

          const rn = row.c[rnIdx] ? row.c[rnIdx].v || "" : "";
          if (rn === "__STATS__") {
            const parsedTotal = parseInt(row.c[cmIdx] ? row.c[cmIdx].v : "", 10);
            const parsedAvg = parseFloat(row.c[dtIdx] ? row.c[dtIdx].v : "");
            if (Number.isFinite(parsedTotal) && Number.isFinite(parsedAvg)) {
              totalVal = parsedTotal;
              avgVal = parsedAvg;
              hasStats = true;
            }
            return;
          }

          const comment = row.c[cmIdx] ? row.c[cmIdx].v || "" : "";
          if (!comment || comment.length < 10) return;
          const name = rn || "Customer";
          const dateStr = row.c[dtIdx] ? row.c[dtIdx].v || "" : "";
          reviewsPool.push({ name, comment, date: dateStr });
        });

        setReviews(reviewsPool.slice(0, 6));
        if (hasStats && totalVal !== null && avgVal !== null) {
          setReviewsStats({ total: totalVal, avg: avgVal });
        }
        setReviewsLoading(false);
      })
      .catch((err) => {
        console.warn("Reviews fetch failed:", err);
        setReviewsLoading(false);
      });
  }, []);

  /* ── 2. Build Featured Strains ── */
  useEffect(() => {
    const pool = [...allFlowers].filter((f) => f.image);
    // Shuffle pool securely
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const picked: typeof pool = [];
    const tierCounts: Record<string, number> = {};

    for (const f of pool) {
      if (picked.length >= 8) break;
      const tc = tierCounts[f.tier] || 0;
      if (tc >= 2) continue; // max 2 per tier
      if (picked.some((p) => p.name === f.name)) continue; // avoid exact duplicates
      picked.push(f);
      tierCounts[f.tier] = tc + 1;
    }

    setFeaturedStrains(picked);
  }, []);

  return (
    <main className={styles.main}>
      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── WELCOME BANNER ── */}
      {hasWelcomeBanner && !welcomeBannerError && (
        <section className={styles.welcomeBannerSection}>
          <div className={styles.welcomeBannerContainer}>
            <img
              src={welcomeBannerSrc}
              alt="Welcome to Gas Junction Cannabis — Premium Toronto Cannabis Dispensary"
              className={styles.welcomeBannerImg}
              onError={() => setWelcomeBannerError(true)}
            />
          </div>
        </section>
      )}

      {/* ── BENTO MOSAIC HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroStars} />

        <div className={styles.heroContent}>
          {/* Brand branding */}
          <div className={styles.brandBlock}>
            <img src="/storeFavicon.webp" alt="Gas Junction Cannabis Icon" style={{ height: "60px", width: "60px", objectFit: "contain", borderRadius: "8px", marginBottom: "8px" }} />
            <h1 className={styles.brandTitle}>GAS JUNCTION CANNABIS</h1>
            <p className={styles.brandSub}>The Junction Cannabis Dispensary</p>
            <div className={styles.brandBadge}>Open Daily: 09:00 AM - 02:00 AM</div>
          </div>

          {/* Bento Grid */}
          <div className={styles.bentoGrid}>
            {BENTO_TIERS.map((tier) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className={`${styles.bentoTile} ${tier.className}`}
              >
                <div
                  className={styles.bentoTileBg}
                  style={{ backgroundImage: `url('${tier.banner}')` }}
                />
                <div className={styles.bentoTileOverlay} />
                <div className={styles.bentoTileContent}>
                  <span className={styles.bentoLabel}>{tier.name}</span>
                  <span className={styles.bentoPrice}>{tier.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE CATEGORIES ── */}
      <section className={styles.categoriesSection} id="menu">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore Categories</h2>
            <p className={styles.sectionSubtitle}>
              From custom disposable vapes and concentrates to accessories and cigarettes.
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {EXPLORE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryCardBg}
                  style={{ backgroundImage: `url('${cat.banner}')` }}
                />
                <div className={styles.categoryCardOverlay} />
                <div className={styles.categoryCardContent}>
                  <h3 className={styles.categoryCardName}>
                    {cat.icon} {cat.name} <span className={styles.categoryCardArrow}>→</span>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Strains</h2>
            <p className={styles.sectionSubtitle}>
              Featured menu items pulled from the current store data.
            </p>
          </div>

          <div className={styles.featuredScroll}>
            {featuredStrains.map((strain, i) => (
              <div key={`${strain.sku}-${i}`} className={styles.scrollItem}>
                <FlowerCard flower={strain} tierKey={strain.tier} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO PANEL WRITE-UP ── */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <div className={styles.seoPanel}>
            <h2 className={styles.seoPanelTitle}>The Junction Cannabis Dispensary - Gas Junction Cannabis</h2>
            <p className={styles.seoPanelText}>
              Welcome to <strong>Gas Junction Cannabis</strong>, a Toronto cannabis destination at 2813 Dundas St W in The Junction. Browse flower tiers, pre-rolls, vapes, edibles, concentrates, cigarettes, and accessories before you visit.
            </p>
            <p className={styles.seoPanelText}>
              Gas Junction Cannabis is open daily from 09:00 AM to 02:00 AM. Product details and availability can change, so use the current menu as your source of truth before heading over.
            </p>
            <p className={styles.seoPanelText}>
              Searching for a cannabis dispensary in Toronto or the surrounding area? Gas Junction Cannabis gives west Toronto shoppers a straightforward place to compare categories and find the right lane for their budget.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLIENT-SIDE GOOGLE REVIEWS SHOWCASE ── */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.sectionTitle}>Customer Feedback</h2>
            {reviewsStats && (
              <div className={styles.reviewsStarsSummary}>
                <span className={styles.reviewsStars}>★★★★★</span>
                <span className={styles.reviewsAvg}>
                  {reviewsStats.avg.toFixed(1)}
                </span>
                <span className={styles.reviewsCount}>
                  ({reviewsStats.total} reviews)
                </span>
              </div>
            )}
          </div>

          <div className={styles.reviewsGrid}>
            {reviewsLoading ? (
              <div className={styles.reviewsLoading}>Loading customer feedback...</div>
            ) : reviews.length === 0 ? (
              <div className={styles.reviewsLoading}>
                Customer feedback is currently unavailable.
              </div>
            ) : (
              reviews.map((rv, idx) => (
                <div key={idx} className={styles.rvCard}>
                  <div className={styles.rvTop}>
                    <div className={styles.rvAvatar}>
                      {rv.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.rvMeta}>
                      <span className={styles.rvName}>{rv.name}</span>
                      {rv.date && (
                        <span className={styles.rvDate}>
                          {new Date(rv.date).toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "short",
                          })}
                        </span>
                      )}
                    </div>
                    <span className={styles.rvStars}>★★★★★</span>
                  </div>
                  <p className={styles.rvText}>
                    {rv.comment.length > 180 ? `${rv.comment.substring(0, 177)}...` : rv.comment}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className={styles.reviewCtaRow}>
          </div>
        </div>
      </section>

      {/* ── FAQS SECTION ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions
          </h2>
          {LOCAL_FAQS.map((faq, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── STORE LOCATION GRID ── */}
      <section className={styles.storeSection} id="contact">
        <div className={styles.container}>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>📍</span>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                2813 Dundas St W
                <br />
                Toronto, ON M6P 1Y6
                <br />
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>🕒</span>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>Open Daily: 09:00 AM - 02:00 AM</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>🔥</span>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed
                <br />
                <span className={styles.storeHighlight}>The Junction, Toronto</span>
              </p>
            </div>
          </div>

          {/* Map wrapper */}
          <div className={styles.mapWrap}>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
