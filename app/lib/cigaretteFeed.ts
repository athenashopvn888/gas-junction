import { cache } from "react";
import {
  cigarettePublicHeaders,
  decideCigaretteSurface,
  reconcileSurfaceItems,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
} from "./cigDecision";
import { allFlowers, allItems, type ItemProduct } from "./products";
import { cigaretteEnvHardOff } from "./siteConfig";
import { getCigaretteDataset } from "./tvStock";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision;
  tv: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

function offSnapshot(reason: CigaretteSurfaceDecision["reason"]): CigaretteSnapshot {
  const web = decideCigaretteSurface({ cig: null, items: [], surface: "web", errored: reason === "error" });
  const tv = decideCigaretteSurface({ cig: null, items: [], surface: "tv", errored: reason === "error" });
  if (reason === "env") {
    return {
      web: { show: false, reason: "env" },
      tv: { show: false, reason: "env" },
      wording: web.wording,
      live: false,
      items: [],
    };
  }
  return { web, tv, wording: web.wording, live: false, items: [] };
}

export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  if (cigaretteEnvHardOff()) return offSnapshot("env");
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
    });
    const live = dataset?.source === "live";
    const items = live && Array.isArray(dataset.items) ? dataset.items as ItemProduct[] : [];
    const cig = live ? dataset.cig : null;
    const web = decideCigaretteSurface({ cig, items, surface: "web", errored: !live });
    const tv = decideCigaretteSurface({ cig, items, surface: "tv", errored: !live });
    return { web, tv, wording: web.wording, live, items };
  } catch {
    return offSnapshot("error");
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return { web: snap.web.show, tv: snap.tv.show, wording: snap.wording };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return cigarettePublicHeaders({ web: snap.web.show, tv: snap.tv.show, wording: snap.wording });
}

export { reconcileSurfaceItems };
