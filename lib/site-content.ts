export const brand = {
  name: "Open Computer",
  shortName: "Open Computer",
  tagline: "AI-native product studio & engineering lab",
  description:
    "Open Computer builds production AI products and deploys them as services. We ship Athena Voice, Open Computer Agent, and Inferno Router — and we implement them for teams that need an in-house engineering partner, not a slide deck.",
  copyright: "© 2026 Open Computer",
} as const;

export const nav = {
  productsLabel: "Products",
  servicesLabel: "Services",
  contactLabel: "Contact",
  productsHref: "/products",
  servicesHref: "/services",
  contactHref: "/contact",
} as const;

export const products = [
  {
    slug: "voice",
    name: "Athena Voice",
    code: "A",
    kicker: "Realtime speech",
    oneLiner:
      "A full-duplex speech-to-speech model that listens and speaks in the same turn, handles interruptions, delegates tools, and stays in a live conversation.",
    heroSubhead:
      "Athena Voice is the realtime voice layer for products and operations. One model hears, reasons over incoming and outgoing audio together, and speaks back — without a chained transcription-then-synthesis pipeline. It can keep talking while a backend agent looks something up, then explain the result when it arrives.",
    href: "/products/voice",
    cta: "Explore Athena Voice",
    visual: "/images/features.jpg",
    features: [
      {
        title: "Talk over it. It keeps up.",
        body: "Full-duplex speech-to-speech: it listens while speaking. Interrupt, change direction, or cut in — the same model handles the turn instead of waiting for a rigid end-of-sentence.",
      },
      {
        title: "Keeps talking while work runs",
        body: "Deeper lookups, tools, and long-running work can be delegated to Open Computer Agent. The voice layer stays on the call and speaks the result when it arrives.",
      },
      {
        title: "Browser, server, or phone",
        body: "WebRTC for apps, WebSocket for servers, SIP when a calling stack is connected. Inbound, transfer, hang-up, and DTMF keypad events can sit in the same session. Outbound calling is available through Lifie AI.",
      },
      {
        title: "A spoken claim is not a receipt",
        body: "Bookings, sends, and record writes still need a provider receipt. Athena Voice can converse; it does not treat a generated sentence as proof that an external action happened.",
      },
      {
        title: "Tools on the live call",
        body: "When connected and authorized, it can call approved functions and hand work to connected systems without dropping the conversation.",
      },
      {
        title: "Speech in, speech out",
        body: "Native speech-to-speech — not a chained transcribe-then-generate-then-speak pipeline. That is what makes turn-taking feel immediate.",
      },
    ],
    capabilities: [
      "Full-duplex listen-and-speak",
      "Interruption handling and barge-in",
      "Delegation to Open Computer Agent while the call continues",
      "WebRTC for browsers and apps",
      "SIP / telephony when connected",
      "DTMF keypad events on phone calls",
    ],
    useCases: [
      {
        title: "Inbound service",
        body: "Answer, collect what is required, keep talking while a lookup runs, and transfer to a person when the call needs a human.",
      },
      {
        title: "Outbound with Lifie AI",
        body: "When a calling stack is authorized — including through Lifie AI — converse, qualify, and book, then record a provider receipt instead of claiming the result from a spoken sentence.",
      },
      {
        title: "Voice on Open Computer Agent",
        body: "The same memory, tools, and follow-up work, spoken on a live call or session.",
      },
    ],
    detailSections: [
      {
        title: "How a live turn works",
        body: "Audio streams in. Athena Voice reasons over incoming and outgoing audio together, decides whether to speak or keep listening, and can delegate to Open Computer Agent without dropping the call.",
        items: [
          "Listen and speak in the same turn",
          "Interrupt and truncate unheard audio",
          "Keep the conversation going while delegated work runs",
        ],
      },
    ],
    claimNote:
      "Athena Voice describes platform capability taken from production realtime speech-to-speech systems. Telephony, CRM writes, bookings, and other external actions are available in supported deployments when connected and authorized. This site does not claim Athena Voice is another vendor’s consumer chat product.",
  },
  {
    slug: "agent",
    name: "Open Computer Agent",
    code: "B",
    kicker: "Persistent agent",
    oneLiner:
      "Private AI infrastructure: a persistent agent that understands goals, remembers context, uses tools, and carries work through on an environment that is yours.",
    heroSubhead:
      "Open Computer Agent is the operating layer for real work. Agents run with their own computers — locally, on a private server, or in a dedicated environment — so conversation, memory, tools, files, automations, and connected channels stay inside your boundary. Your own AI. Your own data. Your own infrastructure.",
    href: "/products/agent",
    cta: "Explore Open Computer Agent",
    visual: "/images/tree.jpg",
    features: [
      {
        title: "Finishes the job on your infrastructure",
        body: "Open Computer Agent runs on a private environment — local, private server, VPC, or on-prem. Files, tools, memory, and channels stay in your boundary. The models come to your data.",
      },
      {
        title: "Does the work. Then proves it.",
        body: "It identifies the real outcome, uses tools, and verifies the path. A generated sentence is not treated as proof of an external action.",
      },
      {
        title: "Right-sized models, not one frontier bill",
        body: "Inferno Router sits underneath so each step uses a right-sized model. Routine work stays cheap; frontier models are reserved for the hard parts.",
      },
      {
        title: "You stay in control",
        body: "Confirmation gates, least-privilege tools, and an evidence trail. Consequential writes, messages, and payments can require a human before they run.",
      },
      {
        title: "One agent, every surface",
        body: "Desktop, terminal, web, WhatsApp, Athena Voice, or API. The interface changes; memory, tools, and the job stay connected.",
      },
      {
        title: "Remembers the project",
        body: "Context, files, and reusable skills persist across sessions. Recurring work does not start from zero each morning.",
      },
    ],
    capabilities: [
      "Private local, server, VPC, or on-prem deploy",
      "Files, tools, browser, APIs, and channels",
      "Confirmation gates for consequential actions",
      "Right-sized model routing through Inferno Router",
      "Evidence trail: request, action, provider receipt, visible result",
    ],
    useCases: [
      {
        title: "OpenERP for Puravankara",
        body: "We built OpenERP for Puravankara in Bengaluru and run it with Open Computer Agent: project and operations records, spreadsheet ingestion, a working WhatsApp channel, and backup and restore.",
      },
      {
        title: "Boom Booth Studio",
        body: "Runs operations on Open Computer Agent instead of scaling headcount — multiple production systems, end-to-end, on private infrastructure.",
      },
      {
        title: "ISKCON Bengaluru",
        body: "Open Computer Agent work with ISKCON Bengaluru on authorized operations workflows.",
      },
    ],
    detailSections: [
      {
        title: "Real-estate ERP we built",
        body: "OpenERP is the real-estate ERP we built and run for Puravankara in Bengaluru. It is the operations system for projects and related records, not a chatbot bolted onto a spreadsheet.",
        items: [
          "Spreadsheet and file ingestion, with review before writes",
          "WhatsApp is a working operations channel",
          "Backup and restore in place",
        ],
      },
      {
        title: "90-day pilot",
        body: "No setup fee. You pay for the AI you use. Month 1: stand up one workflow on private infrastructure. Month 2: run it on real work. Month 3: judge two things — did it cut AI cost, and what did we build that you keep.",
        items: [
          "One bounded workflow to start",
          "Direct line to the team",
          "You keep what we build",
        ],
      },
    ],
    claimNote:
      "Open Computer Agent can execute and verify a workflow through a configured, authorized integration. It does not automatically gain access to every application, channel, or calendar. Cost comparisons are illustrative of right-sized routing versus all-frontier spend; they are not a guaranteed invoice.",
  },
  {
    slug: "router",
    name: "Inferno Router",
    code: "C",
    kicker: "Inference gateway",
    oneLiner:
      "One OpenAI-compatible API for every frontier model — routing, failover, observability, and cost-aware inference so you never overpay for a simple task.",
    heroSubhead:
      "Inferno Router is the inference gateway in front of your models. Call compatible Claude, GPT, Gemini, Grok, and open models through one endpoint. The router handles provider choice, failover, usage logs, and Fusion routing so applications do not hard-wire a single vendor — and so routine work does not hit frontier prices.",
    href: "/products/router",
    cta: "Explore Inferno Router",
    visual: "/images/connection.jpg",
    features: [
      {
        title: "One API. Every model.",
        body: "Call Claude, GPT, Gemini, Grok, and open models through one OpenAI-compatible endpoint. Point existing SDKs at Inferno Router. Swap a model without rewriting the client.",
      },
      {
        title: "Stop paying frontier prices for easy work",
        body: "Fusion routing sends routine steps to self-hosted open models and reserves frontier models for the hard parts. Prompt caching cuts repeated spend.",
      },
      {
        title: "If a provider dies, the call does not",
        body: "When a provider or region is unhealthy, Inferno Router fails over to the next healthy target. Clients keep the same URL.",
      },
      {
        title: "Run your own weights",
        body: "Host open or fine-tuned models on your capacity. Frontier models stay available for the steps that need them. Data can stay in your environment.",
      },
      {
        title: "See the bill before it surprises you",
        body: "Usage logs, latency, and per-key spend in one place. Quotas and rate limits stay isolated per team so one noisy workload cannot eat another budget.",
      },
      {
        title: "Repeated prompts should not cost full price",
        body: "Prompt caching cuts latency and token spend on work you already ran. Purge the cache when you need a fresh inference.",
      },
    ],
    capabilities: [
      "OpenAI-compatible chat and messages endpoints",
      "Fusion routing across frontier and self-hosted models",
      "Automatic failover to the next healthy target",
      "Prompt caching and cache purge",
      "Self-hosted open and fine-tuned weights",
    ],
    useCases: [
      {
        title: "One gateway for the product",
        body: "Every application that calls a model goes through one URL. Routing, spend, and failover live in one place.",
      },
      {
        title: "What Open Computer Agent uses",
        body: "Each agent step uses a right-sized model instead of a single frontier default.",
      },
      {
        title: "Private or hybrid",
        body: "Serve your own models, still reach frontier models for hard steps, keep data in your environment.",
      },
    ],
    detailSections: [
      {
        title: "Fusion routing",
        body: "A task comes in. Routine work goes to self-hosted open models. Hard steps go to frontier models. Caching applies across the mix.",
        items: [
          "Self-hosted models for the routine majority of work",
          "Frontier models only when the step needs them",
          "Prompt caching applied automatically",
        ],
      },
    ],
    claimNote:
      "Uptime, latency, and cost depend on the configured providers, regions, and traffic. Inferno Router supports routing and failover; it does not guarantee every model is available in every region. Cost-reduction figures are illustrative of right-sized routing versus all-frontier list prices.",
  },
] as const;

