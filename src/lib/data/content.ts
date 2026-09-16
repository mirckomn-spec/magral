import type { ContentItem, EngineeringService } from "../types";

export const contents: ContentItem[] = [
  {
    slug: "7-causas-de-vibracao-em-maquinas",
    category: "artigos",
    title: "7 causas de vibração em máquinas industriais",
    excerpt: "Um olhar técnico sobre origens frequentes de vibração e o que investigar antes de substituir componentes.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    date: "12 mar 2026",
    body: [
      "Vibração raramente tem uma única causa. O ponto de medição, a frequência dominante e o regime de carga revelam se o problema está no rotativo, na base ou na transmissão.",
      "Antes de especificar um isolador ou amortecedor, a MAGRAL recomenda mapear desbalanceamento, folgas, ressonância e condição da fundação.",
      "Com o diagnóstico correto, o componente deixa de ser um paliativo e passa a integrar a solução de engenharia.",
    ],
    relatedSolutions: ["reduzir-vibracao"],
  },
  {
    slug: "guia-dimensionamento-amortecedores",
    category: "guias",
    title: "Guia prático: dados mínimos para dimensionar amortecedores",
    excerpt: "Massa, velocidade, ciclos e temperatura: o que a engenharia precisa para uma especificação segura.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    date: "02 fev 2026",
    body: [
      "O dimensionamento começa pela energia a ser absorvida e pela frequência de operação. Sem esses dados, qualquer catálogo vira tentativa e erro.",
      "Este guia lista as informações que aceleram o atendimento técnico da MAGRAL e reduzem retrabalho em campo.",
    ],
    relatedSolutions: ["reduzir-impacto-e-choques", "controlar-movimentos"],
  },
  {
    slug: "case-reducao-vibracao-offshore",
    category: "cases",
    title: "Case: redução de vibração em skid offshore",
    excerpt: "Como o isolamento correto reduziu transmissão estrutural e melhorou a estabilidade de instrumentos.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    date: "18 jan 2026",
    body: [
      "Um skid de processo apresentava vibração acima do limite aceitável para instrumentação. A análise combinou frequência natural da base e regime das bombas.",
      "A solução envolveu isoladores selecionados para o ponto de operação e verificação após a instalação.",
    ],
    relatedSolutions: ["reduzir-vibracao"],
  },
  {
    slug: "video-inspecao-amortecedores",
    category: "videos",
    title: "Vídeo: o que observar na inspeção de amortecedores",
    excerpt: "Pontos de verificação visual e operacional para equipes de manutenção.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    date: "09 dez 2025",
    body: [
      "Vazamentos, deformação de haste, ruído irregular e perda de curso são sinais de que o amortecedor precisa de avaliação técnica.",
      "A MAGRAL recomenda registrar ciclos e condições de processo para acelerar o diagnóstico.",
    ],
  },
  {
    slug: "faq-quando-trocar-um-amortecedor",
    category: "faq",
    title: "FAQ: quando trocar um amortecedor hidráulico?",
    excerpt: "Critérios práticos para decidir entre ajuste, reparo e substituição.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80",
    date: "21 nov 2025",
    body: [
      "A troca deve considerar perda de desempenho, vazamento, histórico de impacto e criticidade da aplicação — não apenas a idade do componente.",
    ],
    relatedSolutions: ["manutencao-e-reparo"],
  },
  {
    slug: "guia-acumuladores-hidraulicos",
    category: "guias",
    title: "Como especificar acumuladores sem subdimensionar o sistema",
    excerpt: "Pré-carga, volume útil e tipo construtivo fazem diferença na estabilidade de pressão.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    date: "03 out 2025",
    body: [
      "Acumuladores mal especificados não resolvem pulsação e ainda introduzem instabilidade. O ponto de partida é o perfil de pressão do circuito.",
    ],
    relatedSolutions: ["controlar-pressao-e-pulsacao"],
  },
  {
    slug: "case-manutencao-predial-industrial",
    category: "cases",
    title: "Case: manutenção programada em linha crítica",
    excerpt: "Diagnóstico, peças corretas e testes reduziram retrabalho em uma parada planejada.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    date: "14 set 2025",
    body: [
      "A equipe técnica identificou a causa raiz antes da reposição. O resultado foi menor tempo de intervenção e melhor desempenho após o retorno.",
    ],
    relatedSolutions: ["manutencao-e-reparo"],
  },
];

export const contentCategories = [
  { slug: "artigos" as const, label: "Artigos" },
  { slug: "guias" as const, label: "Guias" },
  { slug: "cases" as const, label: "Cases" },
  { slug: "videos" as const, label: "Vídeos" },
  { slug: "faq" as const, label: "FAQ" },
];

export function getContent(slug: string) {
  return contents.find((item) => item.slug === slug);
}

export const engineeringServices: EngineeringService[] = [
  {
    slug: "dimensionamento",
    title: "Dimensionamento",
    excerpt: "Cálculo da melhor solução para cada aplicação.",
    text: "Analisamos massa, velocidade, pressão, ciclos e ambiente para dimensionar o componente certo — não o mais genérico do catálogo.",
  },
  {
    slug: "especificacao",
    title: "Especificação",
    excerpt: "Definição técnica alinhada ao processo e às normas da aplicação.",
    text: "Transformamos o requisito operacional em especificação clara: materiais, conexões, faixas de trabalho e critérios de aceite.",
  },
  {
    slug: "desenvolvimento",
    title: "Desenvolvimento",
    excerpt: "Projetos especiais quando o padrão de mercado não resolve.",
    text: "Para aplicações atípicas, desenvolvemos ou adaptamos soluções com engenharia, prototipagem e acompanhamento de campo.",
  },
  {
    slug: "testes",
    title: "Testes",
    excerpt: "Validação de desempenho em bancada e em operação.",
    text: "Testes de desempenho, estanqueidade e ciclos críticos ajudam a confirmar que a solução atende o regime real da planta.",
  },
  {
    slug: "suporte-tecnico",
    title: "Suporte técnico",
    excerpt: "Acompanhamento após a especificação e a instalação.",
    text: "A equipe técnica apoia start-up, ajustes e dúvidas de aplicação, reduzindo risco de instalação inadequada.",
  },
  {
    slug: "manutencao",
    title: "Manutenção",
    excerpt: "Diagnóstico, reparo e plano de inspeção.",
    text: "Unimos manutenção e engenharia para tratar causa raiz, com testes e rastreabilidade no retorno do equipamento.",
  },
];

export const maintenanceServices = [
  {
    title: "Diagnóstico técnico",
    text: "Identificação da causa raiz a partir do sintoma, do ciclo e do histórico do equipamento.",
  },
  {
    title: "Manutenção e reparo",
    text: "Intervenção com critério de aplicação, não apenas substituição de peça.",
  },
  {
    title: "Inspeção",
    text: "Verificação periódica de componentes críticos para evitar falha surpresa.",
  },
  {
    title: "Testes",
    text: "Validação de desempenho antes do retorno à operação.",
  },
  {
    title: "Suporte técnico",
    text: "Orientação para equipes de manutenção e engenharia da planta.",
  },
];
