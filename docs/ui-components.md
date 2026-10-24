# Website component sources

Studio and Editorial keep their established layouts, typography, colors, and section order. New interactive components come from [Rare UI](https://www.rareui.com/components), copied from its [official source repository](https://github.com/swamimalode07/rare-ui/tree/main/components/ui) on 2026-10-02.

| Rare UI component | Website use | Local adaptations |
| --- | --- | --- |
| [Fluid Orb](https://www.rareui.com/components/fluidorb) | Athena Voice system overview | Warm accent colors, gradient fallback, pause when offscreen or the tab is hidden, respond to reduced motion changes. |
| [Voice Note](https://www.rareui.com/components/voicenote) | Incoming/outgoing speech waveform previews | Explicit visual-preview labels, shared playback group, palette and width adjustments. No audio or backend connection. |
| [Task List](https://www.rareui.com/components/tasklist) | Example Agent workflow | Existing understand/act/verify story, keyboard-operable checks, theme styling. |
| [Step Player](https://www.rareui.com/components/stepplayer) | Routing paths, agent method, 90-day pilot | Controlled stage selection, theme styling, user-initiated playback. |
| [Gooey Nav](https://www.rareui.com/components/gooeynav) | Product explorer tabs | Semantic tab props, existing arrow/Home/End keyboard handling, theme tokens. |
| [Scroll Progress](https://www.rareui.com/components/scrollprogressindicator) | Section navigator on long pages | Route-specific sections, keyboard focus, explicit close control, 44px menu targets, theme styling. |

These are website integrations, not a component library or registry mirror. Source notices are retained in each component. The complete upstream license is in `licenses/rare-ui.txt`; the project README includes a visible Rare UI attribution link, as permitted by the license.

[Designeer](https://designeer.xyz/) remains the authorized fallback when a suitable component is unavailable on Rare UI. Editorial and Studio still use the Rare UI components above and were not restyled.

Citron, Grenadine, Tyrian, Jasper, and Slate are colour studies on the Studio layout. They use the same pages, sections, copy, and Rare UI components as Studio. Only the heading typeface and the colours change. Each palette is one combination from Sanzo Wada’s *A Dictionary of Colour Combinations* (digital dataset by Dain M. Blodorn Kim, corrected by Matt DesLauriers): Citron 323, Grenadine 166, Tyrian 279, Jasper 155, Slate 263. Text sits only on a pair from that same combination that clears WCAG AA.

Inactive product visuals unmount so preview playback stops when switching products. Illustrations and example tasks do not represent live customer sessions or real operational data.
