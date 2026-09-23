import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { ProductsIndex } from "@/components/site/products-index";
import { brand } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Products",
  description: `Athena Voice, Open Computer Agent, and Inferno Router from ${brand.name}.`,
};

export default function ProductsRoute() {
  return (
    <PageFrame>
      <ProductsIndex />
    </PageFrame>
  );
}
