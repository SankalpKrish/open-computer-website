import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { brand } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for the ${brand.name} marketing site.`,
};

export default function TermsRoute() {
  return (
    <PageFrame>
      <section className="px-6 lg:px-12 pt-36 pb-24 max-w-[800px] mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {brand.name} / Terms
        </p>
        <h1 className="font-display text-5xl mt-6">Terms</h1>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
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
        </div>
      </section>
    </PageFrame>
  );
}
