import type { Metadata } from "next";
import { ContentLibrary } from "@/components/content/ContentLibrary";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Biblioteca técnica",
  description: "Artigos, guias, cases, vídeos e FAQ da MAGRAL para educar o cliente e apoiar decisões técnicas.",
};

export default async function ContentPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria = "" } = await searchParams;
  return (
    <section className="bg-[#f6f8fb] py-16">
      <div className="container-site">
        <SectionTitle
          align="left"
          title="Bibliotécnica MAGRAL"
          text="Conhecimento técnico para quem precisa especificar, manter e decidir com segurança."
        />
        <div className="mt-10">
          <ContentLibrary initialCategory={categoria} />
        </div>
      </div>
    </section>
  );
}
