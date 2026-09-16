"use client";

import { useState } from "react";
import Image from "next/image";

const divisions = [
  {
    id: "motion" as const,
    title: "Divisão Motion Control",
    logo: "/logoMotion.png",
    topics: ["automação", "movimento", "amortecimento", "vibração", "componentes"],
  },
  {
    id: "fluid" as const,
    title: "Divisão Fluid Control",
    logo: "/logoFluid.png",
    topics: ["hidráulica", "pneumática", "pressão", "vazão", "fluidos"],
  },
];

export function DivisionsSection() {
  const [active, setActive] = useState<"motion" | "fluid" | null>(null);

  return (
    <section className="bg-[#0C1A2E] py-20">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {divisions.map((item) => {
            const selected = active === item.id;
            return (
              <div key={item.id} className="flex flex-col items-center">
                <button
                  type="button"
                  aria-expanded={selected}
                  aria-controls={`${item.id}-topics`}
                  onClick={() => setActive(selected ? null : item.id)}
                  className={`group flex w-full max-w-md items-center justify-center rounded-xl border px-8 py-10 transition duration-300 ${
                    selected
                      ? "border-accent bg-white/10 shadow-[0_0_0_1px_rgba(21,116,255,0.35)]"
                      : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.08]"
                  }`}
                >
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={420}
                    height={120}
                    className="h-16 w-auto max-w-full object-contain sm:h-20"
                  />
                </button>
                <div
                  id={`${item.id}-topics`}
                  className={`grid w-full max-w-md transition-all duration-300 ${
                    selected ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="flex flex-wrap justify-center gap-2">
                      {item.topics.map((topic) => (
                        <li key={topic}>
                          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-medium capitalize tracking-wide text-white">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
