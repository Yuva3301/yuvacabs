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
    
    const maxRotate = 10;
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
      desc: 'Ertiga / XUV / Triber',
      nonAcMin: 220, acMin: 280,
      nonAcExtra: 15, acExtra: 16,
      minKm: 4, localLimit: 6,
      image: suvTaxiImg
    },
    innova: { 
      name: 'Toyota Innova', 
      desc: 'Classic Innova / Innova Crysta',
      nonAcMin: 350, acMin: 400,
      nonAcExtra: 18, acExtra: 20,
      minKm: 4, localLimit: 6,
      image: innovaTaxiImg
    },
    tempo: { 
      name: 'Tempo Traveller', 
      desc: 'Force 12 - 16 Seater Luxury Van',
      nonAcMin: 650, acMin: 800,
      nonAcExtra: 35, acExtra: 38,
      minKm: 4, localLimit: 6,
      image: tempoTravellerImg
    }
  };

  const vehicleKeys = Object.keys(vehicles);

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
          <span className="text-[10px] text-black font-extrabold uppercase tracking-wider">Fleet Showcase</span>
          <span className="text-lg font-black text-black leading-tight">{vehicles[selectedVehicle].name}</span>
          <span className="text-[10px] text-slate-700 font-bold">{vehicles[selectedVehicle].desc}</span>
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
              alt={`${vehicles[selectedVehicle].name} - Yuva Call Taxi cab in Hosur`}
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
                selectedVehicle === key ? 'w-5 bg-slate-800' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
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
          
          {/* Diwali Festive Greeting & 3 Core Services Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-600/30 via-yellow-500/20 to-amber-600/30 border border-amber-400/40 text-amber-300 text-xs font-black shadow-[0_0_12px_rgba(251,191,36,0.25)]"
            >
              <span>🪔</span>
              <span className="uppercase tracking-wider text-[10px] sm:text-[11px]">Happy Diwali! Festival Cabs 24/7</span>
              <span>🎆</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-extrabold uppercase tracking-wider text-[11px]">
                Hosur Call Taxi • 24/7 Taxi Service &amp; Cab Booking
              </span>
              <span className="text-brand-silver/40 hidden sm:inline">•</span>
              <a href="tel:+919944271322" className="flex items-center space-x-1 text-brand-yellow hover:underline font-black">
                <Phone className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                <span>+91 99442 71322</span>
              </a>
            </motion.div>
          </div>

          {/* Search Optimized High-Conversion Single H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[3.8rem] font-black tracking-tight text-brand-white leading-[1.1] text-left"
          >
            <span className="text-xs sm:text-sm font-extrabold text-brand-yellow uppercase tracking-widest block mb-2">
              24 Hours Call Taxi in Hosur • Taxi Near Me
            </span>
            <span className="text-brand-yellow">Call Taxi in Hosur</span>
            <span className="text-white text-3xl sm:text-4xl md:text-5xl block mt-1">Yuva Call Taxi</span>
            <a
              href="tel:+919944271322"
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-amber-300 to-brand-gold text-glow-yellow hover:opacity-90 inline-block mt-2 text-2xl sm:text-3xl md:text-4xl"
            >
              +91 99442 71322
            </a>
          </motion.h1>

          {/* 3 Core Travel Services Grid - Outstation, Airport, Local */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-1"
          >
            {/* Service Card 1: Outstation Cab Service */}
            <a
              href="/outstation-taxi"
              className="group p-3.5 rounded-2xl bg-white/[0.04] hover:bg-brand-yellow/15 border border-brand-yellow/30 hover:border-brand-yellow transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-brand-yellow text-brand-black uppercase tracking-wider">
                  Outstation Taxi
                </span>
                <span className="text-[11px] text-emerald-400 font-extrabold">₹9/km</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white group-hover:text-brand-yellow transition-colors leading-tight mt-1">
                Outstation Taxi in Hosur
              </h2>
              <div className="flex items-center space-x-1.5 mt-2.5 text-brand-yellow font-black text-xs sm:text-sm">
                <span>One-Way &amp; Round Trips →</span>
              </div>
            </a>

            {/* Service Card 2: Airport Taxi Hosur */}
            <a
              href="/airport-taxi"
              className="group p-3.5 rounded-2xl bg-white/[0.04] hover:bg-blue-500/15 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-500 text-white uppercase tracking-wider">
                  Airport Taxi
                </span>
                <span className="text-[11px] text-emerald-400 font-extrabold">Fixed ₹2,200</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white group-hover:text-blue-300 transition-colors leading-tight mt-1">
                Airport Taxi in Hosur
              </h2>
              <div className="flex items-center space-x-1.5 mt-2.5 text-blue-400 font-black text-xs sm:text-sm">
                <span>Bangalore Airport Pickup &amp; Drop →</span>
              </div>
            </a>

            {/* Service Card 3: Call Taxi Near Me / Local Taxi */}
            <a
              href="/local-taxi"
              className="group p-3.5 rounded-2xl bg-white/[0.04] hover:bg-emerald-500/15 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.25)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500 text-white uppercase tracking-wider">
                  Local Taxi
                </span>
                <span className="text-[11px] text-emerald-400 font-extrabold">From ₹150</span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white group-hover:text-emerald-300 transition-colors leading-tight mt-1">
                Local Taxi Service in Hosur
              </h2>
              <div className="flex items-center space-x-1.5 mt-2.5 text-emerald-400 font-black text-xs sm:text-sm">
                <span>5-10 Min Fast Pickup →</span>
              </div>
            </a>
          </motion.div>

          {/* Subtitle with High-Ranking Priority Keywords */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-brand-silver/95 max-w-xl font-medium leading-relaxed text-left"
          >
            Looking for a <strong className="text-white">Call Taxi in Hosur</strong>, <strong className="text-white">Taxi Near Me</strong>, or <strong className="text-white">Hosur to Bangalore Airport Taxi</strong>? Yuva Call Taxi is your trusted 24/7 <strong className="text-white">Hosur Taxi Service</strong> partner with 5-10 min pickup across <strong className="text-white">Hosur Railway Station</strong>, <strong className="text-white">SIPCOT</strong>, <strong className="text-white">Bagalur</strong>, <strong className="text-white">Dinnur</strong> &amp; <strong className="text-white">Jeeva Nagar</strong>. Local cabs from <span className="text-brand-yellow font-extrabold">₹150</span>, outstation drop taxi @ <span className="text-brand-yellow font-extrabold">₹9/km</span>.
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
              href="tel:+919944271322"
              className="flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-gold text-brand-black font-black text-base sm:text-lg tracking-tight shadow-[0_0_35px_rgba(255,212,59,0.5)] hover:shadow-[0_0_55px_rgba(255,212,59,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-5 h-5 fill-brand-black text-brand-black animate-bounce" />
              <span>Call Now: +91 99442 71322</span>
            </a>

            {/* Direct WhatsApp Instant Booking */}
            <a
              href="https://wa.me/919944271322?text=Hello%20Yuva%20Call%20Taxi,%20I%20need%20a%20cab%20pickup%20in%20Hosur."
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
              <span>Online Booking</span>
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
              📍 24/7 Rapid Pickup Areas in Hosur (Tap to Call):
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href="tel:+919944271322"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 hover:border-brand-yellow text-xs font-bold text-brand-silver transition-all"
                title="Railway Station Taxi Hosur"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Railway Station Taxi (3-5 min)</span>
              </a>
              <a
                href="tel:+919944271322"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 hover:border-brand-yellow text-xs font-bold text-brand-silver transition-all"
                title="SIPCOT Taxi Service Hosur"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>SIPCOT Taxi Service (5-10 min)</span>
              </a>
              <a
                href="tel:+919944271322"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 hover:border-brand-yellow text-xs font-bold text-brand-silver transition-all"
                title="Bagalur Taxi Service"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Bagalur Taxi Service</span>
              </a>
              <a
                href="tel:+919944271322"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 hover:border-brand-yellow text-xs font-bold text-brand-silver transition-all"
                title="Dinnur Call Taxi"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Dinnur Call Taxi</span>
              </a>
              <a
                href="tel:+919944271322"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 hover:border-brand-yellow text-xs font-bold text-brand-silver transition-all"
                title="Jeeva Nagar Taxi Service"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Jeeva Nagar Taxi Service</span>
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
              <span>24/7 Verified Chauffeurs</span>
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
