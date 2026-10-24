# Dream

The new default Open Computer theme. Content is drawn from `lib/site-content.ts` and local assets. Existing themes remain available through the footer style selector.

## Reference lock

Primary: https://dreammotion.framer.website/ — observed in the live DOM and a REA browser capture on 2026-10-23. Preserve its near-black canvas, Instrument Serif display type, Satoshi body copy, centered cinematic opening, white pill actions, generous section spacing, rounded charcoal panels, expandable use cases, three-step process, FAQs, and closing invitation.

Secondary: https://mattis.framer.website/ — observed in the live DOM and REA browser capture. Adapt the work section only: full viewport images, blurred image backgrounds, oversized titles behind a sharp central image, project numbering, metadata, and scroll-driven reveals. Each product remains an ordinary link. The image rectangle stays at the same viewport coordinates and size across products; a horizontal boundary sweeps upward through the stationary images as the page scrolls. Each viewport-height panel clips an extended sticky scene, so the wipe follows native scrolling in both directions without scaling or translating the images. Keyboard focus brings the corresponding panel fully into view so its links are never hidden by the wipe. This also applies on phones; reduced motion presents a linear sequence.

Supporting research: Refero Krea (`3a63b3fa-dc79-4dc3-935e-3f8f4ab447a7`) for monochrome surface hierarchy and Vapi (`11db6cab-35f4-43bb-9ec3-053523f6b531`) for presenting voice infrastructure clearly. Their fonts and saturated action colors are not adopted.

## Decisions

| Decision | Source and role | Application |
| --- | --- | --- |
| Instrument Serif / Satoshi | DreamMotion display / UI typography | All headings / body, navigation, controls |
| #0a0a0a / #111 / #fff / #a3a3a3 | DreamMotion canvas / panel / text / secondary text | No added decorative accent; local imagery carries color |
| 58–72px hero, 42–52px section headings, 16px body | DreamMotion hierarchy | Fluid down to 42px / 34px on phones |
| 1080px content, 120px section spacing, 24–32px radius | DreamMotion composition | Centered sections and inset panels |
| Full-width work sequence | Mattis portfolio interaction | Three product panels with links to existing routes |
| Real local artwork | User's repository | Existing botanical images replace template media |
| Product → use cases → benefits → pilot → FAQ → contact | DreamMotion flow + repo content | No fabricated reviews, metrics, prices, or signup |
| 90-day pilot | Existing agent details | One workflow; no setup fee; pay for AI used |
| 220ms eased accordion transitions | User request + Refero motion guidance | Reversible height and opacity transitions for FAQs, services, use cases, and pilot steps; non-selectable plus/minus marks; instant changes with reduced motion |

The repo's Studio, Editorial, Greek, and Wada styles are retained. Dream is isolated in this directory. The contact form still opens a local email draft; it does not submit to a server.

## Fonts and assets

Instrument Serif uses the existing Next.js Google Fonts setup (SIL Open Font License). Satoshi is by the Indian Type Foundry, distributed through [Fontshare](https://www.fontshare.com/fonts/satoshi), self-hosted for web use under the [Fontshare license](https://www.fontshare.com/licenses). The three WOFF2 files match the public reference's regular, medium, and bold font faces. No template images, copy, or Framer runtime bundles are included.
