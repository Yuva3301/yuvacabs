import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Plane, Building2, ShieldCheck, Phone, MessageSquare, ArrowRight, Star, ExternalLink } from 'lucide-react';
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
      desc: 'Swift dzire taxi hosur special fixed fare: Non-A/C ₹2,200 & A/C ₹2,300. 24/7 bangalore airport taxi from hosur with flight tracking, zero wait charges, and guaranteed pickup.',
      highlight: 'Best Deal'
    },
    {
      from: 'Hosur',
      to: 'Bangalore (Silk Board / Electronic City)',
      distance: '45 km',
      time: '1 hr',
      badge: 'Hosur to Bangalore Taxi',
      icon: Building2,
      rate: 'Starts @ ₹10/km',
      desc: 'Hosur to Bangalore taxi service for daily commuters, tech park workers, and corporate trips with sedan car rental hosur and swift dzire taxi hosur.',
      highlight: 'Most Frequent'
    },
    {
      from: 'Hosur',
      to: 'Chennai (Central / Airport)',
      distance: '310 km',
      time: '5 hr 30 min',
      badge: 'Chennai Airport Taxi',
      icon: Navigation,
      rate: 'Starts @ ₹10/km',
      desc: 'Dedicated Chennai airport taxi from hosur and outstation one way taxi in Hosur. Spacious sedans, 7 seater taxi in Hosur, and Innova Crysta rental in Hosur.',
      highlight: 'Best Value'
    },
    {
      from: 'Hosur',
      to: 'Salem / Coimbatore / Outstation',
      distance: '160 km / 320 km',
      time: '2.5 hrs / 5 hrs',
      badge: 'Outstation & Family Trip',
      icon: MapPin,
      rate: 'Starts @ ₹9/km',
      desc: 'Cheap taxi service in Hosur for family trip taxi hosur, business trip taxi hosur, and pilgrimage with Innova Crysta and Tempo Traveller rental in Hosur.',
      highlight: 'Highway Special'
    }
  ];

  const localZones = [
    {
      title: 'SIPCOT & Industrial Concentrated Zones',
      areas: [
        'Call taxi in SIPCOT Hosur',
        'SIPCOT Phase 1',
        'Call taxi zuzuvadi hosur',
        'Taxi service mookandapalli hosur',
        'TANSIDCO Industrial Estate',
        'SIPCOT Phase 2',
        'Moranapalli',
        'Thorapalli Industrial Area',
        'Adagurukki & Doripalli',
        'Hosur IT Park Viswanathapuram'
      ],
      tag: 'Priority Industrial Fleet',
      pickupTime: '5 - 10 Mins',
      desc: 'Dedicated 24 hours taxi service in Hosur for corporate shifts, industrial workers, and business trip taxi hosur across SIPCOT corridors.'
    },
    {
      title: 'Central Hosur & Transit Terminals',
      areas: [
        'Call taxi near Hosur bus stand',
        'Taxi service near Hosur new bus stand',
        'Taxi near Hosur railway station',
        'Taxi service bagalur road Hosur',
        'Call taxi in dinnur hosur',
        'Taxi service jeeva nagar hosur',
        'Old Bengaluru Road',
        'MG Road & Market Zone'
      ],
      tag: 'Rapid Station Dispatch',
      pickupTime: '3 - 7 Mins',
      desc: 'Immediate 24-hour taxi pickup outside Hosur railway station, Hosur new bus stand, Bagalur road, and central market locations.'
    },
    {
      title: 'Prime Residential & Suburbs',
      areas: [
        'Taxi service mathigiri hosur',
        'Call taxi sanasandiram hosur',
        'Call taxi denkanikottai road Hosur',
        'Call taxi kelamangalam road hosur',
        'Avalapalli & Avalapalli Road',
        'Shanthi Nagar',
        'Nehru Nagar',
        'Kamaraj Colony'
      ],
      tag: 'Doorstep Residential Cabs',
      pickupTime: '5 - 10 Mins',
      desc: 'Clean Hatchbacks, swift dzire taxi hosur, and seven seater car rental hosur for family trip taxi hosur, shopping, clinic visits, and school commutes.'
    },
    {
      title: 'Bangalore Border & Surrounding Towns',
      areas: [
        'Taxi service attibele',
        'Call taxi berigai',
        'Hosur to Bangalore taxi',
        'Bommasandra Industrial Area',
        'Chandapura Circle',
        'Anekal Town & Connector',
        'Shoolagiri (NH44 Belt)',
        'Denkanikottai & Rayakottai'
      ],
      tag: 'Interstate & Regional Drops',
      pickupTime: '10 - 15 Mins',
      desc: 'Direct interstate cabs between Hosur, Attibele, Berigai, Bommasandra, Chandapura, and regional trips across Krishnagiri.'
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
            <MapPin className="w-3.5 h-3.5" />
            <span>Hosur & Bangalore Local Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Best Taxi Service in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-gold text-glow-yellow">Hosur & Popular Routes</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-gray/90 leading-relaxed font-medium">
            Whether you need a quick 10-minute local pickup in SIPCOT, a midnight transfer to Kempegowda Airport (BLR), or an outstation drop across Tamil Nadu & Karnataka, YUVA CABS guarantees on-time arrival.
          </p>

          {/* Toggle Pills */}
          <div className="flex items-center justify-center pt-2">
            <div className="bg-brand-charcoal/80 p-1 rounded-full border border-white/10 flex space-x-1">
              <button
                onClick={() => setActiveTab('routes')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${activeTab === 'routes'
                    ? 'bg-brand-yellow text-brand-black shadow-md'
                    : 'text-brand-silver hover:text-white'
                  }`}
              >
                Top Highway & Airport Routes
              </button>
              <button
                onClick={() => setActiveTab('zones')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${activeTab === 'zones'
                    ? 'bg-brand-yellow text-brand-black shadow-md'
                    : 'text-brand-silver hover:text-white'
                  }`}
              >
                Hosur Local Coverage Areas
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Popular Routes Grid */}
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
                      <span className="font-extrabold text-brand-yellow bg-brand-yellow/10 px-2 py-0.5 rounded-full text-[11px]">
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

        {/* Tab 2: Hosur Local Coverage Zones */}
        {activeTab === 'zones' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
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

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {zone.title}
                  </h3>

                  <p className="text-xs text-brand-gray/90 mb-4 leading-relaxed font-medium">
                    {zone.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {zone.areas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[11px] font-semibold text-brand-silver bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg flex items-center space-x-1 hover:border-brand-yellow/20 transition-colors"
                      >
                        <MapPin className="w-2.5 h-2.5 text-brand-yellow mr-1" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                  <a
                    href="tel:+919944271322"
                    className="py-2.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/10 text-brand-silver font-bold text-xs text-center transition-all duration-300 flex items-center justify-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Driver</span>
                  </a>
                  <a
                    href={`https://wa.me/919944271322?text=${encodeURIComponent(`Hi YUVA CABS, I need a cab in ${zone.title}. Please share driver availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 hover:text-white border border-emerald-500/20 text-emerald-400 font-bold text-xs text-center transition-all duration-300 flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
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
                YUVA CABS — Verified Local Taxi Service in Hosur
              </h4>
              <p className="text-xs text-brand-gray/90 font-medium">
                Headquarters: Railway Station Road, Hamman Nagar, Hosur, Tamil Nadu 635109. Open 24 Hours.
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
