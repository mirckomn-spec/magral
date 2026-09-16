import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/forms/ContactForm";
import { ProductCard } from "@/components/cards/ProductCard";
import { ContentCard } from "@/components/cards/ContentCard";
import { getProduct } from "@/lib/data/products";
import { getSolution } from "@/lib/data/solutions";
import { getContent } from "@/lib/data/content";
import type { Segment } from "@/lib/types";
import Link from "next/link";

export function SegmentPageTemplate({ segment }: { segment: Segment }) {
  const usedSolutions = segment.solutions.map(getSolution).filter(Boolean);
  const usedProducts = segment.products.map(getProduct).filter(Boolean);
  const usedCases = segment.cases.map(getContent).filter(Boolean);

  return (
    <article className="bg-white">
      <div className="relative h-[420px]">
        <Image src={segment.image} alt={segment.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="container-site relative flex h-full flex-col justify-end pb-12 text-white">
          <Breadcrumb
            light
            items={[
              { label: "Início", href: "/" },
              { label: "Segmentos", href: "/segmentos" },
              { label: segment.name },
            ]}
          />
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">{segment.title}</h1>
        </div>
      </div>
      <div className="container-site py-14">
        <p className="max-w-3xl text-base leading-7 text-slate">{segment.description}</p>
        <h2 className="mt-12 text-2xl font-semibold text-navy">Principais aplicações</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {segment.applications.map((item) => (
            <article key={item.title} className="rounded-xl border border-line p-5 shadow-card">
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-slate">{item.text}</p>
            </article>
          ))}
        </div>
        <h2 className="mt-12 text-2xl font-semibold text-navy">Soluções mais utilizadas</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {usedSolutions.map((item) =>
            item ? (
              <li key={item.slug}>
                <Link href={`/solucoes/${item.slug}`} className="block rounded-xl border border-line bg-white p-4 hover:border-accent/40">
                  <span className="font-semibold text-navy">{item.shortTitle}</span>
                  <span className="mt-1 block text-sm text-slate">{item.excerpt}</span>
                </Link>
              </li>
            ) : null,
          )}
        </ul>
        <h2 className="mt-12 text-2xl font-semibold text-navy">Produtos relacionados</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {usedProducts.map((item) =>
            item ? (
              <ProductCard
                key={item.slug}
                href={`/produtos/${item.slug}`}
                name={item.name}
                series={item.series}
                excerpt={item.excerpt}
                image={item.image}
              />
            ) : null,
          )}
        </div>
        <h2 className="mt-12 text-2xl font-semibold text-navy">Cases e aplicações reais</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {usedCases.map((item) =>
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
        <div className="mt-12 rounded-2xl border border-line bg-[#f6f8fb] p-6 shadow-card md:p-8">
          <h2 className="text-2xl font-semibold text-navy">Falar com especialista do setor</h2>
          <p className="mt-2 text-sm leading-6 text-slate">
            Envie o contexto da aplicação e, se quiser, anexe uma foto do equipamento.
          </p>
          <div className="mt-6">
            <ContactForm submitLabel="Falar com especialista do setor" />
          </div>
        </div>
      </div>
    </article>
  );
}
