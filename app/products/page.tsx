import type { Metadata } from "next";
import { PageFrame } from "@/components/site/page-frame";
import { ProductsIndex } from "@/components/site/products-index";
import { GreekProducts } from "@/themes/greek/pages/products";
import { DreamProducts } from "@/themes/dream/pages";
import { AthenaProducts } from "@/themes/athena/pages";

export const metadata: Metadata = {
  title: "Products",
  description: "Athena Voice, Athena Agent and Inferno Router. Natural conversation and connected action by OpenComputer.",
};

export default function ProductsRoute() {
  return (
    <PageFrame athena={<AthenaProducts />} greek={<GreekProducts />} dream={<DreamProducts />}>
      <ProductsIndex />
    </PageFrame>
  );
}
