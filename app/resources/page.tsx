import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { RESOURCE_HOME } from "./resourceData";
import { scrubCigaretteCopy } from "../lib/cigaretteVisibility";
import { getCigaretteSnapshot } from "../lib/cigaretteFeed";

export async function generateMetadata(): Promise<Metadata> {
  const showCigarettes = (await getCigaretteSnapshot()).web.show;
  return {
    title: scrubCigaretteCopy(RESOURCE_HOME.seoTitle, showCigarettes),
    description: scrubCigaretteCopy(RESOURCE_HOME.description, showCigarettes),
    alternates: { canonical: "https://www.gasjunctioncannabis.com/resources" },
  };
}

export default function ResourcesPage() {
  return <ResourceView page={RESOURCE_HOME} />;
}
