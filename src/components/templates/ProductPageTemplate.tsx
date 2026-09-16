"use client";

import { useState } from "react";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/cards/ProductCard";
import { getProduct } from "@/lib/data/products";
import type { Product } from "@/lib/types";

const tabs = ["Descrição", "Especificações", "Aplicações", "Downloads", "Modelos", "Produtos relacionados"] as const;

export function ProductPageTemplate({ product }: { product: Product }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Descrição");
  const related = product.related.map(getProduct).filter(Boolean);

  return (
    <article className="bg-white">
      <div className="container-site py-12">
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: "Produtos", href: "/produtos" },
            { label: `${product.name} ${product.series}` },
          ]}
        />
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-mist">
            <Image src={product.image} alt={`${product.name} ${product.series}`} fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{product.category}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
              {product.name}
              <span className="mt-2 block text-2xl font-medium text-slate">{product.series}</span>
            </h1>
            <p className="mt-5 text-base leading-7 text-slate">{product.excerpt}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contato">Solicitar cotação</Button>
              <Button href="/conteudo" variant="outline">
                Baixar catálogo
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.highlights.map((item) => (
            <article key={item.title} className="rounded-xl border border-line p-5 shadow-card">
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-slate">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto border-b border-line">
          <div className="flex min-w-max gap-1">
            {tabs.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTab(item)}
                className={`px-4 py-3 text-sm font-medium ${
                  tab === item ? "border-b-2 border-accent text-accent" : "text-slate hover:text-navy"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="py-8">
          {tab === "Descrição" && <p className="max-w-3xl text-sm leading-7 text-slate">{product.description}</p>}
          {tab === "Especificações" && (
            <dl className="grid max-w-2xl gap-3">
              {product.specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-2 gap-4 border-b border-line py-3 text-sm">
                  <dt className="font-medium text-navy">{spec.label}</dt>
                  <dd className="text-slate">{spec.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {tab === "Aplicações" && (
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate">
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {tab === "Downloads" && (
            <ul className="space-y-3">
              {product.downloads.map((item) => (
                <li key={item.name} className="flex items-center justify-between rounded-lg border border-line px-4 py-3 text-sm">
                  <span>{item.name}</span>
                  <span className="text-slate">{item.type}</span>
                </li>
              ))}
            </ul>
          )}
          {tab === "Modelos" && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-navy">
                  <tr>
                    <th className="py-3">Código</th>
                    <th>Capacidade</th>
                    <th>Curso</th>
                    <th>Montagem</th>
                  </tr>
                </thead>
                <tbody className="text-slate">
                  {product.models.map((model) => (
                    <tr key={model.code} className="border-t border-line">
                      <td className="py-3 font-medium text-navy">{model.code}</td>
                      <td>{model.capacity}</td>
                      <td>{model.stroke}</td>
                      <td>{model.thread}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {tab === "Produtos relacionados" && (
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((item) =>
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
          )}
        </div>
      </div>
    </article>
  );
}
