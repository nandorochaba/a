"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o processo de contratação?",
    answer:
      "Após o primeiro contato, agendamos uma reunião de briefing para entender suas necessidades. Em seguida, envio uma proposta comercial com cronograma e valores. Aprovada a proposta, iniciamos a produção.",
  },
  {
    question: "Qual o prazo de entrega para um vídeo para YouTube?",
    answer:
      "O prazo médio para um vídeo de 10 a 15 minutos é de 3 a 5 dias úteis, dependendo da complexidade da edição, motion graphics e color grading necessários.",
  },
  {
    question: "Você trabalha com pacotes mensais (retainer)?",
    answer:
      "Sim! Ofereço pacotes mensais para criadores e marcas que precisam de um volume constante de conteúdo (ex: 4 vídeos longos e 12 curtos por mês) com valores diferenciados.",
  },
  {
    question: "Quantas revisões estão incluídas no orçamento?",
    answer:
      "Geralmente, incluo 2 rodadas de revisão por projeto para garantir que o resultado final esteja alinhado com suas expectativas. Revisões adicionais podem ser combinadas.",
  },
  {
    question: "Você também cria a identidade visual do meu canal?",
    answer:
      "Sim, ofereço serviços de branding voltados para criadores, incluindo criação de logotipo, paleta de cores, tipografia, banners e templates para thumbnails.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Perguntas Frequentes
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Tudo o que você <br className="hidden lg:block" />
              <span className="text-gradient">precisa saber</span>
            </h3>
            <p className="text-lg text-muted mb-8">
              Ficou com alguma dúvida sobre como funciona o meu trabalho?
              Confira as respostas para as perguntas mais comuns dos meus
              clientes.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-white/50">
                Ainda tem dúvidas?
              </span>
              <a
                href="#contato"
                className="text-accent hover:text-accent-hover font-medium underline underline-offset-4 transition-colors"
              >
                Fale comigo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${
                  openIndex === index
                    ? "bg-surface border-accent/30"
                    : "bg-surface/30 hover:bg-surface/50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
