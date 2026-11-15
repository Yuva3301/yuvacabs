import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MessageSquare, MapPin, Clock, ShieldCheck, CheckCircle2,
  Star, Car, Navigation, Sparkles, ArrowLeft, Sun, Moon,
  Building2, Users, Zap, Search, ChevronRight, Check
} from 'lucide-react';
import LocalTaxiSEO from './LocalTaxiSEO';

const PHONE = '+919944271322';
const DISPLAY_PHONE = '+91 99442 71322';
const WHATSAPP = `https://wa.me/919944271322`;
const GOOGLE_MAP = 'https://maps.app.goo.gl/gHwiq68N6k8QekBt8';

const fleets = [
  {
    name: 'Hatchback', sub: 'Tiago / Indica / Figo', seats: '4+1',
    minFare: '₹150', perKm: '₹10/km', ac: '₹180 min | ₹11/km',
    best: 'Budget local runs & quick city hops across Hosur',
    tag: 'Economy', color: 'from-slate-500 to-slate-700'
  },
  {
    name: 'Premium Sedan', sub: 'Swift Dzire / Toyota Etios', seats: '4+1',
    minFare: '₹180', perKm: '₹11/km', ac: '₹220 min | ₹12/km',
    best: 'Railway station, corporate & family city rides',
    tag: 'Most Popular', color: 'from-brand-yellow to-brand-gold', highlight: true
  },
  {
    name: 'Executive SUV', sub: 'Ertiga / XUV / Triber', seats: '6+1',
    minFare: '₹220', perKm: '₹15/km', ac: '₹280 min | ₹16/km',
    best: 'Family outings & medium-group local rides in Hosur',
    tag: 'Spacious', color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Innova Crysta', sub: 'Luxury 7-Seater MPV', seats: '7+1',
    minFare: '₹350', perKm: '₹18/km', ac: '₹400 min | ₹20/km',
    best: 'VIP city commute, weddings & corporate visits',
    tag: 'Premium', color: 'from-purple-600 to-purple-800'
  },
];

const popularLocalRoutes = [
  { from: 'Hosur Bus Stand', to: 'Hosur Railway Station', distance: '3 km', time: '8 min', fare: '₹150 (Hatchback) / ₹180 (Sedan)' },
  { from: 'Railway Station / Bus Stand', to: 'SIPCOT Phase 1 & 2', distance: '6-9 km', time: '12 min', fare: '₹180 - ₹240' },
  { from: 'Hosur City Center', to: 'Bathalapalli Market', distance: '5 km', time: '10 min', fare: '₹160 - ₹200' },
  { from: 'Hosur Town', to: 'Rayakottai / Housing Board', distance: '28 km', time: '35 min', fare: '₹450 - ₹550' },
  { from: 'Hosur Town', to: 'Denkanikottai Taluk', distance: '26 km', time: '35 min', fare: '₹550 - ₹650' },
  { from: 'Hosur City', to: 'Kelamangalam Town', distance: '20 km', time: '25 min', fare: '₹400 - ₹500' },
  { from: 'Hosur Central', to: 'Anekal / Attibele Border', distance: '12 km', time: '18 min', fare: '₹280 - ₹350' },
  { from: 'Hosur City', to: 'Kempegowda Airport (BLR)', distance: '78 km', time: '75 min', fare: 'Fixed ₹2,200 (Sedan)' },
];

const quickHotspots = [
  { name: 'Hosur Railway Station', wait: '3 min pickup', desc: 'Stationed at Platform 1 & 2 exit gates' },
  { name: 'Hosur Central Bus Stand', wait: '3 min pickup', desc: 'Direct pickup at main entry & taxi stand' },
  { name: 'SIPCOT Phase 1 & 2', wait: '5-8 min pickup', desc: 'TVS, Ashok Leyland & Titan industrial units' },
  { name: 'Bathalapalli Wholesale', wait: '5 min pickup', desc: 'Near vegetable market & ring road' },
  { name: 'Dinnur & Jeeva Nagar', wait: '3-5 min pickup', desc: 'Local neighborhood & residential dispatch' },
  { name: 'Rayakottai & Housing Board', wait: '10-15 min pickup', desc: 'Township, bus stand & direct airport cabs' },
];

