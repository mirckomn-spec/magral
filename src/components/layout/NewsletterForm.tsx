"use client";

import { FormEvent, useState } from "react";
import { composeMailto } from "@/lib/mail";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email") || "").trim();
    if (!email.includes("@")) return;
    window.location.href = composeMailto("Newsletter MAGRAL", [`E-mail para newsletter: ${email}`]);
    setSent(true);
  }

  if (sent) {
    return <p className="mt-3 text-sm text-white/80">Inscrição registrada. Conteúdo técnico em breve.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-3 flex gap-2">
      <input
        name="email"
        type="email"
        required
        placeholder="Seu e-mail"
        className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/35"
      />
      <button type="submit" className="rounded-md bg-accent px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em]">
        Enviar
      </button>
    </form>
  );
}
