import React from 'react';
import { motion } from 'framer-motion';

export function ClientsCarousel() {
  const clients = Array.from({ length: 26 }, (_, i) => `/${i + 1}.png`);
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#001a33] via-[#003366] to-[#004c99] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <h2 className="text-center text-white text-4xl font-bold mb-14 drop-shadow-md tracking-tight">
        Marcas que confiam em nós
      </h2>

      <motion.div
        animate={{ x: [0, -2400] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-14"
      >
        {duplicatedClients.map((src, index) => (
          <div
            key={index}
            className="min-w-[260px] flex justify-center items-center bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 border border-white/20"
          >
            <img
              src={src}
              alt={`Cliente ${index + 1}`}
              className="h-28 w-auto object-contain brightness-125 contrast-125 saturate-125 drop-shadow-lg hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
