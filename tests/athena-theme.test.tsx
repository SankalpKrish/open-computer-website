import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { PageFrame } from "@/components/site/page-frame";
import { DEFAULT_SITE_STYLE } from "@/lib/site-styles";
import { athena, languages, solutions } from "@/lib/athena-content";
import { AthenaHome } from "@/themes/athena/home";
import {
  AthenaContact,
  AthenaPricing,
  AthenaTechnology,
  AthenaVoice,
} from "@/themes/athena/pages";

describe("Athena reference and supplied PDF", () => {
  it("serves the new site by default with complete navigation", () => {
    const html = renderToStaticMarkup(
      createElement(PageFrame, {
        athena: createElement(AthenaHome),
        children: "legacy",
      }),
    );
    expect(DEFAULT_SITE_STYLE).toBe("athena");
    expect(html).toContain('data-style="athena"');
    expect(html).not.toContain("legacy");
    for (const href of [
      "/products/voice",
      "/products/agent",
      "/technology",
      "/solutions",
      "/pricing",
      "/contact",
      "/privacy",
      "/terms",
    ])
      expect(html).toContain(`href="${href}"`);
    expect(html).toContain("call and finish the job.");
  });

  it("keeps call-decision timing distinct from response latency", () => {
    const html = renderToStaticMarkup(createElement(AthenaVoice));
    expect(html).toContain("3.8×");
    expect(html).toContain("1.59 s down to 0.42 s");
    expect(html).toContain("1.7 s");
    expect(html).toContain("median reply time");
    expect(html).toContain("128,081 packets");
    expect(html).toContain(
      "Illustrative conversation. No microphone, live call or booking is connected.",
    );
  });

  it("preserves both flat rates and the PDF’s example call prices", () => {
    const html = renderToStaticMarkup(createElement(AthenaPricing));
    expect(html).toContain("₹4.5");
    expect(html).toContain("₹3.5");
    expect(html).toContain("Voice, model, tools and classification included.");
    for (const [task, price] of [
      ["Reminder or confirmation", "₹4.5"],
      ["Verification through phone menus", "₹18"],
      ["Healthcare intake", "₹54"],
    ]) {
      const row = html.match(
        new RegExp(`<tr><th scope="row">${task}</th>.*?</tr>`),
      )?.[0];
      expect(row).toContain(price);
    }
  });

  it("distinguishes live plays, tool setup and shipping-next work", () => {
    expect(
      solutions.filter((item) => item.status === "Live").map((item) => item.id),
    ).toEqual(["verification", "outbound"]);
    expect(solutions.filter((item) => item.status === "Setup")).toHaveLength(4);
    const tech = renderToStaticMarkup(createElement(AthenaTechnology));
    const live = renderToStaticMarkup(createElement(AthenaVoice));
    expect(tech).toContain('id="roadmap"');
    expect(tech).toContain("Coming next");
    expect(tech).toContain("Follows the caller’s language");
    expect(live).not.toContain("Follows the caller’s language");
    expect(languages).toHaveLength(62);
  });

  it("uses the PDF contact and makes email-draft delivery explicit", () => {
    const html = renderToStaticMarkup(createElement(AthenaContact));
    expect(athena.email).toBe("archit@tryopencomputer.com");
    expect(html).toContain(`mailto:${athena.email}`);
    expect(html).toContain("Open email draft");
    expect(html).toContain("It does not send or store your message.");
    expect(html).toContain('type="email"');
  });
});
