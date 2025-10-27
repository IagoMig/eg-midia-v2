import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUpIcon, Share2Icon, MonitorIcon, PaletteIcon, BarChart3Icon, MessageSquareIcon } from 'lucide-react';
export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const services = [{
    icon: TrendingUpIcon,
    title: 'Tráfego Pago',
    description: 'Campanhas estratégicas no Google Ads e Meta Ads para maximizar seu ROI e alcançar o público certo.'
  }, {
    icon: Share2Icon,
    title: 'Gestão de Redes Sociais',
    description: 'Conteúdo criativo e engajador para fortalecer sua presença digital e conectar com sua audiência.'
  }, {
    icon: MonitorIcon,
    title: 'Criação de Sites',
    description: 'Sites responsivos, modernos e otimizados para conversão, desenvolvidos com as melhores tecnologias.'
  }, {
    icon: PaletteIcon,
    title: 'Identidade Visual',
    description: 'Design único e marcante que reflete a essência da sua marca e diferencia você da concorrência.'
  }, {
    icon: BarChart3Icon,
    title: 'Análise de Dados',
    description: 'Métricas detalhadas e insights estratégicos para otimizar suas campanhas e decisões de negócio.'
  }, {
    icon: MessageSquareIcon,
    title: 'Marketing de Conteúdo',
    description: 'Estratégias de conteúdo que educam, engajam e convertem sua audiência em clientes fiéis.'
  }];
  return <section id="serviços" ref={ref} className="py-24 bg-gradient-to-b from-white to-[#E6E6E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#002B60] mb-6 drop-shadow-lg">
            O que fazemos
          </h2>
          <p className="text-2xl text-[#1A1A1A]/70">
            Soluções digitais completas para sua marca
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
          const Icon = service.icon;
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
            scale: 1.03
          }} className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,148,255,0.3)] transition-all duration-500 border border-transparent hover:border-[#0094FF] group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0094FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.6
            }} className="relative w-20 h-20 bg-gradient-to-br from-[#004EA8] to-[#0094FF] rounded-2xl flex items-center justify-center mb-8 group-hover:shadow-[0_10px_30px_rgba(0,148,255,0.4)] transition-shadow duration-300">
                  <Icon className="text-white" size={36} />
                </motion.div>
                <h3 className="relative text-2xl font-bold text-[#002B60] mb-4">
                  {service.title}
                </h3>
                <p className="relative text-[#1A1A1A]/70 leading-relaxed text-lg">
                  {service.description}
                </p>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
}