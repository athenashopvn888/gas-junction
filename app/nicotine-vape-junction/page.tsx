import type { Metadata } from "next";
import OrganicVerticalPage from "../components/OrganicVerticalPage";
import { NICOTINE_VAPE_JUNCTION } from "../lib/organicVerticalPages";
import { STORE } from "../lib/store";

export const metadata: Metadata = {
  title: { absolute: NICOTINE_VAPE_JUNCTION.title },
  description: NICOTINE_VAPE_JUNCTION.description,
  alternates: {
    canonical: `${STORE.origin}${NICOTINE_VAPE_JUNCTION.path}`,
  },
  openGraph: {
    title: NICOTINE_VAPE_JUNCTION.title,
    description: NICOTINE_VAPE_JUNCTION.ogDescription,
    url: `${STORE.origin}${NICOTINE_VAPE_JUNCTION.path}`,
  },
};

export default function NicotineVapeJunctionPage() {
  return <OrganicVerticalPage page={NICOTINE_VAPE_JUNCTION} />;
}
