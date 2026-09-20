import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalSeoMesh from "../components/LocalSeoMesh";
import { STORE } from "../lib/store";
import styles from "../visit/visit.module.css";

export const metadata: Metadata = {
  title: { absolute: "24-Hour Dispensary Open Now in The Junction | Gas Junction Cannabis" },
  description:
    "Gas Junction Cannabis is a 24-hour dispensary open now at 2813 Dundas St W in The Junction, near Keele & Dundas. Overnight walk-ins, 24h near-me hours, 19+ ID, and late-night notes for Dundas West.",
  alternates: {
    canonical: `${STORE.origin}/24-hour-junction-dispensary`,
  },
  openGraph: {
    title: "24-Hour Dispensary Open Now in The Junction | Gas Junction Cannabis",
    description:
      "Open now: 24-hour walk-in cannabis shop at Keele & Dundas in The Junction — not a city-wide Toronto hours listing.",
    url: `${STORE.origin}/24-hour-junction-dispensary`,
  },
};

const HOURS_FAQS = [
  {
    q: "Is Gas Junction Cannabis a 24-hour dispensary in The Junction?",
    a: "Yes. The walk-in at 2813 Dundas St W, just west of Keele & Dundas, is open 24 hours daily. This page is the overnight / open-now guide for The Junction — not a Toronto city hours listing.",
  },
  {
    q: "Can I walk in after the Dundas West restaurants close?",
    a: "Yes. When the Junction strip winds down, the Keele & Dundas door stays open. Bring government-issued photo ID; you must be 19+ at 3 a.m. the same as at 3 p.m.",
  },
  {
    q: "Is Gas Junction Cannabis open now?",
    a: "If you are searching during any clock hour, the listed hours are open. Call +1 (437) 291-0948 only if you need a landmark check or a specific product before you leave.",
  },
  {
    q: "How do I reach the shop overnight from Keele Station?",
    a: "The last mile does not change after dark: Line 2 to Keele Station, walk north on Keele to Dundas, then west to 2813. The 40 Junction bus still runs the Dundas face. Street-by-street notes stay on the how-to-get-here page.",
  },
  {
    q: "Is late-night parking easier on Dundas St W?",
    a: "Often yes — curb space loosens after dinner service on the strip. Still read posted signs on Dundas and Junction side streets toward Pacific, Vine, and Heintzman. There is no dedicated lot.",
  },
  {
    q: "Is there a 24-hour dispensary near me around Keele & Dundas?",
    a: "If you are already in The Junction, Junction Triangle, High Park North, or along Dundas West, this is the open-now walk-in at 2813 Dundas St W. Neighbourhood weed context sits on the weed dispensary in The Junction page. This URL is the hours owner — not a city-wide near-me directory.",
  },
  {
    q: "Is Gas Junction Cannabis open now if I am in Junction Triangle?",
    a: "Yes. The listed hours are open every clock hour, including for walk-ups coming across the rail corridors from Junction Triangle or north from High Park North. Call +1 (437) 291-0948 only if you need a product check before you leave.",
  },
  {
    q: "Does open now include cannabis delivery after 10 p.m.?",
    a: "No. Open now refers to the Keele & Dundas walk-in. Neighbourhood delivery from this shop uses a separate 10:00 a.m. to 10:00 p.m. window, explained on cannabis delivery in The Junction. After that window, walk in.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOURS_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function TwentyFourHourJunctionPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Open now · 24h near me · Keele &amp; Dundas · Adults 19+</p>
          <h1>24-Hour Dispensary Open Now in The Junction</h1>
          <p className={styles.lede}>
            Gas Junction Cannabis is a 24-hour dispensary that is open now at {STORE.addressLine}.
            The Keele &amp; Dundas walk-in does not close for the night — after Dundas West
            restaurants shut, for shift workers coming off the strip, and for anyone already in
            Junction Triangle or High Park North searching 24h near me. This is the open-now /
            overnight owner for The Junction. The weed dispensary, cannabis delivery, Native
            cigarettes, and nicotine vape pages sit beside it — not a Toronto-wide 24-hour directory.
          </p>

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
              <dd>{STORE.intersection}, {STORE.neighborhood}</dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <Link className={styles.primary} href="/visit">
              Transit &amp; parking
            </Link>
            <a className={styles.secondary} href={`tel:${STORE.phoneTel}`}>
              Call {STORE.phoneDisplay}
            </a>
            <Link className={styles.secondary} href="/">
              Store homepage
            </Link>
            <Link className={styles.secondary} href="/weed-dispensary-junction">
              Junction weed dispensary
            </Link>
            <Link className={styles.secondary} href="/cannabis-delivery-junction">
              Junction delivery
            </Link>
            <Link className={styles.secondary} href="/native-cigarettes-junction">
              Native cigarettes
            </Link>
            <Link className={styles.secondary} href="/nicotine-vape-junction">
              Nicotine vape
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.panel}>
              <h2>Open now on Dundas West</h2>
              <p>
                The listed hours are 24 hours daily, seven days a week. There is no lunch-break
                close, no last call at 11, and no “hours vary.” If Google shows Gas Junction
                Cannabis as open now, that matches the door at 2813 Dundas St W.
              </p>
              <p>
                Bring government-issued photo ID every visit. Overnight does not change the 19+
                rule, cash-or-debit note, or the fact that a named SKU should be confirmed on
                the floor rather than assumed from the website.
              </p>
            </div>
            <div className={styles.panel}>
              <h2>After the Junction strip closes</h2>
              <p>
                The Dundas face around Keele is a restaurant and independent-shop street. When
                those lights go down, this counter is still a walk-in. That is the point of a
                24-hour Junction dispensary — not a mall pad, not a city-core listing.
              </p>
              <p>
                Neighbours using this overnight door typically come from The Junction itself,
                Junction Triangle across the rail corridors, High Park North toward Bloor,
                Bloor West Village, Runnymede, or Annette Street a few blocks north.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Overnight last mile at Keele &amp; Dundas</h2>
          <p>
            The reach path is the same at 2 a.m. as at noon: Line 2 to Keele Station, north on
            Keele, west on Dundas to 2813. The 40 Junction bus follows the storefront strip.
            From Dundas West Station or Bloor GO / UP Express, ride Line 2 one stop west to
            Keele, then walk north. Full subway, bus, and parking detail stays on the{" "}
            <Link href="/visit">how to get here</Link> guide.
          </p>
          <p>
            Late curb space on Dundas is usually easier than the dinner rush. Read the signs.
            If you are making a special trip for one product, call {STORE.phoneDisplay} first.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Open now / near me on Dundas West</h2>
          <p>
            Searches for a dispensary open now or a weed shop near me only help if they resolve
            to this Keele &amp; Dundas door — not a city-wide Toronto hours list. If you are
            already on the Junction strip, in Junction Triangle, or walking up from High Park
            North, the listed hours are open. Street-by-street reach stays on{" "}
            <Link href="/visit">how to get here</Link>. Neighbourhood weed-dispensary intent stays on{" "}
            <Link href="/weed-dispensary-junction">weed dispensary in The Junction</Link>.
          </p>
          <p>
            Need the order brought to you instead? Use{" "}
            <Link href="/cannabis-delivery-junction">cannabis delivery in The Junction</Link>{" "}
            for the High Park / Bloor West Village radius, then the{" "}
            <Link href="/delivery">delivery menu</Link>. Cigarettes and nicotine vapes are
            walk-in categories — see{" "}
            <Link href="/native-cigarettes-junction">Native cigarettes in The Junction</Link>
            {" "}and{" "}
            <Link href="/nicotine-vape-junction">nicotine vape in The Junction</Link>.
          </p>
          <LocalSeoMesh currentPath="/24-hour-junction-dispensary" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Open now / 24h near me questions</h2>
          {HOURS_FAQS.map((faq) => (
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
