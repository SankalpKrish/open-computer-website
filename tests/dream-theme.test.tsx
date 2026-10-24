import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { DreamFrame } from "@/themes/dream/frame";
import { products, services, contact } from "@/lib/site-content";
import { siteStyles } from "@/lib/site-styles";
import { DreamHome } from "@/themes/dream/home";
import {
  DreamContact,
  DreamProduct,
  DreamProducts,
  DreamServices,
} from "@/themes/dream/pages";

describe("Dream theme content and routing", () => {
  it("retains the Dream theme, existing styles and legal navigation", () => {
    const html = renderToStaticMarkup(
      createElement(DreamFrame, {
        children: createElement(DreamHome),
      }),
    );
    expect(html).toContain('data-style="dream"');
    expect(html).not.toContain("legacy page");
    expect(html).toContain('href="/privacy"');
    expect(html).toContain('href="/terms"');
    expect(siteStyles.map((style) => style.id)).toEqual(
      expect.arrayContaining(["dream", "editorial", "studio", "greek"]),
    );
  });

  it("uses the repo’s products and client work instead of template content", () => {
    const html = renderToStaticMarkup(createElement(DreamHome));
    for (const product of products) {
      expect(html).toContain(product.name);
      expect(html).toContain(`href="${product.href}"`);
    }
    for (const partner of services.partners)
      expect(html).toContain(partner.name);
    expect(html).toContain("OpenERP");
    expect(html).toContain("No setup fee");
    expect(html).not.toMatch(/DreamMotion|DreamMachine|Mattis|Maya S\./);
  });

  it("keeps full capabilities and deployment boundaries on each product route", () => {
    const index = renderToStaticMarkup(createElement(DreamProducts));
    for (const product of products) {
      expect(index).toContain(`href="${product.href}"`);
      const html = renderToStaticMarkup(
        createElement(DreamProduct, { product }),
      );
      expect(html).toContain(`<h1>${product.name}</h1>`);
      for (const capability of product.capabilities)
        expect(html).toContain(capability);
      expect(html).toContain(product.claimNote);
      expect(html).toContain(
        `/contact?interest=${encodeURIComponent(product.name)}`,
      );
    }
  });

  it("preserves service anchors and the email-draft contact flow", () => {
    const serviceHtml = renderToStaticMarkup(createElement(DreamServices));
    for (const line of services.lines)
      expect(serviceHtml).toContain(`id="${line.id}"`);
    for (const partner of services.partners.slice(0, 4))
      expect(serviceHtml).toContain(partner.name);
    const contactHtml = renderToStaticMarkup(createElement(DreamContact));
    expect(contactHtml).toContain(`mailto:${contact.email}`);
    expect(contactHtml).toContain("Open email draft");
    expect(contactHtml).toContain("does not store or send");
  });
});
