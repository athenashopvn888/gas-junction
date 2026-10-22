import { getCigaretteSnapshot, reconcileSurfaceItems } from "./cigaretteFeed";
import { allFlowers, allItems, type FlowerProduct, type ItemProduct } from "./products";
import { getTvData } from "./tvStock";

export interface WebMenuData {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  source: string;
  stockDate: string;
}

/**
 * Resolve the public web menu through the same store-scoped loader used by
 * /tv and /tv2. The shared loader owns live-feed validation, post-processing,
 * caching, and the safe static fallback.
 */
export async function getWebMenuData(): Promise<WebMenuData> {
  const [flowersResult, itemsResult, snap] = await Promise.all([
    getTvData({ type: "flowers", staticFlowers: allFlowers, staticItems: allItems }),
    getTvData({ type: "items", staticFlowers: allFlowers, staticItems: allItems }),
    getCigaretteSnapshot(),
  ]);
  const menuItems = Array.isArray(itemsResult.body) ? itemsResult.body as ItemProduct[] : [];

  return {
    flowers: flowersResult.body as FlowerProduct[],
    items: reconcileSurfaceItems(menuItems, snap.items, snap.web.show),
    source: flowersResult.headers["x-tv-data-source"],
    stockDate: flowersResult.headers["x-tv-data-as-of"],
  };
}
