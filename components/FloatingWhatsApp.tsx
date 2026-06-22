"use client";

import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsTooltipVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Show tooltip after a few seconds
    const timer = setTimeout(() => {
      if (window.scrollY > 300) {
        setIsTooltipVisible(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
        >
          <AnimatePresence>
            {isTooltipVisible && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="bg-white text-black px-4 py-3 rounded-2xl shadow-xl relative flex items-center gap-3"
              >
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45" />
                <div className="text-sm font-medium">
                  Olá! Precisa de ajuda com seu projeto? 👋
                </div>
                <button
                  onClick={() => setIsTooltipVisible(false)}
                  className="text-black/50 hover:text-black transition-colors"
                  aria-label="Close tooltip"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 relative group"
            onMouseEnter={() => setIsTooltipVisible(true)}
          >
            <MessageCircle className="w-8 h-8 relative z-10" />
            <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
