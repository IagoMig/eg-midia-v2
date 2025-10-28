import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SendIcon, FacebookIcon, InstagramIcon, MessageCircleIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send('service_9xzfh8d', 'template_2u0r4he', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }, 'ldvarD_eFwoBysHOg');
      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const menuItems = ['Início', 'Serviços', 'Portfólio', 'Depoimentos', 'Contato'];
  return <section id="contato" ref={ref} className="py-20 bg-gradient-to-br from-[#004EA8] via-[#0094FF] to-[#004EA8] relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pronto para impulsionar sua marca?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Fale com a EG Mídia Digital e leve sua presença online para o
            próximo nível
          </p>
        </motion.div>
        <motion.form initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="space-y-6">
            <div>
              <input type="text" placeholder="Seu nome" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300" required />
            </div>
            <div>
              <input type="email" placeholder="Seu e-mail" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300" required />
            </div>
            <div>
              <textarea placeholder="Sua mensagem" value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} rows={5} className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 resize-none" required />
            </div>
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-white text-[#004EA8] rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              <SendIcon size={20} />
            </motion.button>
          </div>
        </motion.form>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="flex justify-center gap-6 mb-16">
          {[{
          Icon: FacebookIcon,
          label: 'Facebook'
        }, {
          Icon: InstagramIcon,
          label: 'Instagram'
        }, {
          Icon: MessageCircleIcon,
          label: 'WhatsApp'
        }].map((social, index) => {
          const Icon = social.Icon;
          return <motion.a key={index} whileHover={{
            scale: 1.2,
            rotate: 5
          }} whileTap={{
            scale: 0.9
          }} href="#" className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-[#0094FF] transition-all duration-300 group">
                <Icon className="text-white group-hover:text-[#0094FF]" size={28} />
              </motion.a>;
        })}
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.6
      }} className="bg-gradient-to-br from-[#002B60] via-[#004EA8] to-[#0094FF] rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <motion.h3 whileHover={{
              scale: 1.05
            }} className="text-3xl font-bold mb-4 text-white">
                EG Mídia Digital
              </motion.h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Transformando marcas através de estratégias digitais
                inteligentes, design inovador e tecnologia de ponta.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <MailIcon size={18} />
                  <span>contato.egmidiadigital@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <PhoneIcon size={18} />
                  <span>41 9148-7158</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPinIcon size={18} />
                  <span>Curitiba, PR - Brasil</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Menu Rápido
              </h4>
              <nav className="flex flex-col space-y-2">
                {menuItems.map(item => <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={{
                x: 5
              }} className="text-white/80 hover:text-white transition-all duration-300">
                    {item}
                  </motion.a>)}
              </nav>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Conecte-se
              </h4>
              <div className="flex gap-3 mb-6">
                {[{
                Icon: FacebookIcon,
                label: 'Facebook'
              }, {
                Icon: InstagramIcon,
                label: 'Instagram'
              }, {
                Icon: MessageCircleIcon,
                label: 'WhatsApp'
              }].map((social, index) => {
                const Icon = social.Icon;
                return <motion.a key={index} href="#" whileHover={{
                  scale: 1.2,
                  rotate: 5
                }} whileTap={{
                  scale: 0.9
                }} className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white group transition-all duration-300">
                      <Icon className="text-white group-hover:text-[#0094FF] transition-colors" size={20} />
                    </motion.a>;
              })}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Siga-nos nas redes sociais para ficar por dentro das novidades e
                dicas de marketing digital.
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © 2025 EG Mídia Digital. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}