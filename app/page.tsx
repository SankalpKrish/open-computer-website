import { HomePage } from "@/components/site/home-page";
import { PageFrame } from "@/components/site/page-frame";
import { GreekHome } from "@/themes/greek/pages/home";
import { DreamHome } from "@/themes/dream/home";
import { AthenaHome } from "@/themes/athena/home";

export default function Home() {
  return (
    <PageFrame athena={<AthenaHome />} greek={<GreekHome />} dream={<DreamHome />}>
      <HomePage />
    </PageFrame>
  );
}
