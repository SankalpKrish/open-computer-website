import { Fragment, type CSSProperties, type ReactNode } from "react";

/** The tricolon (⁝), the word divider cut into Greek inscriptions. Drawn, not typed. */
export function Interpunct() {
  return <span className="gk-interpunct" aria-hidden="true" />;
}

/** Items set as one inscription line, divided by interpuncts. */
export function InscriptionLine({ items, className = "" }: { items: readonly ReactNode[]; className?: string }) {
  return <p className={`gk-inscription-line ${className}`}>{items.map((item, index) => <Fragment key={index}>{index > 0 && <Interpunct />}<span>{item}</span></Fragment>)}</p>;
}

/** A Doric triglyph in elevation: the three-grooved block between metopes. */
export function Triglyph({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return <svg className={`gk-triglyph ${className}`} style={style} viewBox="0 0 24 36" fill="none" aria-hidden="true" preserveAspectRatio="none">
    <path d="M.5 .5h23v35H.5zM.5 4.5h23" />
    <path d="M5.5 4.5v31M9.5 4.5v31M14.5 4.5v31M18.5 4.5v31" />
  </svg>;
}

/**
 * Cornice, triglyph frieze and taenia. As in a Doric frieze, a triglyph sits over
 * every column and over every space between, so positions are fractions of the colonnade.
 */
export function FriezeBand({ positions = [0, 1 / 6, 2 / 6, 3 / 6, 4 / 6, 5 / 6, 1] }: { positions?: readonly number[] }) {
  return <div className="gk-frieze-band" aria-hidden="true">{positions.map((at) => <Triglyph key={at} className={at === 0 ? "is-start" : at === 1 ? "is-end" : ""} style={{ "--at": at } as CSSProperties} />)}</div>;
}

/** Steps of a crepidoma, used as rules: each step wider than the one above. */
export function Steps({ className = "" }: { className?: string }) {
  return <div className={`gk-steps ${className}`} aria-hidden="true"><span /><span /><span /></div>;
}
