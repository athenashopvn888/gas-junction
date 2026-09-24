import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { STORE } from "@/app/lib/store";

export const metadata: Metadata = {
  title: { absolute: "The Junction Dispensary | Gas Junction Cannabis" },
  description:
    "Gas Junction Cannabis is the 24-hour walk-in shop at 2813 Dundas St W in The Junction. Use the homepage for store details; this city URL is kept only as a legacy path.",
  alternates: {
    canonical: `${STORE.origin}/weed-dispensary-toronto`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: STORE.origin,
    title: "Gas Junction Cannabis | The Junction Dispensary",
    description:
      "24-hour walk-in cannabis shop at 2813 Dundas St W in The Junction, near Keele & Dundas.",
  },
};

export default function Page() {
  return <GBPLandingPage />;
}
