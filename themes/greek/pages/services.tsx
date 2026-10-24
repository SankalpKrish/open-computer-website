import { services } from "@/lib/site-content";
import { Action, TextLink } from "../components/actions";
import { ProductOrder } from "../components/orders";
import { PartnerRecords } from "../components/partners";
import { Ascent, ClosingSection, PageHero, Wrap } from "../components/sections";

const pilotSteps = [
  { title: "Connect", subtitle: "Month 01", body: "Stand up one bounded workflow on your private infrastructure." },
  { title: "Run", subtitle: "Month 02", body: "Put it to work on real operations, with a direct line to the team." },
  { title: "Evaluate", subtitle: "Month 03", body: "Judge the AI cost and the working system you get to keep." },
];

export function GreekServices() {
  return <>
    <PageHero title={<>Your stack.<br /><em>Our sleeves up.</em></>} actions={<Action>Start a services engagement</Action>}>
      <p className="gk-lead">We deploy voice, agents, and inference on your infrastructure, connect your systems, and work with your team.</p>
    </PageHero>
    <section id="pilot" className="gk-section" aria-labelledby="gk-pilot-title">
      <Wrap><div className="gk-section-head"><h2 id="gk-pilot-title">The 90-day pilot.</h2><p>No setup fee. Pay for the AI you use.<br />You keep what we build.</p></div><Ascent steps={pilotSteps} label="The 90-day pilot" /></Wrap>
    </section>
    <section id="implementation" className="gk-section" aria-label="Services">
      <Wrap>{services.lines.map((line) => <article className="gk-service-line" id={line.id} key={line.id}>
        <ProductOrder slug={line.id} className="gk-service-order" />
        <div className="gk-service-head"><h2>{line.name}</h2><p className="gk-service-product">{line.product}</p><TextLink href={`/products/${line.id}`}>Explore the product</TextLink></div>
        <div className="gk-service-copy"><p>{line.body}</p><p>{line.partner}</p></div>
      </article>)}</Wrap>
    </section>
    <section id="partners" className="gk-section is-pentelic" aria-labelledby="gk-partner-title">
      <Wrap><h2 id="gk-partner-title" className="gk-section-title">Partners.</h2><PartnerRecords />
        <p className="gk-claim">External actions — calls, messages, bookings, record updates — can run when connected and authorized. Open Computer does not claim universal delivery, instant response on every channel, or replacement of every workflow.</p></Wrap>
    </section>
    <ClosingSection />
  </>;
}
