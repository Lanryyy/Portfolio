'use client';

import { motion } from 'framer-motion';
import { heroMetrics, profileHighlights } from '@/Data';
import { DataBackground } from './ui/DataBackground';
import { DataVisualizations } from './ui/DataVisualizations';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Main = () => {
  return (
    <div className='pb-5 pt-16 relative min-h-[100vh] flex items-center'>
      <DataBackground className="absolute inset-0 w-full h-full z-0" />
      <DataVisualizations className="absolute inset-0 w-full h-full z-1" />

      <div className='flex justify-center relative w-full z-10'>
        <div className='max-w-[89vw] md:max-w-4xl lg:max-w-[70vw] flex flex-col items-center justify-center text-white'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full border border-blue-400/30 backdrop-blur-sm'
          >
            <span className='text-blue-400 text-sm font-semibold tracking-wide'>📊 Dados, BI, Python, SQL &amp; ERP</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'
          >
            <span className="text-white">Henry </span>
            <span className="text-blue-400">Matheus</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='tracking-wide text-base sm:text-lg text-center mb-4 text-slate-300 max-w-3xl leading-relaxed'
          >
            Analista de Dados focado em <span className="text-blue-400 font-semibold">automações Python</span>,{' '}
            <span className="text-cyan-400 font-semibold">SQL, Power BI e dados operacionais de ERP</span>.
            Transformo sistemas, planilhas e bases internas em indicadores, APIs, dashboards e decisões práticas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-sm text-slate-500 mb-5 text-center'
          >
            3+ anos de experiência em BI, ETL, automação e análise de processos operacionais
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-2"
          >
            {profileHighlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                {highlight}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full max-w-3xl'
          >
            {heroMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className='group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-4 text-center hover:border-blue-400/30 hover:bg-white/[0.06] transition-all duration-500'
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className='text-2xl mb-2 block'>{metric.icon}</span>
                <div className='text-2xl sm:text-3xl font-bold text-blue-400'>
                  {metric.value}
                </div>
                <div className='text-[10px] sm:text-xs text-slate-500 mt-1 leading-tight font-medium'>
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-wrap items-center justify-center gap-4'
          >
            <a
              href='#projects'
              className='px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105'
            >
              Ver Cases
            </a>
            <a
              href='/Curriculo-henry.pdf'
              download
              className='px-8 py-3 bg-white/[0.05] border border-white/[0.12] text-white rounded-xl font-semibold text-sm hover:bg-white/[0.1] hover:border-blue-400/30 transition-all duration-300'
            >
              Baixar Currículo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex items-center gap-5 mt-8'
          >
            <a
              href="https://www.linkedin.com/in/henry-matheus-611828192"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir LinkedIn de Henry Matheus"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Lanryyy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir GitHub de Henry Matheus"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:contatohenrymath@hotmail.com"
              aria-label="Enviar e-mail para Henry Matheus"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
