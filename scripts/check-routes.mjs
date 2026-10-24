import assert from "node:assert/strict";

// Exercise Next.js itself: static React markup tests do not enforce the
// Server Component/client export boundary that broke the product pages.
// Run against a running server, e.g. SITE_URL=http://localhost:3001 npm run test:routes.
const baseUrl = process.env.SITE_URL || "http://localhost:3000";
const routes = [
  ["/", "Athena Research"],
  ["/products", "Products"],
  ["/products/voice", "Athena Voice"],
  ["/products/agent", "Athena Agent"],
  ["/products/router", "Inferno Router"],
  ["/technology", "Technology"],
  ["/solutions", "Solutions"],
  ["/pricing", "Pricing"],
  ["/services", "Implementation"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy"],
  ["/terms", "Terms"],
  ["/design-system", "Greek design system"],
];

for (const [path, title] of routes) {
  const response = await fetch(new URL(path, baseUrl));
  const html = await response.text();
  assert.equal(response.status, 200, `${path} must render successfully`);
  assert.ok(html.includes("<h1"), `${path} must render its page content`);
  assert.match(html, new RegExp(`<title>[^<]*${title}[^<]*</title>`), `${path} must have its own metadata`);
  assert.doesNotMatch(html, /data-next-error-(message|digest)/, `${path} must not stream a Next.js render error`);
  console.log(`PASS ${path}`);
}

const missing = await fetch(new URL("/products/unknown-product", baseUrl));
assert.equal(missing.status, 404, "Unknown products must return a proper 404");
console.log("PASS unknown product → 404");
