import type { CSSProperties } from "react";
import { products } from "@/lib/site-content";
import { productPresentation } from "@/lib/product-presentation";
import { Action, TextLink } from "../components/actions";
import { Bust, BustRelief, CardLockup, Wordmark } from "../components/mark";
import { FriezeBand, InscriptionLine, Triglyph } from "../components/ornament";
import { Column, orderName, productOrder } from "../components/orders";
import { Ascent, methodSteps, ProductFrieze, Wrap } from "../components/sections";

// Mirrors tokens.css. Swatches paint from the CSS variable, so a drift shows on the page.
const palette = [
  { name: "Marble", token: "--gk-marble", hex: "#fbfbf9", role: "Page ground" },
  { name: "Pentelic", token: "--gk-pentelic", hex: "#f1f0ec", role: "Secondary surface, fields, steps" },
  { name: "Vein", token: "--gk-vein", hex: "#dad8d2", role: "Hairlines between records" },
  { name: "Vein strong", token: "--gk-vein-strong", hex: "#b5b2aa", role: "Second line of a double rule, fluting" },
  { name: "Plate", token: "--gk-plate", hex: "#737373", role: "The card's engraving grey: drawings, wordmark, bust" },
  { name: "Plate deep", token: "--gk-plate-deep", hex: "#5b5b58", role: "Secondary text (6.6:1 on marble)" },
  { name: "Ink", token: "--gk-ink", hex: "#1c1c1a", role: "Text and structural rules" },
  { name: "Basalt", token: "--gk-basalt", hex: "#141413", role: "The closing band" },
  { name: "Egyptian blue", token: "--gk-frieze", hex: "#1034a6", role: "The one pigment: primary actions, the frieze" },
  { name: "Egyptian blue deep", token: "--gk-frieze-deep", hex: "#0a2477", role: "Pressed and hovered blue" },
  { name: "Frieze muted", token: "--gk-frieze-muted", hex: "#c0cbee", role: "Secondary text on blue" },
  { name: "Cinnabar", token: "--gk-cinnabar", hex: "#a3311f", role: "Errors only" },
];

const typeScale = [
  { name: "Display", token: "--gk-text-display", sample: "Products you can run.", className: "gk-spec-display" },
  { name: "Heading 1", token: "--gk-text-h1", sample: "Tell us which workflow to start with.", className: "gk-spec-h1" },
  { name: "Heading 2", token: "--gk-text-h2", sample: "Three products. One stack.", className: "gk-spec-h2" },
  { name: "Heading 3", token: "--gk-text-h3", sample: "Talk over it. It keeps up.", className: "gk-spec-h3" },
  { name: "Lead", token: "--gk-text-lead", sample: "Voice, agents, and inference on your infrastructure.", className: "gk-lead" },
  { name: "Body", token: "--gk-text-body", sample: "Audio streams in. Athena Voice reasons over incoming and outgoing audio together, decides whether to speak or keep listening, and can delegate to Open Computer Agent without dropping the call.", className: "" },
];

const space = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((step) => ({ step, token: `--gk-space-${step}` }));

function Specimen({ id, title, children, note }: { id: string; title: string; note?: string; children: React.ReactNode }) {
  return <section id={id} className="gk-section gk-spec" aria-labelledby={`${id}-title`}>
    <Wrap><div className="gk-spec-head"><h2 id={`${id}-title`}>{title}</h2>{note && <p>{note}</p>}</div>{children}</Wrap>
  </section>;
}

