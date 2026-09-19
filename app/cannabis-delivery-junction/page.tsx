import type { Metadata } from "next";
import OrganicVerticalPage from "../components/OrganicVerticalPage";
import { CANNABIS_DELIVERY_JUNCTION } from "../lib/organicVerticalPages";
import { STORE } from "../lib/store";

export const metadata: Metadata = {
  title: { absolute: CANNABIS_DELIVERY_JUNCTION.title },
  description: CANNABIS_DELIVERY_JUNCTION.description,
  alternates: {
    canonical: `${STORE.origin}${CANNABIS_DELIVERY_JUNCTION.path}`,
  },
  openGraph: {
    title: CANNABIS_DELIVERY_JUNCTION.title,
    description: CANNABIS_DELIVERY_JUNCTION.ogDescription,
    url: `${STORE.origin}${CANNABIS_DELIVERY_JUNCTION.path}`,
  },
};

export default function CannabisDeliveryJunctionPage() {
  return <OrganicVerticalPage page={CANNABIS_DELIVERY_JUNCTION} />;
}
