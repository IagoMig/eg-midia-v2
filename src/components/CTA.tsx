import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section ref={ref} className="py-20 bg-gradient-to-br from-[#002B60] via-[#004EA8] to-[#0094FF] relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <motion.div animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={inView ? {
        opacity: 1,
        scale: 1
      } : {}} transition={{
        duration: 0.6
      }} className="inline-block mb-6 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
          <div className="flex items-center gap-2">
            <SparklesIcon className="text-white" size={20} />
            <span className="text-white font-medium">
              Transforme seu negócio hoje
            </span>
          </div>
        </motion.div>
        <motion.h2 initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Pronto para decolar seu negócio?
        </motion.h2>
        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          Junte-se a centenas de empresas que já transformaram seus resultados
          com a EG Mídia Digital
        </motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="px-10 py-5 bg-white text-[#004EA8] rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-2">
            Começar Agora
            <ArrowRightIcon size={20} />
          </motion.button>
          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
            Agendar Reunião
          </motion.button>
        </motion.div>
      </div>
    </section>;
}