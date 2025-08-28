'use client';

import { motion } from "framer-motion";


const Projects = () => {
    // Dados dos projetos de BI
    const biProjects = [
        {
            id: 1,
            title: "Eletro",
            description: "Dashboard de vendas e análise de produtos eletrônicos com métricas de performance e insights",
            category: "Vendas & Eletrônicos",
            icon: "📱",
            iframeSrc: "https://app.powerbi.com/view?r=eyJrIjoiYThlYzJhMGEtMjFmMC00NjZhLTljMDMtMWJhZTdmYTczODBkIiwidCI6IjYyNDdjYzNkLTNlNGYtNGMzNi1iZGY2LWU4NzU4MTYyZTdhMyJ9",
            features: ["Análise de Vendas", "Métricas de Produtos", "Insights de Mercado"]
        },
        {
            id: 2,
            title: "Relatório de Vendas",
            description: "Sistema de correção e análise de gabaritos com relatórios de performance e estatísticas",
            category: "Educação & Avaliação",
            icon: "📊",
            iframeSrc: "https://app.powerbi.com/view?r=eyJrIjoiMDQwZTA0MmItY2UyNi00YjA3LWIzNzItZjJhMzYzYTVjY2FiIiwidCI6IjYyNDdjYzNkLTNlNGYtNGMzNi1iZGY2LWU4NzU4MTYyZTdhMyJ9",
            features: ["Correção Automática", "Relatórios de Performance", "Estatísticas Detalhadas"]
        },
        {
            id: 3,
            title: "BI Telefonia NOC",
            description: "Monitoramento de rede e análise de performance de sistemas de telefonia com alertas em tempo real",
            category: "Telecomunicações",
            icon: "📞",
            iframeSrc: "https://app.powerbi.com/view?r=eyJrIjoiNzVjMTllZTQtN2M5YS00NDI5LWIwNmYtNGY5YzI5NmM2ZGNkIiwidCI6IjYyNDdjYzNkLTNlNGYtNGMzNi1iZGY2LWU4NzU4MTYyZTdhMyJ9",
            features: ["Monitoramento de Rede", "Alertas em Tempo Real", "Análise de Performance"]
            
        }
    ];

    return (
        <section className='pt-40 pb-20' id='projects'>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full border border-red-600/30">
                    <span className="text-2xl">📊</span>
                    <span className="text-red-600 text-sm font-medium">Business Intelligence</span>
                </div>
                <h1 className='heading text-white mb-6'>
                    Meus {''}
                    <span className='text-red-600'>Dashboards de BI</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                    Transformando dados em insights estratégicos com Power BI. Dashboards interativos que revolucionaram a tomada de decisão em diferentes setores.
                </p>
            </motion.div>

            {/* Grid de Projetos */}
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {biProjects.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.2,
                                ease: "easeOut" 
                            }}
                            viewport={{ once: true, margin: '-100px' }}
                            className='group'
                        >
                            {/* Card do Projeto */}
                            <div className='bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl border border-slate-600/30 overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-[1.02]'>
                                
                                {/* Header do Card */}
                                <div className='p-6 border-b border-slate-600/30'>
                                    <div className='flex items-center gap-3 mb-3'>
                                        <div className='text-3xl'>{project.icon}</div>
                                        <div className='flex-1'>
                                            <h3 className='text-xl font-bold text-white mb-1'>{project.title}</h3>
                                            <span className='text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full'>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <p className='text-slate-300 text-sm leading-relaxed'>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className='px-6 py-4 bg-slate-800/50'>
                                    <div className='flex flex-wrap gap-2'>
                                        {project.features.map((feature, idx) => (
                                            <span 
                                                key={idx}
                                                className='text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded-md border border-red-600/30'
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Iframe do Dashboard */}
                                <div className='relative group/iframe'>
                                    <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 opacity-0 group-hover/iframe:opacity-100 transition-opacity duration-300'></div>
                                    <iframe 
                                        title={project.title}
                                        width="100%" 
                                        height="400" 
                                        src={project.iframeSrc}
                                        frameBorder="0" 
                                        allowFullScreen={true}
                                        className='w-full h-[400px] transition-transform duration-500 group-hover/iframe:scale-105'
                                    />
                                    
                                    {/* Overlay de Interação */}
                                    <div className='absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover/iframe:opacity-100 transition-opacity duration-300'>
                                        <div className='bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20'>
                                            <span className='text-white text-sm font-medium'>Clique para interagir</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer do Card */}
                                <div className='p-6 bg-slate-800/30'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-2 text-slate-400'>
                                            <span className='text-sm'>Power BI</span>
                                            <div className='w-2 h-2 bg-red-500 rounded-full animate-pulse'></div>
                                        </div>
                                        <motion.a
                                            href={project.iframeSrc}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer inline-block'
                                        >
                                            Explorar Dashboard
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className='text-center mt-16'
                >
                    <div className='bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/30'>
                        <h3 className='text-2xl font-bold text-white mb-4'>
                            Pronto para transformar seus dados?
                        </h3>
                        <p className='text-slate-300 mb-6 max-w-2xl mx-auto'>
                            Vamos criar dashboards personalizados que transformem sua empresa com insights baseados em dados reais.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-red-500/25'
                        >
                            Vamos Conversar! 🚀
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects