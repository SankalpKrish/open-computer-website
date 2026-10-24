import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { AthenaTechnology } from "@/themes/athena/pages";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Inside Athena: real-time speech, connected tools, 62 languages, reliable infrastructure and campaigns that scale from 5 to 500 concurrent calls.",
};
export default function TechnologyRoute() {
  return (
    <PageFrame athena={<AthenaTechnology />}>
      <AthenaTechnology />
    </PageFrame>
  );
}
