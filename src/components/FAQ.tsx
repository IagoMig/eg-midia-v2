import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDownIcon } from 'lucide-react';
export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [{
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Os primeiros resultados geralmente aparecem entre 30 a 60 dias, dependendo do serviço contratado. Tráfego pago pode gerar resultados mais rápidos, enquanto SEO é um investimento de médio a longo prazo.'
  }, {
    question: 'Qual é o investimento mínimo para começar?',
    answer: 'O investimento varia conforme os serviços escolhidos e objetivos do seu negócio. Oferecemos pacotes personalizados a partir de R$ 2.000/mês, incluindo estratégia, execução e relatórios detalhados.'
  }, {
    question: 'Vocês trabalham com qual tipo de empresa?',
    answer: 'Atendemos empresas de todos os portes e segmentos, desde startups até grandes corporações. Nosso foco é entender o seu negócio e criar estratégias personalizadas que gerem resultados reais.'
  }, {
    question: 'Como funciona o processo de contratação?',
    answer: 'Primeiro, fazemos uma reunião para entender suas necessidades. Depois, apresentamos uma proposta personalizada. Aprovada a proposta, iniciamos o onboarding e começamos a trabalhar imediatamente.'
  }, {
    question: 'Vocês oferecem garantia de resultados?',
    answer: 'Trabalhamos com metas claras e mensuráveis. Embora resultados dependam de diversos fatores, nosso histórico comprova crescimento médio de 300% no ROI dos clientes nos primeiros 6 meses.'
  }, {
    question: 'Posso cancelar o serviço a qualquer momento?',
    answer: 'Sim! Não trabalhamos com fidelização obrigatória. Você pode cancelar quando quiser, mas estamos confiantes de que os resultados vão te fazer querer continuar conosco.'
  }];
  return <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <motion.div animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-0 left-0 w-96 h-96 bg-[#0094FF]/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-[#1A1A1A]/70">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#0094FF]">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-8 py-6 flex items-center justify-between text-left">
                <span className="text-lg font-semibold text-[#002B60] pr-8">
                  {faq.question}
                </span>
                <motion.div animate={{
              rotate: openIndex === index ? 180 : 0
            }} transition={{
              duration: 0.3
            }}>
                  <ChevronDownIcon className="text-[#0094FF]" size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} transition={{
              duration: 0.3
            }} className="overflow-hidden">
                    <div className="px-8 pb-6 text-[#1A1A1A]/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </motion.div>)}
        </div>
      </div>
    </section>;
}