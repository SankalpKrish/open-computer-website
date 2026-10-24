import Link from "next/link";
import type { ReactNode } from "react";
import { athena, proof } from "@/lib/athena-content";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`at-eyebrow ${className}`}>{children}</p>;
}

export function Pill({
  children,
  href,
  secondary = false,
}: {
  children: ReactNode;
  href: string;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`at-pill${secondary ? " at-pill-secondary" : ""}`}
      href={href}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function Curtain({
  children,
  className = "",
  silver = false,
}: {
  children?: ReactNode;
  className?: string;
  silver?: boolean;
}) {
  return (
    <div
      className={`at-curtain ${className}`}
      data-athena-light={silver ? "silver" : "gold"}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  label,
  id,
  className = "",
}: {
  children: ReactNode;
  label: string;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`at-section at-chapter ${className}`}>
      <Eyebrow>{label}</Eyebrow>
      <div className="at-chapter-body">{children}</div>
    </section>
  );
}

export function PageHero({
  label,
  title,
  display,
  description,
  cta = "Talk to our team",
  href = "/contact",
  silver = false,
  links,
}: {
  label: string;
  title: string;
  display: string;
  description: string;
  cta?: string;
  href?: string;
  silver?: boolean;
  links?: { name: string; href: string }[];
}) {
  return (
    <section className="at-page-hero">
      <Curtain silver={silver} className="at-page-hero-light" />
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <div className="at-page-hero-lower">
        <div>
          <Eyebrow>
            {label === "Athena Voice"
              ? "Full-duplex speech"
              : label === "Pricing"
                ? "One flat rate"
                : "Athena by OpenComputer"}
          </Eyebrow>
          <p className="at-display">{display}</p>
        </div>
        <div className="at-page-summary">
          <p>{description}</p>
          <Pill href={href}>{cta}</Pill>
        </div>
      </div>
      {links && (
        <nav className="at-page-jumps" aria-label="On this page">
          {links.map((link, i) => (
            <Link key={link.href} href={link.href}>
              <span>0{i + 1}</span>
              {link.name}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      )}
    </section>
  );
}

export function Features({
  items,
  columns = 2,
  numbered = false,
}: {
  items: readonly { title: string; body: string }[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
}) {
  return (
    <div className={`at-features at-columns-${columns}`}>
      {items.map((item, i) => (
        <article className="at-feature" key={item.title}>
          {numbered && (
            <span className="at-index">{String(i + 1).padStart(2, "0")}</span>
          )}
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function Proof({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`at-proof${compact ? " at-proof-compact" : ""}`}>
      {proof.map((item) => (
        <div key={item.label}>
          <p className="at-proof-value">{item.value}</p>
          <h3>{item.label}</h3>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function ProductTiles() {
  return (
    <div className="at-product-tiles">
      <Link
        href="/products/voice"
        className="at-product-tile"
        aria-label="Explore Athena Voice"
      >
        <Curtain />
        <div>
          <Eyebrow>The live conversation</Eyebrow>
          <h3>Voice</h3>
          <p>
            Hear the person. Respond naturally.
            <br />
            Carry the next step through.
          </p>
          <span className="at-mono">Audio in ↔ audio out</span>
          <span className="at-tile-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>
      <Link
        href="/products/agent"
        className="at-product-tile at-silver"
        aria-label="Explore Athena Agent"
      >
        <Curtain silver />
        <div>
          <Eyebrow>The connected work</Eyebrow>
          <h3>Agent</h3>
          <p>
            Use the connected tools. Keep the
            <br />
            task context. Check the result.
          </p>
          <span className="at-mono">Tools · memory · workflow</span>
          <span className="at-tile-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>
    </div>
  );
}

export function ProductArtwork({ agent = false }: { agent?: boolean }) {
  return (
    <Curtain className="at-product-art" silver={agent}>
      {/* The reference's vector illustration remains sharp at every breakpoint. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/athena/art/${agent ? "agent" : "voice"}.svg`}
        alt={
          agent
            ? "Athena Agent: connected tools, memory and a checked result"
            : "Illustrative Athena Voice conversation and connected next step"
        }
        width={1440}
        height={900}
        loading="lazy"
      />
    </Curtain>
  );
}

export function NextSteps() {
  return (
    <ol className="at-steps">
      <li>
        <span>01</span>
        <h3>Pick the use case.</h3>
        <p>Send us your call script and the workflow you want to start with.</p>
      </li>
      <li>
        <span>02</span>
        <h3>Connect your tools.</h3>
        <p>We build the agent on your tools and your phone numbers.</p>
      </li>
      <li>
        <span>03</span>
        <h3>Hear it. Then scale.</h3>
        <p>Hear Athena on real calls, then scale up when you’re ready.</p>
      </li>
    </ol>
  );
}

export function CallToAction({
  title = "Put Athena on your lines.",
  description = "One use case. Your tools and numbers. A voice agent that finishes the job.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="at-cta at-section">
      <Curtain />
      <div>
        <Eyebrow>Your next conversation starts here</Eyebrow>
        <h2>{title}</h2>
        <p>{description}</p>
        <Pill href="/contact">Talk to our team</Pill>
        <a className="at-email-link" href={`mailto:${athena.email}`}>
          {athena.email}
        </a>
      </div>
    </section>
  );
}

export function Questions({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  return (
    <div className="at-faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <span aria-hidden="true">+</span>
          </summary>
          <div>
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
