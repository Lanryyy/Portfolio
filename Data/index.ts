export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Cases", link: "#projects" },
  { name: "Carreira", link: "#experience" },
  { name: "Formação", link: "#education" },
  { name: "Contato", link: "#contact" },
];

export const heroMetrics = [
  { value: "500K+", label: "Registros tratados/mês", icon: "📊" },
  { value: "12+", label: "Dashboards e relatórios", icon: "📈" },
  { value: "60%", label: "Redução em queries SQL", icon: "⚡" },
  { value: "20h", label: "Salvas/mês com automação", icon: "🤖" },
];

export const profileHighlights = [
  "Praia Grande-SP",
  "Remoto/Híbrido SP e Baixada",
  "Python, SQL, Power BI",
  "ERP, BI e Automações",
];

export const skillCategories = [
  {
    title: "BI & Visualização Avançada",
    icon: "📊",
    skills: ["Power BI", "DAX", "Power Query", "Deneb", "HTML Content", "KPIs", "Data Storytelling"],
    color: "blue",
  },
  {
    title: "Python & Automações",
    icon: "🐍",
    skills: ["Python", "pandas", "APIs", "Chatbots", "Excel/CSV", "Logs", "PowerShell"],
    color: "emerald",
  },
  {
    title: "SQL & Engenharia de Dados",
    icon: "☁️",
    skills: ["SQL Server", "PostgreSQL", "BigQuery", "ETL/ELT", "Data Quality", "Data Warehouse"],
    color: "cyan",
  },
  {
    title: "ERP & Dados Operacionais",
    icon: "🏢",
    skills: ["TOTVS", "ERP proprietário", "ABR Telecom", "SQL/CSV/API", "KPIs operacionais", "Auditoria de dados"],
    color: "amber",
  },
];

