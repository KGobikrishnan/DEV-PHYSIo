import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Images Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center w-full"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full max-w-sm md:max-w-md mx-auto shadow-2xl">
              <img
                src="https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/kalyanhospital.com/wp-content/uploads/2025/04/Physiotherapy.png"
                alt="Doctor observing patient's spine"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 glass p-6 rounded-3xl flex items-center gap-4 cursor-default z-10"
            >
              <div className="bg-brand-blue/10 p-4 rounded-full text-brand-blue">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <span className="block text-4xl font-serif font-bold text-brand-navy mb-1">15+</span>
                <span className="text-sm font-bold text-brand-text/80 uppercase tracking-wider">Years of <br />Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-3 block">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy leading-tight mb-6">
              Dedicated to Your Health, <br />
              Committed to Your Recovery
            </h2>
            <p className="text-brand-text/80 mb-8 leading-relaxed">
              Dev Physio is more than just a clinic—it's a place where your health and comfort are prioritized.
              Our expert physio and neuro therapists are dedicated to providing customized treatment plans
              tailored to your individual needs and recovery goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <motion.div
                whileHover={{ y: -5, backgroundColor: "#E6F0FA" }}
                transition={{ duration: 0.3 }}
                className="bg-brand-lightblue/50 p-6 rounded-3xl border border-transparent hover:border-brand-blue/20 transition-colors"
              >
                <h4 className="font-serif font-bold text-brand-navy text-xl mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue text-sm">01</span>
                  Our Mission
                </h4>
                <p className="text-sm text-brand-text/80 leading-relaxed font-medium">To Enhance Lives through Compassionate, Comprehensive Care.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, backgroundColor: "#FFF9E6" }}
                transition={{ duration: 0.3 }}
                className="bg-brand-yellow/10 p-6 rounded-3xl border border-transparent hover:border-brand-yellow/30 transition-colors"
              >
                <h4 className="font-serif font-bold text-brand-navy text-xl mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow text-sm">02</span>
                  Our Vision
                </h4>
                <p className="text-sm text-brand-text/80 leading-relaxed font-medium">To be a Leading Provider of Innovative and Patient-Centered Therapy.</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-brand-navy text-white px-6 py-4 rounded-full shadow-lg border border-white/10"
              >
                <div className="bg-brand-yellow/20 p-2 rounded-full">
                  <Phone size={20} className="text-brand-yellow" />
                </div>
                <div>
                  <span className="block text-[10px] text-brand-yellow/80 uppercase tracking-widest font-bold mb-0.5">Call Us Anytime</span>
                  <span className="font-bold text-base tracking-wide">+91 70108 93669</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
