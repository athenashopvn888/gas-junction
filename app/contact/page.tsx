import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { STORE } from "../lib/store";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us — Gas Junction Cannabis | 2813 Dundas St W, The Junction",
  description:
    "Visit Gas Junction Cannabis at 2813 Dundas St W, Toronto, ON M6P 1Y6 in The Junction. Open 24 hours daily. Walk-ins welcome.",
  alternates: {
    canonical: "https://www.gasjunctioncannabis.com/contact",
  },
  openGraph: {
    title: "Contact Gas Junction Cannabis — The Junction",
    description:
      "2813 Dundas St W, The Junction. Open 24 hours daily. Check current menu categories before visiting.",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero} style={{ paddingTop: "92px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <img src="/banners/08_Contact_Us.webp" alt="Contact Us" style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-lg)" }} />
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                2813 Dundas St W
                <br />
                Toronto, ON M6P 1Y6
                <br />
                <span className={styles.infoMuted}>Keele &amp; Dundas, The Junction</span>
              </p>
              <p className={styles.infoText}>
                <a className={styles.infoBtn} href={`tel:${STORE.phoneTel}`}>{STORE.phoneDisplay}</a>
              </p>
              <p className={styles.infoText}>
                <Link href="/visit">How to get here</Link>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕒</div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}><span>Monday</span><span className={styles.hoursTime}>Open 24 Hours</span></div>
                <div className={styles.hoursRow}><span>Tuesday</span><span className={styles.hoursTime}>Open 24 Hours</span></div>
                <div className={styles.hoursRow}><span>Wednesday</span><span className={styles.hoursTime}>Open 24 Hours</span></div>
                <div className={styles.hoursRow}><span>Thursday</span><span className={styles.hoursTime}>Open 24 Hours</span></div>
                <div className={styles.hoursRow}><span>Friday</span><span className={styles.hoursTime}>Open 24 Hours</span></div>
                <div className={styles.hoursRow}><span>Saturday</span><span className={styles.hoursTime}>Open 24 Hours</span></div>
                <div className={styles.hoursRow}><span>Sunday</span><span className={styles.hoursTime}>Open 24 Hours</span></div>
              </div>
              <div className={styles.openBadge}>
                <div className={styles.openDot} />
                Open 24 Hours Daily
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔥</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help you browse the menu categories.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Flower tiers and menu categories
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Current details before you visit
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Knowledgeable budtenders
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
            <iframe
              title="Map of Gas Junction Cannabis at 2813 Dundas St W in The Junction"
              src={STORE.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: "100%", height: "360px", border: 0, display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
