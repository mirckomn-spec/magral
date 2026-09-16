import Link from "next/link";
import { Car, Factory, Fuel, Ship, Zap, Mountain } from "lucide-react";
import { SegmentCard } from "@/components/cards/SegmentCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { segments } from "@/lib/data/segments";

const icons = [Fuel, Ship, Mountain, Zap, Car, Factory];

export function SegmentsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-site">
        <SectionTitle title="Segmentos que atendemos" text="Soluções técnicas para indústrias em que confiabilidade e precisão não são opcionais." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((item, index) => (
            <SegmentCard
              key={item.slug}
              href={`/segmentos/${item.slug}`}
              name={item.name}
              excerpt={item.excerpt}
              image={item.image}
              icon={icons[index]}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/segmentos" className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Ver todos os segmentos →
          </Link>
        </div>
      </div>
    </section>
  );
}
