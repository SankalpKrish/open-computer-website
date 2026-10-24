import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { products, type Product } from "@/lib/site-content";
import { productPresentation } from "@/lib/product-presentation";
import { ActionLink, ClosingSection, ProductLink } from "./design-elements";
import { ProductIcon, ProductVisual } from "./product-visuals";

export function ProductPage({ product }: { product: Product }) {
  const presentation = productPresentation[product.slug];
  return <div className={`product-page product-page-${product.slug}`}>
    <nav className="product-navigation" aria-label="Product navigation"><Link href="/products"><ArrowLeft size={15} aria-hidden="true" />All products</Link><div>{products.map((item) => <Link href={item.href} key={item.slug} aria-current={item.slug === product.slug ? "page" : undefined}><ProductIcon slug={item.slug} size={15} />{item.name}</Link>)}</div></nav>
    <section id="introduction" className="product-hero"><div className="product-hero-copy"><span className="eyebrow"><ProductIcon slug={product.slug} size={17} />{product.name}</span><h1>{presentation.headline}</h1><p>{presentation.summary}</p><div className="hero-actions"><ActionLink>Talk about {presentation.shortName.toLowerCase()}</ActionLink><ActionLink href="#capabilities" secondary>Explore capabilities</ActionLink></div></div><ProductVisual slug={product.slug} /><div className="capability-strip">{product.capabilities.slice(0, 3).map((item) => <span key={item}><Check size={14} aria-hidden="true" />{item}</span>)}</div></section>
    <section className="product-introduction page-section"><h2>{presentation.sectionTitle}</h2><p>{product.heroSubhead}</p></section>
    <section id="capabilities" className="capabilities-section page-section"><div className="section-intro"><h2>Capabilities.</h2></div><div className="feature-records">{product.features.map((feature) => <article key={feature.title}><h3>{feature.title}</h3><p>{feature.body}</p></article>)}</div></section>
    {product.detailSections.map((section) => <section className="detail-section page-section" key={section.title}><div><h2>{section.title}</h2></div><div><p>{section.body}</p><ul>{section.items.map((item) => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}</ul></div></section>)}
    <section id="use-cases" className="use-cases page-section"><h2>In practice.</h2><div className="use-case-list">{product.useCases.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div><p className="claim-note">{product.claimNote}</p><ActionLink href={`/services#${product.slug}`} secondary>Explore {presentation.shortName.toLowerCase()} services</ActionLink></section>
    <section id="related-products" className="related-products page-section"><h2>Keep exploring.</h2><div className="product-entries">{products.filter((item) => item.slug !== product.slug).map((item) => <ProductLink key={item.slug} product={item} />)}</div></section>
    <ClosingSection />
  </div>;
}
