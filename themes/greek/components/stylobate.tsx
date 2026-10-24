import Link from "next/link";
import { brand, contact, footer, products, services } from "@/lib/site-content";
import { CardLockup } from "./mark";

/** Footer: the stepped base of the temple, with the card's lockup. */
export function Stylobate() {
  return <footer className="gk-footer">
    <div className="gk-footer-steps" aria-hidden="true"><span /><span /><span /></div>
    <div className="gk-wrap gk-footer-grid">
      <div className="gk-footer-brand">
        <Link href="/" aria-label={`${brand.name} home`}><CardLockup /></Link>
        <a className="gk-mail" href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <nav className="gk-footer-group" aria-labelledby="gk-footer-products"><h2 id="gk-footer-products">{footer.productsHeading}</h2>{products.map((product) => <Link key={product.slug} href={product.href}>{product.name}</Link>)}</nav>
      <nav className="gk-footer-group" aria-labelledby="gk-footer-services"><h2 id="gk-footer-services">{footer.servicesHeading}</h2>{services.lines.map((line) => <Link key={line.id} href={`/services#${line.id}`}>{line.name}</Link>)}</nav>
      <nav className="gk-footer-group" aria-labelledby="gk-footer-company"><h2 id="gk-footer-company">{footer.companyHeading}</h2>{footer.companyLinks.map((link) => <Link key={link.name} href={link.href}>{link.name}</Link>)}</nav>
    </div>
    <div className="gk-wrap gk-footer-bottom"><span>{brand.copyright}</span><a href="#top">Back to top</a></div>
  </footer>;
}
