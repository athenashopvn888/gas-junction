/**
 * Build-time cigarette switch.
 * SHOW_CIGARETTES stays false unless NEXT_PUBLIC_SHOW_CIGARETTES is true
 * (also 1, yes, or on). Day-to-day on/off comes from the menu feed.
 * An explicit false / 0 / no / off is a hard override: the feed cannot turn
 * cigarettes back on. An empty value is not that override.
 */
const SHOW_CIGARETTES_DEFAULT = false;

function readShowCigarettes(raw: string | undefined): boolean {
  if (raw == null || raw.trim() === "") return SHOW_CIGARETTES_DEFAULT;
  return /^(1|true|yes|on)$/i.test(raw.trim());
}

export const SHOW_CIGARETTES = readShowCigarettes(process.env.NEXT_PUBLIC_SHOW_CIGARETTES);

function hardOffRaw(raw: string | undefined): string | undefined {
  if (raw != null) return raw;
  // SHOW_CIGARETTES is read at runtime. The public var is inlined at build.
  return process.env.SHOW_CIGARETTES ?? process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
}

export function cigaretteEnvHardOff(raw: string | undefined = hardOffRaw(undefined)): boolean {
  if (raw == null) return false;
  return /^(0|false|no|off)$/i.test(raw.trim());
}

export const CIGARETTES_HARD_OFF = cigaretteEnvHardOff();
