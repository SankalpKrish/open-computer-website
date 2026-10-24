import { createElement, type ComponentType } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { contact, products, services } from "@/lib/site-content";
import { siteStyles } from "@/lib/site-styles";
import { Entablature } from "@/themes/greek/components/entablature";
import { productOrder } from "@/themes/greek/components/orders";
import { Stylobate } from "@/themes/greek/components/stylobate";
import { GreekContact } from "@/themes/greek/pages/contact";
import { GreekHome } from "@/themes/greek/pages/home";
import { GreekProduct } from "@/themes/greek/pages/product";
import { GreekProducts } from "@/themes/greek/pages/products";
import { GreekServices } from "@/themes/greek/pages/services";
import { GreekSystem } from "@/themes/greek/pages/system";

function render<P extends object>(component: ComponentType<P>, props?: P) {
  return renderToStaticMarkup(createElement(component, props ?? ({} as P)));
}

describe("Greek theme", () => {
  it("joins the style switcher and gives every product an order", () => {
    expect(siteStyles.map((style) => style.id)).toContain("greek");
    expect(products.every((product) => productOrder[product.slug])).toBe(true);
    expect(new Set(Object.values(productOrder)).size).toBe(products.length);
  });

  it("builds the home facade from the site's own content", () => {
    const html = render(GreekHome);
    expect(html).toContain("<h1");
    expect(html).toContain("Products you can run.");
    for (const product of products) {
      expect(html).toContain(product.name);
      expect(html).toContain(`href="${product.href}"`);
    }
    for (const partner of services.partners) expect(html).toContain(partner.name);
    expect(html).toContain("OpenERP");
    expect(html).toContain("Voice, agents, and inference on your infrastructure.");
  });

  it("renders every inner page with its content", () => {
    expect(render(GreekProducts)).toContain("Our products.");
    for (const product of products) {
      const html = render(GreekProduct, { product });
      expect(html).toContain(`<h1>${product.name}</h1>`);
      expect(html).toContain(product.features[0].title);
      expect(html).toContain("Capabilities.");
    }
    const servicesHtml = render(GreekServices);
    for (const line of services.lines) expect(servicesHtml).toContain(`id="${line.id}"`);
    expect(servicesHtml).toContain("Puravankara");
    expect(servicesHtml).toContain("The 90-day pilot.");
    const contactHtml = render(GreekContact);
    expect(contactHtml).toContain(`mailto:${contact.email}`);
    expect(contactHtml).toContain("Open email draft");
  });

  it("keeps navigation, legal links and the card lockup in the frame", () => {
    const header = render(Entablature);
    const footer = render(Stylobate);
    expect(header).toContain('href="/products"');
    expect(header).toContain('href="/services"');
    expect(header).toContain('href="/contact"');
    expect(footer).toContain('href="/privacy"');
    expect(footer).toContain('href="/terms"');
    expect(footer).toContain("gk-card-lockup");
  });

  it("documents every token family on the specimen page", () => {
    const html = render(GreekSystem);
    for (const token of ["--gk-marble", "--gk-plate", "--gk-frieze", "--gk-text-display", "--gk-space-9", "--gk-ease"]) expect(html).toContain(token);
    expect(html).toContain("Ionic");
    expect(html).toContain("Doric");
    expect(html).toContain("Corinthian");
  });
});
