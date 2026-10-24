import { vi } from "vitest";
import { createElement, type ReactNode } from "react";

vi.mock("next/link", () => ({
  default: function Link({
    href,
    children,
    ...props
  }: {
    href: string;
    children: ReactNode;
  }) {
    return createElement("a", { href, ...props }, children);
  },
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound");
  },
}));

// next/font is a compile-time transform; outside Next it resolves to class names only.
vi.mock("next/font/google", () => {
  const font = () => ({ className: "", variable: "", style: { fontFamily: "" } });
  return { Gelasio: font, Jost: font };
});
