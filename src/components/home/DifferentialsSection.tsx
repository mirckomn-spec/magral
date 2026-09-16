import { differentiators } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function DifferentialsSection() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="container-site">
        <SectionTitle title="Por que escolher a MAGRAL?" tone="light" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((item) => (
            <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/contato">Fale com um especialista</Button>
        </div>
      </div>
    </section>
  );
}
