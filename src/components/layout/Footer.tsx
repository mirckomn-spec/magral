import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { products } from "@/lib/data/products";
import { site } from "@/lib/data/site";
import { solutions } from "@/lib/data/solutions";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer id="site-footer" className="relative z-20 mt-auto w-full shrink-0 bg-navy text-white">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <Link href="/" className="inline-flex">
            <Image
              src="/logo.png"
              alt="MAGRAL Hidráulica e Pneumática"
              width={240}
              height={68}
              className="h-14 w-auto bg-transparent object-contain brightness-0 invert"
            />
          </Link>
          <p className="mt-4 text-sm leading-6 text-white/65">
            Engenharia e tecnologia para controlar movimento, pressão e fluidos na indústria.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Sobre a MAGRAL</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li><Link href="/empresa">Quem somos</Link></li>
            <li><Link href="/engenharia">Engenharia</Link></li>
            <li><Link href="/empresa#certificacoes">Certificações</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Soluções</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {solutions.map((item) => (
              <li key={item.slug}>
                <Link href={`/solucoes/${item.slug}`}>{item.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Produtos</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {products.map((item) => (
              <li key={item.slug}>
                <Link href={`/produtos/${item.slug}`}>{item.category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Engenharia</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            <li><Link href="/engenharia#dimensionamento">Dimensionamento</Link></li>
            <li><Link href="/engenharia#desenvolvimento">Desenvolvimento</Link></li>
            <li><Link href="/engenharia#testes">Testes</Link></li>
            <li><Link href="/manutencao">Manutenção</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Contato</p>
          <ul className="mt-3 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5" /> {site.phone}</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5" /> {site.email}</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5" /> {site.address}</li>
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Newsletter</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-4 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6">
            <span className="rounded border border-white/20 px-3 py-1">ISO 9001:2015</span>
            <span className="rounded border border-white/20 px-3 py-1">CRC Petrobras</span>
          </div>
          <p>© {new Date().getFullYear()} MAGRAL. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
