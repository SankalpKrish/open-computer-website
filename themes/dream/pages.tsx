import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import {
  contact,
  home,
  products,
  services,
  type Product,
} from "@/lib/site-content";
import { ContactPage } from "@/components/site/contact-page";
import { DreamCTA, DreamHeading, DreamLink, TextLink } from "./components";
import { DeploymentPartners, PilotSteps } from "./interactions";
import { DreamDisclosure } from "./accordion";

export function DreamProducts() {
  return (
    <>
      <section className="dm-page-intro dm-container">
        <span className="dm-label">Our products</span>
        <h1>
          Three products.
          <br />
          <span>One connected stack.</span>
        </h1>
        <p>{home.productsBody}</p>
      </section>
      <section
        className="dm-container dm-product-list"
        aria-label="Open Computer products"
      >
        {products.map((product, index) => (
          <article key={product.slug}>
            <Link
              className="dm-product-list-image"
              href={product.href}
              aria-label={product.cta}
            >
              <Image
                src={product.visual}
                alt={`${product.name} product artwork`}
                fill
                sizes="(max-width: 700px) 100vw, 540px"
              />
              <span>
                0{index + 1}
                <ArrowUpRight size={23} aria-hidden="true" />
              </span>
            </Link>
            <div className="dm-product-list-copy">
              <span className="dm-label">{product.kicker}</span>
              <h2>{product.name}</h2>
              <p>{product.oneLiner}</p>
              <ul>
                {product.capabilities.slice(0, 3).map((capability) => (
                  <li key={capability}>
                    <Check size={15} aria-hidden="true" />
                    {capability}
                  </li>
                ))}
              </ul>
              <DreamLink href={product.href}>{product.cta}</DreamLink>
            </div>
          </article>
        ))}
      </section>
      <DreamCTA />
    </>
  );
}

export function DreamProduct({ product }: { product: Product }) {
  const next =
    products[
      (products.findIndex((p) => p.slug === product.slug) + 1) % products.length
    ];
  return (
    <>
      <section className="dm-product-hero dm-container">
        <Link href="/products" className="dm-breadcrumb">
          Products
          <ArrowRight size={13} aria-hidden="true" />
          {product.kicker}
        </Link>
        <h1>{product.name}</h1>
        <p>{product.oneLiner}</p>
        <DreamLink
          href={`/contact?interest=${encodeURIComponent(product.name)}`}
        >
          Talk about{" "}
          {product.slug === "voice"
            ? "voice"
            : product.slug === "agent"
              ? "your workflow"
              : "inference"}
        </DreamLink>
        <div className="dm-product-hero-art">
          <Image
            src={product.visual}
            alt={`${product.name} — ${product.kicker.toLowerCase()}`}
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 1080px"
          />
        </div>
      </section>
      <section className="dm-section dm-container">
        <div className="dm-product-overview">
          <span className="dm-label">{product.kicker}</span>
          <h2>{product.features[0].title}</h2>
          <p>{product.heroSubhead}</p>
        </div>
        <div className="dm-product-benefits">
          {product.features.map((feature, i) => (
            <article key={feature.title}>
              <span>0{i + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="dm-section dm-container dm-capabilities">
        <div>
          <span className="dm-label">Under the hood</span>
          <h2>Built for the whole workflow.</h2>
        </div>
        <ul>
          {product.capabilities.map((capability) => (
            <li key={capability}>
              <Check size={17} aria-hidden="true" />
              {capability}
            </li>
          ))}
        </ul>
      </section>
      <section className="dm-section dm-container">
        <DreamHeading label="Use cases" title="Put it to work." />
        <div className="dm-product-usecases">
          {product.useCases.map((useCase) => (
            <article key={useCase.title}>
              <h3>{useCase.title}</h3>
              <p>{useCase.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="dm-section dm-container dm-details">
        {product.detailSections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <div>
              <p>{section.body}</p>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <p className="dm-claim-note">{product.claimNote}</p>
      </section>
      <section className="dm-container dm-next-product">
        <span>Explore the stack</span>
        <TextLink href={next.href}>{next.name}</TextLink>
      </section>
      <DreamCTA />
    </>
  );
}

export function DreamServices() {
  return (
    <>
      <section className="dm-page-intro dm-container">
        <span className="dm-label">Services</span>
        <h1>
          The same stack.
          <br />
          <span>Implemented with you.</span>
        </h1>
        <p>
          An in-house engineering partner for voice, agents, and inference. One
          workflow is enough to begin.
        </p>
        <DreamLink href="/contact">Start a conversation</DreamLink>
      </section>
      <section
        className="dm-container dm-service-list"
        aria-label="Implementation services"
      >
        {services.lines.map((line, index) => (
          <article key={line.id} id={line.id}>
            <div className="dm-service-title">
              <span>
                0{index + 1} / {line.product}
              </span>
              <h2>{line.name}</h2>
              <TextLink href={products[index].href}>
                Explore the product
              </TextLink>
            </div>
            <div className="dm-service-body">
              <p>{line.summary}</p>
              <DreamDisclosure title="How we implement it">
                <p>{line.body}</p>
                <p>{line.partner}</p>
              </DreamDisclosure>
            </div>
          </article>
        ))}
      </section>
      <section className="dm-section dm-container">
        <DreamHeading
          label="Our partners & clients"
          title="Close to the teams doing the work."
        />
        <DeploymentPartners />
      </section>
      <section className="dm-section dm-container" id="pilot">
        <DreamHeading
          label="The 90-day pilot"
          title="Start small. Build something you keep."
          body="No setup fee. Pay for the AI you use. We start with one bounded workflow on your infrastructure."
        />
        <PilotSteps />
      </section>
      <DreamCTA />
    </>
  );
}

export function DreamContact() {
  return (
    <div className="dm-contact-page dm-container">
      <span className="dm-label">Let’s build together</span>
      <ContactPage />
      <div className="dm-contact-bottom">
        <span>One workflow is enough to begin.</span>
        <a href={`mailto:${contact.email}`}>
          Prefer email?
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
