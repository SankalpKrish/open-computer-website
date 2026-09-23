import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { ServicesPage } from "@/components/site/services-page";
import { brand } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description: `Voice, agent, and router services from ${brand.name}, including Lifie AI, Puravankara, BDCC, BESCOM, and ISKCON Bengaluru.`,
};

export default function ServicesRoute() {
  return (
    <PageFrame>
      <ServicesPage />
    </PageFrame>
  );
}
