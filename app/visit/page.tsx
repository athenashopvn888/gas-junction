import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalSeoMesh from "../components/LocalSeoMesh";
import { STORE } from "../lib/store";
import styles from "./visit.module.css";

export const metadata: Metadata = {
  title: { absolute: "How to Get Here — The Junction | Gas Junction Cannabis" },
  description:
    "Walk-in directions to Gas Junction Cannabis at 2813 Dundas St W near Keele & Dundas. Transit from Keele Station, parking notes, 24-hour hours, and 19+ ID for The Junction.",
  alternates: {
    canonical: `${STORE.origin}/visit`,
  },
  openGraph: {
    title: "How to Get Here — The Junction | Gas Junction Cannabis",
    description:
      "Transit, parking, and landmark notes for Gas Junction Cannabis at 2813 Dundas St W in The Junction.",
    url: `${STORE.origin}/visit`,
  },
};

const VISIT_FAQS = [
  {
    q: "Where do I walk in at Gas Junction Cannabis?",
    a: "The storefront is at 2813 Dundas St W, Toronto, ON M6P 1Y6, in The Junction just west of Keele & Dundas. Adults 19+ can walk in 24 hours daily — no appointment.",
  },
  {
    q: "Is there parking near Keele & Dundas?",
    a: "Street parking on Dundas St W and nearby Junction side streets is the usual option. Read posted signs for time limits and permit hours; curb space tightens when evening restaurant traffic picks up.",
  },
  {
    q: "How do I reach Gas Junction Cannabis on transit?",
    a: "Walk north from Keele Station (Line 2) along Keele Street to Dundas, then west to 2813. The 40 Junction bus runs along Dundas through the neighbourhood. From Dundas West Station or Bloor GO / UP Express, take Line 2 one stop west to Keele, then walk north.",
  },
  {
    q: "Is the Junction shop open overnight?",
    a: "Yes. Gas Junction Cannabis is open 24 hours daily at 2813 Dundas St W. The 24-hour Junction dispensary guide covers late-night walk-ins; this page is the reach guide for transit and parking.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: VISIT_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function VisitPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.kicker}>The Junction · Keele &amp; Dundas · Adults 19+</p>
          <h1>The Junction — How to Get to Gas Junction Cannabis</h1>
          <p className={styles.lede}>
            Gas Junction Cannabis is a 24-hour walk-in shop at {STORE.addressLine}.
            This page is the neighbourhood reach guide — streetcar and subway notes,
            parking, and landmarks around Keele &amp; Dundas — not a Toronto-wide
            dispensary listing.
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
            <a className={styles.primary} href={STORE.directionsUrl} target="_blank" rel="noopener noreferrer">
              Open directions
            </a>
            <a className={styles.secondary} href={`tel:${STORE.phoneTel}`}>
              Call {STORE.phoneDisplay}
            </a>
            <Link className={styles.secondary} href="/">
              Store homepage
            </Link>
            <Link className={styles.secondary} href="/24-hour-junction-dispensary">
              24-hour hours
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.panel}>
              <h2>Transit to Keele &amp; Dundas</h2>
              <p>
                Keele Station on Line 2 (Bloor–Danforth) is the closest subway. Exit
                toward Keele Street and walk north to Dundas Street West. The shop
                is a short walk west of that intersection at 2813 Dundas St W, in
                The Junction rather than down on Bloor.
              </p>
              <p>
                The 40 Junction bus follows Dundas through the neighbourhood and is
                the most direct surface route along the storefront strip. The 505
                Dundas streetcar’s western end is at Dundas West Station; from there
                continue west on Line 2 one stop to Keele, or stay on Dundas-area
                buses into The Junction.
              </p>
              <p>
                UP Express and GO riders using Bloor GO (beside Dundas West Station)
                should transfer to Line 2 westbound, ride one stop to Keele, then
                walk north. That walk is the reliable last mile — do not assume a
                streetcar continues west of Dundas West into the Junction shops.
              </p>
            </div>
            <div className={styles.panel}>
              <h2>Parking</h2>
              <p>
                Street parking on Dundas St W and Junction side streets (toward
                Pacific, Vine, and Heintzman) is the usual option. Check posted
                signs for time limits and permit windows. Evening curb space gets
                tighter when restaurant traffic fills the strip; if the Dundas face
                is full, loop one block north or south rather than idling on Keele.
              </p>
              <p>
                This is not a mall-pad shop. There is no dedicated lot advertised on
                this page. If you are driving in for a specific product, call{" "}
                {STORE.phoneDisplay} before you leave so the trip stays a single stop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Landmarks in The Junction</h2>
          <p>
            Look for the Dundas street wall of independent storefronts just west of
            Keele — The Junction’s old railway-village main street, not the Bloor
            West shopfronts to the south. Junction Triangle sits east of the rail
            corridors; High Park North is the walk south toward Bloor and Keele
            Station; Annette Street runs parallel a few blocks north.
          </p>
          <p>
            If you are coming from Bloor West Village, you are south of the tracks:
            walk or ride to Keele Station, then continue north to Dundas. Runnymede
            shoppers typically move east along Bloor or Annette and then drop to
            Dundas at Keele. The 24-hour door is the reason a Junction walk-in still
            works after the surrounding cafés close.
          </p>
          <div className={styles.mapWrap}>
            <iframe
              title="Map of Gas Junction Cannabis at 2813 Dundas St W in The Junction"
              src={STORE.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.panel}>
              <h2>What to bring</h2>
              <ul>
                <li>Government-issued photo ID proving you are 19+</li>
                <li>Cash or debit — credit cards are not listed as accepted</li>
                <li>A product name or category from the current menu if you are making a special trip</li>
              </ul>
              <p>
                Walk-ins are welcome any hour. Menu listings rotate, so treat the
                website as planning, not a guarantee of a specific SKU on the shelf.
              </p>
            </div>
            <div className={styles.panel}>
              <h2>After you arrive</h2>
              <p>
                Flower is organized by tier on the store menu. Delivery from this
                address is a separate neighbourhood service covering The Junction,
                High Park, and Bloor West Village — use the delivery menu if you are
                not walking in.
              </p>
              <p>
                <Link href="/">Back to the Gas Junction Cannabis homepage</Link>
                {" · "}
                <Link href="/24-hour-junction-dispensary">24-hour Junction dispensary</Link>
                {" · "}
                <Link href="/info/weed-store-near-the-junction">Weed store near The Junction</Link>
                {" · "}
                <Link href="/exotic-weed">Store menu</Link>
                {" · "}
                <Link href="/delivery">Neighbourhood delivery</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Visit questions</h2>
          {VISIT_FAQS.map((faq) => (
            <details key={faq.q} className={styles.faqItem}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
          <LocalSeoMesh currentPath="/visit" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
