"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { composeMailto } from "@/lib/mail";

type Errors = Record<string, string>;

export function ContactForm({
  submitLabel = "Enviar mensagem",
  extraFields = false,
}: {
  submitLabel?: string;
  extraFields?: boolean;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: Errors = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const need = String(form.get("need") || "").trim();
    const help = String(form.get("help") || "").trim();

    if (name.length < 3) next.name = "Informe seu nome completo.";
    if (!company) next.company = "Informe a empresa.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "E-mail inválido.";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Informe um telefone ou WhatsApp válido.";
    if (need.length < 12) next.need = "Descreva o problema ou a necessidade com mais detalhes.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    window.location.href = composeMailto("Contato pelo site MAGRAL", [
      `Nome: ${name}`,
      `Empresa: ${company}`,
      `E-mail: ${email}`,
      `Telefone: ${phone}`,
      `Necessidade: ${need}`,
      help ? `Como podemos ajudar: ${help}` : "",
    ]);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-white p-8 text-center shadow-card">
        <h3 className="text-xl font-semibold text-navy">Mensagem preparada</h3>
        <p className="mt-3 text-sm leading-6 text-slate">
          Seu aplicativo de e-mail foi aberto com os dados preenchidos. Envie a mensagem para concluir o contato com a equipe técnica.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <Field label="Nome completo" name="name" error={errors.name} />
      <Field label="Empresa" name="company" error={errors.company} />
      <Field label="E-mail" name="email" type="email" error={errors.email} />
      <Field label="WhatsApp / Telefone" name="phone" error={errors.phone} />
      <Field label="Qual é o problema ou necessidade?" name="need" textarea error={errors.need} />
      {extraFields ? (
        <>
          <Field label="Como podemos ajudar?" name="help" textarea />
          <p className="text-sm leading-6 text-slate">
            Se precisar enviar desenho, foto ou especificação, anexe o arquivo no e-mail que será aberto após enviar o formulário.
          </p>
        </>
      ) : null}
      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const classes =
    "mt-2 w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-accent " +
    (error ? "border-red-400" : "border-line");

  return (
    <label className="text-sm font-medium text-navy">
      {label}
      {textarea ? (
        <textarea name={name} rows={4} className={classes} />
      ) : (
        <input name={name} type={type} className={classes} />
      )}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
