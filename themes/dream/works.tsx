"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products, type Product } from "@/lib/site-content";

function WorkPanel({ product, index }: { product: Product; index: number }) {
  return (
    <article
      className="dm-work-panel"
      aria-labelledby={`dm-work-${product.slug}`}
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
      {/* The panel clips a viewport-pinned scene. Adjacent panel edges form the
          horizontal wipe while both product rectangles keep the same position. */}
      <div className="dm-work-pin">
        <div className="dm-work-sticky">
          <div className="dm-work-background" aria-hidden="true">
            <Image src={product.visual} alt="" fill sizes="100vw" />
          </div>
          <div className="dm-work-top">
            <span>(0{index + 1})</span>
            <span>{product.kicker}</span>
            <span>Open Computer / Products</span>
          </div>
          <div className="dm-work-title" aria-hidden="true">
            {product.name}
            <span>{product.name}</span>
          </div>
          <div className="dm-work-center">
            <Link
              href={product.href}
              className="dm-work-image"
              aria-label={`Explore ${product.name}`}
            >
              <Image
                src={product.visual}
                alt={`${product.name} — ${product.kicker.toLowerCase()}`}
                fill
                sizes="(max-width: 700px) 92vw, 68vw"
              />
              <span className="dm-work-open">
                Explore product
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </Link>
            <div className="dm-work-meta">
              <h3 id={`dm-work-${product.slug}`}>
                <Link href={product.href}>{product.name}</Link>
              </h3>
              <p>
                {product.kicker}
                <br />
                {index === 0
                  ? "Listen. Speak. Stay in the conversation."
                  : index === 1
                    ? "Your own AI. Your own infrastructure."
                    : "One API. Every model."}
              </p>
              <span>0{index + 1} / 03</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function DreamWorks() {
  return (
    <div className="dm-works">
      {products.map((product, index) => (
        <WorkPanel key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}
