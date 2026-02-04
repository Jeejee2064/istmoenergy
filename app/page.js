'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Couleurs : #0b879bfe (Navy) et #064c57ff (Cyan)

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction de scroll fluide pour la navigation
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Hauteur de la nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#064c57ff] selection:text-white font-sans antialiased">
      
      {/* NAVIGATION REEELLEMENT FONCTIONNELLE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/logo.png" alt="Istmo Energy" className="h-9 w-auto cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} />
          
          {/* Menu Desktop */}
          <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.3em] font-bold text-slate-500">
            <button onClick={() => scrollTo('who')} className="hover:text-[#0b879bfe] transition-colors">Who we are</button>
            <button onClick={() => scrollTo('what')} className="hover:text-[#0b879bfe] transition-colors">What we do</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#0b879bfe] transition-colors">Contact</button>
          </div>

          {/* Menu Mobile Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 bg-slate-900 mb-1 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-slate-900 mb-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-slate-900 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Overlay Mobile */}
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-full left-0 w-full bg-white border-b border-slate-100 flex flex-col p-6 gap-4 md:hidden">
            <button onClick={() => scrollTo('who')} className="text-left font-bold uppercase tracking-widest text-sm">Who we are</button>
            <button onClick={() => scrollTo('what')} className="text-left font-bold uppercase tracking-widest text-sm">What we do</button>
            <button onClick={() => scrollTo('contact')} className="text-left font-bold uppercase tracking-widest text-sm">Contact</button>
          </motion.div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Wholesale <br />
              <span className="text-[#0b879bfe]">Electricity</span> <br />
              Markets
            </h1>
            <div className="w-20 h-1 bg-[#064c57ff] mb-8"></div>
            <p className="text-xl text-slate-500 max-w-md font-light leading-relaxed">
              Istmo Energy LLC is an independent energy trading and analytics firm focused on short term North American power systems.
            </p>
          </motion.div>
          <div className="relative">
            <img src="/img1.jpg" alt="Analytics" className="w-full h-[400px] md:h-[550px] object-cover shadow-2xl rounded-sm" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[#064c57ff] font-bold uppercase tracking-widest text-xs mb-4">Who we are</p>
            <h2 className="text-3xl font-bold">Data-Driven <br/>Activity.</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl font-light text-slate-700 leading-snug">
              Our activity is driven by <span className="font-semibold text-[#0b879bfe]">proprietary tools</span> and market expertise. We focus on short term North American wholesale electricity markets with precision.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-12">
              <img src="/img2.jpg" alt="Trading" className="h-48 w-full object-cover rounded-sm grayscale" />
              <img src="/img3.jpg" alt="Analytics" className="h-48 w-full object-cover rounded-sm grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img src="/img4.jpg" alt="System Reliability" className="w-full h-[500px] object-cover rounded-sm shadow-lg" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[#064c57ff] font-bold uppercase tracking-widest text-xs mb-4">What we do</p>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">System Reliability</h2>
            <p className="text-lg text-slate-600 font-light mb-8 leading-relaxed">
              We trade short-term power markets across North America in both physical and financial markets using internally developed data systems and trading models.
            </p>
            <div className="bg-white border-l-4 border-[#0b879bfe] p-6 shadow-sm">
              <p className="italic text-slate-800">
                "We help balance supply and demand and contribute to liquidity, price discovery, and system reliability across interconnected power systems."
              </p>
            </div>
            <img src="/img5.jpg" alt="Market Flow" className="h-32 w-full object-cover mt-8 opacity-50" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-8">Contact</h2>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-widest">Inquiries</span>
              <a href="mailto:conatct@istmoenergy.net" className="text-3xl font-light hover:text-[#0b879bfe] transition-colors">
                contact@istmoenergy.net
              </a>
            </div>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-widest block mb-4">Location</span>
            <p className="text-xl font-light text-slate-600">
              8 The Green STE B<br />
              Dover, DE 19901
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <img src="/logo.png" alt="Logo" className="h-6 opacity-40 grayscale" />
        <p className="text-[10px] uppercase tracking-[0.6em] text-slate-300 font-bold">
          Istmo Energy LLC &copy; 2026
        </p>
      </footer>
    </div>
  );
}