'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Fade up stagger animation
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#064c57ff] selection:text-white font-sans antialiased">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img
            src="/logo.png"
            alt="Istmo Energy"
            className="h-9 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.3em] font-bold text-slate-500">
            <button onClick={() => scrollTo('who')} className="hover:text-[#0b879bfe] transition-colors">Who we are</button>
            <button onClick={() => scrollTo('what')} className="hover:text-[#0b879bfe] transition-colors">What we do</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#0b879bfe] transition-colors">Contact</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 bg-slate-900 mb-1 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-slate-900 mb-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-slate-900 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 flex flex-col p-6 gap-4 md:hidden"
          >
            <button onClick={() => scrollTo('who')} className="text-left font-bold uppercase tracking-widest text-sm">Who we are</button>
            <button onClick={() => scrollTo('what')} className="text-left font-bold uppercase tracking-widest text-sm">What we do</button>
            <button onClick={() => scrollTo('contact')} className="text-left font-bold uppercase tracking-widest text-sm">Contact</button>
          </motion.div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={itemVariant}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6"
            >
              Trading North American <br />
              <span className="text-[#0b879bfe]">
                Wholesale Electricity Markets.
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariant}
              className="w-20 h-1 bg-[#064c57ff] mb-8"
            />
          </motion.div>

          <motion.div
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <img src="/img8.jpeg" alt="Analytics" className="w-full h-[400px] md:h-[550px] object-cover shadow-2xl rounded-sm" />
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who" className="py-24 px-6 bg-slate-50">
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariant} className="md:col-span-6">
            <img src="/img3.jpg" alt="Trading" className="w-full h-[500px] object-cover rounded-sm shadow-lg" />
          </motion.div>

          <motion.div variants={itemVariant} className="md:col-span-6">
            <p className="text-[#064c57ff] font-bold uppercase tracking-widest text-xs mb-6">
              Who we are
            </p>

            <p className="text-2xl font-light text-slate-700 leading-relaxed mb-2">
              Istmo Energy LLC is an{" "}
              <span className="font-semibold text-[#0b879bfe]">
                independent energy trading and analytics firm
              </span>{" "}
              focused on short term North American power systems.
            </p>

            <p className="text-2xl font-light text-slate-700 leading-relaxed">
              Our activity is driven by{" "}
              <span className="font-semibold text-[#0b879bfe]">
                proprietary tools
              </span>{" "}
              and market expertise.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section id="what" className="py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariant} className="md:col-span-6 md:order-1 order-2">
            <p className="text-[#064c57ff] font-bold uppercase tracking-widest text-xs mb-6">
              What we do
            </p>

            <p className="text-2xl font-light text-slate-700 leading-relaxed mb-2">
              We trade short-term power markets across North America in both physical and financial markets using{" "}
              <span className="font-semibold text-[#0b879bfe]">
                internally developed data systems and trading models.
              </span>
            </p>

            <p className="text-2xl font-light text-slate-700 leading-relaxed">
              We help balance supply and demand and contribute to liquidity, price discovery, and system reliability across interconnected power systems.
            </p>
          </motion.div>

          <motion.div variants={itemVariant} className="md:col-span-6 md:order-2 order-1">
            <img src="/img1.jpg" alt="System Reliability" className="w-full h-[500px] object-cover rounded-sm shadow-lg" />
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-slate-100">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariant} className="max-w-xl">
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-8">Contact</h2>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-widest">Inquiries</span>
              <a href="mailto:contact@istmoenergy.net" className="text-3xl font-light hover:text-[#0b879bfe] transition-colors">
                contact@istmoenergy.net
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariant} className="text-left md:text-right">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-widest block mb-4">Location</span>
            <p className="text-xl font-light text-slate-600">
              8 The Green STE B<br />
              Dover, DE 19901
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <img src="/logo.png" alt="Logo" className="h-6 opacity-40 grayscale" />

        <div className="flex items-center gap-6">
          <a
            href="/privacypolicy"
            className="text-[10px] uppercase tracking-[0.6em] text-slate-400 hover:text-[#0b879bfe] transition-colors font-bold"
          >
            Privacy Policy
          </a>

          <p className="text-[10px] uppercase tracking-[0.6em] text-slate-300 font-bold">
            Istmo Energy LLC © 2026
          </p>
        </div>
      </footer>

    </div>
  );
}
