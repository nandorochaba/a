"use client";

import { motion } from "motion/react";
import Image from "next/image";

const stats = [
  { label: "Projetos Entregues", value: "350+" },
  { label: "Anos de Experiência", value: "6+" },
  { label: "Satisfação dos Clientes", value: "99%" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden group">
              <Image
                src="https://picsum.photos/seed/editor/800/1000"
                alt="Editor de Vídeo Profissional"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 rounded-xl backdrop-blur-md">
                  <p className="text-sm font-medium text-white/90">
                    &quot;A edição não é apenas cortar clipes. É sobre ritmo,
                    emoção e retenção.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-accent/50 rounded-tl-3xl z-[-1]" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-accent/50 rounded-br-3xl z-[-1]" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
              Sobre Mim
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Criatividade, Impacto Visual e{" "}
              <span className="text-gradient">Profissionalismo.</span>
            </h3>

            <div className="space-y-6 text-muted text-lg leading-relaxed mb-10">
              <p>
                Olá, sou um editor de vídeo e designer focado em ajudar
                criadores e marcas a dominarem a atenção do seu público. Com uma
                abordagem cinematográfica e estratégica, transformo material
                bruto em narrativas envolventes.
              </p>
              <p>
                Minha missão é simples: elevar o nível da sua produção
                audiovisual. Seja através de uma edição dinâmica para YouTube,
                motion design para redes sociais ou uma identidade visual coesa,
                eu cuido de cada detalhe para que sua mensagem chegue com força.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-3xl md:text-4xl font-display font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
