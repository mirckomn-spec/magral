import type { Metadata } from "next";
import Image from "next/image";
import { Calculator, FileSearch, FlaskConical, LifeBuoy, Settings2, Wrench } from "lucide-react";
import { EngineeringCard } from "@/components/cards/EngineeringCard";
import { Button } from "@/components/ui/Button";
import { engineeringServices } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Engenharia",
  description: "Dimensionamento, especificação, desenvolvimento, testes, suporte técnico e manutenção MAGRAL.",
};

const icons = [Calculator, FileSearch, Settings2, FlaskConical, LifeBuoy, Wrench];

export default function EngineeringPage() {
  return (
    <>
      <section className="relative h-[480px]">
        <Image
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=80"
          alt="Engenheiros em ambiente industrial"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="container-site relative flex h-full flex-col justify-end pb-14 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Engenharia</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Engenharia que encontra a melhor solução para cada aplicação
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Não vendemos só um componente. Analisamos o ciclo, o ambiente e o risco para especificar com critério técnico.
          </p>
        </div>
      </section>
      <section className="bg-[#f6f8fb] py-16">
        <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {engineeringServices.map((item, index) => (
            <EngineeringCard
              key={item.slug}
              id={item.slug}
              title={item.title}
              excerpt={`${item.excerpt} ${item.text}`}
              icon={icons[index]}
            />
          ))}
        </div>
        <div className="container-site mt-12">
          <Button href="/contato">Fale com a equipe de engenharia</Button>
        </div>
      </section>
    </>
  );
}
