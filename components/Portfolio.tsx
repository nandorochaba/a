"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const categories = [
  "Todos",
  "Edição de Vídeo",
  "Motion Design",
  "Thumbnails",
  "Branding",
];

const projects = [
  {
    id: 1,
    title: "Campanha de Lançamento - Curso X",
    category: "Edição de Vídeo",
    image: "https://picsum.photos/seed/video1/800/600",
    result: "+2M Visualizações no YouTube",
  },
  {
    id: 2,
    title: "Identidade Visual - Tech Startup",
    category: "Branding",
    image: "https://picsum.photos/seed/brand1/800/600",
    result: "Rebranding completo e guidelines",
  },
  {
    id: 3,
    title: "Animação Explicativa - App Finanças",
    category: "Motion Design",
    image: "https://picsum.photos/seed/motion1/800/600",
    result: "Aumento de 40% na conversão da landing page",
  },
  {
    id: 4,
    title: "Pack de Thumbnails - Canal de Games",
    category: "Thumbnails",
    image: "https://picsum.photos/seed/thumb1/800/600",
    result: "CTR médio de 12% nos últimos 30 dias",
  },
  {
    id: 5,
    title: "Reels Virais - Especialista em Marketing",
    category: "Edição de Vídeo",
    image: "https://picsum.photos/seed/video2/800/600",
    result: "Crescimento de 50k seguidores em 1 mês",
  },
  {
    id: 6,
    title: "Lower Thirds e Intros - Podcast",
    category: "Motion Design",
    image: "https://picsum.photos/seed/motion2/800/600",
    result: "Padronização visual para 100+ episódios",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "Todos" || project.category === activeCategory,
  );

  return (
    <section id="portfolio" className="py-24 md:py-32 relative bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
            >
              Trabalhos Recentes
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Portfólio <span className="text-gradient">Selecionado</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted"
            >
              Uma amostra dos projetos que ajudaram clientes a escalar suas
              marcas através de design e audiovisual de alta qualidade.
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-start md:justify-end"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-white shadow-[0_0_15px_rgba(255,78,0,0.4)]"
                    : "bg-white/5 text-muted hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 cursor-pointer"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6 relative z-10 bg-surface">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted">
                    <span className="font-semibold text-white/80">
                      Resultado:
                    </span>{" "}
                    {project.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
