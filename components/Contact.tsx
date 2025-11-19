"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        try {
            // TODO: Integrate EmailJS here
            // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY');

            await new Promise((resolve) => setTimeout(resolve, 1500)); // Mock delay
            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section className="py-20 relative" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading text-white mb-6">
                        Vamos <span className="text-purple">Conversar?</span>
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Tem um projeto em mente ou quer apenas dar um oi? Entre em contato e vamos transformar suas ideias em realidade.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6 bg-black-200/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-black-100 border border-white/10 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all text-white placeholder:text-slate-600"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-black-100 border border-white/10 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all text-white placeholder:text-slate-600"
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300">Mensagem</label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-black-100 border border-white/10 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all text-white placeholder:text-slate-600 resize-none"
                                placeholder="Como posso ajudar?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">Enviando...</span>
                            ) : (
                                <>
                                    Enviar Mensagem <FaPaperPlane className="text-sm" />
                                </>
                            )}
                        </button>

                        {status === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center text-sm"
                            >
                                Mensagem enviada com sucesso! Entrarei em contato em breve.
                            </motion.div>
                        )}

                        {status === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center text-sm"
                            >
                                Ocorreu um erro ao enviar. Por favor, tente novamente.
                            </motion.div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
