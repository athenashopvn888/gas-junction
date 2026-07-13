import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ — Gas Junction Cannabis | Toronto Dispensary Questions",
  description:
    "Frequently asked questions about Gas Junction Cannabis in Toronto. Hours, location, products, pricing, bundle offers, and everything you need to know before visiting.",
  alternates: {
    canonical: "https://gasjunctioncannabis.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "📍 Location & Hours",
    faqs: [
      { q: "Where is Gas Junction Cannabis located?", a: "We are located at 2813 Dundas St W, Toronto, ON M6P 1Y6, in The Junction area." },
      { q: "What are your hours?", a: "We are open daily from 09:00 AM to 02:00 AM. Walk in anytime — no appointment needed." },
      { q: "Is there parking nearby?", a: "Yes. Free street parking is available nearby on surrounding streets in the evenings. We're also easily accessible by local transit." },
      { q: "What nearby areas do you serve?", a: "The Junction location is useful for shoppers around Dundas St W, Keele, High Park North, Junction Triangle, Bloor West Village, Runnymede, and nearby west Toronto neighbourhoods." },
      { q: "What's the best way to get to Gas Junction Cannabis?", a: "We're accessible by car, local transit, or on foot from nearby Junction streets. Confirm your route before visiting if you are coming from outside the neighbourhood." },
    ],
  },
  {
    title: "🌿 Products & Menu",
    faqs: [
      { q: "What products do you carry?", a: "The site includes category information for cannabis flower tiers, edibles, vape pens, disposable vapes, concentrates, pre-rolled joints, native cigarettes, and accessories. Current availability can change." },
      { q: "Do you have a menu online?", a: "Yes. You can browse menu and category information online before visiting. Confirm current details before making a special trip." },
      { q: "What are your flower tiers?", a: "The flower menu is organized into tiers such as Exotic, Premium, AAA+, AA, and Budget so shoppers can compare product levels more easily. Current pricing and availability should be confirmed on the menu." },
      { q: "Do you sell edibles?", a: "Yes! We carry a variety of edibles including gummies, chocolates, baked goods, and more. THC content varies. Check our live menu for current availability." },
      { q: "Do you sell vapes?", a: "Yes — both disposable vapes and refillable vape pens. We carry both nicotine vapes and THC vapes from top brands." },
      { q: "Do you sell native cigarettes?", a: "Yes! We carry one of the widest selections of native cigarettes in downtown Toronto, including premium and value brands in multiple varieties." },
    ],
  },
  {
    title: "💰 Pricing & Bundle Offers",
    faqs: [
      { q: "What is the cheapest weed you sell?", a: "Budget-oriented flower options are listed in the menu when available. Check current pricing and availability before visiting." },
      { q: "What bundle pricing do you offer?", a: "Flower bundle pricing includes a 3g total option — the 3g total is shown clearly before purchase. Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing, with 6g total pricing." },
      { q: "Do you have ounce deals?", a: "Ounce and bundle details can change as stock rotates. Check the current menu for the latest pricing information." },
      { q: "How does bundle pricing work?", a: "The 3g bundle pricing applies to every tier automatically. The 6g bundle pricing applies to Exotic, Premium, and AAA+ tiers. These are our standard everyday bundle offers." },
      { q: "How does the tier pricing work?", a: "Each flower strain is graded into one of five quality tiers. The tier determines the per-gram price. This transparent system means you always know exactly what you're paying — no confusing markups or inconsistent pricing." },
    ],
  },
  {
    title: "🛒 Shopping & Experience",
    faqs: [
      { q: "Do I need an appointment?", a: "No! Gas Junction Cannabis is walk-in only. Just show up anytime — we are open daily from 09:00 AM to 02:00 AM." },
      { q: "Can I order online?", a: "Currently, Gas Junction Cannabis is an in-store shopping experience only. You can browse our live menu online to see what's in stock before visiting." },
      { q: "Do you offer delivery?", a: "Delivery is coming soon! Visit our delivery page to sign up for email notifications when we launch our delivery service." },
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
            Everything you need to know about Gas Junction Cannabis — Toronto&apos;s premium dispensary at 2813 Dundas St W in Toronto.
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

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call us at <strong>(437) 535-7027</strong> or visit us at 2813 Dundas St W, Toronto.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