export type Product = (typeof products)[number];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const services = {
  title: "Services",
  kicker: "Deployed with you",
  intro:
    "The same three products can be implemented as a service. Open Computer works as an in-house engineering team: we configure the product, connect the authorized systems, and stay on the workflow until the real path is verified. A 90-day pilot on your infrastructure is the usual start — no setup fee, pay for the AI you use.",
  lines: [
    {
      id: "voice",
      name: "Voice as a service",
      product: "Athena Voice",
      summary:
        "Inbound and outbound voice agents that can call, converse, qualify, book, and hand off — full-duplex speech-to-speech in the Lifie Reach operating style — when a calling stack is connected and authorized.",
      body: "We deploy Athena Voice into live calling and conversation workflows over WebRTC, WebSocket, or SIP. Agents can be configured to place or receive calls, keep multi-turn context, handle interruptions, qualify interest, suggest a next step, and transfer to a human. Delegated lookups can run on Open Computer Agent while the voice layer keeps talking. Every external action should produce a provider receipt, not only a spoken claim.",
      partner:
        "Voice services are delivered in partnership with Lifie AI, including their Dubai operations, for compliant global outreach across calls, chats, and email. BESCOM uses Athena Voice as a voice agent on authorized utilities workflows.",
    },
    {
      id: "agent",
      name: "Agent as a service",
      product: "Open Computer Agent",
      summary:
        "Persistent private-infrastructure agents for operations, sales, and knowledge work — including Puravankara, BDCC, ISKCON Bengaluru, and Boom Booth Studio — with tools, memory, Fusion routing, and verification bounded to what you authorize.",
      body: "We stand up Open Computer Agent on local, private-server, or hybrid infrastructure, connect the tools the work actually needs, and encode recurring procedures as skills. Inferno Router sits underneath so each step uses a right-sized model. Sensitive actions can require confirmation. The agent reports what was verified, not what it hoped happened. In real estate that includes OpenERP, the operations ERP we built for Puravankara: project records, spreadsheet ingestion, confirmation-gated writes, and a working WhatsApp channel. Agent work also includes BDCC and ISKCON Bengaluru.",
      partner:
        "Open Computer Agent work includes Puravankara (OpenERP in Bengaluru), BDCC (banking), and ISKCON Bengaluru. Live production also includes Boom Booth Studio.",
    },
    {
      id: "router",
      name: "Router as a service",
      product: "Inferno Router",
      summary:
        "An inference gateway in front of your applications: one OpenAI-compatible API, Fusion routing across frontier and self-hosted models, failover, and usage visibility.",
      body: "We deploy Inferno Router so product teams stop wiring a different SDK to every provider. Routing, keys, quotas, logs, prompt cache, and batch live in one control layer. Self-hosted models can take the routine load; frontier models can be reserved for the hard steps. The same gateway is what Open Computer Agent uses.",
      partner:
        "Router services cover gateway setup, provider onboarding, Fusion routing policy, dedicated or multi-region endpoints, and operational handover.",
    },
  ],
  partners: [
    {
      name: "Lifie AI",
      region: "Dubai",
      track: "Voice",
      detail:
        "Partnership for voice-as-a-service deployments. Lifie AI builds enterprise agents for compliant global outreach across calls, chats, and email, with operations in Dubai.",
    },
    {
      name: "Puravankara",
      region: "Bengaluru · real estate",
      track: "Agent",
      detail:
        "Bengaluru-headquartered real-estate developer. Open Computer Agent work includes OpenERP, the real-estate ERP we built for project and operations records, spreadsheet ingestion, Excel, and a working WhatsApp channel.",
    },
    {
      name: "BDCC",
      region: "Banking",
      track: "Agent",
      detail:
        "Open Computer Agent work with BDCC on authorized banking workflows.",
    },
    {
      name: "BESCOM",
      region: "Utilities",
      track: "Voice",
      detail:
        "Athena Voice agent for BESCOM on authorized utilities workflows.",
    },
    {
      name: "Boom Booth Studio",
      region: "Marketing agency",
      track: "Agent",
      detail:
        "Live production: runs operations on Open Computer Agent instead of scaling headcount — multiple production systems, end-to-end, on private infrastructure.",
    },
    {
      name: "ISKCON Bengaluru",
      region: "Bengaluru",
      track: "Agent",
      detail:
        "Open Computer Agent work with ISKCON Bengaluru on authorized operations workflows.",
    },
  ],
} as const;

