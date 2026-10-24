"use client";

import { type FormEvent, useState } from "react";
import { brand, contact, products } from "@/lib/site-content";

/** Opens an email draft to the studio. Nothing is sent or stored by the site. */
export function ContactForm() {
  const [opened, setOpened] = useState(false);
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

  if (opened) return <div className="gk-form-done" role="status">
    <span className="gk-seal" aria-hidden="true" />
    <p>Your email app should have opened a draft to <a href={`mailto:${contact.email}`}>{contact.email}</a>. If it did not, write that address directly. This website did not store the message.</p>
    <button type="button" className="gk-text-button" onClick={() => setOpened(false)}>Start a conversation</button>
  </div>;

  return <form onSubmit={onSubmit} className="gk-form">
    <label htmlFor="gk-contact-name"><span>Name</span><input id="gk-contact-name" required name="name" autoComplete="name" /></label>
    <label htmlFor="gk-contact-email"><span>Email</span><input id="gk-contact-email" required type="email" name="email" autoComplete="email" /></label>
    <label htmlFor="gk-contact-interest"><span>Interest</span><select id="gk-contact-interest" name="interest" defaultValue={products[0].name}>{products.map((product) => <option key={product.slug} value={product.name}>{product.name}</option>)}<option value="Services">Services</option></select></label>
    <label htmlFor="gk-contact-workflow"><span>Workflow</span><textarea id="gk-contact-workflow" required name="workflow" rows={5} /></label>
    <button type="submit" className="gk-action is-primary">Open email draft</button>
  </form>;
}
