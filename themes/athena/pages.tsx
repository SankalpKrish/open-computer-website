import Link from "next/link";
import type { ReactNode } from "react";
import {
  athena,
  callPrices,
  callSteps,
  capabilities,
  faqs,
  integrations,
  reliability,
  roadmap,
  solutions,
  useCases,
} from "@/lib/athena-content";
import type { Product } from "@/lib/site-content";
import {
  CallToAction,
  Curtain,
  Eyebrow,
  Features,
  NextSteps,
  PageHero,
  Pill,
  ProductArtwork,
  ProductTiles,
  Proof,
  Questions,
  Section,
} from "./components";
import {
  ContactForm,
  LanguageList,
  PriceCalculator,
  SolutionCards,
  VoicePreview,
} from "./interactions";

export function AthenaVoice() {
  return (
    <>
      <PageHero
        label="Athena Voice"
        title="A natural conversation. A job well done."
        display="Voice"
        description="Voice agents that answer, call and finish the job. Real-time speech-to-speech, connected to your knowledge and tools."
        cta="Explore the conversation"
        href="#voice-surface"
        links={[
          { name: "Conversation", href: "#voice-surface" },
          { name: "Phone workflows", href: "#phone-workflows" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
      <Section label="Voice surface" id="voice-surface">
        <h2>
          A conversation.
          <br />
          With somewhere to go.
        </h2>
        <VoicePreview />
        <dl className="at-catalog">
          <div>
            <dt>62</dt>
            <dd>languages to start a call in</dd>
          </div>
          <div>
            <dt>24</dt>
            <dd>voices to choose from</dd>
          </div>
          <div>
            <dt>Phone + web</dt>
            <dd>one connected experience</dd>
          </div>
        </dl>
      </Section>
      <Section label="Capabilities" id="capabilities">
        <h2>
          The whole phone desk.
          <br />
          In one agent.
        </h2>
        <Features items={capabilities} numbered />
      </Section>
      <Section label="How it works" id="how-it-works">
        <h2>
          A real conversation,
          <br />
          wired to your systems.
        </h2>
        <div className="at-call-flow">
          {callSteps.map((item, i) => (
            <article key={item.title}>
              <span className="at-index">
                0{i + 1} / {item.title}
              </span>
              <h3>{item.subtitle}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="at-after-call" id="call-review">
          <Eyebrow>After the call</Eyebrow>
          <p>
            Transcript, recording, outcome and a retries list — with a plain
            reason for each call to try again.
          </p>
        </div>
      </Section>
      <Section label="Phone workflows" id="phone-workflows">
        <h2>
          Where other voice agents give up,
          <br />
          Athena gets through.
        </h2>
        <div className="at-comparison">
          <article>
            <Eyebrow>Phone menus · IVR</Eyebrow>
            <h3>Get to the person.</h3>
            <ul>
              <li>Listens to the whole menu before pressing a key.</li>
              <li>Presses keys and spells entries in one go.</li>
              <li>Waits on hold, then speaks when a person picks up.</li>
              <li>Recognises a person, voicemail or menu in about 0.4 s.</li>
            </ul>
          </article>
          <article>
            <Eyebrow>Retries</Eyebrow>
            <h3>Keep the next call in view.</h3>
            <ul>
              <li>Every call worth trying again is listed.</li>
              <li>A plain reason: busy, no answer, call back later.</li>
              <li>Retry up to 250 in one click, paced safely.</li>
              <li>One live call per number. Do-not-call respected.</li>
            </ul>
          </article>
        </div>
      </Section>
      <section className="at-section">
        <div className="at-section-heading">
          <h2>The numbers behind the voice.</h2>
          <Eyebrow>Measured on our system</Eyebrow>
        </div>
        <Proof />
      </section>
      <Section label="Connections" id="connections">
        <h2>
          It doesn’t just talk.
          <br />
          It does the work.
        </h2>
        <Features items={integrations} />
        <Pill href="/technology#integrations">Explore integrations</Pill>
      </Section>
      <Section label="Solutions" id="solutions">
        <h2>
          What should happen
          <br />
          after “hello”?
        </h2>
        <Features items={useCases} />
        <Pill href="/solutions">Find your workflow</Pill>
      </Section>
      <CallToAction />
      <Section label="Questions">
        <Questions items={faqs} />
      </Section>
    </>
  );
}

export function AthenaTechnology() {
  return (
    <>
      <PageHero
        label="Technology"
        title="Keep talking. Keep work moving."
        display="Live. Connected."
        description="A real conversation in front. Fast decisions, useful tools and reliable infrastructure behind it."
        cta="Explore the architecture"
        href="#architecture"
        links={[
          { name: "How it works", href: "#architecture" },
          { name: "Languages", href: "#languages" },
          { name: "Reliability", href: "#reliability" },
        ]}
      />
      <Section label="Architecture" id="architecture">
        <h2>
          A real conversation,
          <br />
          wired to your systems.
        </h2>
        <div className="at-call-flow">
          {callSteps.map((item, i) => (
            <article key={item.title}>
              <span className="at-index">
                0{i + 1} / {item.title}
              </span>
              <h3>{item.subtitle}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="at-after-call">
          <Eyebrow>The result</Eyebrow>
          <p>
            An answer, an action or a clear next step. After every call:
            transcript, recording, outcome and a reason for each retry.
          </p>
        </div>
      </Section>
      <Section label="Integrations" id="integrations">
        <h2>
          It doesn’t just talk.
          <br />
          It does the work.
        </h2>
        <Features items={integrations} />
      </Section>
      <Section label="Languages & voices" id="languages">
        <h2>
          Speak to your audience.
          <br />
          In their language.
        </h2>
        <dl className="at-catalog">
          <div>
            <dt>62</dt>
            <dd>languages, each tested on our system</dd>
          </div>
          <div>
            <dt>24</dt>
            <dd>voices with the same duplex quality</dd>
          </div>
        </dl>
        <p className="at-lead">
          American and British English, French, German, Hindi, Japanese, Korean,
          Mexican Spanish and Brazilian Portuguese voices.
        </p>
        <LanguageList />
        <p className="at-small">
          Ten Indian languages highlighted. Set the language per agent or per
          call.
        </p>
      </Section>
      <Section label="Built for call centres" id="scale">
        <h2>
          Scale and compliance,
          <br />
          out of the box.
        </h2>
        <div className="at-scale-heading">
          <span>
            5 <span aria-hidden="true">→</span> 500
          </span>
          <p>
            simultaneous calls.
            <br />
            Pick a tier. Move up any time.
          </p>
        </div>
        <div
          className="at-scale-bars"
          aria-label="Concurrent-call tiers: 5, 10, 20, 50, 100, 150, 200, 250 and 500"
        >
          {[5, 10, 20, 50, 100, 150, 200, 250, 500].map((n) => (
            <div key={n}>
              <span>{n}</span>
              <i
                style={{
                  height: `${(28 + Math.sqrt(n / 500) * 152).toFixed(2)}px`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="at-comparison">
          <article>
            <Eyebrow>Run at scale</Eyebrow>
            <ul>
              <li>SIP telephony, inbound and outbound, on your numbers.</li>
              <li>Call servers added as campaign volume grows.</li>
              <li>Caller memory, knowledge base and MCP tools.</li>
            </ul>
          </article>
          <article>
            <Eyebrow>Built-in controls</Eyebrow>
            <ul>
              <li>Do-not-call: opted-out numbers are never redialled.</li>
              <li>One live call per number at a time.</li>
              <li>Carrier dial pacing to protect your numbers.</li>
              <li>Retries with a reason for every call held back.</li>
            </ul>
          </article>
        </div>
      </Section>
      <Section label="Reliability" id="reliability">
        <h2>
          Built so a bad day never
          <br />
          reaches your callers.
        </h2>
        <div className="at-reliability-facts">
          <div>
            <strong>24/7</strong>
            <p>Monitoring, with email alerts the moment anything degrades.</p>
          </div>
          <div>
            <strong>0.4 s</strong>
            <p>Fast inference for call decisions.</p>
          </div>
        </div>
        <Features items={reliability} />
      </Section>
      <Section label="Proof" id="evaluation">
        <h2>
          Measure the experience.
          <br />
          Improve the weak point.
        </h2>
        <Proof compact />
        <p className="at-small">
          Figures reported in the Athena by OpenComputer product deck:
          call-decision timing, phone-menu success, live-call audio delivery and
          median response time measure different parts of the system.
        </p>
      </Section>
      <Section label="Shipping next" id="roadmap">
        <div className="at-roadmap-heading">
          <h2>
            Built and tested.
            <br />
            Final checks in progress.
          </h2>
          <span className="at-status">Coming next</span>
        </div>
        <p className="at-lead">
          These improvements are going live after final checks.
        </p>
        <Features items={roadmap} />
      </Section>
      <CallToAction title="Connect the conversation to your workflow." />
    </>
  );
}

export function AthenaSolutions() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="The calls that run a business, handled."
        display="Outcomes"
        description="A booking, an answer, a verified fact or a useful handoff. Six ready-made plays, built around your systems."
        silver
        cta="Find your workflow"
        href="#solutions"
        links={[
          { name: "Solutions", href: "#solutions" },
          { name: "More use cases", href: "#use-cases" },
          { name: "Get started", href: "/contact" },
        ]}
      />
      <Section label="Ready-made plays" id="solutions">
        <h2>
          A conversation.
          <br />A useful next step.
        </h2>
        <p className="at-lead">
          Verification and outbound campaigns are live today. Clinic, garage,
          restaurant and home-service solutions are ready to set up after tool
          hookup.
        </p>
        <SolutionCards />
      </Section>
      {solutions.map((item) => (
        <Section
          key={item.id}
          label={item.category}
          id={item.id}
          className="at-solution-detail"
        >
          <div className="at-solution-detail-heading">
            <h2>{item.title}</h2>
            <span
              className={`at-status${item.status === "Live" ? " at-status-live" : ""}`}
            >
              {item.status === "Live"
                ? "Live today"
                : "Setup after tool hookup"}
            </span>
          </div>
          <p className="at-lead">{item.body}</p>
          <p>{item.detail}</p>
          <div className="at-solution-outcome">
            <Eyebrow>The outcome</Eyebrow>
            <p>{item.outcome}</p>
          </div>
          <Pill
            href={`/contact?interest=${encodeURIComponent(item.id === "verification" ? "Verification" : item.id === "outbound" ? "Outbound campaigns" : "Athena Voice")}`}
          >
            Build this workflow
          </Pill>
        </Section>
      ))}
      <Section label="Use cases" id="use-cases">
        <h2>
          Everyday calls.
          <br />
          Extraordinary capacity.
        </h2>
        <Features items={useCases} />
      </Section>
      <CallToAction />
    </>
  );
}

export function AthenaPricing() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Minute twelve costs the same as minute one."
        display="₹4.5 / min"
        description="One flat rate. Voice, model, tools and classification included. Know what a call costs before it starts."
        cta="Estimate your calls"
        href="#estimate"
        links={[
          { name: "Rates", href: "#rates" },
          { name: "Call costs", href: "#call-costs" },
          { name: "Estimate", href: "#estimate" },
        ]}
      />
      <Section label="The rates" id="rates">
        <h2>
          One rate.
          <br />
          Everything in the call.
        </h2>
        <div className="at-rate-cards">
          <article>
            <Eyebrow>All-in</Eyebrow>
            <p className="at-price">
              ₹4.5<span>/ minute</span>
            </p>
            <p>Voice, model, tools and classification included.</p>
            <Pill href="/contact?interest=Athena%20Voice">
              Start with Athena
            </Pill>
          </article>
          <article>
            <Eyebrow>Voice-only</Eyebrow>
            <p className="at-price">
              ₹3.5<span>/ minute</span>
            </p>
            <p>The same voices and duplex quality.</p>
            <Pill href="/contact?interest=Athena%20Voice" secondary>
              Talk to the team
            </Pill>
          </article>
        </div>
      </Section>
      <Section label="Example call costs" id="call-costs">
        <h2>
          A useful result.
          <br />A predictable cost.
        </h2>
        <div className="at-table-scroll">
          <table className="at-pricing-table">
            <caption>
              Illustrative call lengths · ₹4.5 per minute, all-in
            </caption>
            <thead>
              <tr>
                <th scope="col">What the call does</th>
                <th scope="col">Length</th>
                <th scope="col">Per call, all-in</th>
              </tr>
            </thead>
            <tbody>
              {callPrices.map((item) => (
                <tr key={item.task}>
                  <th scope="row">{item.task}</th>
                  <td>{item.minutes} min</td>
                  <td>₹{item.minutes * 4.5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section label="Your estimate" id="estimate">
        <PriceCalculator />
      </Section>
      <Section label="Next step">
        <h2>Start with one workflow.</h2>
        <NextSteps />
      </Section>
      <CallToAction />
      <Section label="Questions">
        <Questions items={faqs.slice(1, 3)} />
      </Section>
    </>
  );
}

export function AthenaServices() {
  return (
    <>
      <PageHero
        label="Implementation"
        title="Your lines. Your tools. Our team."
        display="Built with you."
        description="Pick the call that matters. We build the agent around your scripts, systems and numbers. Hear it on real calls, then scale."
        cta="Tell us about the work"
        href="/contact"
        links={[
          { name: "Get started", href: "#pilot" },
          { name: "Voice", href: "#voice" },
          { name: "Agent", href: "#agent" },
        ]}
      />
      <Section label="Getting started" id="pilot">
        <h2>Put Athena on your lines.</h2>
        <NextSteps />
        <Pill href="/contact">Start a conversation</Pill>
      </Section>
      <Section label="Voice implementation" id="voice">
        <h2>
          The whole phone desk.
          <br />
          Connected to your business.
        </h2>
        <Features
          items={[
            {
              title: "Your conversation",
              body: "Start with a use case and call script. Choose the language, voice, role and when to hand off to a person.",
            },
            {
              title: "Your connected systems",
              body: "Connect calendars, CRMs, order systems, knowledge and MCP tools for useful actions during the call.",
            },
            {
              title: "Your phone numbers",
              body: "Inbound and outbound SIP telephony, browser calls and campaigns. Pick a concurrency tier from 5 to 500.",
            },
            {
              title: "A result you can review",
              body: "Transcripts, recordings, outcomes and retries. Webhooks carry the result back to your systems.",
            },
          ]}
        />
        <Pill href="/pricing">See the flat rates</Pill>
      </Section>
      <Section label="Agent implementation" id="agent">
        <h2>
          Useful work.
          <br />
          On your infrastructure.
        </h2>
        <p className="at-lead">
          Athena Agent brings persistent context, approved tools and repeatable
          skills to the work behind the conversation. Local, private server, VPC
          or on-prem.
        </p>
        <Pill href="/products/agent">Explore Athena Agent</Pill>
      </Section>
      <Section label="Inference gateway" id="router">
        <h2>
          One API.
          <br />
          The right model for the task.
        </h2>
        <p className="at-lead">
          Inferno Router connects frontier and self-hosted models behind one
          OpenAI-compatible API, with routing, caching and failover.
        </p>
        <Pill href="/products/router">Explore Inferno Router</Pill>
      </Section>
      <CallToAction />
    </>
  );
}

export function AthenaContact() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Start with the work."
        display="Let’s talk."
        description="One use case and your call script are enough to begin. Tell us the outcome you want and which systems should connect."
        cta="Tell us about the work"
        href="#contact-form"
        links={[
          { name: "Get in touch", href: "#contact-form" },
          { name: "Next steps", href: "#next-steps" },
          { name: "Questions", href: "/#questions" },
        ]}
      />
      <Section label="Get in touch" id="contact-form">
        <h2>Tell us where to start.</h2>
        <a className="at-direct-email" href={`mailto:${athena.email}`}>
          {athena.email} <span aria-hidden="true">↗</span>
        </a>
        <ContactForm />
      </Section>
      <Section label="The next step" id="next-steps">
        <h2>Put Athena on your lines.</h2>
        <NextSteps />
      </Section>
      <Section label="Before we talk">
        <h2>A useful starting point.</h2>
        <ul className="at-checklist">
          <li>The use case and call script you want to start with.</li>
          <li>
            Your phone numbers and whether calls are inbound, outbound or both.
          </li>
          <li>
            The calendars, CRM, knowledge or tools Athena should connect to.
          </li>
          <li>Your preferred languages, voices and expected call volume.</li>
        </ul>
        <Pill href="/pricing">Plan your call costs</Pill>
      </Section>
    </>
  );
}

export function AthenaProducts() {
  return (
    <>
      <PageHero
        label="Products"
        title="Natural conversation. Real-world capability."
        display="Voice. Agent."
        description="Athena Voice understands the conversation. Athena Agent carries the work forward. One connected path from a human request to a useful result."
      />
      <Section label="The products">
        <ProductTiles />
      </Section>
      <Section label="Athena Voice">
        <h2>Answer. Call. Finish the job.</h2>
        <ProductArtwork />
        <p className="at-lead">
          62 languages. 24 voices. Phone lines and the web. ₹4.5 a minute,
          all-in.
        </p>
        <Pill href="/products/voice">Explore Athena Voice</Pill>
      </Section>
      <Section label="Inference">
        <h2>
          One gateway.
          <br />
          Many models.
        </h2>
        <p className="at-lead">
          Inferno Router keeps model routing, failover and prompt caching in one
          place.
        </p>
        <Pill href="/products/router">Explore Inferno Router</Pill>
      </Section>
      <CallToAction />
    </>
  );
}

export function AthenaProduct({ product }: { product: Product }) {
  if (product.slug === "voice") return <AthenaVoice />;
  const agent = product.slug === "agent";
  const name = agent ? "Athena Agent" : product.name;
  return (
    <>
      <PageHero
        label={name}
        title={
          agent
            ? "From intent to a verified result."
            : "One gateway. The right model for every step."
        }
        display={agent ? "Agent" : "Inferno"}
        description={product.oneLiner}
        silver={agent}
        cta="Explore the capabilities"
        href="#capabilities"
      />
      {agent && (
        <Section label="Your infrastructure">
          <div className="at-product-chapter">
            <ProductArtwork agent />
            <div>
              <Eyebrow>Athena Agent by OpenComputer</Eyebrow>
              <h2>
                Your own AI.
                <br />
                Your own infrastructure.
              </h2>
              <p>{product.heroSubhead}</p>
            </div>
          </div>
        </Section>
      )}
      {!agent && (
        <Section label="Inference gateway">
          <h2>
            One API.
            <br />
            Connected intelligence.
          </h2>
          <p className="at-lead">{product.heroSubhead}</p>
        </Section>
      )}
      <Section label="Capabilities" id="capabilities">
        <h2>
          {agent
            ? "Memory. Tools. Useful work."
            : "Routing, without the rewiring."}
        </h2>
        <Features items={product.features} />
        <ul className="at-checklist">
          {product.capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section label="In practice">
        <h2>Built around real work.</h2>
        <Features items={product.useCases} />
      </Section>
      {product.detailSections.map((section, i) => (
        <Section key={section.title} label={`In detail / 0${i + 1}`}>
          <h2>{section.title}</h2>
          <p className="at-lead">{section.body}</p>
          <ul className="at-checklist">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ))}
      <Section label="Deployment">
        <p className="at-small">{product.claimNote}</p>
        <Pill href={`/contact?interest=${encodeURIComponent(name)}`}>
          Build with {name}
        </Pill>
      </Section>
      <CallToAction
        title={
          agent
            ? "Put a capable agent to work."
            : "Put your inference under one roof."
        }
      />
    </>
  );
}

export function AthenaLegal({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        label="OpenComputer"
        title={title}
        display="The details."
        description="Information about the Athena by OpenComputer website."
        cta="Contact the team"
      />
      <Section label={title}>
        <div className="at-legal-copy">{children}</div>
      </Section>
    </>
  );
}

export function AthenaNotFound() {
  return (
    <div className="at-not-found">
      <Curtain />
      <Eyebrow>Athena Research / 404</Eyebrow>
      <h1>
        That conversation
        <br />
        starts somewhere else.
      </h1>
      <p>We couldn’t find this page.</p>
      <Pill href="/">Back to the homepage</Pill>
    </div>
  );
}
