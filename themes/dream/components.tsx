import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { home } from "@/lib/site-content";

export function DreamHeading({
  label,
  title,
  body,
}: {
  label?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="dm-heading">
      {label && <span className="dm-label">{label}</span>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function DreamLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`dm-button${secondary ? " dm-button-secondary" : ""}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}

export function DreamCTA() {
  return (
    <section className="dm-cta dm-container">
      <div className="dm-cta-image" aria-hidden="true" />
      <div className="dm-cta-content">
        <span className="dm-label">
          Let’s build something useful
        </span>
        <h2>{home.ctaTitle}</h2>
        <p>
          A 90-day pilot. Your infrastructure.
          <br />
          One workflow to begin.
        </p>
        <DreamLink href="/contact">Start a conversation</DreamLink>
      </div>
    </section>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="dm-text-link">
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
