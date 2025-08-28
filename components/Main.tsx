'use client';

import { FaLocationArrow } from 'react-icons/fa';
import { DataBackground } from './ui/DataBackground';
import { DataVisualizations } from './ui/DataVisualizations';
import ShimerButton from './ui/ShimerButton';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


const Main = () => {
  const words = [
    { text: "Olá," },
    { text: "meu" },
    { text: "nome" },
    { text: "é" },
    { text: "<Henry/>", className: "text-red-600" },
  ];

  return (
    <div className='pb-5 pt-16 relative'>
      {/* Background otimizado */}
      <DataBackground className="fixed inset-0 w-full h-full z-0" />
      <DataVisualizations className="fixed inset-0 w-full h-full z-1" />
      
      {/* Overlay sutil para legibilidade */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-black/10 via-transparent to-black/15 z-2" />
      
      {/* Conteúdo principal */}
      <div className='flex justify-center relative my-5 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-white'>
          {/* Badge de especialidade */}
          <div className='mb-4 px-4 py-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full border border-red-600/30 backdrop-blur-sm'>
            <span className='text-red-600 text-sm font-medium'>🐨 Analista de Dados & BI</span>
          </div>
          
          <TypewriterEffectSmooth 
            className='text-center text-[40px] sm:text-2xl md:text-5xl lg:text-6xl mb-4' 
            words={words} 
          />
          
          <p className='tracking-widest text-base text-center mb-4 text-red-400 max-w-2xl'>
            Analista de Dados e Desenvolvedor Frontend apaixonado por transformar números em insights estratégicos com Power BI, Python e SQL.
          </p>
          
          <a href='#projects'>
            <ShimerButton 
              title="Explorar Projetos"
              icon={<FaLocationArrow />}
              position='right' 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main