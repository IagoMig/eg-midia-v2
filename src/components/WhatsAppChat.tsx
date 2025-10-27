import React, { useEffect, useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, SendIcon } from 'lucide-react';
export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openWhatsAppChat', handleOpen);
    return () => window.removeEventListener('openWhatsAppChat', handleOpen);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/554191487158?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setName('');
    setMessage('');
  };
  return <AnimatePresence>
      {isOpen && <>
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
          <motion.div initial={{
        opacity: 0,
        scale: 0.8,
        y: 100
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.8,
        y: 100
      }} transition={{
        type: 'spring',
        damping: 25
      }} className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#25D366]" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    EG Mídia Digital
                  </h3>
                  <p className="text-white/90 text-sm">Online agora</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 p-2 rounded-full transition-colors">
                <XIcon size={24} />
              </button>
            </div>
            <div className="p-6 bg-[#ECE5DD] min-h-[200px]">
              <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-md mb-4 max-w-[80%]">
                <p className="text-[#1A1A1A] text-sm">
                  Olá! 👋 Como podemos ajudar você hoje?
                </p>
                <span className="text-xs text-[#667781] mt-1 block">Agora</span>
              </motion.div>
            </div>
            <form onSubmit={handleSubmit} className="p-6 bg-white border-t border-gray-200">
              <input type="text" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all" />
              <div className="flex gap-2">
                <input type="text" placeholder="Digite sua mensagem..." value={message} onChange={e => setMessage(e.target.value)} required className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all" />
                <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} type="submit" className="px-4 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <SendIcon size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </>}
    </AnimatePresence>;
}