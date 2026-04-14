'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/Data';

const colorMap: Record<string, { border: string; bg: string; text: string; tag: string }> = {
  blue: {
    border: 'hover:border-blue-400/40',
    bg: 'from-blue-500/10 to-blue-600/5',
    text: 'text-blue-400',
    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  },
  emerald: {
    border: 'hover:border-emerald-400/40',
    bg: 'from-emerald-500/10 to-emerald-600/5',
    text: 'text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
  cyan: {
    border: 'hover:border-cyan-400/40',
    bg: 'from-cyan-500/10 to-cyan-600/5',
    text: 'text-cyan-400',
    tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  },
  slate: {
    border: 'hover:border-slate-400/40',
    bg: 'from-slate-500/10 to-slate-600/5',
    text: 'text-slate-400',
    tag: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  },
};

const Skills = () => {
  return (
    <section className="py-20 relative" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="heading text-white mb-4">
            Competências <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Técnicas</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stack focada em transformar dados em decisões estratégicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color] || colorMap.blue;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-white/[0.02] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 sm:p-8 ${colors.border} transition-all duration-500 ${category.isSecondary ? 'opacity-80' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">{category.icon}</span>
                    <div>
                      <h3 className={`text-lg font-bold text-white group-hover:${colors.text} transition-colors`}>
                        {category.title}
                      </h3>
                      {category.isSecondary && (
                        <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Skill Secundária</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 text-xs rounded-lg border font-medium ${colors.tag} transition-all duration-300 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
