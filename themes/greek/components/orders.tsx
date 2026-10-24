import type { Product } from "@/lib/site-content";

/*
  The three Greek orders, drawn as engraved elevations on a 600-unit height.
  Athena Voice is Ionic: the order of Athena's Erechtheion, with the volute's ear-like coil.
  Open Computer Agent is Doric: the Parthenon's load-bearing order, plain and working.
  Inferno Router is Corinthian: one column whose acanthus branches many ways.
  Strokes do not scale, so every size reads as a hairline engraving.
*/

export type Order = "ionic" | "doric" | "corinthian";
export const productOrder: Record<Product["slug"], Order> = { voice: "ionic", agent: "doric", router: "corinthian" };
export const orderName: Record<Order, string> = { ionic: "Ionic", doric: "Doric", corinthian: "Corinthian" };

const H = 600;
const r = (value: number) => Math.round(value * 100) / 100;

/** Column outline and fluting on a tapering shaft with entasis, light from the left. */
function shaft(c: number, yTop: number, yBottom: number, rt: number, rb: number, flutes: number, fillets: boolean) {
  const ym = (yTop + yBottom) / 2;
  const swell = rb * 0.06;
  const line = (s: number) => `M${r(c + rb * s)} ${yBottom}Q${r(c + ((rb + rt) / 2 + swell * 2) * s)} ${ym} ${r(c + rt * s)} ${yTop}`;
  const outline = [line(-1), line(1)];
  const arrises: string[] = [];
  const shade: string[] = [];
  const step = 360 / flutes;
  for (let k = 0; k < flutes; k += 1) {
    const deg = step / 2 + k * step - 90;
    if (deg <= -88 || deg >= 88) continue;
    const s = Math.sin((deg * Math.PI) / 180);
    if (fillets) { arrises.push(line(Math.sin(((deg - 2.4) * Math.PI) / 180)), line(Math.sin(((deg + 2.4) * Math.PI) / 180))); }
    else arrises.push(line(s));
    // Engraver's shade on the turning side: an extra cut inside each flute.
    if (deg > 25 && deg + step / 2 < 88) shade.push(line(Math.sin(((deg + step / 2) * Math.PI) / 180)));
  }
  return { outline, arrises, shade };
}

/** An Archimedean volute: from the canalis at the top, coiling inward to the eye. */
function volute(cx: number, cy: number, r0: number, r1: number, turns: number, dir: 1 | -1) {
  const points: string[] = [];
  const steps = Math.round(turns * 48);
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const angle = -Math.PI / 2 - dir * t * turns * Math.PI * 2;
    const radius = r0 + (r1 - r0) * t;
    points.push(`${r(cx + radius * Math.cos(angle))} ${r(cy + radius * Math.sin(angle))}`);
  }
  return `M${points.join("L")}`;
}

/** Attic base: upper torus, scotia, lower torus. */
function atticBase(c: number, y: number, rb: number) {
  const upper = rb + 4;
  const lower = rb + 10;
  return [
    `M${c - rb} ${y}h${rb * 2}`,
    `M${c - upper + 5} ${y + 2}h${(upper - 5) * 2}a5 5 0 0 1 0 10h${-(upper - 5) * 2}a5 5 0 0 1 0-10z`,
    `M${c - rb + 2} ${y + 12}q4 6 0 12M${c + rb - 2} ${y + 12}q-4 6 0 12M${c - rb + 2} ${y + 15}h${(rb - 2) * 2}`,
    `M${c - lower + 8} ${y + 24}h${(lower - 8) * 2}a8 8 0 0 1 0 16h${-(lower - 8) * 2}a8 8 0 0 1 0-16z`,
  ];
}

/** An acanthus leaf in elevation, its tip curling forward. */
function leaf(x: number, base: number, tip: number, w: number) {
  const h = base - tip;
  const half = w / 2;
  return [
    `M${r(x - half)} ${base}C${r(x - half)} ${r(base - h * 0.55)} ${r(x - half * 0.8)} ${r(tip + h * 0.22)} ${r(x - half * 0.3)} ${r(tip + 3)}Q${x} ${r(tip - 4)} ${r(x + half * 0.3)} ${r(tip + 3)}C${r(x + half * 0.8)} ${r(tip + h * 0.22)} ${r(x + half)} ${r(base - h * 0.55)} ${r(x + half)} ${base}`,
    `M${x} ${base}V${r(tip + 4)}`,
    `M${r(x - half * 0.7)} ${r(base - h * 0.3)}Q${r(x - half * 0.3)} ${r(base - h * 0.45)} ${x} ${r(base - h * 0.62)}M${r(x + half * 0.7)} ${r(base - h * 0.3)}Q${r(x + half * 0.3)} ${r(base - h * 0.45)} ${x} ${r(base - h * 0.62)}`,
  ];
}

type Drawing = { width: number; parts: string[]; shade: string[] };

function doric(): Drawing {
  const W = 132; const c = W / 2;
  const s = shaft(c, 50, H, 40, 50, 20, false);
  const parts = [
    `M${c - 61} 0h122v14h-122z`,
    `M${c - 57} 14Q${c - 57} 31 ${c - 41} 38H${c + 41}Q${c + 57} 31 ${c + 57} 14`,
    `M${c - 41} 41.5h82M${c - 40.5} 44.5h81M${c - 40.5} 47.5h81`,
    `M${c - 40} 64h80`,
    ...s.outline, ...s.arrises,
  ];
  const shade = [...s.shade, `M${c + 30} 33Q${c + 44} 28 ${c + 50} 17M${c + 21} 35.5Q${c + 36} 31 ${c + 43} 18`];
  return { width: W, parts, shade };
}

