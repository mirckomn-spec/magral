import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function CTASection({
  title,
  text,
  href,
  label,
  children,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container-site flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
          {children}
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] transition hover:bg-accent-dark"
        >
          {label}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
