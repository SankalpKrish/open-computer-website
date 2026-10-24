"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, Monitor, X } from "lucide-react";
import { brand, contact, products } from "@/lib/site-content";
import { StyleSwitcher } from "@/components/site/style-switcher";
import "./dream.css";

export function DreamFrame({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [menuOpen]);

  return (
    <div className="dream" data-style="dream" id="top">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="dm-header">
        <div className="dm-nav-inner dm-container">
          <Link
            href="/"
            className="dm-wordmark"
            aria-label="Open Computer home"
          >
            <Monitor size={19} strokeWidth={1.5} aria-hidden="true" />
            Open Computer
          </Link>
          <nav aria-label="Main navigation" className="dm-nav-desktop">
            <Link
              href="/products"
              aria-current={
                pathname.startsWith("/products") ? "page" : undefined
              }
            >
              Products
            </Link>
            <Link
              href="/services"
              aria-current={pathname === "/services" ? "page" : undefined}
            >
              Services
            </Link>
            <Link href="/#our-work">Our work</Link>
            <Link href="/#how-it-works">How we work</Link>
            <Link href="/#questions">FAQs</Link>
          </nav>
          <Link className="dm-nav-contact" href="/contact">
            Let’s talk
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <button
            ref={menuButton}
            className="dm-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="dm-mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="dm-mobile-nav"
            className="dm-mobile-nav"
            aria-label="Mobile navigation"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/#our-work">Our work</Link>
            <Link href="/#how-it-works">How we work</Link>
            <Link href="/#questions">FAQs</Link>
            <Link href="/contact">Start a conversation ↗</Link>
          </nav>
        )}
      </header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="dm-footer dm-container">
        <div className="dm-footer-top">
          <div className="dm-footer-brand">
            <Link href="/" className="dm-wordmark">
              <Monitor size={19} strokeWidth={1.5} aria-hidden="true" />
              {brand.name}
            </Link>
            <p>
              AI-native product studio.
              <br />
              Engineering lab. Your team.
            </p>
            <a href={`mailto:${contact.email}`}>
              {contact.email}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div>
            <h2>Products</h2>
            {products.map((product) => (
              <Link key={product.slug} href={product.href}>
                {product.name}
              </Link>
            ))}
          </div>
          <div>
            <h2>Explore</h2>
            <Link href="/services">Services</Link>
            <Link href="/#our-work">Our work</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h2>Company</h2>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <div className="dm-footer-bottom">
          <span>{brand.copyright}</span>
          <span>Your own AI. Your own infrastructure.</span>
        </div>
        <details className="dm-style-picker">
          <summary>Explore website styles</summary>
          <StyleSwitcher />
        </details>
      </footer>
    </div>
  );
}
