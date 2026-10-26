import { useState } from 'react';
import { Phone, MessageSquare, Calendar, ChevronRight, CheckCircle2, MapPin, Clock, Sparkles } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa6';
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
      desc: 'Indica / Vista / Tiago / Figo',
      nonAcMin: 150, acMin: 180,
      nonAcExtra: 10, acExtra: 11,
      minKm: 4, localLimit: 6,
      image: hatchbackTaxiImg
    },
    sedan: { 
      name: 'Sedan', 
      desc: 'Etios / Dzire / Xcent',
      nonAcMin: 180, acMin: 220,
      nonAcExtra: 11, acExtra: 12,
      minKm: 4, localLimit: 6,
      image: premiumTaxiImg
    },
    suv: { 
      name: 'SUV', 
      desc: 'Ertiga / XUV / SUV',
      nonAcMin: 220, acMin: 280,
      nonAcExtra: 15, acExtra: 16,
      minKm: 4, localLimit: 6,
      image: suvTaxiImg
    },
    innova: { 
      name: 'Innova & Crysta', 
      desc: 'Toyota Innova / Innova Crysta',
      nonAcMin: 250, acMin: 300,
      nonAcExtra: 16, acExtra: 17,
      minKm: 4, localLimit: 6,
      image: innovaTaxiImg
    },
    tempo: { 
      name: 'Tempo Traveller', 
      desc: '12+1 Seater Van',
      nonAcMin: 400, acMin: 500,
      nonAcExtra: 38, acExtra: 38,
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
    <section id="home" className="relative min-h-screen bg-brand-black flex items-center justify-center pt-32 sm:pt-36 pb-16 overflow-hidden bg-gradient-mesh">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-purple/20 glow-orb animate-orb-glow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-brand-blue/10 glow-orb animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-gold/10 glow-orb animate-orb-glow" />

      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Cinematic Copy and Badge buttons */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* 3 Core Services Badge Pill with Contact Number */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="self-start inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-extrabold uppercase tracking-wider text-[11px]">
              <span className="text-brand-yellow font-black">Outstation</span> • <span className="text-brand-yellow font-black">Airport</span> • <span className="text-brand-yellow font-black">Local</span>
            </span>
            <span className="text-brand-silver/40 hidden sm:inline">•</span>
            <a href="tel:+919944271322" className="flex items-center space-x-1 text-brand-yellow hover:underline font-black">
              <Phone className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
              <span>+91 99442 71322</span>
            </a>
          </motion.div>

          {/* Search Optimized High-Conversion Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[4rem] font-black tracking-tight text-brand-white leading-[1.1] text-left"
          >
            <span className="text-brand-yellow">Yuva</span> Taxi Service Hosur <br />
            <a
              href="tel:+919944271322"
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-amber-300 to-brand-gold text-glow-yellow hover:opacity-90 inline-block mt-1"
            >
              Call Now +919944271322
            </a>
          </motion.h1>

          {/* 3 Separate Headlines Grid - Outstation, Airport, Local with Call +919944271322 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-1"
          >
            {/* Separate Headline 1: Outstation Taxi Hosur */}
            <a
              href="tel:+919944271322"
              className="group p-3.5 rounded-2xl bg-white/[0.04] hover:bg-brand-yellow/15 border border-brand-yellow/30 hover:border-brand-yellow transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-brand-yellow text-brand-black uppercase tracking-wider">
                  Outstation
                </span>
                <span className="text-[11px] text-emerald-400 font-extrabold">₹9/km</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white group-hover:text-brand-yellow transition-colors leading-tight mt-1">
                Outstation Taxi Hosur
              </h2>
              <div className="flex items-center space-x-1.5 mt-2.5 text-brand-yellow font-black text-xs sm:text-sm">
                <Phone className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow animate-bounce" />
                <span>Call +919944271322</span>
              </div>
            </a>

            {/* Separate Headline 2: Airport Taxi Hosur */}
            <a
              href="tel:+919944271322"
              className="group p-3.5 rounded-2xl bg-white/[0.04] hover:bg-blue-500/15 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-500 text-white uppercase tracking-wider">
                  Airport
                </span>
                <span className="text-[11px] text-emerald-400 font-extrabold">Fixed ₹2,200</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white group-hover:text-blue-300 transition-colors leading-tight mt-1">
                Airport Taxi Hosur
              </h2>
              <div className="flex items-center space-x-1.5 mt-2.5 text-blue-400 font-black text-xs sm:text-sm">
                <Phone className="w-3.5 h-3.5 fill-blue-400 text-blue-400 animate-bounce" />
                <span>Call +919944271322</span>
              </div>
            </a>

            {/* Separate Headline 3: Local Taxi Hosur */}
            <a
              href="tel:+919944271322"
              className="group p-3.5 rounded-2xl bg-white/[0.04] hover:bg-emerald-500/15 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500 text-white uppercase tracking-wider">
                  Local Cab
                </span>
                <span className="text-[11px] text-emerald-400 font-extrabold">5–10 Min</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white group-hover:text-emerald-300 transition-colors leading-tight mt-1">
                Local Taxi Hosur
              </h2>
              <div className="flex items-center space-x-1.5 mt-2.5 text-emerald-400 font-black text-xs sm:text-sm">
                <Phone className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400 animate-bounce" />
                <span>Call +919944271322</span>
              </div>
            </a>
          </motion.div>

          {/* Subtitle with High-Ranking Locations and Pricing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-brand-silver/95 max-w-xl font-medium leading-relaxed text-left"
          >
            Need a cab right now? Guaranteed 5–10 min arrival for <strong>Outstation</strong>, <strong>Local</strong>, and <strong>Airport</strong> trips at <strong className="text-white">Hosur Railway Station</strong>, <strong className="text-white">Hosur Bus Stand</strong>, <strong className="text-white">SIPCOT 1 &amp; 2</strong>, Mathigiri &amp; all local areas. Local rides from <span className="text-brand-yellow font-extrabold">₹150</span>, outstation @ <span className="text-brand-yellow font-extrabold">₹9/km</span>.
          </motion.p>

          {/* High-Conversion Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            {/* Primary Instant Call CTA */}
            <a
              href="tel:9944271322"
              className="flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-gold text-brand-black font-black text-base sm:text-lg tracking-tight shadow-[0_0_35px_rgba(255,212,59,0.5)] hover:shadow-[0_0_55px_rgba(255,212,59,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-5 h-5 fill-brand-black text-brand-black animate-bounce" />
              <span>Call Taxi: 9944271322</span>
            </a>

            {/* Direct WhatsApp Instant Booking */}
            <a
              href="https://wa.me/919944271322?text=Hello%20YUVA%20CABS,%20I%20need%20a%20taxi%20pickup%20in%20Hosur%20right%20now."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm sm:text-base tracking-tight shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>WhatsApp Booking</span>
            </a>

            {/* Online Schedule */}
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-brand-silver hover:text-white font-bold text-xs sm:text-sm border border-white/10 hover:border-brand-yellow/40 transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-brand-yellow" />
              <span>Schedule Ride</span>
            </a>
          </motion.div>

          {/* Quick Instant-Pickup Hub Badges (Tap to Call for Area) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2"
          >
            <span className="text-[11px] text-brand-gray uppercase font-bold tracking-wider block mb-2">
              📍 Rapid Dispatch Hubs (Tap to Call):
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href="tel:+919944271322"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 hover:border-brand-yellow text-xs font-bold text-brand-silver transition-all"
                title="Call for Hosur Railway Station Taxi Pickup"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Railway Station Taxi (3–5 min)</span>
              </a>
              <a
                href="tel:+919944271322"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 hover:border-brand-yellow text-xs font-bold text-brand-silver transition-all"
                title="Call for Hosur Bus Stand Taxi Pickup"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Bus Stand Taxi (3–5 min)</span>
              </a>
              <a
                href="tel:+919944271322"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 hover:border-brand-yellow text-xs font-bold text-brand-silver transition-all"
                title="Call for SIPCOT Hosur Taxi Pickup"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>SIPCOT 1 &amp; 2 (5–10 min)</span>
              </a>
              <a
                href="tel:+919944271322"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 hover:border-brand-yellow text-xs font-bold text-brand-silver transition-all"
                title="Call for Local Cab in Hosur"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Local Cab (Any Location)</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Trust factors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 text-brand-silver/70 text-xs pt-1"
          >
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Surge Pricing</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Local Starts @ ₹150</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>4.9★ Google Rating (385+ Reviews)</span>
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
