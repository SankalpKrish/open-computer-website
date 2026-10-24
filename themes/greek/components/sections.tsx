import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { faqs, home, products, services, type Product } from "@/lib/site-content";
import { productPresentation } from "@/lib/product-presentation";
import { Action, TextLink } from "./actions";
import { BustRelief } from "./mark";
import { InscriptionLine } from "./ornament";
import { ProductOrder } from "./orders";

/** Page wrapper for every section: the stylobate's width and the page gutters. */
export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`gk-wrap ${className}`}>{children}</div>;
}

/** The painted frieze: product metopes on Egyptian blue, divided by triglyphs. */
export function ProductFrieze({ id = "products", title = "Our products.", items = products }: { id?: string; title?: string; items?: readonly Product[] }) {
  return <section id={id} className="gk-frieze-section" aria-labelledby={`${id}-title`}>
    <Wrap>
      <h2 id={`${id}-title`}>{title}</h2>
      <div className="gk-frieze">
        <span className="gk-triglyph-post" aria-hidden="true" />
        {items.map((product) => <Fragment key={product.slug}>
          <Link href={product.href} className="gk-metope">
            <ProductOrder slug={product.slug} className="gk-metope-order" />
            <h3>{product.name}</h3>
            <p>{productPresentation[product.slug].summary}</p>
            <span className="gk-metope-cta">{product.cta}</span>
          </Link>
          <span className="gk-triglyph-post" aria-hidden="true" />
        </Fragment>)}
      </div>
    </Wrap>
  </section>;
}

/** Partners as one inscribed architrave line. */
export function PartnersBand() {
  return <section className="gk-partners" aria-labelledby="gk-partners-title">
    <Wrap><div className="gk-partners-inner"><h2 id="gk-partners-title">Partners</h2><InscriptionLine items={services.partners.map((partner) => partner.name)} /></div></Wrap>
  </section>;
}

type Step = { title: string; subtitle: string; body: string };

/** A sequence set as the steps of a crepidoma, each one higher than the last. */
export function Ascent({ steps, label }: { steps: readonly Step[]; label: string }) {
  return <ol className="gk-ascent" aria-label={label}>{steps.map((step) => <li key={step.title}><h3>{step.title} <span>{step.subtitle}</span></h3><p>{step.body}</p></li>)}</ol>;
}

export const methodSteps: Step[] = [
  { title: "Listen", subtitle: "the outcome", body: "Understand the goal and break the work into small, observable steps." },
  { title: "Act", subtitle: "with tools", body: "Use connected, authorized tools to carry out the work." },
  { title: "Verify", subtitle: "the path", body: "Check the outcome and report the evidence, remaining work, and rollback path." },
];

export function MethodSection() {
  return <section id="method" className="gk-section" aria-labelledby="gk-method-title">
    <Wrap><div className="gk-section-head"><h2 id="gk-method-title">How we work.</h2><p>{home.methodTitle}</p></div><Ascent steps={methodSteps} label="How we work" /></Wrap>
  </section>;
}

export function ServiceSummary() {
  return <section id="services-summary" className="gk-section gk-summary" aria-labelledby="gk-summary-title">
    <Wrap>
      <div className="gk-split">
        <div><h2 id="gk-summary-title">Built with you.</h2><TextLink href="/services">Explore our services</TextLink></div>
        <div className="gk-summary-copy">
          <p className="gk-lead">We deploy your stack, connect your tools, and build around your workflow.</p>
          <div className="gk-stele"><strong>90 days. One workflow.</strong><span>No setup fee. Pay for the AI you use.</span></div>
        </div>
      </div>
    </Wrap>
  </section>;
}

export function InPractice() {
  const openErp = products[1].useCases[0];
  return <section id="deployments" className="gk-section" aria-labelledby="gk-practice-title">
    <Wrap>
      <h2 id="gk-practice-title" className="gk-section-title">In practice.</h2>
      <div className="gk-intercolumns">
        <article><h3>{openErp.title}</h3><p>{openErp.body}</p><TextLink href="/products/agent">Explore the agent</TextLink></article>
        <span className="gk-fluted-rule" aria-hidden="true" />
        <article><h3>{services.lines[0].name}</h3><p>{services.lines[0].partner}</p><TextLink href="/services#voice">Explore voice services</TextLink></article>
      </div>
    </Wrap>
  </section>;
}

export function FaqSection() {
  return <section id="faq" className="gk-section" aria-labelledby="gk-faq-title">
    <Wrap>
      <div className="gk-faq">
        <div><h2 id="gk-faq-title">Questions.</h2><TextLink href="/contact">Ask us anything</TextLink></div>
        <div className="gk-faq-list">{faqs.map((faq) => <details key={faq.q} name="gk-faq"><summary>{faq.q}<span className="gk-toggle" aria-hidden="true" /></summary><p>{faq.a}</p></details>)}</div>
      </div>
    </Wrap>
  </section>;
}

/** The close: the cella, in basalt, with Athena in relief. */
export function ClosingSection() {
  return <section id="conversation" className="gk-closing" aria-labelledby="gk-closing-title">
    <Wrap>
      <div className="gk-closing-inner">
        <BustRelief className="gk-closing-figure" />
        <h2 id="gk-closing-title">{home.ctaTitle}</h2>
        <p>{home.ctaBody}</p>
        <Action variant="inverse" />
      </div>
    </Wrap>
  </section>;
}

/** Hero for inner pages: the title on an architrave, the summary and action beneath. */
export function PageHero({ title, children, actions }: { title: ReactNode; children?: ReactNode; actions?: ReactNode }) {
  return <section id="introduction" className="gk-page-hero">
    <Wrap>
      <h1>{title}</h1>
      <div className="gk-page-hero-body">{children}{actions && <div className="gk-actions">{actions}</div>}</div>
    </Wrap>
  </section>;
}

/** A product set on a stele: its order, name, headline, summary, and way in. */
export function ProductStele({ product, compact = false }: { product: Product; compact?: boolean }) {
  const presentation = productPresentation[product.slug];
  return <article className={`gk-stele-product ${compact ? "is-compact" : ""}`}>
    <ProductOrder slug={product.slug} className="gk-stele-order" />
    <h2>{product.name}</h2>
    {!compact && <p className="gk-stele-headline">{presentation.headline.replace("\n", " ")}</p>}
    <p>{presentation.summary}</p>
    {!compact && <ul className="gk-stele-tags">{presentation.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
    <Action href={product.href} variant={compact ? "secondary" : "primary"}>{product.cta}</Action>
  </article>;
}
