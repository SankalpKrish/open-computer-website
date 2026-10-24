import type { CSSProperties } from "react";
import engraving from "../assets/athena-engraving.png";
import relief from "../assets/athena-relief.svg";
import { brand } from "@/lib/site-content";

// Static imports resolve to { src } in Next and to a plain URL in Vitest.
function assetSrc(asset: string | { src: string }) {
  return typeof asset === "string" ? asset : asset.src;
}

/** The bust from the business card, as engraved. Sharp up to about 80px wide. */
export function Bust({ className = "" }: { className?: string }) {
  return <img className={`gk-bust ${className}`} src={assetSrc(engraving)} width={156} height={163} alt="" aria-hidden="true" decoding="async" />;
}

/** The same bust traced to vector. It takes currentColor and holds at any size. */
export function BustRelief({ className = "" }: { className?: string }) {
  return <span className={`gk-relief ${className}`} style={{ "--gk-relief-src": `url(${assetSrc(relief)})` } as CSSProperties} aria-hidden="true" />;
}

export function Wordmark({ stacked = false }: { stacked?: boolean }) {
  return stacked
    ? <span className="gk-wordmark is-stacked"><span>Open</span> <span>Computer</span></span>
    : <span className="gk-wordmark">{brand.name}</span>;
}

/** Vertical lockup, as printed on the card: bust above the stacked wordmark. */
export function CardLockup() {
  return <span className="gk-card-lockup"><Bust /><Wordmark stacked /></span>;
}
