"use client";

import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-muted">
            Disponível para novos projetos em 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6 max-w-5xl mx-auto"
        >
          Transformo Ideias em <br className="hidden md:block" />
          <span className="text-gradient-accent">Conteúdo Visual Poderoso</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Especialista em edição de vídeo, motion design e estratégia de
          conteúdo para marcas e criadores que buscam resultados reais e
          estética premium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#portfolio"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span className="relative z-10">Ver Portfólio</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0 mix-blend-multiply" />
          </Link>

          <Link
            href="#contato"
            className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold rounded-full transition-all w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <PlayCircle className="w-5 h-5" />
            <span>Iniciar Projeto</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-white/10"
        >
          <p className="text-sm text-muted uppercase tracking-widest mb-6 font-medium">
            Confiado por criadores, marcas e empresas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Brand Logos Placeholders */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="text-xl font-display font-bold tracking-widest text-white/80 hover:text-white transition-colors"
              >
                BRAND {i}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
