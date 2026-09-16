import type { Metadata } from "next";
import { SegmentCard } from "@/components/cards/SegmentCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { segments } from "@/lib/data/segments";

export const metadata: Metadata = {
  title: "Segmentos",
  description: "Soluções MAGRAL para óleo e gás, naval, mineração, energia, automotivo e máquinas.",
};

export default function SegmentsPage() {
  return (
    <section className="bg-[#f6f8fb] py-16">
      <div className="container-site">
        <SectionTitle
          align="left"
          title="Segmentos industriais"
          text="Cada setor tem ciclo, norma e criticidade próprios. Veja como a MAGRAL atua em cada um."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((item) => (
            <SegmentCard
              key={item.slug}
              href={`/segmentos/${item.slug}`}
              name={item.name}
              excerpt={item.excerpt}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
