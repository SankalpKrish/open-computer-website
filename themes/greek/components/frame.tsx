"use client";

import type { ReactNode } from "react";
import { StyleSwitcher } from "@/components/site/style-switcher";
import { gelasio, jost } from "../fonts";
import { Entablature } from "./entablature";
import { Stylobate } from "./stylobate";
import "../tokens.css";
import "../greek.css";

/** The Greek theme's page frame. Pages render inside it as `main`. */
export function GreekFrame({ children, switcher = true }: { children: ReactNode; switcher?: boolean }) {
  return <div className={`greek ${gelasio.variable} ${jost.variable}`} data-style="greek" id="top">
    <a href="#main-content" className="skip-link">Skip to content</a>
    {switcher && <StyleSwitcher />}
    <Entablature />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <Stylobate />
  </div>;
}
