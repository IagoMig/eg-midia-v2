import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUpIcon, Share2Icon, MonitorIcon, PaletteIcon, BarChart3Icon, MessageSquareIcon } from 'lucide-react';
export function ServicesCarousel() {
  const services = [{
    icon: TrendingUpIcon,
    title: 'Tráfego Pago',
    description: 'Google Ads e Meta Ads'
  }, {
    icon: Share2Icon,
    title: 'Gestão de Redes Sociais',
    description: 'Conteúdo estratégico'
  }, {
    icon: MonitorIcon,
    title: 'Criação de Sites',
    description: 'Responsivos e modernos'
  }, {
    icon: PaletteIcon,
    title: 'Identidade Visual',
    description: 'Design único e marcante'
  }, {
    icon: BarChart3Icon,
    title: 'Análise de Dados',
    description: 'Métricas e resultados'
  }, {
    icon: MessageSquareIcon,
    title: 'Marketing de Conteúdo',
    description: 'Engajamento real'
  }];
  const duplicatedServices = [...services, ...services, ...services];
  return <div className="py-12 bg-gradient-to-r from-white via-[#E6E6E6] to-white overflow-hidden">
      <motion.div animate={{
      x: [0, -1920]
    }} transition={{
      duration: 30,
      repeat: Infinity,
      ease: 'linear'
    }} className="flex gap-6">
        {duplicatedServices.map((service, index) => {
        const Icon = service.icon;
        return <div key={index} className="min-w-[300px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#0094FF]/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-[#004EA8] to-[#0094FF] rounded-xl">
                  <Icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#002B60] text-lg">
                    {service.title}
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>;
      })}
      </motion.div>
    </div>;
}