'use client';

import { motion } from "framer-motion";
import { education } from '@/Data';
import { Button } from './ui/moving-border';
import { ParallaxSection } from './ui/ParallaxSection';
import { ParallaxContainer } from './ui/ParallaxContainer';

const Educacao = () => {
    return (
        <ParallaxSection speed={0.05} className='py-20 bg-gradient-to-b from-black via-gray-900 to-black' id='education'>
            <ParallaxContainer speed={0.2} triggerOnce>
                <div className="text-center mb-20 px-4">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-600/30">
                        <span className="text-2xl">🎓</span>
                        <span className="text-blue-600 text-sm font-medium">Formação</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Minha {''}
                        <span className='text-blue-600'>Formação Acadêmica</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
                        Educação contínua e especialização em tecnologias de Business Intelligence e análise de dados
                    </p>
                </div>
            </ParallaxContainer>
            
            <div className='w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-8'>
                {education.map((item, index) => (
                    <ParallaxContainer 
                        key={item.id}
                        speed={0.05 + (index % 2) * 0.03} 
                        delay={index * 0.15} 
                        triggerOnce
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <Button 
                                borderRadius='1.75rem' 
                                duration={Math.floor(Math.random() * 10000) + 10000} 
                                className='h-full text-white border-[#4F46E5] bg-gradient-to-br from-blue-900/20 to-purple-900/20 hover:from-blue-800/30 hover:to-purple-800/30'
                            >
                                <div className='flex flex-col p-6 lg:p-8 gap-4 h-full'>
                                    <div className="flex items-start gap-4">
                                        {/* Ícone condicional baseado no tipo de educação */}
                                        {item.id === 4 ? (
                                            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center border border-blue-400/30">
                                                <span className="text-2xl lg:text-3xl">🇺🇸</span>
                                            </div>
                                        ) : (
                                            <img 
                                                src={item.thumbnail} 
                                                alt={item.degree} 
                                                className='w-12 h-12 lg:w-16 lg:h-16 object-contain' 
                                            />
                                        )}
                                        <div className='flex-1'>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                                <h3 className='text-xl lg:text-2xl font-bold text-white leading-tight'>
                                                    {item.degree}
                                                </h3>
                                                <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <h4 className='text-blue-300 font-semibold mb-3 text-base lg:text-lg'>
                                                {item.institution}
                                            </h4>
                                        </div>
                                    </div>
                                    
                                    <p className='text-gray-300 leading-relaxed text-sm lg:text-base'>
                                        {item.description}
                                    </p>
                                    
                                   
                                    
                                </div>
                            </Button>
                        </motion.div>
                    </ParallaxContainer>
                ))}
            </div>
        </ParallaxSection>
    )
}

export default Educacao
