/**
 * Dados institucionais do eGoverna.
 * Todo o conteúdo aqui vem do site oficial (egoverna.com.br) ou do briefing.
 * Nenhum número, métrica, cliente ou contato foi inventado.
 */

export const site = {
  name: "eGoverna",
  legalName: "eGoverna",
  domain: "egoverna.com.br",
  url: "https://egoverna.com.br",
  tagline: "Ecossistema inteligente para a gestão pública",
  description:
    "O eGoverna é um software que conecta finanças, tributos, educação, saúde, RH e serviços ao cidadão em um único ecossistema digital para a administração municipal.",
  /** Número oficial extraído do site atual (botão de WhatsApp). */
  whatsapp: {
    e164: "5551995495740",
    display: "+55 51 99549-5740",
    message:
      "Olá, vim através do site do eGoverna e gostaria de mais informações.",
  },
  helpDesk: "https://egoverna.com.br/",
  /** Caixa que recebe as solicitações do formulário. */
  email: "comercial@egoverna.com.br",
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp.e164}?text=${encodeURIComponent(
  site.whatsapp.message,
)}`;

/* -------------------------------------------------------------------------- */
/*                                  Navegação                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Soluções", href: "#ecossistema" },
  { label: "Módulos", href: "#modulos" },
  { label: "Por que eGoverna", href: "#beneficios" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

/* -------------------------------------------------------------------------- */
/*                                   Módulos                                  */
/* -------------------------------------------------------------------------- */

export type ModuleIconName =
  | "Landmark"
  | "FileText"
  | "Calculator"
  | "Users"
  | "Boxes"
  | "GraduationCap"
  | "HeartPulse"
  | "HandHeart"
  | "ChartNoAxesCombined"
  | "Database"
  | "Map"
  | "Globe"
  | "BrainCircuit";

export type SiteModule = {
  id: string;
  name: string;
  icon: ModuleIconName;
  headline: string;
  description: string;
  features: string[];
};

export const modules: SiteModule[] = [
  {
    id: "tributario",
    name: "Tributário",
    icon: "Landmark",
    headline: "Gestão tributária inteligente para municípios modernos.",
    description:
      "O módulo Tributário do eGoverna oferece controle das receitas municipais, auxiliando na fiscalização, no atendimento ao contribuinte e na gestão da arrecadação.",
    features: [
      "Cadastro imobiliário e econômico",
      "Lançamento e arrecadação",
      "Portal do contribuinte",
      "Certidões e parcelamentos",
      "Fiscalização e dívida ativa",
    ],
  },
  {
    id: "nota-fiscal-eletronica",
    name: "Nota Fiscal Eletrônica",
    icon: "FileText",
    headline: "Fiscalização mais ágil e arrecadação inteligente.",
    description:
      "O módulo Nota Fiscal Eletrônica simplifica a emissão, o controle e a auditoria de notas fiscais de serviço, com integração direta ao módulo tributário.",
    features: [
      "Emissão simplificada",
      "Painel em tempo real",
      "Integração contábil",
      "Monitoramento automático",
    ],
  },
  {
    id: "financeiro-contabil",
    name: "Financeiro e Contábil",
    icon: "Calculator",
    headline: "Gestão orçamentária e contábil com transparência total.",
    description:
      "Controle completo das receitas e despesas públicas, simplificando prestações de contas e o acompanhamento da execução orçamentária.",
    features: [
      "Planejamento orçamentário",
      "Controle de empenhos",
      "Conciliação bancária",
      "Relatórios integrados",
    ],
  },
  {
    id: "recursos-humanos",
    name: "Recursos Humanos",
    icon: "Users",
    headline: "Gestão de pessoas com eficiência e conformidade legal.",
    description:
      "Centralize servidores, folha de pagamento, benefícios e obrigações legais com segurança, rapidez e transparência.",
    features: [
      "Folha automatizada",
      "Frequência e férias",
      "Gestão previdenciária",
      "Legislação local",
    ],
  },
  {
    id: "patrimonial-licitacoes",
    name: "Patrimonial e Licitações",
    icon: "Boxes",
    headline: "Controle patrimonial e processos de compra em um só lugar.",
    description:
      "Integra bens, estoques, veículos e compras públicas, garantindo eficiência, rastreabilidade e conformidade.",
    features: [
      "Bens móveis e imóveis",
      "Almoxarifado e frota",
      "Licitações e contratos",
      "Workflow de compras",
    ],
  },
  {
    id: "educacao",
    name: "Educação",
    icon: "GraduationCap",
    headline: "Tecnologia para uma educação pública conectada e eficiente.",
    description:
      "Controle total da secretaria e das escolas, desde matrícula até avaliação dos alunos, com integração entre gestores e professores.",
    features: [
      "Matrícula online",
      "Portal do aluno",
      "Transporte escolar",
      "Indicadores educacionais",
    ],
  },
  {
    id: "saude",
    name: "Saúde",
    icon: "HeartPulse",
    headline: "Gestão eficiente das unidades e programas de saúde pública.",
    description:
      "Integra atendimento básico e especializado com dashboards, relatórios inteligentes e visão completa da rede municipal.",
    features: [
      "Unidades de saúde",
      "Agendamento",
      "Integração e-SUS",
      "Indicadores de produtividade",
    ],
  },
  {
    id: "assistencia-social",
    name: "Assistência Social",
    icon: "HandHeart",
    headline: "Acolhimento e eficiência na gestão social.",
    description:
      "Organize atendimentos, programas sociais, benefícios e acompanhamento familiar com mais transparência e agilidade.",
    features: [
      "Cadastro social",
      "Benefícios",
      "Atendimento familiar",
      "Relatórios sociais",
    ],
  },
  {
    id: "inteligencia-de-dados",
    name: "Inteligência de Dados",
    icon: "ChartNoAxesCombined",
    headline: "Dados inteligentes para decisões públicas melhores.",
    description:
      "Transforme informações municipais em indicadores claros para gestão, planejamento e tomada de decisão.",
    features: [
      "Dashboards",
      "Indicadores",
      "Relatórios estratégicos",
      "BI público",
    ],
  },
  {
    id: "sistema-digital-de-informacoes",
    name: "Sistema Digital de Informações",
    icon: "Database",
    headline: "Centralização e organização inteligente das informações municipais.",
    description:
      "O Sistema Digital de Informações integra dados de diferentes setores, garantindo acesso rápido, seguro e estruturado às informações estratégicas da gestão pública.",
    features: [
      "Centralização de dados",
      "Gestão documental",
      "Acesso seguro",
      "Integração entre sistemas",
    ],
  },
  {
    id: "geoprocessamento",
    name: "Geoprocessamento",
    icon: "Map",
    headline: "Geoprocessamento para gestão territorial precisa.",
    description:
      "Visualize informações do município em mapas inteligentes, integrando dados fiscais, urbanos e patrimoniais.",
    features: [
      "Mapas inteligentes",
      "Cadastro territorial",
      "Análise geográfica",
      "Gestão urbana",
    ],
  },
  {
    id: "portais-ao-cidadao",
    name: "Portais ao Cidadão",
    icon: "Globe",
    headline: "Serviços públicos digitais ao alcance do cidadão.",
    description:
      "Facilite o acesso a serviços, solicitações, documentos e informações públicas através de portais modernos e integrados.",
    features: [
      "Atendimento online",
      "Serviços digitais",
      "Transparência",
      "Experiência do cidadão",
    ],
  },
  {
    id: "inteligencia-artificial",
    name: "Inteligência Artificial",
    icon: "BrainCircuit",
    headline: "Inteligência artificial aplicada à rotina da gestão pública.",
    description:
      "Recursos de inteligência artificial que apoiam servidores e gestores na análise de informações, na automação de tarefas repetitivas e no atendimento ao cidadão.",
    features: [
      "Automação de rotinas",
      "Análise inteligente de dados",
      "Apoio ao atendimento",
      "Busca assistida por IA",
    ],
  },
];

export const moduleResult = {
  title: "Resultados para a administração municipal",
  text: "Com dados integrados, automação de processos e informações estratégicas, a gestão municipal ganha mais eficiência, transparência e capacidade de decisão.",
} as const;

/* -------------------------------------------------------------------------- */
/*                                 Diferenciais                               */
/* -------------------------------------------------------------------------- */

export const differentials = [
  {
    icon: "Workflow",
    title: "Gestão integrada",
    text: "Dados e processos conectados entre diferentes áreas do município.",
  },
  {
    icon: "ShieldCheck",
    title: "Segurança",
    text: "Arquitetura moderna, controle de acesso e proteção das informações.",
  },
  {
    icon: "ChartNoAxesCombined",
    title: "Dados para decisão",
    text: "Indicadores claros e informações estratégicas para apoiar o planejamento e a gestão.",
  },
  {
    icon: "Headset",
    title: "Suporte especializado",
    text: "Tecnologia acompanhada por profissionais que conhecem a realidade da administração pública.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                              Plataforma / Serviços                         */
/* -------------------------------------------------------------------------- */

export const platformHighlights = [
  "Implantação assistida",
  "Acompanhamento técnico",
  "Suporte especializado",
  "Treinamentos e capacitação",
  "Soluções escaláveis",
  "Atualizações contínuas",
  "Integração entre módulos",
  "Migração de dados com segurança",
] as const;

/* -------------------------------------------------------------------------- */
/*                            Produtos especializados                         */
/* -------------------------------------------------------------------------- */

export const products = [
  {
    id: "egoverna",
    name: "eGoverna",
    kicker: "Plataforma de gestão pública",
    headline: "O software que integra toda a administração municipal.",
    text: "O eGoverna reúne em um único sistema os módulos de finanças, tributos, RH, educação, saúde, patrimônio, dados e serviços ao cidadão, com informações conectadas entre todas as áreas.",
    bullets: [
      "Módulos integrados",
      "Acesso web e mobile",
      "Dados centralizados",
      "Suporte e evolução contínua",
    ],
    icon: "Layers",
    appIcon: "/images/apps/egoverna.svg",
  },
  {
    id: "einventario",
    name: "eInventário",
    kicker: "Controle patrimonial",
    headline: "Inventário de bens com identificação e leitura em campo.",
    text: "Solução dedicada ao controle patrimonial do município, apoiando a identificação, a conferência e a gestão dos bens públicos com rastreabilidade.",
    bullets: [
      "Identificação de bens",
      "Leitura e conferência em campo",
      "Rastreabilidade do patrimônio",
      "Integração com o módulo patrimonial",
    ],
    icon: "ScanLine",
    appIcon: "/images/apps/einventario.png",
  },
  {
    id: "sdi",
    name: "SDI",
    kicker: "Sistema Digital de Informações",
    headline: "As informações do município centralizadas e estruturadas.",
    text: "O SDI integra dados de diferentes setores, garantindo acesso rápido, seguro e estruturado às informações estratégicas da gestão pública.",
    bullets: [
      "Centralização de dados",
      "Gestão documental",
      "Acesso seguro",
      "Integração entre sistemas",
    ],
    icon: "Database",
    appIcon: "/images/apps/sdi.png",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                                  Benefícios                                */
/* -------------------------------------------------------------------------- */

export const benefits = [
  {
    icon: "Gauge",
    title: "Mais eficiência para o município",
    text: "Gestão integrada e automatizada reduz retrabalho e torna os processos mais ágeis.",
  },
  {
    icon: "ChartNoAxesCombined",
    title: "Decisões baseadas em dados",
    text: "Informações, indicadores, relatórios e dashboards apoiam o planejamento da gestão.",
  },
  {
    icon: "Globe",
    title: "Melhores serviços para o cidadão",
    text: "Portais e serviços digitais aproximam a administração da população.",
  },
  {
    icon: "ShieldCheck",
    title: "Conformidade e segurança",
    text: "Dados protegidos e processos organizados apoiam uma gestão pública mais segura.",
  },
  {
    icon: "Landmark",
    title: "Arrecadação mais eficiente",
    text: "Tecnologia aplicada à área fiscal permite modernizar fiscalização e processos de arrecadação.",
  },
  {
    icon: "HandHeart",
    title: "Gestão humanizada e colaborativa",
    text: "A tecnologia aproxima equipes, moderniza rotinas e facilita o trabalho dos servidores.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                                   Valores                                  */
/* -------------------------------------------------------------------------- */

export const values = [
  {
    title: "Inovação com propósito",
    text: "Tecnologia desenvolvida para resolver desafios reais da administração pública.",
  },
  {
    title: "Proximidade com o cliente",
    text: "Acompanhamento próximo de quem conhece a rotina das prefeituras.",
  },
  {
    title: "Comprometimento com prazos",
    text: "Planejamento e entrega para que a gestão siga funcionando sem interrupções.",
  },
  {
    title: "Ética e transparência",
    text: "Relações claras e responsabilidade no tratamento das informações públicas.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                                  Formulário                                */
/* -------------------------------------------------------------------------- */

/** Campos do formulário, na ordem em que aparecem na mensagem gerada. */
export type ContactValues = {
  nome: string;
  email: string;
  telefone: string;
  estado: string;
  cidade: string;
  cargo: string;
  mensagem: string;
};

const contactLabels: [keyof ContactValues, string][] = [
  ["nome", "Nome"],
  ["email", "E-mail"],
  ["telefone", "Telefone"],
  ["cargo", "Cargo"],
  ["cidade", "Cidade"],
  ["estado", "Estado"],
  ["mensagem", "Mensagem"],
];

/**
 * Monta, a partir das respostas do formulário, a mensagem única enviada tanto
 * ao WhatsApp quanto ao e-mail — assim os dois canais recebem o mesmo conteúdo.
 */
export function buildContactMessage(values: Partial<ContactValues>) {
  const linhas = contactLabels
    .filter(([key]) => (values[key] ?? "").trim().length > 0)
    .map(([key, label]) => `${label}: ${values[key]!.trim()}`);

  const corpo = [
    "Nova solicitação de demonstração — site eGoverna",
    "",
    ...linhas,
  ].join("\n");

  const assunto = `Solicitação de demonstração — ${
    values.cidade?.trim() || "site eGoverna"
  }${values.estado?.trim() ? `/${values.estado.trim()}` : ""}`;

  return { assunto, corpo };
}

/** Link do WhatsApp com as respostas do formulário já preenchidas. */
export function contactWhatsAppUrl(values: Partial<ContactValues>) {
  const { corpo } = buildContactMessage(values);
  return `https://wa.me/${site.whatsapp.e164}?text=${encodeURIComponent(corpo)}`;
}

/**
 * Link de e-mail com as respostas. Usa o compose do Gmail, que funciona para
 * quem está logado no navegador; o `mailto:` fica como alternativa no botão
 * secundário, cobrindo quem usa cliente de e-mail instalado.
 */
export function contactGmailUrl(values: Partial<ContactValues>) {
  const { assunto, corpo } = buildContactMessage(values);
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: site.email,
    su: assunto,
    body: corpo,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function contactMailtoUrl(values: Partial<ContactValues>) {
  const { assunto, corpo } = buildContactMessage(values);
  const params = new URLSearchParams({ subject: assunto, body: corpo });
  return `mailto:${site.email}?${params.toString()}`;
}

export const ufs = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const;
