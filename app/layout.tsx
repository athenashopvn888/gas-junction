import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gasjunctioncannabis.com"),
  title: {
    default: "Gas Junction Cannabis | The Junction Dispensary",
    template: "%s | Gas Junction Cannabis",
  },
  description:
    "Gas Junction Cannabis is a Toronto dispensary on Dundas St W in The Junction with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 hours daily.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Toronto",
    "exotic flower Toronto",
    "cannabis flower tiers",
    "Gas Junction Cannabis",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "weed store The Junction",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.gasjunctioncannabis.com",
    siteName: "Gas Junction Cannabis",
    title: "Gas Junction Cannabis | The Junction Dispensary",
    description:
      "Gas Junction Cannabis is a Toronto dispensary on Dundas St W in The Junction with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 hours daily.",
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
    description: "Gas Junction Cannabis is a Toronto dispensary on Dundas St W in The Junction with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 hours daily.",
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
    canonical: "https://www.gasjunctioncannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://www.gasjunctioncannabis.com",
  name: "Gas Junction Cannabis",
  description: "Cannabis dispensary at 2813 Dundas St W in Toronto, ON. Browse flower tiers plus edibles, pre-rolls, vapes, concentrates, accessories, and cigarettes. Open 24 hours daily.",
  url: "https://www.gasjunctioncannabis.com",
  telephone: "+14372910948",
  image: "https://www.gasjunctioncannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2813 Dundas St W",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6P 1Y6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6651700,
    longitude: -79.4630600,
  },
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
],
  sameAs: [
    "https://www.gasjunctioncannabis.com/",
    "https://www.gasjunctioncannabis.com/",
  ],
  hasMap: "https://www.gasjunctioncannabis.com/",
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
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
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6651700;-79.4630600" />
        <meta name="ICBM" content="43.6651700, -79.4630600" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
