"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "A partir de R$ 1.500",
    description: "Ideal para criadores iniciantes ou projetos pontuais.",
    features: [
      "Edição de 4 vídeos curtos (Reels/TikTok)",
      "Cortes dinâmicos básicos",
      "Legendas animadas",
      "Color grading padrão",
      "1 revisão por vídeo",
    ],
    missing: [
      "Motion design avançado",
      "Sound design imersivo",
      "Criação de thumbnails",
    ],
    highlight: false,
    cta: "Solicitar Orçamento",
  },
  {
    name: "Growth",
    price: "A partir de R$ 3.500",
    description: "Para marcas e criadores focados em crescimento e retenção.",
    features: [
      "Edição de 8 vídeos curtos + 2 longos",
      "Cortes dinâmicos avançados",
      "Legendas animadas premium",
      "Color grading cinematográfico",
      "Sound design imersivo",
      "Motion design explicativo",
      "Criação de 2 thumbnails",
      "2 revisões por vídeo",
    ],
    missing: [],
    highlight: true,
    cta: "Escolher Growth",
  },
  {
    name: "Premium",
    price: "Sob Consulta",
    description: "Solução completa de conteúdo e identidade visual.",
    features: [
      "Pacote de vídeos personalizado",
      "Direção criativa completa",
      "Identidade visual e branding",
      "Motion design 2D complexo",
      "Sound design e trilha sonora original",
      "Thumbnails ilimitadas",
      "Revisões ilimitadas",
      "Consultoria de estratégia de conteúdo",
    ],
    missing: [],
    highlight: false,
    cta: "Falar com Especialista",
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="py-24 md:py-32 relative bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
          >
            Investimento
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Planos Transparentes, <br className="hidden md:block" />
            <span className="text-gradient">Sem Surpresas</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted"
          >
            Escolha o pacote que melhor se adapta ao momento do seu negócio ou
            solicite um orçamento personalizado.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.highlight
                  ? "bg-surface border-accent shadow-[0_0_30px_rgba(255,78,0,0.15)] transform lg:-translate-y-4"
                  : "bg-surface/50 border-white/10 hover:border-white/20"
              } flex flex-col h-full transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-2xl font-display font-bold text-white mb-2">
                  {plan.name}
                </h4>
                <p className="text-muted text-sm mb-6">{plan.description}</p>
                <div className="text-3xl font-display font-bold text-white">
                  {plan.price}
                  {plan.price !== "Sob Consulta" && (
                    <span className="text-sm text-muted font-normal">/mês</span>
                  )}
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 opacity-50"
                  >
                    <X className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                    <span className="text-sm text-muted line-through">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#contato"
                className={`w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 ${
                  plan.highlight
                    ? "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
