# Athena Research

Build target: https://athena-research-website.vercel.app/, inspected 2026-10-24.
Content source: the user-supplied 15-page “Athena by OpenComputer” PDF.

The reference owns the visual direction: pure black, amber refracted light for
Voice, silver for Agent, PP Neue Montreal sans, FK Roman Light display headings,
Geist Mono labels, white pill actions, thin rules, and asymmetric 1:2 sections.
The home hero keeps its split headline / research-lab composition. Subpages share
the same navigation, curtain lighting, and large typographic chapter structure.

| Decision | Source | Role |
| --- | --- | --- |
| Black canvas, amber/silver bands | User's Athena reference | Atmosphere; Voice / Agent distinction |
| Sans headlines + full serif product titles | User's Athena reference | Hierarchy; no decorative word swaps |
| Compact white pill links | User's Athena reference | Primary navigation and actions |
| Text contrast and flat surfaces | Refero Ciridae / Krea, plus craft-details.md | Supporting body copy, focus, no heavy shadows |
| Capabilities, rates, metrics, contact | Athena PDF, pages 1–15 | Source of truth for Voice |
| Existing Agent and Router content | lib/site-content.ts | Preserve working product routes |
| Live vs Setup | Athena PDF, page 5 | Label tool-hookup requirements honestly |
| Shipping next | Athena PDF, page 14 | Separate roadmap from live capabilities |

Page map: home introduces the product and headline proof. Voice holds the full
call capabilities and phone workflows. Technology covers architecture, integrations,
languages, scale, reliability and roadmap. Solutions holds the six ready-made plays
and additional use cases. Pricing includes both flat rates, all seven example costs,
and an estimate calculator. Services and Contact use the PDF's three-step onboarding.

Fonts, product SVGs, the static curtain fallback and the Bands shader are adapted
from the supplied Athena reference and self-hosted. The WebGL renderer shares one
context, pauses offscreen/in hidden tabs, respects reduced motion and cleans up on
route changes. Text remains real HTML and the site works without WebGL.

Legacy themes remain available via explicit style selection. Athena is the default
for new and returning visitors under the versioned style preference key.

## Our work

The user requested the previous site's frame design. `works.tsx` carries over the
Dream theme's Mattis-derived showcase: blurred full-viewport artwork, oversized
serif titles behind a sharp image frame, product metadata and numbered panels.
The extended sticky scene is clipped at each viewport-height panel boundary,
preserving the stationary image rectangle and native scroll-driven wipe in both
directions. Athena supplies fonts, product names and neutral borders. The existing
repository artwork and all three product links remain in use. Keyboard focus
reveals its panel; reduced motion presents an ordinary linear sequence. Captions
reserve equal height on phones, so wrapping never moves the image frame.

The restored showcase was checked at 1440×900, 390×844 and 320×568. Adjacent
frames retain matching x/y/width/height through both product wipes, keyboard
focus reveals its complete panel, and reduced motion removes sticky positioning.

Product titles now move left to right behind each frame, driven directly by the
same panel scroll position as the wipe. A single copy of the complete name crosses
the viewport, with no time-based loop or easing delay. Font and viewport changes
remeasure the travel distance; reduced motion keeps the title centred and still.
Athena Voice and Athena Agent are reached from the showcase and footer rather
than the top navigation, as requested.

## Validation

Compared local desktop (1440px) and mobile (390px) captures with the source.
Responsive checks covered seven primary pages at 320, 390, 768 and 1280px,
with one h1 per page and no page overflow. A long closing heading at 320px
was corrected and rechecked. All 63 internal route/fragment links resolve.

The pricing calculator, solution filters, language search and empty state,
conversation step selection, mobile menu / Escape / focus / route changes,
keyboard FAQ and email-draft contact flow were exercised in Chromium.
The contact flow opens a draft; it does not send email.

21 unit/content tests, a standalone TypeScript check, Next production build,
and route checks passed. The reference lighting is retained on hardware GPUs;
software rendering uses the same static light field to preserve responsiveness.
