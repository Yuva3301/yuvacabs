import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Plane, Building2, ShieldCheck, Phone, MessageSquare, ArrowRight, Star, ExternalLink, CheckCircle2, Compass, Car } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa6';

export default function LocalSEO() {
  const [activeTab, setActiveTab] = useState('routes');

  const popularRoutes = [
    {
      from: 'Hosur',
      to: 'Bengaluru Kempegowda Airport (BLR)',
      distance: '80 km',
      time: '1 hr 45 min',
      badge: 'Swift Dzire Fixed Rate',
      icon: Plane,
      rate: 'Non-A/C ₹2,200 | A/C ₹2,300',
      desc: 'Swift Dzire special fixed fare: Non-A/C ₹2,200 & A/C ₹2,300. Guaranteed on-time flight pickup, landing delay tracking & zero surge fees.',
      highlight: 'Best Deal'
    },
    {
      from: 'Hosur',
      to: 'Electronic City / Silk Board',
      distance: '35 km',
      time: '45 min',
      badge: 'Daily IT Corridor',
      icon: Building2,
      rate: 'Starts @ ₹10/km',
      desc: 'Seamless inter-state corporate transit between Hosur manufacturing zones and Bangalore tech campuses.',
      highlight: 'Popular'
    },
    {
      from: 'Hosur',
      to: 'Chennai (Central / Airport)',
      distance: '310 km',
      time: '5 hr 30 min',
      badge: 'One-Way / Round Trip',
      icon: Navigation,
      rate: 'Starts @ ₹9/km',
      desc: 'Smooth highway drive via NH48. Spacious AC Sedans and Innova Crysta for comfortable long-distance travel.',
      highlight: 'Best Value'
    },
    {
      from: 'Hosur',
      to: 'Salem / Coimbatore',
      distance: '160 km / 310 km',
      time: '2.5 hrs / 5 hrs',
      badge: 'Express Outstation',
      icon: MapPin,
      rate: 'Starts @ ₹9/km',
      desc: 'Affordable outstation cab hire with experienced highway drivers, clean cars, and zero hidden toll charges.',
      highlight: 'Highway Special'
    }
  ];

  const outstationDestinations = [
    {
      city: 'Chennai',
      route: 'Hosur ⇄ Chennai (Central / Airport / OMR)',
      distance: '310 km',
      time: '5.5 hrs',
      highway: 'NH48 Expressway',
      types: 'Sedan, SUV & Innova Crysta',
      rate: 'Starts @ ₹9/km',
      desc: 'Fast highway transit via Krishnagiri and Vellore. Ideal for airport drops, corporate meetings, and family visits.',
      tag: 'One-Way & Round Trip'
    },
    {
      city: 'Salem',
      route: 'Hosur ⇄ Salem City / Junction',
      distance: '160 km',
      time: '2.5 hrs',
      highway: 'NH44 6-Lane Expressway',
      types: 'Hatchback, Sedan & Innova',
      rate: 'Starts @ ₹9/km',
      desc: 'Direct corridor through Dharmapuri with top highway safety. Fixed driver allowance and zero cancellation fees.',
      tag: 'Direct NH44 Corridor'
    },
    {
      city: 'Coimbatore',
      route: 'Hosur ⇄ Coimbatore (City / Airport)',
      distance: '320 km',
      time: '5.5 hrs',
      highway: 'NH544 via Salem & Erode',
      types: 'Etios, Dzire & Innova Crysta',
      rate: 'Starts @ ₹9/km',
      desc: 'Top-rated outstation cab service to the textile capital. Experienced long-drive chauffeurs with clean AC cars.',
      tag: 'Business & Family Travel'
    },
    {
      city: 'Tirupati',
      route: 'Hosur ⇄ Tirupati (Balaji Temple)',
      distance: '245 km',
      time: '4.5 hrs',
      highway: 'via Chittoor / Palamaner',
      types: 'Innova Crysta, Ertiga & Sedans',
      rate: 'Starts @ ₹9/km',
      desc: 'Dedicated pilgrim package with temple darshan wait-time included. Safe mountain ghat road navigation.',
      tag: 'Pilgrimage Darshan'
    },
    {
      city: 'Pondicherry',
      route: 'Hosur ⇄ Pondicherry (White Town / Beach)',
      distance: '260 km',
      time: '5 hrs',
      highway: 'via Tiruvannamalai / Tindivanam',
      types: 'Sedans & Executive SUVs',
      rate: 'Starts @ ₹9/km',
      desc: 'Relaxing weekend beach getaway. No rush, multiple scenic stopovers allowed, and flat per-km calculation.',
      tag: 'Weekend Beach Tour'
    },
    {
      city: 'Ooty (Nilgiris)',
      route: 'Hosur ⇄ Ooty / Coonoor / Kotagiri',
      distance: '285 km',
      time: '6.5 hrs',
      highway: 'via Mettupalayam / Bandipur',
      types: 'Innova Crysta & Etios',
      rate: 'Starts @ ₹9/km',
      desc: 'Specialized hill station drivers skilled in 36 hairpin bends, misty ghat roads, and family holiday comfort.',
      tag: 'Hill Station Specialist'
    }
  ];

  const localZones = [
    {
      title: 'SIPCOT Industrial Area (Phase 1 & 2)',
      areas: ['SIPCOT Phase 1', 'SIPCOT Phase 2', 'Moranapalli', 'Mookandapalli', 'Zuzuvadi', 'TVS Motor Belt'],
      tag: 'Industrial & Corporate',
      pickupTime: '10 - 15 Mins'
    },
    {
      title: 'Hosur City & Residential Hubs',
      areas: ['Railway Station Road', 'Hamman Nagar', 'Mathigiri', 'Bagalur Road', 'Rayakottai Road', 'Avalapalli'],
      tag: 'Local Point-to-Point',
      pickupTime: '5 - 10 Mins'
    },
    {
      title: 'Border & Suburban Connectors',
      areas: ['Attibele Border', 'Anekal Road', 'Thally Road', 'Kelamangalam', 'Berigai', 'Denkanikottai'],
      tag: 'Suburban Cabs',
      pickupTime: '15 - 20 Mins'
    }
  ];

  return (
    <section id="local-seo" className="py-24 bg-brand-charcoal/40 dark-blue-section relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-[15%] left-[5%] w-96 h-96 rounded-full bg-brand-yellow/5 glow-orb blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-blue-500/5 glow-orb blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with High-Ranking SEO Entities */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold uppercase tracking-widest self-center">
            <Compass className="w-3.5 h-3.5" />
            <span>Hosur & Outstation Transit Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Best Taxi in Hosur & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-gold text-glow-yellow">Outstation Cabs from ₹9/km</span>
          </h2>
          
          <p className="text-sm sm:text-base text-brand-gray/90 leading-relaxed font-medium">
            From 15-minute local pickups across SIPCOT & Hosur to long-distance outstation trips across Tamil Nadu, Karnataka & Andhra Pradesh, YUVA CABS guarantees transparent fares and certified chauffeurs.
          </p>

          {/* Toggle Pills */}
          <div className="flex items-center justify-center pt-2">
            <div className="bg-brand-charcoal/80 p-1.5 rounded-full border border-white/10 flex flex-wrap justify-center gap-1">
              <button
                onClick={() => setActiveTab('routes')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'routes'
                    ? 'bg-brand-yellow text-brand-black shadow-md'
                    : 'text-brand-silver hover:text-white'
                }`}
              >
                Top Highway & Airport Routes
              </button>
              <button
                onClick={() => setActiveTab('outstation')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'outstation'
                    ? 'bg-brand-yellow text-brand-black shadow-md'
                    : 'text-brand-silver hover:text-white'
                }`}
              >
                Outstation Destinations (₹9/km)
              </button>
              <button
                onClick={() => setActiveTab('zones')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'zones'
                    ? 'bg-brand-yellow text-brand-black shadow-md'
                    : 'text-brand-silver hover:text-white'
                }`}
              >
                Hosur Local Coverage Areas
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Popular Highway & Airport Routes */}
        {activeTab === 'routes' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {popularRoutes.map((route, idx) => {
              const Icon = route.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-3xl border border-white/5 hover:border-brand-yellow/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-brand-yellow block">
                          {route.badge}
                        </span>
                        <h3 className="text-lg font-bold text-white tracking-tight flex items-center space-x-1.5">
                          <span>{route.from}</span>
                          <span className="text-brand-yellow">⇄</span>
                          <span>{route.to}</span>
                        </h3>
                      </div>
                    </div>

                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-white/5 text-brand-silver border border-white/10">
                      {route.highlight}
                    </span>
                  </div>

                  <p className="text-xs text-brand-gray/90 leading-relaxed font-medium mb-5">
                    {route.desc}
                  </p>

                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/5 gap-3">
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1 text-brand-silver">
                        <Navigation className="w-3.5 h-3.5 text-brand-yellow" />
                        <span className="font-bold text-white">{route.distance}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-brand-silver">
                        <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                        <span className="font-bold text-white">{route.time}</span>
                      </div>
                      <span className="font-extrabold text-brand-yellow bg-brand-yellow/10 px-2.5 py-0.5 rounded-full text-[11px]">
                        {route.rate}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <a
                        href="tel:+919944271322"
                        className="px-3.5 py-2 rounded-xl bg-brand-yellow text-brand-black font-extrabold text-xs flex items-center space-x-1 hover:brightness-110 active:scale-95 transition-all shadow-sm"
                      >
                        <Phone className="w-3 h-3 fill-brand-black" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/919944271322?text=Hello! I want to book a taxi from ${encodeURIComponent(route.from)} to ${encodeURIComponent(route.to)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-[#25D366] text-white font-extrabold text-xs flex items-center space-x-1 hover:brightness-110 active:scale-95 transition-all shadow-sm"
                      >
                        <MessageSquare className="w-3 h-3 fill-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Tab 2: Outstation Destinations Hub (SEO Heavyweight) */}
        {activeTab === 'outstation' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col space-y-8"
          >
            {/* Outstation Key Advantages Banner */}
            <div className="glass-card p-6 rounded-3xl border border-brand-yellow/20 bg-brand-yellow/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-brand-yellow">₹9 / KM</span>
                <span className="text-[11px] text-brand-silver font-semibold mt-0.5">Starting Outstation Rate</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white">One-Way Drop</span>
                <span className="text-[11px] text-brand-silver font-semibold mt-0.5">Pay only one-way on top routes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-white">Fixed Beta</span>
                <span className="text-[11px] text-brand-silver font-semibold mt-0.5">Transparent driver allowance</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-black text-emerald-400">Zero Surge</span>
                <span className="text-[11px] text-brand-silver font-semibold mt-0.5">Peak time flat rates</span>
              </div>
            </div>

            {/* Outstation City Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {outstationDestinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-3xl border border-white/5 hover:border-brand-yellow/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-extrabold tracking-wider text-brand-yellow px-2.5 py-0.5 rounded-full bg-brand-yellow/10">
                        {dest.tag}
                      </span>
                      <span className="text-xs font-black text-white text-glow-yellow">
                        {dest.rate}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-yellow transition-colors">
                      {dest.city} Outstation Cab
                    </h3>
                    <span className="text-xs text-brand-silver font-semibold block mb-2">{dest.route}</span>

                    <div className="flex items-center space-x-3 text-[11px] text-brand-gray mb-3 pb-3 border-b border-white/5">
                      <span className="flex items-center font-bold text-white">
                        <Navigation className="w-3 h-3 text-brand-yellow mr-1" /> {dest.distance}
                      </span>
                      <span>•</span>
                      <span className="flex items-center font-bold text-white">
                        <Clock className="w-3 h-3 text-brand-yellow mr-1" /> {dest.time}
                      </span>
                      <span>•</span>
                      <span className="text-brand-silver">{dest.highway}</span>
                    </div>

                    <p className="text-xs text-brand-gray/90 leading-relaxed font-medium mb-4">
                      {dest.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/5">
                    <span className="text-[10px] text-brand-silver font-semibold">{dest.types}</span>
                    <a
                      href={`https://wa.me/919944271322?text=Hello! I want to book an outstation cab from Hosur to ${encodeURIComponent(dest.city)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-[#25D366] text-white font-extrabold text-xs flex items-center space-x-1 hover:brightness-110 active:scale-95 transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3 h-3 fill-white" />
                      <span>Book {dest.city}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 3: Hosur Local Coverage Zones */}
        {activeTab === 'zones' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {localZones.map((zone, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/5 hover:border-brand-yellow/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-brand-yellow px-2 py-0.5 rounded-full bg-brand-yellow/10">
                      {zone.tag}
                    </span>
                    <span className="text-[10px] font-bold text-brand-gray flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-emerald-400" />
                      Pickup: {zone.pickupTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-4">
                    {zone.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {zone.areas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[11px] font-semibold text-brand-silver bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg flex items-center space-x-1"
                      >
                        <MapPin className="w-2.5 h-2.5 text-brand-yellow mr-1" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="tel:+919944271322"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 text-brand-silver font-bold text-xs text-center transition-all duration-300 flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Request Pickup in this Zone</span>
                </a>
              </div>
            ))}
          </motion.div>
        )}

        {/* Local Trust & Google Maps Business Profile Direct Hub */}
        <div className="mt-12 glass-card p-6 sm:p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-transparent to-brand-yellow/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-left">
            <div className="p-4 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex-shrink-0">
              <FaGoogle className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black text-blue-400 uppercase tracking-wider">Google Verified Business</span>
                <span className="flex items-center text-xs font-extrabold text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 mr-0.5" /> 4.9 Rating (385+ Reviews)
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                YUVA CABS — Verified Local & Outstation Taxi Service in Hosur
              </h4>
              <p className="text-xs text-brand-gray/90 font-medium">
                Headquarters: Railway Station Road, Hamman Nagar, Hosur, Tamil Nadu 635109. Available 24/7 for Outstation Trips.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <a
              href="https://maps.app.goo.gl/gHwiq68N6k8QekBt8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <span>View Google Map Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="tel:+919944271322"
              className="flex-1 md:flex-initial inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-brand-yellow text-brand-black font-extrabold text-xs shadow-md hover:brightness-110 transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 fill-brand-black" />
              <span>+91 99442 71322</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