const localZones = [
  { zone: 'Railway Station & Central Hubs', icon: Navigation, areas: ['Hosur Railway Station', 'Hosur Central Bus Stand', 'Dinnur Main Road', 'Jeeva Nagar', 'Station Road'], time: '3-5 min' },
  { zone: 'SIPCOT & Industrial Corridors', icon: Building2, areas: ['SIPCOT Phase 1', 'SIPCOT Phase 2', 'Perandapalli', 'Kothur', 'TVS Motor Corridor', 'Titan Township', 'Ashok Leyland'], time: '5-8 min' },
  { zone: 'Core Residential Colonies', icon: Users, areas: ['Alasanatham Road', 'SBM Colony', 'Anthivadi Stadium', 'Muneeswar Nagar', 'Navadhi Lake', 'Mathigiri Town', 'Avalapalli'], time: '5-8 min' },
  { zone: 'Market & Manufacturing Belts', icon: Car, areas: ['Bathalapalli Wholesale Market', 'Belagondapalli', 'Mathakondapalli', 'Poonapalli', 'Mookandapalli', 'Moranapalli'], time: '5-10 min' },
  { zone: 'Rayakottai & Taluk Corridors', icon: MapPin, areas: ['Rayakottai Town', 'Rayakottai Housing Board', 'Denkanikottai Taluk', 'Kelamangalam Town'], time: '10-15 min' },
  { zone: 'Border Corridors & Satellite Towns', icon: Zap, areas: ['Anekal Town', 'Krishnagiri Highway (NH44)', 'Thally Little England', 'Berigai', 'Attibele Border'], time: '10-15 min' },
];

const faqs = [
  { q: 'What is the phone number for Call Taxi in Hosur?', a: 'The direct 24/7 hotline for Yuva Call Taxi Hosur is +91 99442 71322. Call anytime for instant cab dispatch within 5 to 10 minutes.' },
  { q: 'What is the minimum fare for local taxi service in Hosur?', a: 'Local taxi service in Hosur starts at ₹150 for the first 4 kilometers for Non-A/C Hatchback (₹180 for A/C). Sedan cabs (Swift Dzire/Etios) start from ₹180 Non-A/C and ₹220 A/C with transparent per-km billing thereafter and zero surge pricing.' },
  { q: 'How fast is your local cab pickup in Hosur?', a: 'Our nearest GPS-tracked driver arrives in 3 to 10 minutes across all Hosur areas. Railway Station and Bus Stand pickups average 3 to 5 minutes, while SIPCOT, Bathalapalli, and residential colonies average 5 to 8 minutes.' },
  { q: 'Do you provide taxi service in Rayakottai and Rayakottai Housing Board?', a: 'Yes! Yuva Call Taxi provides 24/7 call taxi service in Rayakottai and Rayakottai Housing Board. We offer swift local pickups, direct trips to Hosur city, Krishnagiri, and Kempegowda International Airport drops starting at ₹9/km.' },
  { q: 'Is cab service available in Denkanikottai, Kelamangalam, and Thally?', a: 'Yes! We cover Denkanikottai, Kelamangalam, and Thally with dedicated 24-hour cabs. Whether you need a local trip, hospital visit, or outstation journey, call +91 99442 71322 for instant dispatch.' },
  { q: 'How fast can I get a taxi in Bathalapalli, Alasanatham, Anthivadi, and SBM Colony?', a: 'Our drivers are stationed across all Hosur residential and commercial hubs. Average arrival time in Bathalapalli, Alasanatham, Anthivadi, SBM Colony, Navadhi, and Muneeswar Nagar is just 5 to 8 minutes.' },
  { q: 'Do you offer cabs to Anekal, Krishnagiri, Belagondapalli, and Berigai?', a: 'Yes! We operate frequent cabs connecting Hosur to Anekal, Krishnagiri (NH44), Belagondapalli, Mathakondapalli, Perandapalli, Poonapalli, and Berigai with transparent rates and zero hidden charges.' },
  { q: 'Is call taxi available 24 hours in Hosur for night emergencies?', a: 'Yes! Yuva Call Taxi operates 24 hours a day, 7 days a week including night emergencies, hospital visits, and early morning train/bus connections. Just call +91 99442 71322.' },
  { q: 'Do you have call taxi near Hosur bus stand and railway station?', a: 'Yes. We have dedicated cabs stationed right outside Hosur Railway Station (Platforms 1 & 2) and Hosur New Bus Stand for immediate pickup.' },
  { q: 'Is taxi service available in SIPCOT Hosur for shift drops?', a: 'Yes, we specialize in corporate and employee shift pickups/drops for TVS Motor, Ashok Leyland, Titan, Perandapalli, and SIPCOT industrial units.' },
  { q: 'What payment methods are accepted?', a: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), and Net Banking with zero extra convenience charges.' },
];

