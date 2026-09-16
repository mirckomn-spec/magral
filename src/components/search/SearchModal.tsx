"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchSite } from "@/lib/search";

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => searchSite(query), [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-navy/55 px-4 py-10 backdrop-blur-sm" onClick={onClose}>
      <div
        className="animate-fade-up mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-menu"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <Search size={18} className="text-accent" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar produtos, soluções, conteúdo, aplicações..."
            className="w-full bg-transparent text-base outline-none"
          />
          <button type="button" onClick={onClose} aria-label="Fechar busca" className="text-slate hover:text-navy">
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto p-5">
          {query.length < 2 ? (
            <p className="text-sm text-slate">Digite pelo menos 2 caracteres. Exemplo: vibração, amortecedor, óleo e gás.</p>
          ) : results.length === 0 ? (
            <p className="text-sm text-slate">Nenhum resultado para “{query}”.</p>
          ) : (
            <div className="space-y-6">
              {results.map((group) => (
                <section key={group.category}>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item.href + item.title}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block rounded-lg border border-transparent px-3 py-2 hover:border-line hover:bg-mist"
                        >
                          <span className="block text-sm font-semibold text-navy">{item.title}</span>
                          <span className="text-sm text-slate">{item.excerpt}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
          <div className="mt-6 text-right">
            <Link href={`/busca?q=${encodeURIComponent(query)}`} onClick={onClose} className="text-sm font-medium text-accent">
              Ver todos os resultados →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
