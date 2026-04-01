import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const values = [
  {
    num: "01",
    title: "Personalized Treatment Plans",
    desc: "Every patient gets a bespoke recovery strategy tailored strictly to their unique needs and lifestyle."
  },
  {
    num: "02",
    title: "Experienced Professionals",
    desc: "Our therapists bring years of focused clinical experience in advanced physiotherapy and neuro rehab."
  },
  {
    num: "03",
    title: "Comprehensive Services",
    desc: "From advanced modalities to specialized therapeutic exercises, we offer complete A-Z care."
  }
];

const CoreValues = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Values List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-3 block">Our Value</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-navy leading-tight mb-10">
              Guiding Principles of <span className="text-brand-blue italic">Quality Care</span>
            </h2>

            <div className="flex flex-col gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex gap-6 group cursor-default bg-transparent p-4 -ml-4 rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  <span className="text-5xl md:text-6xl font-serif font-bold text-gray-200 group-hover:text-brand-yellow group-hover:drop-shadow-md transition-all duration-300 mt-0">
                    {v.num}
                  </span>
                  <div className="mt-1">
                    <h4 className="text-xl font-serif font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">{v.title}</h4>
                    <p className="text-brand-text/70 leading-relaxed text-sm md:text-base">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <ul className="grid grid-cols-2 gap-4">
                {['Compassionate', 'Expert Driven', 'Results Focused', 'Patient First'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-medium text-brand-navy">
                    <span className="bg-brand-blue/10 p-1.5 rounded-full text-brand-blue"><Check size={14} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Images Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] mt-12">
                <img
                  src="https://theprivatetherapyclinic.co.uk/wp-content/uploads/2019/12/Cognitive-Dev-Thumbnail-template.jpg"
                  alt="Therapy session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] mb-12">
                <img
                  src="https://shobhashyam.com/wp-content/uploads/2024/04/overview-growth-developement.webp"
                  alt="Therapy session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Overlay decoration badge */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 md:p-6 shadow-2xl flex items-center justify-center cursor-default z-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-brand-yellow border-dashed flex items-center justify-center"
              >
                <motion.span
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="font-logo text-brand-navy text-xl md:text-2xl font-bold italic"
                >
                  DEV
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
