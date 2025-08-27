'use client';

import { projects } from '@/Data'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from "next/link";
import { ParallaxSection } from './ui/ParallaxSection';
import { ParallaxContainer } from './ui/ParallaxContainer';


const Projects = () => {
    return (
        <ParallaxSection speed={0.1} className='pt-40' id='projects'>
            <ParallaxContainer speed={0.2} triggerOnce>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-red-600/20 to-green-600/20 rounded-full border border-red-600/30">
                        <span className="text-2xl">💼</span>
                        <span className="text-red-600 text-sm font-medium">Portfólio</span>
                    </div>
                    <h1 className='heading text-white mb-6'>
                        Meus {''}
                        <span className='text-red-600'>Projetos de BI</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Soluções de análise de dados que transformaram a forma como empresas tomam decisões
                    </p>
                </div>
            </ParallaxContainer>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists }, index) => (
                    <ParallaxContainer 
                        key={id} 
                        speed={0.1 + (index % 3) * 0.05} 
                        delay={index * 0.1} 
                        triggerOnce
                        className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
                    >
                        <CardContainer className="inter-var">
                            <CardBody className="bg-[#130036] relative group/card border-[#4C298D] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="lg:text-2xl md:text-xl text-base line-clamp-1 font-bold text-white dark:text-white"
                                >
                                    {title}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-10">
                                    <img src='/bg.png' alt='bg-img' />
                                    <img
                                        src={img}
                                        alt={title}
                                        className='absolute bottom-0'
                                    />
                                </CardItem>
                                <CardItem
                                    translateZ="60"
                                    className="text-white lg:text-base font-light text-sm mt-3 dark:text-neutral-300"
                                >
                                    {des}
                                </CardItem>
                                <div className="flex justify-between items-center mt-7 mb-3">
                                    <CardItem
                                        translateZ={20}
                                        className="flex items-center px-4 py-2 rounded-xl text-xs font-normal"
                                    >
                                       {iconLists.map((icon) =>
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-[#0F0129] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    )}
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href="https://github.com/Lanryyy"
                                        target="__blank"
                                        className="px-6 py-4 rounded-xl bg-[#0F0129] dark:bg-white text-white text-sm font-bold flex justify-center items-center"
                                    >
                                        View code
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </ParallaxContainer>
                ))}
            </div>
        </ParallaxSection>
    )
}

export default Projects