export const home = {
  entering: "You are now entering",
  scroll: "Scroll to explore",
  studioLabel: "Product studio",
  labLabel: "Engineering lab",
  headline: "Products you can run. Services that put them to work.",
  subhead:
    "Open Computer is an AI-native product studio and engineering lab. We build Athena Voice, Open Computer Agent, and Inferno Router — and we deploy them for organizations that need both software and an operating partner.",
  dual:
    "Not as a distant vendor. Like an in-house tech team that ships the product and stays through verification. Your own AI. Your own data. Your own infrastructure.",
  productsKicker: "Products",
  productsTitle: "Three products. One stack.",
  productsBody:
    "Athena Voice for full-duplex conversation. Open Computer Agent for work that has to finish on private infrastructure. Inferno Router so inference stays under your control and you do not pay frontier prices for every step.",
  servicesKicker: "Services",
  servicesTitle: "The same stack, implemented with you.",
  servicesBody:
    "Voice-as-a-service with Lifie AI in Dubai and a voice agent for BESCOM. Agent work including Puravankara, BDCC, and ISKCON Bengaluru. Router and Fusion-gateway work.",
  methodKicker: "How we work",
  methodTitle: "Atomic steps. Evidence before claims.",
  methodBody:
    "Open Computer Agent is designed to understand the real outcome, change one justified property at a time, and verify the original path before calling the work done. Consequential actions can go through an independent review before they run. Inferno Router makes each of those steps use a right-sized model.",
  ctaTitle: "Tell us which workflow to start with.",
  ctaBody:
    "A product license, a services engagement, or a 90-day pilot on your infrastructure — no setup fee, pay for the AI you use. We start from one bounded workflow and verify the live path.",
} as const;

