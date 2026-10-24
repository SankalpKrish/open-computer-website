---
name: Open Computer — Greek
description: Marble, engraving, and one pigment. The stack drawn as a temple.
colors:
  marble: "#fbfbf9"
  pentelic: "#f1f0ec"
  vein: "#dad8d2"
  vein-strong: "#b5b2aa"
  plate: "#737373"
  plate-deep: "#5b5b58"
  ink: "#1c1c1a"
  basalt: "#141413"
  egyptian-blue: "#1034a6"
  egyptian-blue-deep: "#0a2477"
  frieze-ink: "#f5f7fd"
  frieze-muted: "#c0cbee"
  frieze-line: "#5a73c4"
  cinnabar: "#a3311f"
typography:
  display:
    fontFamily: "Georgia Pro, Georgia, Gelasio, serif"
    fontSize: "clamp(44px, 5.6vw, 76px)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  architrave:
    fontFamily: "Georgia Pro, Georgia, Gelasio, serif"
    fontSize: "clamp(40px, 5vw, 70px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  h1:
    fontFamily: "Georgia Pro, Georgia, Gelasio, serif"
    fontSize: "clamp(42px, 5.3vw, 61px)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Georgia Pro, Georgia, Gelasio, serif"
    fontSize: "clamp(32px, 3.4vw, 40px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Georgia Pro, Georgia, Gelasio, serif"
    fontSize: "clamp(23px, 2vw, 27px)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Georgia Pro, Georgia, Gelasio, serif"
    fontSize: "clamp(19px, 1.6vw, 22px)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Georgia Pro, Georgia, Gelasio, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.62
  inscription:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.14em"
  wordmark:
    fontFamily: "Georgia Pro, Georgia, Gelasio, serif"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.04em"
rounded:
  none: "0px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "18px"
  "5": "27px"
  "6": "40px"
  "7": "60px"
  "8": "90px"
  "9": "135px"
components:
  button-primary:
    backgroundColor: "{colors.egyptian-blue}"
    textColor: "{colors.frieze-ink}"
    typography: "{typography.inscription}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.egyptian-blue-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.inscription}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "50px"
  button-secondary-hover:
    backgroundColor: "{colors.pentelic}"
  button-inverse:
    backgroundColor: "{colors.marble}"
    textColor: "{colors.ink}"
    typography: "{typography.inscription}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "50px"
  button-inverse-hover:
    backgroundColor: "{colors.frieze-ink}"
    textColor: "{colors.egyptian-blue}"
  input:
    backgroundColor: "{colors.marble}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
    height: "50px"
  metope:
    backgroundColor: "{colors.egyptian-blue}"
    textColor: "{colors.frieze-ink}"
    padding: "40px clamp(18px, 2.6vw, 40px)"
  metope-hover:
    backgroundColor: "{colors.egyptian-blue-deep}"
  stele:
    backgroundColor: "{colors.pentelic}"
    textColor: "{colors.ink}"
    padding: "27px 27px 27px 40px"
---

# Design System: Open Computer — Greek

## Overview

**Creative North Star: "The Engraved Temple"**

Open Computer sells three products that stand on the customer's own infrastructure. The Greek theme draws exactly that, as a temple. Athena from the business card sits in the pediment, where the Parthenon's east pediment shows her birth. The headline is carved on the architrave. Athena Voice, Open Computer Agent, and Inferno Router are three columns, each in its own classical order. They stand on steps under the line "Voice, agents, and inference on your infrastructure." The page is not a picture of a temple: every part of the facade is working UI. The headline is text, the columns are links, and the steps carry the actions.

Everything is drawn the way an 18th-century plate of Athenian antiquities was engraved. Hairline strokes sit on white Pentelic marble, in the card's engraving grey. Shadow is shown with extra cuts, never with blur. One pigment appears, because Greek temples were painted: Egyptian blue, the ground colour behind the Parthenon frieze. It marks every primary action and floods the page once, as the frieze that carries the products.

This file records only the Greek style, in `themes/greek/`. Studio and Editorial are other styles. Every product fact comes from `lib/site-content.ts`. A specimen of these tokens renders at `/design-system`.

**Key Characteristics:**
- Two materials and one pigment: marble and ink, engraving grey, Egyptian blue.
- Architecture is the only ornament. Rules are architraves, separators are triglyphs and fluting, sequences are steps.
- Zero radius. No blurred shadow. Depth is surface (marble, Pentelic, basalt) and a second hairline.
- Georgia Pro, as on the card, for every reading voice. Jost capitals, monoline like Attic letter-cutting, for inscriptions.
- One authored motion per page: on the home page the temple is raised once on arrival.

