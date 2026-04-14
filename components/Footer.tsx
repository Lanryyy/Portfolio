'use client';

import { socialMedia } from '@/Data';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Henry Matheus · Analista de Dados & BI
        </p>
        <div className="flex items-center gap-4">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-blue-400/30 hover:bg-white/[0.06] transition-all duration-300"
              title={social.label}
            >
              <img src={social.img} alt={social.label} className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;