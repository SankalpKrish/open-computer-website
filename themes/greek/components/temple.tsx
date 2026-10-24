import Link from "next/link";
import { products } from "@/lib/site-content";
import { Action } from "./actions";
import { BustRelief } from "./mark";
import { FriezeBand } from "./ornament";
import { Column, productOrder } from "./orders";

/**
 * The home facade. Athena in the pediment, the headline on the architrave,
 * the three products as three orders, all standing on the visitor's infrastructure.
 */
export function Temple() {
  return <section id="introduction" className="gk-temple" aria-labelledby="gk-temple-title">
    <div className="gk-facade">
      <div className="gk-pediment">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 99.5 500 1 1000 99.5" /><path d="M34 99.5 500 9 966 99.5" /><path d="M0 99.5h1000" /></svg>
        <BustRelief className="gk-pediment-figure" />
      </div>
      <FriezeBand />
      <div className="gk-architrave"><h1 id="gk-temple-title">Products you can run.</h1></div>
      <ul className="gk-colonnade" aria-label="The three products">
        <li className="gk-anta" aria-hidden="true"><span /></li>
        {products.map((product) => <li key={product.slug}>
          <Link href={product.href} className="gk-portico-column"><Column order={productOrder[product.slug]} /><span className="gk-column-label">{product.name}</span></Link>
        </li>)}
        <li className="gk-anta" aria-hidden="true"><span /></li>
      </ul>
      <div className="gk-crepidoma" aria-hidden="true"><span /><span /></div>
    </div>
    <p className="gk-temple-subline">Voice, agents, and inference on your infrastructure.</p>
    <div className="gk-actions is-centered"><Action href="/products">Explore the products</Action><Action href="/contact" variant="secondary">Build with us</Action></div>
  </section>;
}
