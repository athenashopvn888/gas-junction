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
              Your Local Cannabis Dispensary At 2813 Dundas St W, Toronto. Visit
              Gas Junction Cannabis For Flower Tiers, Edibles, Vapes &amp; More.
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
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery Menu</Link>
              <Link href="/info/toronto-weed-dispensary">Toronto Dispensary</Link>
              <Link href="/info/cheap-weed-toronto">Cheap Weed Toronto</Link>
              <Link href="/info/native-cigarettes-toronto">Native Cigarettes</Link>
              <Link href="/info/weed-store-near-the-junction">Weed Store Near The Junction</Link>
              <Link href="/weed-dispensary-toronto/">Gas Junction Cannabis Weed Dispensary in Toronto</Link>
              <Link href="/contact">Contact Us</Link>
              <a
                href="https://www.gasjunctioncannabis.com/"
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
