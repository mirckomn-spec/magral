"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { composeMailto } from "@/lib/mail";

export function PartsForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const equipment = String(form.get("equipment") || "").trim();
    const part = String(form.get("part") || "").trim();
    const brand = String(form.get("brand") || "").trim();
    const need = String(form.get("need") || "").trim();
    if (!equipment || !part || need.length < 10) {
      setError("Preencha equipamento, tipo de peça e uma descrição clara da necessidade.");
      return;
    }
    setError("");
    window.location.href = composeMailto("Solicitação de peça — MAGRAL", [
      `Equipamento: ${equipment}`,
      `Peça: ${part}`,
      brand ? `Fabricante: ${brand}` : "",
      `Necessidade: ${need}`,
    ]);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-white p-8 shadow-card">
        <h3 className="text-xl font-semibold text-navy">Solicitação preparada</h3>
        <p className="mt-3 text-sm text-slate">
          Seu aplicativo de e-mail foi aberto com os dados da peça. Envie a mensagem para a equipe técnica concluir o atendimento.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="text-sm font-medium text-navy">
        Equipamento / Aplicação
        <input name="equipment" className="mt-2 w-full rounded-md border border-line px-3 py-2.5 text-sm" />
      </label>
      <label className="text-sm font-medium text-navy">
        Qual é o tipo de peça?
        <input name="part" className="mt-2 w-full rounded-md border border-line px-3 py-2.5 text-sm" />
      </label>
      <label className="text-sm font-medium text-navy">
        Fabricante
        <input name="brand" className="mt-2 w-full rounded-md border border-line px-3 py-2.5 text-sm" />
      </label>
      <label className="text-sm font-medium text-navy">
        Descreva sua necessidade
        <textarea name="need" rows={4} className="mt-2 w-full rounded-md border border-line px-3 py-2.5 text-sm" />
      </label>
      <p className="text-sm leading-6 text-slate">
        Se tiver catálogo, foto ou desenho da peça, anexe o arquivo no e-mail que será aberto após enviar.
      </p>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <Button type="submit">Enviar para equipe técnica</Button>
    </form>
  );
}
