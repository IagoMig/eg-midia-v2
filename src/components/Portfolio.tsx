import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLinkIcon } from 'lucide-react';
export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const projects = [{
    title: 'E-commerce Fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    category: 'Tráfego Pago',
    size: 'large'
  }, {
    title: 'Restaurante Gourmet',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
    category: 'Redes Sociais',
    size: 'medium'
  }, {
    title: 'Tech Startup',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=600&fit=crop',
    category: 'Website',
    size: 'tall'
  }, {
    title: 'Academia Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop',
    category: 'Identidade Visual',
    size: 'medium'
  }, {
    title: 'Consultoria Jurídica',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop',
    category: 'Marketing Digital',
    size: 'large'
  }, {
    title: 'Clínica Médica',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=600&fit=crop',
    category: 'Branding',
    size: 'tall'
  }, {
    title: 'Cafeteria Moderna',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop',
    category: 'Social Media',
    size: 'medium'
  }, {
    title: 'App de Delivery',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=400&fit=crop',
    category: 'UI/UX Design',
    size: 'medium'
  }, {
    title: 'Imobiliária Premium',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    category: 'Website',
    size: 'large'
  }];
  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-1';
      case 'tall':
        return 'md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      default:
        return '';
    }
  };
  return <section id="portfólio" ref={ref} className="py-20 bg-gradient-to-br from-[#002B60] via-[#004EA8] to-[#002B60] relative overflow-hidden">
      {/* Floating layers */}
      <motion.div animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-3xl backdrop-blur-sm" />
      <motion.div animate={{
      y: [0, 20, 0],
      rotate: [0, -5, 0]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute bottom-20 right-10 w-60 h-60 bg-white/5 rounded-full backdrop-blur-sm" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos que geram resultados
          </h2>
          <p className="text-xl text-white/80">
            Conheça alguns dos trabalhos que transformaram negócios
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 auto-rows-[200px] gap-4">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} animate={inView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className={`group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer ${getSizeClass(project.size)}`}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <motion.div initial={{
            opacity: 0
          }} whileHover={{
            opacity: 1
          }} className="absolute inset-0 bg-gradient-to-t from-[#0094FF] via-[#004EA8]/80 to-transparent flex flex-col items-center justify-center transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/90 mb-4">{project.category}</p>
                <div className="flex items-center gap-2 text-white font-semibold">
                  Ver Projeto
                  <ExternalLinkIcon size={20} />
                </div>
              </motion.div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}