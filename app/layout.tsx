import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/FleetContentProvider";
import { getFleetContent } from "./lib/fleetContent";
import FullNameNap from "./components/FullNameNap";
import MobileBottomBar from "./components/MobileBottomBar";
import PinnedNavClearance from "./components/PinnedNavClearance";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { SHOW_CIGARETTES } from "./lib/siteConfig";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";
import { STORE } from "./lib/store";
import { scrubCigaretteCopy } from "./lib/cigaretteVisibility";

// Cigarette on/off is read in this layout. Refresh it about every minute
// so nav, footer, and store copy follow the feed without a rebuild.
export const revalidate = 60;

const ROOT_METADATA: Metadata = {
  metadataBase: new URL(STORE.origin),
  title: {
    default: HOME_DOC_TITLE,
    template: "%s | Gas Junction Cannabis",
  },
  description:
    "Gas Junction Cannabis is the 24-hour walk-in dispensary at 2813 Dundas St W in The Junction, near Keele & Dundas, with fast discreet local cannabis delivery or a visit to the dispensary. Flower, pre-rolls, vapes, edibles, concentrates, and adult 19+ info.",
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
    "cannabis delivery The Junction",
    "The Junction cannabis dispensary",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: STORE.origin,
    siteName: "Gas Junction Cannabis",
    title: HOME_DOC_TITLE,
    description:
      "24-hour walk-in cannabis dispensary at 2813 Dundas St W in The Junction, near Keele & Dundas, with fast discreet local delivery. Adults 19+.",
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
    title: HOME_DOC_TITLE,
    description: "24-hour walk-in cannabis dispensary at 2813 Dundas St W in The Junction, near Keele & Dundas, with fast discreet local delivery. Adults 19+.",
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

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const page = fleet.pages.Home;
  const description = page?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

/* ── JSON-LD Structured Data: store entity lives on the homepage ── */
const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${STORE.origin}/#website`,
  name: "Gas Junction Cannabis Dispensary",
  url: STORE.origin,
  inLanguage: "en-CA",
};

const STORE_DESCRIPTION = "24-hour walk-in cannabis dispensary at 2813 Dundas St W in The Junction, near Keele & Dundas, with fast discreet local delivery or a visit to the dispensary. Flower tiers, pre-rolls, vapes, edibles, concentrates, accessories, and cigarettes.";

const cannabisStoreJsonLd = {
  "@context": "https://schema.org",
  "@type": "CannabisStore",
  additionalType: [
    "https://schema.org/CannabisStore",
    "https://schema.org/LocalBusiness",
    "https://schema.org/Organization",
  ],
  "@id": STORE.origin,
  name: "Gas Junction Cannabis Dispensary Weed Delivery",
  alternateName: STORE.name,
  description: STORE_DESCRIPTION,
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
  sameAs: [STORE.origin, "https://www.google.com/maps/place/?q=place_id:ChIJ5fWBhQo1K4gRecy0Z7mLT04"],
  hasMap: STORE.mapsSearchUrl,
  areaServed: [
    { "@type": "Neighborhood", name: "The Junction" },
    { "@type": "Neighborhood", name: "Junction Triangle" },
    { "@type": "Neighborhood", name: "High Park North" },
    { "@type": "Neighborhood", name: "Bloor West Village" },
  ],
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cigaretteSnapshot, fleet] = await Promise.all([getCigaretteSnapshot(), getFleetContent()]);
  const cigarettes = toPublicCigaretteState(cigaretteSnapshot);
  const storeJsonLd = {
    ...cannabisStoreJsonLd,
    description: scrubCigaretteCopy(STORE_DESCRIPTION, cigarettes.web),
    ...(fleet.active
      ? {
          name: fleet.nap.schemaName,
          alternateName: fleet.nap.name,
          telephone: fleet.nap.phoneTel,
          url: fleet.nap.website,
          hasMap: fleet.nap.mapsSearchUrl,
          address: {
            "@type": "PostalAddress",
            streetAddress: fleet.nap.street,
            addressLocality: fleet.nap.city,
            addressRegion: fleet.nap.province,
            postalCode: fleet.nap.postalCode,
            addressCountry: "CA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: Number(fleet.nap.lat),
            longitude: Number(fleet.nap.lng),
          },
        }
      : {}),
  };
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd).replace(/</g, "\\u003c") }}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        <noscript>
          <p>
            {`${fleet.nap.name} · ${fleet.nap.street}, ${fleet.nap.cityLine} · ${fleet.nap.phoneDisplay} · ${fleet.nap.hours} · ${fleet.nap.area}, ${fleet.nap.intersection}`}
          </p>
        </noscript>
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          <CigaretteStateProvider value={{ ...cigarettes, web: SHOW_CIGARETTES ? cigarettes.web : false }}>
            {children}
            <FullNameNap />
            <PinnedNavClearance />
            <MobileBottomBar />
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
