import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { AthenaPricing } from "@/themes/athena/pages";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Athena is ₹4.5 per minute all-in, including voice, model, tools and classification. Voice-only is ₹3.5 per minute. Estimate your call costs.",
};
export default function PricingRoute() {
  return (
    <PageFrame athena={<AthenaPricing />}>
      <AthenaPricing />
    </PageFrame>
  );
}
