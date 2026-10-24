"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, nav } from "@/lib/site-content";
export function BrandMark() { return <svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M4 8h24v16H4zM9 13h14v6H9z" stroke="currentColor" strokeWidth="2"/><path d="M12 28h8M16 24v4" stroke="currentColor" strokeWidth="2"/></svg>; }
export function Navigation() {
  const pathname = usePathname(); const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { if (!open) return; const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, [open]);
  const links = [{ name: nav.productsLabel, href: nav.productsHref }, { name: nav.servicesLabel, href: nav.servicesHref }, { name: nav.contactLabel, href: nav.contactHref }];
  return <header className="site-header"><Link className="site-brand" href="/" aria-label="Open Computer home"><BrandMark /><span>{brand.name}</span></Link><button type="button" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button><nav id="site-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">{links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname?.startsWith(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>{link.name}{link.href === "/contact" && <ArrowUpRight size={16} aria-hidden="true" />}</Link>)}</nav></header>;
}
