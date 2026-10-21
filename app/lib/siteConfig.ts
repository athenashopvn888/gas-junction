/**
 * Site-wide cigarette and tobacco visibility.
 * SHOW_CIGARETTES defaults to false. Set NEXT_PUBLIC_SHOW_CIGARETTES=true
 * (also 1, yes, or on) to restore every gated cigarette surface.
 */
const SHOW_CIGARETTES_DEFAULT = false;

function readShowCigarettes(raw: string | undefined): boolean {
  if (raw == null || raw.trim() === "") return SHOW_CIGARETTES_DEFAULT;
  return /^(1|true|yes|on)$/i.test(raw.trim());
}

export const SHOW_CIGARETTES = readShowCigarettes(process.env.NEXT_PUBLIC_SHOW_CIGARETTES);
