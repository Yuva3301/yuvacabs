import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MessageSquare, MapPin, Clock, ShieldCheck, CheckCircle2,
  Navigation, Star, Car, ArrowLeft, Sun, Moon, Zap, Users, Compass, ExternalLink
} from 'lucide-react';
import OutstationTaxiSEO from './OutstationTaxiSEO';

const PHONE = '+919944271322';
const WHATSAPP = `https://wa.me/919944271322`;
const GOOGLE_MAP = 'https://maps.app.goo.gl/gHwiq68N6k8QekBt8';

const routes = [
  {
    city: 'Chennai',
    route: 'Hosur ⇄ Chennai (Central / Airport / OMR)',
    distance: '310 km',
    time: '5.5 hrs',
    highway: 'NH48 Expressway',
    rate: '₹9/km',
    fleet: 'Dzire, Etios, Ertiga, Innova Crysta',
    tag: 'One-Way & Round Trip',
    desc: 'Smooth highway drive via Krishnagiri & Vellore. Affordable one-way drop — pay only for the distance you travel.',
    highlight: true,
    whatsappMsg: 'I want to book an outstation cab from Hosur to Chennai.'
  },
  {
    city: 'Bangalore',
    route: 'Hosur ⇄ Electronic City / Silk Board / Whitefield',
    distance: '35–55 km',
    time: '45–75 min',
    highway: 'Hosur–Bangalore Highway',
    rate: '₹10/km',
    fleet: 'Sedan (Dzire) & SUV (Ertiga)',
    tag: 'Daily IT Corridor',
    desc: 'Daily corporate commute for software professionals. Frequent departures, zero waiting time.',
    highlight: false,
    whatsappMsg: 'I want to book a cab from Hosur to Bangalore.'
  },
  {
    city: 'Salem',
    route: 'Hosur ⇄ Salem City / Junction',
    distance: '160 km',
    time: '2.5 hrs',
    highway: 'NH44 6-Lane Expressway',
    rate: '₹9/km',
    fleet: 'Dzire, Etios, Innova Crysta',
    tag: 'Direct NH44 Drop',
    desc: 'Direct 6-lane corridor via Dharmapuri. One-way drop available — zero return charges.',
    highlight: false,
    whatsappMsg: 'I want to book an outstation cab from Hosur to Salem.'
  },
  {
    city: 'Coimbatore',
    route: 'Hosur ⇄ Coimbatore (City / Airport / Gandhipuram)',
    distance: '320 km',
    time: '5.5 hrs',
    highway: 'NH544 via Salem & Erode',
    rate: '₹9/km',
    fleet: 'Etios, Dzire, Innova Crysta',
    tag: 'Business & Family',
    desc: 'Top-rated outstation cab to the textile capital. Experienced highway chauffeurs, clean AC cars.',
    highlight: false,
    whatsappMsg: 'I want to book an outstation cab from Hosur to Coimbatore.'
  },
  {
    city: 'Tirupati',
    route: 'Hosur ⇄ Tirumala / Tirupati Balaji Temple',
    distance: '245 km',
    time: '4.5 hrs',
    highway: 'via Chittoor & Palamaner',
    rate: '₹9/km',
    fleet: 'Innova Crysta, Ertiga, Sedans',
    tag: 'Pilgrimage Darshan',
    desc: 'Complete Tirupati Balaji darshan package with temple wait-time. Safe ghat road navigation.',
    highlight: false,
    whatsappMsg: 'I want to book a Tirupati darshan cab from Hosur.'
  },
  {
    city: 'Pondicherry',
    route: 'Hosur ⇄ Pondicherry (White Town / Promenade)',
    distance: '260 km',
    time: '5 hrs',
    highway: 'via Tiruvannamalai / Tindivanam',
    rate: '₹9/km',
    fleet: 'Sedans & Executive SUVs',
    tag: 'Weekend Beach Getaway',
    desc: 'Relaxing beach weekend. Transparent billing, flexible stopovers, zero surge pricing.',
    highlight: false,
    whatsappMsg: 'I want to book a cab from Hosur to Pondicherry.'
  },
  {
    city: 'Ooty',
    route: 'Hosur ⇄ Ooty / Coonoor / Kotagiri',
    distance: '285 km',
    time: '6.5 hrs',
    highway: 'via Mettupalayam / Bandipur',
    rate: '₹9/km',
    fleet: 'Innova Crysta & Etios',
    tag: 'Hill Station Specialist',
    desc: 'Specialized hill-station drivers skilled in 36 hairpin bends, misty ghat roads, and family holiday comfort.',
    highlight: false,
    whatsappMsg: 'I want to book an Ooty hill station cab from Hosur.'
  },
  {
    city: 'Trichy / Madurai',
    route: 'Hosur ⇄ Trichy / Madurai Central',
    distance: '300–390 km',
    time: '5–6.5 hrs',
    highway: 'NH44 via Namakkal',
    rate: '₹9/km',
    fleet: 'Swift Dzire & Innova Crysta',
    tag: 'South TN Express',
    desc: '100% on-time departure guarantee. One-way drop taxi to Trichy, Madurai, Dindigul & Karur.',
    highlight: false,
    whatsappMsg: 'I want to book an outstation cab from Hosur to Trichy or Madurai.'
  },
];

