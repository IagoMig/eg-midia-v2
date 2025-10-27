import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUpIcon, UsersIcon, AwardIcon, RocketIcon } from 'lucide-react';
export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const stats = [{
    icon: TrendingUpIcon,
    value: '300%',
    label: 'Crescimento Médio',
    description: 'ROI dos nossos clientes'
  }, {
    icon: UsersIcon,
    value: '500+',
    label: 'Clientes Ativos',
    description: 'Confiando em nosso trabalho'
  }, {
    icon: AwardIcon,
    value: '50+',
    label: 'Prêmios',
    description: 'Reconhecimento nacional'
  }, {
    icon: RocketIcon,
    value: '1000+',
    label: 'Projetos',
    description: 'Entregues com sucesso'
  }];
  return <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0094FF]/5 to-transparent" />
      <motion.div animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0]
    }} transition={{
      duration: 15,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-0 right-0 w-96 h-96 bg-[#0094FF]/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002B60] mb-4">
            Números que impressionam
          </h2>
          <p className="text-xl text-[#1A1A1A]/70">
            Resultados reais que comprovam nossa excelência
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
          const Icon = stat.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} animate={inView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} whileHover={{
            y: -10,
            scale: 1.05
          }} className="relative bg-gradient-to-br from-white to-[#E6E6E6] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0094FF]">
                <motion.div whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.6
            }} className="w-16 h-16 bg-gradient-to-br from-[#004EA8] to-[#0094FF] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-4xl font-bold text-[#002B60] mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-[#004EA8] mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-[#1A1A1A]/70">{stat.description}</p>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}