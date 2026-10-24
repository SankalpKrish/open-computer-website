"use client";

import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";
import { products, services } from "@/lib/site-content";
import { useSiteStyle } from "./style-provider";
import { ActionLink, ClosingSection, FaqBlock, MethodSection, PartnerList, ProductLink, ServiceSummary, StackDrawing } from "./design-elements";
import { ProductExplorer } from "./product-explorer";
import { AsciiField } from "./ascii-field";
import { ProductGlyph } from "./product-visuals";

function PartnerStrip() {
  return <section className="partner-strip" aria-label="Partners and clients"><h2>Partners</h2><PartnerList /></section>;
}

function ProductsSection() {
  return <section id="products" className="home-products page-section"><div className="section-intro"><h2>Our products.</h2></div><div className="product-entries">{products.map((product) => <ProductLink key={product.slug} product={product} />)}</div></section>;
}

function DeploymentSection() {
  const openErp = products[1].useCases[0];
  return <section id="deployments" className="deployment-section page-section"><div className="section-intro"><h2>In practice.</h2></div><div className="deployment-grid"><article><h3>{openErp.title}</h3><p>{openErp.body}</p><ActionLink href="/products/agent" secondary>Explore the agent</ActionLink></article><article><h3>Conversation, connected.</h3><p>{services.lines[0].partner}</p><ActionLink href="/services#voice" secondary>Explore voice services</ActionLink></article></div></section>;
}

function EditorialHome() {
  return <>
    <section id="introduction" className="editorial-hero">
      <div className="editorial-title"><h1>Products you<br />can <em>run.</em></h1><p>Voice, agents, and inference on your infrastructure.</p><div className="hero-actions"><ActionLink href="/products">Explore the products</ActionLink><ActionLink secondary>Build with us</ActionLink></div></div>
      <div className="editorial-cover"><div className="cover-heading">The working<br /><em>stack.</em></div><StackDrawing /><div className="cover-legend">{products.map((product) => <Link href={product.href} key={product.slug}>{product.name}<ArrowUpRight size={13} aria-hidden="true" /></Link>)}</div></div>
    </section>
    <AsciiField />
    <PartnerStrip /><ProductsSection />
    <section className="stack-section page-section"><div className="section-intro"><h2>Explore the stack.</h2></div><ProductExplorer /></section>
    <ServiceSummary /><DeploymentSection /><MethodSection /><FaqBlock /><ClosingSection />
  </>;
}

function StudioHome() {
  return <>
    <section id="introduction" className="studio-hero"><div className="studio-heading"><h1>AI that works.<br /><span>On your terms.</span><Asterisk className="studio-asterisk" strokeWidth={1.2} aria-hidden="true" /></h1><p>Voice, agents, and inference on your infrastructure.</p><div className="hero-actions"><ActionLink href="/products">Explore the products</ActionLink><ActionLink secondary>Build with us</ActionLink></div></div>
      <div className="studio-mosaic">{products.map((product) => <Link key={product.slug} href={product.href} className={`studio-module module-${product.slug}`}><ArrowUpRight className="module-arrow" size={21} aria-hidden="true" /><ProductGlyph slug={product.slug} /><div className="module-bottom"><h2>{product.name}</h2></div></Link>)}</div>
    </section>
    <AsciiField />
    <PartnerStrip />
    <section id="products" className="stack-section page-section"><div className="section-intro"><h2>Our products.</h2></div><ProductExplorer /></section>
    <ServiceSummary /><DeploymentSection /><MethodSection /><FaqBlock /><ClosingSection />
  </>;
}

const designs = { editorial: EditorialHome, studio: StudioHome, citron: StudioHome, grenadine: StudioHome, tyrian: StudioHome, jasper: StudioHome, slate: StudioHome };

export function HomePage() {
  const { style } = useSiteStyle();
  // The Greek style renders its own home through PageFrame; this module only draws the others.
  const Design = style in designs ? designs[style as keyof typeof designs] : EditorialHome;
  return <div className={`home-design home-${style}`}><Design /></div>;
}
