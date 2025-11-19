"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "Todos" | "Frontend" | "Dados & BI" | "Ferramentas";

interface Skill {
    name: string;
    category: Category;
    icon: string;
    level: number; // 0 to 100
}

const skillsData: Skill[] = [
    { name: "React", category: "Frontend", icon: "⚛️", level: 90 },
    { name: "TypeScript", category: "Frontend", icon: "📘", level: 85 },
    { name: "Tailwind CSS", category: "Frontend", icon: "🎨", level: 95 },
    { name: "Next.js", category: "Frontend", icon: "▲", level: 88 },
    { name: "Power BI", category: "Dados & BI", icon: "📊", level: 98 },
    { name: "SQL", category: "Dados & BI", icon: "💾", level: 92 },
    { name: "Python", category: "Dados & BI", icon: "🐍", level: 85 },
    { name: "Excel", category: "Dados & BI", icon: "📗", level: 95 },
    { name: "Git", category: "Ferramentas", icon: "🐱", level: 90 },
    { name: "Figma", category: "Ferramentas", icon: "🖌️", level: 80 },
];

const categories: Category[] = ["Todos", "Frontend", "Dados & BI", "Ferramentas"];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("Todos");

    const filteredSkills = skillsData.filter(
        (skill) => activeCategory === "Todos" || skill.category === activeCategory
    );

    return (
        <section className="py-20 relative" id="skills">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="heading text-white mb-6">
                        Minhas <span className="text-purple">Habilidades</span>
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Um conjunto de ferramentas técnicas que utilizo para transformar dados em decisões e designs em realidade.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                    ? "bg-purple text-white border-purple shadow-lg shadow-purple-500/25"
                                    : "bg-black-200 text-slate-400 border-white/10 hover:border-purple/50 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-black-200/50 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple/30 transition-colors group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl">{skill.icon}</span>
                                    <span className="text-xs font-mono text-slate-500 px-2 py-1 rounded bg-white/5">
                                        {skill.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>

                                {/* Progress Bar */}
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                                    />
                                </div>
                                <div className="flex justify-end mt-1">
                                    <span className="text-xs text-slate-400">{skill.level}%</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
