import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar } from 'lucide-react';

const InfoCards = () => {
  return (
    <section className="relative z-30 -mt-8 md:-mt-12 mb-16 md:mb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 relative overflow-hidden"
        >
          {/* Subtle gradient bg */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lightblue/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-start gap-5 flex-1 w-full lg:w-auto p-2"
          >
            <div className="bg-brand-lightblue p-4 rounded-2xl text-brand-blue shadow-sm">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-brand-navy mb-1">Opening Hours</h3>
              <p className="text-sm text-brand-text/70 leading-relaxed">Mon to Sat: 1:00PM - 9:00PM</p>
              <p className="text-sm text-brand-text/70 leading-relaxed">Sunday: 11:00AM - 3:00PM</p>
            </div>
          </motion.div>

          <div className="hidden lg:block w-px h-20 bg-gray-100"></div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-start gap-5 flex-1 w-full lg:w-auto p-2"
          >
            <div className="bg-brand-lightblue p-4 rounded-2xl text-brand-blue shadow-sm">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-brand-navy mb-1">Our Location</h3>
              <p className="text-sm text-brand-text/70 leading-relaxed">Board Street, near Govt.Girls Hr. Sec School</p>
              <p className="text-sm text-brand-text/70 leading-relaxed">Maalaikkovil, Cumbum, Tamil Nadu 625516</p>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto"
          >
            <a href="#appointment" className="btn-primary w-full lg:w-auto py-4 px-8 shadow-brand-blue/30 shadow-xl flex items-center justify-center gap-2 text-base">
              <Calendar size={20} />
              Book Session
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoCards;
