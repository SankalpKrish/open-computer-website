"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  GitBranch,
  Headphones,
  Layers,
  LockKeyhole,
  Radio,
  Workflow,
} from "lucide-react";
import { faqs, products, services } from "@/lib/site-content";
import { TextLink } from "./components";
import { DreamDisclosure } from "./accordion";

const useCases = [
  {
    title: "Voice that keeps the conversation going",
    body: "Listen, speak, and handle interruptions in the same turn. Keep the call going while the agent looks something up.",
    image: "/images/features.jpg",
    caption: "Athena Voice",
    detail: "WebRTC · WebSocket · SIP",
    href: "/products/voice",
    icon: Headphones,
  },
  {
    title: "Operations on your own infrastructure",
    body: "Persistent agents for project records, spreadsheet ingestion, and recurring work. Tools and memory stay inside your boundary.",
    image: "/images/tree.jpg",
    caption: "Open Computer Agent",
    detail: "Private infrastructure · Persistent memory",
    href: "/products/agent",
    icon: Workflow,
  },
  {
    title: "One gateway for every model",
    body: "An OpenAI-compatible API with Fusion routing, failover, and usage visibility. Use a right-sized model for each step.",
    image: "/images/connection.jpg",
    caption: "Inferno Router",
    detail: "Routing · Failover · Observability",
    href: "/products/router",
    icon: GitBranch,
  },
  {
    title: "An engineering team, in your corner",
    body: "We configure the product, connect authorized systems, and stay with the workflow until the real path is verified.",
    image: "/images/bridge.jpg",
    caption: "Implementation services",
    detail: "Voice · Agents · Inference",
    href: "/services",
    icon: Layers,
  },
] as const;

export function UseCaseExplorer() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % useCases.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index - 1 + useCases.length) % useCases.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = useCases.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  const current = useCases[active];
  return (
    <div className="dm-explorer">
      <div
        className="dm-case-tabs"
        role="tablist"
        aria-label="Explore use cases"
        aria-orientation="vertical"
      >
        {useCases.map((item, i) => (
          <button
            ref={(node) => {
              buttons.current[i] = node;
            }}
            key={item.title}
            id={`dm-case-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls="dm-case-panel"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(event) => onKeyDown(event, i)}
          >
            <span className="dm-case-title">
              <item.icon size={20} strokeWidth={1.5} aria-hidden="true" />
              {item.title}
              <ChevronRight size={16} aria-hidden="true" />
            </span>
            <span
              className="dm-collapse"
              data-open={active === i}
              aria-hidden={active !== i}
            >
              <span className="dm-collapse-inner">
                <span className="dm-case-description">{item.body}</span>
              </span>
            </span>
          </button>
        ))}
      </div>
      <div
        className="dm-case-panel"
        id="dm-case-panel"
        role="tabpanel"
        aria-labelledby={`dm-case-${active}`}
        tabIndex={0}
      >
        <Image
          key={current.image}
          src={current.image}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 540px"
        />
        <div className="dm-case-panel-content">
          <span>{current.detail}</span>
          <h3>{current.caption}</h3>
          <TextLink href={current.href}>
            Explore {active === 3 ? "services" : "product"}
          </TextLink>
        </div>
      </div>
    </div>
  );
}

export function DreamFAQ() {
  return (
    <div className="dm-faq">
      {faqs
        .filter((_, i) => [0, 1, 6, 7, 8, 9].includes(i))
        .map((item) => (
          <DreamDisclosure key={item.q} title={item.q}>
            <p>{item.a}</p>
          </DreamDisclosure>
        ))}
    </div>
  );
}

const steps = [
  {
    title: "Connect one workflow",
    body: "Month 1: stand up one bounded workflow on private infrastructure. Connect the tools and systems you authorize.",
    image: "/images/bridge.jpg",
    icon: Radio,
    points: [
      "Private infrastructure",
      "Authorized integrations",
      "Direct line to our team",
    ],
  },
  {
    title: "Put it to work",
    body: "Month 2: run it on real work. Use tools, keep context, and verify that the real-world step happened.",
    image: "/images/tree.jpg",
    icon: Workflow,
    points: [
      "Persistent tools and memory",
      "Confirmation gates",
      "Provider receipts",
    ],
  },
  {
    title: "Keep what we build",
    body: "Month 3: judge two things — did it cut AI cost, and what did we build that you keep.",
    image: "/images/developers.jpg",
    icon: LockKeyhole,
    points: [
      "Review the real workflow",
      "See model usage and spend",
      "You keep what we build",
    ],
  },
] as const;

export function PilotSteps() {
  const [active, setActive] = useState(0);
  const current = steps[active];
  return (
    <div className="dm-pilot">
      <div className="dm-pilot-visual">
        <Image
          src={current.image}
          key={current.image}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 540px"
        />
        <div className="dm-pilot-window">
          <div className="dm-window-top">
            <span>
              <i />
              <i />
              <i />
            </span>
            90-day pilot
          </div>
          <current.icon size={28} strokeWidth={1.3} aria-hidden="true" />
          <h3>{current.title}</h3>
          <ul>
            {current.points.map((point) => (
              <li key={point}>
                <Check size={14} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <Link href="/contact">
            Start your pilot
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="dm-pilot-steps">
        {steps.map((step, i) => (
          <div
            className={`dm-pilot-step${active === i ? " is-active" : ""}`}
            key={step.title}
          >
            <button
              type="button"
              aria-expanded={active === i}
              aria-controls={`dm-pilot-description-${i}`}
              onClick={() => setActive(i)}
            >
              <span>0{i + 1}</span>
              <h3>{step.title}</h3>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <div
              id={`dm-pilot-description-${i}`}
              className="dm-collapse"
              data-open={active === i}
              aria-hidden={active !== i}
            >
              <div className="dm-collapse-inner">
                <p className="dm-pilot-description">{step.body}</p>
              </div>
            </div>
          </div>
        ))}
        <p className="dm-pilot-note">No setup fee. Pay for the AI you use.</p>
      </div>
    </div>
  );
}

export function DeploymentPartners() {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <div className="dm-deployments">
        {services.partners.slice(0, showAll ? undefined : 4).map((partner) => (
          <article key={partner.name}>
            <span>
              {partner.track} / {partner.region}
            </span>
            <h3>{partner.name}</h3>
            <p>{partner.detail}</p>
            <Link
              href={
                partner.track === "Voice" ? products[0].href : products[1].href
              }
            >
              Explore{" "}
              {partner.track === "Voice"
                ? "Athena Voice"
                : "Open Computer Agent"}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
      <button
        className="dm-button dm-button-secondary dm-show-all"
        type="button"
        aria-expanded={showAll}
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show fewer" : "Show all partners"}
        <ChevronRight size={15} aria-hidden="true" />
      </button>
    </>
  );
}
