import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { RESOURCE_HOME } from "./resourceData";
import { visibleCopy } from "../lib/cigaretteVisibility";

export const metadata: Metadata = {
  title: visibleCopy(RESOURCE_HOME.seoTitle),
  description: visibleCopy(RESOURCE_HOME.description),
  alternates: { canonical: "https://www.gasjunctioncannabis.com/resources" },
};

export default function ResourcesPage() {
  return <ResourceView page={RESOURCE_HOME} />;
}
