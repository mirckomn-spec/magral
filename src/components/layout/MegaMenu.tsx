"use client";

import Link from "next/link";
import { FileText, MessageSquare, Settings, Wrench } from "lucide-react";
import { megaColumns, megaHelp } from "@/lib/data/site";

const helpIcons = [MessageSquare, Wrench, Settings, FileText];

export function MegaMenu({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: () => void;
}) {
  const columns = megaColumns[active] ?? [];

  return (
    <div className="animate-fade-up overflow-hidden rounded-b-2xl border border-t-0 border-line bg-white shadow-menu">
      <div className="container-wide grid gap-10 px-6 py-8 lg:grid-cols-[1fr_280px]">
        <div className={`grid gap-8 ${columns.length > 1 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {columns.map((column) => (
            <div key={column.title}>
              <Link
                href={column.href}
                onClick={onNavigate}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
              >
                {column.title}
              </Link>
              <ul className="mt-4 space-y-2">
                {column.items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="block rounded-md px-2 py-1.5 text-sm text-navy/80 transition hover:bg-mist hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <aside className="rounded-xl bg-mist p-5">
          <p className="text-sm font-semibold text-navy">Por que esse menu funciona?</p>
          <p className="mt-2 text-sm leading-6 text-slate">
            O visitante encontra a solução pelo problema, o produto pelo tipo e a engenharia pelo serviço — sem depender só do catálogo.
          </p>
        </aside>
      </div>
      <div className="border-t border-line bg-[#f8fafc]">
        <div className="container-wide px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate">
            Precisando de ajuda rápida?
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {megaHelp.map((item, index) => {
              const Icon = helpIcons[index];
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onNavigate}
                  className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-accent/40"
                >
                  <Icon size={18} className="text-accent" />
                  <span>
                    <span className="block text-sm font-semibold text-navy">{item.title}</span>
                    <span className="text-xs text-slate">{item.text}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
