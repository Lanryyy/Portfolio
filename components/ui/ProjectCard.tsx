"use client";

import { motion } from "framer-motion";

export interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    category: string;
    icon: string;
    iframeSrc: string;
    features: string[];
    index: number;
    onClick: () => void;
}

export const ProjectCard = ({
    id,
    title,
    description,
    category,
    icon,
    iframeSrc,
    features,
    index,
    onClick,
}: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="group"
        >
            {/* Card do Projeto */}
            <div className="bg-black-200/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/30">
                {/* Header do Card */}
                <div className="p-6 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">{icon}</div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                            <span className="text-sm text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
                                {category}
                            </span>
                        </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Features */}
                <div className="px-6 py-4 bg-slate-800/50">
                    <div className="flex flex-wrap gap-2">
                        {features.map((feature, idx) => (
                            <span
                                key={idx}
                                className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-md border border-cyan-500/20 font-mono"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Preview do Dashboard (Static/Non-interactive) */}
                <div
                    className="relative group/iframe cursor-pointer"
                    onClick={onClick}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black-100/80 via-transparent to-transparent z-10 opacity-0 group-hover/iframe:opacity-100 transition-opacity duration-300"></div>
                    {/* Usando uma div com pointer-events-none sobre o iframe para garantir que o clique vá para o container */}
                    <div className="pointer-events-none">
                        <iframe
                            title={title}
                            width="100%"
                            height="400"
                            src={iframeSrc}
                            frameBorder="0"
                            scrolling="no"
                            className="w-full h-[400px] transition-transform duration-500 group-hover/iframe:scale-105"
                        />
                    </div>

                    {/* Overlay de Interação */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover/iframe:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 transform transition-transform duration-300 hover:scale-105">
                            <span className="text-white text-sm font-medium flex items-center gap-2">
                                Clique para interagir 👆
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer do Card */}
                <div className="p-6 bg-white/5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="text-sm">Power BI</span>
                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        </div>
                        <button
                            onClick={onClick}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer inline-block shadow-lg shadow-purple-500/20"
                        >
                            Explorar Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
