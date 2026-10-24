import type { Metadata } from "next";
import { GreekFrame } from "@/themes/greek/components/frame";
import { GreekSystem } from "@/themes/greek/pages/system";

export const metadata: Metadata = {
  title: "Greek design system",
  description: "Tokens, marks, orders, ornament, and components of the Open Computer Greek theme.",
  robots: { index: false, follow: false },
};

// A living specimen of themes/greek. It always renders in the Greek theme, without the style switcher.
export default function DesignSystemRoute() {
  return <GreekFrame switcher={false}><GreekSystem /></GreekFrame>;
}
