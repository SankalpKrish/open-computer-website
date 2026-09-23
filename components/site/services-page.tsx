import Link from "next/link";
import { brand, services } from "@/lib/site-content";
import { PartnersGrid } from "@/components/site/partners-grid";

export function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/images/developers.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 pt-40">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/80">
            {brand.name} / {services.title}
          </p>
          <h1 className="font-display text-6xl md:text-8xl mt-6 tracking-tight text-white leading-[0.9]">
            {services.title}
          </h1>
          <p className="text-lg md:text-xl text-white mt-8 max-w-3xl leading-relaxed">
            {services.intro}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto space-y-20">
          {services.lines.map((line) => (
            <article key={line.id} id={line.id} className="grid lg:grid-cols-12 gap-8 scroll-mt-28">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-muted-foreground">{line.product}</p>
                <h2 className="font-display text-3xl md:text-4xl mt-2">{line.name}</h2>
              </div>
              <div className="lg:col-span-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>{line.summary}</p>
                <p>{line.body}</p>
                <p>{line.partner}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-12">Partners and clients</h2>
          <PartnersGrid />
          <p className="text-sm text-muted-foreground mt-10 max-w-3xl">
            External actions — calls, messages, bookings, record updates — can run when connected and
            authorized. Open Computer does not claim universal delivery, instant response on every
            channel, or replacement of every workflow.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-10 rounded-full bg-foreground text-background px-6 py-3 text-sm"
          >
            Start a services engagement
          </Link>
        </div>
      </section>
    </>
  );
}
