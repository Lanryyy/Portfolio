'use client';

import { motion } from 'framer-motion';

const summary = [
  "Experiência com dados operacionais de ERP, TOTVS, sistemas proprietários e ABR Telecom",
  "Visão end-to-end: extração, tratamento, validação, modelagem, dashboard e automação",
  "Python e SQL aplicados a rotinas reais de negócio, não apenas análises isoladas",
  "Power BI com DAX, Power Query, Deneb e HTML Content para leitura executiva",
];

const Grid = () => {
  return (
    <section className='py-16 relative' id='summary'>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md border border-white/[0.08] rounded-3xl p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.1),transparent_28%)]" />

          <div className="relative z-10">
            <div className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Perfil de atuação
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Dados para <span className="text-blue-400">operação, automação e decisão</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              Atuo conectando a origem do dado ao resultado do negócio: sistemas ERP, bases SQL,
              planilhas, APIs e dashboards. Meu foco é reduzir trabalho manual, organizar dados
              operacionais e entregar indicadores confiáveis para times técnicos e áreas de negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {summary.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-sm text-slate-400"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
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
