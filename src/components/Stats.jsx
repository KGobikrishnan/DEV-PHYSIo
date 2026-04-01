import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "99%", label: "Success Rate" },
  { value: "10,000+", label: "Happy Patients" }
];

const Stats = () => {
  return (
    <div className="bg-transparent pb-12 mt-[-2rem] md:mt-[-4rem] relative z-20">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
          className="flex flex-wrap gap-8 md:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -5 }}
              className="flex flex-col gap-1 cursor-default"
            >
              <span className="text-4xl md:text-5xl font-serif text-brand-navy font-bold track-tight">{stat.value}</span>
              <span className="text-sm md:text-base text-brand-text/70 uppercase tracking-widest font-medium mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
