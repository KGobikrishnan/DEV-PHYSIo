import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-light/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-3 block">Find Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-4">Visit Our Clinic</h2>
          <p className="text-brand-text/80 leading-relaxed">
            Conveniently located to serve your physiotherapy and neuro rehabilitation needs. Drop by for a consultation.
          </p>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white z-10">
          <iframe 
            title="Dev Physio Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.809054366606!2d77.472111!3d10.016393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b073f1d8dd1e667%3A0xb35a9686ae2cfd!2sTheni!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            className="absolute top-0 left-0 w-full h-full border-0 grayscale-[15%] contrast-110"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Click overlay */}
          <a 
            href="https://maps.app.goo.gl/Ka5sWNs2FV7idQu96"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 block bg-transparent cursor-pointer group"
            aria-label="Open Dev Physio on Google Maps"
            title="Open Dev Physio on Google Maps"
          >
            <span className="sr-only">Open Google Maps</span>
            <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-300"></div>
          </a>
          
          {/* Floating Info Card Overlay (Optional, for elegance) */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 bg-white/95 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-xl border border-white/50 max-w-[280px] md:max-w-sm pointer-events-none"
          >
            <h4 className="font-serif font-bold text-lg md:text-xl text-brand-navy mb-2">Dev Physio & Rehab</h4>
            <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
              Board Street, near Govt.Girls Hr. Sec School, Maalaikkovil, Cumbum, Tamil Nadu 625516
            </p>
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-[10px] md:text-xs font-bold uppercase tracking-wider py-1.5 px-4 md:py-2 md:px-5 rounded-full">
              Get Directions
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
