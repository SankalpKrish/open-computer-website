"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { products, type Product } from "@/lib/site-content";

const presentation = {
  voice: {
    name: "Athena Voice",
    line: "62 languages. 24 voices. Connected action.",
  },
  agent: {
    name: "Athena Agent",
    line: "Your own AI. Your own infrastructure.",
  },
  router: {
    name: "Inferno Router",
    line: "One API. The right model for every step.",
  },
} as const;

function WorkPanel({ product, index }: { product: Product; index: number }) {
  const { name, line } = presentation[product.slug];
  const number = String(index + 1).padStart(2, "0");
  return (
    <article
      className="at-work-panel"
      aria-labelledby={`at-work-${product.slug}`}
      onFocus={(event) => {
        if (
          event.target.matches(":focus-visible") &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
          event.currentTarget.scrollIntoView({
            block: "start",
            behavior: "instant",
          });
        }
      }}
    >
      {/* The previous site's extended sticky scene is clipped by each panel.
          Scrolling moves the boundary, keeping both image frames stationary. */}
      <div className="at-work-pin">
        <div className="at-work-sticky">
          <div className="at-work-background" aria-hidden="true">
            <Image src={product.visual} alt="" fill sizes="100vw" />
          </div>
          <div className="at-work-top">
            <span>({number})</span>
            <span>{product.kicker}</span>
            <span>Athena · OpenComputer</span>
          </div>
          <div className="at-work-title" aria-hidden="true">
            {name}
          </div>
          <div className="at-work-center">
            <Link
              href={product.href}
              className="at-work-image"
              aria-label={`Explore ${name}`}
            >
              <Image
                src={product.visual}
                alt={`${name} — ${product.kicker.toLowerCase()}`}
                fill
                sizes="(max-width: 700px) 92vw, (max-width: 1100px) 80vw, 68vw"
              />
              <span className="at-work-open">
                Explore product <span aria-hidden="true">↗</span>
              </span>
            </Link>
            <div className="at-work-meta">
              <h3 id={`at-work-${product.slug}`}>
                <Link href={product.href}>{name}</Link>
              </h3>
              <p>
                {product.kicker}
                <br />
                {line}
              </p>
              <span>
                {number} / {String(products.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function AthenaWorks() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!root.current) return;
    const panels = [
      ...root.current.querySelectorAll<HTMLElement>(".at-work-panel"),
    ].map((panel) => ({
      panel,
      title: panel.querySelector<HTMLElement>(".at-work-title")!,
      width: 0,
      titleWidth: 0,
    }));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      disposed = false;

    function paint() {
      frame = 0;
      if (disposed) return;
      // Read every panel before writing transforms, keeping scrolling free of
      // layout work. The title crosses the viewport over the same scroll range
      // in which the panel's horizontal wipe passes its vertical centre.
      const positions = panels.map((item) => {
        const rect = item.panel.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight / 2 - rect.top) / rect.height),
        );
        return {
          ...item,
          x: -item.titleWidth + progress * (item.width + item.titleWidth),
        };
      });
      for (const item of positions) {
        if (reduced.matches)
          item.title.style.removeProperty("--at-work-title-x");
        else
          item.title.style.setProperty(
            "--at-work-title-x",
            `${item.x.toFixed(2)}px`,
          );
      }
    }
    function schedule() {
      if (!frame && !disposed) frame = requestAnimationFrame(paint);
    }
    function measure() {
      for (const item of panels) {
        item.width = item.panel.clientWidth;
        item.titleWidth = item.title.offsetWidth;
      }
      schedule();
    }
    const observer = new ResizeObserver(measure);
    observer.observe(root.current);
    for (const item of panels) observer.observe(item.title);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    reduced.addEventListener("change", schedule);
    document.fonts.ready.then(() => {
      if (!disposed) measure();
    });
    measure();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      reduced.removeEventListener("change", schedule);
      for (const item of panels)
        item.title.style.removeProperty("--at-work-title-x");
    };
  }, []);
  return (
    <div className="at-works" ref={root}>
      {products.map((product, index) => (
        <WorkPanel key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}