const fleetTable = [
  { name: 'Hatchback', type: 'Tiago / Indica', km: '₹9/km', driver: '₹300', tag: 'Economy' },
  { name: 'Sedan', type: 'Swift Dzire / Etios', km: '₹10/km', driver: '₹350', tag: 'Popular', highlight: true },
  { name: 'SUV (6-seater)', type: 'Ertiga / XUV', km: '₹15/km', driver: '₹400', tag: 'Group' },
  { name: 'Innova Crysta', type: '7-Seater Luxury', km: '₹18/km', driver: '₹500', tag: 'Premium' },
  { name: 'Tempo Traveller', type: '12-16 Seater', km: '₹38/km', driver: '₹600', tag: 'Groups' },
];

const faqs = [
  { q: 'What is the outstation taxi rate from Hosur?', a: 'Outstation taxi from Hosur starts at ₹9/km for Hatchback, ₹10/km for Sedan (Swift Dzire/Etios), ₹15/km for SUV (Ertiga), and ₹18/km for Innova Crysta. Driver allowance of ₹300–₹500/day applies for outstation trips.' },
  { q: 'Do you offer one-way drop taxi from Hosur?', a: 'Yes! We specialize in one-way drop taxis where you pay only for the one-way distance — zero return charges. Available to Chennai, Bangalore, Salem, Coimbatore, Tirupati, Pondicherry, Ooty, Trichy, and Madurai.' },
  { q: 'What is the taxi fare from Hosur to Chennai?', a: 'Hosur to Chennai taxi fare starts at ₹9/km. For a 310 km one-way drop via NH48, a Swift Dzire costs approximately ₹2,790 + driver allowance. Innova Crysta starts at ₹5,580. Call +91 99442 71322 for exact quotes.' },
  { q: 'What is the taxi fare from Hosur to Bangalore?', a: 'Hosur to Bangalore taxi starts at ₹10/km. The distance ranges from 35 km (Electronic City) to 55 km (Whitefield/Majestic). Swift Dzire from ₹350 to ₹550. Daily corporate commute packages available.' },
  { q: 'What is the Hosur to Salem drop taxi rate?', a: 'Hosur to Salem one-way drop taxi starts at ₹9/km for 160 km. Swift Dzire approximately ₹1,440 + driver allowance. Direct route via NH44 6-lane expressway through Dharmapuri.' },
  { q: 'What is Hosur to Coimbatore cab fare?', a: 'Hosur to Coimbatore cab starts at ₹9/km for 320 km. Swift Dzire approximately ₹2,880 + allowance. Innova Crysta for families from ₹5,760. Experienced highway drivers via NH544.' },
  { q: 'Do you have Tirupati darshan package taxi from Hosur?', a: 'Yes! Complete Tirupati Balaji pilgrimage cab with temple darshan wait-time included. 245 km via Chittoor. Rates from ₹9/km with Innova Crysta and Ertiga available for groups.' },
  { q: 'What is Hosur to Pondicherry cab rate?', a: 'Hosur to Pondicherry cab starts at ₹9/km for 260 km. Sedan approximately ₹2,340 + allowance. Round trip and weekend packages available. Multiple scenic stopovers on request.' },
  { q: 'Do you drive on Ooty ghat roads?', a: 'Yes — we have specialized hill station chauffeurs trained for 36-hairpin-bend Ooty ghat roads. Innova Crysta and Toyota Etios recommended for safety and comfort. 285 km from Hosur.' },
  { q: 'What is the Innova Crysta rate per km from Hosur?', a: 'Toyota Innova Crysta outstation rate from Hosur is ₹18/km + ₹500 driver allowance. For airport fixed packages ₹2,800 (BLR). Half-day and full-day local packages also available. Call +91 99442 71322.' },
];

