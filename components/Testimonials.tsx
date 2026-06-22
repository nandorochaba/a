"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rafael Silva",
    role: "Criador de Conteúdo (Tech)",
    image: "https://picsum.photos/seed/user1/150/150",
    text: "A edição transformou completamente a dinâmica do meu canal. A retenção subiu de 30% para 48% no primeiro mês. O cuidado com o sound design e os gráficos explicativos fizeram toda a diferença na percepção de valor do meu conteúdo.",
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Especialista em Marketing",
    image: "https://picsum.photos/seed/user2/150/150",
    text: "Profissionalismo impecável. Entregou os vídeos do meu lançamento antes do prazo e com uma qualidade cinematográfica que eu não esperava. As thumbnails também aumentaram nosso CTR em 15%. Recomendo de olhos fechados.",
  },
  {
    id: 3,
    name: "Lucas Almeida",
    role: "Fundador da Startup X",
    image: "https://picsum.photos/seed/user3/150/150",
    text: "Precisávamos de um vídeo explicativo para nossa landing page que não fosse chato. O resultado foi um motion design dinâmico, direto ao ponto e que converte muito bem. A comunicação durante o projeto foi excelente.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
          >
            Depoimentos
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            O Que Dizem Meus <br className="hidden md:block" />
            <span className="text-gradient">Clientes Satisfeitos</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-accent/10 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted leading-relaxed mb-8 italic">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent transition-colors">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <span className="text-xs text-muted uppercase tracking-wider">
                    {testimonial.role}
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
