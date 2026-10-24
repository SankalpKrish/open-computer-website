"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { products } from "@/lib/site-content";
import { productPresentation } from "@/lib/product-presentation";
import { GooeyNav } from "@/components/ui/gooey-nav";
import { ActionLink } from "./design-elements";
import { ProductIcon, ProductVisual } from "./product-visuals";

export function ProductExplorer() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % products.length :
      event.key === "ArrowLeft" ? (index + products.length - 1) % products.length :
      event.key === "Home" ? 0 : event.key === "End" ? products.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return <div className="product-explorer">
    <div className="explorer-controls"><GooeyNav className="rare-product-tabs" role="tablist" aria-label="Explore the Open Computer products" size="sm" radius={8} separation={8} activeColor="var(--spot)" activeLabelColor="var(--spot-ink)" value={selected} onChange={setSelected} items={products.map((product) => ({ label: productPresentation[product.slug].shortName, icon: <ProductIcon slug={product.slug} size={16} /> }))} itemProps={products.map((item, index) => ({ ref: (element) => { tabs.current[index] = element; }, role: "tab", id: `${id}-tab-${index}`, "aria-label": item.name, "aria-controls": `${id}-panel-${index}`, "aria-selected": selected === index, tabIndex: selected === index ? 0 : -1, onKeyDown: (event) => onKeyDown(event, index) }))} /></div>
    {products.map((product, index) => {
      const presentation = productPresentation[product.slug];
      return <div key={product.slug} className={`explorer-panel explorer-${product.slug}`} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={selected !== index} tabIndex={0}>
        <div className="explorer-copy"><h3>{presentation.headline}</h3><p>{presentation.summary}</p><ActionLink href={product.href}>{product.cta}</ActionLink></div>
        {selected === index && <ProductVisual slug={product.slug} />}
      </div>;
    })}
  </div>;
}
