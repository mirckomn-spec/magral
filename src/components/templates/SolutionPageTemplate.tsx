import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/cards/ProductCard";
import { ContentCard } from "@/components/cards/ContentCard";
import { getProduct } from "@/lib/data/products";
import { getContent } from "@/lib/data/content";
import type { Solution } from "@/lib/types";

export function SolutionPageTemplate({ solution }: { solution: Solution }) {
  const relatedProducts = solution.relatedProducts.map(getProduct).filter(Boolean);
  const relatedContent = solution.relatedContent.map(getContent).filter(Boolean);

  return (
    <article className="bg-[#f6f8fb]">
      <div className="container-site py-14">
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: "Soluções", href: "/solucoes" },
            { label: solution.shortTitle },
          ]}
        />
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-navy md:text-5xl">{solution.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate">{solution.intro}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <section className="rounded-xl border border-line bg-white p-7 shadow-card">
              <h2 className="text-2xl font-semibold text-navy">1. O problema</h2>
              <p className="mt-4 text-sm leading-7 text-slate">{solution.problem}</p>
            </section>
            <section className="rounded-xl border border-line bg-white p-7 shadow-card">
              <h2 className="text-2xl font-semibold text-navy">2. Causas comuns</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate">
                {solution.causes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border border-line bg-white p-7 shadow-card">
              <h2 className="text-2xl font-semibold text-navy">3. Como a MAGRAL pode ajudar</h2>
              <p className="mt-4 text-sm leading-7 text-slate">{solution.help}</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-navy">4. Produtos relacionados</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {relatedProducts.map((product) =>
                  product ? (
                    <ProductCard
                      key={product.slug}
                      href={`/produtos/${product.slug}`}
                      name={product.name}
                      series={product.series}
                      excerpt={product.excerpt}
                      image={product.image}
                    />
                  ) : null,
                )}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-navy">5. Aplicações</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {solution.applications.map((item) => (
                  <article key={item.title} className="rounded-xl border border-line bg-white p-5 shadow-card">
                    <h3 className="font-semibold text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate">{item.text}</p>
                  </article>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-navy">6. Conteúdo relacionado</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {relatedContent.map((item) =>
                  item ? (
                    <ContentCard
                      key={item.slug}
                      href={`/conteudo/${item.slug}`}
                      title={item.title}
                      excerpt={item.excerpt}
                      image={item.image}
                      category={item.category}
                    />
                  ) : null,
                )}
              </div>
            </section>
          </div>
          <aside className="h-fit rounded-xl border border-line bg-white p-6 shadow-card lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-navy">Fale com um especialista</p>
            <p className="mt-2 text-sm leading-6 text-slate">
              Envie o contexto da aplicação e a equipe técnica retorna com encaminhamento.
            </p>
            <div className="mt-5">
              <Button href="/contato" className="w-full">
                Falar com especialista
              </Button>
            </div>
            <Link href="/pecas" className="mt-4 block text-sm text-accent">
              Precisa de peça ou reposição? →
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}
