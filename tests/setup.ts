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
  notFound: () => {
    throw new Error("notFound");
  },
}));
