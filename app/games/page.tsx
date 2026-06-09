import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Gas Junction Cannabis | Toronto",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Gas Junction Cannabis.",
  alternates: {
    canonical: "https://gasjunctioncannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
