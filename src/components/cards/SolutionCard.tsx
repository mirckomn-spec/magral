import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function SolutionCard({
  href,
  title,
  text,
  icon: Icon,
}: {
  href: string;
  title: string;
  text: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-line bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-accent/30"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-mist text-accent">
        <Icon size={20} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate">{text}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Ver solução <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
