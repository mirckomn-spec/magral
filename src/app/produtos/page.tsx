import type { Metadata } from "next";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Amortecedores, acumuladores, isoladores, mangueiras, juntas e válvulas para aplicações industriais.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria = "" } = await searchParams;
  return (
    <section className="bg-[#f6f8fb] py-16">
      <div className="container-site">
        <SectionTitle
          align="left"
          title="Catálogo de produtos"
          text="Selecione a categoria ou vá direto ao produto. A equipe técnica apoia o dimensionamento."
        />
        <div className="mt-10">
          <ProductCatalog initialCategory={categoria} />
        </div>
      </div>
    </section>
  );
}
