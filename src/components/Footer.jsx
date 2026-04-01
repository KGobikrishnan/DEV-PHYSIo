import React from 'react';
import Logo from './Logo';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 md:pt-24 pb-8 mt-auto rounded-none md:rounded-t-[3rem] overflow-hidden relative shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      {/* Abstract wave at the top */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue opacity-90"></div>

      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-8 mb-10"
        >

          {/* Brand Col */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="col-span-2 lg:col-span-1">
            <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-xl">
              <Logo className="scale-90 origin-left" />
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
              Empowering Recovery, Restoring Function, and Elevating Quality of Life through Dedicated Physiotherapy and Neuro Rehabilitation.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all duration-300 hover:scale-110 shadow-lg"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all duration-300 hover:scale-110 shadow-lg"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all duration-300 hover:scale-110 shadow-lg"><Linkedin size={18} /></a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="col-span-1">
            <h4 className="font-serif font-bold text-xl mb-6 text-brand-yellow">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100/70 hover:text-white hover:ml-2 transition-all text-sm">Home</a></li>
              <li><a href="#about" className="text-blue-100/70 hover:text-white hover:ml-2 transition-all text-sm">About Us</a></li>
              <li><a href="#services" className="text-blue-100/70 hover:text-white hover:ml-2 transition-all text-sm">Our Services</a></li>
              <li><a href="#appointment" className="text-blue-100/70 hover:text-white hover:ml-2 transition-all text-sm">Book Appointment</a></li>
              <li><a href="#testimonials" className="text-blue-100/70 hover:text-white hover:ml-2 transition-all text-sm">Patient Reviews</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="col-span-1">
            <h4 className="font-serif font-bold text-xl mb-6 text-brand-yellow">Treatments</h4>
            <ul className="space-y-3">
              {[
                { name: 'Neuromuscular Re-Education', href: '#' },
                { name: 'Manual Therapy', href: '#' },
                { name: 'Postural Instruction', href: '#' },
                { name: 'Coordination Exercises', href: '#' },
                { name: 'Myofascial Release', href: '#' }
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a href={link.href} className="text-blue-100/70 hover:text-white transition-all text-sm">{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="col-span-2 lg:col-span-1 pt-2 lg:pt-0">
            <h4 className="font-serif font-bold text-xl mb-6 text-brand-yellow">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-blue-100/70 text-sm">Board Street, near Govt.Girls Hr. Sec School,Maalaikkovil, Cumbum, Tamil Nadu 625516</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-blue-100/70 text-sm">(+91) 70108 93669</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-blue-100/70 text-sm">contact@devphysio.com</span>
              </li>
            </ul>
          </motion.div>

        </motion.div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="text-blue-100/50 text-xs">
              &copy; {new Date().getFullYear()} DEV A-Z Physio & Neuro Rehab. All Rights Reserved.
            </p>
            <span className="hidden md:inline text-blue-100/30 text-xs">|</span>
            <p className="text-white/80 text-xs font-medium tracking-wide">
              Designed by Navi Promotions
            </p>
          </div>
          <div className="flex gap-4 text-blue-100/50 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
