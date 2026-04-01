import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity, Zap, Brain, Dumbbell,
  ThermometerSun, Waves, Droplets, ArrowUpDown,
  Mic, Leaf, UserPlus, Baby, RefreshCw,
  BrainCircuit, Footprints, Hand, Scale,
  Layers, UserCheck, RotateCcw, Scissors,
  PersonStanding, Wind, Bike
} from 'lucide-react';

const modalities = [
  { name: "Hot/Cold packs", icon: ThermometerSun },
  { name: "Ultrasound", icon: Waves },
  { name: "Electrical Stimulation", icon: Zap },
  { name: "Nerve / Muscle Stimulation", icon: Activity },
  { name: "Wax Bath", icon: Droplets },
  { name: "Traction (Cervical, Lumbar)", icon: ArrowUpDown },
  { name: "IFT, TENS, SWD", icon: Zap }
];

const exercises = [
  { name: "Range of Motion", icon: RefreshCw },
  { name: "Strengthening & Stretching", icon: Dumbbell },
  { name: "Neuromuscular Re-Education", icon: BrainCircuit },
  { name: "Gait Training", icon: Footprints },
  { name: "Manual Therapy", icon: Hand },
  { name: "Coordination / Balance", icon: Scale },
  { name: "Myofascial Release", icon: Layers },
  { name: "Bobath Technique", icon: UserCheck },
  { name: "Motor relearning program", icon: RotateCcw },
  { name: "K-Taping", icon: Scissors },
  { name: "Postural & Ergonomics", icon: PersonStanding },
  { name: "Respiratory & Pre/Post Natal", icon: Wind },
  { name: "Sports Injuries & Home Exercises", icon: Bike },
  { name: "Pediatric Development", icon: Baby },
  { name: "Speech Therapy", icon: Mic },
  { name: "Memory Development", icon: Brain },
  { name: "Yoga Therapy", icon: Leaf },
  { name: "Geriatric Care", icon: UserPlus }
];

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-3 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-6">Move Freely, Live Fully with Our Care</h2>
          <p className="text-brand-text/80 leading-relaxed">
            We provide comprehensive Physiotherapy & Neuro Rehabilitation treatments to ensure a fast, safe, and effective recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* Modalities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.08 } }
            }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-8 border-b pb-6">
              <div className="bg-brand-blue/10 p-4 rounded-full text-brand-blue">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-navy">Advanced Modalities</h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 flex-grow content-start">
              {modalities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -2, backgroundColor: "#E6F0FA", borderColor: "rgba(0,102,204,0.3)" }}
                    className="flex items-start gap-4 bg-gray-50 border border-gray-100/80 rounded-2xl p-4 md:p-5 hover:shadow-xl transition-all duration-300 group cursor-default"
                  >
                    <Icon size={20} className="text-brand-blue mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-brand-navy text-[15px] font-semibold">{item.name}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Therapeutic Exercises */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, staggerChildren: 0.08 } }
            }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-center gap-4 mb-8 border-b pb-6">
              <div className="bg-brand-yellow/20 p-4 rounded-full text-brand-yellow">
                <Dumbbell size={32} className="text-yellow-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-navy">Therapeutic Exercises</h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 flex-grow content-start">
              {exercises.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -2, backgroundColor: "#FFF9E6", borderColor: "rgba(255,193,7,0.4)" }}
                    className="flex items-start gap-4 bg-gray-50 border border-gray-100/80 rounded-2xl p-4 md:p-5 hover:shadow-xl transition-all duration-300 group cursor-default"
                  >
                    <Icon size={20} className="text-brand-yellow mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-brand-navy text-[15px] font-semibold">{item.name}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

        </div>

        <div className="mt-16 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#appointment"
            className="btn-secondary shadow-lg shadow-gray-200"
          >
            Explore All Specialized Treatments
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;
