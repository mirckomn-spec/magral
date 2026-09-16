import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageTemplate } from "@/components/templates/ContentPageTemplate";
import { contents, getContent } from "@/lib/data/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return contents.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContent(slug);
  if (!item) return { title: "Conteúdo" };
  return { title: item.title, description: item.excerpt };
}

export default async function ContentDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getContent(slug);
  if (!item) notFound();
  return <ContentPageTemplate item={item} />;
}
