import { contents } from "./data/content";
import { products } from "./data/products";
import { segments } from "./data/segments";
import { solutions } from "./data/solutions";

export type SearchGroup = {
  category: string;
  items: { title: string; href: string; excerpt: string }[];
};

export function searchSite(query: string): SearchGroup[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const match = (value: string) => value.toLowerCase().includes(q);

  const solutionItems = solutions
    .filter((item) => match(item.title) || match(item.excerpt) || match(item.shortTitle) || match(item.problem))
    .map((item) => ({ title: item.title, href: `/solucoes/${item.slug}`, excerpt: item.excerpt }));

  const productItems = products
    .filter((item) => match(item.name) || match(item.series) || match(item.excerpt) || match(item.category) || match(item.description))
    .map((item) => ({
      title: `${item.name} ${item.series}`,
      href: `/produtos/${item.slug}`,
      excerpt: item.excerpt,
    }));

  const contentItems = contents
    .filter((item) => match(item.title) || match(item.excerpt) || match(item.body.join(" ")))
    .map((item) => ({ title: item.title, href: `/conteudo/${item.slug}`, excerpt: item.excerpt }));

  const applicationItems = [
    ...solutions.flatMap((item) =>
      item.applications
        .filter((app) => match(app.title) || match(app.text) || match(item.shortTitle))
        .map((app) => ({
          title: `${app.title} — ${item.shortTitle}`,
          href: `/solucoes/${item.slug}`,
          excerpt: app.text,
        })),
    ),
    ...segments
      .filter((item) => match(item.name) || match(item.excerpt) || match(item.description))
      .map((item) => ({
        title: `Segmento: ${item.name}`,
        href: `/segmentos/${item.slug}`,
        excerpt: item.excerpt,
      })),
  ];

  const serviceItems = [
    { title: "Engenharia de aplicação", href: "/engenharia", excerpt: "Dimensionamento, especificação, testes e suporte." },
    { title: "Manutenção e reparo", href: "/manutencao", excerpt: "Diagnóstico, inspeção, testes e suporte técnico." },
    { title: "Peças e reposição", href: "/pecas", excerpt: "Solicite um componente com documento técnico." },
  ].filter((item) => match(item.title) || match(item.excerpt));

  return [
    { category: "Soluções", items: solutionItems },
    { category: "Produtos", items: productItems },
    { category: "Conteúdo", items: contentItems },
    { category: "Aplicações", items: applicationItems },
    { category: "Serviços", items: serviceItems },
  ].filter((group) => group.items.length > 0);
}
