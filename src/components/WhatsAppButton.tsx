import React, { useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, SendIcon } from 'lucide-react';
export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/554191487158?text=${encodedMessage}`, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };
  return <div className="fixed bottom-0 right-0 z-[9999] pointer-events-none">
      <div className="pointer-events-auto">
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          scale: 0.8,
          y: 20
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} exit={{
          opacity: 0,
          scale: 0.8,
          y: 20
        }} className="absolute bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" />
                  <div>
                    <h3 className="text-white font-bold">EG Mídia Digital</h3>
                    <p className="text-white/80 text-sm">Online agora</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 p-1 rounded-full transition-colors">
                  <XIcon size={20} />
                </button>
              </div>
              <div className="p-4 bg-[#E5DDD5] min-h-[200px] max-h-[300px] overflow-y-auto">
                <div className="bg-white rounded-lg p-3 shadow-sm mb-4 max-w-[80%]">
                  <p className="text-sm text-gray-800">
                    Olá! Como podemos ajudar você hoje?
                  </p>
                  <span className="text-xs text-gray-500">Agora</span>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                  <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Digite sua mensagem..." className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#25D366] text-sm" />
                  <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} onClick={handleSendMessage} className="p-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <SendIcon size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
        <motion.button onClick={() => setIsOpen(!isOpen)} initial={{
        scale: 0,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 0.5
      }} whileHover={{
        scale: 1.1
      }} whileTap={{
        scale: 0.9
      }} className="m-6 p-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 relative">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
            1
          </span>
        </motion.button>
      </div>
    </div>;
}