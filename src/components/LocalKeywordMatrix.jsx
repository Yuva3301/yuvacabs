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
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Top Customer Search Route Keywords on Google
  const searchKeywordsData = [
    // --- 1. LOCAL HOSUR TAXI KEYWORDS ---
    {
      id: 'local-railway-station',
      category: 'local',
      keyword: 'Hosur Railway Station Taxi',
      title: 'Hosur Railway Station Taxi Stand (Platforms 1 & 2)',
      route: 'Hosur Railway Station ⇄ Anywhere in Hosur & Outstation',
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
      route: 'Hosur Bus Stand ⇄ Local Areas & Industrial Zones',
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
      keyword: 'Call Taxi in SIPCOT Hosur',
      title: 'SIPCOT Phase 1 & Phase 2 Industrial Cabs',
      route: 'SIPCOT Industrial Belt ⇄ Hosur Town / Railway Station',
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
      keyword: 'Taxi in Bagalur & Bagalur Road',
      title: 'Bagalur Road & Bagalur Junction Taxi Service',
      route: 'Bagalur Road ⇄ Hosur Central / Attibele / BLR',
      pickupTime: '5 - 10 Mins Pickup',
      distance: 'Local Arterial',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Dzire, Etios & Ertiga',
      badge: 'Key Arterial Corridor',
      highlight: 'Fast Pickup',
      desc: 'Reliable call taxi on Bagalur Road, Bagalur town, and ring road bypass. Clean AC cars with courteous local drivers.'
    },
    {
      id: 'local-bathalapalli',
      category: 'local',
      keyword: 'Taxi in Bathalapalli Hosur',
      title: 'Bathalapalli Wholesale Market & Residential Cabs',
      route: 'Bathalapalli ⇄ Hosur Railway Station / Bus Stand',
      pickupTime: '5 - 10 Mins Pickup',
      distance: 'Local City',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Sedans & 6-Seater SUVs',
      badge: 'Market & Residential Hub',
      highlight: 'Local Favorite',
      desc: 'Convenient taxi service in Bathalapalli for vegetable market traders, residential colonies, and highway drops.'
    },
    {
      id: 'local-mookandapalli',
      category: 'local',
      keyword: 'Taxi in Mookandapalli & Zuzuvadi',
      title: 'Mookandapalli, Zuzuvadi Checkpost & Moranapalli Cabs',
      route: 'Mookandapalli ⇄ Hosur City / Attibele Border',
      pickupTime: '5 - 8 Mins Pickup',
      distance: 'Local / Border Zone',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Sedan, SUV & Tempo',
      badge: 'Industrial & Border Hub',
      highlight: 'Express Dispatch',
      desc: 'On-demand taxi service across Mookandapalli, Zuzuvadi, Moranapalli, and SIPCOT arterial routes with immediate arrival.'
    },
    {
      id: 'local-mathigiri',
      category: 'local',
      keyword: 'Taxi Service Mathigiri & Dinnur',
      title: 'Mathigiri, Dinnur Circle & Sanasandiram Cabs',
      route: 'Mathigiri / Dinnur ⇄ Hosur Railway Station & Market',
      pickupTime: '5 - 10 Mins Pickup',
      distance: 'Local City',
      fare: 'Starts @ ₹150 (4 KM Min)',
      fleet: 'Hatchback & Sedan',
      badge: 'Residential Town Hub',
      highlight: 'Affordable Rates',
      desc: '24/7 doorstep pickup across Mathigiri town, Dinnur, Jeeva Nagar, Sanasandiram, and Kelamangalam Road.'
    },
    {
      id: 'local-attibele',
      category: 'local',
      keyword: 'Attibele Taxi Service',
      title: 'Attibele Circle & Border Toll Cabs',
      route: 'Attibele Toll ⇄ Hosur / Electronic City / Bangalore',
      pickupTime: '5 - 10 Mins Pickup',
      distance: 'Interstate Border',
      fare: 'Starts @ ₹10/KM or Fixed',
      fleet: 'Swift Dzire & Ertiga SUV',
      badge: 'Interstate Border Corridor',
      highlight: 'Border Specialist',
      desc: 'Quick cross-border connectivity between Attibele border, Hosur, Bommasandra, and Electronic City IT corridor.'
    },

    // --- 2. OUTSTATION & DROP TAXI KEYWORDS ---
    {
      id: 'outstation-chennai',
      category: 'outstation',
      keyword: 'Hosur to Chennai Drop Taxi',
      title: 'Hosur ⇄ Chennai One-Way Drop & Round Trip Taxi',
      route: 'Hosur ⇄ Chennai (Central / Airport / OMR / Tambaram)',
      pickupTime: 'Scheduled / 15 Mins',
      distance: '310 KM (5.5 Hrs)',
      fare: 'Starts @ ₹9/KM (One-Way Drop)',
      fleet: 'Swift Dzire, Etios, Ertiga & Innova Crysta',
      badge: 'NH48 Expressway Special',
      highlight: 'Best Value Drop Taxi',
      desc: 'Affordable one-way drop taxi to Chennai. Pay only for the one-way distance without return charges. Smooth highway drive via NH48.'
    },
    {
      id: 'outstation-bangalore',
      category: 'outstation',
      keyword: 'Hosur to Bangalore Taxi',
      title: 'Hosur ⇄ Bangalore City & IT Corridor Cabs',
      route: 'Hosur ⇄ Electronic City / Silk Board / Whitefield / Majestic',
      pickupTime: 'Immediate / 10 Mins',
      distance: '35 - 55 KM (45 - 75 Mins)',
      fare: 'Starts @ ₹10/KM or Flat Package',
      fleet: 'Sedan (Dzire) & SUV (Ertiga)',
      badge: 'Daily Commute Corridor',
      highlight: 'Popular Daily Route',
      desc: 'Daily inter-state travel for software professionals and business travelers between Hosur and Bangalore IT campuses.'
    },
    {
      id: 'outstation-salem',
      category: 'outstation',
      keyword: 'Hosur to Salem Drop Taxi',
      title: 'Hosur ⇄ Salem City / Junction Drop Taxi',
      route: 'Hosur ⇄ Salem via Dharmapuri & NH44 Expressway',
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
      title: 'Hosur ⇄ Coimbatore (City / Airport / Gandhipuram)',
      route: 'Hosur ⇄ Coimbatore via Salem & Erode (NH544)',
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
      title: 'Hosur ⇄ Tirupati Balaji Temple Darshan Cabs',
      route: 'Hosur ⇄ Tirumala / Tirupati via Chittoor & Palamaner',
      pickupTime: 'Dedicated Booking',
      distance: '245 KM (4.5 Hrs)',
      fare: 'Starts @ ₹9/KM (Darshan Wait Inc.)',
      fleet: 'Innova Crysta, Ertiga & Sedans',
      badge: 'Pilgrimage Darshan Package',
      highlight: 'Temple Specialist',
      desc: 'Complete Tirupati Balaji pilgrimage cab packages with temple wait-time included. Safe mountain ghat road navigation.'
    },
    {
      id: 'outstation-pondicherry',
      category: 'outstation',
      keyword: 'Hosur to Pondicherry Cab',
      title: 'Hosur ⇄ Pondicherry (White Town / Promenade Beach)',
      route: 'Hosur ⇄ Pondicherry via Tiruvannamalai / Tindivanam',
      pickupTime: 'Scheduled / 20 Mins',
      distance: '260 KM (5 Hrs)',
      fare: 'Starts @ ₹9/KM',
      fleet: 'Sedans & Executive SUVs',
      badge: 'Weekend Beach Getaway',
      highlight: 'Holiday Favorite',
      desc: 'Relaxing weekend beach trip to Pondicherry. Transparent billing, flexible scenic stopovers, and zero surge pricing.'
    },
    {
      id: 'outstation-trichy-madurai',
      category: 'outstation',
      keyword: 'Hosur to Trichy & Madurai Drop Taxi',
      title: 'Hosur ⇄ Trichy / Madurai Central Drop Taxi',
      route: 'Hosur ⇄ Trichy / Madurai via NH44 & Namakkal',
      pickupTime: 'Scheduled / 20 Mins',
      distance: '300 - 390 KM (5 - 6.5 Hrs)',
      fare: 'Starts @ ₹9/KM',
      fleet: 'Swift Dzire & Innova Crysta',
      badge: 'South Tamil Nadu Express',
      highlight: 'Lowest Per KM Rate',
      desc: 'One-way drop taxi service to Trichy, Madurai, Dindigul, and Karur with 100% on-time departure guarantee.'
    },
    {
      id: 'outstation-innova-tempo',
      category: 'outstation',
      keyword: 'Innova Crysta & Tempo Traveller Rental Hosur',
      title: '7-Seater Innova & 12-16 Seater Tempo Traveller Rental',
      route: 'Hosur ⇄ All India Tours, Marriages & Pilgrimages',
      pickupTime: 'Advance Reservation',
      distance: 'Custom Outstation',
      fare: 'Best Group Rate / Flat Package',
      fleet: 'Innova Crysta & Tempo Travellers',
      badge: 'Luxury Group Travel',
      highlight: 'Family & Corporate',
      desc: 'Spacious 7-seater Innova Crysta and 12-16 seater Tempo Travellers for marriage events, corporate outings, and family vacations.'
    },

    // --- 3. AIRPORT TAXI KEYWORDS ---
    {
      id: 'airport-blr-hosur',
      category: 'airport',
      keyword: 'Bangalore Airport Taxi from Hosur',
      title: 'Hosur ⇄ Kempegowda International Airport (BLR) T1 & T2',
      route: 'Hosur Central / SIPCOT ⇄ Kempegowda Airport Bengaluru',
      pickupTime: '24/7 Guaranteed (2 AM - 4 AM)',
      distance: '78 - 82 KM (75 - 90 Mins)',
      fare: 'Swift Dzire Fixed ₹2,200 | Ertiga ₹2,800',
      fleet: 'Swift Dzire, Etios, Ertiga & Innova Crysta',
      badge: '100% Flight On-Time Guarantee',
      highlight: 'Hosur #1 Airport Cab',
      desc: 'Hosurs premier airport cab service to Kempegowda BLR Airport. Fixed upfront rates, 0% cancellation, live flight delay tracking, and terminal meet & greet.'
    },
    {
      id: 'airport-sipcot-blr',
      category: 'airport',
      keyword: 'SIPCOT Hosur to Bangalore Airport Taxi',
      title: 'SIPCOT Phase 1 & 2 ⇄ Kempegowda Airport (BLR)',
      route: 'SIPCOT Industrial Zones ⇄ BLR Airport Terminal 1 & 2',
      pickupTime: '24/7 Priority Dispatch',
      distance: '82 KM (85 Mins)',
      fare: 'Dzire Fixed ₹2,300 | SUV ₹2,900',
      fleet: 'Executive AC Sedans & Crysta',
      badge: 'Corporate Airport Transit',
      highlight: 'GST Bill Included',
      desc: 'Direct corporate flight transit from SIPCOT manufacturing facilities to Kempegowda Airport with instant digital GST billing for reimbursement.'
    },
    {
      id: 'airport-bagalur-attibele',
      category: 'airport',
      keyword: 'Bagalur & Attibele to Bangalore Airport Taxi',
      title: 'Bagalur & Attibele Border ⇄ Kempegowda Airport (BLR)',
      route: 'Bagalur / Attibele ⇄ BLR Airport via STRR Expressway',
      pickupTime: '24/7 Available',
      distance: '65 - 72 KM (65 - 75 Mins)',
      fare: 'Dzire Fixed ₹2,100 | SUV ₹2,600',
      fleet: 'Sedan & 6-Seater SUV',
      badge: 'Fast STRR Ring Road Route',
      highlight: 'Shortest Route',
      desc: 'Fastest route to Bangalore Airport via Satellite Town Ring Road (STRR). Avoid city traffic bottlenecks and arrive on time.'
    },
    {
      id: 'airport-krishnagiri-blr',
      category: 'airport',
      keyword: 'Krishnagiri to Bangalore Airport Taxi',
      title: 'Krishnagiri Central ⇄ Kempegowda Airport (BLR)',
      route: 'Krishnagiri NH44 ⇄ Bangalore Kempegowda Airport BLR',
      pickupTime: 'Scheduled 24/7',
      distance: '130 KM (130 Mins)',
      fare: 'Sedan ₹3,400 | SUV ₹4,400',
      fleet: 'Swift Dzire & Innova Crysta',
      badge: 'NH44 Express Airport Corridor',
      highlight: 'Highway Reliability',
      desc: 'Comfortable long-distance airport transit from Krishnagiri town to Kempegowda Airport with professional chauffeurs and ample luggage room.'
    }
  ];

  // 36 Comprehensive Micro-Localities in Hosur that Customers Search
  const hosurLocalitiesList = [
    'Hosur Railway Station', 'Hosur Central Bus Stand', 'Hosur New Bus Stand', 'SIPCOT Phase 1',
    'SIPCOT Phase 2', 'Bagalur Road', 'Bagalur Town', 'Bathalapalli', 'Mookandapalli', 'Zuzuvadi',
    'Mathigiri', 'Dinnur Circle', 'Sanasandiram', 'Jeeva Nagar', 'Avalapalli', 'Denkanikottai Road',
    'Kelamangalam Road', 'Attibele Border', 'Berigai', 'Shoolagiri', 'Rayakottai Road', 'Krishnagiri',
    'TVS Motor Corridor', 'Titan Township', 'Ashok Leyland Hub', 'Moranapalli', 'TANSIDCO', 'Kamaraj Colony',
    'Old Bengaluru Road', 'MG Road Hosur', 'Thally Road', 'Hosur IT Park', 'Viswanathapuram', 'Adagurukki',
    'Doripalli', 'Anekal'
  ];

  // Frequently Asked Questions by Customers Searching on Google
  const customerSearchFaqs = [
    {
      q: 'Which is the most reliable call taxi service in Hosur for 24/7 bookings?',
      a: 'YUVA CALL TAXI (Phone: +91 99442 71322) is rated Hosur\'s most reliable 24/7 cab service. We have vehicles stationed at Hosur Railway Station, New Bus Stand, SIPCOT Phase 1 & 2, and Bagalur Road with an average arrival time of 3 to 7 minutes.'
    },
    {
      q: 'What is the starting fare for local cab booking in Hosur?',
      a: 'Local taxi service in Hosur starts at just ₹150 for the first 4 kilometers for Non-A/C Hatchback (₹180 for A/C). For Sedans (Swift Dzire/Toyota Etios), it starts at ₹180 Non-A/C (₹220 A/C), with clear and transparent per-kilometer rates thereafter.'
    },
    {
      q: 'Does Yuva Call Taxi offer one-way drop taxi from Hosur to Chennai and Salem?',
      a: 'Yes, we specialize in one-way outstation drop taxis starting at just ₹9/km. For one-way drops to Chennai, Salem, Coimbatore, or Trichy, you only pay for the one-way kilometers travelled — with zero return fare charges!'
    },
    {
      q: 'How much is the taxi fare from Hosur to Kempegowda International Airport (BLR)?',
      a: 'The taxi fare from Hosur to Bangalore Airport (BLR) is a fixed rate of ₹2,100 to ₹2,200 for a Swift Dzire / Toyota Etios Sedan, and ₹2,800 for a 6-seater Maruti Ertiga SUV. There are zero surge charges, even for 3 AM or 4 AM midnight flights.'
    },
    {
      q: 'Can I book a 7-seater Innova Crysta or Tempo Traveller for outstation family trips?',
      a: 'Yes! We maintain a fleet of premium Toyota Innova Crysta (6 & 7 seaters) and 12-to-16 seater Force Tempo Travellers, ideal for marriage functions, temple tours (Tirupati, Palani, Madurai), and family holidays.'
    },
    {
      q: 'How do I book an emergency or night taxi in Hosur?',
      a: 'You can instantly book a cab 24/7 by calling our direct hotline +91 99442 71322 or messaging us on WhatsApp. Our dispatch team is active 24 hours a day with 0% cancellation guarantee.'
    }
  ];

  // Filter based on active category and user search input
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

  const handleBookingClick = (item, type = 'call') => {
    if (type === 'call') {
      window.location.href = 'tel:+919944271322';
    } else {
      const message = `Hello Yuva Call Taxi! 🚖 I found your service on Google:%0A%0A` +
        `• *Service:* ${item.keyword}%0A` +
        `• *Route:* ${item.route}%0A` +
        `• *Rate:* ${item.fare}%0A` +
        `• *Fleet:* ${item.fleet}%0A%0A` +
        `Please confirm immediate/scheduled cab availability. Thank you!`;
      window.open(`https://wa.me/919944271322?text=${message}`, '_blank');
    }
  };

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
            Top Google Search Cab Bookings in <span className="text-brand-yellow text-glow-yellow">Hosur</span>
          </h2>

          <p className="text-xs sm:text-sm text-brand-silver font-medium leading-relaxed max-w-2xl mx-auto">
            Looking for a <strong className="text-white">Call Taxi Near Me</strong>, <strong className="text-white">Outstation Drop Taxi</strong>, or <strong className="text-white">Kempegowda Airport Cab</strong>? Browse all popular customer search routes below for instant fares, pickup timings, and one-click booking.
          </p>
        </div>

        {/* SEARCH BAR & CATEGORY TABS */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Live Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-brand-yellow absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword, area or route (e.g. Railway Station, Chennai, Airport, SIPCOT, Innova, Drop Taxi)..."
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

          {/* 3 Pillar Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'all', label: 'All Services (20+ Routes)', icon: Sparkles },
              { id: 'local', label: '📍 Local Hosur Cabs', icon: MapPin },
              { id: 'outstation', label: '🚗 Outstation & Drop Taxi', icon: Navigation },
              { id: 'airport', label: '✈️ Bangalore Airport Cabs', icon: Plane }
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

        {/* SEARCH RESULTS COUNT */}
        <div className="flex items-center justify-between text-xs text-brand-silver mb-6 px-1">
          <span>
            Showing <strong className="text-brand-yellow">{filteredKeywords.length}</strong> Google Search Cab Solutions
          </span>
          <a
            href="tel:+919944271322"
            className="text-brand-yellow hover:underline flex items-center space-x-1 font-bold"
          >
            <Phone className="w-3 h-3 fill-brand-yellow" />
            <span>24/7 Direct Dispatch: 99442 71322</span>
          </a>
        </div>

        {/* DYNAMIC SEARCH KEYWORD CARDS GRID */}
        {filteredKeywords.length === 0 ? (
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3">
            <Search className="w-8 h-8 text-brand-yellow mx-auto opacity-50" />
            <h3 className="text-base font-bold text-white">No routes matched "{searchQuery}"</h3>
            <p className="text-xs text-brand-silver">
              We service all of Hosur and interstate routes! Call us directly for an instant quote.
            </p>
            <a
              href="tel:+919944271322"
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-brand-yellow text-brand-black font-black text-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-brand-black" />
              <span>Call +91 99442 71322</span>
            </a>
          </div>
        ) : (
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

                  {/* Primary Google Targeted Keyword */}
                  <h3 className="text-sm font-black text-white group-hover:text-brand-yellow transition-colors leading-tight">
                    {item.keyword}
                  </h3>

                  {/* Route & Distance */}
                  <div className="space-y-1 text-xs text-brand-silver">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0 mt-0.5" />
                      <span className="font-bold text-white">{item.title}</span>
                    </div>
                    <div className="text-[11px] text-brand-gray pl-5">
                      {item.route}
                    </div>
                  </div>

                  {/* Rate & Fleet */}
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-brand-silver font-medium">Estimated Rate:</span>
                      <strong className="text-brand-yellow font-black">{item.fare}</strong>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-brand-silver/80">
                      <span>Fleet Options:</span>
                      <span className="font-medium text-white truncate max-w-[160px]">{item.fleet}</span>
                    </div>
                  </div>

                  {/* SEO Query Description */}
                  <p className="text-[11px] text-brand-silver/90 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5 mt-4">
                  <button
                    type="button"
                    onClick={() => handleBookingClick(item, 'call')}
                    className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-xs hover:brightness-105 active:scale-95 transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5 fill-brand-black" />
                    <span>Call Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleBookingClick(item, 'whatsapp')}
                    className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs active:scale-95 transition-all shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 36 MICRO-LOCALITIES DIRECTORY IN HOSUR */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-brand-charcoal/40 border border-white/10 backdrop-blur-md">
          <div className="text-left mb-6 space-y-1">
            <span className="text-[11px] font-black uppercase tracking-widest text-brand-yellow">
              Hyper-Local Coverage
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Instant 5–10 Min Cab Pickup Across 36+ Hosur Localities &amp; Industrial Hubs
            </h3>
            <p className="text-xs text-brand-silver">
              Our taxi network is stationed across every major junction in Hosur. Click any area to book directly.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {hosurLocalitiesList.map((area, idx) => (
              <a
                key={idx}
                href="tel:+919944271322"
                title={`Call taxi in ${area} Hosur`}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-brand-silver font-bold text-xs border border-white/5 hover:border-brand-yellow transition-all flex items-center space-x-1.5 group"
              >
                <MapPin className="w-3 h-3 text-brand-yellow group-hover:text-brand-black flex-shrink-0" />
                <span>{area}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CUSTOMER SEARCH INTENT FAQS (Google People Also Ask) */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="text-center mb-8 space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
              Google Search Insights
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Frequently Asked Questions for Hosur Cabs &amp; Outstation Travel
            </h3>
          </div>

          <div className="space-y-3">
            {customerSearchFaqs.map((faq, fIdx) => {
              const isOpen = expandedFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-white/10 bg-brand-charcoal/30 overflow-hidden text-left transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : fIdx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white flex items-center space-x-2">
                      <HelpCircle className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-brand-yellow transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 sm:px-5 text-xs text-brand-silver leading-relaxed font-medium border-t border-white/5 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
