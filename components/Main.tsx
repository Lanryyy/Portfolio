'use client';

import { FaLocationArrow } from 'react-icons/fa';
import { BackgroundBeams } from './ui/background-beams'
import ShimerButton from './ui/ShimerButton';
import { Spotlight } from './ui/Spotlight'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { ParallaxSection } from './ui/ParallaxSection';
import { ParallaxContainer } from './ui/ParallaxContainer';


const Main = () => {
    const words = [
        {
          text: "Olá,",
        },
        {
          text: "meu",
        },
        {
          text: "nome",
        },
        {
          text: "é",
        },
        {
          text: "<Henry/>",
          className: "text-red-600",
        },
      ];
    

  return (
    <div className='pb-20 pt-36'>
        {/* Background elements with parallax */}
        <ParallaxSection speed={-0.3} direction="up" className="absolute inset-0 overflow-hidden">
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        </ParallaxSection>
        <ParallaxSection speed={0.2} direction="down" className="absolute inset-0 overflow-hidden">
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='#DC2626' />
        </ParallaxSection>
        <ParallaxSection speed={-0.1} direction="up" className="absolute inset-0 overflow-hidden">
            <Spotlight className='top-28 left-80 h-[80vh] w-[5vw]' fill='#3B82F6' />
        </ParallaxSection>
        <ParallaxSection speed={0.4} direction="up" className="absolute inset-0">
            <BackgroundBeams className="h-screen w-full antialiased" />
        </ParallaxSection>
        {/* Main content with subtle parallax */}
        <ParallaxContainer speed={0.1} className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-white'>
                {/* Badge de especialidade */}
                <ParallaxContainer speed={0.2} delay={0.1} triggerOnce>
                    <div className='mb-6 px-4 py-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full border border-red-600/30 backdrop-blur-sm'>
                        <span className='text-red-600 text-sm font-medium'>🐨 Analista de Dados & BI</span>
                    </div>
                </ParallaxContainer>
                
                <ParallaxContainer speed={0.05} delay={0.2} triggerOnce>
                    <TypewriterEffectSmooth className='text-center text-[40px] sm:text-2xl md:text-5xl lg:text-6xl mb-6' words={words} />
                </ParallaxContainer>
                
                <ParallaxContainer speed={0.15} delay={0.3} triggerOnce>
                    <p className='tracking-widest text-base text-center mb-6 text-red-400 max-w-2xl'>
                        Analista de Dados apaixonado por transformar números em insights estratégicos com Power BI, Python e SQL.
                    </p>
                </ParallaxContainer>
                
                <ParallaxContainer speed={0.1} delay={0.5} triggerOnce>
                    <a href='#projects'>
                      <ShimerButton 
                        title="Explorar Projetos"
                        icon={<FaLocationArrow />}
                        position='right' 
                      />
                    </a>
                </ParallaxContainer>
            </div>
        </ParallaxContainer>
    </div>
  )
}

export default Main