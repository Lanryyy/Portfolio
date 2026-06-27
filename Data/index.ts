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
    iframeSrc: "",
  },
  {
    id: 2,
    title: "ERP para BI Operacional",
    description:
      "Transformação de dados de TOTVS, ERPs proprietários, ABR Telecom e sistemas internos em bases analíticas, KPIs e relatórios gerenciais.",
    category: "ERP, SQL & indicadores",
    icon: "🏢",
    features: ["TOTVS", "ABR Telecom", "SQL", "CSV/API", "KPIs"],
    impact: "Conecta a origem operacional do dado à visão executiva sem expor informações sensíveis.",
    flow: ["Extração", "Tratamento", "Validação", "Modelo", "Indicadores"],
    iframeSrc: "",
  },
  {
    id: 3,
    title: "Dashboards Power BI Avançados",
    description:
      "Layouts executivos com DAX, Power Query, Deneb e HTML Content, usando dados anonimizados para preservar confidencialidade sem perder a qualidade visual.",
    category: "Power BI, Deneb & HTML Content",
    icon: "📊",
    features: ["Power BI", "DAX", "Deneb", "HTML Content", "UX"],
    impact: "Melhora leitura gerencial, prioriza anomalias e torna o dashboard mais acionável.",
    flow: ["Modelo", "DAX", "Visual", "Interação", "Storytelling"],
    iframeSrc: "",
  },
  {
    id: 4,
    title: "Chatbot com API Python",
    description:
      "Arquitetura para chatbot conectado a API Python, regras de negócio, logs e consulta a bases estruturadas para apoiar fluxos internos.",
    category: "API, chatbot & dados",
    icon: "💬",
    features: ["Python", "API", "Chatbot", "Validações", "Logs"],
    impact: "Automatiza respostas e organiza solicitações recorrentes com controle e auditoria.",
    flow: ["Pergunta", "API", "Regra", "Consulta", "Resposta"],
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
