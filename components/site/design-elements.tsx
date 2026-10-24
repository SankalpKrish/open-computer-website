import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, home, services, type Product } from "@/lib/site-content";
import { productPresentation } from "@/lib/product-presentation";
import { ProductGlyph } from "./product-visuals";
import { ProcessPlayer } from "./process-player";
export const processSteps = [
  { title: "Listen", subtitle: "the outcome", body: "Understand the goal and break the work into small, observable steps." },
  { title: "Act", subtitle: "with tools", body: "Use connected, authorized tools to carry out the work." },
  { title: "Verify", subtitle: "the path", body: "Check the outcome and report the evidence, remaining work, and rollback path." },
];
export function ActionLink({ href = "/contact", children = "Start a conversation", secondary = false }: { href?: string; children?: React.ReactNode; secondary?: boolean }) { return <Link href={href} className={`action-link ${secondary ? "secondary" : ""}`}>{children}<ArrowUpRight size={18} aria-hidden="true" /></Link>; }
export function ProductLink({ product }: { product: Product }) {
  return <Link href={product.href} className={`product-entry product-${product.slug}`}><div className="entry-art"><ProductGlyph slug={product.slug} /></div><h3>{product.name}</h3><p>{productPresentation[product.slug].summary}</p><span className="entry-cta">{product.cta}<ArrowUpRight size={16} aria-hidden="true" /></span></Link>;
}
export function StackDrawing({ selected = -1 }: { selected?: number }) { return <svg className="stack-drawing" viewBox="0 0 460 460" fill="none" aria-hidden="true">{[0, 1, 2].map((index) => <g key={index} className={`stack-layer layer-${index} ${selected === index ? "selected" : ""}`}><path d={`M230 ${45 + index * 95} 425 ${140 + index * 95} 230 ${235 + index * 95} 35 ${140 + index * 95}Z`} /><path d={`M35 ${140 + index * 95}v24l195 95 195-95v-24M230 ${235 + index * 95}v24`} /><path className="stack-detail" d={`M230 ${88 + index * 95} 336 ${140 + index * 95} 230 ${192 + index * 95} 124 ${140 + index * 95}Z`} /></g>)}</svg>; }
export function PartnerList({ expanded = false }: { expanded?: boolean }) { return <div className={`partner-list ${expanded ? "expanded" : ""}`}>{services.partners.map((partner) => <div key={partner.name}><span className="partner-name">{partner.name}</span>{expanded && <p>{partner.detail}</p>}</div>)}</div>; }
export function MethodSection() { return <section id="method" className="method-section page-section"><div className="method-heading"><h2>How we work.</h2></div><ProcessPlayer steps={processSteps} /></section>; }
export function FaqBlock() { return <section id="faq" className="faq-block page-section"><div><h2>Questions.</h2><ActionLink href="/contact" secondary>Ask us anything</ActionLink></div><Accordion type="single" collapsible className="faq-list">{faqs.map((faq, index) => <AccordionItem value={`faq-${index}`} key={faq.q}><AccordionTrigger>{faq.q}</AccordionTrigger><AccordionContent>{faq.a}</AccordionContent></AccordionItem>)}</Accordion></section>; }
export function ClosingSection() { return <section id="conversation" className="closing-section page-section"><div><h2>{home.ctaTitle}</h2></div><div><ActionLink /></div></section>; }
export function ScrollLink() { return <a href="#products" className="scroll-link">{home.scroll}<ArrowDown size={16} aria-hidden="true" /></a>; }
export function ServiceSummary() { return <section id="services-summary" className="service-summary page-section"><div><h2>Built with you.</h2><ActionLink href="/services" secondary>Explore our services</ActionLink></div><div className="service-summary-copy"><p>We deploy your stack, connect your tools, and build around your workflow.</p><div className="pilot-summary"><strong>90 days. One workflow.</strong><span>No setup fee. Pay for the AI you use.</span></div></div></section>; }
