import type { ReactNode } from "react";
import { Wrap } from "../components/sections";

export function GreekLegal({ title, children }: { title: string; children: ReactNode }) {
  return <section className="gk-legal"><Wrap><h1>{title}</h1><div className="gk-prose">{children}</div></Wrap></section>;
}
