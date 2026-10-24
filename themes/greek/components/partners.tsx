"use client";

import { useState } from "react";
import { services } from "@/lib/site-content";

/** Partner records, inscribed like a list of dedicators. The first four show by default. */
export function PartnerRecords() {
  const [showAll, setShowAll] = useState(false);
  const list = showAll ? services.partners : services.partners.slice(0, 4);
  return <>
    <div className="gk-records" id="gk-partner-records">{list.map((partner) => <article key={partner.name}><h3>{partner.name}</h3><p className="gk-record-meta">{partner.region} · {partner.track}</p><p>{partner.detail}</p></article>)}</div>
    <button type="button" className="gk-text-button" onClick={() => setShowAll(!showAll)} aria-expanded={showAll} aria-controls="gk-partner-records">
      {showAll ? "Show fewer" : `Show all ${services.partners.length} partners`}
    </button>
  </>;
}
