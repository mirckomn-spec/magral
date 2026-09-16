import type { Metadata } from "next";
import { PartsForm } from "@/components/forms/PartsForm";

export const metadata: Metadata = {
  title: "Peças e reposição",
  description: "Solicite peças e componentes MAGRAL com dados do equipamento, fabricante e documentos técnicos.",
};

export default function PartsPage() {
  return (
    <section className="bg-[#f6f8fb] py-16">
      <div className="container-site grid items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Peças e reposição</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Precisa de uma peça ou componente?
          </h1>
          <p className="mt-5 text-base leading-7 text-slate">
            Envie o máximo de informação possível: modelo, aplicação, fabricante e documentos. A equipe técnica identifica o componente correto e o caminho de reposição.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-slate">
            <li>• Número de série, código ou foto da peça</li>
            <li>• Condição de operação e fluido</li>
            <li>• Urgência e impacto da parada</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
          <PartsForm />
        </div>
      </div>
    </section>
  );
}
