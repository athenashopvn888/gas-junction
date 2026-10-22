"use client";

import { useEffect, useState } from "react";
import { parseFleetTvManifest } from "../../lib/fleet/tv";
import type { TvCardSlot, TvFullscreenPromo } from "../../lib/fleet/types";

export { parseFleetTvManifest };

export type FleetTvClientState = {
  cards: Record<string, TvCardSlot>;
  fullscreenPromos: TvFullscreenPromo[];
};

const EMPTY: FleetTvClientState = { cards: {}, fullscreenPromos: [] };

function sameState(left: FleetTvClientState, right: FleetTvClientState): boolean {
  return JSON.stringify(left) === JSON.stringify(right);
}

export function useFleetTvManifest(): FleetTvClientState {
  const [state, setState] = useState<FleetTvClientState>(EMPTY);

  useEffect(() => {
    let etag = "";
    let stop = false;
    const tick = async () => {
      try {
        const response = await fetch("/api/tv-manifest", {
          headers: etag ? { "if-none-match": etag } : {},
          cache: "no-store",
        });
        const next = response.headers.get("etag");
        if (next) etag = next;
        if (response.status === 304 || !response.ok) return;
        const body = await response.json();
        if (stop) return;
        const parsed = parseFleetTvManifest(body);
        setState((current) => (sameState(current, parsed) ? current : parsed));
      } catch {
        /* keep the last board; a missed poll is not a content change */
      }
    };
    void tick();
    const timer = window.setInterval(() => void tick(), 60_000);
    return () => {
      stop = true;
      window.clearInterval(timer);
    };
  }, []);

  return state;
}