export function GreekSystem() {
  return <>
    <section id="introduction" className="gk-page-hero">
      <Wrap>
        <h1>Greek design system.</h1>
        <div className="gk-page-hero-body"><p className="gk-lead">Marble, the card&rsquo;s engraving grey, and one pigment: the Egyptian blue painted behind the Parthenon frieze. Georgia Pro carries every reading voice; Jost capitals carry inscriptions.</p></div>
      </Wrap>
    </section>

    <Specimen id="mark" title="Mark" note="From the business card. The engraving is the original raster, sharp to about 80px. The relief is the same bust traced to vector; it takes any token colour.">
      <div className="gk-spec-marks">
        <figure><CardLockup /><figcaption>Card lockup · footer</figcaption></figure>
        <figure><span className="gk-lockup"><Bust /><Wordmark /></span><figcaption>Header lockup</figcaption></figure>
        <figure className="is-frieze"><BustRelief className="gk-spec-relief" /><figcaption>Relief on Egyptian blue</figcaption></figure>
        <figure className="is-basalt"><BustRelief className="gk-spec-relief" /><figcaption>Relief on basalt</figcaption></figure>
      </div>
    </Specimen>

    <Specimen id="colour" title="Colour" note="Restrained marble and ink, with one pigment used at page scale once per page (the frieze) and on every primary action.">
      <ul className="gk-spec-palette">{palette.map((swatch) => <li key={swatch.token}><span style={{ background: `var(${swatch.token})` }} /><strong>{swatch.name}</strong><code>{swatch.token}</code><code>{swatch.hex}</code><p>{swatch.role}</p></li>)}</ul>
    </Specimen>

    <Specimen id="type" title="Type" note="Georgia Pro, then Georgia, then Gelasio (metric-compatible). A 3:2 scale from an 18px body. Inscriptions are Jost capitals at 0.14em.">
      <div className="gk-spec-type">{typeScale.map((row) => <div key={row.token}><code>{row.name} · {row.token}</code><p className={row.className}>{row.sample}</p></div>)}
        <div><code>Inscription · --gk-inscription</code><InscriptionLine items={["Athena Voice", "Open Computer Agent", "Inferno Router"]} /></div>
        <div><code>Wordmark · 400, −0.04em, plate</code><p className="gk-spec-wordmark"><Wordmark stacked /></p></div>
      </div>
    </Specimen>

    <Specimen id="space" title="Space" note="The same 3:2 progression as the type, from a 4px module. Sections breathe at --gk-section.">
      <ul className="gk-spec-space">{space.map((item) => <li key={item.token}><code>{item.token}</code><span style={{ width: `var(${item.token})` } as CSSProperties} /></li>)}</ul>
    </Specimen>

    <Specimen id="orders" title="Orders" note="Each product is drawn as a classical order. Strokes never scale, so every size reads as a hairline engraving. Hover or focus repaints a column in Egyptian blue.">
      <div className="gk-spec-orders">{products.map((product) => <figure key={product.slug}><Column order={productOrder[product.slug]} /><figcaption><strong>{orderName[productOrder[product.slug]]}</strong>{product.name}</figcaption></figure>)}</div>
    </Specimen>

    <Specimen id="ornament" title="Ornament" note="Architecture used as rules: no radius, no shadow, no decoration that is not a building part.">
      <div className="gk-spec-ornament">
        <div><code>Architrave rule</code><span className="gk-spec-architrave" /></div>
        <div><code>Triglyph frieze</code><div className="gk-spec-frieze-band"><FriezeBand positions={[0, 0.25, 0.5, 0.75, 1]} /></div></div>
        <div><code>Triglyph</code><Triglyph className="gk-spec-triglyph" /></div>
        <div><code>Fluted rule</code><span className="gk-fluted-rule gk-spec-fluted" /></div>
        <div><code>Interpunct (⁝)</code><InscriptionLine items={["Lifie AI", "Puravankara", "BDCC"]} /></div>
        <div><code>Crepidoma steps</code><div className="gk-spec-steps"><span /><span /><span /></div></div>
      </div>
    </Specimen>

    <Specimen id="components" title="Components">
      <div className="gk-spec-components">
        <div><code>Actions</code><div className="gk-actions"><Action href="/products">Explore the products</Action><Action href="/contact" variant="secondary">Build with us</Action></div></div>
        <div className="is-basalt"><code>Inverse action</code><div className="gk-actions"><Action variant="inverse" /></div></div>
        <div><code>Text link</code><TextLink href="/services">Explore our services</TextLink></div>
        <div><code>Field</code><form className="gk-form" action="#" aria-label="Field specimen"><label htmlFor="gk-spec-field"><span>Name</span><input id="gk-spec-field" placeholder="Your name" /></label></form></div>
        <div><code>Stele</code><div className="gk-stele"><strong>90 days. One workflow.</strong><span>No setup fee. Pay for the AI you use.</span></div></div>
        <div><code>Question</code><div className="gk-faq-list"><details open><summary>How do we start?<span className="gk-toggle" aria-hidden="true" /></summary><p>A 90-day pilot on one workflow. No setup fee; you pay for the AI you use.</p></details></div></div>
        <div className="is-wide"><code>Ascent</code><Ascent steps={methodSteps} label="Ascent specimen" /></div>
        <div className="is-wide"><code>Inscription band</code><InscriptionLine className="gk-capability-line" items={productPresentation.voice.tags} /></div>
      </div>
    </Specimen>

    <ProductFrieze id="frieze-specimen" title="Frieze." />

    <Specimen id="motion" title="Motion" note="One authored moment per page, exponential ease-out, skipped under reduced motion.">
      <ul className="gk-spec-motion">
        <li><code>--gk-ease</code><span>cubic-bezier(0.16, 1, 0.3, 1)</span></li>
        <li><code>--gk-fast · 160ms</code><span>Colour and underline changes</span></li>
        <li><code>--gk-base · 320ms</code><span>Polychromy on columns, arrows, toggles</span></li>
        <li><code>Raising · 1100ms</code><span>Home only: the columns rise from the stylobate, the pediment closes, Athena appears</span></li>
      </ul>
    </Specimen>
  </>;
}
