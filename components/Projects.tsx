"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { caseStudies } from "@/Data";
import { ProjectCard } from "./ui/ProjectCard";
import { DashboardModal } from "./ui/DashboardModal";

type ProjectCase = (typeof caseStudies)[number];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);

  const openProject = (project: ProjectCase) => {
    if (!project.iframeSrc) return;
    setSelectedProject(project);
  };

  return (
    <section className="py-20" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Cases selecionados
        </div>
        <h2 className="heading text-white mb-4">
          Dashboards, Automação, ERP e{" "}
          <span className="text-blue-400">
            BI Avançado
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          Cases com previews anonimizados, contexto de construção, stack e impacto.
          Os layouts preservam a estrutura visual dos PBIX sem expor dados reais.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              onClick={() => openProject(project)}
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
