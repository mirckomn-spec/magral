import type { LucideIcon } from "lucide-react";

export function EngineeringCard({
  title,
  excerpt,
  icon: Icon,
  id,
}: {
  title: string;
  excerpt: string;
  icon: LucideIcon;
  id?: string;
}) {
  return (
    <article id={id} className="rounded-xl border border-line bg-white p-6 shadow-card">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-mist text-accent">
        <Icon size={20} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate">{excerpt}</p>
    </article>
  );
}