export const faqs = [
  {
    q: "What is Open Computer?",
    a: "Open Computer builds and deploys AI systems. The three products are Athena Voice, Open Computer Agent, and Inferno Router. We also implement them as a service: we connect the product to your workflow and stay until the live path works.",
  },
  {
    q: "How are products different from services?",
    a: "A product is the software: voice, the agent, or the router. A service is us putting that software into one of your workflows — with the tools you authorize, the limits you set, and a check that the real-world step actually happened.",
  },
  {
    q: "What is Athena Voice?",
    a: "Athena Voice is realtime speech-to-speech. It can listen and talk in the same turn, handle interruptions, and keep the call going while Open Computer Agent looks something up. Browser, server, and phone paths (WebRTC, WebSocket, SIP) are available when those are connected. A spoken sentence is not treated as proof that a booking or send went through.",
  },
  {
    q: "What is Open Computer Agent?",
    a: "Open Computer Agent is a persistent agent on your infrastructure — local, private server, VPC, or on-prem. It uses tools, remembers the project, and reports what was verified. Named work includes Puravankara (OpenERP), BDCC, ISKCON Bengaluru, and Boom Booth Studio. WhatsApp is a working operations channel on deployments that use it.",
  },
  {
    q: "What is Inferno Router?",
    a: "Inferno Router is one OpenAI-compatible API in front of many models. It sends routine work to cheaper or self-hosted models, keeps frontier models for hard steps, fails over if a provider is down, and caches repeated prompts so you can see and control spend.",
  },
  {
    q: "Who do you work with?",
    a: "Voice: Lifie AI in Dubai, and a voice agent for BESCOM. Agent: Puravankara, BDCC, ISKCON Bengaluru, and Boom Booth Studio. Click Show all on Services for the full partner list.",
  },
  {
    q: "Does Open Computer Agent act without permission?",
    a: "Only inside the tools and scopes you authorize. Low-risk reads can run on their own. Writes, messages, calls, bookings, and payments can require a human confirmation and leave an evidence trail.",
  },
  {
    q: "Can it connect to software we already use?",
    a: "Yes, when we add an authorized plugin or API. Access can be read-only or a small set of approved writes. It does not get every app by default.",
  },
  {
    q: "Does my data leave my environment?",
    a: "On a private deployment, the agent and data stay in your boundary. Inferno Router can send a model call to a provider you choose; that is a configured route, not a hidden copy of your systems.",
  },
  {
    q: "How do we start?",
    a: "A 90-day pilot on one workflow. No setup fee; you pay for the AI you use. Month 1 we connect it, month 2 it runs on real work, month 3 you decide whether to keep it.",
  },
  {
    q: "How do I contact you?",
    a: "Email support@tryopencomputer.com, or use the form on the Contact page. Submit opens a draft to that address.",
  },
] as const;

