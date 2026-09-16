import { Award, Headphones, Layers3, ShieldCheck, Timer } from "lucide-react";
import { trustItems } from "@/lib/data/site";

const icons = [Timer, Headphones, Layers3, Award, ShieldCheck];

export function TrustBar() {
  return (
    <section className="bg-navy-soft text-white">
      <div className="container-wide grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-5">
        {trustItems.map((item, index) => {
          const Icon = icons[index];
          return (
            <div key={item.title} className="flex items-start gap-3">
              <Icon size={18} className="mt-1 text-accent" />
              <p>
                <span className="block text-sm font-semibold">{item.title}</span>
                <span className="text-sm text-white/65">{item.text}</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
