import React from "react";
import type { Metadata } from "next";
import { Albert_Sans, Bitter, Instrument_Sans, Instrument_Serif, JetBrains_Mono, Lora, Petrona, Sora, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { StyleProvider } from "@/components/site/style-provider";
import "./globals.css";
import "./designs.css";
import "./prototypes.css";
import "@/themes/athena/athena.css";
import { athena } from "@/lib/athena-content";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const bitter = Bitter({ subsets: ["latin"], variable: "--font-bitter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const petrona = Petrona({ subsets: ["latin"], variable: "--font-petrona" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const albert = Albert_Sans({ subsets: ["latin"], variable: "--font-albert" });

export const metadata: Metadata = {
  title: {
    default: "Athena Research | Voice AI by OpenComputer",
    template: "%s · Athena Research",
  },
  description: athena.description,
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
  openGraph: {
    title: "Athena Research | Voice AI by OpenComputer",
    description: athena.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${bitter.variable} ${lora.variable} ${petrona.variable} ${sora.variable} ${albert.variable} font-sans antialiased`}
      >
        <StyleProvider>{children}</StyleProvider>
        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
