import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Quem somos, engenharia, certificações e o jeito MAGRAL de atender a indústria.",
};

export default function CompanyPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-site max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Empresa</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-navy md:text-5xl">Quem somos</h1>
        <p className="mt-5 text-base leading-7 text-slate">
          A MAGRAL é uma empresa de engenharia e soluções industriais focada em controlar movimento, pressão e fluidos. Atuamos com especificação técnica, fornecimento, manutenção e suporte — da análise do problema à operação estável.
        </p>
        <p className="mt-4 text-base leading-7 text-slate">
          O objetivo do novo site é o mesmo da operação: ajudar o cliente a encontrar a solução pelo problema, não apenas pelo catálogo, com clareza técnica e caminho rápido para a equipe.
        </p>
        <div id="certificacoes" className="mt-10 rounded-xl border border-line p-6">
          <h2 className="text-2xl font-semibold text-navy">Certificações</h2>
          <p className="mt-3 text-sm leading-7 text-slate">
            Processos alinhados a ISO 9001:2015 e atendimento a requisitos de clientes industriais, incluindo CRC Petrobras. Os selos e números oficiais podem ser substituídos pelos documentos vigentes da empresa.
          </p>
        </div>
        <div className="mt-8">
          <Button href="/contato">Fale com a MAGRAL</Button>
        </div>
      </div>
    </section>
  );
}
