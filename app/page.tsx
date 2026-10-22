import HomePageClient from "./HomePageClient";
import { getFleetContent } from "./lib/fleetContent";
import { getLiveMenu } from "./lib/liveMenu";
import { CODED_BANNERS } from "./lib/fleet/config";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [{ flowers }, fleet] = await Promise.all([getLiveMenu(), getFleetContent()]);
  return <HomePageClient initialFlowers={flowers} contentBanners={fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined} />;
}
