import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { AthenaSolutions } from "@/themes/athena/pages";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Athena for clinics, garages, restaurants, home services, verification and outbound campaigns. Six ready-made plays for the calls that run a business.",
};
export default function SolutionsRoute() {
  return (
    <PageFrame athena={<AthenaSolutions />}>
      <AthenaSolutions />
    </PageFrame>
  );
}
