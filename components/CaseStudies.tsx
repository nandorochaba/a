"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "Canal Tech Review",
    title: "Rebranding e Edição de Vídeo",
    challenge:
      "O canal estava estagnado em 100k inscritos com retenção média de 25%. A identidade visual parecia amadora.",
    process:
      "Desenvolvemos uma nova identidade visual (logo, cores, tipografia) e implementamos um novo estilo de edição com cortes mais rápidos, motion graphics explicativos e sound design imersivo.",
    result:
      "Aumento para 45% de retenção média e crescimento de 50k inscritos em 3 meses.",
    image: "https://picsum.photos/seed/case1/1200/800",
    tags: ["Edição", "Motion", "Branding"],
  },
  {
    id: 2,
    client: "Lançamento Infoproduto",
    title: "Campanha de Vídeos de Vendas",
    challenge:
      "O especialista precisava de vídeos de alta conversão para seu lançamento, mas o material bruto gravado em casa não passava autoridade.",
    process:
      "Tratamento de cor cinematográfico, remoção de ruídos de áudio, inserção de b-rolls relevantes e animações de texto para destacar os gatilhos mentais.",
    result:
      "ROI de 5x no lançamento, com o vídeo de vendas alcançando 12% de conversão.",
    image: "https://picsum.photos/seed/case2/1200/800",
    tags: ["Edição", "Color Grading", "Estratégia"],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
          >
            Estudos de Caso
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Resultados Reais, <br className="hidden md:block" />
            <span className="text-gradient">Impacto Mensurável</span>
          </motion.h3>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <span className="text-accent font-medium tracking-wider uppercase text-sm mb-2 block">
                    {study.client}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                    {study.title}
                  </h4>
                </div>

                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-xl border border-white/5">
                    <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> O
                      Desafio
                    </h5>
                    <p className="text-muted text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-xl border border-white/5">
                    <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />{" "}
                      O Processo
                    </h5>
                    <p className="text-muted text-sm leading-relaxed">
                      {study.process}
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-xl border border-accent/30 bg-accent/5">
                    <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" /> O
                      Resultado
                    </h5>
                    <p className="text-white/90 font-medium leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>

                <button className="group flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                  Ver Projeto Completo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
