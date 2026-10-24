"use client";

import { useState } from "react";
import FluidOrb from "@/components/ui/fluid-orb";
import { StepPlayer } from "@/components/ui/step-player";
import { TaskList } from "@/components/ui/task-list";
import { VoiceNote, VoiceNoteGroup } from "@/components/ui/voice-note";
import { type SiteStyle } from "@/lib/site-styles";
import { useSiteStyle } from "./style-provider";

const incoming = [10, 16, 9, 26, 41, 23, 55, 68, 38, 20, 48, 62, 33, 16, 29, 49, 70, 52, 26, 39, 61, 34, 17, 28, 45, 31, 16, 9, 18, 27, 14, 8].map((height) => height / 80);
const outgoing = [8, 13, 19, 10, 9, 12, 28, 43, 64, 41, 26, 48, 70, 55, 27, 19, 36, 53, 32, 61, 73, 44, 25, 13, 30, 50, 39, 21, 17, 9, 14, 8].map((height) => height / 80);

function illustrationColors(style: SiteStyle) {
  if (style === "studio") return { orb: "#e8653c", speechIn: "#bd7351", speechOut: "#8a8066", task: "#79629a" };
  if (style === "editorial") return { orb: "#b44930", speechIn: "#bd7351", speechOut: "#8a8066", task: "#79629a" };
  return { orb: "var(--spot)", speechIn: "var(--viz-fill-ink)", speechOut: "var(--viz-fill-2-ink)", task: "var(--viz-fill-ink)" };
}

export function VoiceOrb() {
  const { style } = useSiteStyle();
  return <FluidOrb size={104} color={illustrationColors(style).orb} aria-hidden="true" />;
}

export function SpeechPreview() {
  const { style } = useSiteStyle();
  const colors = illustrationColors(style);
  return <div className="speech-preview">
    <VoiceNoteGroup>
      <div className="speech-preview-lane"><span>Speech in</span><VoiceNote duration={18} waveform={incoming} size="md" accent={colors.speechIn} speeds={[1]} className="speech-note" aria-label="Incoming speech waveform preview" /></div>
      <div className="speech-preview-lane"><span>Speech out</span><VoiceNote duration={18} waveform={outgoing} size="md" accent={colors.speechOut} speeds={[1]} className="speech-note" aria-label="Outgoing speech waveform preview" /></div>
    </VoiceNoteGroup>
  </div>;
}

export function AgentChecklist() {
  const { style } = useSiteStyle();
  return <div className="agent-checklist">
    <TaskList size="sm" accent={illustrationColors(style).task} className="workflow-checklist" aria-label="Example agent workflow checklist" defaultTasks={[
      { id: "understand", label: "Understand the goal" },
      { id: "act", label: "Use approved tools" },
      { id: "verify", label: "Verify the outcome" },
    ]} />
  </div>;
}

const routingSteps = [
  { label: "Frontier models", duration: 4000 },
  { label: "Self-hosted models", duration: 4000 },
  { label: "Fallback models", duration: 4000 },
];

export function RoutingPreview() {
  const [selected, setSelected] = useState(0);
  return <div className="routing-preview">
    <div className="model-destinations">{[
      { symbol: "↗", title: "Frontier" },
      { symbol: "⌘", title: "Self-hosted" },
      { symbol: "↪", title: "Fallback" },
    ].map((destination, index) => <div key={destination.title} data-selected={selected === index}><span className="model-symbol">{destination.symbol}</span><strong>{destination.title}</strong></div>)}</div>
    <div className="routing-tour"><StepPlayer steps={routingSteps} value={selected} onValueChange={setSelected} size={44} seekable aria-label="Routing illustration" className="rare-step-player" /></div>
  </div>;
}
