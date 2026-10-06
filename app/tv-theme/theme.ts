import type { CSSProperties } from "react";

export type TvTheme = {
  headerImage: string;
  backgroundImage: string;
  cornerLeft?: string;
  cornerRight?: string;
  primary: string;
  accent: string;
  glow: string;
  cardBorder: string;
  headerText: string;
  sloganLeft: string;
  sloganRight: string;
  footerLeft: string;
  footerRight: string;
};

export const TV_THEMES: Readonly<Record<string, TvTheme>> = {
  GJC01: {
    headerImage: "/tv-theme/gjc01/header.webp",
    backgroundImage: "/tv-theme/gjc01/background.webp",
    cornerLeft: "/tv-theme/gjc01/corner-left.png",
    cornerRight: "/tv-theme/gjc01/corner-right.png",
    primary: "#14351E",
    accent: "#D8C398",
    glow: "rgba(216, 195, 152, 0.42)",
    cardBorder: "rgba(216, 195, 152, 0.82)",
    headerText: "#FFF6DE",
    sloganLeft: "",
    sloganRight: "",
    footerLeft: "GAS JUNCTION CANNABIS",
    footerRight: "2813 DUNDAS ST W · TORONTO",
  },
};

export function getTvTheme(storeCode?: string | null): TvTheme | undefined {
  return storeCode ? TV_THEMES[storeCode] : undefined;
}

type TvThemeVariables = CSSProperties & {
  "--tv-theme-header-image": string;
  "--tv-theme-background-image": string;
  "--tv-theme-primary": string;
  "--tv-theme-accent": string;
  "--tv-theme-glow": string;
  "--tv-theme-card-border": string;
  "--tv-theme-header-text": string;
};

export function getTvThemeVariables(theme: TvTheme): TvThemeVariables {
  return {
    "--tv-theme-header-image": `url("${theme.headerImage}")`,
    "--tv-theme-background-image": `url("${theme.backgroundImage}")`,
    "--tv-theme-primary": theme.primary,
    "--tv-theme-accent": theme.accent,
    "--tv-theme-glow": theme.glow,
    "--tv-theme-card-border": theme.cardBorder,
    "--tv-theme-header-text": theme.headerText,
  };
}
