"use client";

import { useMemo, useState } from "react";
import { searchSite } from "@/lib/search";
import Link from "next/link";

export function SearchResults({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => searchSite(query), [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar por vibração, amortecedor, óleo e gás..."
        className="w-full rounded-md border border-line px-4 py-3 text-base"
      />
      <div className="mt-8 space-y-8">
        {query.length < 2 ? (
          <p className="text-slate">Digite para ver resultados agrupados por categoria.</p>
        ) : results.length === 0 ? (
          <p className="text-slate">Nenhum resultado encontrado.</p>
        ) : (
          results.map((group) => (
            <section key={group.category}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{group.category}</h2>
              <ul className="mt-3 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href + item.title} className="rounded-xl border border-line bg-white p-4 shadow-card">
                    <Link href={item.href} className="font-semibold text-navy hover:text-accent">
                      {item.title}
                    </Link>
                    <p className="mt-1 text-sm text-slate">{item.excerpt}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
