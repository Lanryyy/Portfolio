'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 relative" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="heading text-white mb-4">
            Vamos <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Conversar?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-4">
            Precisa transformar dados em decisões estratégicas? Vamos discutir como posso contribuir.
          </p>
          <p className="text-slate-500 text-sm mb-10">
            Aberto a oportunidades em Análise de Dados, BI e Data Engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <a
            href="mailto:contatohenrymath@hotmail.com"
            className="group flex flex-col items-center gap-3 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 hover:border-blue-400/30 hover:bg-white/[0.04] transition-all duration-500"
          >
            <FaEnvelope className="text-2xl text-slate-500 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm text-white font-medium">E-mail</span>
            <span className="text-[10px] text-slate-500">contatohenrymath@hotmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/henry-matheus-611828192"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500"
          >
            <FaLinkedin className="text-2xl text-slate-500 group-hover:text-blue-500 transition-colors" />
            <span className="text-sm text-white font-medium">LinkedIn</span>
            <span className="text-[10px] text-slate-500">henry-matheus</span>
          </a>

          <a
            href="https://github.com/Lanryyy"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
          >
            <FaGithub className="text-2xl text-slate-500 group-hover:text-white transition-colors" />
            <span className="text-sm text-white font-medium">GitHub</span>
            <span className="text-[10px] text-slate-500">Lanryyy</span>
          </a>

          <a
            href="/Curriculo-henry.pdf"
            download
            className="group flex flex-col items-center gap-3 bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-500"
          >
            <FaDownload className="text-2xl text-slate-500 group-hover:text-cyan-400 transition-colors" />
            <span className="text-sm text-white font-medium">Currículo PDF</span>
            <span className="text-[10px] text-slate-500">Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