export default function OutstationTaxiPage({ theme, setTheme, onNavigateHome }) {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const bookCall = () => window.location.href = `tel:${PHONE}`;
  const bookWhatsApp = (msg = 'I want to book an outstation cab from Hosur.') =>
    window.open(`${WHATSAPP}?text=Hello Yuva Call Taxi! ${encodeURIComponent(msg)}`, '_blank');

  return (
    <div className="bg-brand-black text-brand-white min-h-screen relative">
      <OutstationTaxiSEO />

      {/* ── TOP NAV ── */}
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-black/95 backdrop-blur-md border-b border-white/5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="flex items-center space-x-2 text-brand-silver hover:text-brand-yellow transition-colors text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </a>

          <a href="/" className="flex items-center space-x-2.5">
            <img
              src="/logo.jpg"
              alt="Yuva Call Taxi Hosur Logo - Outstation Taxi in Hosur"
              className="w-9 h-9 rounded-full object-cover border-2 border-brand-yellow shadow-[0_0_10px_rgba(255,212,59,0.3)]"
            />
            <span className="text-xl font-black tracking-tight">
              YUVA<span className="text-brand-yellow">CABS</span>
            </span>
          </a>

          <div className="flex items-center space-x-2">
            {setTheme && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-silver transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-brand-yellow text-brand-black font-extrabold text-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-brand-black" />
              <span>99442 71322</span>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-14">

        {/* ── HERO ── */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#070a11] to-brand-black overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-black uppercase tracking-widest mb-6">
                <Navigation className="w-3.5 h-3.5" />
                <span>Outstation Taxi in Hosur · One-Way Drop @ ₹9/km · Zero Return Fare</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                Outstation Taxi in Hosur<br />
                <span className="text-brand-yellow text-glow-yellow">One Way &amp; Round Trip Cab Service</span>
              </h1>

              <p className="text-sm sm:text-base text-brand-silver font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                Hosur's trusted 24/7 taxi service for outstation journeys. <strong className="text-white">Pay only one-way</strong> to Chennai (310km), Bangalore (35km), Salem (160km), Coimbatore, Tirupati, Ooty, Pondicherry &amp; more.
                Zero return charges · Zero hidden fees · Sanitized AC fleet · Instant confirmation.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  { val: '₹9/km', lbl: 'Starting Rate' },
                  { val: 'One-Way', lbl: 'Pay Only One Direction' },
                  { val: '8+', lbl: 'Major Destinations' },
                  { val: '24/7', lbl: 'Round-the-Clock Service' },
                ].map((s) => (
                  <div key={s.lbl} className="text-center px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xl font-black text-brand-yellow">{s.val}</div>
                    <div className="text-[11px] text-brand-silver font-semibold">{s.lbl}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={bookCall}
                  className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-sm shadow-[0_0_24px_rgba(255,212,59,0.3)] hover:brightness-105 active:scale-95 transition-all"
                >
                  <Phone className="w-5 h-5 fill-brand-black" />
                  <span>Call Now — 99442 71322</span>
                </button>
                <button
                  onClick={() => bookWhatsApp()}
                  className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-black text-sm hover:brightness-110 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>

              {/* Quick links to other services */}
              <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10 text-xs">
                <span className="text-brand-gray font-bold">Explore Other Services:</span>
                <a href="/local-taxi" className="text-brand-yellow hover:underline flex items-center gap-1 font-bold">
                  Local Taxi Service in Hosur &rarr;
                </a>
                <a href="/airport-taxi" className="text-brand-yellow hover:underline flex items-center gap-1 font-bold">
                  Hosur to Bangalore Airport Taxi &rarr;
                </a>
                <a href="/" className="text-brand-silver hover:underline flex items-center gap-1">
                  Home Page &rarr;
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── OUTSTATION ADVANTAGES ── */}
        <section className="py-8 border-y border-white/5 bg-[#070a11]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { val: '₹9/km', lbl: 'Starting Outstation Rate' },
                { val: 'One-Way Drop', lbl: 'Pay Only One Direction' },
                { val: 'Zero Surge', lbl: 'Flat Rate Any Time' },
                { val: '24/7', lbl: 'Instant Cab Dispatch' },
              ].map((s) => (
                <div key={s.lbl} className="py-3">
                  <div className="text-lg font-black text-brand-yellow">{s.val}</div>
                  <div className="text-[11px] text-brand-silver font-semibold">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROUTE CARDS ── */}
        <section className="py-16 md:py-20 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Popular Routes</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Outstation Destinations from <span className="text-brand-yellow">Hosur</span>
              </h2>
              <p className="text-sm text-brand-silver mt-2">One-way drop taxi · Pay only for the distance you travel</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {routes.map((r) => (
                <div
                  key={r.city}
                  className={`p-5 rounded-3xl border flex flex-col justify-between transition-all group ${
                    r.highlight
                      ? 'border-brand-yellow/50 bg-brand-yellow/5 shadow-[0_0_25px_rgba(255,212,59,0.08)]'
                      : 'border-white/10 bg-brand-charcoal/40 hover:border-brand-yellow/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-wider text-brand-yellow px-2 py-0.5 rounded bg-brand-yellow/10 border border-brand-yellow/20">
                        {r.tag}
                      </span>
                      <span className="text-xs font-black text-brand-yellow">{r.rate}</span>
                    </div>

                    <h3 className="text-sm font-black text-white mb-1 group-hover:text-brand-yellow transition-colors">
                      {r.city} Outstation Cab
                    </h3>
                    <p className="text-[11px] text-brand-silver mb-3">{r.route}</p>

                    <div className="flex items-center space-x-3 text-[11px] text-brand-gray mb-3 pb-3 border-b border-white/5">
                      <span className="flex items-center font-bold text-white">
                        <Navigation className="w-3 h-3 text-brand-yellow mr-1" />{r.distance}
                      </span>
                      <span>·</span>
                      <span className="flex items-center font-bold text-white">
                        <Clock className="w-3 h-3 text-brand-yellow mr-1" />{r.time}
                      </span>
                    </div>

                    <p className="text-[11px] text-brand-silver leading-relaxed mb-1">{r.highway}</p>
                    <p className="text-[11px] text-brand-silver leading-relaxed mb-4">{r.desc}</p>
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
                      onClick={() => bookWhatsApp(r.whatsappMsg)}
                      className="flex-1 py-2 rounded-xl bg-[#25D366] text-white font-extrabold text-xs flex items-center justify-center space-x-1 hover:brightness-110 transition-all"
                    >
                      <MessageSquare className="w-3 h-3 fill-white" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FLEET RATE TABLE ── */}
        <section className="py-16 md:py-20 bg-[#070a11] border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">Rate Card</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Outstation Taxi Rates from <span className="text-brand-yellow">Hosur</span>
              </h2>
              <p className="text-sm text-brand-silver mt-2">Transparent per-km rates · Driver allowance included</p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-brand-charcoal/60 border-b border-white/10">
                    <th className="px-4 py-3 font-black text-brand-yellow uppercase tracking-wider">Vehicle</th>
                    <th className="px-4 py-3 font-black text-brand-yellow uppercase tracking-wider">Type</th>
                    <th className="px-4 py-3 font-black text-brand-yellow uppercase tracking-wider">Rate/km</th>
                    <th className="px-4 py-3 font-black text-brand-yellow uppercase tracking-wider">Driver Allowance</th>
                  </tr>
                </thead>
                <tbody>
                  {fleetTable.map((f, i) => (
                    <tr
                      key={f.name}
                      className={`border-b border-white/5 ${f.highlight ? 'bg-brand-yellow/5' : i % 2 === 0 ? 'bg-transparent' : 'bg-white/2'}`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-black text-white">{f.name}</div>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${f.highlight ? 'bg-brand-yellow/20 text-brand-yellow' : 'bg-white/5 text-brand-silver'}`}>
                          {f.tag}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-brand-silver">{f.type}</td>
                      <td className="px-4 py-3 font-black text-brand-yellow">{f.km}</td>
                      <td className="px-4 py-3 text-brand-silver">{f.driver}/day</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-brand-silver mt-3 text-center">
              * Toll charges extra · A/C / Non-A/C same outstation rate · GST bills available for corporate trips
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a href={`tel:${PHONE}`}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-sm hover:brightness-105 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 fill-brand-black" />
                <span>Get Exact Quote — 99442 71322</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 border-b border-white/5">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Outstation Taxi — <span className="text-brand-yellow">Common Questions</span>
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

        {/* ── BOTTOM CTA ── */}
        <section className="py-16 bg-[#070a11]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Ready to Book Your <span className="text-brand-yellow">Outstation Cab?</span>
            </h2>
            <p className="text-sm text-brand-silver mb-8">
              One-way drop taxi from Hosur · ₹9/km · 24/7 booking · Zero cancellation · Clean AC cabs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-sm shadow-[0_0_24px_rgba(255,212,59,0.3)] hover:brightness-105 active:scale-95 transition-all"
              >
                <Phone className="w-5 h-5 fill-brand-black" />
                <span>Call +91 99442 71322</span>
              </a>
              <a
                href={`${WHATSAPP}?text=Hello! I want to book an outstation cab from Hosur. Please share availability and rates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-black text-sm hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
            <a
              href={GOOGLE_MAP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 mt-5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Dinnur Main Road, Jeeva Nagar - Hosur 635109</span>
            </a>
          </div>
        </section>

      </main>

      {/* Floating call button (mobile) */}
      <a
        href={`tel:${PHONE}`}
        aria-label="Call Yuva Call Taxi Hosur"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-yellow shadow-[0_0_20px_rgba(255,212,59,0.4)] hover:brightness-105 active:scale-95 transition-all sm:hidden"
      >
        <Phone className="w-6 h-6 fill-brand-black text-brand-black" />
      </a>
    </div>
  );
}
