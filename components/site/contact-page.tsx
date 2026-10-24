"use client";
import { type FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { brand, contact, products } from "@/lib/site-content";
export function ContactPage() {
  const [opened, setOpened] = useState(false);
  const [interest, setInterest] = useState<string>(products[0].name);
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("interest");
    if (requested && (requested === "Services" || products.some(product => product.name === requested))) setInterest(requested);
  }, []);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const workflow = String(data.get("workflow") ?? "").trim();
    const subject = encodeURIComponent(`${brand.name} — ${interest}`);
    const body = encodeURIComponent(`Name: ${name}\nReply-to: ${email}\nInterest: ${interest}\n\n${workflow}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }
  return <section className="contact-layout"><div className="contact-copy"><h1>{contact.title}</h1><p>{contact.body}</p><a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}<ArrowUpRight size={16} aria-hidden="true" /></a><p className="contact-note">{contact.mailtoNote}</p></div>{opened ? <div className="contact-success" role="status"><Check size={30} aria-hidden="true" /><p>Your email app should have opened a draft to <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>. If it did not, write that address directly. This website did not store the message.</p><button type="button" className="text-button" onClick={() => setOpened(false)}>Start a conversation</button></div> : <form onSubmit={onSubmit} className="contact-form"><label htmlFor="contact-name">Name<input id="contact-name" required name="name" autoComplete="name" /></label><label htmlFor="contact-email">Email<input id="contact-email" required type="email" name="email" autoComplete="email" /></label><label htmlFor="contact-interest">Interest<select id="contact-interest" name="interest" value={interest} onChange={event => setInterest(event.target.value)}>{products.map((product) => <option key={product.slug} value={product.name}>{product.name}</option>)}<option value="Services">Services</option></select></label><label htmlFor="contact-workflow">Workflow<textarea id="contact-workflow" required name="workflow" rows={5} /></label><button type="submit" className="action-link">Open email draft<ArrowUpRight size={18} aria-hidden="true" /></button></form>}</section>;
}
