import type { Metadata } from "next";
import OrganicVerticalPage from "../components/OrganicVerticalPage";
import { WEED_DISPENSARY_JUNCTION } from "../lib/organicVerticalPages";
import { STORE } from "../lib/store";

export const metadata: Metadata = {
  title: { absolute: WEED_DISPENSARY_JUNCTION.title },
  description: WEED_DISPENSARY_JUNCTION.description,
  alternates: {
    canonical: `${STORE.origin}${WEED_DISPENSARY_JUNCTION.path}`,
  },
  openGraph: {
    title: WEED_DISPENSARY_JUNCTION.title,
    description: WEED_DISPENSARY_JUNCTION.ogDescription,
    url: `${STORE.origin}${WEED_DISPENSARY_JUNCTION.path}`,
  },
};

export default function WeedDispensaryJunctionPage() {
  return <OrganicVerticalPage page={WEED_DISPENSARY_JUNCTION} />;
}