export default function LocalTaxiPage({ theme, setTheme, onNavigateHome }) {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const bookCall = () => window.location.href = `tel:${PHONE}`;
  const bookWhatsApp = (area = 'Hosur') =>
    window.open(`${WHATSAPP}?text=Hello Yuva Call Taxi! I need a local cab in ${encodeURIComponent(area)}, Hosur. Please confirm availability.`, '_blank');

  return (
    <div className="bg-brand-black text-brand-white min-h-screen relative pb-24 md:pb-20">
      <LocalTaxiSEO />

      {/* TOP NAV */}
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-black/95 backdrop-blur-md border-b border-white/5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center space-x-2 text-brand-silver hover:text-brand-yellow transition-colors text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </button>

          <a href="/" className="flex items-center space-x-2.5">
            <img
              src="/logo.jpg"
              alt="Yuva Call Taxi Hosur Logo - 24/7 Taxi Service in Hosur"
              className="w-9 h-9 rounded-full object-cover border-2 border-brand-yellow shadow-[0_0_10px_rgba(255,212,59,0.3)]"
            />
            <span className="text-xl font-black tracking-tight">
              YUVA<span className="text-brand-yellow">CABS</span>
            </span>
          </a>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-silver transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:flex items-center space-x-1.5 px-4 py-2 rounded-full bg-brand-yellow text-brand-black font-extrabold text-xs shadow-[0_0_15px_rgba(255,212,59,0.3)] hover:brightness-105 transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-brand-black" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-14">

        {/* HERO SECTION */}
        <section className="relative py-14 md:py-20 bg-gradient-to-b from-[#070a11] to-brand-black overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              
              {/* LIVE DISPATCH BADGE */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live: 14 Cabs Active in Hosur • 5-10 Min Arrival</span>
              </div>

              {/* PRIMARY H1 FOR SEO RANKING */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                Call Taxi Hosur<br />
                <span className="text-brand-yellow text-glow-yellow">24/7 Taxi Service in Hosur from ₹150</span>
              </h1>

              <p className="text-sm sm:text-base text-brand-silver font-medium leading-relaxed max-w-3xl mx-auto mb-6">
                Looking for the best <strong className="text-white">taxi service in Hosur</strong>? Yuva Call Taxi delivers 
                prompt <strong className="text-brand-yellow">5–10 minute doorstep pickup</strong> across Hosur Railway Station, Bus Stand, SIPCOT Phase 1 & 2, Bagalur Road, Bathalapalli, Dinnur & Rayakottai.
              </p>

              {/* CALL HOTLINE HIGHLIGHT CARD */}
              <div className="max-w-xl mx-auto mb-8 p-4 rounded-2xl bg-gradient-to-r from-brand-yellow/10 via-brand-yellow/5 to-transparent border border-brand-yellow/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-widest text-brand-yellow">Instant Phone Booking</div>
                  <div className="text-lg font-black text-white">Call Driver Directly: <span className="text-brand-yellow">{DISPLAY_PHONE}</span></div>
                  <div className="text-[11px] text-brand-silver">Zero surge pricing • 0% cancellation • 24 Hours Open</div>
                </div>
                <a
                  href={`tel:${PHONE}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-yellow text-brand-black font-black text-xs flex items-center justify-center space-x-1.5 shadow-[0_0_15px_rgba(255,212,59,0.3)] hover:brightness-105 active:scale-95 transition-all whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 fill-brand-black" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
                {[
                  { val: '5-10 min', lbl: 'Avg Pickup Time' },
                  { val: '₹150', lbl: 'Starting Fare (4 km)' },
                  { val: '4.9 ★', lbl: '1,420+ Google Reviews' },
                  { val: '24/7', lbl: 'Round-the-Clock' },
                ].map((s) => (
                  <div key={s.lbl} className="text-center px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-lg sm:text-xl font-black text-brand-yellow">{s.val}</div>
                    <div className="text-[10px] sm:text-[11px] text-brand-silver font-semibold">{s.lbl}</div>
                  </div>
                ))}
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={bookCall}
                  className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-sm shadow-[0_0_24px_rgba(255,212,59,0.3)] hover:brightness-105 active:scale-95 transition-all"
                >
                  <Phone className="w-5 h-5 fill-brand-black" />
                  <span>Call Taxi Hotline: {DISPLAY_PHONE}</span>
                </button>
                <button
                  onClick={() => bookWhatsApp()}
                  className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-black text-sm hover:brightness-110 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>

              {/* Multi-language Driver Notice */}
              <p className="text-[11px] text-brand-gray mt-4 font-medium">
                🗣️ Drivers speak தமிழ் (Tamil) • English • ಕನ್ನಡ (Kannada) • తెలుగు (Telugu) • हिंदी (Hindi)
              </p>
            </motion.div>
          </div>
        </section>

        {/* QUICK CALL HOTSPOTS */}
        <section className="py-12 bg-[#070a11] border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Fast 1-Tap Booking</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Where Do You Need a Taxi in <span className="text-brand-yellow">Hosur</span>?
              </h2>
              <p className="text-xs sm:text-sm text-brand-silver mt-1">Dedicated drivers stationed near high-demand pickup points for under 5-minute arrival.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickHotspots.map((h) => (
                <div
                  key={h.name}
                  className="p-4 rounded-2xl bg-brand-charcoal/40 border border-white/10 hover:border-brand-yellow/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-sm font-black text-white flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0" />
                        <span>{h.name}</span>
                      </h3>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {h.wait}
                      </span>
                    </div>
                    <p className="text-[11px] text-brand-silver mb-3">{h.desc}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${PHONE}`}
                      className="flex-1 py-2 rounded-xl bg-brand-yellow text-brand-black font-black text-xs text-center flex items-center justify-center space-x-1 hover:brightness-105 active:scale-95 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 fill-brand-black" />
                      <span>Call Driver</span>
                    </a>
                    <button
                      onClick={() => bookWhatsApp(h.name)}
                      className="py-2 px-3 rounded-xl bg-[#25D366] text-white font-black text-xs flex items-center justify-center hover:brightness-110 active:scale-95 transition-all"
                      title="Book via WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPARENT FLEET PRICING */}
        <section className="py-14 md:py-20 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Transparent Fares</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Transparent Local Taxi Fares in <span className="text-brand-yellow">Hosur</span>
              </h2>
              <p className="text-sm text-brand-silver mt-2">4 km minimum fare • Transparent meter billing • No hidden charges • Zero surge pricing</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {fleets.map((f) => (
                <div
                  key={f.name}
                  className={`relative p-5 rounded-3xl border flex flex-col justify-between transition-all ${
                    f.highlight
                      ? 'border-brand-yellow/50 bg-brand-yellow/5 shadow-[0_0_30px_rgba(255,212,59,0.1)]'
                      : 'border-white/10 bg-brand-charcoal/40 hover:border-white/20'
                  }`}
                >
                  {f.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-0.5 rounded-full bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                        ★ Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="mb-3">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-gradient-to-r ${f.color} text-white`}>
                        {f.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white">{f.name}</h3>
                    <p className="text-[11px] text-brand-silver mb-4">{f.sub} • {f.seats}</p>

                    <div className="space-y-2 text-xs mb-4">
                      <div className="flex justify-between">
                        <span className="text-brand-gray">Non-A/C:</span>
                        <span className="font-black text-white">{f.minFare} min • {f.perKm}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gray">A/C:</span>
                        <span className="font-black text-brand-yellow">{f.ac}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-brand-silver leading-relaxed">{f.best}</p>
                  </div>

                  <button
                    onClick={bookCall}
                    className="mt-4 w-full py-2.5 rounded-xl bg-brand-yellow text-brand-black font-black text-xs hover:brightness-105 active:scale-95 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 fill-brand-black" />
                    <span>Call To Book</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POPULAR LOCAL ROUTES TABLE */}
        <section className="py-14 bg-[#070a11] border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Hosur Route Estimates</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Popular Local Routes &amp; Approximate Fares
              </h2>
              <p className="text-xs sm:text-sm text-brand-silver mt-1">Approximate travel times and transparent taxi rates across Hosur.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-brand-charcoal/30">
              <table className="w-full text-left text-xs sm:text-sm text-brand-silver">
                <thead className="bg-white/5 text-white font-black uppercase tracking-wider text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Pickup → Drop Location</th>
                    <th className="py-3 px-3">Distance</th>
                    <th className="py-3 px-3">Time</th>
                    <th className="py-3 px-4 text-brand-yellow">Estimated Fare</th>
                    <th className="py-3 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {popularLocalRoutes.map((r, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-bold text-white">
                        {r.from} <span className="text-brand-yellow font-black">↔</span> {r.to}
                      </td>
                      <td className="py-3 px-3">{r.distance}</td>
                      <td className="py-3 px-3">{r.time}</td>
                      <td className="py-3 px-4 font-black text-white">{r.fare}</td>
                      <td className="py-3 px-3 text-right">
                        <a
                          href={`tel:${PHONE}`}
                          className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-brand-yellow text-brand-black font-black text-xs hover:brightness-105"
                        >
                          <Phone className="w-3 h-3 fill-brand-black" />
                          <span>Call</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 36+ HOSUR LOCALITIES COVERAGE */}
        <section className="py-14 md:py-20 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Hyper-Local Coverage</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Local Cab Coverage Across <span className="text-brand-yellow">36+ Hosur Localities</span>
              </h2>
              <p className="text-sm text-brand-silver mt-2">Click any area to book a local cab with 5–10 minute pickup</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {localZones.map((z) => {
                const Icon = z.icon;
                return (
                  <div
                    key={z.zone}
                    className="p-5 rounded-3xl bg-brand-charcoal/40 border border-white/10 hover:border-brand-yellow/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20">
                          <Icon className="w-4 h-4 text-brand-yellow" />
                        </div>
                        <h3 className="text-sm font-black text-white group-hover:text-brand-yellow transition-colors">{z.zone}</h3>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center">
                        <Clock className="w-3 h-3 mr-0.5" /> {z.time}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {z.areas.map((a) => (
                        <span key={a} className="text-[11px] font-semibold text-brand-silver bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg flex items-center space-x-1">
                          <MapPin className="w-2.5 h-2.5 text-brand-yellow flex-shrink-0" />
                          <span>{a}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-3 border-t border-white/5">
                      <a
                        href={`tel:${PHONE}`}
                        className="flex-1 py-2 rounded-xl bg-brand-yellow text-brand-black font-extrabold text-xs text-center flex items-center justify-center space-x-1 hover:brightness-105 transition-all"
                      >
                        <Phone className="w-3 h-3 fill-brand-black" />
                        <span>Call</span>
                      </a>
                      <button
                        onClick={() => bookWhatsApp(z.zone)}
                        className="flex-1 py-2 rounded-xl bg-[#25D366] text-white font-extrabold text-xs flex items-center justify-center space-x-1 hover:brightness-110 transition-all"
                      >
                        <MessageSquare className="w-3 h-3 fill-white" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-14 bg-[#070a11] border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Why Yuva Call Taxi</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Why Hosur Chooses <span className="text-brand-yellow">Yuva Call Taxi</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Zap, title: '5-10 Min Pickup Guarantee', desc: 'GPS-dispatched cabs positioned across Hosur Railway Station, Bus Stand & SIPCOT for zero delay.' },
                { icon: ShieldCheck, title: '0% Cancellation Policy', desc: 'Once confirmed, your ride never gets canceled by the driver. Guaranteed pickup.' },
                { icon: Star, title: 'Top Rated in Hosur (4.9 ★)', desc: '1,420+ verified 5-star customer reviews across Hosur and Krishnagiri district.' },
                { icon: Clock, title: 'True 24/7 Availability', desc: 'Midnight hospital trips, early morning train/bus connections — we never sleep.' },
                { icon: Car, title: 'Clean AC & Non-AC Fleet', desc: 'Daily sanitized Hatchbacks, Sedans, SUVs & Innova Crysta ready to go.' },
                { icon: Search, title: 'Transparent Fares from ₹150', desc: 'Zero hidden fees. Clear meter per-km billing with no midnight surge charges.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-5 rounded-2xl bg-brand-charcoal/30 border border-white/10 hover:border-brand-yellow/30 transition-all">
                  <Icon className="w-6 h-6 text-brand-yellow mb-3" />
                  <h3 className="text-sm font-black text-white mb-1">{title}</h3>
                  <p className="text-xs text-brand-silver leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Questions About <span className="text-brand-yellow">Call Taxi in Hosur</span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-brand-charcoal/30 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between space-x-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white">{faq.q}</span>
                    <span className={`text-brand-yellow font-black text-lg flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {expandedFaq === i && (
                    <div className="px-4 pb-4 sm:px-5 text-xs text-brand-silver leading-relaxed font-medium border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA & CROSS-LINKS */}
        <section className="py-14 bg-[#070a11]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Need a <span className="text-brand-yellow">Local Taxi in Hosur</span> Right Now?
            </h2>
            <p className="text-sm text-brand-silver mb-6">
              Call our 24/7 hotline for instant 5–10 min pickup. Zero surge • 0% cancellation • Lowest fares in Hosur.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-sm shadow-[0_0_24px_rgba(255,212,59,0.3)] hover:brightness-105 active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 fill-brand-black" />
                <span>Call {DISPLAY_PHONE}</span>
              </a>
              <a
                href={`${WHATSAPP}?text=Hello!%20I%20need%20a%20local%20taxi%20in%20Hosur.%20Please%20confirm%20availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-black text-sm hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

            {/* Internal links to other high-converting services */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-brand-silver">
              <a href="/airport-taxi" className="text-brand-yellow hover:underline">
                ✈️ Bangalore Airport Taxi from Hosur (Fixed ₹2,200) →
              </a>
              <span>•</span>
              <a href="/outstation-taxi" className="text-brand-yellow hover:underline">
                🛣️ Outstation Drop Taxi in Hosur (₹9/km) →
              </a>
            </div>

            <a
              href={GOOGLE_MAP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 mt-6 text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>View Office on Google Maps — Dinnur Main Road, Jeeva Nagar, Hosur 635109</span>
            </a>
          </div>
        </section>

      </main>

      {/* HIGH-CONVERTING STICKY BOTTOM CALL BAR (MOBILE & DESKTOP) */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-[#070a11]/95 backdrop-blur-md border-t border-brand-yellow/30 px-3 py-2.5 sm:px-6 shadow-2xl">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center space-x-2 text-xs font-bold text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Driver Near You Ready: <span className="text-brand-yellow">5–10 Min Pickup in Hosur</span></span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => bookWhatsApp()}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-black text-xs hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </button>

            <a
              href={`tel:${PHONE}`}
              className="flex-[2] sm:flex-none flex items-center justify-center space-x-2 py-2.5 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(255,212,59,0.35)] hover:brightness-105 active:scale-95 transition-all animate-pulse"
            >
              <Phone className="w-4 h-4 fill-brand-black" />
              <span>CALL NOW: {DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
