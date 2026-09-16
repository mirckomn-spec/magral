import type { Product } from "../types";

export const products: Product[] = [
  {
    slug: "amortecedor-hidraulico-serie-ma",
    name: "Amortecedor Hidráulico",
    series: "Série MA",
    category: "Amortecedores",
    excerpt:
      "Alta capacidade de absorção de impacto com desaceleração controlada e longa vida útil.",
    description:
      "Os amortecedores hidráulicos da Série MA foram projetados para controlar energia cinética em ciclos industriais exigentes. Reduzem impacto, ruído e fadiga estrutural em pontes, prensas, automações e equipamentos móveis. A MAGRAL apoia o dimensionamento conforme massa, velocidade e frequência de operação.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      { title: "Alta capacidade de absorção", text: "Energia controlada em ciclos repetitivos." },
      { title: "Redução de impacto e ruído", text: "Proteção da estrutura e do entorno." },
      { title: "Longa vida útil", text: "Construção para regime industrial contínuo." },
      { title: "Diversas aplicações", text: "Do chão de fábrica ao ambiente offshore." },
    ],
    specs: [
      { label: "Faixa de energia", value: "conforme modelo e curso" },
      { label: "Temperatura de trabalho", value: "-20 °C a +80 °C" },
      { label: "Corpo", value: "aço tratado, pintura industrial" },
      { label: "Montagem", value: "rosca, flange ou acessórios" },
      { label: "Fluido", value: "óleo hidráulico de alta estabilidade" },
    ],
    applications: [
      "Fim de curso em cilindros e transferências",
      "Pontes rolantes e sistemas de içamento",
      "Prensas e linhas de estamparia",
      "Equipamentos navais e offshore",
    ],
    models: [
      { code: "MA-12", capacity: "até 350 Nm", stroke: "12 mm", thread: "M12" },
      { code: "MA-20", capacity: "até 1.200 Nm", stroke: "20 mm", thread: "M20" },
      { code: "MA-36", capacity: "até 5.800 Nm", stroke: "36 mm", thread: "M36" },
      { code: "MA-64", capacity: "alta capacidade", stroke: "64 mm", thread: "M64" },
    ],
    related: ["isoladores-de-vibracao", "acumuladores", "valvulas"],
    downloads: [
      { name: "Catálogo Série MA", type: "PDF" },
      { name: "Folha de dados técnicos", type: "PDF" },
      { name: "Guia de instalação", type: "PDF" },
    ],
    solutionSlugs: ["reduzir-impacto-e-choques", "reduzir-vibracao", "controlar-movimentos"],
  },
  {
    slug: "isoladores-de-vibracao",
    name: "Isoladores de Vibração",
    series: "Série IV",
    category: "Isoladores",
    excerpt: "Isolamento de máquinas, bases e estruturas para reduzir transmissão de vibração e ruído.",
    description:
      "Isoladores projetados para desacoplar a máquina da fundação, atenuando frequências críticas e protegendo estruturas, instrumentos e o ambiente de trabalho.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      { title: "Isolamento eficiente", text: "Redução da transmissão para a base." },
      { title: "Faixa de cargas", text: "Do equipamento leve ao skid pesado." },
      { title: "Ambientes industriais", text: "Opções para óleo, temperatura e intempéries." },
      { title: "Integração com engenharia", text: "Seleção a partir da frequência natural." },
    ],
    specs: [
      { label: "Materiais", value: "elastômero, mola e combinações" },
      { label: "Carga", value: "conforme ponto de operação" },
      { label: "Ambiente", value: "interno, externo e offshore" },
    ],
    applications: ["Compressores", "Grupos geradores", "Bombas", "Painéis e instrumentos"],
    models: [
      { code: "IV-S", capacity: "carga leve", stroke: "—", thread: "base" },
      { code: "IV-M", capacity: "carga média", stroke: "—", thread: "base" },
      { code: "IV-H", capacity: "carga elevada", stroke: "—", thread: "base" },
    ],
    related: ["amortecedor-hidraulico-serie-ma", "juntas"],
    downloads: [{ name: "Catálogo Isoladores", type: "PDF" }],
    solutionSlugs: ["reduzir-vibracao"],
  },
  {
    slug: "acumuladores",
    name: "Acumuladores Hidráulicos",
    series: "Série AH",
    category: "Acumuladores",
    excerpt: "Armazenamento de energia, amortecimento de pulsação e compensação de volume em circuitos hidráulicos.",
    description:
      "Acumuladores para estabilizar pressão, absorver picos e garantir reserva de energia em sistemas hidráulicos industriais e de processo.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      { title: "Estabilidade de pressão", text: "Compensa variações do circuito." },
      { title: "Absorção de pulsação", text: "Protege bombas, válvulas e instrumentos." },
      { title: "Reserva de energia", text: "Suporte a ciclos e emergências." },
      { title: "Suporte técnico", text: "Pré-carga e dimensionamento assistidos." },
    ],
    specs: [
      { label: "Tipos", value: "bexiga, pistão e membrana" },
      { label: "Pressão", value: "conforme classe do sistema" },
      { label: "Certificações", value: "sob consulta da aplicação" },
    ],
    applications: ["Unidades hidráulicas", "Prensas", "Sistemas de processo", "Offshore"],
    models: [
      { code: "AH-1", capacity: "1 L", stroke: "—", thread: "conexão padrão" },
      { code: "AH-10", capacity: "10 L", stroke: "—", thread: "conexão padrão" },
      { code: "AH-50", capacity: "50 L", stroke: "—", thread: "conexão padrão" },
    ],
    related: ["valvulas", "mangueiras", "amortecedor-hidraulico-serie-ma"],
    downloads: [{ name: "Catálogo Acumuladores", type: "PDF" }],
    solutionSlugs: ["controlar-pressao-e-pulsacao"],
  },
  {
    slug: "mangueiras",
    name: "Mangueiras Industriais",
    series: "Série MG",
    category: "Mangueiras",
    excerpt: "Mangueiras e conjuntos para hidráulica, processo e alta pressão, com montagem e rastreabilidade.",
    description:
      "Conjuntos de mangueira especificados para fluido, pressão, temperatura e raio de curvatura da aplicação, com opções de conexão e identificação.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      { title: "Classes de pressão", text: "Da linha industrial à alta pressão." },
      { title: "Montagem técnica", text: "Terminais e crimpagem controlada." },
      { title: "Rastreabilidade", text: "Identificação para manutenção." },
      { title: "Reposição ágil", text: "Atendimento OEM e aftermarket." },
    ],
    specs: [
      { label: "Normas", value: "conforme aplicação e fluido" },
      { label: "Temperatura", value: "faixa conforme composto" },
    ],
    applications: ["Hidráulica móvel", "Bancadas de teste", "Petróleo e gás", "Máquinas industriais"],
    models: [
      { code: "MG-1SN", capacity: "média pressão", stroke: "—", thread: "várias" },
      { code: "MG-4SP", capacity: "alta pressão", stroke: "—", thread: "várias" },
    ],
    related: ["juntas", "valvulas"],
    downloads: [{ name: "Tabela de mangueiras", type: "PDF" }],
    solutionSlugs: ["sistemas-de-alta-pressao"],
  },
  {
    slug: "juntas",
    name: "Juntas e Vedações",
    series: "Série JT",
    category: "Juntas",
    excerpt: "Vedação para flanges, equipamentos e ambientes agressivos, com seleção de material por fluido e temperatura.",
    description:
      "Juntas industriais para manter a integridade do sistema, evitando vazamentos e contaminantes em flanges e conexões críticas.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      { title: "Materiais selecionados", text: "Compatibilidade com fluido e temperatura." },
      { title: "Integridade de flange", text: "Reduz retrabalho e vazamentos." },
      { title: "Ambientes críticos", text: "Processo, energia e óleo e gás." },
    ],
    specs: [
      { label: "Tipos", value: "planas, espiraladas e especiais" },
      { label: "Normas", value: "ANSI / DIN / aplicações especiais" },
    ],
    applications: ["Flanges de processo", "Trocadores", "Bombas", "Skids"],
    models: [
      { code: "JT-P", capacity: "serviço geral", stroke: "—", thread: "—" },
      { code: "JT-X", capacity: "serviço crítico", stroke: "—", thread: "—" },
    ],
    related: ["mangueiras", "isoladores-de-vibracao"],
    downloads: [{ name: "Guia de juntas", type: "PDF" }],
    solutionSlugs: ["reduzir-vibracao", "sistemas-de-alta-pressao"],
  },
  {
    slug: "valvulas",
    name: "Válvulas Industriais",
    series: "Série VL",
    category: "Válvulas",
    excerpt: "Controle de fluxo, pressão e segurança em circuitos hidráulicos e de processo.",
    description:
      "Válvulas para regulagem, alívio e direcionamento, especificadas conforme o regime do sistema e a criticidade da aplicação.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      { title: "Controle preciso", text: "Resposta alinhada ao processo." },
      { title: "Proteção do sistema", text: "Alívio e segurança." },
      { title: "Integração", text: "Combina com acumuladores e amortecimento." },
    ],
    specs: [
      { label: "Funções", value: "alívio, retenção, controle e direção" },
      { label: "Conexões", value: "conforme circuito" },
    ],
    applications: ["Unidades hidráulicas", "Bancadas", "Processo contínuo"],
    models: [
      { code: "VL-R", capacity: "alívio", stroke: "—", thread: "—" },
      { code: "VL-C", capacity: "controle", stroke: "—", thread: "—" },
    ],
    related: ["acumuladores", "amortecedor-hidraulico-serie-ma"],
    downloads: [{ name: "Linha de válvulas", type: "PDF" }],
    solutionSlugs: ["controlar-movimentos", "controlar-pressao-e-pulsacao"],
  },
];

export const productCategories = [
  "Amortecedores",
  "Acumuladores",
  "Isoladores",
  "Mangueiras",
  "Juntas",
  "Válvulas",
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}
