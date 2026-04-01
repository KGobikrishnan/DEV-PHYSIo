import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin, AlignRight, X } from 'lucide-react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300">
      {/* Topbar (Hidden on mobile) */}
      <div className="hidden lg:block bg-gray-900 text-white text-sm py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-brand-yellow" />
              Call Us: (+91) 987 654 3210
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-brand-yellow" />
              contact@devphysio.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-yellow transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-brand-yellow transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-brand-yellow transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-3' : 'py-4 md:py-6'}`}>
        <div className="container-custom flex justify-between items-center">
          <a href="#" className="inline-block relative z-50">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 font-medium text-brand-navy">
              {navLinks.map((link, idx) => (
                <li key={idx} className="relative group">
                  <a href={link.href} className="hover:text-brand-blue transition-colors duration-200 block py-2">{link.name}</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 193, 7, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#appointment" 
              className="bg-brand-yellow text-brand-navy font-bold py-2.5 px-6 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 text-sm"
            >
              Make an Appointment
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-navy relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <AlignRight size={28} />}
          </button>

          {/* Mobile Nav Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 glass-dark pt-28 px-6 lg:hidden flex flex-col items-center z-40"
              >
                <ul className="flex flex-col items-center gap-8 font-serif text-3xl text-white w-full">
                  {navLinks.map((link, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (idx * 0.1), duration: 0.4 }}
                    >
                      <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-yellow transition-colors">{link.name}</a>
                    </motion.li>
                  ))}
                </ul>
                <motion.a 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  href="#appointment" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="bg-brand-yellow text-brand-navy font-bold mt-12 w-full max-w-xs text-lg py-4 rounded-full shadow-[0_0_20px_rgba(255,193,7,0.3)] text-center hover:bg-white transition-colors"
                >
                  Book Appointment
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
