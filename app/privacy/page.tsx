import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { brand } from "@/lib/site-content";
import { GreekLegal } from "@/themes/greek/pages/legal";
import { AthenaLegal } from "@/themes/athena/pages";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${brand.name} treats information on this marketing site.`,
};

// Shared by the default styles and the Greek theme.
const body = (
  <>
    <p>
      This website is a public marketing site for Open Computer products and services. It
      does not create accounts.
    </p>
    <p>
      The contact form opens your email application with a draft to
      archit@tryopencomputer.com. The message is sent only if you send it from your mail
      client. This site does not store the form fields.
    </p>
    <p>
      Pages may use standard hosting analytics. Do not send secrets, credentials, or personal
      data you would not put in an ordinary email.
    </p>
  </>
);

export default function PrivacyRoute() {
  return (
    <PageFrame athena={<AthenaLegal title="Privacy">{body}</AthenaLegal>} greek={<GreekLegal title="Privacy">{body}</GreekLegal>}>
      <section className="legal-page page-section">
        <h1 className="font-display text-5xl mt-6">Privacy</h1>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          {body}
        </div>
      </section>
    </PageFrame>
  );
}
