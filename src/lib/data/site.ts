import type { NavColumn } from "../types";
import { solutions } from "./solutions";
import { products, productCategories } from "./products";
import { segments } from "./segments";
import { contentCategories } from "./content";

export const locations = [
  {
    title: "Matriz São Paulo/SP",
    address: "R. Ibitinga, 670 - Vila Bertioga - São Paulo - SP - CEP: 03186-020",
    phones: "Pabx: +55 11 2021-7202 / Fax: +55 11 2021-7203",
    mapQuery: "R. Ibitinga, 670, Vila Bertioga, São Paulo, SP, 03186-020",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=R.+Ibitinga,+670,+Vila+Bertioga,+S%C3%A3o+Paulo",
  },
  {
    title: "Filial Macaé/RJ",
    address: "Avenida Atlântica, 386, sala 606 – Praia Campista - RJ - CEP: 27920-325",
    phones: "Tels: +55 21 2770-6811",
    mapQuery: "Avenida Atlântica, 386, Praia Campista, Macaé, RJ, 27920-325",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Atl%C3%A2ntica,+386,+Praia+Campista,+Maca%C3%A9,+RJ",
  },
];

export const site = {
  name: "MAGRAL",
  phone: "+55 11 2021-7202",
  email: "magral@magral.com.br",
  address: locations[0].address,
  whatsapp: "551120217202",
  whatsappUrl: "https://wa.me/551120217202",
};

export const navItems = [
  { label: "SOLUÇÕES", href: "/solucoes", key: "solucoes" as const },
  { label: "PRODUTOS", href: "/produtos", key: "produtos" as const },
  { label: "ENGENHARIA", href: "/engenharia", key: "engenharia" as const },
  { label: "SEGMENTOS", href: "/segmentos", key: "segmentos" as const },
  { label: "CONTEÚDO", href: "/conteudo", key: "conteudo" as const },
  { label: "EMPRESA", href: "/empresa", key: "empresa" as const },
];

export const megaColumns: Record<string, NavColumn[]> = {
  solucoes: [
    {
      title: "Soluções por problema",
      href: "/solucoes",
      items: solutions.map((item) => ({
        label: item.shortTitle,
        href: `/solucoes/${item.slug}`,
      })),
    },
  ],
  produtos: [
    {
      title: "Categorias",
      href: "/produtos",
      items: productCategories.map((label) => ({
        label,
        href: `/produtos?categoria=${encodeURIComponent(label)}`,
      })),
    },
    {
      title: "Destaques",
      href: "/produtos",
      items: products.slice(0, 6).map((item) => ({
        label: `${item.name} ${item.series}`,
        href: `/produtos/${item.slug}`,
      })),
    },
  ],
  engenharia: [
    {
      title: "Serviços de engenharia",
      href: "/engenharia",
      items: [
        { label: "Dimensionamento", href: "/engenharia#dimensionamento" },
        { label: "Especificação", href: "/engenharia#especificacao" },
        { label: "Desenvolvimento", href: "/engenharia#desenvolvimento" },
        { label: "Testes", href: "/engenharia#testes" },
        { label: "Suporte técnico", href: "/engenharia#suporte-tecnico" },
        { label: "Manutenção", href: "/manutencao" },
      ],
    },
  ],
  segmentos: [
    {
      title: "Indústrias",
      href: "/segmentos",
      items: segments.map((item) => ({
        label: item.name,
        href: `/segmentos/${item.slug}`,
      })),
    },
  ],
  conteudo: [
    {
      title: "Biblioteca técnica",
      href: "/conteudo",
      items: contentCategories.map((item) => ({
        label: item.label,
        href: `/conteudo?categoria=${item.slug}`,
      })),
    },
  ],
};

export const megaHelp = [
  {
    title: "Falar com especialista",
    text: "Precisa de ajuda?",
    href: "/contato",
  },
  {
    title: "Manutenção e reparo",
    text: "Seu equipamento parou?",
    href: "/manutencao",
  },
  {
    title: "Peças e reposição",
    text: "Precisa de um componente?",
    href: "/pecas",
  },
  {
    title: "Enviar documento",
    text: "Desenho, foto ou especificação",
    href: "/contato",
  },
];

export const trustItems = [
  { title: "+25 anos", text: "de experiência" },
  { title: "Equipe técnica", text: "especializada" },
  { title: "Soluções", text: "personalizadas" },
  { title: "ISO 9001:2015", text: "e CRC Petrobras" },
  { title: "Atendimento", text: "OEM e Aftermarket" },
];

export const differentiators = [
  {
    title: "Mais de 25 anos de experiência",
    text: "Histórico em aplicações industriais críticas, com aprendizado acumulado em campo.",
  },
  {
    title: "Engenharia técnica especializada",
    text: "Dimensionamento e especificação a partir do problema real, não apenas do catálogo.",
  },
  {
    title: "Soluções personalizadas",
    text: "Cada aplicação tem ciclo, ambiente e restrição próprios. O projeto acompanha isso.",
  },
  {
    title: "Certificações e qualidade",
    text: "Processos alinhados a ISO 9001:2015 e atendimento a requisitos de clientes como CRC Petrobras.",
  },
  {
    title: "Atendimento especializado",
    text: "Canal direto com equipe técnica para cotação, manutenção, peças e suporte.",
  },
];
