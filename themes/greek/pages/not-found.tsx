import { Action } from "../components/actions";
import { Column } from "../components/orders";
import { Wrap } from "../components/sections";

export function GreekNotFound() {
  return <section className="gk-legal gk-not-found">
    <Wrap><Column order="doric" crop="capital" className="gk-not-found-order" /><h1>Page not found</h1><div className="gk-prose"><p>That route is not part of the Open Computer site.</p></div><div className="gk-actions"><Action href="/">Back home</Action></div></Wrap>
  </section>;
}
