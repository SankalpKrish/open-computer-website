import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  AudioLines,
  Fingerprint,
  GitBranch,
  Layers,
  LockKeyhole,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import { services } from "@/lib/site-content";
import { DreamCTA, DreamHeading, DreamLink, TextLink } from "./components";
import { DreamFAQ, PilotSteps, UseCaseExplorer } from "./interactions";
import { DreamWorks } from "./works";

const benefits = [
  {
    icon: LockKeyhole,
    title: "Your infrastructure",
    body: "Run locally, on a private server, in a VPC, or on-prem. Files, tools, and memory stay inside your boundary.",
  },
  {
    icon: AudioLines,
    title: "A conversation that keeps up",
    body: "Full-duplex speech-to-speech. Listen and speak in the same turn, with natural interruption handling.",
  },
  {
    icon: GitBranch,
    title: "The right model for the job",
    body: "Route routine work to self-hosted models. Reach frontier models when the step needs them.",
  },
  {
    icon: Fingerprint,
    title: "You set the boundaries",
    body: "Connect the tools you authorize. Keep human confirmation for consequential actions.",
  },
  {
    icon: Layers,
    title: "Context that stays with you",
    body: "Project memory, files, and reusable skills persist across sessions. Recurring work does not start from zero.",
  },
  {
    icon: ScanLine,
    title: "Work you can verify",
    body: "Check the request, action, provider receipt, and visible result. A generated sentence is not a receipt.",
  },
] as const;

