"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ui/ProjectCard";
import { DashboardModal } from "./ui/DashboardModal";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  iframeSrc: string;
  features: string[];
  impact: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const biProjects: Project[] = [
    {
      id: 1,
      title: "Eletro — Análise de Vendas",
      description:
        "Dashboard executivo para análise de vendas e performance de produtos eletrônicos. Filtros cruzados por período, categoria e região.",
      category: "Vendas & Eletrônicos",
      icon: "📱",
      iframeSrc:
        "https://app.powerbi.com/view?r=eyJrIjoiYThlYzJhMGEtMjFmMC00NjZhLTljMDMtMWJhZTdmYTczODBkIiwidCI6IjYyNDdjYzNkLTNlNGYtNGMzNi1iZGY2LWU4NzU4MTYyZTdhMyJ9",
      features: [
        "Análise de Vendas",
        "Métricas de Produtos",
        "Insights de Mercado",
      ],
      impact: "Otimizou tomada de decisão comercial",
    },
    {
      id: 2,
      title: "Relatório Educacional",
      description:
        "Sistema de análise de gabaritos com relatórios automatizados de performance e estatísticas detalhadas por turma e disciplina.",
      category: "Educação & Avaliação",
      icon: "📊",
      iframeSrc:
        "https://app.powerbi.com/view?r=eyJrIjoiMDQwZTA0MmItY2UyNi00YjA3LWIzNzItZjJhMzYzYTVjY2FiIiwidCI6IjYyNDdjYzNkLTNlNGYtNGMzNi1iZGY2LWU4NzU4MTYyZTdhMyJ9",
      features: [
        "Correção Automática",
        "Relatórios de Performance",
        "Estatísticas Detalhadas",
      ],
      impact: "Automatizou análise de desempenho acadêmico",
    },
    {
      id: 3,
      title: "BI Telefonia NOC",
      description:
        "Dashboard de monitoramento em tempo real para central de operações de rede (NOC). Análise de chamados, SLA e tendências.",
      category: "Telecomunicações",
      icon: "📞",
      iframeSrc:
        "https://app.powerbi.com/view?r=eyJrIjoiNzVjMTllZTQtN2M5YS00NDI5LWIwNmYtNGY5YzI5NmM2ZGNkIiwidCI6IjYyNDdjYzNkLTNlNGYtNGMzNi1iZGY2LWU4NzU4MTYyZTdhMyJ9",
      features: [
        "Monitoramento de Rede",
        "Alertas em Tempo Real",
        "Análise de Performance",
      ],
      impact: "Suporte a decisões operacionais 24/7",
    },
  ];

  return (
    <section className="py-20" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="heading text-white mb-4">
          Dashboards de{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Business Intelligence
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Dashboards interativos em Power BI que transformam dados em insights estratégicos.
          Clique para explorar ao vivo.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {biProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <DashboardModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        iframeSrc={selectedProject?.iframeSrc || ""}
        title={selectedProject?.title || ""}
      />
    </section>
  );
};

export default Projects;