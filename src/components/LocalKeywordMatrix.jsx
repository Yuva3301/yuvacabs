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
    // --- 1. LOCAL HOSUR TAXI HUBS ---
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
      route: 'Dinnur Main Road → Hosur Railway Station, Bus Stand & Markets',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'Residential Hub',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback & Sedan',
      badge: 'Office & Residential',
      highlight: 'Neighborhood Favorite',
      desc: 'Prompt doorstep pickup in Dinnur Main Road, Sanasandiram, and Avalapalli with 24/7 availability and zero surge pricing.'
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

    // --- 2. HOSUR COLONIES, NEIGHBORHOODS & NEARBY TOWNS (USER REQUESTED LOCATIONS) ---
    {
      id: 'town-rayakottai',
      category: 'neighborhoods',
      keyword: 'Rayakottai Taxi Service',
      title: 'Rayakottai & Rayakottai Housing Board Call Taxi',
      route: 'Rayakottai / Housing Board ⇄ Hosur / Krishnagiri / Bangalore Airport',
      pickupTime: '10 - 15 Mins Pickup',
      distance: 'Township Corridor (SH17 / NH844)',
      fare: 'Starts @ ₹9/km (One-Way & Round Trip)',
      fleet: 'Dzire, Etios, Ertiga & Innova',
      badge: 'Fort Town Hub',
      highlight: 'Top Rayakottai Cab',
      desc: '24/7 call taxi service in Rayakottai town and Rayakottai Housing Board. Fast pickup for local hospital visits, Hosur city commute, Krishnagiri trips, and direct Kempegowda Airport drops.'
    },
    {
      id: 'town-denkanikottai',
      category: 'neighborhoods',
      keyword: 'Denkanikottai Taxi Service',
      title: 'Denkanikottai Call Taxi & Cab Booking',
      route: 'Denkanikottai ⇄ Hosur / Thally / Bangalore Airport (BLR)',
      pickupTime: '12 - 15 Mins Pickup',
      distance: 'Taluk Headquarters (25 KM)',
      fare: 'Starts @ ₹9/km | Local & Outstation',
      fleet: 'Sedan (Dzire), Ertiga & Innova Crysta',
      badge: 'Taluk Hub',
      highlight: '24/7 Denkanikottai',
      desc: 'Top-rated taxi service in Denkanikottai. Immediate cabs to Hosur Railway Station, government offices, private hospitals, and Bengaluru International Airport with transparent per-km billing.'
    },
    {
      id: 'town-kelamangalam',
      category: 'neighborhoods',
      keyword: 'Kelamangalam Call Taxi',
      title: 'Kelamangalam Taxi Service & Cabs',
      route: 'Kelamangalam ⇄ Hosur Town / Mathigiri / SIPCOT Industrial Belts',
      pickupTime: '10 - 15 Mins Pickup',
      distance: 'Town Panchayat (18 KM)',
      fare: 'Starts @ ₹9/km | 24/7 Available',
      fleet: 'Hatchback, Sedan & SUV',
      badge: 'Satellite Town Hub',
      highlight: 'Fast Cab Dispatch',
      desc: 'Doorstep call taxi pickup in Kelamangalam town, railway gate, and industrial corridors. Seamless connections to Hosur town, Electronic City, and airport drops.'
    },
    {
      id: 'town-krishnagiri',
      category: 'neighborhoods',
      keyword: 'Krishnagiri to Hosur Taxi',
      title: 'Krishnagiri ⇄ Hosur Express Highway Cab',
      route: 'Krishnagiri (Old / New Bus Stand / Tollgate) ⇄ Hosur (NH44)',
      pickupTime: 'Immediate / 10 Mins',
      distance: '48 KM (45 Mins via 6-Lane NH44)',
      fare: 'Starts @ ₹9/km (One-Way Drop Available)',
      fleet: 'Swift Dzire, Etios, Ertiga & Innova Crysta',
      badge: 'District Highway Route',
      highlight: 'Zero Return Fare Drop',
      desc: 'Express highway taxi between Krishnagiri and Hosur along NH44. Pay only for one-way distance with zero return charges. Perfect for Collectorate visits, court, bus stand, and hospital transit.'
    },
    {
      id: 'local-bathalapalli',
      category: 'neighborhoods',
      keyword: 'Bathalapalli Taxi Service Hosur',
      title: 'Bathalapalli Wholesale Market & Industrial Cabs',
      route: 'Bathalapalli ⇄ Hosur Railway Station / Bus Stand / SIPCOT',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'Local Market & Industry Hub',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback & Sedan (Dzire/Etios)',
      badge: 'Commercial Hub',
      highlight: '5-Min Fast Pickup',
      desc: 'Looking for a call taxi near Bathalapalli? Dedicated cabs stationed 24/7 near Bathalapalli vegetable market, industrial units, and Ring Road for instant city drops.'
    },
    {
      id: 'local-alasanatham',
      category: 'neighborhoods',
      keyword: 'Alasanatham Taxi Service Hosur',
      title: 'Alasanatham Road & Alasanatham Lake Area Cabs',
      route: 'Alasanatham ⇄ Hosur Town / Railway Station / Bus Stand',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'Core Residential Zone',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Sedan & Hatchback',
      badge: 'Residential Favorite',
      highlight: 'Doorstep Pickup',
      desc: 'Fast 24/7 call taxi in Alasanatham, Alasanatham Road, and nearby residential wards. Clean AC cars for school, shopping, clinic, and railway station transfers.'
    },
    {
      id: 'town-berigai',
      category: 'neighborhoods',
      keyword: 'Berigai Call Taxi Service',
      title: 'Berigai Town & East Hosur Border Corridor Cabs',
      route: 'Berigai ⇄ Bagalur / Hosur Town / Malur',
      pickupTime: '12 - 15 Mins Pickup',
      distance: 'Border Town Hub (22 KM)',
      fare: 'Starts @ ₹9/km | Local & Drop Taxi',
      fleet: 'Hatchback, Sedan & Ertiga SUV',
      badge: 'Border Corridor',
      highlight: 'Safe Family Travel',
      desc: 'Safe and dependable taxi service connecting Berigai to Hosur town, Bagalur, and Karnataka border areas. Available 24 hours with polite, verified local drivers.'
    },
    {
      id: 'local-anthivadi',
      category: 'neighborhoods',
      keyword: 'Anthivadi Taxi Service Hosur',
      title: 'Anthivadi Stadium & Anthivadi Circle Cabs',
      route: 'Anthivadi ⇄ Hosur Railway Station / Bus Stand / SIPCOT',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'Sports & Residential Hub',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'AC Dzire & Hatchback',
      badge: 'Stadium Zone',
      highlight: 'Instant City Drop',
      desc: '24/7 cab booking in Anthivadi, Anthivadi Stadium, and surrounding colonies. Transparent fares with zero surge charges and instant GPS-tracked dispatch.'
    },
    {
      id: 'local-sbm-colony',
      category: 'neighborhoods',
      keyword: 'SBM Colony Taxi Hosur',
      title: 'SBM Colony & Avalapalli Road Call Taxi',
      route: 'SBM Colony ⇄ Hosur Central / Railway Station / Airport',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'Premier Residential Colony',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Swift Dzire & Ertiga',
      badge: 'Colony Specialist',
      highlight: 'Safe Senior & Family Cab',
      desc: 'Premier neighborhood cab service for SBM Colony residents. Safe family chauffeurs, clean sanitized cars for local medical visits and outstation getaways.'
    },
    {
      id: 'local-navadhi',
      category: 'neighborhoods',
      keyword: 'Navadhi Call Taxi Hosur',
      title: 'Navadhi & Mathigiri Road Cabs',
      route: 'Navadhi ⇄ Hosur Railway Station / SIPCOT / Town Center',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'Residential Belt',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback & Sedan',
      badge: 'Lake & Town Belt',
      highlight: '5-Min Fast Dispatch',
      desc: 'Fast doorstep pickup in Navadhi and Navadhi Lake area. Available 24 hours for midnight medical emergencies and daily morning work commutes.'
    },
    {
      id: 'town-anekal',
      category: 'neighborhoods',
      keyword: 'Anekal to Hosur Taxi',
      title: 'Hosur ⇄ Anekal Town & Railway Station Cabs',
      route: 'Hosur ⇄ Anekal / Jigani / Chandapura / Attibele',
      pickupTime: '10 - 15 Mins Pickup',
      distance: 'Inter-State Border (14 KM)',
      fare: 'Starts @ ₹10/km or Flat Package',
      fleet: 'Swift Dzire, Etios & Ertiga',
      badge: 'TN-KA Border Hub',
      highlight: 'Daily Border Commute',
      desc: 'Direct inter-state cab service between Hosur and Anekal. Quick commute for factory engineers, college students, and hospital visits with zero border hassle.'
    },
    {
      id: 'local-poonapalli',
      category: 'neighborhoods',
      keyword: 'Poonapalli Taxi Service Hosur',
      title: 'Poonapalli Village & Ring Road Cabs',
      route: 'Poonapalli ⇄ Hosur Bus Stand / SIPCOT / Railway Station',
      pickupTime: '5 - 10 Mins Pickup',
      distance: 'Ring Road Belt',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback & Sedan',
      badge: 'Outer Ring Belt',
      highlight: '24/7 Availability',
      desc: 'Doorstep taxi pickup in Poonapalli village and surrounding layouts with clear per-km billing and courteous professional drivers.'
    },
    {
      id: 'town-belagondapalli',
      category: 'neighborhoods',
      keyword: 'Belagondapalli Taxi Service',
      title: 'Belagondapalli & Mathakondapalli Industrial Cabs',
      route: 'Belagondapalli / Mathakondapalli ⇄ Hosur / Thally / BLR Airport',
      pickupTime: '8 - 12 Mins Pickup',
      distance: 'Thally Road Industrial Hub',
      fare: 'Starts @ ₹9/km | Local & Shift Drops',
      fleet: 'Dzire, Etios, Ertiga & Tempo Traveller',
      badge: 'Manufacturing Hub',
      highlight: 'Industrial Fleet',
      desc: 'Dedicated cabs for manufacturing units, industrial workers, and residents across Belagondapalli and Mathakondapalli corridors on Thally Road.'
    },
    {
      id: 'town-thally',
      category: 'neighborhoods',
      keyword: 'Thally Taxi Service Hosur',
      title: 'Thally Town & Little England Cabs',
      route: 'Thally ⇄ Hosur / Denkanikottai / Bangalore',
      pickupTime: '15 Mins Pickup',
      distance: 'Scenic Hill Belt (28 KM)',
      fare: 'Starts @ ₹9/km | One-Way & Round Trip',
      fleet: 'AC Sedan & Innova Crysta',
      badge: 'Border Hill Town',
      highlight: 'Scenic & Darshan Tours',
      desc: 'Reliable call taxi service in Thally border town. Comfortable AC cars for trips to Hosur town, hospitals, and Kempegowda Bengaluru Airport.'
    },
    {
      id: 'local-perandapalli',
      category: 'neighborhoods',
      keyword: 'Perandapalli Call Taxi',
      title: 'Perandapalli & Kothur Industrial Belt Cabs',
      route: 'Perandapalli / Kothur ⇄ SIPCOT Phase 2 / Hosur Town',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'SIPCOT Expansion Zone',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback, Sedan & SUV',
      badge: 'SIPCOT Phase 2 Hub',
      highlight: 'Industrial Priority',
      desc: 'Quick cab arrivals in Perandapalli, Kothur, and NH44 bypass corridor for shift commutes, family outings, and outstation drops.'
    },
    {
      id: 'local-muneeswar-nagar',
      category: 'neighborhoods',
      keyword: 'Muneeswar Nagar Call Taxi Hosur',
      title: 'Muneeswar Nagar & Kamaraj Colony Cabs',
      route: 'Muneeswar Nagar ⇄ Hosur Railway Station / Bus Stand / Market',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'High-Density Residential',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback & Sedan',
      badge: 'Residential Hub',
      highlight: 'Fast Local Pickup',
      desc: 'Fast 24/7 residential call taxi in Muneeswar Nagar. Affordable rates starting from ₹150 with verified, courteous local drivers.'
    },

    // --- 3. OUTSTATION & DROP TAXI KEYWORDS ---
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

    // --- 4. AIRPORT TAXI KEYWORDS ---
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
            <span>Hosur &amp; Nearby Towns 24/7 Taxi Network</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Top Cab Bookings &amp; Search Routes in <span className="text-brand-yellow text-glow-yellow">Hosur &amp; Surrounding Areas</span>
          </h2>

          <p className="text-xs sm:text-sm text-brand-silver font-medium leading-relaxed max-w-2xl mx-auto">
            Looking for a <strong className="text-white">Call Taxi Near Me</strong> in Hosur, Rayakottai, Denkanikottai, Kelamangalam, Krishnagiri, Bathalapalli, Anekal, or SBM Colony? Browse below for instant transparent fares and one-click booking.
          </p>
        </div>

        {/* SEARCH BAR & CATEGORY TABS */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Live Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-brand-yellow absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search area (e.g. Rayakottai, Denkanikottai, Bathalapalli, Krishnagiri, Anekal, SBM Colony, Kelamangalam)..."
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
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { id: 'all', label: 'All Locations', icon: Sparkles },
              { id: 'local', label: 'Hosur Hubs', icon: MapPin },
              { id: 'neighborhoods', label: 'Colonies & Towns', icon: Building2 },
              { id: 'outstation', label: 'Outstation Drop', icon: Navigation },
              { id: 'airport', label: 'BLR Airport Cabs', icon: Plane }
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

                {/* Route & Pricing Spec */}
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs">
                  <div className="flex items-start space-x-1.5 text-brand-silver">
                    <Navigation className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] font-semibold text-white/90">{item.route}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] font-bold text-brand-gray">{item.fleet}</span>
                    <span className="text-xs font-black text-brand-yellow">{item.fare}</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-2 pt-4 mt-3 border-t border-white/5">
                <a
                  href="tel:+919944271322"
                  className="flex-1 py-2.5 rounded-xl bg-brand-yellow text-brand-black font-black text-xs text-center flex items-center justify-center space-x-1 shadow-md hover:brightness-105 active:scale-95 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 fill-brand-black" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/919944271322?text=Hello%20Yuva%20Call%20Taxi!%20I%20want%20to%20book%20a%20cab%20in%20${encodeURIComponent(item.keyword)}.%20Please%20share%20fare%20and%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#25D366] text-white font-black text-xs text-center flex items-center justify-center space-x-1 shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Notice */}
        <div className="text-center mt-10 pt-6 border-t border-white/5">
          <p className="text-xs text-brand-gray">
            Need a pickup from any other locality in or around Hosur? Call our 24/7 dispatch desk directly at{' '}
            <a href="tel:+919944271322" className="text-brand-yellow font-bold hover:underline">
              +91 99442 71322
            </a>{' '}
            for instant cab arrival in 5–10 minutes.
          </p>
        </div>

      </div>
    </section>
  );
}