## Colors

Restrained marble neutrals with one saturated pigment used at page scale once.

### Primary
- **Egyptian Blue** (#1034a6): the pigment painted behind the Parthenon frieze. It marks primary actions, the current page in navigation, focus rings, selection, and checklist marks. It is drenched once per page, as the product frieze (home) or the specimen frieze (`/design-system`). Contrast with marble is 9.8:1.
- **Egyptian Blue Deep** (#0a2477): hover and pressed states of blue surfaces, including metopes.

### Neutral
- **Marble** (#fbfbf9): the page ground. It is close to white, never cream; the card is printed on white.
- **Pentelic** (#f1f0ec): secondary surfaces, including form panels, the pilot stele, the second step of an ascent, and alternate sections.
- **Vein** (#dad8d2): hairlines between records.
- **Vein Strong** (#b5b2aa): the second line of an architrave double rule, fluting, and text-link underlines at rest.
- **Plate** (#737373): the card's engraving grey, sampled from the printed wordmark. Used for the wordmark, the bust, every architectural drawing, and de-emphasised display text. At 4.6:1 on marble it is reserved for large text and drawings.
- **Plate Deep** (#5b5b58): secondary body text, captions, meta lines, claim notes (6.6:1).
- **Ink** (#1c1c1a): text and structural rules.
- **Basalt** (#141413): the closing band, the inner chamber of the temple, where the page ends.

### On Egyptian blue
- **Frieze Ink** (#f5f7fd) for text and drawings, **Frieze Muted** (#c0cbee) for secondary text, and **Frieze Line** (#5a73c4) for triglyph posts and rules.

### Semantic
- **Cinnabar** (#a3311f): invalid fields only. The second Greek pigment, kept out of decoration.

### Named Rules
**The One Pigment Rule.** Egyptian blue is the only hue for action and for a flooded band, one band per page. Cinnabar is invalid fields only.

**The Engraving Rule.** Drawings, the bust, and the wordmark are Plate on marble and Frieze Ink on blue. They are never filled with the pigment, except when a column is hovered or focused (polychromy).

## Typography

**Reading voice:** Georgia Pro, the face on the business card, falling back to Georgia and then Gelasio. Gelasio is drawn to Georgia's metrics, so layout holds whichever face loads; it is self-hosted through `next/font` and never preloaded. Weight is 400. Emphasis comes from size and colour, never from bold. `<em>` renders as Plate, not italic.

**Inscription voice:** Jost, a Futura revival whose round O, pointed A, and splayed M are close to Attic monoline capitals. Always uppercase, weight 500, tracked 0.14em. At 13px it is navigation, actions, column labels, and metope calls to action. At 12px it is form labels, tags, record meta, product navigation, and footer group labels. It is never the reading voice of a heading or a paragraph.

**The Wordmark:** "Open Computer" in Georgia Pro 400, Plate, tracked −0.04em. One line in the header at 24px with leading 1 (21px under 560px). Stacked on two lines in the footer at 44px with leading 0.82 (38px under 560px), as on the card.

### Hierarchy
- **Display** (400, clamp(44px, 5.6vw, 76px), 0.96): inner-page heroes. Page heroes, the product hero, and the contact heading. Not the home architrave.
- **Architrave** (400, clamp(40px, 5vw, 70px), 1): the home H1 only. Under 560px it is clamp(36px, 10.5vw, 44px). Tracking stays −0.025em.
- **H1** (400, clamp(42px, 5.3vw, 61px), 0.96): the default heading, including legal pages. The closing band uses this size at 1.02 leading.
- **Headline** (400, clamp(32px, 3.4vw, 40px), 1.08): section headings (h2).
- **Title** (400, clamp(23px, 2vw, 27px), 1.18): h3, including stoa and record names, which sit on the 23px floor of this clamp.
- **Lead** (400, clamp(19px, 1.6vw, 22px), 1.5): introductions and the temple subline, in Plate Deep. The subline tightens leading to 1.35.
- **Body** (400, 18px, 1.62): paragraphs, measure 66ch. Under 860px the body token becomes 17px.
- **Inscription** (500, 13px, tracked 0.14em, uppercase): controls and column labels. See the 12px meta size above.

### Named Rules
**The Two Voices Rule.** Reading text is Georgia Pro at weight 400. Inscriptions are Jost, uppercase, weight 500, tracked 0.14em. Emphasis in the reading voice is size and Plate, never bold or italic.

## Layout

- **Container:** 1360px maximum, gutters clamp(20px, 4.4vw, 64px).
- **Rhythm:** sections are separated by a section band, clamp(60px, 7.5vw, 112px), and a hairline. More space sits above a heading than below it. The spacing scale is a 3:2 run from 4px to 135px, the same ratio as the reading sizes.
- **Split:** most sections pair a 5-part heading column with a 7-part body column, collapsing to one column under 860px.
- **The facade (home first viewport):** centred, at most 900px wide. From the top: a pediment clamp(72px, 11vh, 108px) holding the relief bust; a triglyph frieze clamp(24px, 3.2vh, 36px); the architrave and its H1; a colonnade clamp(148px, 20vh, 260px) of anta, three columns, and anta; a stylobate (40px, 58px under 560px) carrying the column labels; two steps; the subline; the actions. A triglyph sits over every column and every intercolumniation. The parts stay in that order at the 560px breakpoint.
- **Breakpoints:** 1080px (the frieze stacks, footer brand spans a three-column grid), 860px (the menu collapses, splits stack, the ascent becomes indented steps, body becomes 17px), 560px (tighter facade, full-width actions).

## Elevation & Depth

Flat. Nothing casts a blurred or offset shadow. Depth comes from three surfaces (marble, Pentelic, basalt), from the double architrave rule (an ink line over a vein line, 4px apart, drawn with a zero-blur box-shadow), and from engraving: the turning side of every column carries extra cuts at 0.7px, which thicken to 1.1px in polychromy.

The third step of an ascent is the only mixed surface: Pentelic at 55% with Vein. It is still a flat stone, not a shadow.

## Shapes

Cut stone: 0px radius on every element, including buttons, fields, panels, and focus rings. Lines are 1px. A heavier presence is made by doubling a line, never by thickening it. Architectural drawings use non-scaling 1px strokes (0.7px for shade cuts), so they read as hairline engraving at any size. Fluting, triglyph grooves, and the interpunct are hairline repeats. They are drawing, not a surface gradient.

### Named Rules
**The Cut Stone Rule.** Radius is 0. A heavier line is a second hairline, not a thicker stroke and not a drop shadow.

## Components

### Mark
- **Header lockup:** the engraved bust at 40px (34px under 560px) beside the one-line wordmark. The wordmark turns from Plate to Ink on hover.
- **Card lockup** (footer): the engraved bust at 92px above the stacked wordmark.
- **Engraving vs relief:** the bust raster is the card's engraving, sharp to about 80px. The relief is the same bust traced to vector and rendered as a CSS mask in `currentColor`, for large sizes and for blue.

### Orders
Each product is drawn as a classical order:
- Athena Voice is **Ionic**, the order of Athena's Erechtheion, with the volute's ear-like coil.
- Open Computer Agent is **Doric**, the Parthenon's load-bearing order.
- Inferno Router is **Corinthian**, whose acanthus branches many ways.

The drawings are generated geometry (fluting projected on a tapering shaft with entasis, Archimedean volutes, acanthus leaves). A full crop is a whole column. A capital crop is a product mark.

### Buttons
- **Shape:** a drafted ashlar, square (0px), 52px minimum height, padding 0 28px, inscription caps. No arrow. The face is an ink line, a 4px margin of the stone, and a second hairline.
- **Primary:** Egyptian blue in the field, Frieze Ink, inside a 5px marble margin and an ink line. Hover deepens the field to Egyptian Blue Deep. The marble margin stays.
- **Secondary:** marble with an ink outer line and a Vein Strong inner line. Hover paints the field and leaves the marble margin.
- **Inverse:** the marble ashlar on basalt. Hover takes the same paint. Its focus outline is marble, so it stays visible on the dark band.
- **Text link:** an inscription, not a reading-voice underline. Jost caps, an ink line and a Vein line beneath, both turning Egyptian blue on hover. An email address stays in the reading voice, with one ink line and no caps.
- **Focus:** a 1px ink outline, offset 4px. Fields keep their own cut.

### Temple
The home facade. Columns are links. Hover or focus repaints a column and its label in Egyptian blue (polychromy) and underlines the label.

### Frieze and metopes
The product band. Metopes alternate with 34px triglyph posts on a blue ground. Padding is 40px on the block axis and clamp(18px, 2.6vw, 40px) inline. The capital is drawn in Frieze Ink, then the name, a Frieze Muted summary, and an inscription whose words sit on a hairline. Hover fills the metope with Egyptian Blue Deep. Focus uses a Frieze Ink outline, inset 6px. Under 1080px the posts become horizontal triglyph strips between stacked metopes, and hover underlines the name instead of filling the panel.

### Inscription line
Items in inscription caps, divided by a drawn tricolon, the word divider of Greek inscriptions. Used for partners and capabilities. On product steles, tags stack as a ruled list instead, so no divider is left dangling at a line end.

### Ascent
A sequence as rising steps (Listen, Act, Verify; Connect, Run, Evaluate). The second step is Pentelic and at least 300px. The third is the mixed stone and at least 370px, with a right-hand ink rule. Under 860px they become indented stacked steps and those heights drop.

### Stoa, records, and stele
- **Stoa:** short texts in a ruled two- or three-column colonnade, with no boxes.
- **Records:** partners, with a 12px inscription meta line.
- **Stele:** a single Pentelic plaque between ink rules, padding 27px 27px 27px 40px. Its label is inscription caps at 14px.

### Navigation
Inscription caps in the entablature. The current page is Egyptian blue, with a static hairline under the word. Hover paints the word blue. There is no sliding underline. Under 860px the row becomes a menu. The toggle is three courses when shut and a drafted square when open, 44px either way. Items stack with vein rules.

### Inputs / Fields
Pentelic panel with an ink top rule and 40px padding (27px under 860px). Fields are incised in that stone, not boxed: transparent, 48px minimum, padding 8px 0 10px, an ink line and a Vein line. Hover and focus paint both lines Egyptian blue. After a bad interaction both lines turn cinnabar. A select carries a small triglyph instead of a dropdown arrow. Labels are 12px inscription caps in Plate Deep. A question opens on a triglyph that becomes one horizontal joint. A checklist item is marked with a 7px painted tessera, not a check.

### Frame
The Greek frame holds the shared style switcher, the entablature (lockup, inscribed navigation, architrave rule), `main`, and the footer: three widening steps, the card lockup, and link groups. In this theme the switcher is inscription caps; the chosen style is Egyptian blue with a hairline, and its check icon is hidden. Footer group labels are 12px inscription caps. Group links are 17px and turn blue on hover. "Back to top" is an inscription.

### Motion
Ease is cubic-bezier(0.16, 1, 0.3, 1). Colour changes take 160ms. Column polychromy takes 320ms. Controls do not slide, nudge, or grow an underline. On the home page only, and only when motion is allowed: columns rise from the stylobate over 1100ms, staggered 80ms, 200ms, and 320ms; the pediment closes from the centre over 900ms after 420ms; Athena appears over 900ms after 760ms. About 1.6s in all. Every element is visible by default. Nothing animates under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** take every product fact, partner, and claim from `lib/site-content.ts` and `lib/product-presentation.ts`.
- **Do** build new sections from building parts: architrave rules, triglyphs, fluted rules, steps, steles.
- **Do** keep Egyptian blue for actions and one drenched band per page.
- **Do** use the relief bust in currentColor on blue, and the engraving on marble at small sizes (header 40px, card lockup 92px).
- **Do** give every new product an order and add it to the product order map.

### Don't:
- **Don't** round a corner, or fill a surface with a gradient. Fluting, triglyph grooves, and the interpunct are hairline repeats, not fills.
- **Don't** cast a blurred or offset drop shadow. Depth is a second hairline: an ink line and a vein line, 4px apart, including the zero-blur box-shadow that draws that second line.
- **Don't** use bold or italic Georgia for emphasis; use size and Plate.
- **Don't** put a kicker or eyebrow label above a heading. Inscription caps label controls, data, and footer groups, not reading headings.
- **Don't** add meanders, laurel borders, or marble photo textures. The temple is drawn, not costumed.
- **Don't** set body copy or section headings in Jost, and don't set reading headings in caps.
- **Don't** put a UI arrow, checkmark, plus, or hamburger on a Greek control. Marks are courses, triglyphs, tesserae, and drafted margins.
- **Don't** let the Plate grey carry small text; use Plate Deep.
