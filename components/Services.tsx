"use client";

import { motion } from "motion/react";
import {
  Video,
  MonitorPlay,
  Image as ImageIcon,
  PenTool,
  BarChart,
} from "lucide-react";

const services = [
  {
    icon: <Video className="w-8 h-8 text-accent" />,
    title: "Edição de Vídeo",
    description:
      "Cortes dinâmicos, color grading, sound design e ritmo perfeito para YouTube, Reels e TikTok.",
    ideal: "Criadores de conteúdo e marcas",
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-accent" />,
    title: "Motion Design",
    description:
      "Animações 2D, lower thirds, intros e transições personalizadas que elevam o valor de produção.",
    ideal: "Canais do YouTube e agências",
  },
  {
    icon: <ImageIcon className="w-8 h-8 text-accent" />,
    title: "Thumbnails & Social",
    description:
      "Capas de alta conversão (CTR) e posts estáticos desenhados para capturar a atenção imediata.",
    ideal: "YouTubers e infoprodutores",
  },
  {
    icon: <PenTool className="w-8 h-8 text-accent" />,
    title: "Identidade Visual",
    description:
      "Criação de logotipos, paletas de cores e guias de estilo para uma presença digital coesa.",
    ideal: "Novos negócios e rebrandings",
  },
  {
    icon: <BarChart className="w-8 h-8 text-accent" />,
    title: "Estratégia de Conteúdo",
    description:
      "Consultoria para estruturação de roteiros, ganchos (hooks) e retenção de audiência.",
    ideal: "Criadores buscando crescimento",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
          >
            Especialidades
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Serviços Criativos para <br className="hidden md:block" />
            <span className="text-gradient">Marcas Ambiciosas</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted"
          >
            Do roteiro à publicação, ofereço soluções completas de design e
            audiovisual focadas em retenção e conversão.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h4 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h4>

                <p className="text-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Ideal para:
                  </span>
                  <span className="text-sm font-medium text-white/80">
                    {service.ideal}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
