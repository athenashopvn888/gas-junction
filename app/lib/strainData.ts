/* -- Auto-generated strain effects & SEO descriptions -- */

interface StrainEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
}

const INDICA_EFFECTS = [
  { emoji: "\uD83C\uDF3F", label: "Indica" },
  { emoji: "\uD83D\uDCCB", label: "Menu Details" },
  { emoji: "\uD83D\uDCCD", label: "Store Visit" },
];

const SATIVA_EFFECTS = [
  { emoji: "\uD83C\uDF3F", label: "Sativa" },
  { emoji: "\uD83D\uDCCB", label: "Menu Details" },
  { emoji: "\uD83D\uDCCD", label: "Store Visit" },
];

const HYBRID_EFFECTS = [
  { emoji: "\u2696\uFE0F", label: "Hybrid" },
  { emoji: "\uD83D\uDCCB", label: "Menu Details" },
  { emoji: "\uD83D\uDCCD", label: "Store Visit" },
];

const TIER_DESCRIPTIONS: Record<string, string> = {
  EXOTIC: "Exotic flower tier",
  PREMIUM: "Premium flower tier",
  "AAA+": "AAA+ flower tier",
  AA: "AA flower tier",
  BUDGET: "Budget flower tier",
};

export function getStrainData(
  name: string,
  type: "indica" | "sativa" | "hybrid",
  tier: string,
  _thc: string
): StrainEffects {
  const typeLabel =
    type === "indica" ? "Indica" : type === "sativa" ? "Sativa" : "Hybrid";
  const tierDesc = TIER_DESCRIPTIONS[tier] || tier.toLowerCase();
  const effects =
    type === "indica"
      ? INDICA_EFFECTS
      : type === "sativa"
      ? SATIVA_EFFECTS
      : HYBRID_EFFECTS;

  const description = `${name} is listed as a ${tierDesc} ${typeLabel} flower option. Product details and pricing can change, so confirm the current menu before visiting Gas Junction Cannabis in Toronto.`;

  const metaDescription = `${name} - ${tierDesc} ${typeLabel}. Confirm current menu details before visiting Gas Junction Cannabis Toronto.`;

  return { effects, description, metaDescription };
}
