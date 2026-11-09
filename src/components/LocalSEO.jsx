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
      desc: 'Swift Dzire fixed fare: Non-A/C ₹2,200 & A/C ₹2,300. Guaranteed on-time flight pickup, landing delay tracking & zero surge fees.',
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
      desc: 'Affordable outstation cab hire with experienced highway drivers, clean cars, and zero return fare on one-way drops.',
      highlight: 'Highway Special'
    }
  ];

  const outstationDestinations = [
    {
      city: 'Chennai',
      route: 'Hosur → Chennai (Central / Airport / OMR)',
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
      route: 'Hosur → Salem City / Junction',
      distance: '160 km',
      time: '2.5 hrs',
      highway: 'NH44 6-Lane Expressway',
      types: 'Hatchback, Sedan & Innova',
      rate: 'Starts @ ₹9/km',
      desc: 'Direct express connectivity via Dharmapuri. One-way drop taxis available with zero return fare charges.',
      tag: 'Express Drop Taxi'
    },
    {
      city: 'Coimbatore',
      route: 'Hosur → Coimbatore (Airport / Gandhipuram)',
      distance: '320 km',
      time: '5.5 hrs',
      highway: 'NH44 & NH544',
      types: 'AC Sedan & Innova Crysta',
      rate: 'Starts @ ₹9/km',
      desc: 'Comfortable long-haul transit to the Manchester of South India. Ample boot space for luggage and seamless cruising.',
      tag: 'Textile Hub Special'
    },
    {
      city: 'Tirupati',
      route: 'Hosur → Tirumala / Tirupati Temple',
      distance: '245 km',
      time: '4.5 hrs',
      highway: 'NH69 & NH40',
      types: 'Maruti Ertiga & Innova Crysta',
      rate: 'Starts @ ₹9/km',
      desc: 'Dedicated Tirupati Balaji pilgrimage packages with darshan waiting options and skilled hill drivers.',
      tag: 'Pilgrimage Package'
    },
    {
      city: 'Pondicherry',
      route: 'Hosur → Pondicherry (White Town)',
      distance: '260 km',
      time: '5 hrs',
      highway: 'NH77 via Tiruvannamalai',
      types: 'Sedan & SUV',
      rate: 'Starts @ ₹9/km',
      desc: 'Scenic holiday rides to French colonies and beaches with flexible sightseeing stops along the way.',
      tag: 'Weekend Beach Getaway'
    },
    {
      city: 'Ooty',
      route: 'Hosur → Ooty / Coonoor Hill Station',
      distance: '285 km',
      time: '6.5 hrs',
      highway: 'NH44 & Ghat Road via Mettupalayam',
      types: 'Innova Crysta & Tempo Traveller',
      rate: 'Custom Ghat Package',
      desc: 'Hill station tours with professional mountain drivers skilled in 36 hairpin bends and ghat road navigation.',
      tag: 'Hill Station Special'
    }
  ];

  const coverageAreas = [
    { zone: 'Hosur Railway Station', time: '3-5 mins', badge: 'Stand Hub', note: '24/7 dedicated cabs right outside platform gates' },
    { zone: 'Hosur Central & New Bus Stand', time: '3-5 mins', badge: 'Bus Stand Hub', note: 'Immediate departures for bus commuters' },
    { zone: 'SIPCOT Phase 1 & 2', time: '5-8 mins', badge: 'Industrial Zone', note: 'TVS Motor, Ashok Leyland & Titan industrial belts' },
    { zone: 'Bathalapalli & Market Hub', time: '5-8 mins', badge: 'Market & Industry', note: '24/7 cabs near wholesale vegetable market & ring road' },
    { zone: 'Rayakottai & Housing Board', time: '10-15 mins', badge: 'Town Hub', note: 'Doorstep cabs in Rayakottai town and Housing Board' },
    { zone: 'Denkanikottai & Taluk Belt', time: '12-15 mins', badge: 'Taluk Hub', note: 'Reliable service to Hosur, hospitals & BLR Airport' },
    { zone: 'Kelamangalam Town', time: '10-15 mins', badge: 'Satellite Town', note: 'Immediate cabs for town, railway gate & industries' },
    { zone: 'Krishnagiri Highway Express', time: 'Immediate', badge: 'NH44 Corridor', note: 'One-way drop & round trips between Hosur & Krishnagiri' },
    { zone: 'Alasanatham & Lake Area', time: '5-8 mins', badge: 'Residential Hub', note: 'Prompt doorstep pickup in Alasanatham and nearby layouts' },
    { zone: 'Anthivadi & Stadium Hub', time: '5-8 mins', badge: 'Residential Belt', note: 'Fast city cabs for Anthivadi circle and stadium area' },
    { zone: 'SBM Colony & Avalapalli', time: '5-8 mins', badge: 'Colony Specialist', note: 'Safe family and senior citizen transit in SBM Colony' },
    { zone: 'Anekal & Attibele Border', time: '10-15 mins', badge: 'Interstate Border', note: 'Daily commute between Hosur, Anekal and Jigani' },
    { zone: 'Belagondapalli & Mathakondapalli', time: '8-12 mins', badge: 'Industrial Corridor', note: 'Shift drops and business cabs on Thally Road belt' },
    { zone: 'Thally Border Town', time: '15 mins', badge: 'Hill & Border Hub', note: 'Scenic tours, family trips and direct airport connections' },
    { zone: 'Perandapalli & Kothur', time: '5-8 mins', badge: 'SIPCOT Belt', note: 'Fast pickup near NH44 bypass and manufacturing units' },
    { zone: 'Muneeswar Nagar & Navadhi', time: '5-8 mins', badge: 'Town Residential', note: 'Rapid 24/7 dispatch for Muneeswar Nagar and Navadhi Lake' },
    { zone: 'Berigai & Poonapalli', time: '10-15 mins', badge: 'East Hosur Belt', note: 'Dependable rural and town border cab services' },
    { zone: 'Dinnur & Jeeva Nagar', time: '5-8 mins', badge: 'Head Office Hub', note: 'Main office area with 5-minute instant car arrival' },
  ];

  return (
    <section id="local-seo" className="py-24 bg-brand-charcoal/30 dark-blue-section relative overflow-hidden text-left">
      {/* Background ambient light */}
      <div className="absolute top-[15%] right-[-5%] w-96 h-96 rounded-full bg-brand-yellow/5 glow-orb blur-[120px]" />
      <div className="absolute bottom-[15%] left-[-5%] w-96 h-96 rounded-full bg-brand-blue/5 glow-orb blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
          <span className="text-xs text-brand-yellow font-extrabold tracking-widest uppercase">Hosur Travel Network</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Popular Cab Routes &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-gold text-glow-yellow">Coverage in Hosur</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-gray/90 leading-relaxed">
            Yuva Call Taxi connects all major Hosur neighborhoods, industrial corridors, and outstation cities with transparent pricing and 24/7 availability.
          </p>

          {/* Navigation Pill Switcher */}
          <div className="flex items-center justify-center pt-4">
            <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-2xl">
              <button
                onClick={() => setActiveTab('routes')}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'routes'
                    ? 'bg-brand-yellow text-brand-black shadow-md'
                    : 'text-brand-silver hover:text-white'
                }`}
              >
                Top Highway Corridors
              </button>
              <button
                onClick={() => setActiveTab('outstation')}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'outstation'
                    ? 'bg-brand-yellow text-brand-black shadow-md'
                    : 'text-brand-silver hover:text-white'
                }`}
              >
                Outstation Destinations
              </button>
              <button
                onClick={() => setActiveTab('coverage')}
                className={`px-5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'coverage'
                    ? 'bg-brand-yellow text-brand-black shadow-md'
                    : 'text-brand-silver hover:text-white'
                }`}
              >
                Hosur Local Hubs
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Top Highway Corridors */}
        {activeTab === 'routes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, idx) => {
              const Icon = route.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-3xl border border-white/5 flex flex-col justify-between space-y-4 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 px-2 py-0.5 rounded-full border border-brand-yellow/20">
                      {route.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-brand-yellow transition-colors">
                      {route.from} → {route.to}
                    </h3>
                    <div className="flex items-center space-x-3 text-xs text-brand-gray mt-1">
                      <span>{route.distance}</span>
                      <span>•</span>
                      <span>{route.time}</span>
                    </div>
                    <div className="mt-2 text-sm font-black text-brand-yellow">
                      {route.rate}
                    </div>
                    <p className="text-xs text-brand-silver/90 mt-2 leading-relaxed">
                      {route.desc}
                    </p>
                  </div>

                  <a
                    href="tel:+919944271322"
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-white text-xs font-bold flex items-center justify-center space-x-1 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call to Book</span>
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Outstation Destinations */}
        {activeTab === 'outstation' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outstationDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-white/5 flex flex-col justify-between space-y-4 group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-brand-yellow uppercase tracking-wider">
                      {dest.tag}
                    </span>
                    <span className="text-xs text-emerald-400 font-extrabold">{dest.rate}</span>
                  </div>
                  <h3 className="text-lg font-black text-white group-hover:text-brand-yellow transition-colors">
                    Hosur → {dest.city}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-brand-gray mt-1">
                    <span>{dest.distance}</span>
                    <span>•</span>
                    <span>{dest.time}</span>
                    <span>•</span>
                    <span className="text-brand-silver">{dest.highway}</span>
                  </div>
                  <p className="text-xs text-brand-silver/90 mt-3 leading-relaxed">
                    {dest.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <a href="/outstation-taxi" className="text-xs font-bold text-brand-yellow hover:underline">
                    View Details →
                  </a>
                  <a
                    href="tel:+919944271322"
                    className="px-3.5 py-1.5 rounded-xl bg-brand-yellow text-brand-black text-xs font-extrabold flex items-center space-x-1"
                  >
                    <Phone className="w-3 h-3 fill-brand-black" />
                    <span>Book</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Hosur Local Hubs */}
        {activeTab === 'coverage' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coverageAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-yellow/30 transition-all flex flex-col justify-between space-y-2 text-left"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-brand-yellow uppercase tracking-wider">{area.badge}</span>
                    <span className="text-[10px] text-emerald-400 font-extrabold flex items-center space-x-1">
                      <Clock className="w-3 h-3 mr-0.5" />
                      <span>{area.time}</span>
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white mt-1">{area.zone}</h4>
                  <p className="text-xs text-brand-silver/80 mt-1 leading-relaxed font-medium">{area.note}</p>
                </div>
                <a
                  href="tel:+919944271322"
                  className="pt-2 text-xs font-bold text-brand-yellow hover:underline flex items-center space-x-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call for Instant Pickup</span>
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
