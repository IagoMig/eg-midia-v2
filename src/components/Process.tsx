import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SearchIcon, LightbulbIcon, CodeIcon, RocketIcon } from 'lucide-react';
export function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const steps = [{
    icon: SearchIcon,
    title: 'Análise',
    description: 'Entendemos seu negócio, público-alvo e objetivos para criar estratégias personalizadas.',
    color: 'from-[#002B60] to-[#004EA8]'
  }, {
    icon: LightbulbIcon,
    title: 'Planejamento',
    description: 'Desenvolvemos um plano estratégico detalhado com metas claras e mensuráveis.',
    color: 'from-[#004EA8] to-[#0094FF]'
  }, {
    icon: CodeIcon,
    title: 'Execução',
    description: 'Implementamos as estratégias com precisão, criatividade e atenção aos detalhes.',
    color: 'from-[#0094FF] to-[#004EA8]'
  }, {
    icon: RocketIcon,
    title: 'Otimização',
    description: 'Monitoramos resultados e otimizamos continuamente para maximizar o retorno.',
    color: 'from-[#004EA8] to-[#002B60]'
  }];
  return <section ref={ref} className="py-20 bg-gradient-to-br from-[#E6E6E6] to-white relative overflow-hidden">
      {/* Floating layers */}
      <motion.div animate={{
      x: [0, 30, 0],
      y: [0, -30, 0]
    }} transition={{
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-20 right-20 w-40 h-40 bg-[#0094FF]/10 rounded-3xl backdrop-blur-sm transform rotate-12" />
      <motion.div animate={{
      x: [0, -30, 0],
      y: [0, 30, 0]
    }} transition={{
      duration: 14,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute bottom-20 left-20 w-60 h-60 bg-[#004EA8]/10 rounded-full backdrop-blur-sm" />
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
            Como trabalhamos
          </h2>
          <p className="text-xl text-[#1A1A1A]/70">
            Um processo estruturado para garantir resultados excepcionais
          </p>
        </motion.div>
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#002B60] via-[#0094FF] to-[#002B60] transform -translate-y-1/2" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
            const Icon = step.icon;
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 50
            }} animate={inView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.6,
              delay: index * 0.2
            }} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0094FF] relative z-10">
                    <motion.div whileHover={{
                  scale: 1.1,
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }} className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                      <Icon className="text-white" size={36} />
                    </motion.div>
                    <div className="text-center mb-4 text-5xl font-bold text-[#0094FF]/20">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-[#002B60] mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-[#1A1A1A]/70 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </div>
    </section>;
}