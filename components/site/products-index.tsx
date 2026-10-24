import { home, products } from "@/lib/site-content";
import { ActionLink, ClosingSection, ProductLink } from "./design-elements";
import { ProductExplorer } from "./product-explorer";

export function ProductsIndex() {
  return <><section id="introduction" className="inner-hero products-index-hero"><div><h1>Our products.</h1></div><div><p>Voice for conversation. Agents for work. A router for inference.</p><div className="hero-actions"><ActionLink>Find your starting point</ActionLink></div></div></section><section id="product-list" className="inner-products page-section" aria-label={home.productsTitle}>{products.map((product) => <ProductLink key={product.slug} product={product} />)}</section><section id="product-explorer" className="stack-section page-section"><div className="section-intro"><h2>Explore the stack.</h2></div><ProductExplorer /></section><ClosingSection /></>;
}
