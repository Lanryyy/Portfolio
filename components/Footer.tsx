'use client';

import { TextHoverEffect } from './ui/text-hover-effect'
import ShimerButton from './ui/ShimerButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/Data'

const Footer = () => {
    return (
        <footer className='w-full pb-10 z-50' id='contact'>
            <div className='w-full absolute left-0 -bottom-32 min-h-96 z-40'>
                <TextHoverEffect className="w-full h-full" text="HENRY" />
            </div>
            <div className='flex flex-col items-center relative'>
                <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full border border-red-600/30">
                    <span className="text-2xl">🐨</span>
                    <span className="text-red-600 text-sm font-medium">Vamos Conversar</span>
                </div>
                <h1 className='text-white heading lg:max-w-[45vw] mb-6'>
                    Tem uma <span className='text-red-600'>pergunta</span> ou <span className='text-red-600'>proposta</span>, ou apenas deseja dizer oi? Vá em frente.
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center max-w-2xl mb-8'>Entre em contato comigo hoje e vamos discutir como posso criar soluções completas para o seu negócio, unindo o poder da análise de dados e Business Intelligence com a experiência do usuário e design intuitivo de um UX/UI designer e a funcionalidade de um desenvolvedor front-end.</p>
                <a className='z-50' href="mailto:henry.matheus.contato@gmail.com">
                    <ShimerButton
                        title="Me contate agora!"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light text-white'>Copyright © 2025 Henry Matheus</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='z-50 w-10 h-10 cursor-pointer flex justify-center items-center background-filter background-blur-lg saturate-180 bg-opacity-75 bg-[#0F0129] rounded-lg border border-[#4C298D]'>
                            <a href={profile.link} target='__blank'><img src={profile.img} width={20} height={20} /></a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer