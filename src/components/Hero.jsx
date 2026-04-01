import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-premium pt-12 pb-20 md:pt-28 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Abstract Background Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[50%] h-full opacity-[0.05] pointer-events-none"
      >
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-brand-blue fill-current">
          <path d="M42.8,-74.6C54.4,-67.2,61.9,-51.9,71.2,-37.4C80.5,-22.8,91.6,-9,89.5,3.6C87.4,16.2,72,27.7,60.1,38.3C48.1,48.9,39.6,58.7,28.6,65.6C17.5,72.6,3.8,76.6,-8.7,75.1C-21.2,73.5,-32.5,66.4,-44.6,58C-56.8,49.5,-69.8,39.7,-76.3,26.7C-82.7,13.7,-82.6,-2.4,-77,-16.4C-71.4,-30.5,-60.4,-42.6,-48,-49.9C-35.6,-57.2,-21.8,-59.8,-5.5,-50.2C10.8,-40.5,21.6,-18.5,31.2,-82C40.8,-145.5,31.2,-81.9,42.8,-74.6Z" transform="translate(200 200) scale(1.1)" />
        </svg>
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="max-w-xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-navy leading-[1.15] mb-6"
            >
              Expert Care for Pain Relief and <br className="hidden md:block" />
              <span className="text-brand-blue italic relative inline-block mt-2">
                Enhanced Function
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-1 left-0 h-1 bg-brand-yellow/50 rounded-full"
                ></motion.span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg font-medium"
            >
              At Dev Physio, we offer personalized treatment plans that focus on your unique health goals.
              Our team of experienced professionals is dedicated to helping you achieve optimum wellness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 102, 204, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#appointment"
                className="btn-primary"
              >
                Free Consultation
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="col-span-2 rounded-3xl overflow-hidden shadow-2xl h-56 md:h-80 relative group"
              >
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img
                  src="https://rehabindia.org/blog/wp-content/uploads/2022/09/physiotherapy-centres-in-kolkata_Medical-Rehabilitation-Center.jpg"
                  alt="Physiotherapy treatment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="rounded-3xl overflow-hidden shadow-xl h-36 md:h-52 relative group"
              >
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img
                  src="https://www.cdi.org.in/images/speciality/mobile/062f2352-7deb-4e01-bd28-0cf9adc1309f_1744351357.jpg"
                  alt="Doctor with patient"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="rounded-3xl overflow-hidden shadow-xl h-36 md:h-52 relative group"
              >
                <div className="absolute inset-0 bg-brand-yellow/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img
                  src="https://cdn.prod.website-files.com/6565fd162893e0f79b483b1c/67a5f1ec0e1ff034bf92c926_Enfield-Physiotherapy.jpg"
                  alt="Rehabilitation equipment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
