import { Activity, Droplets, Gauge, Hammer, Settings, Waves } from "lucide-react";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { solutions } from "@/lib/data/solutions";
import Link from "next/link";

const icons = [Hammer, Waves, Activity, Gauge, Droplets, Settings];

export function HelpSection() {
  return (
    <section className="bg-[#f6f8fb] py-20">
      <div className="container-site">
        <SectionTitle title="Como podemos ajudar você hoje?" text="Escolha o problema. A MAGRAL conduz da análise técnica à solução aplicada." />
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
        <div className="mt-10 text-center">
          <Link href="/solucoes" className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Ver todas as soluções →
          </Link>
        </div>
      </div>
    </section>
  );
}
