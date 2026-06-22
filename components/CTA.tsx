"use client";

import { motion } from "motion/react";
import { Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 md:py-32 relative bg-surface/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Vamos Trabalhar Juntos
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Vamos Construir Visuais que Fazem as Pessoas{" "}
              <span className="text-gradient-accent">
                Pararem e Prestarem Atenção
              </span>
            </h3>
            <p className="text-lg text-muted mb-10 max-w-xl mx-auto lg:mx-0">
              Pronto para elevar a qualidade do seu conteúdo? Preencha o
              formulário ou me chame no WhatsApp para discutirmos seu próximo
              projeto.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Contato via WhatsApp</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-600" />

            <h4 className="text-2xl font-display font-bold text-white mb-6">
              Inicie seu Projeto
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white/80"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder:text-white/30"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white/80"
                  >
                    E-mail Profissional
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder:text-white/30"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="projectType"
                  className="text-sm font-medium text-white/80"
                >
                  Tipo de Projeto
                </label>
                <select
                  id="projectType"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white appearance-none"
                >
                  <option value="" disabled className="text-black">
                    Selecione uma opção
                  </option>
                  <option value="video" className="text-black">
                    Edição de Vídeo
                  </option>
                  <option value="motion" className="text-black">
                    Motion Design
                  </option>
                  <option value="branding" className="text-black">
                    Identidade Visual
                  </option>
                  <option value="thumbnails" className="text-black">
                    Thumbnails
                  </option>
                  <option value="other" className="text-black">
                    Outro
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-white/80"
                >
                  Detalhes do Projeto
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder:text-white/30 resize-none"
                  placeholder="Conte-me um pouco sobre o seu projeto, objetivos e prazos..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
