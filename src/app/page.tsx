import type { Metadata } from "next";
import { DifferentialsSection } from "@/components/home/DifferentialsSection";
import { DivisionsSection } from "@/components/home/DivisionsSection";
import { HelpSection } from "@/components/home/HelpSection";
import { Hero } from "@/components/home/Hero";
import { SegmentsSection } from "@/components/home/SegmentsSection";
import { TrustBar } from "@/components/home/TrustBar";

export const metadata: Metadata = {
  title: "MAGRAL | Engenharia para movimento, pressão e fluidos",
  description:
    "Da análise do problema à solução, fornecimento, manutenção e suporte técnico para a indústria.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DivisionsSection />
      <TrustBar />
      <HelpSection />
      <SegmentsSection />
      <DifferentialsSection />
    </>
  );
}
