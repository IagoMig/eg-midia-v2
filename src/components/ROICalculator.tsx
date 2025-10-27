import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUpIcon, DollarSignIcon, TargetIcon } from 'lucide-react';
export function ROICalculator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [investment, setInvestment] = useState(5000);
  const [currentRevenue, setCurrentRevenue] = useState(20000);
  const calculateROI = () => {
    const growthRate = 3;
    const projectedRevenue = currentRevenue * growthRate;
    const profit = projectedRevenue - currentRevenue - investment;
    const roi = (profit / investment * 100).toFixed(0);
    return {
      projectedRevenue: projectedRevenue.toLocaleString('pt-BR'),
      profit: profit.toLocaleString('pt-BR'),
      roi: roi
    };
  };
  const results = calculateROI();
  return <section ref={ref} className="py-20 bg-gradient-to-br from-white to-[#E6E6E6] relative overflow-hidden">
      <motion.div animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-0 right-0 w-96 h-96 bg-[#0094FF]/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Calcule seu ROI
          </h2>
          <p className="text-xl text-[#1A1A1A]/70">
            Veja o potencial de crescimento do seu negócio
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#002B60] mb-6">
              Seus Dados
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Investimento Mensal em Marketing
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#004EA8] font-semibold">
                    R$
                  </span>
                  <input type="range" min="1000" max="50000" step="1000" value={investment} onChange={e => setInvestment(Number(e.target.value))} className="w-full h-3 bg-gradient-to-r from-[#004EA8] to-[#0094FF] rounded-full appearance-none cursor-pointer mt-4" />
                  <div className="text-center mt-2 text-2xl font-bold text-[#0094FF]">
                    R$ {investment.toLocaleString('pt-BR')}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Faturamento Atual Mensal
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#004EA8] font-semibold">
                    R$
                  </span>
                  <input type="range" min="5000" max="200000" step="5000" value={currentRevenue} onChange={e => setCurrentRevenue(Number(e.target.value))} className="w-full h-3 bg-gradient-to-r from-[#004EA8] to-[#0094FF] rounded-full appearance-none cursor-pointer mt-4" />
                  <div className="text-center mt-2 text-2xl font-bold text-[#0094FF]">
                    R$ {currentRevenue.toLocaleString('pt-BR')}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="bg-gradient-to-br from-[#002B60] via-[#004EA8] to-[#0094FF] rounded-3xl p-8 shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Projeção de Resultados</h3>
            <div className="space-y-6">
              <motion.div whileHover={{
              scale: 1.05
            }} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUpIcon size={24} />
                  <span className="text-sm opacity-90">
                    Faturamento Projetado
                  </span>
                </div>
                <div className="text-3xl font-bold">
                  R$ {results.projectedRevenue}
                </div>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSignIcon size={24} />
                  <span className="text-sm opacity-90">Lucro Adicional</span>
                </div>
                <div className="text-3xl font-bold">R$ {results.profit}</div>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <TargetIcon size={24} />
                  <span className="text-sm opacity-90">
                    Retorno sobre Investimento
                  </span>
                </div>
                <div className="text-3xl font-bold">{results.roi}%</div>
              </motion.div>
            </div>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="w-full mt-6 px-8 py-4 bg-white text-[#004EA8] rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              Solicitar Proposta Personalizada
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>;
}