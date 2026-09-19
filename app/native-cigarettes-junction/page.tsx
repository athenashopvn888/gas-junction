import type { Metadata } from "next";
import OrganicVerticalPage from "../components/OrganicVerticalPage";
import { NATIVE_CIGARETTES_JUNCTION } from "../lib/organicVerticalPages";
import { STORE } from "../lib/store";

export const metadata: Metadata = {
  title: { absolute: NATIVE_CIGARETTES_JUNCTION.title },
  description: NATIVE_CIGARETTES_JUNCTION.description,
  alternates: {
    canonical: `${STORE.origin}${NATIVE_CIGARETTES_JUNCTION.path}`,
  },
  openGraph: {
    title: NATIVE_CIGARETTES_JUNCTION.title,
    description: NATIVE_CIGARETTES_JUNCTION.ogDescription,
    url: `${STORE.origin}${NATIVE_CIGARETTES_JUNCTION.path}`,
  },
};

export default function NativeCigarettesJunctionPage() {
  return <OrganicVerticalPage page={NATIVE_CIGARETTES_JUNCTION} />;
}
