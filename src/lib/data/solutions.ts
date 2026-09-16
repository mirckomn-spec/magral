import type { Solution } from "../types";

export const solutions: Solution[] = [
  {
    slug: "reduzir-impacto-e-choques",
    title: "Como reduzir impacto e choques em equipamentos industriais?",
    shortTitle: "Reduzir impacto e choques",
    cardTitle: "Reduzir impacto e choques",
    excerpt:
      "Proteja estruturas, máquinas e pessoas com absorção controlada de energia em ciclos de parada e impacto.",
    intro:
      "Impactos repetidos aceleram fadiga, geram ruído e comprometem a precisão do processo. A MAGRAL dimensiona amortecimento para o ciclo real da aplicação.",
    problem:
      "Paradas bruscas, colisões de fim de curso e quedas de carga transmitem energia para a estrutura da máquina. Sem absorção adequada, surgem trincas, desalinhamento, ruído excessivo e paradas não planejadas.",
    causes: [
      "Fim de curso sem amortecimento hidráulico",
      "Cargas em queda livre ou desaceleração insuficiente",
      "Dimensionamento inadequado da energia cinética",
      "Desgaste de batentes e componentes de elastômero",
      "Variação de temperatura e viscosidade do fluido",
    ],
    help: "A equipe técnica analisa massa, velocidade, frequência de ciclo e ambiente. A partir disso, especificamos amortecedores hidráulicos, acumuladores e soluções combinadas, com suporte de instalação, testes e manutenção.",
    relatedProducts: ["amortecedor-hidraulico-serie-ma", "isoladores-de-vibracao", "acumuladores"],
    applications: [
      { title: "Sistemas de movimentação", text: "Guindastes, pontes rolantes e transferências de carga." },
      { title: "Prensas e automação", text: "Fim de curso, buffers e proteção de ferramental." },
      { title: "Offshore e naval", text: "Amortecimento em ambientes agressivos e ciclos contínuos." },
    ],
    relatedContent: ["7-causas-de-vibracao-em-maquinas", "guia-dimensionamento-amortecedores"],
  },
  {
    slug: "reduzir-vibracao",
    title: "Como reduzir vibração em máquinas industriais?",
    shortTitle: "Reduzir vibração",
    cardTitle: "Reduzir vibração em máquinas",
    excerpt:
      "Identifique a origem da vibração e aplique isolamento, amortecimento e correção estrutural com engenharia aplicada.",
    intro:
      "Entenda as causas, impactos e como a MAGRAL pode ajudar a resolver esse problema de forma técnica e duradoura.",
    problem:
      "A vibração excessiva reduz a vida útil dos equipamentos, gera ruídos, aumenta o consumo energético, afeta a precisão do processo e pode comprometer a segurança da operação. Em muitos casos, o sintoma aparece no produto, mas a origem está no desbalanceamento, na fundação ou na transmissão de energia entre máquina e estrutura.",
    causes: [
      "Desbalanceamento de rotativos",
      "Folgas em acoplamentos e bases",
      "Ressonância estrutural",
      "Isolamento inadequado",
      "Desgaste de rolamentos e folgas dinâmicas",
    ],
    help: "Combinamos diagnóstico, isolamento de vibração, amortecedores e ajustes de aplicação. O objetivo não é apenas fornecer um componente, e sim estabilizar o sistema para o regime de trabalho da planta.",
    relatedProducts: ["isoladores-de-vibracao", "amortecedor-hidraulico-serie-ma", "juntas"],
    applications: [
      { title: "Bombas e compressores", text: "Redução de transmissão para a base e tubulação." },
      { title: "Geração de energia", text: "Controle de vibração em grupos geradores e skids." },
      { title: "Linhas de processo", text: "Proteção de instrumentos e estruturas metálicas." },
    ],
    relatedContent: ["7-causas-de-vibracao-em-maquinas", "case-reducao-vibracao-offshore"],
  },
  {
    slug: "controlar-movimentos",
    title: "Como controlar movimentos com precisão e segurança?",
    shortTitle: "Controlar movimentos",
    cardTitle: "Controlar movimentos",
    excerpt:
      "Regule velocidade, posicionamento e amortecimento de fim de curso em sistemas hidráulicos e mecânicos.",
    intro:
      "Movimentos descontrolados geram impacto, perda de ciclo e risco operacional. A MAGRAL especifica soluções para desaceleração e controle de trajetória.",
    problem:
      "Atuadores, cilindros e mecanismos de transferência precisam de perfil de movimento previsível. Sem controle, o equipamento acelera além do previsto e descarrega energia no fim do curso.",
    causes: [
      "Ausência de amortecimento de fim de curso",
      "Variação de carga ao longo do ciclo",
      "Válvulas e circuitos sem ajuste fino",
      "Folgas mecânicas e atrito irregular",
    ],
    help: "Dimensionamos amortecedores, acumuladores e circuitos de controle para o perfil de movimento da máquina, com suporte de engenharia e testes.",
    relatedProducts: ["amortecedor-hidraulico-serie-ma", "valvulas", "acumuladores"],
    applications: [
      { title: "Automação industrial", text: "Células robotizadas e transferências repetitivas." },
      { title: "Máquinas-ferramenta", text: "Controle de avanço e proteção de curso." },
    ],
    relatedContent: ["guia-dimensionamento-amortecedores"],
  },
  {
    slug: "controlar-pressao-e-pulsacao",
    title: "Como controlar pressão e pulsação em sistemas de fluido?",
    shortTitle: "Controlar pressão e pulsação",
    cardTitle: "Controlar pressão e pulsação",
    excerpt:
      "Estabilize circuitos hidráulicos e de processo, reduzindo picos de pressão, ruído e fadiga em tubulações.",
    intro:
      "Pulsação e golpes de ariete degradam bombas, instrumentos e conexões. O controle adequado preserva o sistema e a qualidade do processo.",
    problem:
      "Picos de pressão e pulsações periódicas provocam vazamentos, ruído e falha prematura de mangueiras, juntas e instrumentos.",
    causes: [
      "Partida e parada de bombas sem amortecimento",
      "Acumuladores subdimensionados ou com pré-carga incorreta",
      "Comprimento e rigidez inadequados da linha",
      "Válvulas de resposta rápida sem compensação",
    ],
    help: "Especificamos acumuladores, amortecedores de pulsação e componentes de linha com base no regime hidráulico da aplicação.",
    relatedProducts: ["acumuladores", "mangueiras", "valvulas"],
    applications: [
      { title: "Sistemas hidráulicos", text: "Amortecimento de picos em unidades de potência." },
      { title: "Óleo e gás", text: "Estabilização de linhas de processo e skids." },
    ],
    relatedContent: ["guia-acumuladores-hidraulicos"],
  },
  {
    slug: "sistemas-de-alta-pressao",
    title: "Sistemas de alta pressão para aplicações industriais exigentes",
    shortTitle: "Sistemas de alta pressão",
    cardTitle: "Sistemas de alta pressão",
    excerpt:
      "Componentes, especificação e suporte para circuitos que operam em regimes de pressão elevada e ciclos críticos.",
    intro:
      "Alta pressão exige seleção rigorosa de materiais, conexões e fatores de segurança. A MAGRAL apoia da especificação à manutenção.",
    problem:
      "Falhas em sistemas de alta pressão têm alto impacto operacional e de segurança. Componentes genéricos raramente atendem ao ciclo real.",
    causes: [
      "Seleção inadequada de classe de pressão",
      "Conexões e mangueiras fora da norma da aplicação",
      "Fadiga por ciclos e pulsação",
      "Manutenção reativa sem inspeção periódica",
    ],
    help: "Avaliamos pressão de trabalho, picos, fluido e ambiente para especificar o conjunto correto e o plano de inspeção.",
    relatedProducts: ["mangueiras", "valvulas", "juntas"],
    applications: [
      { title: "Testes e bancos hidrostáticos", text: "Circuitos de prova e validação." },
      { title: "Processo industrial", text: "Linhas de alta pressão com exigência de confiabilidade." },
    ],
    relatedContent: ["guia-acumuladores-hidraulicos"],
  },
  {
    slug: "manutencao-e-reparo",
    title: "Manutenção e reparo com critério técnico",
    shortTitle: "Manutenção e reparo",
    cardTitle: "Manutenção e reparo",
    excerpt:
      "Diagnóstico, recuperação e testes para devolver ao equipamento a performance original com rastreabilidade.",
    intro:
      "Trocar um componente sem entender a causa raiz apenas adia a próxima falha. A MAGRAL une manutenção e engenharia de aplicação.",
    problem:
      "Paradas inesperadas e reparos improvisados aumentam custo total e risco. Peças fora de especificação degradam o sistema.",
    causes: [
      "Desgaste natural sem plano de inspeção",
      "Contaminação de fluido",
      "Instalação ou torque inadequados",
      "Uso fora da faixa de projeto",
    ],
    help: "Oferecemos diagnóstico, manutenção, testes e reposição com suporte da equipe técnica — da identificação da peça ao retorno à operação.",
    relatedProducts: ["amortecedor-hidraulico-serie-ma", "acumuladores", "mangueiras"],
    applications: [
      { title: "OEM e aftermarket", text: "Atendimento a fabricantes e plantas em operação." },
      { title: "Ativos críticos", text: "Equipamentos cujo downtime tem alto custo." },
    ],
    relatedContent: ["case-manutencao-predial-industrial"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug);
}
