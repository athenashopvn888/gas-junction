import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Gas Junction Cannabis | Toronto",
  description: "Get notified when Gas Junction Cannabis launches same-day weed delivery across Toronto and surrounding areas.",
  alternates: {
    canonical: "https://gasjunctioncannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
