"use client";

import { useState } from "react";

export function LocationMap({
  title,
  query,
}: {
  title: string;
  query: string;
}) {
  const [active, setActive] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=pt-BR&z=16&output=embed`;

  if (!active) {
    return (
      <button
        type="button"
        onClick={() => setActive(true)}
        className="flex h-full min-h-56 w-full items-center justify-center bg-[#e8eef5] text-sm font-semibold text-navy transition hover:bg-[#dce6f2] sm:min-h-64"
      >
        Ver mapa de {title}
      </button>
    );
  }

  return (
    <iframe
      title={`Mapa ${title}`}
      src={src}
      className="absolute inset-0 h-full w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
