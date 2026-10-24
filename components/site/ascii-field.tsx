"use client";

import { Fragment, useEffect, useRef, type ReactNode } from "react";

const BONSAI = `                                                                                                                    .
                                                           :-                                                       .-:
                                                           -*-*%*           :-.                                    -: ++-=:
                                                          .-=*+#*+-      -  *%*-      .:===                      ..*++%#*##
                                                    .-##=:=%*+###*%- .::-=  ==+#*-.=*+%%%*- .-+=                -###%%%%##*
                                                  :=#%%#==-*@%%@***=+*%*%*=*+-***%%@%@%*+*+==*#%*#*-             :+#%*#%%@*=-
                                                 -+#@%+#***+*##**+*+****#%*+#%@#*#%%#****%%*+:+#####=:==:     ... -++*#%%%%##=-:==.
                                               -+#%%*+*%##**#@###=+*+++**+====+-*#**%##%%#= +*#%%%*#+*%@+   :*%#*+++=+#%##@@#**###++-.
                                             .=%@#*#***%%####%%###%#**%****=...-#++######===*%%#**##%#%*:  :=%%%@#%@#*%%*#%%#%%%#*%@%%%*=.
                                             .+@@%%#%%%@%#%@%%@@*=+=-*%%***=#=:-*..-=+##--+#%%*##*#=...   -*@##%#*#*##%%#*+*%%%%##%##%%%%=.
                                              *%#@##@##%@++*==#===-=:-===-+++##%*====#*++===*+***##+     :+%@%%#***++*#%#%#*%%####@@%#++*=-+=
                                         ::   .::--=+%@#*=---++-**+.  =::++=*#*##%#++*+*+*#=#**##%+      .=+%%*+@@%%%%*%%%%#%%##%##%%%**#+*@#.
                                         #=:        .-++=======#%+=-=*#+.  -#%***##%%+#**%%*#*#%#+=++-:.  -=*%+*#**#%%###%@+###+**%#=#*%+-%#.
                                        .%.:.  =#*-.:--:---=:.-%#++*+#@*+-  =%#*#*###%#*#%=-*%##%*#@#%*+-:=+%%**++===+%#%*+*%#*++====*%*%+=-        .:.
                                         -#::.=**++++:::-:. .+**%##%##%#++=-=**##*%%*####-.:+%%@#%%%%%*#%*=*#++*%##*%%#*+**##*+##%*-+%*+-++*+-::-===::+*:
                                          -%-+*:=*-.:::.   :+#@%%%%%%@%%@%###+***###+#%%*:  .-===*%@%#@%%@####+*%#%%%***##*####*%*+#+*##+: .:.  ...   -%+
                                           :#@*==+-:+**%*=*%##%%%@@%#@#*%%*#**#%*#*#%#+*%=     -+-+@%#%##@%**%@%%@@%%*++#####%#+*##%#%@%#:.=-:=-::::---:
                                             =%*=+*%@@%%+=#@%#@%##%@%%@%%%###++#%==*#***+=::-+*+*##%#+*####*##%#**#@@%@*+%*+%###%%%%%#=*##+:=*.
                                              +@%+#%#@**++%%#*#*#%#%#%@%###%@*=#**:+##%+:-+%%#++%%*+**#+-#%%%#+---*#%**+=+=-+*%%%**@#**%%*+:=*.   . .:.  :==::
                                              .%%=*#++-=+=#%####%%*+**##@%@%+-:=**##*++=*@%**=+***#%#***#%#%*%*-: :+#**##*++=%#%@%*#%%%%#**++##*+=***##+=+=*#%= :--*==:
                                            .-*%=+%+==:=+*****#%*++++=+##%%*=-:-===+*-**%%##**%%##+**++%%##%%#-    =++%%%*#%*%%###*#@%%#*#%*#*=#@*-=***#+=+*#%#+@%*####+
                                         -+#*+@#+%+===:==%#===+#==+%#=+#@@**+====+=+++%*#%%@%%@%%#==*-.=#*%+=:      :+%%#+++++++*****#%%*##%****%@*##+*#*%####%**%##%%%+
                                       .=*@%%%%=+#===+*-=++=============#*+==..==*##*#%##@%*=:.-#@@*-   -=#@#.       =#@*+===+++++=::-++:+#%#%*+%@@#*#%##@%+#@@#*#==+++-
                                      .=#%##@*+***==+%%+===***##**+#*=+..:::....=+**+=+*##*+--:. ::       -+.         -%+--- :::-=.    .:.#%##+#*#%@=#@%#***%%*#+...::-=#%*+:   ..
                                      .=%%#*#*#%%=+=+*+==*+#@@%*%#+%#*+==.  ::  ==.-=-.-**===+++-                     =#+-:     .:  .-=+==*#*#+*###@#+#@#*##*##+#-.    .*#*%%=--*%*:
                                      .==#%##@%%*===+#%+=#@@%@%#%##%%%+==-..:.:-+=...-:-*=:.:-+++=                  .=*+=-           .+%+*#+***+*#%%**#%%#%#+##+#=:     .+:=#%@**%@*-
                                    .:===+@@@@%#*+++=-===+%@%%##%#%#*@%++++#%*+%@%*#*-:-=:   ..=--=-              :=++= .   ..        =**#**+#***%%**%@%*@@%%@**%+=:  .*++=--+**+*%%*-
                                  .-===+++#@@##*+*======+#@%#%#%%#@#+@@*****%=:=+*%#**=:==-:. . :-:-=:.        .-===:.     ::        .#@%#*=#####%%#**#%=*%@@%%%#%%*:=+*#+==-=++#@##@+:
                                :-=+##%@%%**%+===+=====*%@%%#%###*+**##***=-++    .  ...:+***-      .:::    .-.:-:.       :.          .-=*+=%%**#+++=%%%%++#@*#%**%%%###+*#::##+=*%*%#*-
                            ..:=+++*@@@@%#*++++++==+==*%%#%%%%%#****#%**++=  ++           -***=     ..  : .:*- :.       .:.             +*+%+%##**===#%#***#%%#%*+%@@%+#%#==#*:  .+**#%#.
                          -*#*+=*#%@@%%%%*==++*%%*****++#%*#%######%@#==*+=-.==            :+#*-    ..   -+*+...     ..:.                   -:=%##%+==-=*@@%*%%%%++*++-:.  -%-    .++*+:
                         =+%@**%%%@%##*#%=====+%%@%+##*%@##*####@@%##+=+*+-.:-=:             -#=:        ==- :  .:-:-:.                     .=##%%*:   .-=+===+%*+*#%-
                      .:-=+@#*@@%##*++**%##%#+++#%###*#%%%%%%*#%%%####+-.+=  :.            ..:#*+-      .-+:...-=-+=.                        .:::.           :+#%#%#+
                    .-+*###*=+*+****##%%%%#**%%**##*#####**##+##%###%%=--=+==#%=       :--===+##++-      -+**-++*=:                                             .:.
             ..   .:==%@@#+++++*%#@%**###*+==**+**+###%%%#=*%#%**%@#*++==+%##*%*+=.   .*=+=:-=*++-=      .=+**++=
          .=*##**==+*%%#++*#*++@@%%#*++*+++#**+=+=+*%%%#*%%%%#****+==*+===#%####%@-   #+.-:.  :+-:=:     :--=*=.
         .***###@#+%%##**#+#%#*#%@%#*+**+=#@#*+===*###%%%%@#*++*+=-+#@#=.:+#%#*#@#.  +%--=: :   .  .     .+==-
          .+******#*==+++=++=+#@%%%##%%#%#**#*++==+##*%**#%%%*+- :-.:-:   :=*++*=   -@#**-:.              =%-
           *%#%%#@#+==++==+*##@%%%**@@%%%#*#@#+++++#%#%+=+*%%%=. .=       :#%**=    +@*##   ....:        :+:
           :::**#%+====*#**#%@#*#####@%%###%@#+#####**#*===+=:    -.      :+#*++    =@#+#=-:-:...:::. .:--
            .=====++=+=#%#*#*+****++#@@%#%@%%%%#**##+##+====-:.   .:                +#%#+##+--:.::==+*-.
           -*===*%@#*#=**##*+*%#*%#%%#+==#@%%#%%+=****#+=*#+=.:-:                   .*##%#%#+==-::--=#*-
      :===#*=+=*@##+=#@@%**##%@#%#%*=====*@@#%@#=*@%##@%*#@%*= .-                    -%%#%%*#*++-:. .:+##-
     :+%@#*+==+%@%****%%**%%#+#%@#+===-.=+##@***=*@@##@#++##+.                        -#*%%#+=%+.  .-::=##.
     :=#@@*+#%*+*@#***%%%#*+===+##+-.   -*==+===#@@@##%====-.                          .#+%%#.:*+.  .+=:+#=
      :=+%#+#@+=+%%#%#**%@*+=:..-=. .-:     .-==#%%##***+=.                             :**%@%=-++    *=-*#-
         ...:-:::-==+:-+#@#=    -  .*#%=      :==+%%%##%#-                               :*%%%#+-*:.. -*==%%:
                       .:-:        *@#+:       .-=+**%#%#:                                :%@@%** -.:  =--*%#:
                                   .+*+          -*@%*##-                                  +%@%#:   :.:+-==###.
                                    :%@@:         -*#=:                                    =#%%#:     -*==*###:
                                     .::                                                  :##%%=       =#-=###-
                                                                                         -%#%#%= -.    .++-***:
                                                                                        -%%####**-  :. .=+-**+
                                                                                      .+%%+*##+*+  .=.  -+.==*
                                                                                    .+#%*.=#+==#:.  -:  -=-:=+
                                                                                  .=#*+:.-+=++*+.  .-.  .-::=.
                                                                               .-+%@#*-.:. :-*=         .::.
                                                                        ..:-=+*#*****:.. .::::        .:::
                                                                    :=*#*+#=++-:----:.:.            ..--
                                                                 :+**%#*-+- .    .   .            ...::
                                                               .=@%++===+=                       ::
                                                              -+%@*+-+=:                      ...           .:--::..
                                                             :+%@*+#+-     .                ..          .=*%%@@%%%%%#=.
                                                             :*@**#=:  :...     .  .. .               .+%@%*##*++##*%%#+
                                                             .*%#*==. :=:: .:..--:-=-:..            :*%@%-#*#+++=*-.=**%*
                                                              =@%-=. =++:   .   .:--:.            :*%%*+-=++=.--=*..=**#@.
                                                              :@+::.=*+-       :.-==--:-:..    .:*%#+-..--:*: : .++*=+##@-
                                                               ##+::-*-        :--==+=-====:..:=***-.-=: .=. .:..-=-=*##%-
                                                               =%++.=+.      . ...--==+==+=:   .... --   :. :.       .:=*+
                                                                #=:+=+-:.    .::-:........--.       .   .  .        .::===.
                                                                :#+*+++- :    .....       .:.                      .:: +:%-
                                                                 -##+**+:      . . ..       .                       .- +-%+
                                                                  .#*=-.:.                                      :=: .= .=+*
                                                                    =+--==:                                     ::+=:-.*++#         .. ..  ...
                                                                     .-**:--.                                   .:=++=.+*=#=:--=++++++++*+++++++-:
                                                                        -+=--:                                   .-==*+=*+*#===+++=========+====++*=:.
                                                                          -*++. - .-:                              -+=*##***:====+++++++=====++===+#+++=:
                                                                           +#+*=:: .-  -:.                         :+=++++=-=--===-==-=======-===++=++===.
                                                                           =@+#*=.:.+.==                        .::-==--.:-.:---=-:-=-:-=--===*+-++=-=+=.-
                                                                           =@#*=+-:=+--==..                 ...:::-.  .....::..::::-=-::::---++##+=+-:-*.=-
                                                                           .@%*:=*=-=**:.:  .            ..-...::...:    ::::..  ::---=-..-=-=-:=*+=-..-==*
                                                                           *%#*-=#*=+#+   -++=..    . ..-::::.:..         .....  ..:--+=.  :-:=+-+*=-:  .=*:
                                                                     :.:=--###*+-#*=+#:  :##*+   ..---==-.:-:     .                 ::--:.:..:.:+*++=+*-  =+
                                                              -==--=++=++===+#**+**-.*:  ====-.--:=:.::-==-.  .  ...  .                .:-:.-:: :=+++=#*:-+*.
                                                           .-+*==+*+==+**====++%#-=- +  -*.-=+++::-::.:-=:.::::. ...   .                 .. :--:= :-:=+++=++-
                                                       .:-=**+=*#@%=++=+=======+#::.-+:-#==++-:---.. :=:--==-  ..:                           -: -  :=-  :..:--
                                                     :=+*++===*##++==+=:-===--=--+-.=%#+++++*==:...::==--.                                   :+:    ..:-:+.  :-
                                                    :*+++=+*##+==+++*++****+===+*%++*++++=+%#@+.--====.  .                                    ==       ==-- :+-
                                                  :=++*#=+*%#*++##%%*=+@%%%*==++++++=++---==+-::.-=:-..:-.  ..                               .-.-:      =-...-.
                                              .:#%%*#%@%%*++**#%%%#**+*#++===-:===++==::=-:.  .:.-: ...-. ...                                .:       .:=-    :
                                       :+:.:*##%%@@%%%@%%@++%@%#*++-:=--..-:--+==**+:=--::.... .....:--         .-+..::                       ..      -:..-   ..
                                   .:-=+###**+#%%#*###%##*+++#*-:... :..:..--=-::-.  ....=-..  ::-..=::.         :++.       :=   .             .-.     :--=.   :
                                  -+++===+=--=++=-==+++===++=-:.      .-=---.   :- -=--::.    ::=: ..           .  ..        -:   .         .-: ..       -:-.:  :
                                -=*=--::+- :==-::-=++++:=+==-.-      :-...      :-:-..                          .:-           ==              -:         -*++-  ::
                              .=+++=-...-.-+-:-=+-=+==-.:=-.       :-=:         ::.                .             .--:.        :--. :=.                  .-==++--:=.
                             .+:.-+.-:  ===. .======+=.  .        .--.            -.             ..              .=*++=-:                               .:=-=+=-+**-`;

