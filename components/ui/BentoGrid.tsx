import { cn } from "@/utils/cn";
import { Meteors } from "./meteors";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[minmax(200px,auto)] gap-4 lg:gap-6 max-w-7xl mx-auto px-4",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    // Definir fundos neutros para melhor legibilidade
    const getBackgroundGradient = (id: number) => {
        switch (id) {
            case 1: // Desenvolvimento Frontend
                return 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
            case 2: // BI Stack
                return 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
            case 3: // React/TypeScript
                return 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
            case 4: // UI/UX Design
                return 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
            case 5: // Responsive
                return 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
            default:
                return 'linear-gradient(135deg, #374151 0%, #1f2937 100%)';
        }
    };

    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-2xl group/bento hover:shadow-2xl transition-all duration-500 shadow-lg border border-white/20 hover:border-white/40 min-h-[250px] flex flex-col",
                className
            )}
            style={{
                background: getBackgroundGradient(id || 1),
            }}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            {/* Overlay Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
            </div>
            
            {/* Camada adicional para melhorar legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            {/* Background Image with better overlay */}
            {img && (
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src={img} 
                        alt={`Background for ${title}`} 
                        className={cn("object-cover object-center w-full h-full opacity-15", imgClassName)} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
            )}

            {/* BI Stack para Item 2 - Dashboard Visual */}
            {id === 2 && (
                <div className="absolute inset-0">
                    {/* Fundo de Dashboard */}
                    <div className="absolute inset-0 opacity-15">
                        <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                            {/* Grid pattern para simular dashboard */}
                            <div className="absolute inset-2 grid grid-cols-3 gap-1">
                                {Array.from({ length: 9 }).map((_, i) => (
                                    <div 
                                        key={i} 
                                        className="bg-white/10 rounded border border-white/20"
                                        style={{
                                            background: i % 3 === 0 ? 'linear-gradient(45deg, rgba(59,130,246,0.3), rgba(147,51,234,0.3))' : 
                                                       i % 3 === 1 ? 'linear-gradient(45deg, rgba(34,197,94,0.3), rgba(59,130,246,0.3))' :
                                                       'linear-gradient(45deg, rgba(251,146,60,0.3), rgba(239,68,68,0.3))'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Ferramentas de BI */}
                    <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-3 p-4">
                        {[
                            { name: 'Power BI', icon: '📊', color: 'bg-orange-500/20' },
                            { name: 'Python', icon: '🐍', color: 'bg-yellow-500/20' },
                            { name: 'SQL', icon: '🗄️', color: 'bg-blue-500/20' },
                            { name: 'HTML5', icon: '🌐', color: 'bg-red-500/20' },
                            { name: 'PHP', icon: '🐘', color: 'bg-purple-500/20' },
                            { name: 'WordPress', icon: '📝', color: 'bg-blue-600/20' }
                        ].map((tool, index) => (
                                <motion.div
                                    key={tool.name}
                                    className={`flex items-center gap-2 px-3 py-2 ${tool.color} backdrop-blur-sm rounded-lg border border-white/30`}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span className="text-lg">{tool.icon}</span>
                                    <span className="text-white text-sm font-medium">{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Elementos de Dashboard flutuantes */}
                    <div className="absolute top-2 right-2">
                        <motion.div 
                            className="w-8 h-8 bg-green-500/30 rounded border border-green-400/50 flex items-center justify-center"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="text-green-400 text-xs">📊</span>
                        </motion.div>
                    </div>
                    
                    <div className="absolute bottom-2 left-2">
                        <motion.div 
                            className="w-8 h-8 bg-blue-500/30 rounded border border-blue-400/50 flex items-center justify-center"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        >
                            <span className="text-blue-400 text-xs">📈</span>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* React/TypeScript Elements for Item 3 */}
            {id === 3 && (
                <div className="absolute inset-0">
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        <Meteors number={15} />
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                            <span className="text-orange-400 text-xl">📊</span>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                            <span className="text-yellow-400 text-xl">🐍</span>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                            <span className="text-blue-400 text-xl">🗄️</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Infraestrutura & Sistemas para Item 5 - Melhorado */}
            {id === 5 && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div 
                            className="w-16 h-16 bg-white/20 rounded-lg border border-white/30 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="text-white text-2xl">🌐</span>
                        </motion.div>
                        <motion.div 
                            className="w-16 h-16 bg-white/20 rounded-lg border border-white/30 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="text-white text-2xl">📞</span>
                        </motion.div>
                        <motion.div 
                            className="w-16 h-16 bg-white/20 rounded-lg border border-white/30 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="text-white text-2xl">🔧</span>
                        </motion.div>
                        <motion.div 
                            className="w-16 h-16 bg-white/20 rounded-lg border border-white/30 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className="text-white text-2xl">⚙️</span>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* UI/UX Design Elements for Item 4 - Melhorado */}
            {id === 4 && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="w-16 h-16 bg-white/20 rounded-xl border border-white/30 flex items-center justify-center">
                            <span className="text-white text-2xl">🎨</span>
                        </div>
                        <div className="w-16 h-16 bg-white/20 rounded-xl border border-white/30 flex items-center justify-center">
                            <span className="text-white text-2xl">✨</span>
                        </div>
                        <div className="w-16 h-16 bg-white/20 rounded-xl border border-white/30 flex items-center justify-center">
                            <span className="text-white text-2xl">🔧</span>
                        </div>
                        <div className="w-16 h-16 bg-white/20 rounded-xl border border-white/30 flex items-center justify-center">
                            <span className="text-white text-2xl">💡</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Content - Responsivo e bem posicionado */}
            <div className={cn(
                "relative z-10 flex flex-col h-full p-4 sm:p-6",
                titleClassName === "justify-start" && "justify-start",
                titleClassName === "justify-center" && "justify-center text-center",
                titleClassName === "justify-end" && "justify-end",
                !titleClassName && "justify-end"
            )}>
                {/* Título */}
                <div className="font-black text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-tight mb-2 drop-shadow-lg">
                    {title}
                </div>

                {/* Descrição */}
                {description && (
                    <div className="font-semibold text-white text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-md">
                        {description}
                    </div>
                )}

                {/* Botão de explorar - Sempre visível em mobile */}
                
            </div>

            {/* Glow effect no hover */}
            <div className="absolute inset-0 opacity-0 group-hover/bento:opacity-0 transition-opacity duration-500 bg-white rounded-2xl blur-xl pointer-events-none" />
        </motion.div>
    );
};
