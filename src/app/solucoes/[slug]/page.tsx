import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPageTemplate } from "@/components/templates/SolutionPageTemplate";
import { getSolution, solutions } from "@/lib/data/solutions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return { title: "Solução" };
  return { title: solution.shortTitle, description: solution.excerpt };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return <SolutionPageTemplate solution={solution} />;
}
