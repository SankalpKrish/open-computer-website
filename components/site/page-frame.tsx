"use client";
import type { ReactNode } from "react";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";
import { GreekFrame } from "@/themes/greek/components/frame";
import { StyleSwitcher } from "./style-switcher";
import { useSiteStyle } from "./style-provider";
import { SectionNavigator } from "./section-navigator";
import { DreamFrame } from "@/themes/dream/frame";
import { AthenaFrame } from "@/themes/athena/frame";
// `greek` is the route's page drawn by the Greek theme (themes/greek); the other styles render `children`.
export function PageFrame({ children, greek, dream, athena }: { children: ReactNode; greek?: ReactNode; dream?: ReactNode; athena?: ReactNode }) {
  const { style } = useSiteStyle();
  if (style === "athena") return <AthenaFrame>{athena ?? children}</AthenaFrame>;
  if (style === "dream") return <DreamFrame>{dream ?? children}</DreamFrame>;
  if (style === "greek" && greek) return <GreekFrame>{greek}</GreekFrame>;
  return <div className="website" data-style={style} id="top"><a href="#main-content" className="skip-link">Skip to content</a><StyleSwitcher /><Navigation /><main id="main-content" tabIndex={-1}>{children}</main><FooterSection /><SectionNavigator /></div>;
}
