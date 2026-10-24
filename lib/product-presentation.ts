import type { Product } from "./site-content";

// Serializable presentation copy shared by server pages and client explorers.
export const productPresentation = {
  voice: {
    shortName: "Voice",
    headline: "A conversation.\nNot a waiting game.",
    summary: "Realtime speech that listens, speaks, and keeps the conversation going while work gets done.",
    sectionTitle: "Built for the whole conversation.",
    tags: ["Full-duplex", "WebRTC · WebSocket · SIP", "Tool delegation"],
  },
  agent: {
    shortName: "Agent",
    headline: "From a goal\nto work done.",
    summary: "A persistent agent with memory, tools, and a computer of its own. Running on infrastructure that's yours.",
    sectionTitle: "More than an answer. A working system.",
    tags: ["Private infrastructure", "Persistent memory", "Verified actions"],
  },
  router: {
    shortName: "Router",
    headline: "The right model.\nFor every step.",
    summary: "One inference gateway for frontier and self-hosted models. Keep routing, resilience, and spend in your hands.",
    sectionTitle: "One endpoint. A lot less friction.",
    tags: ["OpenAI-compatible", "Fusion routing", "Automatic failover"],
  },
} satisfies Record<Product["slug"], {
  shortName: string;
  headline: string;
  summary: string;
  sectionTitle: string;
  tags: readonly string[];
}>;
