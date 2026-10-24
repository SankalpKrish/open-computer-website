import { Gelasio, Jost } from "next/font/google";

// The card's wordmark is Georgia Pro. Visitors with Georgia Pro or Georgia
// installed use it; everyone else gets Gelasio, drawn to Georgia's metrics.
// Neither face preloads, so other site styles never pay for them.
export const gelasio = Gelasio({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-gelasio",
  display: "swap",
  preload: false,
});

// Inscription capitals: monoline geometric forms, close to Attic letter-cutting.
export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  preload: false,
});
