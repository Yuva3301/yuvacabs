import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  // Only show desktop floating buttons after scrolling past the fold
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Pulsing WhatsApp Orb (Desktop only, visible after scrolling past the fold) */}
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Desktop Quick Call Floating Pill */}
            <motion.a
              key="call-float-desktop"
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -20 }}
              transition={{ duration: 0.3 }}
              href="tel:+919944271322"
              title="Call Yuva Call Taxi Hosur"
              className="hidden md:flex fixed bottom-8 left-8 z-40 items-center space-x-2.5 px-5 py-3.5 bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black rounded-full font-black text-sm shadow-[0_0_25px_rgba(255,212,59,0.4)] hover:shadow-[0_0_35px_rgba(255,212,59,0.7)] hover:scale-105 transition-all cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-brand-black flex items-center justify-center text-brand-yellow">
                <Phone className="w-4 h-4 fill-brand-yellow" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] uppercase font-extrabold tracking-wider opacity-80">24/7 Call Taxi Hosur</span>
                <span className="text-sm font-black">+91 99442 71322</span>
              </div>
            </motion.a>

            {/* Desktop Instagram Orb */}
            <motion.a
              key="instagram-float-desktop"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              href="https://www.instagram.com/yuva_call_taxi_70?stkn=djVpOHU4aGhjcG1j"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow us on Instagram"
              className="hidden md:flex fixed bottom-24 right-8 z-40 w-14 h-14 bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 rounded-full items-center justify-center text-white shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:shadow-[0_0_30px_rgba(219,39,119,0.6)] hover:scale-110 transition-all cursor-pointer group"
            >
              <FaInstagram className="w-6 h-6 group-hover:scale-115 transition-transform" />
            </motion.a>

            {/* Desktop WhatsApp Orb */}
            <motion.a
              key="whatsapp-float-desktop"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              href="https://wa.me/919944271322?text=Hi! I need to book a taxi in Hosur."
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="hidden md:flex fixed bottom-8 right-8 z-40 w-14 h-14 bg-emerald-500 rounded-full items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all cursor-pointer group"
            >
              {/* Pulsing ring animations behind the orb */}
              <div className="absolute inset-0 bg-emerald-500 rounded-full scale-110 opacity-30 animate-ping pointer-events-none" />
              <MessageSquare className="w-6 h-6 group-hover:scale-115 transition-transform" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* 2. Permanent Sticky Bottom Action Ribbon (Mobile only, visible immediately) */}
      <div
        className="fixed bottom-0 left-0 w-full z-45 bg-white/95 dark:bg-brand-black/90 backdrop-blur-md border-t border-slate-200/60 dark:border-white/10 py-2.5 px-3 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.06)]"
      >
        <div className="grid grid-cols-3 gap-2 w-full max-w-lg mx-auto">
          {/* Call Hotline */}
          <a
            href="tel:+919944271322"
            className="flex items-center justify-center space-x-1.5 py-3 rounded-full bg-brand-yellow text-brand-black font-extrabold text-xs tracking-tight shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 fill-brand-black text-brand-black" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919944271322?text=Hi! I want to book a taxi in Hosur."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1.5 py-3 rounded-full bg-[#25D366] text-white font-extrabold text-xs tracking-tight shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
            <span>WhatsApp</span>
          </a>

          {/* Book Online */}
          <a
            href="#contact"
            className="flex items-center justify-center space-x-1.5 py-3 rounded-full bg-brand-black dark:bg-white/10 text-white font-extrabold text-xs tracking-tight shadow-sm border border-white/10 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Book Cab</span>
          </a>
        </div>
      </div>
    </>
  );
}
