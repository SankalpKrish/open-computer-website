import { Fragment } from "react";
import { home, products } from "@/lib/site-content";
import { Action } from "../components/actions";
import { ClosingSection, PageHero, ProductStele, Wrap } from "../components/sections";

export function GreekProducts() {
  return <>
    <PageHero title="Our products." actions={<Action>Find your starting point</Action>}><p className="gk-lead">Voice for conversation. Agents for work. A router for inference.</p></PageHero>
    <section id="product-list" className="gk-section is-flush" aria-label={home.productsTitle}>
      <Wrap><div className="gk-stele-row">{products.map((product, index) => <Fragment key={product.slug}>{index > 0 && <span className="gk-fluted-rule" aria-hidden="true" />}<ProductStele product={product} /></Fragment>)}</div></Wrap>
    </section>
    <section id="product-explorer" className="gk-section" aria-labelledby="gk-stack-title">
      <Wrap><div className="gk-split"><h2 id="gk-stack-title">{home.productsTitle}</h2><p className="gk-lead">{home.productsBody}</p></div></Wrap>
    </section>
    <ClosingSection />
  </>;
}
