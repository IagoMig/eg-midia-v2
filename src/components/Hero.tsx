import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
export function Hero() {
  return <section id="início" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#002B60] via-[#004EA8] to-[#0094FF] pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0094FF] rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#004EA8] rounded-full blur-3xl opacity-20" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2
        }} className="inline-block mb-8 px-8 py-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-2xl">
            <span className="text-white font-medium text-lg">
              Marketing Digital Inteligente
            </span>
          </motion.div>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Transforme sua marca com <br />
            <TypeAnimation sequence={['Tráfego Pago', 2000, 'Design Criativo', 2000, 'Redes Sociais', 2000, 'Tecnologia', 2000]} wrapper="span" speed={50} repeat={Infinity} className="bg-gradient-to-r from-white via-[#E6E6E6] to-[#0094FF] bg-clip-text text-transparent" />
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="text-xl md:text-3xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
            Estratégias digitais que geram resultados reais para o seu negócio
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7
        }} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button whileHover={{
            scale: 1.05,
            y: -3
          }} whileTap={{
            scale: 0.95
          }} className="px-12 py-6 bg-white text-[#004EA8] rounded-full font-bold text-xl shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_80px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-3">
              Solicitar Orçamento
              <ArrowRightIcon size={24} />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05,
            y: -3
          }} whileTap={{
            scale: 0.95
          }} className="px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white/20 shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_80px_rgba(255,255,255,0.2)] transition-all duration-300">
              Ver Portfólio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">

      </div>
    </section>;
}