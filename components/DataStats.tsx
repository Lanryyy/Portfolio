'use client';

import { motion } from 'framer-motion';

const DataStats = () => {
  const areas = [
    {
      title: "Business Intelligence",
      icon: "📊",
      description: "Dashboards executivos e relatórios estratégicos com Power BI e DAX avançado",
      skills: ["Power BI", "DAX", "Tableau", "KPIs"],
      metric: "12+",
      metricLabel: "Dashboards",
    },
    {
      title: "Análise de Dados",
      icon: "🐍",
      description: "Processamento e análise com Python para insights que embasam decisões de negócio",
      skills: ["Python", "pandas", "PySpark", "NumPy"],
      metric: "500K+",
      metricLabel: "Registros/mês",
    },
    {
      title: "ETL & Automação",
      icon: "⚡",
      description: "Pipelines de dados automatizados — da extração à visualização executiva",
      skills: ["ETL/ELT", "SQL", "Automação", "Data Pipeline"],
      metric: "20h",
      metricLabel: "Salvas/mês",
    },
    {
      title: "Infraestrutura & Redes",
      icon: "🔧",
      description: "Background em infraestrutura de telecomunicações e monitoramento proativo",
      skills: ["TCP/IP", "CLI", "Bash", "PowerShell"],
      metric: "99.5%",
      metricLabel: "Uptime",
    },
  ];

  return (
    <section className="py-20" id="about">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading text-white mb-4">
            Áreas de <span className="text-blue-400">Atuação</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Visão end-to-end do pipeline de dados — da extração à tomada de decisão
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/[0.08] hover:border-blue-400/30 transition-all duration-500 h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{area.icon}</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-400">
                      {area.metric}
                    </div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider font-medium">
                      {area.metricLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {area.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                  {area.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {area.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-[10px] rounded-md bg-white/[0.05] text-slate-400 border border-white/[0.08] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataStats;
