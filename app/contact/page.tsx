import type { Metadata } from "next";
import { ContactPage } from "@/components/site/contact-page";
import { PageFrame } from "@/components/site/page-frame";
import { brand } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a conversation with ${brand.name}.`,
};

export default function ContactRoute() {
  return (
    <PageFrame>
      <ContactPage />
    </PageFrame>
  );
}
