"use client";

import { motion } from "motion/react";
import { FileText, Lightbulb, Scissors, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Briefing & Alinhamento",
    description:
      "Entendimento profundo do seu projeto, público-alvo, referências visuais e objetivos de conversão.",
    icon: <FileText className="w-8 h-8 text-accent" />,
  },
  {
    id: "02",
    title: "Direção Criativa",
    description:
      "Definição do estilo de edição, paleta de cores, tipografia e ritmo narrativo antes de iniciar a produção.",
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
  },
  {
    id: "03",
    title: "Produção & Edição",
    description:
      "Corte do material bruto, color grading, sound design imersivo e inserção de motion graphics estratégicos.",
    icon: <Scissors className="w-8 h-8 text-accent" />,
  },
  {
    id: "04",
    title: "Revisão & Entrega",
    description:
      "Apresentação do primeiro corte, ajustes finos baseados no seu feedback e entrega final em alta resolução.",
    icon: <Rocket className="w-8 h-8 text-accent" />,
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
          >
            Metodologia
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Um Processo Transparente e <br className="hidden md:block" />
            <span className="text-gradient">Focado em Resultados</span>
          </motion.h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="text-6xl md:text-8xl font-display font-bold text-white/5 absolute -top-10 -left-4 group-hover:text-accent/10 transition-colors duration-500 select-none">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-8 group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300 mx-auto lg:mx-0">
                  {step.icon}
                  {/* Dot on line */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-3 h-3 rounded-full bg-accent hidden lg:block shadow-[0_0_10px_rgba(255,78,0,0.8)]" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center lg:text-left">
                  <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
