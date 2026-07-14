import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Updates - Gas Junction Cannabis | The Junction",
  description: "Gas Junction Cannabis delivery updates for The Junction and Toronto shoppers. Check this page for local delivery information as details are prepared.",
  alternates: {
    canonical: "https://gasjunctioncannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
