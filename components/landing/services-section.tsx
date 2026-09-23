"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { home, services } from "@/lib/site-content";
import { PartnersGrid } from "@/components/site/partners-grid";

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-12 h-px bg-foreground/30" />
              {home.servicesKicker}
            </span>
            <h2
              className={`text-6xl md:text-7xl lg:text-[96px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {home.servicesTitle}
            </h2>
          </div>
          <p
            className={`lg:col-span-5 text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {home.servicesBody}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-10">
          {services.lines.map((line) => (
            <article key={line.id} className="border border-foreground/10 p-8 bg-black">
              <p className="font-mono text-xs text-muted-foreground">{line.product}</p>
              <h3 className="text-2xl font-display mt-3">{line.name}</h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{line.summary}</p>
            </article>
          ))}
        </div>

        <PartnersGrid compact />

        <Link href="/services" className="inline-block mt-12 text-sm border-b border-foreground pb-1">
          View services →
        </Link>
      </div>
    </section>
  );
}
