'use client';

import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";
import { workExperience } from '@/Data';
import { Button } from './ui/moving-border';
import { ParallaxSection } from './ui/ParallaxSection';
import { ParallaxContainer } from './ui/ParallaxContainer';


const Experiencia = () => {
    return (
        <ParallaxSection speed={0.05} className='py-40' id='experience'>
            <LampContainer>
                <ParallaxContainer speed={0.1} triggerOnce>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-full border border-red-600/30">
                            <span className="text-2xl">🌟</span>
                            <span className="text-red-600 text-sm font-medium">Carreira</span>
                        </div>
                                                <h1 className='heading text-white mb-6'>
                                Minha {''}
                                <span className='text-red-600'>Experiência Profissional</span>
                            </h1>
                            
                    </div>
                </ParallaxContainer>
            </LampContainer>
            <div className='w-full max-w-7xl mx-auto mt-12 px-4 grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-6 lg:gap-8 z-50 relative'>
                {workExperience.map((card, index) =>
                    <ParallaxContainer 
                        key={card.id}
                        speed={0.05 + (index % 2) * 0.03} 
                        delay={index * 0.1} 
                        triggerOnce
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="h-full"
                        >
                            <Button 
                                borderRadius='1.75rem' 
                                duration={Math.floor(Math.random() * 10000) + 10000} 
                                className='h-full text-white border-[#7E29FC] bg-gradient-to-br from-purple-900/20 to-red-900/20 hover:from-purple-800/30 hover:to-red-800/30'
                            >
                                <div className='flex flex-col p-4 sm:p-6 lg:p-8 gap-4 h-full'>
                                    <div className="flex items-start gap-4">
                                        <img 
                                            src={card.thumbnail} 
                                            alt={card.title} 
                                            className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain flex-shrink-0' 
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight mb-2'>
                                                {card.title}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>
                                        {card.desc}
                                    </p>
                                    
                                    {/* Indicador de experiência */}
                                    
                                </div>
                            </Button>
                        </motion.div>
                    </ParallaxContainer>
                )}
            </div>
        </ParallaxSection>
    )
}

export default Experiencia