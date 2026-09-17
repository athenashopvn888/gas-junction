import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import { STORE } from "./lib/store";

export const metadata: Metadata = {
  metadataBase: new URL(STORE.origin),
  title: {
    default: "Gas Junction Cannabis | The Junction Dispensary",
    template: "%s | Gas Junction Cannabis",
  },
  description:
    "Gas Junction Cannabis is the 24-hour walk-in dispensary at 2813 Dundas St W in The Junction, near Keele & Dundas. Flower, pre-rolls, vapes, edibles, concentrates, and adult 19+ info.",
  keywords: [
    "The Junction dispensary",
    "weed near Keele and Dundas",
    "Junction Triangle cannabis",
    "24 hour Junction walk-in",
    "Gas Junction Cannabis",
    "cannabis flower tiers",
    "THC flower",
    "indica sativa hybrid",
    "vapes",
    "pre-rolls",
    "weed store The Junction",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: STORE.origin,
    siteName: "Gas Junction Cannabis",
    title: "Gas Junction Cannabis | The Junction Dispensary",
    description:
      "24-hour walk-in cannabis shop at 2813 Dundas St W in The Junction, near Keele & Dundas. Adults 19+.",
    images: [
      {
        url: "https://www.gasjunctioncannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Gas Junction Cannabis - The Junction cannabis dispensary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gas Junction Cannabis | The Junction Dispensary",
    description: "24-hour walk-in cannabis shop at 2813 Dundas St W in The Junction, near Keele & Dundas. Adults 19+.",
    images: ["https://www.gasjunctioncannabis.com/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: STORE.origin,
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data: store entity lives on the homepage ── */
const cannabisStoreJsonLd = {
  "@context": "https://schema.org",
  "@type": "CannabisStore",
  additionalType: "https://schema.org/CannabisStore",
  "@id": STORE.origin,
  name: STORE.name,
  description:
    "24-hour walk-in cannabis dispensary at 2813 Dundas St W in The Junction, near Keele & Dundas. Flower tiers, pre-rolls, vapes, edibles, concentrates, accessories, and cigarettes.",
  url: STORE.origin,
  telephone: STORE.phoneTel,
  image: "https://www.gasjunctioncannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: STORE.streetAddress,
    addressLocality: STORE.city,
    addressRegion: STORE.region,
    postalCode: STORE.postalCode,
    addressCountry: STORE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: STORE.latitude,
    longitude: STORE.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: STORE.opens,
      closes: STORE.closes,
    },
  ],
  sameAs: [STORE.origin],
  hasMap: STORE.mapsSearchUrl,
  areaServed: [
    { "@type": "Neighborhood", name: "The Junction" },
    { "@type": "Neighborhood", name: "Junction Triangle" },
    { "@type": "Neighborhood", name: "High Park North" },
    { "@type": "Neighborhood", name: "Bloor West Village" },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="The Junction, Toronto" />
        <meta name="geo.position" content="43.66517;-79.46306" />
        <meta name="ICBM" content="43.66517, -79.46306" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cannabisStoreJsonLd).replace(/</g, "\\u003c") }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6BF78FQ8EC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6BF78FQ8EC');
            `
          }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        <noscript>
          <p>
            Gas Junction Cannabis · 2813 Dundas St W, Toronto, ON M6P 1Y6 · +1 (437) 291-0948 · Open 24 Hours Daily · The Junction, Keele &amp; Dundas
          </p>
        </noscript>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
