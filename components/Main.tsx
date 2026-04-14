'use client';

import { motion } from 'framer-motion';
import { heroMetrics } from '@/Data';
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
            <span className='text-blue-400 text-sm font-semibold tracking-wide'>📊 Analista de Dados &amp; BI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'
          >
            <span className="text-white">Henry </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Matheus</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='tracking-wide text-base sm:text-lg text-center mb-4 text-slate-300 max-w-2xl leading-relaxed'
          >
            Transformando <span className="text-blue-400 font-semibold">dados complexos</span> em{' '}
            <span className="text-cyan-400 font-semibold">decisões estratégicas</span> com Power BI, Python e SQL.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-sm text-slate-500 mb-8'
          >
            3+ anos de experiência em BI, ETL e automação de processos
          </motion.p>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full max-w-3xl'
          >
            {heroMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className='group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-4 text-center hover:border-blue-400/30 hover:bg-white/[0.06] transition-all duration-500'
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className='text-2xl mb-2 block'>{metric.icon}</span>
                <div className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                  {metric.value}
                </div>
                <div className='text-[10px] sm:text-xs text-slate-500 mt-1 leading-tight font-medium'>
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
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
              Ver Dashboards
            </a>
            <a
              href='#experience'
              className='px-8 py-3 bg-white/[0.05] border border-white/[0.12] text-white rounded-xl font-semibold text-sm hover:bg-white/[0.1] hover:border-blue-400/30 transition-all duration-300'
            >
              Minha Trajetória
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex items-center gap-5 mt-8'
          >
            <a href="https://www.linkedin.com/in/henry-matheus-611828192" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/Lanryyy" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="mailto:contatohenrymath@hotmail.com" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <FaEnvelope size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;