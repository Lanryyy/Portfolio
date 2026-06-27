"use client";

import { motion } from "framer-motion";

export interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  iframeSrc?: string;
  features: string[];
  flow: string[];
  impact: string;
  index: number;
  onClick: () => void;
}

export const ProjectCard = ({
  title,
  description,
  category,
  icon,
  iframeSrc,
  features,
  flow,
  impact,
  index,
  onClick,
}: ProjectCardProps) => {
  const hasInteractivePreview = Boolean(iframeSrc);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black-200/60 shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:border-cyan-500/30 hover:shadow-cyan-500/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_30%)] opacity-70" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="p-6 border-b border-white/5">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-3xl">
                {icon}
              </div>
              <div className="flex-1">
                <span className="mb-2 inline-flex rounded-full bg-slate-700/50 px-3 py-1 text-xs text-slate-300">
                  {category}
                </span>
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="px-6 py-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Fluxo
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
              {flow.map((step, stepIndex) => (
                <div
                  key={step}
                  className="relative rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-center text-[11px] font-medium text-slate-300"
                >
                  <span className="mb-1 block text-[10px] text-blue-400">0{stepIndex + 1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 pb-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 font-mono text-xs text-cyan-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto border-t border-white/5 bg-white/[0.04] p-6">
            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              <span className="font-semibold text-white">Impacto: </span>
              {impact}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Dados reais anonimizados quando aplicável
              </span>
              {hasInteractivePreview && (
                <button
                  type="button"
                  onClick={onClick}
                  className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-colors duration-200 hover:from-cyan-600 hover:to-blue-700"
                >
                  Explorar dashboard
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
