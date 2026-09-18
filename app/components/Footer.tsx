import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>
              GAS JUNCTION CANNABIS
            </div>
            <p className={styles.desc}>
              24-hour walk-in cannabis shop at 2813 Dundas St W in The Junction,
              near Keele &amp; Dundas. Flower tiers, edibles, vapes, and more.
              Open 24 hours daily.
            </p>
            <div className={styles.buttons}>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>2813 Dundas St W</span>
              <span>Toronto, ON M6P 1Y6</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span><a href="tel:+14372910948" style={{color: "inherit"}}>+1 (437) 291-0948</a></span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours Daily</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Nicotine Vape</Link>
              <Link href="/info/nicotine-vapes-toronto">Nicotine Vapes Toronto</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/visit">How to Get Here</Link>
              <Link href="/24-hour-junction-dispensary">24-Hour Junction Dispensary</Link>
              <Link href="/delivery">Delivery Menu</Link>
              <Link href="/info/weed-store-near-the-junction">Weed Store Near The Junction</Link>
              <Link href="/info/native-cigarettes-toronto">Native Cigarettes</Link>
              <Link href="/contact">Contact Us</Link>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2813+Dundas+St+W%2C+Toronto%2C+ON+M6P+1Y6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Gas Junction Cannabis. Must be 19+ to
            enter.
          </p>
        </div>
      </div>
    </footer>
  );
}
