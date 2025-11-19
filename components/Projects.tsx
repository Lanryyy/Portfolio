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
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const biProjects: Project[] = [
        {
            id: 1,
            title: "Eletro",
            description:
                "Dashboard de vendas e análise de produtos eletrônicos com métricas de performance e insights",
            category: "Vendas & Eletrônicos",
            icon: "📱",
            iframeSrc:
                "https://app.powerbi.com/view?r=eyJrIjoiYThlYzJhMGEtMjFmMC00NjZhLTljMDMtMWJhZTdmYTczODBkIiwidCI6IjYyNDdjYzNkLTNlNGYtNGMzNi1iZGY2LWU4NzU4MTYyZTdhMyJ9",
            features: [
                "Análise de Vendas",
                "Métricas de Produtos",
                "Insights de Mercado",
            ],
        },
        {
            id: 2,
            title: "Relatório de Vendas",
            description:
                "Sistema de correção e análise de gabaritos com relatórios de performance e estatísticas",
            category: "Educação & Avaliação",
            icon: "📊",
            iframeSrc:
                "https://app.powerbi.com/view?r=eyJrIjoiMDQwZTA0MmItY2UyNi00YjA3LWIzNzItZjJhMzYzYTVjY2FiIiwidCI6IjYyNDdjYzNkLTNlNGYtNGMzNi1iZGY2LWU4NzU4MTYyZTdhMyJ9",
            features: [
                "Correção Automática",
                "Relatórios de Performance",
                "Estatísticas Detalhadas",
            ],
        },
        {
            id: 3,
            title: "BI Telefonia NOC",
            description:
                "Monitoramento de rede e análise de performance de sistemas de telefonia com alertas em tempo real",
            category: "Telecomunicações",
            icon: "📞",
            iframeSrc:
                "https://app.powerbi.com/view?r=eyJrIjoiNzVjMTllZTQtN2M5YS00NDI5LWIwNmYtNGY5YzI5NmM2ZGNkIiwidCI6IjYyNDdjYzNkLTNlNGYtNGMzNi1iZGY2LWU4NzU4MTYyZTdhMyJ9",
            features: [
                "Monitoramento de Rede",
                "Alertas em Tempo Real",
                "Análise de Performance",
            ],
        },
    ];

    return (
        <section className="pt-40 pb-20" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="heading text-white mb-6">
                    Meus <span className="text-red-600">Dashboards de BI</span>
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                    Transformando dados em insights estratégicos com Power BI. Dashboards
                    interativos que revolucionaram a tomada de decisão em diferentes
                    setores.
                </p>
            </motion.div>

            {/* Grid de Projetos */}
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

            {/* Modal */}
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