'use client';

import { motion } from 'framer-motion';
import { ParallaxSection } from './ui/ParallaxSection';
import { ParallaxContainer } from './ui/ParallaxContainer';

const DataStats = () => {
  const areas = [
    {
      title: "Business Intelligence",
      icon: "📊",
      description: "Criação de dashboards e relatórios estratégicos",
      skills: ["Power BI", "Tableau", "SQL"],
      color: "red"
    },
    {
      title: "Análise de Dados",
      icon: "🐍",
      description: "Processamento e análise com Python",
      skills: ["Python", "Pandas", "NumPy"],
      color: "green"
    },
    {
      title: "Frontend Development",
      icon: "💻",
      description: "Interfaces tecnológicas responsivas e modernas",
      skills: ["React", "Tailwind", "Typescript"],
      color: "blue"
    },
    {
      title: "Infraestrutura & QA",
      icon: "🔧",
      description: "Redes, sistemas e garantia de qualidade",
      skills: ["CLI", "TCP/IP", "PowerShell"],
      color: "purple"
    }
  ];

  return (
    <ParallaxSection speed={0.1} className="py-20 bg-gradient-to-b from-black-100 to-black-200">
      <div className="max-w-7xl mx-auto px-5">
        <ParallaxContainer speed={0.2} triggerOnce>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Minhas <span className="text-red-600">Especialidades</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Áreas de conhecimento e tecnologias que domino para criar soluções inovadoras
            </p>
          </motion.div>
        </ParallaxContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr">
          {areas.map((area, index) => (
            <ParallaxContainer 
              key={index}
              speed={0.1 + (index % 2) * 0.05} 
              delay={index * 0.1} 
              triggerOnce
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-800/80 to-black/80 p-6 rounded-2xl border border-gray-600/20 hover:border-red-600/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm h-full flex flex-col"
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Ícone da área */}
                <div className="absolute top-4 right-4 text-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  {area.icon}
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Ícone principal */}
                  <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {area.description}
                  </p>
                  
                  {/* Skills - sempre no bottom */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {area.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 sm:px-3 py-1 text-xs rounded-full bg-white/10 text-white border border-white/30 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ParallaxContainer>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};

export default DataStats;
