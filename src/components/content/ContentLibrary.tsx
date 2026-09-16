"use client";

import { useMemo, useState } from "react";
import { ContentCard } from "@/components/cards/ContentCard";
import { contentCategories, contents } from "@/lib/data/content";

export function ContentLibrary({ initialCategory = "" }: { initialCategory?: string }) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return contents.filter((item) => {
      const byCategory = !category || item.category === category;
      const q = query.toLowerCase();
      const byQuery = !q || item.title.toLowerCase().includes(q) || item.excerpt.toLowerCase().includes(q);
      return byCategory && byQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("")}
            className={`rounded-full px-4 py-2 text-sm ${!category ? "bg-navy text-white" : "bg-white text-navy border border-line"}`}
          >
            Todos
          </button>
          {contentCategories.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setCategory(item.slug)}
              className={`rounded-full px-4 py-2 text-sm ${
                category === item.slug ? "bg-navy text-white" : "bg-white text-navy border border-line"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar na biblioteca"
          className="w-full rounded-md border border-line bg-white px-4 py-2.5 text-sm md:max-w-xs"
        />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <ContentCard
            key={item.slug}
            href={`/conteudo/${item.slug}`}
            title={item.title}
            excerpt={item.excerpt}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}
