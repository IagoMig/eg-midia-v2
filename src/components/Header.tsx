import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia scroll do body quando o menu estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const menuItems = ['Início', 'Serviços', 'Portfólio', 'Depoimentos', 'Contato'];

  // Componente que renderiza o overlay + painel via portal no <body>
  const MobileMenuPortal = ({ open, close }) => {
    if (!open) return null;

    const content = (
      <motion.div
        key="mobileMenuWrapper"
        className="fixed inset-0 z-[99999] flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Fundo escurecido cobrindo toda a tela */}
        <motion.div
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Painel lateral à direita */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative h-full w-4/5 max-w-sm bg-white shadow-2xl flex flex-col justify-between rounded-l-2xl border-l border-gray-200"
        >
          <nav className="flex flex-col mt-24 px-8 space-y-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={close}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
                className="text-xl text-[#1A1A1A] hover:text-[#0094FF] font-medium transition-colors duration-200"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="px-8 pb-8">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={close}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#004EA8] to-[#0094FF] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Fale Conosco
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );

    return ReactDOM.createPortal(
      <AnimatePresence>{content}</AnimatePresence>,
      document.body
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-100'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
        <img
  src={isScrolled ? "/lg-2.png" : "/lg-1.png"}
  alt="EG Mídia Digital"
  className={`transition-all duration-300 select-none ${
    isScrolled ? "h-16" : "h-10"
  }`}
/>


          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#1A1A1A] hover:text-[#0094FF] transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-3 bg-gradient-to-r from-[#004EA8] to-[#0094FF] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Fale Conosco
            </button>
          </nav>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="md:hidden text-[#002B60] p-2 z-[120]"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Renderiza o menu via portal no <body> */}
      <MobileMenuPortal open={isMobileMenuOpen} close={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