export const contact = {
  title: "Start a conversation",
  body: "Tell us whether you want Athena Voice, Open Computer Agent, Inferno Router, or a services engagement. One workflow is enough to begin a 90-day pilot.",
  email: "support@tryopencomputer.com",
  mailtoNote:
    "Submit opens your email app with a draft to support@tryopencomputer.com. This website does not store or send the message itself.",
} as const;

export const footer = {
  productsHeading: "Products",
  servicesHeading: "Services",
  companyHeading: "Company",
  companyLinks: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  blurb:
    "Open Computer builds Athena Voice, Open Computer Agent, and Inferno Router — and deploys them as services for teams that need products and an engineering partner.",
} as const;

export const claimBoundaries = {
  safe: [
    "Can connect to…",
    "Supports…",
    "Can be configured to…",
    "When connected and authorized…",
    "Available in supported deployments…",
  ],
} as const;

export function publicCopyBlob(): string {
  const productText = products
    .map(
      (product) =>
        `${product.name} ${product.oneLiner} ${product.heroSubhead} ${product.features.map((feature) => `${feature.title} ${feature.body}`).join(" ")} ${product.capabilities.join(" ")} ${product.useCases.map((useCase) => `${useCase.title} ${useCase.body}`).join(" ")} ${product.detailSections.map((section) => `${section.title} ${section.body} ${section.items.join(" ")}`).join(" ")}`,
    )
    .join(" ");

  const serviceText = `${services.title} ${services.intro} ${services.lines.map((line) => `${line.name} ${line.product} ${line.summary} ${line.body} ${line.partner}`).join(" ")} ${services.partners.map((partner) => `${partner.name} ${partner.detail}`).join(" ")}`;

  const faqText = faqs.map((item) => `${item.q} ${item.a}`).join(" ");

  return [
    brand.name,
    brand.tagline,
    brand.description,
    nav.productsLabel,
    nav.servicesLabel,
    home.headline,
    home.subhead,
    home.servicesBody,
    productText,
    serviceText,
    faqText,
    contact.body,
    footer.blurb,
  ].join(" ");
}
