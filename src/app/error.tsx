"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="container-site py-24 text-center">
      <h1 className="text-4xl font-semibold text-navy">Não foi possível carregar esta página</h1>
      <p className="mt-4 text-slate">Tente novamente. Se o problema continuar, fale com a equipe MAGRAL.</p>
      <div className="mt-8 flex justify-center gap-4">
        <button type="button" onClick={reset} className="rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white">
          Tentar de novo
        </button>
        <Link href="/" className="rounded-md px-4 py-2.5 text-sm font-semibold text-navy">
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
