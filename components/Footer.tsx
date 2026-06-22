"use client";

import { motion } from "motion/react";
import { Instagram, Youtube, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-display font-bold tracking-tighter mb-6 inline-block"
            >
              STUDIO<span className="text-accent">.</span>
            </Link>
            <p className="text-muted max-w-sm mb-8 leading-relaxed">
              Transformando ideias em conteúdo visual poderoso. Edição de vídeo,
              motion design e estratégia para marcas ambiciosas.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contato@studio.com"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all text-muted"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all text-muted"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all text-muted"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all text-muted"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Navegação
            </h4>
            <ul className="space-y-4">
              {["Sobre", "Serviços", "Portfólio", "Processo", "Preços"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace("ç", "c")}`}
                      className="text-muted hover:text-accent transition-colors flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="text-muted">
                <span className="block text-white/50 text-xs mb-1">E-mail</span>
                <a
                  href="mailto:contato@studio.com"
                  className="hover:text-accent transition-colors"
                >
                  contato@studio.com
                </a>
              </li>
              <li className="text-muted">
                <span className="block text-white/50 text-xs mb-1">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="text-muted">
                <span className="block text-white/50 text-xs mb-1">
                  Localização
                </span>
                São Paulo, SP - Brasil
                <br />
                (Atendimento Global)
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} Studio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted">
            <Link href="#" className="hover:text-white transition-colors">
              Termos de Serviço
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
