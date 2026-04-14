'use client';

import { motion } from 'framer-motion';

const Grid = () => {
  const summary = [
    "3+ anos em Business Intelligence e Análise de Dados",
    "Engenharia da Computação + Sistemas de Informação",
    "Experiência em telecomunicações de grande porte",
    "Visão end-to-end: extração → transformação → visualização",
  ];

  return (
    <section className='py-16 relative' id='summary'>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md border border-white/[0.08] rounded-3xl p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 rounded-3xl" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Resumo <span className="text-blue-400">Profissional</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              Analista de Dados com foco em <span className="text-blue-400 font-semibold">BI, ETL e automação</span>,
              transformando dados em decisões estratégicas com Power BI, Python e SQL avançado.
              Histórico comprovado na criação de dashboards executivos, otimização de pipelines e
              redução de custos operacionais em ambientes de telecomunicações.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {summary.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Grid;