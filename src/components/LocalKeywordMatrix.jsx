import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MapPin, Navigation, Plane, Phone, MessageSquare, 
  Clock, ShieldCheck, Car, ChevronRight, CheckCircle2, 
  Sparkles, ArrowRight, ArrowRightLeft, Building2, HelpCircle 
} from 'lucide-react';

export default function LocalKeywordMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Top Customer Search Route Keywords on Google
  const searchKeywordsData = [
    // --- 1. LOCAL HOSUR TAXI KEYWORDS ---
    {
      id: 'local-railway-station',
      category: 'local',
      keyword: 'Railway Station Taxi Hosur',
      title: 'Hosur Railway Station Taxi Stand (Platforms 1 & 2)',
      route: 'Hosur Railway Station → Anywhere in Hosur & Outstation',
      pickupTime: '3 - 5 Mins Pickup',
      distance: 'Local City',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback, Sedan & SUV',
      badge: '24/7 Station Stand',
      highlight: 'Station Specialist',
      desc: 'Instant pickup right outside Hosur Railway Station. Available 24 hours for all passenger trains, midnight arrivals, and early morning departures.'
    },
    {
      id: 'local-bus-stand',
      category: 'local',
      keyword: 'Hosur Bus Stand Taxi',
      title: 'Hosur Central & New Bus Stand Cabs',
      route: 'Hosur Bus Stand → Local Areas & Industrial Zones',
      pickupTime: '3 - 5 Mins Pickup',
      distance: 'Local City',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Sedan (Dzire/Etios) & Hatchback',
      badge: '24/7 Bus Stand Stand',
      highlight: 'Instant Cab',
      desc: 'Looking for a call taxi near Hosur bus stand? Cabs stationed 24/7 near the new and old bus stands for instant drop across Hosur.'
    },
    {
      id: 'local-sipcot',
      category: 'local',
      keyword: 'SIPCOT Taxi Service Hosur',
      title: 'SIPCOT Phase 1 & Phase 2 Industrial Cabs',
      route: 'SIPCOT Industrial Belt → Hosur Town / Railway Station',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'Local / Shift Transit',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Sedan, SUV & Corporate Fleets',
      badge: 'Industrial Shift Hub',
      highlight: 'Corporate Priority',
      desc: 'Fast employee shift drop and executive cabs across SIPCOT Phase 1, Phase 2, TVS Motor belt, Ashok Leyland, and Titan Township.'
    },
    {
      id: 'local-bagalur-road',
      category: 'local',
      keyword: 'Bagalur Taxi Service',
      title: 'Bagalur Road & Bagalur Junction Taxi Service',
      route: 'Bagalur Road → Hosur Central / Attibele / BLR',
      pickupTime: '5 - 10 Mins Pickup',
      distance: 'Local Arterial',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Dzire, Etios & Ertiga',
      badge: 'Key Arterial Corridor',
      highlight: 'Fast Pickup',
      desc: 'Reliable call taxi on Bagalur Road, Bagalur town, and ring road bypass. Clean AC cars with courteous local drivers.'
    },
    {
      id: 'local-dinnur',
      category: 'local',
      keyword: 'Dinnur Call Taxi',
      title: 'Dinnur & Sanasandiram Call Taxi Service',
      route: 'Dinnur → Hosur Railway Station, Bus Stand & Markets',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'Residential Hub',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback & Sedan',
      badge: 'Residential Pickup',
      highlight: 'Neighborhood Favorite',
      desc: 'Prompt doorstep pickup in Dinnur, Sanasandiram, and Avalapalli with 24/7 availability and zero surge pricing.'
    },
    {
      id: 'local-jeeva-nagar',
      category: 'local',
      keyword: 'Jeeva Nagar Taxi Service',
      title: 'Jeeva Nagar & Mathigiri Cab Service',
      route: 'Jeeva Nagar / Mathigiri → Hosur Town / Railway Station',
      pickupTime: '5 - 10 Mins Pickup',
      distance: 'Local Neighborhood',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback, Sedan & SUV',
      badge: 'Local Neighborhood',
      highlight: 'Affordable Rates',
      desc: '24/7 local taxi booking for residents of Jeeva Nagar, Mathigiri, and Kelamangalam Road. Reliable drivers and clean cars.'
    },

    // --- 2. OUTSTATION & DROP TAXI KEYWORDS ---
    {
      id: 'outstation-chennai',
      category: 'outstation',
      keyword: 'Hosur to Chennai Drop Taxi',
      title: 'Hosur → Chennai One-Way Drop & Round Trip Taxi',
      route: 'Hosur → Chennai (Central / Airport / OMR / Tambaram)',
      pickupTime: 'Scheduled / 15 Mins',
      distance: '310 KM (5.5 Hrs)',
      fare: 'Starts @ ₹9/KM (One-Way Drop)',
      fleet: 'Swift Dzire, Etios, Ertiga & Innova Crysta',
      badge: 'NH48 Expressway Special',
      highlight: 'Best Value Drop Taxi',
      desc: 'Affordable one-way drop taxi to Chennai. Pay only for one-way distance with zero return charges. Smooth highway drive via NH48.'
    },
    {
      id: 'outstation-bangalore',
      category: 'outstation',
      keyword: 'Hosur to Bangalore Taxi',
      title: 'Hosur → Bangalore City & IT Corridor Cabs',
      route: 'Hosur → Electronic City / Silk Board / Whitefield / Majestic',
      pickupTime: 'Immediate / 10 Mins',
      distance: '35 - 55 KM (45 - 75 Mins)',
      fare: 'Starts @ ₹10/KM or Flat Package',
      fleet: 'Sedan (Dzire) & SUV (Ertiga)',
      badge: 'Daily Commute Corridor',
      highlight: 'Popular Daily Route',
      desc: 'Daily inter-state travel for corporate and business travelers between Hosur and Bangalore IT campuses.'
    },
    {
      id: 'outstation-salem',
      category: 'outstation',
      keyword: 'Hosur to Salem Drop Taxi',
      title: 'Hosur → Salem City / Junction Drop Taxi',
      route: 'Hosur → Salem via Dharmapuri & NH44 Expressway',
      pickupTime: 'Scheduled / 15 Mins',
      distance: '160 KM (2.5 Hrs)',
      fare: 'Starts @ ₹9/KM (One-Way Available)',
      fleet: 'Dzire, Etios & Innova Crysta',
      badge: 'NH44 6-Lane Expressway',
      highlight: 'Fast Highway Transit',
      desc: 'One-way drop taxi from Hosur to Salem. Direct 6-lane NH44 corridor with seasoned highway drivers and clean sanitized cars.'
    },
    {
      id: 'outstation-coimbatore',
      category: 'outstation',
      keyword: 'Hosur to Coimbatore Cab',
      title: 'Hosur → Coimbatore (City / Airport / Gandhipuram)',
      route: 'Hosur → Coimbatore via Salem & Erode (NH544)',
      pickupTime: 'Scheduled / 20 Mins',
      distance: '320 KM (5.5 Hrs)',
      fare: 'Starts @ ₹9/KM',
      fleet: 'Etios, Dzire & Innova Crysta',
      badge: 'Textile Corridor Special',
      highlight: 'Comfort Highway Ride',
      desc: 'Top-rated outstation cab service to Coimbatore. Spacious legroom, luggage boot, and experienced long-drive chauffeurs.'
    },
    {
      id: 'outstation-tirupati',
      category: 'outstation',
      keyword: 'Hosur to Tirupati Package Taxi',
      title: 'Hosur → Tirupati Balaji Temple Darshan Cabs',
      route: 'Hosur → Tirumala / Tirupati via Chittoor & Palamaner',
      pickupTime: 'Dedicated Booking',
      distance: '245 KM (4.5 Hrs)',
      fare: 'Starts @ ₹9/KM (Darshan Wait Inc.)',
      fleet: 'Innova Crysta, Ertiga & Sedans',
      badge: 'Pilgrimage Darshan Package',
      highlight: 'Temple Specialist',
      desc: 'Complete Tirupati Balaji pilgrimage cab packages with temple wait-time included and safe highway driving.'
    },

    // --- 3. AIRPORT TAXI KEYWORDS ---
    {
      id: 'airport-blr-hosur',
      category: 'airport',
      keyword: 'Hosur to Bangalore Airport Taxi',
      title: 'Hosur → Kempegowda International Airport (BLR) T1 & T2',
      route: 'Hosur Central / SIPCOT → Kempegowda Airport Bengaluru',
      pickupTime: '24/7 Guaranteed (2 AM - 4 AM)',
      distance: '78 - 82 KM (75 - 90 Mins)',
      fare: 'Swift Dzire Fixed ₹2,200 | Ertiga ₹2,800',
      fleet: 'Swift Dzire, Etios, Ertiga & Innova Crysta',
      badge: '100% On-Time Guarantee',
      highlight: 'Hosur #1 Airport Cab',
      desc: 'Premier airport cab service to Kempegowda BLR Airport. Fixed upfront rates, 0% cancellation, live flight tracking, and terminal pickup.'
    },
    {
      id: 'airport-pickup-drop',
      category: 'airport',
      keyword: 'Bangalore Airport Pickup and Drop from Hosur',
      title: 'Kempegowda Airport Arrival Pickup → Hosur',
      route: 'BLR Airport Arrivals → Hosur / Attibele / SIPCOT',
      pickupTime: 'Flight Tracking Included',
      distance: '80 KM',
      fare: 'Fixed ₹2,200 (Sedan) / ₹2,800 (SUV)',
      fleet: 'AC Dzire & Ertiga',
      badge: 'Flight Radar Tracking',
      highlight: 'Zero Waiting Fee',
      desc: 'Hassle-free airport arrivals. Your driver tracks your flight status and waits at the pickup curb even if your flight is delayed.'
    }
  ];

  // Filter based on active category and search input
  const filteredKeywords = useMemo(() => {
    return searchKeywordsData.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.keyword.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.route.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.fleet.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="google-search-directory" className="py-16 md:py-24 border-b border-white/5 bg-[#0a0d15] text-left relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-black uppercase tracking-wider">
            <Search className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Hosur 24/7 Taxi Search &amp; Route Matrix</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Top Cab Bookings &amp; Search Routes in <span className="text-brand-yellow text-glow-yellow">Hosur</span>
          </h2>

          <p className="text-xs sm:text-sm text-brand-silver font-medium leading-relaxed max-w-2xl mx-auto">
            Looking for a <strong className="text-white">Call Taxi Near Me</strong>, <strong className="text-white">Outstation Taxi in Hosur</strong>, or <strong className="text-white">Hosur to Bangalore Airport Taxi</strong>? Browse popular routes below for instant transparent fares and one-click booking.
          </p>
        </div>

        {/* SEARCH BAR & CATEGORY TABS */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Live Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-brand-yellow absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by area or route (e.g. Railway Station, SIPCOT, Bagalur, Airport, Chennai)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-charcoal/90 border border-white/10 hover:border-brand-yellow/40 focus:border-brand-yellow rounded-2xl pl-12 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-brand-gray shadow-xl focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-brand-gray hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'all', label: 'All Services', icon: Sparkles },
              { id: 'local', label: 'Local Hosur Cabs', icon: MapPin },
              { id: 'outstation', label: 'Outstation Drop Taxi', icon: Navigation },
              { id: 'airport', label: 'Bangalore Airport Cabs', icon: Plane }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-extrabold flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-yellow text-brand-black border-brand-yellow shadow-[0_0_15px_rgba(255,212,59,0.25)]'
                      : 'bg-white/5 border-white/5 text-brand-silver hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-black' : 'text-brand-yellow'}`} />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* DYNAMIC SEARCH KEYWORD CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredKeywords.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-brand-charcoal/60 border border-white/10 hover:border-brand-yellow/40 backdrop-blur-md transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-brand-yellow px-2 py-0.5 rounded bg-brand-yellow/10 border border-brand-yellow/20">
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.pickupTime}</span>
                  </span>
                </div>

                {/* Primary Keyword Title */}
                <h3 className="text-sm font-black text-white group-hover:text-brand-yellow transition-colors leading-tight">
                  {item.keyword}
                </h3>
                <p className="text-xs text-brand-silver/80 leading-relaxed font-medium">
                  {item.desc}
                </p>

                <div className="text-xs font-bold text-brand-yellow">
                  {item.fare}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <a
                  href="tel:+919944271322"
                  className="flex-1 py-2 px-3 rounded-xl bg-brand-yellow text-brand-black font-extrabold text-xs flex items-center justify-center space-x-1.5 hover:brightness-110 active:scale-95 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 fill-brand-black" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/919944271322?text=Hello%20Yuva%20Call%20Taxi,%20I%20would%20like%20to%20book%20${encodeURIComponent(item.keyword)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center hover:brightness-110 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
