export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Dashboards", link: "#projects" },
  { name: "Carreira", link: "#experience" },
  { name: "Formação", link: "#education" },
  { name: "Contato", link: "#contact" },
];

export const heroMetrics = [
  { value: "500K+", label: "Registros Processados/mês", icon: "📊" },
  { value: "12+", label: "Dashboards Executivos", icon: "📈" },
  { value: "60%", label: "Redução em Queries SQL", icon: "⚡" },
  { value: "20h", label: "Salvas/mês em Automação", icon: "🤖" },
];

export const skillCategories = [
  {
    title: "Dados & Business Intelligence",
    icon: "📊",
    skills: ["Power BI", "DAX", "Power Query", "Tableau", "Data Storytelling", "KPIs", "Data Visualization"],
    color: "blue",
  },
  {
    title: "Programação & Automação",
    icon: "🐍",
    skills: ["Python", "pandas", "NumPy", "PySpark", "SQL Avançado", "Bash", "PowerShell"],
    color: "emerald",
  },
  {
    title: "Banco de Dados & Cloud",
    icon: "☁️",
    skills: ["SQL Server", "PostgreSQL", "BigQuery", "ETL/ELT", "Data Pipeline", "Data Warehouse"],
    color: "cyan",
  },
  {
    title: "Desenvolvimento Web",
    icon: "💻",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    color: "slate",
    isSecondary: true,
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
      "Automação de pipelines ETL — eliminando ~20h mensais de trabalho manual",
      "Otimização de queries SQL complexas — redução de 60% no tempo de execução",
      "Implementação de rotinas de Data Quality — -30% em inconsistências",
    ],
    tags: ["Power BI", "Python", "SQL", "ETL", "DAX"],
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
      "Documentação de SOPs — redução de 50% no onboarding",
    ],
    tags: ["Redes", "Bash", "PowerShell", "Python", "TCP/IP"],
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