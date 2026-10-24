"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { athena } from "@/lib/athena-content";
import { Curtain, Eyebrow, Pill } from "./components";
import { Lighting } from "./lighting";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our work", href: "/#our-work" },
  { name: "Technology", href: "/technology" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
];

export function AthenaFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <div
      className={`athena-site${pathname === "/products/agent" || pathname === "/solutions" ? " at-silver" : ""}`}
      data-style="athena"
      id="top"
    >
      <a className="at-skip" href="#main-content">
        Skip to content
      </a>
      <header
        className={`at-header${scrolled || open ? " at-header-solid" : ""}`}
      >
        <Link className="at-announcement" href="/pricing">
          Athena by OpenComputer <span aria-hidden="true">·</span> ₹4.5 a
          minute, all-in <span aria-hidden="true">↗</span>
        </Link>
        <div className="at-nav">
          <Link
            className="at-wordmark"
            href="/"
            aria-label="Athena Research home"
          >
            Athena Research
          </Link>
          <nav className="at-desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="at-nav-contact">
            Talk to our team
          </Link>
          <button
            ref={menuButton}
            className="at-menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="athena-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>
        {open && (
          <nav
            id="athena-mobile-nav"
            className="at-mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ...navigation,
              { name: "Implementation", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.name}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="at-footer">
        <div className="at-footer-intro">
          <Eyebrow>Athena Research Lab</Eyebrow>
          <h2>
            Research, made useful.
            <br />
            In the real world.
          </h2>
          <div>
            <p>
              Better conversations. Capable agents.
              <br />
              Built around the work that matters to you.
            </p>
            <Pill href="/contact">Build with us</Pill>
          </div>
        </div>
        <div className="at-footer-links">
          <div className="at-footer-brand">
            <Link className="at-wordmark" href="/">
              Athena Research
            </Link>
            <p>
              Natural conversation.
              <br />
              Connected action.
            </p>
            <span className="at-mono">By OpenComputer</span>
          </div>
          <div>
            <h3>Products</h3>
            <Link href="/products/voice">Athena Voice</Link>
            <Link href="/products/agent">Athena Agent</Link>
            <Link href="/products/router">Inferno Router</Link>
          </div>
          <div>
            <h3>Put it to work</h3>
            <Link href="/#our-work">Our work</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/services">Implementation</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div>
            <h3>The lab</h3>
            <Link href="/technology">Technology</Link>
            <Link href="/#questions">Questions</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="at-footer-bottom">
          <span>© {new Date().getFullYear()} Athena · OpenComputer</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <Curtain
          className="at-footer-curtain"
          silver={pathname === "/products/agent" || pathname === "/solutions"}
        />
      </footer>
      <Lighting />
    </div>
  );
}
