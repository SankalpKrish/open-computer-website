import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { brand } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${brand.name} treats information on this marketing site.`,
};

export default function PrivacyRoute() {
  return (
    <PageFrame>
      <section className="px-6 lg:px-12 pt-36 pb-24 max-w-[800px] mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {brand.name} / Privacy
        </p>
        <h1 className="font-display text-5xl mt-6">Privacy</h1>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            This website is a public marketing site for Open Computer products and services. It
            does not create accounts.
          </p>
          <p>
            The contact form opens your email application with a draft to
            support@tryopencomputer.com. The message is sent only if you send it from your mail
            client. This site does not store the form fields.
          </p>
          <p>
            Pages may use standard hosting analytics. Do not send secrets, credentials, or personal
            data you would not put in an ordinary email.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
