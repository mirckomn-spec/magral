import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { LocationMap } from "@/components/contact/LocationMap";
import { ContactForm } from "@/components/forms/ContactForm";
import { locations, site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Fale com a MAGRAL",
  description: "Conte seu problema ou necessidade. A equipe técnica da MAGRAL entra em contato.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#f6f8fb] py-16">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-navy md:text-5xl">Fale com nossa equipe técnica</h1>
          <p className="mt-5 text-base leading-7 text-slate">
            Conte seu problema ou necessidade que nossa equipe entrará em contato. O canal é técnico: solução, produto, manutenção ou peça.
          </p>
          <div className="relative mt-8 h-52 overflow-hidden rounded-2xl border border-line shadow-card sm:h-64">
            <Image
              src="/bannerContato.jpg"
              alt="Equipe técnica MAGRAL"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <ul className="mt-8 space-y-3 text-sm text-slate">
            <li>
              WhatsApp:{" "}
              <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="text-navy hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              E-mail:{" "}
              <a href={`mailto:${site.email}`} className="text-navy hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-line bg-white p-7 shadow-card">
          <ContactForm extraFields />
        </div>
      </div>

      <div className="container-site mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">Nossas localizações</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate">
          Visite a matriz em São Paulo ou a filial em Macaé. Os mapas abaixo abrem no Google Maps.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {locations.map((location) => (
            <article key={location.title} className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <div className="relative h-56 overflow-hidden bg-[#e8eef5] sm:h-64">
                <LocationMap title={location.title} query={location.mapQuery} />
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
                  <MapPin size={18} className="text-accent" />
                  {location.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate">{location.address}</p>
                <p className="mt-1 text-sm font-medium text-navy">{location.phones}</p>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-accent hover:text-accent-dark"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
