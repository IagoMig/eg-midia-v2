import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuItems = ['Início', 'Serviços', 'Portfólio', 'Depoimentos', 'Contato'];
  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white/60 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div whileHover={{
          scale: 1.05
        }} className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#002B60] via-[#004EA8] to-[#0094FF] bg-clip-text text-transparent">
              EG Mídia Digital
            </span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-[#1A1A1A] hover:text-[#0094FF] transition-colors duration-300 font-medium">
                {item}
              </a>)}
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="px-6 py-3 bg-gradient-to-r from-[#004EA8] to-[#0094FF] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Fale Conosco
            </motion.button>
          </nav>
          <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} whileTap={{
          scale: 0.9
        }} className="md:hidden text-[#002B60] p-2 z-50">
            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && <>
            <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" />
            <motion.div initial={{
          x: '100%'
        }} animate={{
          x: 0
        }} exit={{
          x: '100%'
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200
        }} className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-40 md:hidden">
              <div className="flex flex-col h-full p-8 pt-24">
                <nav className="flex flex-col space-y-6 flex-1">
                  {menuItems.map((item, index) => <motion.a key={item} href={`#${item.toLowerCase()}`} onClick={handleMenuClick} initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="text-2xl text-[#1A1A1A] hover:text-[#0094FF] transition-colors duration-300 font-medium">
                      {item}
                    </motion.a>)}
                </nav>
                <motion.button initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="px-8 py-4 bg-gradient-to-r from-[#004EA8] to-[#0094FF] text-white rounded-full font-semibold w-full shadow-lg">
                  Fale Conosco
                </motion.button>
              </div>
            </motion.div>
          </>}
      </AnimatePresence>
    </motion.header>;
}