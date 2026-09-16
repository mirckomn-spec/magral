import type { Metadata } from "next";
import { ClipboardCheck, LifeBuoy, Search, FlaskConical, Wrench } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { maintenanceServices } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Manutenção e reparo",
  description: "Diagnóstico, manutenção, inspeção, testes e suporte técnico para equipamentos industriais.",
};

const icons = [Search, Wrench, ClipboardCheck, FlaskConical, LifeBuoy];

export default function MaintenancePage() {
  return (
    <section className="bg-[#f6f8fb] py-16">
      <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Manutenção e reparo</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Seu equipamento precisa de manutenção?
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate">
            Tratamos a causa raiz, não só o sintoma. Diagnóstico, peças corretas, testes e retorno à operação com critério técnico.
          </p>
          <div className="mt-10 grid gap-4">
            {maintenanceServices.map((item, index) => {
              const Icon = icons[index];
              return (
                <article key={item.title} className="flex gap-4 rounded-xl border border-line bg-white p-5 shadow-card">
                  <Icon className="mt-0.5 text-accent" size={20} />
                  <div>
                    <h2 className="font-semibold text-navy">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="h-fit rounded-2xl border border-line bg-white p-7 shadow-card">
          <h2 className="text-xl font-semibold text-navy">Falar com especialista</h2>
          <p className="mt-2 text-sm text-slate">Descreva o equipamento e o que está acontecendo.</p>
          <div className="mt-6">
            <ContactForm submitLabel="Falar com especialista" extraFields />
          </div>
        </div>
      </div>
    </section>
  );
}
