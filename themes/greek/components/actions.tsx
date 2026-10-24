import Link from "next/link";
import type { ReactNode } from "react";

type ActionProps = { href?: string; children?: ReactNode; variant?: "primary" | "secondary" | "inverse" };

/** A drafted ashlar. Primary is painted; secondary is incised marble that takes paint on hover. */
export function Action({ href = "/contact", children = "Start a conversation", variant = "primary" }: ActionProps) {
  return <Link href={href} className={`gk-action is-${variant}`}>{children}</Link>;
}

/** A secondary path cut as an inscription, not a text link. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="gk-text-link">{children}</Link>;
}
