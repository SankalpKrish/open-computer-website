"use client";

import { usePathname } from "next/navigation";
import ScrollProgress, { type ScrollProgressSection } from "@/components/ui/scroll-progress";

const homeSections = [
  { id: "introduction", label: "Introduction" },
  { id: "products", label: "Products" },
  { id: "services-summary", label: "Services" },
  { id: "deployments", label: "In practice" },
  { id: "method", label: "How we build" },
  { id: "faq", label: "Questions" },
  { id: "conversation", label: "Start a conversation" },
];
const sectionsByRoute: Record<string, ScrollProgressSection[]> = {
  "/": homeSections,
  "/products": [
    { id: "introduction", label: "The stack" },
    { id: "product-list", label: "Products" },
    { id: "product-explorer", label: "Explore the system" },
    { id: "conversation", label: "Start a conversation" },
  ],
  "/services": [
    { id: "introduction", label: "Our services" },
    { id: "pilot", label: "The 90-day pilot" },
    { id: "implementation", label: "Implementation" },
    { id: "partners", label: "Partners" },
    { id: "conversation", label: "Start a conversation" },
  ],
};
const productSections = [
  { id: "introduction", label: "The product" },
  { id: "capabilities", label: "Capabilities" },
  { id: "use-cases", label: "In practice" },
  { id: "related-products", label: "Keep exploring" },
  { id: "conversation", label: "Start a conversation" },
];

export function SectionNavigator() {
  const pathname = usePathname();
  const sections = sectionsByRoute[pathname] ?? (/^\/products\/(voice|agent|router)$/.test(pathname) ? productSections : undefined);
  return sections ? <ScrollProgress key={pathname} sections={sections} className="site-section-navigator" aria-label="Page sections" role="navigation" /> : null;
}
