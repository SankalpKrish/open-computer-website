"use client";

import { useState } from "react";
import { services } from "@/lib/site-content";

const FEATURED_COUNT = 4;

export function PartnersGrid({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? services.partners : services.partners.slice(0, FEATURED_COUNT);
  const hidden = services.partners.length - FEATURED_COUNT;

  return (
    <>
      <div
        className={
          compact
            ? "grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            : "grid md:grid-cols-2 gap-4"
        }
      >
        {list.map((partner) => (
          <article
            key={partner.name}
            className={
              compact
                ? "bg-foreground/5 p-6"
                : "border border-foreground/10 bg-black p-8 min-h-[200px]"
            }
          >
            <p
              className={
                compact
                  ? "font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground"
                  : "font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground"
              }
            >
              {compact ? partner.track : `${partner.track} · ${partner.region}`}
            </p>
            <h3 className={compact ? "text-lg mt-2" : "text-2xl font-display mt-3"}>
              {partner.name}
            </h3>
            {compact ? (
              <p className="text-xs text-muted-foreground mt-1">{partner.region}</p>
            ) : null}
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{partner.detail}</p>
          </article>
        ))}
      </div>
      {hidden > 0 ? (
        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          className="mt-8 text-sm border-b border-foreground pb-1"
        >
          {showAll ? "Show fewer" : `Show all ${services.partners.length} partners`}
        </button>
      ) : null}
    </>
  );
}
