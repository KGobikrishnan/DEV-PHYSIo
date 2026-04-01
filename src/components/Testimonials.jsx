import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Post-Surgery Patient",
    text: "The personalized care I received at DEV Physio was outstanding. The therapists are genuine experts and my recovery speed was phenomenal.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Michael Chen",
    role: "Athlete",
    text: "I had a severe sports injury and was worried about my career. The sports rehabilitation program here got me back on the field stronger than before.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Emily Rodriguez",
    role: "Neuro Rehab Patient",
    text: "Truly compassionate care. The neuro rehabilitation exercises have given me my mobility and independence back. I cannot thank the team enough.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-white to-brand-light/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-wider text-sm uppercase mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-navy mb-6">What Our Patients <br/> Are Saying</h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl relative mt-12 pt-14 border border-gray-100/50 cursor-default transition-all duration-300 hover:border-brand-blue/20"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <img src={rev.img} alt={rev.name} className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover" />
              </div>
              
              <Quote size={40} className="text-brand-blue/10 absolute top-6 left-6" />
              
              <div className="flex justify-center gap-1 mb-6 text-brand-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-brand-text/80 text-center mb-6 text-sm leading-relaxed italic">
                "{rev.text}"
              </p>
              
              <div className="text-center border-t border-gray-100 pt-4">
                <h4 className="font-serif font-bold text-brand-navy text-lg">{rev.name}</h4>
                <span className="text-xs text-brand-text/60 uppercase tracking-widest">{rev.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
