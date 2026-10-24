import Link from "next/link";
import { capabilities, faqs, problems } from "@/lib/athena-content";
import {
  CallToAction,
  Curtain,
  Eyebrow,
  Features,
  NextSteps,
  Pill,
  ProductArtwork,
  ProductTiles,
  Proof,
  Questions,
  Section,
} from "./components";
import { SolutionCards, VoicePreview } from "./interactions";
import { AthenaWorks } from "./works";

export function AthenaHome() {
  return (
    <>
      <section className="at-home-hero" aria-labelledby="athena-hero-title">
        <Curtain className="at-home-hero-light" />
        <div className="at-hero-layout">
          <div className="at-hero-headline">
            <h1 id="athena-hero-title">
              Voice agents that answer,
              <br className="at-hero-break" /> call and finish the job.
            </h1>
          </div>
          <div className="at-hero-lab">
            <p className="at-lab-title">Research Lab</p>
            <Eyebrow>Conversation. Connected action.</Eyebrow>
            <p className="at-hero-description">
              Athena answers the call. Understands the person. Uses your tools.
              We connect a natural conversation to a useful result.
            </p>
            <Pill href="/contact">Talk to our team</Pill>
          </div>
        </div>
        <div className="at-fit-strip">
          <Eyebrow>Built around your work</Eyebrow>
          <div>
            <span>Natural voice</span>
            <span>Full duplex</span>
            <span>62 languages</span>
            <span>24 voices</span>
            <span>Phone + web</span>
            <span>₹4.5 / minute</span>
          </div>
        </div>
      </section>

      <Section label="Products" id="products" className="at-home-products">
        <ProductTiles />
      </Section>

      <Section label="The problem" id="the-lab">
        <h2 className="at-statement">Business is won and lost on the phone.</h2>
        <p className="at-lead">
          Athena answers every call, calls back at once, works the menus and
          speaks the caller’s language.
        </p>
        <Features items={problems} />
        <Pill href="/solutions">Find your workflow</Pill>
      </Section>

      <section className="at-section at-home-voice" id="voice">
        <div className="at-section-heading">
          <h2>Answer. Call. Follow through.</h2>
          <span className="at-mono">The whole phone desk.</span>
        </div>
        <div className="at-voice-layout">
          <div className="at-voice-copy">
            <Eyebrow>Full-duplex conversation</Eyebrow>
            <h3 className="at-display">
              Athena
              <br />
              Voice.
            </h3>
            <p>
              Meet the caller in a natural conversation. Use your knowledge and
              tools to carry the next step through.
            </p>
            <dl className="at-voice-facts">
              <div>
                <dt>62</dt>
                <dd>languages</dd>
              </div>
              <div>
                <dt>24</dt>
                <dd>voices</dd>
              </div>
            </dl>
            <Pill href="/products/voice">Explore Athena Voice</Pill>
            <div className="at-capability-links">
              <Link href="/products/voice#capabilities">
                Natural conversation
                <span>Listen, speak and handle interruptions.</span>
              </Link>
              <Link href="/technology#integrations">
                Your systems, live<span>Knowledge, APIs and MCP tools.</span>
              </Link>
              <Link href="/products/voice#phone-workflows">
                The complete call<span>Menus, hold and a useful result.</span>
              </Link>
              <Link href="/products/voice#call-review">
                A clear handoff<span>Keep the outcome with its context.</span>
              </Link>
            </div>
          </div>
          <VoicePreview />
        </div>
      </section>

      <Section label="What Athena can do" id="capabilities">
        <h2>
          One agent.
          <br />
          The whole phone desk.
        </h2>
        <Features items={capabilities} numbered />
        <Pill href="/technology">Explore the technology</Pill>
      </Section>

      <section className="at-section at-home-proof" id="proof">
        <div className="at-section-heading">
          <h2>
            Fast, accurate.
            <br />
            Ready to scale.
          </h2>
          <Eyebrow>Measured on our system</Eyebrow>
        </div>
        <Proof />
        <div className="at-proof-footer">
          <p>
            From 5 to 500 calls at once.
            <br />
            Pick a tier. Move up any time.
          </p>
          <Link href="/technology#scale">
            Built for the busy hour <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <Section label="Solutions" id="solutions" className="at-wide-chapter">
        <h2>Six ready-made plays.</h2>
        <p className="at-lead">
          For the calls that run a business. Connect your tools and put Athena
          to work.
        </p>
        <SolutionCards />
        <Pill href="/solutions">Explore all solutions</Pill>
      </Section>

      <section
        id="our-work"
        className="at-work-section"
        aria-labelledby="at-work-heading"
      >
        <div className="at-section at-chapter at-work-intro">
          <Eyebrow>Our work</Eyebrow>
          <div className="at-chapter-body">
            <h2 id="at-work-heading">Built to do more than answer.</h2>
            <p className="at-lead">
              Three products, designed to work together. Explore what each one
              makes possible.
            </p>
            <p className="at-work-scroll">
              Scroll to explore <span aria-hidden="true">↓</span>
            </p>
          </div>
        </div>
        <AthenaWorks />
      </section>

      <section className="at-section at-agent-highlight">
        <div className="at-section-heading">
          <h2>From intent to a verified result.</h2>
          <Eyebrow>The persistent agent</Eyebrow>
        </div>
        <div className="at-agent-layout">
          <ProductArtwork agent />
          <div>
            <Eyebrow>Your infrastructure</Eyebrow>
            <h3 className="at-display">
              Athena
              <br />
              Agent.
            </h3>
            <p>
              Memory, specialist skills and connected tools. The work behind the
              words, on infrastructure that is yours.
            </p>
            <Pill href="/products/agent">Explore the agent</Pill>
          </div>
        </div>
      </section>

      <Section label="Pricing" id="pricing">
        <h2>
          One flat rate.
          <br />
          Every minute.
        </h2>
        <div className="at-home-rate">
          <span>₹4.5</span>
          <p>/ minute, all-in</p>
        </div>
        <p className="at-lead">
          Voice, model, tools and classification included. Minute twelve costs
          the same as minute one.
        </p>
        <Pill href="/pricing">See pricing & estimate your calls</Pill>
      </Section>

      <Section label="Next step" id="get-started">
        <h2>
          On your lines.
          <br />
          Working with your team.
        </h2>
        <NextSteps />
        <Pill href="/contact">Build with us</Pill>
      </Section>
      <CallToAction />
      <Section label="Questions" id="questions">
        <h2>Before the first call.</h2>
        <Questions items={faqs} />
      </Section>
    </>
  );
}