function ionic(): Drawing {
  const W = 128; const c = W / 2;
  const s = shaft(c, 62, 556, 28, 33, 24, true);
  const eggs = [-18, 0, 18].flatMap((dx) => [
    `M${c + dx - 7} 18Q${c + dx - 7.5} 34 ${c + dx} 34Q${c + dx + 7.5} 34 ${c + dx + 7} 18`,
    `M${c + dx - 4.2} 20.5Q${c + dx - 4.6} 30.5 ${c + dx} 30.5Q${c + dx + 4.6} 30.5 ${c + dx + 4.2} 20.5`,
  ]);
  const darts = [-27, -9, 9, 27].map((dx) => `M${c + dx} 19V31M${c + dx - 2} 28l2 3 2-3`);
  const beads = Array.from({ length: 8 }, (_, i) => `M${r(c - 24.5 + i * 7)} 55.5a2.6 2.3 0 1 0 0.01 0`);
  const parts = [
    `M${c - 41} 0h82v7h-82zM${c - 41} 4h82`,
    `M${c - 44} 8H${c + 44}`,
    `M${c - 36} 18Q${c} 23 ${c + 36} 18`,
    volute(c - 44, 31, 23, 2.5, 2.4, 1), volute(c - 44, 31, 18, 1.5, 2.2, 1),
    volute(c + 44, 31, 23, 2.5, 2.4, -1), volute(c + 44, 31, 18, 1.5, 2.2, -1),
    `M${c - 47} 31a3 3 0 1 0 6 0a3 3 0 1 0-6 0M${c + 41} 31a3 3 0 1 0 6 0a3 3 0 1 0-6 0`,
    ...eggs, ...darts,
    `M${c - 29} 52h58M${c - 28.5} 59.5h57`, ...beads,
    ...s.outline, ...s.arrises,
    ...atticBase(c, 556, 33),
  ];
  return { width: W, parts, shade: s.shade };
}

function corinthian(): Drawing {
  const W = 124; const c = W / 2;
  const s = shaft(c, 100, 556, 25.5, 30, 24, true);
  const lower = [[-42, 22], [-26, 26], [0, 28], [26, 26], [42, 22]].flatMap(([dx, w]) => leaf(c + dx, 96, 62, w));
  const upper = [[-37, 22], [-13, 24], [13, 24], [37, 22]].flatMap(([dx, w]) => leaf(c + dx, 74, 40, w));
  const parts = [
    `M${c - 58} 0H${c + 58}M${c - 58} 0Q${c - 53} 5 ${c - 53} 10H${c + 53}Q${c + 53} 5 ${c + 58} 0M${c - 55} 5H${c + 55}`,
    `M${c} 12a4.5 4.5 0 1 0 0.01 0M${c - 7} 12.5h14M${c} 6v13`,
    `M${c - 46} 10Q${c - 34} 60 ${c - 26} 98M${c + 46} 10Q${c + 34} 60 ${c + 26} 98`,
    volute(c - 47, 20, 9, 1.5, 1.6, 1), volute(c + 47, 20, 9, 1.5, 1.6, -1),
    volute(c - 12, 22, 6, 1, 1.4, -1), volute(c + 12, 22, 6, 1, 1.4, 1),
    `M${c - 47} 29Q${c - 38} 40 ${c - 33} 52M${c - 12} 28Q${c - 18} 40 ${c - 22} 52M${c + 47} 29Q${c + 38} 40 ${c + 33} 52M${c + 12} 28Q${c + 18} 40 ${c + 22} 52`,
    ...upper, ...lower,
    `M${c - 27} 96h54M${c - 26.5} 100h53`,
    ...s.outline, ...s.arrises,
    ...atticBase(c, 556, 30),
  ];
  return { width: W, parts, shade: s.shade };
}

const drawings: Record<Order, () => Drawing> = { doric, ionic, corinthian };
const cache = new Map<Order, Drawing>();
function drawing(order: Order) {
  if (!cache.has(order)) cache.set(order, drawings[order]());
  return cache.get(order)!;
}

/**
 * One column of the given order. `crop="capital"` frames the capital and the head
 * of the shaft for use as a product mark.
 */
export function Column({ order, crop = "full", className = "" }: { order: Order; crop?: "full" | "capital"; className?: string }) {
  const { width, parts, shade } = drawing(order);
  const height = crop === "capital" ? 150 : H;
  return <svg className={`gk-column gk-order-${order} ${className}`} viewBox={`-2 -2 ${width + 4} ${height + 3}`} fill="none" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
    <g className="gk-column-lines">{parts.map((d, index) => <path key={index} d={d} pathLength={1} />)}</g>
    <g className="gk-column-shade">{shade.map((d, index) => <path key={index} d={d} pathLength={1} />)}</g>
  </svg>;
}

export function ProductOrder({ slug, crop = "capital", className = "" }: { slug: Product["slug"]; crop?: "full" | "capital"; className?: string }) {
  return <Column order={productOrder[slug]} crop={crop} className={className} />;
}
