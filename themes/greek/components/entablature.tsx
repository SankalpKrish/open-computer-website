"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { brand, nav } from "@/lib/site-content";
import { Bust, Wordmark } from "./mark";
import { Interpunct } from "./ornament";

const links = [
  { name: nav.productsLabel, href: nav.productsHref },
  { name: nav.servicesLabel, href: nav.servicesHref },
  { name: nav.contactLabel, href: nav.contactHref },
];

/** Site header: the lockup from the card, inscribed navigation, an architrave rule beneath. */
export function Entablature() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return <header className="gk-header">
    <div className="gk-header-inner">
      <Link className="gk-lockup" href="/" aria-label={`${brand.name} home`}><Bust /><Wordmark /></Link>
      <button type="button" className="gk-menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="gk-navigation" onClick={() => setOpen(!open)} />
      <nav id="gk-navigation" className={`gk-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
        {links.map((link, index) => <Fragment key={link.href}>
          {index > 0 && <Interpunct />}
          <Link href={link.href} aria-current={pathname?.startsWith(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>{link.name}</Link>
        </Fragment>)}
      </nav>
    </div>
  </header>;
}