const PICTURE = BONSAI.split("\n").map((line, y, lines) => {
  const parts: ReactNode[] = [];
  let spaces = "";
  const flush = (key: number) => {
    if (!spaces) return;
    parts.push(<span className="ascii-gap" key={`s${key}`}>{spaces}</span>);
    spaces = "";
  };
  for (let x = 0; x < line.length; x++) {
    const ch = line[x];
    if (ch === " ") {
      spaces += ch;
      continue;
    }
    flush(x);
    parts.push(<span className="ascii-ch" key={x}>{ch}</span>);
  }
  flush(line.length);
  return <Fragment key={y}>{parts}{y < lines.length - 1 ? "\n" : null}</Fragment>;
});

// Default arrow with the hotspot at the tip, traced from the system pointer.
const ARROW: ReadonlyArray<readonly [number, number]> = [
  [0, 0],
  [0, 15.85],
  [3.35, 14.08],
  [5.62, 16.81],
  [8.01, 15.83],
  [7.68, 12.29],
  [11.3, 11.17],
];
const CURSOR_PUSH = 3.5;

function insideArrow(x: number, y: number) {
  let hit = false;
  for (let i = 0, j = ARROW.length - 1; i < ARROW.length; j = i++) {
    const [xi, yi] = ARROW[i];
    const [xj, yj] = ARROW[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

function nearestOnArrow(x: number, y: number) {
  let best = Infinity;
  let nx = 0;
  let ny = 0;
  for (let i = 0; i < ARROW.length; i++) {
    const [ax, ay] = ARROW[i];
    const [bx, by] = ARROW[(i + 1) % ARROW.length];
    const abx = bx - ax;
    const aby = by - ay;
    const len2 = abx * abx + aby * aby;
    const t = len2 === 0 ? 0 : Math.max(0, Math.min(1, ((x - ax) * abx + (y - ay) * aby) / len2));
    const px = ax + abx * t;
    const py = ay + aby * t;
    const d2 = (x - px) ** 2 + (y - py) ** 2;
    if (d2 < best) {
      best = d2;
      nx = px;
      ny = py;
    }
  }
  return { x: nx, y: ny, d: Math.sqrt(best) };
}

function signedDistance(x: number, y: number) {
  const near = nearestOnArrow(x, y);
  return insideArrow(x, y) ? -near.d : near.d;
}

function cursorShift(lx: number, ly: number) {
  let x = lx;
  let y = ly;
  for (let step = 0; step < 3; step++) {
    const dist = signedDistance(x, y);
    if (dist >= CURSOR_PUSH - 0.05) break;
    const sample = 0.8;
    const gx = signedDistance(x + sample, y) - signedDistance(x - sample, y);
    const gy = signedDistance(x, y + sample) - signedDistance(x, y - sample);
    const span = Math.hypot(gx, gy) || 1;
    const move = CURSOR_PUSH - dist;
    x += (gx / span) * move;
    y += (gy / span) * move;
  }
  const mx = x - lx;
  const my = y - ly;
  if (mx * mx + my * my < 0.04) return null;
  return [mx, my] as const;
}

export function AsciiField() {
  const rootRef = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const art = artRef.current;
    if (!root || !art) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nodes = [...art.querySelectorAll<HTMLSpanElement>(".ascii-ch")];
    const active = new Set<HTMLSpanElement>();
    let metrics: { el: HTMLSpanElement; fx: number; fy: number }[] | null = null;

    const measure = () => {
      const base = art.getBoundingClientRect();
      if (base.width === 0 || base.height === 0) {
        metrics = null;
        return;
      }
      metrics = nodes.map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          el,
          fx: (rect.left - base.left + rect.width / 2) / base.width,
          fy: (rect.top - base.top + rect.height / 2) / base.height,
        };
      });
    };

    const clear = () => {
      for (const el of active) el.style.translate = "";
      active.clear();
    };

    const move = (event: PointerEvent) => {
      if (media.matches) return;
      if (!metrics) measure();
      if (!metrics) return;
      const rect = art.getBoundingClientRect();
      const px = event.clientX - rect.left;
      const py = event.clientY - rect.top;
      const next = new Set<HTMLSpanElement>();
      for (const cell of metrics) {
        const lx = cell.fx * rect.width - px;
        const ly = cell.fy * rect.height - py;
        if (lx < -CURSOR_PUSH || ly < -CURSOR_PUSH || lx > 11.3 + CURSOR_PUSH || ly > 16.81 + CURSOR_PUSH) continue;
        const shift = cursorShift(lx, ly);
        if (!shift) continue;
        cell.el.style.translate = `${shift[0].toFixed(1)}px ${shift[1].toFixed(1)}px`;
        next.add(cell.el);
      }
      for (const el of active) if (!next.has(el)) el.style.transform = "";
      active.clear();
      for (const el of next) active.add(el);
    };

    const onChange = () => {
      if (media.matches) clear();
    };
    const onResize = () => {
      metrics = null;
      clear();
    };
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", clear);
    media.addEventListener("change", onChange);
    window.addEventListener("resize", onResize);
    return () => {
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", clear);
      media.removeEventListener("change", onChange);
      window.removeEventListener("resize", onResize);
      clear();
    };
  }, []);

  return (
    <section className="ascii-field" ref={rootRef} aria-hidden="true">
      <div className="ascii-stage">
        <pre className="ascii-art" ref={artRef}>{PICTURE}</pre>
        <span className="ascii-petal" style={{ left: "22%", animationDelay: "0s", animationDuration: "11.5s" }}>'</span>
        <span className="ascii-petal" style={{ left: "34%", animationDelay: "-4.2s", animationDuration: "13s" }}>'</span>
        <span className="ascii-petal" style={{ left: "46%", animationDelay: "-7.6s", animationDuration: "10.4s" }}>`</span>
        <span className="ascii-petal" style={{ left: "58%", animationDelay: "-2.4s", animationDuration: "12.2s" }}>'</span>
        <span className="ascii-petal" style={{ left: "68%", animationDelay: "-9s", animationDuration: "14s" }}>.</span>
        <span className="ascii-petal" style={{ left: "40%", animationDelay: "-6s", animationDuration: "9.8s" }}>'</span>
      </div>
    </section>
  );
}
