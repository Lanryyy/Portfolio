'use client';

import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/Data'
import { ParallaxSection } from './ui/ParallaxSection';
import { ParallaxContainer } from './ui/ParallaxContainer';

const Grid = () => {
    return (
        <ParallaxSection speed={0.05} className='pt-10 sm:pt-20 lg:pt-32' id='about'>
            <ParallaxContainer speed={0.2} triggerOnce>
                <div className="text-center mb-12 lg:mb-20 px-4">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full border border-red-600/30">
                        <span className="text-2xl">🚀</span>
                        <span className="text-red-600 text-sm font-medium">Frontend Development</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        <span className="text-red-600">Minha</span> Abordagem de Desenvolvimento
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
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