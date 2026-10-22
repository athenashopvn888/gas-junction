import { existsSync } from "node:fs";
import path from "node:path";
import { CODED_NAP, CODED_PAGES, fleetVersion } from "./coded.ts";
import { resolveBanners, resolveNap, resolvePages } from "./resolve.ts";
import { FLEET_DOMAIN, FLEET_STORE_CODE, type ContentBundle, type ContentManifest, type FleetState } from "./types.ts";
import { parseBundle, parseManifest, rejectHttp } from "./validate.ts";

export const FLEET_MANIFEST_ENV = "FLEET_CONTENT_MANIFEST_URL";
export const FLEET_REVALIDATE_ENV = "FLEET_REVALIDATE_SECRET";
export const EDGE_CONFIG_ENV = "EDGE_CONFIG";

type Accepted = {
  manifest: ContentManifest;
  bundle: ContentBundle;
  etag: string;
};

let accepted: Accepted | null = null;

export function resetFleetContentCache(): void {
  accepted = null;
}

export function codedFleetState(renderedAt = new Date().toISOString()): FleetState {
  return {
    active: false,
    version: fleetVersion(null),
    contentVersion: null,
    renderedAt,
    nap: CODED_NAP,
    banners: [],
    pages: CODED_PAGES,
  };
}

function stateFrom(bundle: ContentBundle, imageOk: (url: string) => boolean, renderedAt: string): FleetState {
  return {
    active: true,
    version: fleetVersion(bundle.contentVersion),
    contentVersion: bundle.contentVersion,
    renderedAt,
    nap: resolveNap(bundle),
    banners: resolveBanners(bundle, imageOk),
    pages: resolvePages(bundle),
  };
}

function ownDomain(hostname: string): boolean {
  return hostname === FLEET_DOMAIN || hostname === "gasjunctioncannabis.com" || hostname.endsWith(".public.blob.vercel-storage.com") || hostname === "blob.vercel-storage.com";
}

/** Blob or own-domain images only. A missing file is a broken image. */
export async function defaultImageOk(url: string): Promise<boolean> {
  if (!url) return false;
  if (url.startsWith("/")) {
    if (url.includes("..")) return false;
    return existsSync(path.join(process.cwd(), "public", url));
  }
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return false;
  }
  if (!ownDomain(parsed.hostname)) return false;
  try {
    const response = await fetch(url, { method: "GET", cache: "no-store" });
    const type = response.headers.get("content-type") || "";
    return response.ok && (type.startsWith("image/") || type === "");
  } catch {
    return false;
  }
}

export async function readEmergencyCoded(fetchImpl: typeof fetch = fetch): Promise<boolean> {
  const connection = process.env[EDGE_CONFIG_ENV];
  if (!connection) return false;
  try {
    const url = new URL(connection);
    const token = url.searchParams.get("token");
    url.searchParams.delete("token");
    const itemUrl = `${url.origin}${url.pathname.replace(/\/$/, "")}/item/contentMode`;
    const response = await fetchImpl(itemUrl, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      cache: "no-store",
    });
    if (!response.ok) return false;
    const body = await response.json();
    return body === "coded" || body?.value === "coded";
  } catch {
    return false;
  }
}

export async function readFleetContent(options: {
  manifestUrl?: string | null;
  fetchImpl?: typeof fetch;
  emergencyCoded?: boolean;
  imageOk?: (url: string) => boolean | Promise<boolean>;
  renderedAt?: string;
} = {}): Promise<FleetState> {
  const renderedAt = options.renderedAt ?? new Date().toISOString();
  const emergency = options.emergencyCoded ?? await readEmergencyCoded(options.fetchImpl);
  if (emergency) return codedFleetState(renderedAt);
  const manifestUrl = options.manifestUrl === undefined
    ? process.env[FLEET_MANIFEST_ENV]?.trim() || ""
    : options.manifestUrl || "";
  if (!manifestUrl) return codedFleetState(renderedAt);

  const fetchImpl = options.fetchImpl ?? fetch;
  const manifestHeaders: Record<string, string> = {};
  if (accepted?.etag) manifestHeaders["if-none-match"] = accepted.etag;
  let manifestResponse: Response;
  try {
    manifestResponse = await fetchImpl(manifestUrl, { cache: "no-store", headers: manifestHeaders });
  } catch {
    return accepted ? stateFrom(accepted.bundle, () => true, renderedAt) : codedFleetState(renderedAt);
  }
  const httpProblem = rejectHttp(manifestResponse.status);
  if (manifestResponse.status === 304 && accepted) return stateFrom(accepted.bundle, () => true, renderedAt);
  if (httpProblem || manifestResponse.status === 304) {
    return accepted ? stateFrom(accepted.bundle, () => true, renderedAt) : codedFleetState(renderedAt);
  }
  const manifestRaw = await manifestResponse.text();
  const manifest = parseManifest(manifestRaw);
  if (!manifest.ok) return accepted ? stateFrom(accepted.bundle, () => true, renderedAt) : codedFleetState(renderedAt);

  let bundleResponse: Response;
  try {
    bundleResponse = await fetchImpl(manifest.value.bundleUrl, { cache: "no-store" });
  } catch {
    return accepted ? stateFrom(accepted.bundle, () => true, renderedAt) : codedFleetState(renderedAt);
  }
  const bundleHttp = rejectHttp(bundleResponse.status);
  if (bundleHttp) return accepted ? stateFrom(accepted.bundle, () => true, renderedAt) : codedFleetState(renderedAt);
  const bundleRaw = await bundleResponse.text();
  const bundle = parseBundle(bundleRaw, accepted?.bundle ?? null);
  if (!bundle.ok) return accepted ? stateFrom(accepted.bundle, () => true, renderedAt) : codedFleetState(renderedAt);

  const etag = manifestResponse.headers.get("etag") || `"${FLEET_STORE_CODE}-${bundle.value.contentVersion}"`;
  accepted = { manifest: manifest.value, bundle: bundle.value, etag };
  const probe = options.imageOk ?? defaultImageOk;
  const images = new Set<string>();
  for (const slot of [...(bundle.value.slots ?? []), ...(bundle.value.all?.slots ?? [])]) {
    const image = slot.image?.trim() || "";
    if (image) images.add(image);
  }
  const checks = await Promise.all([...images].map(async (image) => [image, await probe(image)] as const));
  const ok = new Map(checks);
  return stateFrom(bundle.value, (url) => ok.get(url) === true, renderedAt);
}

export function tvManifestDecision(state: FleetState, ifNoneMatch: string | null, bundleUrl = "") {
  const etag = manifestEtag(state.contentVersion);
  if (ifNoneMatch === etag) return { status: 304 as const, etag, body: null };
  return { status: 200 as const, etag, body: tvManifestBody(state, bundleUrl) };
}

export function manifestEtag(version: number | null): string {
  return version == null ? `"${FLEET_STORE_CODE}-coded"` : `"${FLEET_STORE_CODE}-${version}"`;
}

export function tvManifestBody(state: FleetState, bundleUrl = ""): ContentManifest {
  return {
    storeCode: FLEET_STORE_CODE,
    contentVersion: state.contentVersion ?? 0,
    bundleUrl,
    publishedAt: state.renderedAt,
    jobId: state.active ? "published" : "coded",
  };
}
