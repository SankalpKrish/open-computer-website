export const siteStyles = [
  { id: "athena", name: "Athena", detail: "Natural conversation. Connected action.", colors: ["#000000", "#edb65c", "#ccd4dc"] },
  { id: "dream", name: "Dream", detail: "Cinematic products. Open possibilities.", colors: ["#0a0a0a", "#f5f5f5", "#a3a3a3"] },
  { id: "editorial", name: "Editorial", detail: "Ink, paper & a new perspective", colors: ["#f3efe6", "#24251f", "#ba442c"] },
  { id: "studio", name: "Studio", detail: "Expressive products. Serious engineering.", colors: ["#faf9f6", "#e8653c", "#b8a4de"] },
  { id: "greek", name: "Greek", detail: "Marble, engraving, and Egyptian blue", colors: ["#fbfbf9", "#737373", "#1034a6"] },
  { id: "citron", name: "Citron", detail: "Wada 323. Citron, madder, and black", colors: ["#b2b73e", "#111314", "#762c19"] },
  { id: "grenadine", name: "Grenadine", detail: "Wada 166. Green, coral, and naples", colors: ["#112f2c", "#fbe6a0", "#f48067"] },
  { id: "tyrian", name: "Tyrian", detail: "Wada 279. Tyrian blue, peach, and ecru", colors: ["#12354e", "#eea78c", "#c2ae93"] },
  { id: "jasper", name: "Jasper", detail: "Wada 155. Indigo, jasper, and benzol", colors: ["#051230", "#eb5324", "#00978d"] },
  { id: "slate", name: "Slate", detail: "Wada 263. Slate, turquoise, and cinnamon", colors: ["#34454c", "#b5decc", "#eeb480"] },
] as const;
export type SiteStyle = (typeof siteStyles)[number]["id"];
export const DEFAULT_SITE_STYLE: SiteStyle = "athena";
export const STYLE_STORAGE_KEY = "open-computer-style-v2";
export function isSiteStyle(value: unknown): value is SiteStyle { return siteStyles.some((style) => style.id === value); }
