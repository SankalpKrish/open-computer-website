// Voice copy and figures are from “Athena by OpenComputer”, supplied by the user.
// Roadmap features stay separate from capabilities available today.
export const athena = {
  name: "Athena Research",
  product: "Athena Voice",
  maker: "OpenComputer",
  email: "archit@tryopencomputer.com",
  title: "Voice agents that answer, call and finish the job.",
  description:
    "Athena by OpenComputer. Real-time voice agents for phone lines and the web, with 62 languages, 24 voices, connected tools, and one flat rate of ₹4.5 a minute, all-in.",
} as const;

export const capabilities = [
  {
    title: "Talks like a person",
    body: "Two-way, interruptible speech in 24 voices. A real conversation, without robotic pauses.",
  },
  {
    title: "Books and updates",
    body: "Calls your tools mid-call: calendars, CRMs, order systems and lookups.",
  },
  {
    title: "Gets through phone menus",
    body: "Presses keys, waits on hold and reaches a person. Listens to the whole menu before acting.",
  },
  {
    title: "Knows who answered",
    body: "Person, voicemail or phone menu, in about 0.4 seconds.",
  },
  {
    title: "Ends calls cleanly",
    body: "A second check before every hang-up, so the conversation ends when it should.",
  },
  {
    title: "Runs campaigns",
    body: "Outbound lists with autoscaling, carrier pacing, retries and do-not-call checks.",
  },
  {
    title: "Remembers callers",
    body: "Recognises a returning caller by number and picks up where the last call left off.",
  },
  {
    title: "Speaks 62 languages",
    body: "Starts each call in the caller’s language. Set the language per agent or per call.",
  },
] as const;

export const problems = [
  {
    title: "Missed calls",
    body: "After hours and at peak, calls go unanswered and customers book elsewhere.",
  },
  {
    title: "Slow follow-up",
    body: "Leads cool off while they wait for someone to call them back.",
  },
  {
    title: "Menus and hold",
    body: "Reaching a person at another company eats hours of staff time.",
  },
  {
    title: "Language gaps",
    body: "Callers who don’t speak the team’s language are underserved.",
  },
] as const;

export const callSteps = [
  {
    title: "The caller",
    subtitle: "Phone or web",
    body: "Inbound and outbound SIP lines, browser calls and campaigns.",
  },
  {
    title: "Athena Voice",
    subtitle: "Listens and speaks live",
    body: "Speech-to-speech, so the caller can interrupt at any time. No robotic pauses.",
  },
  {
    title: "Decisions",
    subtitle: "Answered in ~0.4 s",
    body: "Hang up or keep going? Person or machine? A dedicated fast layer decides.",
  },
  {
    title: "Your systems",
    subtitle: "Action, mid-call",
    body: "Calendars, CRMs, your knowledge base and MCP tool servers.",
  },
] as const;

export const proof = [
  {
    value: "3.8×",
    label: "faster call decisions",
    detail: "1.59 s down to 0.42 s, at the same accuracy.",
  },
  {
    value: "87%",
    label: "phone menus, first try",
    detail: "93%+ with retry logic.",
  },
  {
    value: "0",
    label: "audio packets lost",
    detail: "Across 128,081 packets on live phone calls.",
  },
  {
    value: "1.7 s",
    label: "median reply time",
    detail: "After the caller stops talking.",
  },
] as const;

