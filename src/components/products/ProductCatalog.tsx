"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/cards/ProductCard";
import { productCategories, products } from "@/lib/data/products";

export function ProductCatalog({ initialCategory = "" }: { initialCategory?: string }) {
  const [category, setCategory] = useState(initialCategory);

  const filtered = useMemo(
    () => products.filter((item) => !category || item.category === category),
    [category],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("")}
          className={`rounded-full px-4 py-2 text-sm ${!category ? "bg-navy text-white" : "border border-line bg-white"}`}
        >
          Todos
        </button>
        {productCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 text-sm ${
              category === item ? "bg-navy text-white" : "border border-line bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <ProductCard
            key={item.slug}
            href={`/produtos/${item.slug}`}
            name={item.name}
            series={item.series}
            excerpt={item.excerpt}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
