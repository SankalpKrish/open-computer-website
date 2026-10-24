import type { Metadata } from "next";
import { ContactPage } from "@/components/site/contact-page";
import { PageFrame } from "@/components/site/page-frame";
import { GreekContact } from "@/themes/greek/pages/contact";
import { DreamContact } from "@/themes/dream/pages";
import { AthenaContact } from "@/themes/athena/pages";

export const metadata: Metadata = {
  title: "Contact",
  description: "Put Athena on your lines. Contact archit@tryopencomputer.com with your use case and call script.",
};

export default function ContactRoute() {
  return (
    <PageFrame athena={<AthenaContact />} greek={<GreekContact />} dream={<DreamContact />}>
      <ContactPage />
    </PageFrame>
  );
}
