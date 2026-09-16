import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";
import { getSegment, segments } from "@/lib/data/segments";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return segments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) return { title: "Segmento" };
  return { title: segment.name, description: segment.excerpt };
}

export default async function SegmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) notFound();
  return <SegmentPageTemplate segment={segment} />;
}
