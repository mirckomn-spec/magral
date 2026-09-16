import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export function SegmentCard({
  href,
  name,
  excerpt,
  image,
  icon: Icon,
}: {
  href: string;
  name: string;
  excerpt: string;
  image?: string;
  icon?: LucideIcon;
}) {
  return (
    <Link href={href} className="group overflow-hidden rounded-xl border border-line bg-white shadow-card">
      {image ? (
        <div className="relative h-36 overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
          <div className="absolute inset-0 bg-navy/35" />
          <h3 className="absolute bottom-3 left-4 text-lg font-semibold text-white">{name}</h3>
        </div>
      ) : (
        <div className="flex items-start gap-3 p-5">
          {Icon ? (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-mist text-accent">
              <Icon size={18} />
            </span>
          ) : null}
          <div>
            <h3 className="font-semibold text-navy">{name}</h3>
            <p className="mt-1 text-sm text-slate">{excerpt}</p>
          </div>
        </div>
      )}
      {image ? <p className="p-4 text-sm leading-6 text-slate">{excerpt}</p> : null}
    </Link>
  );
}
