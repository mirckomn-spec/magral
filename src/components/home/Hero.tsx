"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const slides = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80",
  "/hero/142847950316.jpg",
  "/hero/159153402786.jpg",
  "/hero/168370461259.jpg",
  "/hero/178026143597.jpg",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate -mt-[92px] min-h-[760px] overflow-hidden bg-navy text-white">
      {slides.map((src, slideIndex) => (
        <div
          key={src}
          className={`absolute inset-0 scale-105 bg-cover bg-center transition-opacity duration-[1400ms] ease-in-out ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden={slideIndex !== index}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.92)_8%,rgba(7,17,31,0.55)_58%,rgba(7,17,31,0.25)_100%)]" />
      <div className="container-wide relative flex min-h-[760px] flex-col justify-center py-28">
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
          Engenharia e tecnologia para controlar movimento, pressão e fluidos na indústria.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:text-lg">
          Da análise do problema à solução, fornecimento, manutenção e suporte técnico.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/solucoes">Preciso de uma solução</Button>
          <Button href="/produtos" variant="secondary">
            Procurar um produto
          </Button>
        </div>
        <Link href="/engenharia" className="mt-8 text-sm text-white/70 hover:text-white">
          Conheça a engenharia MAGRAL →
        </Link>
      </div>
    </section>
  );
}
