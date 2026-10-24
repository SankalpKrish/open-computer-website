import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { brand } from "@/lib/site-content";
import { GreekLegal } from "@/themes/greek/pages/legal";
import { AthenaLegal } from "@/themes/athena/pages";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for the ${brand.name} marketing site.`,
};

// Shared by the default styles and the Greek theme.
const body = (
  <>
    <p>
      This site describes Athena Voice, Open Computer Agent, Inferno Router, and related services.
      Product pages describe platform capability. External actions — calls, messages,
      bookings, record writes — are available only when connected and authorized.
    </p>
    <p>
      Nothing on this site is an offer of employment, a guarantee of results, or a claim that
      Open Computer replaces every workflow or employee.
    </p>
    <p>
      Engagements are scoped in a separate agreement. If copy on this site conflicts with a
      signed contract, the contract controls.
    </p>
  </>
);

export default function TermsRoute() {
  return (
    <PageFrame athena={<AthenaLegal title="Terms">{body}</AthenaLegal>} greek={<GreekLegal title="Terms">{body}</GreekLegal>}>
      <section className="legal-page page-section">
        <h1 className="font-display text-5xl mt-6">Terms</h1>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          {body}
        </div>
      </section>
    </PageFrame>
  );
}
