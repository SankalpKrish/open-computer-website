import { AudioLines, Command, GitBranch, Globe2, LockKeyhole, Mic, Sparkles } from "lucide-react";
import type { Product } from "@/lib/site-content";
import { AgentChecklist, RoutingPreview, SpeechPreview, VoiceOrb } from "./product-interactions";

type Slug = Product["slug"];

// This module is server-compatible. Do not move icon lookup into a client module:
// a server component cannot index an exported client-side array.
const icons = { voice: AudioLines, agent: Command, router: GitBranch };

export function ProductIcon({ slug, size = 22 }: { slug: Slug; size?: number }) {
  const Icon = icons[slug];
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}

export function ProductGlyph({ slug }: { slug: Slug }) {
  return <svg viewBox="0 0 200 160" fill="none" className={`product-glyph glyph-${slug}`} aria-hidden="true">
    {slug === "voice" && [24, 38, 64, 94, 126, 82, 48, 102, 144, 102, 48, 82, 126, 94, 64, 38, 24].map((height, index) =>
      <rect key={index} x={7 + index * 11} y={(160 - height) / 2} width="5" height={height} rx="2.5" fill="currentColor" />
    )}
    {slug === "agent" && <g stroke="currentColor" strokeWidth="13">
      <path d="M100 80V40a26 26 0 1 0-26 26h52a26 26 0 1 0-26-26v80a26 26 0 1 0 26-26H74a26 26 0 1 0 26 26V80Z" />
    </g>}
    {slug === "router" && <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 80h44c25 0 22-45 49-45h40M74 80h89M74 80c25 0 22 45 49 45h40" />
      <circle cx="24" cy="80" r="11" fill="currentColor" /><circle cx="171" cy="35" r="10" /><circle cx="171" cy="80" r="10" /><circle cx="171" cy="125" r="10" />
    </g>}
  </svg>;
}

function VoiceVisual() {
  return <div className="voice-overview">
    <div className="voice-orbit"><div className="orbit-center"><VoiceOrb /></div><span className="orbit-label label-in"><Mic size={13} aria-hidden="true" /> Listening</span><span className="orbit-label label-out"><AudioLines size={13} aria-hidden="true" /> Speaking</span></div>
    <SpeechPreview />
  </div>;
}

function AgentVisual() {
  return <div className="agent-overview">
    <div className="agent-boundary"><span><LockKeyhole size={13} aria-hidden="true" /> Your private environment</span></div>
    <div className="agent-goal"><div className="goal-symbol"><ProductIcon slug="agent" size={26} /></div><div><strong>Understand. Act. Verify.</strong></div><Sparkles size={18} aria-hidden="true" /></div>
    <AgentChecklist />
  </div>;
}

function RouterVisual() {
  return <div className="router-overview">
    <div className="router-request"><Globe2 size={17} aria-hidden="true" /><span>Your application</span><code>One compatible API</code></div>
    <div className="router-connection" aria-hidden="true"><span /><span /><span /></div>
    <div className="router-core"><ProductIcon slug="router" size={27} /><div><strong>Inferno Router</strong></div></div>
    <div className="route-branches" aria-hidden="true"><i /><i /><i /></div>
    <RoutingPreview />
  </div>;
}

export function ProductVisual({ slug }: { slug: Slug }) {
  return <div className={`product-visual visual-${slug}`} role="group" aria-label={
    slug === "voice" ? "Athena Voice: speech in and speech out together, with interruption handling and tool delegation." :
    slug === "agent" ? "Open Computer Agent: understand a goal, use approved tools, and verify the outcome inside your private environment." :
    "Inferno Router: one application endpoint routes to frontier, self-hosted, or fallback models with caching and usage visibility."
  }><div className="visual-topline"><span><ProductIcon slug={slug} size={15} />{slug === "voice" ? "Athena Voice" : slug === "agent" ? "Open Computer Agent" : "Inferno Router"}</span></div>{slug === "voice" ? <VoiceVisual /> : slug === "agent" ? <AgentVisual /> : <RouterVisual />}</div>;
}
