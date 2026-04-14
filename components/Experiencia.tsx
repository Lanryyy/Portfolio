'use client';

import { motion } from 'framer-motion';
import { workExperience } from '@/Data';

const Experiencia = () => {
  return (
    <section className="py-20 relative" id="experience">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading text-white mb-4">
            Experiência <span className="text-blue-400">Profissional</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trajetória de crescimento — de infraestrutura a análise de dados e BI
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent" />

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 ${
                  job.current
                    ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50'
                    : 'bg-slate-700 border-slate-500'
                }`}>
                  {job.current && (
                    <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />
                  )}
                </div>

                <div className={`group bg-white/[0.02] backdrop-blur-md border rounded-2xl p-6 sm:p-8 transition-all duration-500 ${
                  job.current
                    ? 'border-blue-500/30 hover:border-blue-400/50'
                    : 'border-white/[0.08] hover:border-white/[0.15]'
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-blue-400 font-semibold text-sm">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {job.current && (
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                          Atual
                        </span>
                      )}
                      <span className="text-xs text-slate-500 font-mono">{job.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-white/[0.05] text-slate-400 border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;