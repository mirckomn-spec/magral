import Image from "next/image";
import Link from "next/link";

const labels: Record<string, string> = {
  artigos: "Artigo",
  guias: "Guia",
  cases: "Case",
  videos: "Vídeo",
  faq: "FAQ",
};

export function ContentCard({
  href,
  title,
  excerpt,
  image,
  category,
}: {
  href: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}) {
  return (
    <Link href={href} className="group overflow-hidden rounded-xl border border-line bg-white shadow-card">
      <div className="relative h-44 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{labels[category] ?? category}</p>
        <h3 className="mt-2 text-lg font-semibold text-navy">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate">{excerpt}</p>
        <span className="mt-4 inline-block text-sm font-medium text-accent">Leia mais →</span>
      </div>
    </Link>
  );
}
