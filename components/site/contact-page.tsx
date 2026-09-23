"use client";

import { FormEvent, useState } from "react";
import { brand, contact, products } from "@/lib/site-content";

export function ContactPage() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const workflow = String(data.get("workflow") ?? "").trim();
    const subject = encodeURIComponent(`${brand.name} — ${interest}`);
    const body = encodeURIComponent(
      `Name: ${name}\nReply-to: ${email}\nInterest: ${interest}\n\n${workflow}`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <section className="px-6 lg:px-12 pt-36 pb-24">
      <div className="max-w-[900px] mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {brand.name} / Contact
        </p>
        <h1 className="font-display text-5xl md:text-7xl mt-6">{contact.title}</h1>
        <p className="text-lg text-muted-foreground mt-6">{contact.body}</p>
        <p className="text-sm mt-4">
          Email{" "}
          <a className="underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </p>
        <p className="text-sm text-muted-foreground mt-4 max-w-xl">{contact.mailtoNote}</p>

        {opened ? (
          <p className="mt-16 text-lg">
            Your email app should have opened a draft to{" "}
            <a className="underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            . If it did not, write that address directly. This website did not store the message.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-16 space-y-6">
            <label className="block">
              <span className="text-sm">Name</span>
              <input
                required
                name="name"
                className="mt-2 w-full bg-transparent border border-foreground/20 px-4 py-3"
              />
            </label>
            <label className="block">
              <span className="text-sm">Email</span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full bg-transparent border border-foreground/20 px-4 py-3"
              />
            </label>
            <label className="block">
              <span className="text-sm">Interest</span>
              <select
                name="interest"
                className="mt-2 w-full bg-background border border-foreground/20 px-4 py-3"
                defaultValue={products[0].name}
              >
                {products.map((product) => (
                  <option key={product.slug} value={product.name}>
                    {product.name}
                  </option>
                ))}
                <option value="Services">Services</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm">Workflow</span>
              <textarea
                required
                name="workflow"
                rows={5}
                className="mt-2 w-full bg-transparent border border-foreground/20 px-4 py-3"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-foreground text-background px-6 py-3 text-sm"
            >
              Open email draft
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
