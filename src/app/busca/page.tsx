import type { Metadata } from "next";
import { SearchResults } from "@/components/search/SearchResults";

export const metadata: Metadata = {
  title: "Busca",
  description: "Busque produtos, soluções, conteúdo, aplicações e serviços MAGRAL.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  return (
    <section className="bg-[#f6f8fb] py-16">
      <div className="container-site">
        <h1 className="text-4xl font-semibold tracking-tight text-navy">Busca inteligente</h1>
        <p className="mt-3 max-w-2xl text-slate">
          Resultados agrupados por soluções, produtos, conteúdo, aplicações e serviços.
        </p>
        <div className="mt-8">
          <SearchResults initialQuery={q} />
        </div>
      </div>
    </section>
  );
}
