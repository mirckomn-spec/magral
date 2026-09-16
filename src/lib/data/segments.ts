import type { Segment } from "../types";

export const segments: Segment[] = [
  {
    slug: "oleo-e-gas",
    name: "Óleo e Gás",
    title: "Soluções MAGRAL para o setor de Óleo e Gás",
    excerpt:
      "Equipamentos e engenharia para ambientes de alta criticidade, da plataforma ao processamento.",
    description:
      "Atendemos aplicações onshore e offshore com foco em confiabilidade, certificações e suporte técnico. Amortecimento, isolação, alta pressão e manutenção entram no mesmo critério: reduzir risco operacional e tempo de parada.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    applications: [
      { title: "Sistemas de ancoragem e movimentação", text: "Controle de impacto em ciclos contínuos." },
      { title: "Skids e unidades de processo", text: "Vibração, pulsação e integridade de linha." },
      { title: "Redução de impacto", text: "Proteção estrutural em equipamentos críticos." },
      { title: "Acumuladores e hidráulica", text: "Estabilidade de pressão em sistemas auxiliares." },
    ],
    solutions: [
      "reduzir-impacto-e-choques",
      "reduzir-vibracao",
      "controlar-pressao-e-pulsacao",
      "sistemas-de-alta-pressao",
    ],
    products: ["amortecedor-hidraulico-serie-ma", "acumuladores", "mangueiras", "juntas"],
    cases: ["case-reducao-vibracao-offshore"],
  },
  {
    slug: "naval",
    name: "Naval",
    title: "Soluções MAGRAL para o setor Naval",
    excerpt: "Amortecimento, vedação e suporte técnico para embarcações e sistemas de convés.",
    description:
      "Ambientes marítimos exigem materiais, ciclos e manutenção pensados para corrosão, carga dinâmica e disponibilidade do ativo.",
    image:
      "https://images.unsplash.com/photo-1468581264429-2548ef9ebcd9?auto=format&fit=crop&w=1600&q=80",
    applications: [
      { title: "Equipamentos de convés", text: "Impacto e movimento em mar aberto." },
      { title: "Salas de máquinas", text: "Isolamento de vibração e ruído." },
    ],
    solutions: ["reduzir-impacto-e-choques", "reduzir-vibracao", "manutencao-e-reparo"],
    products: ["amortecedor-hidraulico-serie-ma", "isoladores-de-vibracao"],
    cases: ["case-manutencao-predial-industrial"],
  },
  {
    slug: "mineracao",
    name: "Mineração",
    title: "Soluções MAGRAL para Mineração",
    excerpt: "Proteção de equipamentos sujeitos a choque, poeira, carga pesada e ciclos severos.",
    description:
      "Da britagem ao transporte, reduzimos impacto e vibração para preservar estrutura e aumentar a disponibilidade.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f50103eca8?auto=format&fit=crop&w=1600&q=80",
    applications: [
      { title: "Transferência de material", text: "Choques repetitivos em chutes e transportadores." },
      { title: "Máquinas pesadas", text: "Amortecimento e reposição de componentes." },
    ],
    solutions: ["reduzir-impacto-e-choques", "manutencao-e-reparo"],
    products: ["amortecedor-hidraulico-serie-ma", "mangueiras"],
    cases: ["guia-dimensionamento-amortecedores"],
  },
  {
    slug: "energia",
    name: "Energia",
    title: "Soluções MAGRAL para Energia",
    excerpt: "Isolamento, hidráulica e manutenção para geração, transmissão e plantas industriais de energia.",
    description:
      "Grupos geradores, turbinas auxiliares e sistemas hidráulicos se beneficiam de isolamento correto e controle de pulsação.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971d53b5d4ea?auto=format&fit=crop&w=1600&q=80",
    applications: [
      { title: "Geração", text: "Vibração de grupos e skids." },
      { title: "Auxiliares hidráulicos", text: "Pressão, acumulação e válvulas." },
    ],
    solutions: ["reduzir-vibracao", "controlar-pressao-e-pulsacao"],
    products: ["isoladores-de-vibracao", "acumuladores"],
    cases: ["7-causas-de-vibracao-em-maquinas"],
  },
  {
    slug: "automotivo",
    name: "Automotivo",
    title: "Soluções MAGRAL para o setor Automotivo",
    excerpt: "Controle de movimento, impacto e vibração em linhas de produção e bancos de teste.",
    description:
      "Ciclos rápidos e repetibilidade exigem amortecimento preciso e reposição com padrão industrial.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80",
    applications: [
      { title: "Linhas de montagem", text: "Fim de curso e transferências." },
      { title: "Bancos de teste", text: "Controle de movimento e impacto." },
    ],
    solutions: ["controlar-movimentos", "reduzir-impacto-e-choques"],
    products: ["amortecedor-hidraulico-serie-ma", "valvulas"],
    cases: ["guia-dimensionamento-amortecedores"],
  },
  {
    slug: "maquinas-e-equipamentos",
    name: "Máquinas e Equipamentos",
    title: "Soluções MAGRAL para Máquinas e Equipamentos",
    excerpt: "Engenharia de aplicação para OEMs e usuários finais que precisam de desempenho e suporte técnico.",
    description:
      "Apoiamos fabricantes e plantas industriais na especificação de componentes que fazem parte do projeto original ou da reposição.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1600&q=80",
    applications: [
      { title: "OEM", text: "Integração no projeto da máquina." },
      { title: "Aftermarket", text: "Reposição, manutenção e upgrade." },
    ],
    solutions: ["controlar-movimentos", "manutencao-e-reparo", "sistemas-de-alta-pressao"],
    products: ["amortecedor-hidraulico-serie-ma", "valvulas", "mangueiras"],
    cases: ["case-manutencao-predial-industrial"],
  },
];

export function getSegment(slug: string) {
  return segments.find((item) => item.slug === slug);
}
