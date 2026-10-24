"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { athena, languages, solutions } from "@/lib/athena-content";
import { Curtain, Eyebrow } from "./components";

const conversation = [
  {
    caller: "Hi, can I book an appointment for tomorrow?",
    agent: "Of course. What time works best for you?",
    action: "Understanding the request",
    tool: "Appointment enquiry",
  },
  {
    caller: "Around ten. Actually, make that eleven.",
    agent: "Eleven it is. Let me check the calendar for you.",
    action: "Checking connected availability",
    tool: "calendar.check_availability",
  },
  {
    caller: "Yes, eleven works. Thank you.",
    agent: "You’re booked for tomorrow at eleven. We’ll see you then.",
    action: "Booking confirmed in the calendar",
    tool: "calendar.create_appointment",
  },
  {
    caller: "That’s everything I needed.",
    agent: "You’re all set. Have a lovely day.",
    action: "Transcript and outcome ready",
    tool: "Call complete · booked",
  },
] as const;

export function VoicePreview() {
  const [step, setStep] = useState(0),
    [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(
      () => setStep((current) => (current + 1) % conversation.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, [playing]);
  const current = conversation[step];
  return (
    <Curtain className="at-voice-preview">
      <div
        className={`at-conversation${playing ? " at-conversation-playing" : ""}`}
      >
        <div className="at-conversation-top">
          <span>Athena Voice</span>
          <span className="at-mono">Illustrative preview</span>
        </div>
        <Eyebrow>A continuous exchange</Eyebrow>
        <h3>
          Speak naturally.
          <br />
          Stay in sync.
        </h3>
        <div className="at-waveform" aria-hidden="true">
          {Array.from({ length: 55 }, (_, i) => (
            <i
              key={i}
              style={{
                height: `${(8 + Math.pow(Math.sin(i * 0.59), 2) * Math.sin((i / 55) * Math.PI) * 72).toFixed(2)}%`,
                animationDelay: `${(-i * 0.09).toFixed(2)}s`,
              }}
            />
          ))}
        </div>
        <div className="at-wave-labels">
          <span>Listening</span>
          <span>↔</span>
          <span>Speaking</span>
        </div>
        <div className="at-transcript" aria-live="polite" aria-atomic="true">
          <div>
            <span className="at-mono">01 / Caller</span>
            <p>“{current.caller}”</p>
          </div>
          <div>
            <span className="at-mono">02 / Athena</span>
            <p>“{current.agent}”</p>
          </div>
        </div>
        <div className="at-tool-result">
          <span aria-hidden="true">↳</span>
          <div>
            <span className="at-mono">{current.tool}</span>
            <p>{current.action}</p>
          </div>
          <span aria-hidden="true">{step > 1 ? "✓" : "↗"}</span>
        </div>
        <div className="at-preview-controls">
          <div
            className="at-preview-dots"
            aria-label={`Conversation step ${step + 1} of ${conversation.length}`}
          >
            {conversation.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show conversation step ${i + 1}`}
                aria-pressed={step === i}
                onClick={() => {
                  setPlaying(false);
                  setStep(i);
                }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-pressed={playing}
          >
            {playing ? "Pause preview Ⅱ" : "Play preview ▷"}
          </button>
        </div>
        <p className="at-preview-note">
          Illustrative conversation. No microphone, live call or booking is
          connected.
        </p>
      </div>
    </Curtain>
  );
}

export function SolutionCards({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState("All");
  const shown = solutions
    .filter((item) => filter === "All" || item.status === filter)
    .slice(0, limit);
  return (
    <div className="at-solutions-browser">
      <div className="at-filter-row">
        <div className="at-segmented" aria-label="Filter solutions">
          {["All", "Live", "Setup"].map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item === "Setup"
                ? "After tool hookup"
                : item === "Live"
                  ? "Live today"
                  : "All solutions"}
            </button>
          ))}
        </div>
        <p role="status">
          {shown.length} {shown.length === 1 ? "solution" : "solutions"}
        </p>
      </div>
      <div className="at-solution-grid">
        {shown.map((item) => (
          <Link
            key={item.id}
            href={`/solutions#${item.id}`}
            className="at-solution-card"
          >
            <div>
              <span className="at-mono">{item.category}</span>
              <span
                className={`at-status ${item.status === "Live" ? "at-status-live" : ""}`}
              >
                {item.status === "Live" ? "Live" : "Tool hookup"}
              </span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <span className="at-card-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

const rupees = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 });
export function PriceCalculator() {
  const [mode, setMode] = useState<"all-in" | "voice-only">("all-in");
  const [minutes, setMinutes] = useState(3),
    [calls, setCalls] = useState(100);
  const rate = mode === "all-in" ? 4.5 : 3.5;
  return (
    <div className="at-calculator">
      <Eyebrow>Plan your calls</Eyebrow>
      <h3>A clear cost, before the call.</h3>
      <div className="at-segmented" aria-label="Estimate rate">
        <button
          type="button"
          aria-pressed={mode === "all-in"}
          onClick={() => setMode("all-in")}
        >
          All-in · ₹4.5
        </button>
        <button
          type="button"
          aria-pressed={mode === "voice-only"}
          onClick={() => setMode("voice-only")}
        >
          Voice-only · ₹3.5
        </button>
      </div>
      <div className="at-calculator-inputs">
        <label>
          Average call length
          <span>
            <input
              aria-label="Average call length in minutes"
              type="number"
              min="1"
              max="120"
              step="1"
              value={minutes}
              onChange={(e) =>
                setMinutes(
                  Math.max(1, Math.min(120, Number(e.target.value) || 1)),
                )
              }
            />
            minutes
          </span>
        </label>
        <label>
          Number of calls
          <span>
            <input
              aria-label="Number of calls"
              type="number"
              min="1"
              max="1000000"
              step="1"
              value={calls}
              onChange={(e) =>
                setCalls(
                  Math.max(
                    1,
                    Math.min(1000000, Math.round(Number(e.target.value) || 1)),
                  ),
                )
              }
            />
            calls
          </span>
        </label>
      </div>
      <div className="at-estimate" aria-live="polite" aria-atomic="true">
        <span>Estimated total</span>
        <output>₹{rupees.format(minutes * calls * rate)}</output>
        <p>
          {rupees.format(calls)} calls × {minutes} min × ₹{rate}/min
        </p>
      </div>
      <p className="at-small">
        Estimate based on your selected call length and volume. Actual cost
        follows minutes used.
      </p>
    </div>
  );
}

export function LanguageList() {
  const [query, setQuery] = useState("");
  const filtered = languages.filter((item) =>
    item.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <div className="at-languages">
      <label className="at-search-label" htmlFor="language-search">
        Find a language<span aria-hidden="true">⌕</span>
      </label>
      <input
        id="language-search"
        type="search"
        placeholder="Search languages…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
      <p className="at-small" role="status">
        {query
          ? `${filtered.length} ${filtered.length === 1 ? "match" : "matches"}`
          : "62 languages · set per agent or per call"}
      </p>
      <ul>
        {filtered.map((item) => (
          <li
            key={item}
            className={
              languages.indexOf(item) > 0 && languages.indexOf(item) < 11
                ? "at-indian-language"
                : ""
            }
          >
            {item}
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <p>No languages match “{query}”. Try another search.</p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [interest, setInterest] = useState("Athena Voice");
  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get(
      "interest",
    );
    if (
      selected &&
      [
        "Athena Voice",
        "Athena Agent",
        "Inferno Router",
        "Verification",
        "Outbound campaigns",
        "Implementation",
      ].includes(selected)
    )
      setInterest(selected);
  }, []);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Athena — ${form.get("interest")} enquiry`;
    const body = `Name: ${String(form.get("name")).trim()}\nEmail: ${String(form.get("email")).trim()}\nInterest: ${form.get("interest")}\n\nWorkflow:\n${String(form.get("workflow")).trim()}`;
    window.location.href = `mailto:${athena.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      `Your email draft is ready to open. If your email app didn’t open, email ${athena.email} directly.`,
    );
  }
  return (
    <form className="at-contact-form" onSubmit={submit}>
      <div className="at-form-pair">
        <label>
          Your name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={160}
            placeholder="Alex Morgan"
          />
        </label>
        <label>
          Work email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="alex@company.com"
          />
        </label>
      </div>
      <label>
        I’m interested in
        <select
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          {[
            "Athena Voice",
            "Athena Agent",
            "Inferno Router",
            "Verification",
            "Outbound campaigns",
            "Implementation",
          ].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        Your workflow
        <textarea
          name="workflow"
          required
          maxLength={6000}
          rows={5}
          placeholder="What should happen on the call? Which tools or systems should connect?"
        />
      </label>
      <p id="at-contact-note" className="at-small">
        This form opens a draft in your email application. It does not send or
        store your message. Review the draft and send it from your email app.
      </p>
      <button
        type="submit"
        className="at-pill"
        aria-describedby="at-contact-note"
      >
        <span>Open email draft</span>
        <span aria-hidden="true">↗</span>
      </button>
      <p className="at-form-status" role="status">
        {status}
      </p>
    </form>
  );
}
