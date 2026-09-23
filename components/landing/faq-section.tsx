import { faqs } from "@/lib/site-content";

export function FaqSection() {
  return (
    <section className="px-6 lg:px-12 py-24 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display text-4xl md:text-6xl mb-12">Frequently asked questions</h2>
        <div className="divide-y divide-foreground/10">
          {faqs.map((item, index) => (
            <details key={item.q} className="py-6">
              <summary className="cursor-pointer list-none flex gap-6 items-start">
                <span className="font-mono text-xs text-muted-foreground pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg md:text-xl">{item.q}</span>
              </summary>
              <p className="mt-4 pl-12 text-muted-foreground max-w-3xl leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
