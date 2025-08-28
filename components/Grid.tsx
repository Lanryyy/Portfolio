'use client';

import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/Data'
import { ParallaxSection } from './ui/ParallaxSection';
import { ParallaxContainer } from './ui/ParallaxContainer';

const Grid = () => {
    return (
        <ParallaxSection speed={0.05} className='pt-10 sm:pt-20 lg:pt-32 relative' id='about'>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-800/30 to-slate-900/40"></div>
            <ParallaxContainer speed={0.2} triggerOnce>
                <div className="text-center mb-12 lg:mb-20 px-4 relative z-10">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-red-600/30 to-blue-600/30 rounded-full border border-red-600/50 backdrop-blur-sm shadow-lg">
                        <span className="text-2xl">🚀</span>
                        <span className="text-red-600 text-sm font-semibold">Frontend Development</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                        <span className="text-red-500">Minha</span> Abordagem de Desenvolvimento
                    </h2>
                    <p className="text-slate-200 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                        Desenvolvimento frontend moderno focado em performance, acessibilidade e experiência do usuário excepcional
                    </p>
                </div>
            </ParallaxContainer>
            <ParallaxContainer speed={0.1} className="relative px-4">
                <BentoGrid>
                    {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }, index) => (
                        <ParallaxContainer 
                            key={id}
                            speed={0.05 + (index % 4) * 0.02} 
                            delay={index * 0.1} 
                            triggerOnce
                        >
                            <BentoGridItem 
                                id={id} 
                                title={title} 
                                description={description} 
                                className={className} 
                                img={img} 
                                imgClassName={imgClassName} 
                                titleClassName={titleClassName} 
                                spareImg={spareImg} 
                            />
                        </ParallaxContainer>
                    ))}
                </BentoGrid>
            </ParallaxContainer>
        </ParallaxSection>
    )
}

export default Grid