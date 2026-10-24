"use client";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { services } from "@/lib/site-content";
export function PartnersGrid({ compact = false }: { compact?: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? services.partners : services.partners.slice(0, 4);
  return <><div className={`partner-records ${compact ? "compact" : ""}`} id="partner-records">{list.map((partner) => <article key={partner.name}><h3>{partner.name}</h3><p>{partner.detail}</p></article>)}</div><button type="button" onClick={() => setShowAll(!showAll)} className="text-button" aria-expanded={showAll} aria-controls="partner-records">{showAll ? "Show fewer" : `Show all ${services.partners.length} partners`}{showAll ? <ArrowUp size={16} aria-hidden="true" /> : <ArrowDown size={16} aria-hidden="true" />}</button></>;
}
