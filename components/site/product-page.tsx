import Link from "next/link";
import type { Product } from "@/lib/site-content";
import { brand } from "@/lib/site-content";

export function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={product.visual}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 pt-40">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/80">
            {brand.name} / Products / {product.name}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[96px] mt-6 tracking-tight text-white leading-[0.9]">
            {product.name}
          </h1>
          <p className="text-lg md:text-xl text-white mt-8 max-w-2xl leading-relaxed">
            {product.heroSubhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white text-black px-6 py-3 text-sm"
            >
              Talk to us
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/30 text-white px-6 py-3 text-sm hover:bg-white/10"
            >
              See services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.features.map((feature) => (
            <article key={feature.title} className="border border-foreground/10 bg-black p-8 min-h-[220px]">
              <h2 className="text-2xl font-display">{feature.title}</h2>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      {product.detailSections.map((section) => (
        <section key={section.title} className="px-6 lg:px-12 py-24 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl md:text-5xl leading-tight">{section.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <li key={item} className="border border-foreground/10 p-5 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 lg:px-12 py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-12">Where it is used</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {product.useCases.map((useCase) => (
              <article key={useCase.title} className="bg-foreground/5 p-8 min-h-[200px]">
                <h3 className="text-xl font-display">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{useCase.body}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-12 max-w-3xl">{product.claimNote}</p>
        </div>
      </section>
    </>
  );
}
