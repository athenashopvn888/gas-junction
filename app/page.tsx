import type { Metadata, ResolvingMetadata } from "next";
import HomePageClient from "./HomePageClient";
import { getFleetContent } from "./lib/fleetContent";
import { getLiveMenu } from "./lib/liveMenu";
import { CODED_BANNERS } from "./lib/fleet/config";
import { HOME_PAGE_TITLE } from "./lib/homeDelivery";

export const dynamic = "force-dynamic";

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const previous = await parent;
  return {
    title: { absolute: HOME_PAGE_TITLE },
    openGraph: {
      ...previous.openGraph,
      title: { absolute: HOME_PAGE_TITLE },
    },
    twitter: {
      ...previous.twitter,
      title: { absolute: HOME_PAGE_TITLE },
    },
  };
}

export default async function Page() {
  const [{ flowers }, fleet] = await Promise.all([getLiveMenu(), getFleetContent()]);
  return <HomePageClient initialFlowers={flowers} contentBanners={fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined} />;
}
