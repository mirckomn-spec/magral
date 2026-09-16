import type { Metadata } from "next";
import Link from "next/link";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { solutions } from "@/lib/data/solutions";
import { Activity, Droplets, Gauge, Hammer, Settings, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluções industriais",
  description: "Encontre a solução MAGRAL a partir do problema da sua aplicação: impacto, vibração, movimento, pressão e manutenção.",
};

const icons = [Hammer, Waves, Activity, Gauge, Droplets, Settings];

export default function SolutionsPage() {
  return (
    <section className="bg-[#f6f8fb] py-16">
      <div className="container-site">
        <SectionTitle
          align="left"
          title="Soluções para problemas industriais reais"
          text="Comece pelo que está acontecendo na planta. A MAGRAL conecta diagnóstico, produto e engenharia."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <SolutionCard
              key={item.slug}
              href={`/solucoes/${item.slug}`}
              title={item.cardTitle}
              text={item.excerpt}
              icon={icons[index]}
            />
          ))}
        </div>
        <p className="mt-10 text-sm text-slate">
          Precisa de um caminho mais direto?{" "}
          <Link href="/contato" className="text-accent">
            Fale com a equipe técnica
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
