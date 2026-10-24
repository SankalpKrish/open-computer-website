"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { StepPlayer } from "@/components/ui/step-player";

type ProcessStep = { title: string; subtitle: string; body: string };

export function ProcessPlayer({ steps, pilot = false }: { steps: ProcessStep[]; pilot?: boolean }) {
  const [selected, setSelected] = useState(0);
  const playerSteps = useMemo(() => steps.map((step) => ({ label: step.title, duration: 5000 })), [steps]);

  return <div className="process-player">
    <div className={pilot ? "pilot-months" : "method-steps"}>{steps.map((step, index) => <article key={step.title} data-active={selected === index}>
      {pilot ? <span className="eyebrow">{step.subtitle}</span> : <span className="process-index">0{index + 1}<ArrowUpRight size={18} aria-hidden="true" /></span>}
      <h3>{step.title}</h3><p>{step.body}</p>
    </article>)}</div>
    <div className="process-player-footer"><span className="sr-only" aria-live="polite">{steps[selected].title}</span><StepPlayer steps={playerSteps} value={selected} onValueChange={setSelected} size={44} seekable className="rare-step-player" aria-label={pilot ? "Explore the pilot stages" : "Explore the agent workflow"} /></div>
  </div>;
}
