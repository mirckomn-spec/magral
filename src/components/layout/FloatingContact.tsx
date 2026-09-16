import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <Link
      href="/contato"
      className="fixed bottom-20 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(21,116,255,0.35)] transition hover:bg-accent-dark"
    >
      <MessageCircle size={18} />
      Falar com especialista
    </Link>
  );
}
