"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { home, products } from "@/lib/site-content";

export function ProductsSection() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-12 h-px bg-foreground/30" />
              {home.productsKicker}
            </span>
            <h2
              className={`text-6xl md:text-7xl lg:text-[96px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {home.productsTitle}
            </h2>
          </div>
          <p
            className={`lg:col-span-5 text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {home.productsBody}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={product.href}
              className={`group border border-foreground/10 p-8 lg:p-10 min-h-[340px] flex flex-col bg-black hover:border-foreground/40 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span className="font-mono text-sm text-muted-foreground">
                {product.code} / {product.kicker}
              </span>
              <h3 className="text-3xl lg:text-4xl font-display mt-6 group-hover:translate-x-1 transition-transform duration-500">
                {product.name}
              </h3>
              <p className="text-muted-foreground mt-4 flex-1 leading-relaxed">{product.oneLiner}</p>
              <span className="text-sm mt-8 text-foreground/70 group-hover:text-foreground">
                {product.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
