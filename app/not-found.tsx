import Link from "next/link";
import { PageFrame } from "@/components/site/page-frame";
import { brand } from "@/lib/site-content";

export default function NotFound() {
  return (
    <PageFrame>
      <section className="px-6 lg:px-12 pt-36 pb-24 max-w-[900px] mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {brand.name} / 404
        </p>
        <h1 className="font-display text-6xl mt-6">Page not found</h1>
        <p className="text-muted-foreground mt-6">
          That route is not part of the Open Computer site.
        </p>
        <Link href="/" className="inline-flex mt-10 rounded-full bg-foreground text-background px-6 py-3 text-sm">
          Back home
        </Link>
      </section>
    </PageFrame>
  );
}