export const solutions = [
  {
    id: "clinics",
    category: "Clinics",
    title: "No missed patients.",
    body: "Books, confirms and reschedules visits, takes intake details and sends reminders at scale.",
    status: "Setup",
    detail:
      "Connect your calendar and intake tools. Athena handles appointment calls and follow-ups, then hands the context to your staff.",
    outcome: "An appointment in the calendar. An informed front desk.",
  },
  {
    id: "garages",
    category: "Garages",
    title: "A front desk that never sleeps.",
    body: "Books service slots and answers questions from your own knowledge base, 24/7.",
    status: "Setup",
    detail:
      "Connect your service calendar and approved workshop information. Collect vehicle and job details before the customer arrives.",
    outcome: "A prepared service visit, even when the workshop is busy.",
  },
  {
    id: "restaurants",
    category: "Restaurants",
    title: "Peak-hour calls handled.",
    body: "Takes reservations and orders straight into your booking and ordering tools.",
    status: "Setup",
    detail:
      "Connect your reservation and ordering tools. Confirm the party size, time, order and important details while your team looks after the room.",
    outcome: "The booking or order in your system. Your team with the guest.",
  },
  {
    id: "home-services",
    category: "Home services",
    title: "Every lead called back.",
    body: "Calls new leads at once, qualifies them and books the visit.",
    status: "Setup",
    detail:
      "Connect your lead source and appointment windows. Athena gathers job details, checks coverage and books the next step.",
    outcome: "A qualified lead and a useful visit on the calendar.",
  },
  {
    id: "verification",
    category: "Verification",
    title: "Data checked by voice.",
    body: "Works through phone menus and hold, confirms the facts with a person, records the outcome.",
    status: "Live",
    detail:
      "Athena listens to the whole menu, presses the right keys, spells entries and waits on hold until a person answers.",
    outcome: "Verified facts, with a transcript and a recorded outcome.",
  },
  {
    id: "outbound",
    category: "Any outbound list",
    title: "Campaigns, safely.",
    body: "Large lists with autoscaling, carrier pacing, retries and do-not-call checks.",
    status: "Live",
    detail:
      "Scale from 5 to 500 concurrent calls. Keep one live call per number and a retry list with a plain reason for each call held back.",
    outcome: "A controlled campaign. Every follow-up accounted for.",
  },
] as const;

export const useCases = [
  {
    title: "Reservations and orders",
    body: "Takes the booking or the order at peak hour, straight into your system.",
  },
  {
    title: "Customer support line",
    body: "Answers from your knowledge base, looks up the account and escalates when it should.",
  },
  {
    title: "Property search and tours",
    body: "Qualifies the buyer, checks what’s available and books the viewing.",
  },
  {
    title: "Health intake and follow-ups",
    body: "Collects intake details, books follow-ups and hands over to your staff.",
  },
  {
    title: "Order and account status",
    body: "Checks your backend while the caller keeps talking. No hold music.",
  },
  {
    title: "Multilingual service desk",
    body: "Opens the call in the caller’s own language, in any of 62.",
  },
] as const;

export const integrations = [
  {
    title: "MCP tool servers",
    body: "Plug in any MCP server; the agent uses its tools mid-call.",
  },
  {
    title: "Your APIs as tools",
    body: "Calendars, CRMs, order systems and lookups, called live.",
  },
  {
    title: "A reasoning model",
    body: "Plans every tool call and workflow step while the voice keeps talking.",
  },
  {
    title: "Your knowledge base",
    body: "Answers from your own documents, not guesses.",
  },
  {
    title: "Transfer to your team",
    body: "Hands the caller to a person when the moment needs one.",
  },
  {
    title: "Results by webhook",
    body: "Outcome, transcript and captured data pushed to your systems after every call.",
  },
  {
    title: "Caller memory",
    body: "A returning caller picks up where they left off.",
  },
  {
    title: "Keys and phone menus",
    body: "Presses keys, spells entries and waits on hold.",
  },
] as const;

export const reliability = [
  {
    title: "Global cloud",
    body: "The same quality anywhere. Regional media nodes keep audio close to callers.",
  },
  {
    title: "Automatic failover",
    body: "If a server drops out, a standby takes its place.",
  },
  {
    title: "Calls queued again",
    body: "A call that can’t start is queued again and placed.",
  },
  {
    title: "Redundant model capacity",
    body: "If one route pauses, calls carry on over another.",
  },
  {
    title: "Off-site backups",
    body: "Hourly backups plus snapshots in a second region.",
  },
  {
    title: "Self-healing servers",
    body: "Servers recover on their own after a fault. Monitoring runs 24/7 with email alerts.",
  },
] as const;

