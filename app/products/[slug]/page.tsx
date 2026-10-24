import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/site/page-frame";
import { ProductPage } from "@/components/site/product-page";
import { getProduct, products } from "@/lib/site-content";
import { GreekProduct } from "@/themes/greek/pages/product";
import { DreamProduct } from "@/themes/dream/pages";
import { AthenaProduct } from "@/themes/athena/pages";
import { athena } from "@/lib/athena-content";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: slug === "agent" ? "Athena Agent" : product.name,
    description: slug === "voice" ? athena.description : product.oneLiner,
  };
}

export default async function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <PageFrame athena={<AthenaProduct product={product} />} greek={<GreekProduct product={product} />} dream={<DreamProduct product={product} />}>
      <ProductPage product={product} />
    </PageFrame>
  );
}
