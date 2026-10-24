# Athena Research by OpenComputer

The Athena Research website, built with Next.js. The default design matches the supplied [Athena reference](https://athena-research-website.vercel.app/), with product content from the user-supplied **Athena by OpenComputer** PDF. It includes Home, Athena Voice, Athena Agent, Technology, Solutions, Pricing, Implementation, Contact, and legal pages.

The Athena theme lives in [`themes/athena`](themes/athena), with its reference lock and content map in [`DESIGN.md`](themes/athena/DESIGN.md). Voice content is centralized in [`lib/athena-content.ts`](lib/athena-content.ts). Fonts, vector artwork and the lighting fallback are self-hosted under `public/athena`. The shared WebGL lighting pauses outside the viewport and in hidden tabs, respects reduced motion, and falls back to a static image without WebGL. Pricing estimates, solution filters, language search, conversation preview and the email-draft contact form work without external services. Contact uses the PDF's `archit@tryopencomputer.com` address.

Previous themes remain available through explicit `?style=dream`, `?style=greek`, `?style=studio`, etc. Athena uses a versioned preference key so returning visitors see the redesign.

## Previous themes

Dream lives in [`themes/dream`](themes/dream). Its reference research, typography, and interaction decisions are documented in [`themes/dream/DESIGN.md`](themes/dream/DESIGN.md). The footer contains a persistent style selector. Open any page with `?style=dream` to switch to it directly. Its Instrument Serif headings and self-hosted Satoshi body font match the DreamMotion reference. Satoshi is by Indian Type Foundry, distributed via [Fontshare](https://www.fontshare.com/fonts/satoshi) under the [Fontshare license](https://www.fontshare.com/licenses).

The Greek style is a self-contained theme in [`themes/greek`](themes/greek). It draws the site as an engraved temple, using the business card's Georgia Pro wordmark and Athena engraving. Its design system is documented in [`themes/greek/DESIGN.md`](themes/greek/DESIGN.md) and rendered live at `/design-system`. Choose it from the style switcher or open any page with `?style=greek`.

## Development

```sh
npm install
npm run dev
```

Validation: `npm test`, `npx tsc --noEmit`, and `npm run build`. Run `npm run test:routes` against a running server (`SITE_URL` defaults to `http://localhost:3000`).

## Credits

UI components by [Rare UI](https://rareui.com). Copyright (c) 2026 Swami Malode. Source notices and the [upstream license](licenses/rare-ui.txt) are retained. See [component integrations](docs/ui-components.md) for details.

The Greek theme sets Georgia Pro where it is installed and falls back to [Gelasio](https://fonts.google.com/specimen/Gelasio), with inscriptions in [Jost](https://fonts.google.com/specimen/Jost); both are under the SIL Open Font License. Its bust is the engraving from the Open Computer business card, also traced to vector.

Citron, Grenadine, Tyrian, Jasper, and Slate use the Studio layout and Rare UI components. Their heading type and colours come from plates in Sanzo Wada’s *A Dictionary of Colour Combinations*, via the [digital dataset](https://github.com/mattdesl/dictionary-of-colour-combinations) corrected by Matt DesLauriers from Dain M. Blodorn Kim’s record.
