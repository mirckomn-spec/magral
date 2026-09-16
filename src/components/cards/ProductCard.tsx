import Image from "next/image";
import Link from "next/link";

export function ProductCard({
  href,
  name,
  series,
  excerpt,
  image,
}: {
  href: string;
  name: string;
  series: string;
  excerpt: string;
  image: string;
}) {
  return (
    <Link href={href} className="group overflow-hidden rounded-xl border border-line bg-white shadow-card">
      <div className="relative h-48 overflow-hidden bg-mist">
        <Image
          src={image}
          alt={`${name} ${series}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{series}</p>
        <h3 className="mt-2 text-lg font-semibold text-navy">{name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate">{excerpt}</p>
      </div>
    </Link>
  );
}
