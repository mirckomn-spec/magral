"use client";

import { composeMailto } from "@/lib/mail";

export async function deliverContact(subject: string, lines: string[], files: File[]) {
  const text = lines.filter(Boolean).join("\n");
  const canShareFiles =
    files.length > 0 &&
    typeof navigator !== "undefined" &&
    typeof navigator.canShare === "function" &&
    navigator.canShare({ files });

  if (canShareFiles) {
    try {
      await navigator.share({ title: subject, text, files });
      return "shared" as const;
    } catch (error) {
      if ((error as Error).name === "AbortError") return "cancelled" as const;
    }
  }

  window.location.href = composeMailto(subject, [
    ...lines,
    files.length ? `Arquivos selecionados: ${files.map((file) => file.name).join(", ")}` : "",
  ]);
  return "mailto" as const;
}
