"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { megaColumns, megaHelp, navItems } from "@/lib/data/site";
import { MegaMenu } from "./MegaMenu";
import { SearchModal } from "@/components/search/SearchModal";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || Boolean(activeMenu) || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`relative sticky top-0 z-50 transition duration-300 ${
          solid ? "bg-navy text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]" : "bg-transparent text-white"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-wide flex h-[92px] items-center justify-between gap-6">
          <Link href="/" className={`relative flex shrink-0 items-center ${isHome ? "translate-y-[1cm]" : ""}`}>
            <Image
              src="/logo.png"
              alt="MAGRAL Hidráulica e Pneumática"
              width={280}
              height={80}
              className="h-16 w-auto bg-transparent brightness-0 invert sm:h-[72px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const hasMega = item.key !== "empresa";
              return (
                <div
                  key={item.key}
                  onMouseEnter={() => setActiveMenu(hasMega ? item.key : null)}
                >
                  <Link
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-[12px] font-semibold tracking-[0.12em] transition hover:text-accent ${
                      pathname.startsWith(item.href) ? "text-accent" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contato"
              className="hidden rounded-md bg-accent px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-accent-dark md:inline-flex"
            >
              Fale com a MAGRAL
            </Link>
            <button
              type="button"
              aria-label="Abrir busca"
              onClick={() => setSearchOpen(true)}
              className="rounded-md p-2 hover:bg-white/10"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              className="rounded-md p-2 xl:hidden"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className="hidden xl:block">
          {activeMenu && activeMenu !== "empresa" ? (
            <div className="absolute inset-x-0 top-full">
              <MegaMenu active={activeMenu} onNavigate={() => setActiveMenu(null)} />
            </div>
          ) : null}
        </div>

        {mobileOpen ? (
          <div className="max-h-[calc(100vh-92px)] overflow-y-auto border-t border-white/10 bg-navy xl:hidden">
            {navItems.map((item) => {
              const columns = megaColumns[item.key] ?? [];
              const open = openAccordion === item.key;
              return (
                <div key={item.key} className="border-b border-white/10">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold tracking-[0.12em]"
                    onClick={() => setOpenAccordion(open ? null : item.key)}
                  >
                    {item.label}
                    {columns.length ? <ChevronDown size={16} className={open ? "rotate-180" : ""} /> : null}
                  </button>
                  {open ? (
                    <div className="space-y-2 px-5 pb-4">
                      <Link href={item.href} className="block text-sm text-accent">
                        Ver tudo
                      </Link>
                      {columns.flatMap((column) =>
                        column.items.map((link) => (
                          <Link key={link.href + link.label} href={link.href} className="block text-sm text-white/75">
                            {link.label}
                          </Link>
                        )),
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <div className="grid gap-2 p-5">
              {megaHelp.map((item) => (
                <Link key={item.title} href={item.href} className="rounded-md bg-white/5 px-4 py-3 text-sm">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
