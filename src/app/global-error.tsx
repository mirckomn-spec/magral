"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#f6f8fb] font-sans antialiased">
        <section className="mx-auto max-w-xl px-6 py-24 text-center">
          <h1 className="text-3xl font-semibold text-[#07111f]">Serviço temporariamente indisponível</h1>
          <p className="mt-4 text-[#5b6778]">Atualize a página ou tente novamente em alguns instantes.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-md bg-[#1574ff] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Tentar de novo
          </button>
        </section>
      </body>
    </html>
  );
}
