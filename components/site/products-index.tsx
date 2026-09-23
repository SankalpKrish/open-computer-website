import Link from "next/link";
import { brand, products } from "@/lib/site-content";

export function ProductsIndex() {
  return (
    <>
      <section className="px-6 lg:px-12 pt-36 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            {brand.name} / Products
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[128px] mt-6 tracking-tight leading-[0.9]">
            Products
          </h1>
          <p className="text-xl text-muted-foreground mt-10 max-w-2xl">
            Athena Voice, Open Computer Agent, and Inferno Router. Three products from one studio, each
            available as software and as a services engagement.
          </p>
        </div>
      </section>
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1400px] mx-auto space-y-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={product.href}
              className="group grid lg:grid-cols-12 border border-foreground/10 bg-black overflow-hidden hover:border-foreground/40 transition-colors min-h-[280px]"
            >
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                <span className="font-mono text-xs text-muted-foreground">
                  {product.code} / {product.kicker}
                </span>
                <h2 className="font-display text-4xl lg:text-5xl mt-4 group-hover:translate-x-1 transition-transform">
                  {product.name}
                </h2>
                <p className="text-muted-foreground mt-4 max-w-xl">{product.oneLiner}</p>
                <span className="text-sm mt-8">{product.cta} →</span>
              </div>
              <div className="lg:col-span-5 relative min-h-[200px]">
                <img
                  src={product.visual}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
