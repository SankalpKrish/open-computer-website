import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, contact, footer, products, services } from "@/lib/site-content";
export function FooterSection() {
  return <footer className="site-footer"><div className="footer-intro"><Link href="/" className="footer-brand">{brand.name}</Link><a href={`mailto:${contact.email}`}>{contact.email}<ArrowUpRight size={15} aria-hidden="true" /></a></div><div className="footer-link-group"><h2>{footer.productsHeading}</h2>{products.map((product) => <Link key={product.slug} href={product.href}>{product.name}</Link>)}</div><div className="footer-link-group"><h2>{footer.servicesHeading}</h2>{services.lines.map((line) => <Link key={line.id} href={`/services#${line.id}`}>{line.name}</Link>)}</div><div className="footer-link-group"><h2>{footer.companyHeading}</h2>{footer.companyLinks.map((link) => <Link key={link.name} href={link.href}>{link.name}</Link>)}</div><div className="footer-bottom"><span>{brand.copyright}</span><a href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>;
}