export const focusAreas = [
  {
    title: "Automações & APIs",
    icon: "🤖",
    description: "Rotinas em Python para coletar dados, validar regras, gerar arquivos, registrar logs e reduzir tarefas manuais.",
    skills: ["Python", "APIs", "pandas", "logs"],
    metric: "20h",
    metricLabel: "Salvas/mês",
  },
  {
    title: "ERP & Operações",
    icon: "🏢",
    description: "Leitura e organização de dados de ERP, sistemas internos e plataformas setoriais para indicadores de negócio.",
    skills: ["TOTVS", "ABR Telecom", "ERP", "SQL"],
    metric: "ERP",
    metricLabel: "Dados reais",
  },
  {
    title: "BI Avançado",
    icon: "📊",
    description: "Dashboards em Power BI com DAX, Power Query, Deneb e HTML Content para leitura executiva e operacional.",
    skills: ["Power BI", "DAX", "Deneb", "HTML"],
    metric: "12+",
    metricLabel: "Dashboards",
  },
  {
    title: "SQL & Analytics",
    icon: "🗄️",
    description: "Consultas, modelagem analítica, qualidade de dados e transformação de bases operacionais em visão gerencial.",
    skills: ["SQL", "ETL", "Data Quality", "KPIs"],
    metric: "60%",
    metricLabel: "Queries otimizadas",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Automação de Vagas & Networking",
    description:
      "Pipeline semi-automático para buscar vagas, pontuar compatibilidade, gerar currículos em PDF, montar CRM e preparar networking com aprovação humana.",
    category: "Python, CRM & automação",
    icon: "🤖",
    features: ["Python", "APIs", "PDF", "CRM", "Logs"],
    impact: "Reduz trabalho manual e padroniza decisões de candidatura com rastreabilidade.",
    flow: ["Coleta", "Score", "PDF", "CRM", "Aprovação"],
    buildDetails: [
      "Busca e deduplicação de oportunidades com regras de compatibilidade.",
      "Geração de currículo em PDF por vaga e trilha de auditoria por lote.",
      "Camada de aprovação humana antes de qualquer envio ou contato.",
    ],
    iframeSrc: "",
  },
  {
    id: 2,
    title: "Dashboard Call Center Massivo",
    description:
      "Monitoramento operacional de chamadas, falhas, status, DDDs e comportamento por horário, com camada visual premium em Power BI.",
    category: "Operação, telefonia & qualidade",
    icon: "📞",
    previewImage: "/cases/call-center-massivo.svg",
    previewAlt: "Preview anonimizado do dashboard Call Center Massivo",
    features: ["Power BI", "DAX", "Power Query", "Deneb", "HTML Content", "Data Quality"],
    impact: "Centraliza indicadores de operação e ajuda a priorizar falhas, regiões e horários críticos.",
    flow: ["Base bruta", "Modelo", "DAX", "HTML/Deneb", "Monitoramento"],
    proofPoints: ["3 páginas", "34 visuais", "7 HTML Content", "3 Deneb", "7 slicers"],
    buildDetails: [
      "Modelo semântico com fato de chamadas e dimensões para data, DDD, status, hora e troncos.",
      "Medidas DAX para volume, sucesso, falha, TMA e participação por categoria.",
      "Visuais HTML Content e Deneb usados para leitura executiva, tabelas compactas e gráficos customizados.",
      "Preview do portfolio gerado a partir do layout real do PBIX, sem expor dados, nomes ou valores.",
    ],
    iframeSrc: "",
  },
  {
    id: 3,
    title: "Dashboard CENSUP",
    description:
      "Painel de atendimento e produtividade com análise por agente, fila, tags, regionais e volume diário, estruturado para operação recorrente.",
    category: "Atendimento, produtividade & BI",
    icon: "🎧",
    previewImage: "/cases/censup.svg",
    previewAlt: "Preview anonimizado do dashboard CENSUP",
    features: ["Power BI", "DAX", "Power Query", "Deneb", "HTML Content", "Slicers"],
    impact: "Transforma histórico operacional em visão de produtividade, gargalos e acompanhamento por filtros de negócio.",
    flow: ["Carga", "Tratamento", "Modelo", "Deneb", "Acompanhamento"],
    proofPoints: ["3 páginas", "65 visuais", "25 Deneb", "10 HTML Content", "15 slicers"],
    buildDetails: [
      "Camada visual com forte uso de Deneb para gráficos customizados e leitura compacta.",
      "HTML Content aplicado em cabeçalhos, cards e elementos narrativos do dashboard.",
      "Modelo preparado para acompanhar volume, atendentes, tags, filas e recortes regionais.",
      "Layout publicado no portfolio como preview sintético para evitar vazamento de dados internos.",
    ],
    iframeSrc: "",
  },
  {
    id: 4,
    title: "Dashboard Provisionamento",
    description:
      "Painel para gestão de tickets, demandas, filas, tags, produtividade e tempos de resolução em operação de provisionamento.",
    category: "Provisionamento, SLA & operação",
    icon: "🛠️",
    previewImage: "/cases/provisionamento.svg",
    previewAlt: "Preview anonimizado do dashboard Provisionamento",
    features: ["Power BI", "DAX", "Power Query", "Deneb", "HTML Content", "SLA"],
    impact: "Apoia priorização de filas, análise de produtividade e acompanhamento de tempos operacionais.",
    flow: ["Tickets", "Limpeza", "Modelo", "SLA/TMA", "Gestão"],
    proofPoints: ["2 páginas", "33 visuais", "12 Deneb", "3 HTML Content", "10 slicers"],
    buildDetails: [
      "Modelo com tabelas de relatório, produtividade, eventos, demandas, filas, tags e atendentes.",
      "Deneb usado em rankings, tabelas e visuais de tendência para fugir das limitações nativas.",
      "Métricas orientadas a tempo de atendimento, resolução, backlog e eficiência operacional.",
      "Preview estrutural gerado sem dados reais para uso seguro no portfolio público.",
    ],
    iframeSrc: "",
  },
  {
    id: 5,
    title: "ERP para BI Operacional",
    description:
      "Transformação de dados de TOTVS, ERPs proprietários, ABR Telecom e sistemas internos em bases analíticas, KPIs e relatórios gerenciais.",
    category: "ERP, SQL & indicadores",
    icon: "🏢",
    features: ["TOTVS", "ABR Telecom", "SQL", "CSV/API", "KPIs"],
    impact: "Conecta a origem operacional do dado à visão executiva sem expor informações sensíveis.",
    flow: ["Extração", "Tratamento", "Validação", "Modelo", "Indicadores"],
    buildDetails: [
      "Extração de bases operacionais via SQL, CSV, API ou relatórios internos.",
      "Padronização de cadastros, datas, status e chaves de negócio antes da análise.",
      "Construção de indicadores para operação, financeiro, atendimento e performance.",
    ],
    iframeSrc: "",
  },
  {
    id: 6,
    title: "Chatbot com API Python",
    description:
      "Arquitetura para chatbot conectado a API Python, regras de negócio, logs e consulta a bases estruturadas para apoiar fluxos internos.",
    category: "API, chatbot & dados",
    icon: "💬",
    features: ["Python", "API", "Chatbot", "Validações", "Logs"],
    impact: "Automatiza respostas e organiza solicitações recorrentes com controle e auditoria.",
    flow: ["Pergunta", "API", "Regra", "Consulta", "Resposta"],
    buildDetails: [
      "API Python como camada intermediária entre interface conversacional e bases de dados.",
      "Validações e logs para rastrear perguntas, respostas e falhas de processamento.",
      "Estrutura preparada para consultar bases analíticas, CRMs ou arquivos operacionais.",
    ],
    iframeSrc: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Analista de Dados — BI, Python & SQL",
    company: "Vero Internet",
    period: "Jul 2025 – Presente",
    current: true,
    highlights: [
      "Processamento de +500K registros/mês com Python (pandas, PySpark)",
      "12+ dashboards executivos em Power BI com DAX avançado",
      "Criação de visuais avançados com Deneb e HTML Content para leitura operacional",
      "Análise de dados de ERP, sistemas internos e plataformas operacionais",
      "Automação de pipelines ETL — eliminando ~20h mensais de trabalho manual",
      "Otimização de queries SQL complexas — redução de 60% no tempo de execução",
      "Implementação de rotinas de Data Quality — -30% em inconsistências",
    ],
    tags: ["Power BI", "Python", "SQL", "ERP", "Deneb", "HTML Content"],
  },
  {
    id: 2,
    title: "QA / Diagramador",
    company: "Adapt Edtech",
    period: "Jul 2023 – Set 2024",
    current: false,
    highlights: [
      "+200 ciclos de testes manuais e automatizados (QA)",
      "Interfaces responsivas e acessíveis — WCAG 2.1 nível AA",
      "Colaboração multidisciplinar com Pedagogia, UX/UI e Desenvolvimento",
    ],
    tags: ["QA", "HTML5", "CSS3", "JavaScript", "Acessibilidade"],
  },
  {
    id: 3,
    title: "Analista de Redes",
    company: "Vero Internet",
    period: "Mar 2022 – Jun 2025",
    current: false,
    highlights: [
      "+200 incidentes/mês resolvidos via CLI — 99.5% de uptime",
      "15+ rotinas automatizadas com Bash, PowerShell e Python",
      "Apoio à leitura de dados operacionais e integrações de sistemas de telecom",
      "Documentação de SOPs — redução de 50% no onboarding",
    ],
    tags: ["Redes", "Bash", "PowerShell", "Python", "ABR Telecom", "TCP/IP"],
  },
  {
    id: 4,
    title: "Analista de Sistemas",
    company: "Vip Promotora",
    period: "Set 2021 – Nov 2021",
    current: false,
    highlights: [
      "Active Directory e GPOs para +50 estações",
      "Automação de deploy via PowerShell — redução de 60%",
      "Deployment automatizado com MDT e SCCM",
    ],
    tags: ["Active Directory", "PowerShell", "MDT", "SCCM"],
  },
];

export const education = [
  {
    id: 1,
    institution: "Faculdade do Litoral Sul Paulista",
    degree: "Sistemas de Informação",
    period: "2025 – 2029",
    status: "Em andamento",
    description: "Foco em gestão de sistemas e análise de dados empresariais",
  },
  {
    id: 2,
    institution: "Universidade de Santo Amaro",
    degree: "Engenharia da Computação",
    period: "2022 – 2026",
    status: "Concluindo",
    description: "Formação abrangente em computação, algoritmos e sistemas complexos",
  },
  {
    id: 3,
    institution: "ETEC de São Paulo",
    degree: "Desenvolvimento de Sistemas",
    period: "2017 – 2019",
    status: "Concluído",
    description: "Formação técnica em programação e banco de dados",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Lanryyy",
    label: "GitHub",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/henry-matheus-611828192",
    label: "LinkedIn",
  },
];
