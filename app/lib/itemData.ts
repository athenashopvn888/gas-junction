export interface ItemEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
  consume: string;
}

export function getItemData(category: string, name: string): ItemEffects {
  const cat = category.toUpperCase();

  if (cat === "EDIBLES") {
    return {
      effects: [
        { emoji: "🕒", label: "Long Lasting" },
        { emoji: "😌", label: "Body High" },
        { emoji: "🍬", label: "Flavorful" },
      ],
      description: `${name} appears in the edibles category at Gas Junction Cannabis. Review the current menu details before visiting, because product availability and potency can change.`,
      metaDescription: `Review ${name} cannabis edible information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "Start low and go slow. We recommend starting with 5-10mg of THC. Edibles can take 45 to 120 minutes to take full effect. Wait at least 2 hours before consuming more.",
    };
  }

  if (cat.includes("VAPE")) {
    return {
      effects: [
        { emoji: "💨", label: "Fast Acting" },
        { emoji: "⚡", label: "Potent" },
        { emoji: "🤫", label: "Discreet" },
      ],
      description: `${name} appears in the vape category at Gas Junction Cannabis. Review current menu details before visiting, because product formats, flavours, and availability can change.`,
      metaDescription: `Review ${name} vape information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "Take 1-2 small puffs and wait 10-15 minutes to gauge the effects before consuming more. Do not chain-vape to avoid burning the coil.",
    };
  }

  if (cat === "CONCENTRATES") {
    return {
      effects: [
        { emoji: "🚀", label: "Highly Potent" },
        { emoji: "⚡", label: "Fast Acting" },
        { emoji: "💎", label: "Pure" },
      ],
      description: `${name} appears in the concentrates category at Gas Junction Cannabis. Confirm current product details, format, and availability before visiting.`,
      metaDescription: `Review ${name} cannabis concentrate information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "Best consumed using a dab rig, concentrate pen, or by sprinkling a small amount over flower. Due to its high potency, start with an extremely small amount (the size of a grain of rice).",
    };
  }

  if (cat === "PREROLLS") {
    return {
      effects: [
        { emoji: "🌿", label: "Classic High" },
        { emoji: "⏱️", label: "Quick Onset" },
        { emoji: "🤝", label: "Shareable" },
      ],
      description: `${name} appears in the pre-roll category at Gas Junction Cannabis. Check current menu details before visiting, since strain, pack size, and availability can change.`,
      metaDescription: `Review ${name} pre-roll information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "Light the end evenly while rotating the joint to prevent canoeing. Take smooth, slow inhales. Wait 10-15 minutes after a few puffs to gauge the effects.",
    };
  }

  if (cat === "MAGIC & OTHERS") {
    return {
      effects: [
        { emoji: "🌀", label: "Specialty" },
        { emoji: "🧠", label: "Mind Expanding" },
        { emoji: "✨", label: "Euphoric" },
      ],
      description: `${name} appears in the specialty category at Gas Junction Cannabis. Confirm current product details and follow all package directions before use.`,
      metaDescription: `Review ${name} specialty item information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "For careful use, consume 0.1g - 0.3g. For a full experience, start with 1g - 2g. Always consume in a safe, comfortable environment. Effects can take 30-90 minutes to onset.",
    };
  }

  // Fallback for Add-Ons, Cigarettes, etc.
  return {
    effects: [
      { emoji: "⭐", label: "Product Info" },
      { emoji: "✅", label: "Reliable" },
    ],
    description: `${name} appears in the Gas Junction Cannabis menu. Confirm current product details and availability before visiting the Toronto store.`,
    metaDescription: `Review ${name} information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
    consume: "Use as directed on the packaging.",
  };
}
