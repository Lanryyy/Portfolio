'use client';

import { motion } from 'framer-motion';
import { education } from '@/Data';

const statusColor: Record<string, string> = {
  'Em andamento': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Concluindo': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Concluído': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
};

const Educacao = () => {
  return (
    <section className="py-20 relative" id="education">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="heading text-white mb-4">
            Formação <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Acadêmica</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Educação contínua em tecnologia e análise de dados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/[0.02] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${statusColor[edu.status] || ''}`}>
                  {edu.status}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg mb-1">{edu.degree}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-3">{edu.institution}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educacao;
