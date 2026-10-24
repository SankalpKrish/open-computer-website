import Link from "next/link";
import { products, type Product } from "@/lib/site-content";
import { productPresentation } from "@/lib/product-presentation";
import { Action, TextLink } from "../components/actions";
import { InscriptionLine } from "../components/ornament";
import { ProductOrder } from "../components/orders";
import { ClosingSection, ProductStele, Wrap } from "../components/sections";

export function GreekProduct({ product }: { product: Product }) {
  const presentation = productPresentation[product.slug];
  const [firstLine, secondLine] = presentation.headline.split("\n");
  return <div className={`gk-product gk-product-${product.slug}`}>
    <nav className="gk-product-nav" aria-label="Product navigation">
      <Wrap><Link href="/products" className="gk-back">All products</Link>
        <div>{products.map((item) => <Link href={item.href} key={item.slug} aria-current={item.slug === product.slug ? "page" : undefined}>{item.name}</Link>)}</div></Wrap>
    </nav>
    <section id="introduction" className="gk-product-hero">
      <Wrap>
        <div className="gk-product-hero-grid">
          <div className="gk-product-hero-copy">
            <h1>{product.name}</h1>
            <p className="gk-product-headline">{firstLine}<br />{secondLine}</p>
            <p className="gk-lead">{presentation.summary}</p>
            <div className="gk-actions"><Action>Talk about {presentation.shortName.toLowerCase()}</Action><Action href="#capabilities" variant="secondary">Explore capabilities</Action></div>
          </div>
          <div className="gk-product-hero-order"><ProductOrder slug={product.slug} crop="full" /></div>
        </div>
        <InscriptionLine items={product.capabilities.slice(0, 3)} className="gk-capability-line" />
      </Wrap>
    </section>
    <section className="gk-section" aria-labelledby="gk-product-intro">
      <Wrap><div className="gk-split"><h2 id="gk-product-intro">{presentation.sectionTitle}</h2><p className="gk-lead">{product.heroSubhead}</p></div></Wrap>
    </section>
    <section id="capabilities" className="gk-section" aria-labelledby="gk-capabilities-title">
      <Wrap><h2 id="gk-capabilities-title" className="gk-section-title">Capabilities.</h2>
        <div className="gk-stoa">{product.features.map((feature) => <article key={feature.title}><h3>{feature.title}</h3><p>{feature.body}</p></article>)}</div></Wrap>
    </section>
    {product.detailSections.map((section) => <section className="gk-section is-pentelic" key={section.title}>
      <Wrap><div className="gk-split"><h2>{section.title}</h2><div><p className="gk-lead">{section.body}</p><ul className="gk-checklist">{section.items.map((item) => <li key={item}><span className="gk-tessera" aria-hidden="true" />{item}</li>)}</ul></div></div></Wrap>
    </section>)}
    <section id="use-cases" className="gk-section" aria-labelledby="gk-cases-title">
      <Wrap><h2 id="gk-cases-title" className="gk-section-title">In practice.</h2>
        <div className="gk-stoa is-three">{product.useCases.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        <p className="gk-claim">{product.claimNote}</p>
        <TextLink href={`/services#${product.slug}`}>Explore {presentation.shortName.toLowerCase()} services</TextLink></Wrap>
    </section>
    <section id="related-products" className="gk-section" aria-labelledby="gk-related-title">
      <Wrap><h2 id="gk-related-title" className="gk-section-title">Keep exploring.</h2>
        <div className="gk-stele-row is-two">{products.filter((item) => item.slug !== product.slug).map((item) => <ProductStele key={item.slug} product={item} compact />)}</div></Wrap>
    </section>
    <ClosingSection />
  </div>;
}