export function DreamHome() {
  return (
    <>
      <section className="dm-hero" aria-labelledby="dm-home-title">
        <div className="dm-hero-art">
          <Image
            src="/images/hero-poster.jpg"
            alt="An illuminated tree growing across a dark landscape"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="dm-hero-copy dm-container">
          <span className="dm-hero-eyebrow">
            AI-native product studio & engineering lab
          </span>
          <h1 id="dm-home-title">
            Products you can run.<span>Services that put them to work.</span>
          </h1>
          <p>
            Voice, agents, and inference.
            <br className="dm-desktop-break" /> Your own AI. Your own
            infrastructure. Built with you.
          </p>
          <div className="dm-hero-actions">
            <DreamLink href="/contact">Start a conversation</DreamLink>
            <Link href="#our-work" className="dm-hero-secondary">
              Explore our products
              <ArrowDown size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="dm-hero-bottom dm-container">
          <p>Three products. One connected stack.</p>
          <div className="dm-product-marks">
            <Link href="/products/voice">
              <AudioLines aria-hidden="true" />
              Athena Voice
            </Link>
            <Link href="/products/agent">
              <Layers aria-hidden="true" />
              Open Computer Agent
            </Link>
            <Link href="/products/router">
              <GitBranch aria-hidden="true" />
              Inferno Router
            </Link>
          </div>
        </div>
      </section>

      <section className="dm-section dm-container" id="products">
        <DreamHeading
          label="Introducing Open Computer"
          title="Speak, reason, act. Keep it yours."
          body="We build the products and work alongside your team to put them into production."
        />
        <div className="dm-feature-grid">
          <article className="dm-feature dm-feature-large">
            <div className="dm-feature-copy">
              <span className="dm-feature-kicker">
                <AudioLines size={16} aria-hidden="true" />
                Athena Voice
              </span>
              <h3>
                A conversation
                <br />
                that keeps up.
              </h3>
              <p>
                Listen and speak in the same turn. Handle interruptions. Keep
                talking while the agent gets things done.
              </p>
              <TextLink href="/products/voice">Meet Athena Voice</TextLink>
            </div>
            <div className="dm-feature-art">
              <Image
                src="/images/features.jpg"
                alt="A glowing path across a floating landscape"
                fill
                sizes="(max-width: 700px) 100vw, 620px"
              />
              <span className="dm-art-tag">
                <AudioLines size={15} aria-hidden="true" />
                Full-duplex speech-to-speech
              </span>
            </div>
          </article>
          <article className="dm-feature dm-feature-agent">
            <div className="dm-feature-copy">
              <span className="dm-feature-kicker">
                <Layers size={16} aria-hidden="true" />
                Open Computer Agent
              </span>
              <h3>
                Real work.
                <br />
                On your terms.
              </h3>
              <p>
                A persistent agent with tools, memory, and its own computer.
                Inside your boundary.
              </p>
              <TextLink href="/products/agent">Meet your agent</TextLink>
            </div>
            <Image
              src="/images/tree.jpg"
              alt="A tree with connected, luminous branches"
              fill
              sizes="(max-width: 700px) 100vw, 430px"
            />
          </article>
          <article className="dm-feature dm-feature-router">
            <div className="dm-feature-copy">
              <span className="dm-feature-kicker">
                <GitBranch size={16} aria-hidden="true" />
                Inferno Router
              </span>
              <h3>
                Every model.
                <br />
                One way in.
              </h3>
              <p>
                One OpenAI-compatible API. Routing, failover, and cost-aware
                inference in one place.
              </p>
              <TextLink href="/products/router">Explore the router</TextLink>
            </div>
            <div className="dm-router-art">
              <Image
                src="/images/connection.jpg"
                alt="Two paths connected by a glowing signal"
                fill
                sizes="(max-width: 700px) 100vw, 600px"
              />
            </div>
          </article>
          <article className="dm-feature dm-feature-service">
            <ShieldCheck size={26} strokeWidth={1.3} aria-hidden="true" />
            <h3>
              Your team.
              <br />
              From day one.
            </h3>
            <p>
              We connect the stack to the work you actually do, and stay until
              the live path is verified.
            </p>
            <TextLink href="/services">How we can help</TextLink>
          </article>
        </div>
      </section>

      <section className="dm-section dm-container" id="use-cases">
        <DreamHeading
          label="Use cases"
          title="One stack. A world of useful work."
        />
        <UseCaseExplorer />
      </section>

      <section id="our-work" className="dm-work-section">
        <div className="dm-container dm-work-intro">
          <DreamHeading
            label="Our work"
            title="Built to do more than answer."
            body="Three products, designed to work together. Explore what each one makes possible."
          />
          <span className="dm-work-scroll">
            Scroll to explore
            <ArrowDown size={14} aria-hidden="true" />
          </span>
        </div>
        <DreamWorks />
      </section>

      <section className="dm-section dm-container" id="benefits">
        <DreamHeading
          label="Why Open Computer"
          title="A capable stack. A clear boundary."
        />
        <div className="dm-benefits">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <span className="dm-icon-box">
                <benefit.icon size={22} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dm-section dm-container" id="how-it-works">
        <DreamHeading
          label="How we work"
          title="From one workflow to work that runs."
          body="A 90-day pilot on your infrastructure. No setup fee. Pay for the AI you use."
        />
        <PilotSteps />
      </section>

      <section className="dm-section dm-container dm-partner-section">
        <DreamHeading
          label="In the real world"
          title="An engineering partner, close to the work."
        />
        <div className="dm-partner-names">
          {services.partners.map((partner) => (
            <Link
              href={`/services#${partner.track.toLowerCase()}`}
              key={partner.name}
            >
              {partner.name}
              <span>{partner.region}</span>
            </Link>
          ))}
        </div>
        <div className="dm-partner-note">
          <p>
            OpenERP for Puravankara. Voice with Lifie AI and BESCOM. Agent work
            across banking, operations, and production systems.
          </p>
          <TextLink href="/services">Explore our services</TextLink>
        </div>
      </section>

      <section
        className="dm-section dm-container dm-faq-section"
        id="questions"
      >
        <DreamHeading label="FAQs" title="Your questions, answered clearly." />
        <DreamFAQ />
        <p className="dm-more-questions">
          Have a workflow in mind?{" "}
          <Link href="/contact">
            Let’s talk
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </p>
      </section>
      <DreamCTA />
    </>
  );
}
