import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us — Gas Junction Cannabis | 2813 Dundas St W, Toronto",
  description:
    "Visit Gas Junction Cannabis at 2813 Dundas St W, Toronto, ON M6P 1Y6. We are open daily from 09:00 AM to 02:00 AM. Walk-ins welcome.",
  alternates: {
    canonical: "https://gasjunctioncannabis.com/contact",
  },
  openGraph: {
    title: "Contact Gas Junction Cannabis — Toronto Dispensary",
    description:
      "2813 Dundas St W, Toronto. We are open daily from 09:00 AM to 02:00 AM. Premium cannabis, always fire.",
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
                <span className={styles.infoMuted}>2813 Dundas St W & Nearby Expressway</span>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕒</div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}><span>Monday</span><span className={styles.hoursTime}>09:00 AM - 02:00 AM</span></div>
                <div className={styles.hoursRow}><span>Tuesday</span><span className={styles.hoursTime}>09:00 AM - 02:00 AM</span></div>
                <div className={styles.hoursRow}><span>Wednesday</span><span className={styles.hoursTime}>09:00 AM - 02:00 AM</span></div>
                <div className={styles.hoursRow}><span>Thursday</span><span className={styles.hoursTime}>09:00 AM - 02:00 AM</span></div>
                <div className={styles.hoursRow}><span>Friday</span><span className={styles.hoursTime}>09:00 AM - 02:00 AM</span></div>
                <div className={styles.hoursRow}><span>Saturday</span><span className={styles.hoursTime}>09:00 AM - 02:00 AM</span></div>
                <div className={styles.hoursRow}><span>Sunday</span><span className={styles.hoursTime}>09:00 AM - 02:00 AM</span></div>
              </div>
              <div className={styles.openBadge}>
                <div className={styles.openDot} />
                Open Daily: 09:00 AM - 02:00 AM
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
                help you find the perfect strain.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  200+ strains in stock
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Lab-tested &amp; safe
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
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
