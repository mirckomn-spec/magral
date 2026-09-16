import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import type { ContentItem } from "@/lib/types";

export function ContentPageTemplate({ item }: { item: ContentItem }) {
  return (
    <article className="bg-white">
      <div className="relative h-[360px]">
        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-navy/50" />
      </div>
      <div className="container-site max-w-3xl py-12">
        <Breadcrumb
          items={[
            { label: "Início", href: "/" },
            { label: "Conteúdo", href: "/conteudo" },
            { label: item.title },
          ]}
        />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.category} · {item.date}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{item.title}</h1>
        <p className="mt-4 text-base leading-7 text-slate">{item.excerpt}</p>
        <div className="mt-8 space-y-5 text-sm leading-7 text-slate">
          {item.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/contato">Falar com a equipe técnica</Button>
        </div>
      </div>
    </article>
  );
}
