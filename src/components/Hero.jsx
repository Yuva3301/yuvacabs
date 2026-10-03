import { useState } from 'react';
import { Phone, MessageSquare, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import hatchbackTaxiImg from '../assets/hatchback_taxi.png';
import premiumTaxiImg from '../assets/premium_taxi.png';
import suvTaxiImg from '../assets/suv_taxi.png';
import innovaTaxiImg from '../assets/innova_taxi.png';
import tempoTravellerImg from '../assets/tempo_traveller.png';

export default function Hero() {
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [direction, setDirection] = useState(1);

  const [tiltStyle, setTiltStyle] = useState({
    transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
    '--glare-x': '50%',
    '--glare-y': '50%'
  });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;
    
    const maxRotate = 10; // Max rotation angle
    const rotateX = -dy * maxRotate;
    const rotateY = dx * maxRotate;
    
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      '--glare-x': `${glareX}%`,
      '--glare-y': `${glareY}%`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
      '--glare-x': '50%',
      '--glare-y': '50%'
    });
  };

  const vehicles = {
    hatchback: { 
      name: 'Hatchback', 
      desc: 'Indica / Vista / Figo',
      nonAcMin: 150, acMin: 180,
      nonAcExtra: 9, acExtra: 10,
      minKm: 4, localLimit: 6,
      image: hatchbackTaxiImg
    },
    sedan: { 
      name: 'Sedan', 
      desc: 'Etios / Dzire / Xcent',
      nonAcMin: 180, acMin: 220,
      nonAcExtra: 10, acExtra: 12,
      minKm: 4, localLimit: 6,
      image: premiumTaxiImg
    },
    suv: { 
      name: 'SUV', 
      desc: 'Ertiga / XUV / SUV',
      nonAcMin: 220, acMin: 280,
      nonAcExtra: 26, acExtra: 32,
      minKm: 4, localLimit: 6,
      image: suvTaxiImg
    },
    innova: { 
      name: 'Innova & Crysta', 
      desc: 'Toyota Innova / Innova Crysta',
      nonAcMin: 250, acMin: 280,
      nonAcExtra: 18, acExtra: 19,
      minKm: 4, localLimit: 6,
      image: innovaTaxiImg
    },
    tempo: { 
      name: 'Tempo Traveller', 
      desc: '12+1 Seater Van',
      nonAcMin: 400, acMin: 500,
      nonAcExtra: 38, acExtra: 45,
      minKm: 10, localLimit: 10,
      image: tempoTravellerImg
    }
  };

  const vehicleKeys = ['hatchback', 'sedan', 'suv', 'innova', 'tempo'];

  const selectVehicleWithDirection = (key) => {
    const newIdx = vehicleKeys.indexOf(key);
    const oldIdx = vehicleKeys.indexOf(selectedVehicle);
    setDirection(newIdx >= oldIdx ? 1 : -1);
    setSelectedVehicle(key);
  };

  const handlePrev = () => {
    const currentIndex = vehicleKeys.indexOf(selectedVehicle);
    const prevIndex = (currentIndex - 1 + vehicleKeys.length) % vehicleKeys.length;
    setDirection(-1);
    setSelectedVehicle(vehicleKeys[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = vehicleKeys.indexOf(selectedVehicle);
    const nextIndex = (currentIndex + 1) % vehicleKeys.length;
    setDirection(1);
    setSelectedVehicle(vehicleKeys[nextIndex]);
  };

  const renderCarCarousel = () => {
    return (
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
        className="relative w-full h-[260px] sm:h-[320px] flex items-center justify-center overflow-hidden p-4 bg-white rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] tilted-perspective tilted-card cursor-default"
      >
        {/* Ambient Radial glow behind car */}
        <div className="absolute inset-0 w-80 h-40 bg-gradient-to-r from-brand-yellow to-brand-gold blur-[60px] opacity-15 rounded-full mx-auto pointer-events-none" />
        
        <button 
          onClick={handlePrev}
          className="absolute left-3 z-30 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-all cursor-pointer border border-black/5"
          title="Previous Vehicle"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-3 z-30 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-all cursor-pointer border border-black/5"
          title="Next Vehicle"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute top-4 left-4 z-20 flex flex-col text-left">
          <span className="text-[10px] text-black dark:text-black font-extrabold uppercase tracking-wider">Fleet Showcase</span>
          <span className="text-lg font-black text-black dark:text-black leading-tight">{vehicles[selectedVehicle].name}</span>
          <span className="text-[10px] text-slate-700 dark:text-slate-700 font-bold">{vehicles[selectedVehicle].desc}</span>
        </div>

        <div className="w-full h-full flex items-center justify-center pointer-events-none">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={selectedVehicle}
              custom={direction}
              variants={{
                enter: (dir) => ({
                  x: dir > 0 ? 150 : -150,
                  opacity: 0,
                  scale: 0.95
                }),
                center: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4, ease: 'easeOut' }
                },
                exit: (dir) => ({
                  x: dir < 0 ? 150 : -150,
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.3, ease: 'easeIn' }
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              src={vehicles[selectedVehicle].image}
              alt={`${vehicles[selectedVehicle].name} taxi cab in Hosur - YUVA CABS`}
              className="w-full h-full object-contain select-none p-2 mt-6"
            />
          </AnimatePresence>
        </div>

        {/* Overlay Phone Badge */}
        <div className="absolute bottom-3 right-3 z-30 flex items-center space-x-1.5 px-3 py-1.5 bg-[#00bfa5] text-white rounded-full font-black text-[10px] shadow-[0_4px_12px_rgba(0,191,165,0.35)] pointer-events-auto">
          <Phone className="w-3 h-3 fill-white text-white flex-shrink-0" />
          <a href="tel:+919944271322" className="hover:underline">+91 99442 71322</a>
        </div>

        {/* Indicator dots */}
        <div className="absolute bottom-3 flex space-x-1.5 z-20">
          {vehicleKeys.map((key) => (
            <button
              key={key}
              onClick={() => selectVehicleWithDirection(key)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedVehicle === key ? 'w-5 bg-slate-800 dark:bg-slate-800' : 'w-1.5 bg-slate-300 dark:bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="home" className="relative min-h-screen bg-brand-black flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-mesh">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-purple/20 glow-orb animate-orb-glow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-brand-blue/10 glow-orb animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-gold/10 glow-orb animate-orb-glow" />

      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Cinematic Copy and Badge buttons */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Animated Gold Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="self-start inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
            <span>YUVA CABS Hosur</span>
          </motion.div>

          {/* Heading with increased font size */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-black tracking-tight text-brand-white leading-[1.05] text-left"
          >
            Best <span className="text-stroke-yellow text-transparent font-black">Taxi & Cab</span> <br />
            <span className="text-stroke-yellow text-transparent font-black">Service in Hosur</span>
          </motion.h1>

          {/* Subtitle with increased font size */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-brand-silver/90 max-w-xl font-semibold leading-relaxed text-left"
          >
            24/7 Local & Outstation Cab Booking. <span className="text-brand-yellow font-extrabold">Outstation trips @ ₹9 to ₹12/km</span>. Verified drivers, clean fleet, and transparent pricing.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {/* Book Now */}
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-extrabold text-base tracking-tight shadow-[0_0_30px_rgba(255,212,59,0.35)] hover:shadow-[0_0_45px_rgba(255,212,59,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Cab Now</span>
            </a>

            {/* Call Hotlines */}
            <a
              href="tel:+919944271322"
              className="flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 dark:bg-brand-charcoal dark:hover:bg-brand-charcoal/80 dark:text-brand-white dark:border-white/10 dark:hover:border-brand-yellow/30 transition-all duration-300 font-bold"
            >
              <Phone className="w-5 h-5 text-brand-yellow" />
              <span>Call: +91 99442 71322</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919944271322?text=Hi! I want to book a taxi in Hosur."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base tracking-tight shadow-[0_4px_14px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_20px_rgba(16,185,129,0.45)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/yuva_call_taxi_70?stkn=djVpOHU4aGhjcG1j"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white font-bold text-base tracking-tight shadow-[0_4px_14px_rgba(219,39,119,0.3)] hover:shadow-[0_4px_20px_rgba(219,39,119,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <FaInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </motion.div>

          {/* Quick Trust factors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center space-x-6 text-brand-silver/60 text-sm pt-4"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
              <span>Top Rated Drivers</span>
            </div>
          </motion.div>

        </div>

        {/* Right Side: 3D Car Graphic Showcase */}
        <div className="lg:col-span-5 flex flex-col space-y-6 relative">
          {renderCarCarousel()}
        </div>

      </div>

    </section>
  );
}
