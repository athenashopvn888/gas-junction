import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalSeoMesh from "../components/LocalSeoMesh";
import { STORE } from "../lib/store";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: { absolute: "FAQ — The Junction | Gas Junction Cannabis" },
  description:
    "Junction FAQ for Gas Junction Cannabis at 2813 Dundas St W: weed dispensary, 24-hour open-now hours, neighbourhood delivery, Native cigarettes, nicotine vape, and walk-in notes. Adults 19+.",
  alternates: {
    canonical: `${STORE.origin}/faq`,
  },
};

const FAQ_CATEGORIES = [
  {
    title: "📍 Location & Hours",
    faqs: [
      { q: "Where is Gas Junction Cannabis located?", a: "We are located at 2813 Dundas St W, Toronto, ON M6P 1Y6, in The Junction area." },
      { q: "What are your hours?", a: "The Keele & Dundas walk-in is open 24 hours daily. No appointment. Open-now and 24h-near-me notes live on the 24-hour Junction dispensary page. Delivery uses a separate 10:00 a.m. to 10:00 p.m. window." },
      { q: "Is there a 24-hour dispensary open now near Keele & Dundas?", a: "Yes. Gas Junction Cannabis at 2813 Dundas St W is open now, every clock hour. Use the 24-hour Junction dispensary page for overnight and near-me hours. That page is equal to the Junction weed dispensary, delivery, Native cigarettes, and nicotine vape pages." },
      { q: "Is there a weed dispensary in The Junction near Keele & Dundas?", a: "Yes. Gas Junction Cannabis at 2813 Dundas St W is the neighbourhood weed dispensary. Use weed dispensary in The Junction for that walk-in — not a city-wide Toronto listing. Flower tiers, 24-hour hours, and how to get here sit beside it." },
      { q: "Is there parking nearby?", a: "Street parking on Dundas St W and nearby Junction side streets is the usual option. Check posted signs for time limits. Full parking and transit notes are on the how-to-get-here page." },
      { q: "What nearby areas do you serve?", a: "The Junction walk-in is useful for shoppers around Keele & Dundas, High Park North, Junction Triangle, Bloor West Village, Runnymede, and Annette Street." },
      { q: "How do I reach Gas Junction Cannabis on transit?", a: "Walk north from Keele Station (Line 2) to Dundas, then west to 2813 Dundas St W. The 40 Junction bus runs along Dundas. From Dundas West Station or Bloor GO / UP Express, take Line 2 one stop west to Keele. Street-by-street notes are on the how-to-get-here page." },
    ],
  },
  {
    title: "🌿 Products & Menu",
    faqs: [
      { q: "What products do you carry?", a: "The site includes category information for cannabis flower tiers, edibles, vape pens, disposable vapes, concentrates, pre-rolled joints, native cigarettes, and accessories. Current listings can change." },
      { q: "Do you have a menu online?", a: "Yes. You can browse menu and category information online before visiting. Confirm current details before making a special trip." },
      { q: "What are your flower tiers?", a: "The flower menu is organized into tiers such as Exotic, Premium, AAA+, AA, and Budget so shoppers can compare product levels more easily. Current pricing and listings should be confirmed on the menu." },
      { q: "Do you sell edibles?", a: "The site includes an edibles category. Check current category details before visiting for a specific edible product." },
      { q: "Do you sell vapes?", a: "Gas Junction Cannabis keeps Nicotine Vape and THC Vape in separate categories. Use the product information shown while browsing each category." },
      { q: "Do you sell native cigarettes?", a: "The site includes a cigarettes category. Junction notes live on Native cigarettes in The Junction. Check the current brand mix on the cigarette category before visiting Dundas St W." },
      { q: "Do you sell nicotine vapes in The Junction?", a: "Yes. Nicotine vape is a separate category from THC vapes. Use nicotine vape in The Junction for neighbourhood notes, then /items/vapes for current listings. Adults 19+. Nicotine is addictive." },
    ],
  },
  {
    title: "💰 Pricing & Bundle Offers",
    faqs: [
      { q: "What is the cheapest weed you sell?", a: "Budget-oriented flower options are listed in the menu when listed. Check current pricing and listings before visiting." },
      { q: "What bundle pricing do you offer?", a: "Flower bundle pricing includes a 3g total option — the 3g total is shown clearly before purchase. Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing, with 6g total pricing." },
      { q: "Do you have ounce deals?", a: "Ounce and bundle details can change as stock rotates. Check the current menu for the latest pricing information." },
      { q: "How does bundle pricing work?", a: "The 3g bundle pricing is shown by tier. The 6g bundle pricing is shown for Exotic, Premium, and AAA+ tiers where listed." },
      { q: "How does the tier pricing work?", a: "Flower is organized into tier pages so shoppers can compare posted per-gram pricing and bundle information before visiting." },
    ],
  },
  {
    title: "🛒 Shopping & Experience",
    faqs: [
      { q: "Do I need an appointment?", a: "No! Gas Junction Cannabis is walk-in only. Just show up anytime — we are open 24 hours daily." },
      { q: "Can I order online?", a: "Walk-in shopping stays at the Keele & Dundas counter. Neighbourhood delivery is ordered from the delivery menu after you review cannabis delivery in The Junction. New delivery customers complete 19+ ID checks in the order chat." },
      { q: "Do you offer delivery?", a: "Yes. Neighbourhood delivery from 2813 Dundas St W covers The Junction, High Park, and Bloor West Village. Use cannabis delivery in The Junction for the radius, then the delivery menu to browse and order. The walk-in stays open 24 hours." },
      { q: "What payment methods do you accept?", a: "We accept cash and debit. No credit cards at this time." },
      { q: "Can your staff help me choose a strain?", a: "Yes. Staff can help adult 19+ shoppers compare menu categories, product styles, and budget ranges during posted store hours." },
      { q: "Is there a minimum purchase?", a: "No minimum purchase required. You can buy as little as 1 gram." },
    ],
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />

        {/* FAQ Banner */}
        <section style={{ width: "100%", overflow: "hidden", marginTop: "92px" }}>
          <img
            src="/banners/07_FAQ.webp"
            alt="Gas Junction Cannabis FAQ — Your Questions Answered"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
          />
        </section>

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Hours, weed dispensary, delivery, cigarettes, nicotine vape, and walk-in notes for Gas Junction Cannabis
            at 2813 Dundas St W in The Junction. Adults 19+.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <LocalSeoMesh currentPath="/faq" heading="24-hour hours, weed dispensary, delivery, cigarettes, and vape" />

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call us at <strong>+1 (437) 291-0948</strong> or walk in at 2813 Dundas St W in The Junction.
            </p>
            <div className={styles.ctaLinks}>
              <Link className={styles.ctaLink} href="/24-hour-junction-dispensary">Open now — 24 hours</Link>
              <Link className={styles.ctaLink} href="/weed-dispensary-junction">Junction weed dispensary</Link>
              <Link className={styles.ctaLink} href="/cannabis-delivery-junction">Junction delivery</Link>
              <Link className={styles.ctaLink} href="/native-cigarettes-junction">Native cigarettes</Link>
              <Link className={styles.ctaLink} href="/nicotine-vape-junction">Nicotine vape</Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