export const roadmap = [
  {
    title: "Faster phone menus",
    body: "Each menu step decided in about 0.5 s instead of 1.7 s, with no extra wrong key presses in testing.",
  },
  {
    title: "Sharper call endings and outcomes",
    body: "Fewer missed and false hang-ups, with the call’s outcome code stored in about 0.4 s.",
  },
  {
    title: "Follows the caller’s language",
    body: "When a caller switches language mid-call, the agent switches with them.",
  },
  {
    title: "Calls in each lead’s local hours",
    body: "Campaigns that respect every lead’s own time zone.",
  },
] as const;

export const languages = [
  "English",
  "Hindi",
  "Bengali",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Urdu",
  "Spanish",
  "Mexican Spanish",
  "French",
  "German",
  "Portuguese",
  "Brazilian Portuguese",
  "Italian",
  "Dutch",
  "Russian",
  "Arabic",
  "Japanese",
  "Korean",
  "Chinese (Mandarin)",
  "Turkish",
  "Polish",
  "Indonesian",
  "Vietnamese",
  "Thai",
  "Albanian",
  "Amharic",
  "Armenian",
  "Bosnian",
  "Bulgarian",
  "Burmese",
  "Catalan",
  "Croatian",
  "Czech",
  "Danish",
  "Estonian",
  "Finnish",
  "Georgian",
  "Greek",
  "Hungarian",
  "Icelandic",
  "Kazakh",
  "Latvian",
  "Lithuanian",
  "Macedonian",
  "Malay",
  "Mongolian",
  "Norwegian",
  "Persian",
  "Romanian",
  "Serbian",
  "Slovak",
  "Slovenian",
  "Somali",
  "Swahili",
  "Swedish",
  "Tagalog",
  "Ukrainian",
] as const;

export const callPrices = [
  { task: "Reminder or confirmation", minutes: 1 },
  { task: "Booking or rescheduling", minutes: 2 },
  { task: "Reservation or order", minutes: 3 },
  { task: "Verification through phone menus", minutes: 4 },
  { task: "Survey or feedback", minutes: 5 },
  { task: "Support triage", minutes: 8 },
  { task: "Healthcare intake", minutes: 12 },
] as const;

export const faqs = [
  {
    q: "What is Athena?",
    a: "Athena is OpenComputer’s voice AI for phone lines and the web. It answers inbound calls, makes outbound calls, uses your tools and finishes the task in a natural, interruptible conversation.",
  },
  {
    q: "What does ₹4.5 a minute include?",
    a: "Voice, model, tools and classification are included in the all-in rate. Minute twelve costs the same as minute one. Voice-only is ₹3.5 a minute, with the same voices and duplex quality.",
  },
  {
    q: "Can it book appointments or update our CRM?",
    a: "Yes. Connect your calendars, CRM, order systems or APIs as tools. Athena can call them during the conversation. Ready-made clinic, garage, restaurant and home-service solutions go live after the relevant tools are connected.",
  },
  {
    q: "Can Athena get through a phone menu?",
    a: "It listens to the whole menu, presses keys, spells entries and waits on hold. It recognises a person, voicemail or phone menu in about 0.4 seconds. Reported phone-menu success is 87% on the first try and 93%+ with retry logic.",
  },
  {
    q: "Which languages and voices are available?",
    a: "62 languages and 24 voices. Set the language per agent or per call. Voices include American and British English, French, German, Hindi, Japanese, Korean, Mexican Spanish and Brazilian Portuguese.",
  },
  {
    q: "How do campaigns and retries work?",
    a: "Outbound lists scale from 5 to 500 simultaneous calls. Carrier pacing, one live call per number and do-not-call handling are built in. Every retry has a plain reason, such as busy, no answer or call back later. Retry up to 250 calls in one click.",
  },
  {
    q: "What can our team review after a call?",
    a: "A transcript, recording, outcome and retry list, with a plain reason for each call to try again. Webhooks can push the outcome, transcript and captured data into your own systems.",
  },
  {
    q: "How do we get started?",
    a: "Pick one use case and send us your call script. We build the agent on your tools and numbers. Hear it on real calls, then scale up. Email archit@tryopencomputer.com to start.",
  },
] as const;
