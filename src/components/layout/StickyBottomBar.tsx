"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/data/site";

export function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");

    const update = () => {
      const scrolled = window.scrollY > 48;
      const footerRect = footer?.getBoundingClientRect();
      const footerOnScreen = Boolean(footerRect && footerRect.top < window.innerHeight - 24);
      setVisible(scrolled && !footerOnScreen);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-navy text-white">
      <div className="container-wide flex h-14 items-center justify-between gap-4">
        <p className="truncate text-xs text-white/70 sm:text-sm">
          {site.name} · {site.phone}
        </p>
        <Link
          href="/contato"
          className="shrink-0 rounded-md bg-accent px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-accent-dark"
        >
          Fale com a MAGRAL
        </Link>
      </div>
    </div>
  );
}
