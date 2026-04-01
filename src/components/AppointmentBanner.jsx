import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AppointmentBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Physiotherapy Session',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    const { name, phone, email, service, date } = formData;
    if (!name || !phone) {
      alert("Please fill out your name and phone number at minimum.");
      return;
    }

    const subject = encodeURIComponent(`New Appointment Request from ${name}`);
    const body = encodeURIComponent(`Hello Dev Physio Team,\n\nI would like to request an appointment.\n\nHere are my details:\n- Name: ${name}\n- Phone: ${phone}\n- Email: ${email || 'Not provided'}\n- Service Requested: ${service}\n- Preferred Date: ${date || 'Not specified'}\n\nPlease get back to me to confirm the timing.\n\nThank you!`);

    // Using window.location.href or window.open to trigger mailto
    window.location.href = `mailto:contact@devphysio.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="appointment" className="py-20 relative bg-brand-navy overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-brand-blue">
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          whileHover={{ y: -5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-300"
        >

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
              Book an Appointment <br /> with Our Experts Today
            </h2>
            <p className="text-blue-100/80 mb-8 max-w-md">
              Don't let pain restrict your life. Schedule your consultation with DEV A-Z Physio & Neuro Rehab and take the first step towards full recovery.
            </p>
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 rounded-full border border-brand-yellow flex items-center justify-center text-brand-yellow font-bold text-xl">
                24/7
              </div>
              <div className="font-medium">
                <p className="text-brand-yellow text-sm">Emergency Helpline</p>
                <p className="text-lg tracking-wider">+91 70108 93669</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 md:py-4 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all font-medium text-brand-navy" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+123 456 7890" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 md:py-4 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all font-medium text-brand-navy" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 md:py-4 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all font-medium text-brand-navy" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Select Service</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 md:py-4 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all text-gray-600 font-medium">
                    <option>Physiotherapy Session</option>
                    <option>Neuro Rehabilitation</option>
                    <option>Speech Therapy</option>
                    <option>Paediatric Physical Therapy</option>
                    <option>Other / Consultation</option>
                  </select>
                </div>
              </div>

              <div className="pt-1">
                <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">Preferred Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 md:py-4 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all text-gray-600 font-medium" />
              </div>

              <motion.button
                onClick={handleConfirm}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="btn-primary w-full py-4 mt-6 shadow-xl shadow-brand-blue/20 text-lg font-bold tracking-wide"
              >
                Confirm Appointment
              </motion.button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
