import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    name: 'Carlos Silva',
    company: 'Tech Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    text: 'A EG Mídia Digital transformou nossa presença online. Aumentamos nosso faturamento em 300% em apenas 6 meses!'
  }, {
    name: 'Marina Costa',
    company: 'Fashion Store',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    text: 'Profissionalismo e resultados excepcionais. A equipe entende perfeitamente as necessidades do nosso negócio.'
  }, {
    name: 'Roberto Alves',
    company: 'Fitness Club',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    text: 'Melhor investimento que fizemos! As campanhas de tráfego pago trouxeram resultados além das expectativas.'
  }, {
    name: 'Ana Paula',
    company: 'Clínica Saúde',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    text: 'Atendimento personalizado e estratégias que realmente funcionam. Nossa agenda está sempre cheia!'
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="depoimentos" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-[#1A1A1A]/70">
            Histórias reais de sucesso e transformação
          </p>
        </motion.div>
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} initial={{
            opacity: 0,
            x: 100
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -100
          }} transition={{
            duration: 0.5
          }} className="bg-[#E6E6E6] rounded-3xl p-8 md:p-12 shadow-xl">
              <QuoteIcon className="text-[#0094FF] mb-6" size={48} />
              <p className="text-xl md:text-2xl text-[#1A1A1A] mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full object-cover border-4 border-[#0094FF]" />
                <div>
                  <h4 className="text-lg font-bold text-[#002B60]">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#1A1A1A]/70">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-8">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={prevTestimonial} className="p-3 bg-gradient-to-r from-[#004EA8] to-[#0094FF] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <ChevronLeftIcon size={24} />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={nextTestimonial} className="p-3 bg-gradient-to-r from-[#004EA8] to-[#0094FF] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <ChevronRightIcon size={24} />
            </motion.button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#0094FF] w-8' : 'bg-[#E6E6E6]'}`} />)}
          </div>
        </div>
      </div>
    </section>;
}