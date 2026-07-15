export interface ItemEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
  consume: string;
}

const menuNotes = [
  { emoji: "*", label: "Menu Listed" },
  { emoji: "+", label: "Compare Details" },
  { emoji: "i", label: "Ask Staff" },
];

export function getItemData(category: string, name: string): ItemEffects {
  const cat = category.toUpperCase();

  if (cat === "EDIBLES") {
    return {
      effects: menuNotes,
      description: `${name} appears in the edibles category at Gas Junction Cannabis. Review the current menu and package details before visiting.`,
      metaDescription: `Review ${name} cannabis edible information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "Review the package and current menu details. Ask staff if an item detail is unclear before choosing.",
    };
  }

  if (cat.includes("VAPE")) {
    return {
      effects: menuNotes,
      description: `${name} appears in the vape category at Gas Junction Cannabis. Review current menu details for the product format and listed flavours.`,
      metaDescription: `Review ${name} vape information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "Review the package for format and compatibility details, and ask staff if an item detail is unclear.",
    };
  }

  if (cat === "CONCENTRATES") {
    return {
      effects: menuNotes,
      description: `${name} appears in the concentrates category at Gas Junction Cannabis. Confirm current product and format details before visiting.`,
      metaDescription: `Review ${name} cannabis concentrate information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "Review the package and ask staff when a concentrate format detail matters.",
    };
  }

  if (cat === "PREROLLS") {
    return {
      effects: menuNotes,
      description: `${name} appears in the pre-roll category at Gas Junction Cannabis. Check current menu details for the product name and pack size.`,
      metaDescription: `Review ${name} pre-roll information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "Review the package and ask staff if the format or pack detail is unclear.",
    };
  }

  if (cat === "MAGIC & OTHERS") {
    return {
      effects: menuNotes,
      description: `${name} appears in the specialty category at Gas Junction Cannabis. Confirm current product and package details before choosing.`,
      metaDescription: `Review ${name} specialty item information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
      consume: "Review the package and ask staff if an item detail is unclear.",
    };
  }

  return {
    effects: menuNotes,
    description: `${name} appears in the Gas Junction Cannabis menu. Confirm current product details before visiting the Toronto store.`,
    metaDescription: `Review ${name} information in Toronto at Gas Junction Cannabis. Walk-ins welcome during posted store hours.`,
    consume: "Review the package and current menu for item details.",
  };
}
