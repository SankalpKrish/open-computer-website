import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";
import { ContactPage } from "@/components/site/contact-page";
import { HomePage } from "@/components/site/home-page";
import { ProductPage } from "@/components/site/product-page";
import { ProductsIndex } from "@/components/site/products-index";
import { ServicesPage } from "@/components/site/services-page";
import {
  brand,
  getProduct,
  nav,
  products,
  publicCopyBlob,
  services,
} from "@/lib/site-content";
import { generateStaticParams } from "@/app/products/[slug]/page";

describe("shipped Open Computer copy and routes", () => {
  it("brands the company Open Computer and exposes Products plus Services", () => {
    expect(brand.name).toBe("Open Computer");
    expect(nav.productsLabel).toBe("Products");
    expect(nav.servicesLabel).toBe("Services");
    expect(nav.productsHref).toBe("/products");
    expect(nav.servicesHref).toBe("/services");
  });

  it("ships the three named products with dedicated slugs", () => {
    const names = products.map((product) => product.name);
    expect(names).toEqual(["Athena Voice", "Open Computer Agent", "Inferno Router"]);
    expect(getProduct("voice")?.href).toBe("/products/voice");
    expect(getProduct("agent")?.href).toBe("/products/agent");
    expect(getProduct("router")?.href).toBe("/products/router");
  });

  it("names required partners on the services surface", () => {
    const partnerNames = services.partners.map((partner) => partner.name).join(" ");
    const featured = services.partners.slice(0, 4).map((partner) => partner.name);
    expect(featured).toEqual(["Lifie AI", "Puravankara", "BDCC", "BESCOM"]);
    expect(partnerNames).toContain("Lifie");
    expect(partnerNames).not.toContain("AM Ventures");
    expect(partnerNames).not.toContain("Laser Magic");
    expect(partnerNames).toContain("Puravankara");
    expect(partnerNames).not.toContain("OpenERP");
    expect(partnerNames).toContain("BDCC");
    expect(partnerNames).toContain("BESCOM");
    expect(partnerNames).toContain("ISKCON Bengaluru");
    expect(partnerNames).not.toContain("Harman");
    expect(partnerNames).not.toMatch(/\bNEC\b/);
    expect(services.partners.find((p) => p.name === "BESCOM")?.track).toBe("Voice");
    expect(services.partners.find((p) => p.name === "BDCC")?.track).toBe("Agent");
    expect(services.lines.map((line) => line.product)).toEqual([
      "Athena Voice",
      "Open Computer Agent",
      "Inferno Router",
    ]);
  });

  it("renders shipped page modules with required names and no retired brand", () => {
    const homeHtml = renderToStaticMarkup(createElement(HomePage));
    const navHtml = renderToStaticMarkup(createElement(Navigation));
    const footerHtml = renderToStaticMarkup(createElement(FooterSection));
    const productsHtml = renderToStaticMarkup(createElement(ProductsIndex));
    const servicesHtml = renderToStaticMarkup(createElement(ServicesPage));
    const contactHtml = renderToStaticMarkup(createElement(ContactPage));
    const productHtml = products
      .map((product) => renderToStaticMarkup(createElement(ProductPage, { product })))
      .join("\n");

    const surfaces = [
      homeHtml,
      navHtml,
      footerHtml,
      productsHtml,
      servicesHtml,
      productHtml,
      contactHtml,
    ].join("\n");

    expect(homeHtml).toContain("Open Computer");
    expect(navHtml).toContain("Products");
    expect(navHtml).toContain("Services");
    expect(surfaces).toContain("Athena Voice");
    expect(surfaces).toContain("Open Computer Agent");
    expect(surfaces).toContain("Inferno Router");
    expect(servicesHtml).toContain("Lifie");
    expect(servicesHtml).not.toContain("AM Ventures");
    expect(servicesHtml).not.toContain("Laser Magic");
    expect(servicesHtml).toContain("Puravankara");
    expect(servicesHtml).toContain("OpenERP");
    expect(servicesHtml).toContain("BDCC");
    expect(servicesHtml).toContain("BESCOM");
    expect(homeHtml).toContain("Lifie");
    expect(homeHtml).toContain("Puravankara");
    expect(homeHtml).toContain("OpenERP");
    expect(homeHtml).toContain("BDCC");
    expect(homeHtml).toContain("BESCOM");
    expect(homeHtml).not.toContain("Harman");
    expect(homeHtml).not.toMatch(/\bNEC\b/);
    expect(contactHtml).toContain("support@tryopencomputer.com");
    expect(contactHtml).toContain("mailto:support@tryopencomputer.com");
    expect(contactHtml).toContain("Open email draft");
    expect(contactHtml).not.toContain("hello@athenaresearch.ai");
    expect(contactHtml).not.toContain("formsubmit");
    expect(footerHtml).toContain("/privacy");
    expect(footerHtml).toContain("/terms");
    expect(surfaces).not.toMatch(/\bCOMPUTE\b/);
    expect(surfaces).not.toContain("Athena Research");
  });

  it("keeps public copy free of retired product names", () => {
    const blob = publicCopyBlob();
    expect(blob).toContain("Open Computer");
    expect(blob).toContain("Athena Voice");
    expect(blob).toContain("Open Computer Agent");
    expect(blob).toContain("Inferno Router");
    expect(blob).toContain("Lifie");
    expect(blob).not.toContain("AM Ventures");
    expect(blob).not.toContain("Laser Magic");
    expect(blob).toContain("Puravankara");
    expect(blob).toContain("OpenERP");
    expect(blob).toContain("working WhatsApp channel");
    expect(blob).toContain("BDCC");
    expect(blob).toContain("BESCOM");
    expect(blob).not.toContain("Harman");
    expect(blob).not.toMatch(/\bNEC\b/);
    expect(blob).toContain("ISKCON Bengaluru");
    expect(blob).not.toMatch(/controlled staging/i);
    expect(blob).not.toMatch(/not live/i);
    expect(blob).not.toMatch(/remain open/i);
    expect(blob).not.toMatch(/\bCOMPUTE\b/);
    expect(blob).not.toContain("Athena Research");
    expect(blob).not.toContain("ChatGPT");
    expect(blob).toContain("support@tryopencomputer.com");
    expect(blob).not.toContain("hello@athenaresearch.ai");
    expect(blob).toContain("How do I contact you?");
  });

  it("puts pitch, gateway, and realtime-voice capabilities on the shipped products", () => {
    const voice = getProduct("voice")!;
    const agent = getProduct("agent")!;
    const router = getProduct("router")!;
    const voiceText = `${voice.heroSubhead} ${voice.features.map((f) => f.body).join(" ")} ${voice.capabilities.join(" ")}`;
    const agentText = `${agent.heroSubhead} ${agent.features.map((f) => f.body).join(" ")} ${agent.detailSections.map((s) => `${s.title} ${s.body}`).join(" ")}`;
    const routerText = `${router.heroSubhead} ${router.features.map((f) => f.body).join(" ")} ${router.capabilities.join(" ")}`;

    expect(voiceText).toMatch(/full-duplex/i);
    expect(voiceText).toMatch(/WebRTC/);
    expect(voiceText).toMatch(/SIP/);
    expect(voiceText).toMatch(/DTMF/);
    expect(voiceText).toMatch(/interrupt/i);
    expect(voiceText).toMatch(/delegat/i);

    expect(agentText).toMatch(/private/i);
    expect(agentText).toMatch(/90-day/);
    expect(agentText).toMatch(/right-sized/);
    expect(agent.useCases.map((u) => `${u.title} ${u.body}`).join(" ")).toContain("Boom Booth");
    expect(agent.useCases.map((u) => `${u.title} ${u.body}`).join(" ")).not.toContain("Laser Magic");
    expect(agent.useCases.map((u) => `${u.title} ${u.body}`).join(" ")).not.toContain("AM Ventures");
    expect(agent.useCases.map((u) => `${u.title} ${u.body}`).join(" ")).toContain("OpenERP");
    expect(agent.useCases.map((u) => `${u.title} ${u.body}`).join(" ")).toContain("Puravankara");
    expect(agent.useCases.map((u) => `${u.title} ${u.body}`).join(" ")).toContain("ISKCON");
    expect(router.useCases.map((u) => `${u.title} ${u.body}`).join(" ")).not.toContain("Harman");
    expect(router.useCases.map((u) => `${u.title} ${u.body}`).join(" ")).not.toMatch(/\bNEC\b/);
    expect(agent.detailSections.map((s) => `${s.title} ${s.body}`).join(" ")).toMatch(/real-estate ERP/i);
    expect(agent.detailSections.map((s) => s.items.join(" ")).join(" ")).toMatch(/WhatsApp is a working operations channel/);
    expect(agent.claimNote).not.toMatch(/controlled staging/i);
    expect(agent.claimNote).not.toMatch(/not a supported production release/i);

    expect(router.visual).toBe("/images/connection.jpg");
    expect(voice.features).toHaveLength(6);
    expect(agent.features).toHaveLength(6);
    expect(router.features).toHaveLength(6);
    expect(routerText).toMatch(/OpenAI-compatible/);
    expect(routerText).toMatch(/failover/i);
    expect(routerText).toMatch(/self-hosted/i);
    expect(routerText).toMatch(/prompt cach/i);
    expect(routerText).toMatch(/Fusion/);
  });

  it("exports static params for the shipped product routes", async () => {
    const params = await generateStaticParams();
    expect(params.map((entry) => entry.slug).sort()).toEqual([
      "agent",
      "router",
      "voice",
    ]);
  });
});
