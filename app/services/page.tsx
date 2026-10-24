import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { ServicesPage } from "@/components/site/services-page";
import { GreekServices } from "@/themes/greek/pages/services";
import { DreamServices } from "@/themes/dream/pages";
import { AthenaServices } from "@/themes/athena/pages";

export const metadata: Metadata = {
  title: "Implementation",
  description: "Put Athena on your lines. Pick a use case, connect your tools and numbers, hear it on real calls, then scale up.",
};

export default function ServicesRoute() {
  return (
    <PageFrame athena={<AthenaServices />} greek={<GreekServices />} dream={<DreamServices />}>
      <ServicesPage />
    </PageFrame>
  );
}
