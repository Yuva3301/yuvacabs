import { useState } from 'react';
import { Moon, Check, Coins, Milestone, Plane, Sparkles, Phone, MessageSquare, Car } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [isAc, setIsAc] = useState(true);

  const fleets = [
    {
      vehicle: 'Hatchback Cabs',
      subTitle: 'Indica / Vista / Tiago / Figo',
      type: 'Tata Tiago, Indica, Vista, Swift',
      nonAcMin: 150, acMin: 180,
      nonAcExtra: 10, acExtra: 11,
      seating: '4 + 1 Passengers',
      suitcases: '1 - 2 Bags',
      notes: 'Local minimum 4 km limit',
      bestFor: 'Budget-friendly local commutes & swift city runs.',
      tag: 'Economical Local',
      isPopular: false
    },
    {
      vehicle: 'Premium Sedan Cabs',
      subTitle: 'Etios / Dzire / Xcent',
      type: 'Maruti Dzire, Hyundai Xcent, Toyota Etios',
      nonAcMin: 180, acMin: 220,
      nonAcExtra: 11, acExtra: 12,
      seating: '4 + 1 Passengers',
      suitcases: '2 - 3 Bags',
      notes: 'Local minimum 4 km limit',
      bestFor: 'Luxury airport runs, business trips & family outstation runs.',
      tag: 'Most Popular',
      isPopular: true
    },
    {
      vehicle: 'Executive SUV Cabs',
      subTitle: 'Ertiga / XUV / SUV',
      type: 'Maruti Ertiga, Mahindra XUV, Renault Triber',
      nonAcMin: 220, acMin: 280,
      nonAcExtra: 15, acExtra: 16,
      seating: '6 + 1 Passengers',
      suitcases: '3 - 4 Bags',
      notes: 'Local minimum 4 km limit',
      bestFor: 'Spacious medium-group family trips & religious tours.',
      tag: 'Spacious Comfort',
      isPopular: false
    },
    {
      vehicle: 'Toyota Innova',
      subTitle: 'Classic Toyota Innova MPV',
      type: 'Innova / Innova Crysta Luxury',
      nonAcMin: 350, acMin: 400,
      nonAcExtra: 18, acExtra: 20,
      seating: '7 + 1 Passengers',
      suitcases: '4 - 5 Bags',
      notes: 'Local minimum 4 km limit',
      bestFor: 'Executive long-distance luxury, weddings & temple tours.',
      tag: 'Maximum Comfort',
      isPopular: false
    },
    {
      vehicle: 'Tempo Traveller',
      subTitle: 'Force 12 - 16 Seater Van',
      type: 'Force Motors Executive Tempo',
      nonAcMin: 650, acMin: 800,
      nonAcExtra: 35, acExtra: 38,
      seating: '12 - 16 Passengers',
      suitcases: '6 - 8 Bags',
      notes: 'Local minimum 4 km limit',
      bestFor: 'Group holiday packages, corporate outings & pilgrim tours.',
      tag: 'Group Travel',
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-yellow/5 glow-orb blur-[120px]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blue/5 glow-orb blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col space-y-4">
          <span className="text-xs text-brand-yellow font-extrabold tracking-widest uppercase">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Local &amp; Outstation <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-gold text-glow-yellow">Fares Table</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-gray/90 leading-relaxed">
            No hidden costs. No surge fees. Clear regional rates calculated systematically to provide total clarity for your travel budget.
          </p>
        </div>

        {/* Special Regional Packages Grid: Outstation & Airport Drop Fixed Rates */}
        <div className="max-w-5xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Box 1: Outstation Special */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-yellow/15 via-amber-500/10 to-brand-yellow/15 border border-brand-yellow/30 flex flex-col justify-between space-y-3 shadow-[0_0_20px_rgba(255,212,59,0.1)] text-left">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-brand-yellow text-brand-black font-black text-[10px] uppercase tracking-wider">
                Outstation Special
              </span>
              <span className="text-[10px] text-brand-silver font-semibold">Tamil Nadu &amp; Karnataka</span>
            </div>
            <div>
              <div className="text-xl font-black text-white">
                Outstation Trips from <span className="text-brand-yellow text-glow-yellow text-2xl font-black">₹9 – ₹12</span> / KM
              </div>
              <p className="text-xs text-brand-silver/90 mt-1">
                One-way drop taxi and round trip cabs to Chennai, Bangalore, Salem, Coimbatore, and Tirupati. Zero return fare for one way drops!
              </p>
            </div>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-brand-gray font-medium">Hatchback, Sedan, SUV &amp; Innova available</span>
              <a href="/outstation-taxi" className="text-xs font-bold text-brand-yellow hover:underline flex items-center space-x-1">
                <span>View Outstation Rates →</span>
              </a>
            </div>
          </div>

          {/* Box 2: Swift Dzire Airport Drop & Pickup Package */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600/15 via-brand-charcoal to-brand-yellow/10 border-2 border-brand-yellow/50 relative overflow-hidden flex flex-col justify-between space-y-3 shadow-[0_0_30px_rgba(255,212,59,0.18)] text-left group">
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-[10px] uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                <Plane className="w-3 h-3 text-brand-black" />
                <span>Airport Fixed Package</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-extrabold flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-emerald-400" /> 24/7 Guaranteed Flight Pickup
              </span>
            </div>

            {/* Car Name & Route */}
            <div>
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-brand-yellow" />
                <h3 className="text-lg font-black text-white tracking-tight">
                  Swift Dzire <span className="text-brand-yellow font-extrabold">— Airport Drop &amp; Pickup</span>
                </h3>
              </div>
              <p className="text-xs text-brand-silver font-semibold mt-0.5">
                Hosur ⇄ Kempegowda International Airport Bengaluru (BLR)
              </p>
            </div>

            {/* Rates Pills - Non A/C ₹2,200 and A/C ₹2,300 */}
            <div className="grid grid-cols-2 gap-3 py-1">
              {/* Non-A/C Rate Box */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-yellow/40 transition-all text-center">
                <span className="text-[10px] text-brand-silver uppercase font-extrabold tracking-wider block">Non-A/C Rate</span>
                <span className="text-2xl font-black text-brand-yellow">₹2,200</span>
                <span className="text-[10px] text-brand-gray block mt-0.5">Flat One-Way Fare</span>
              </div>

              {/* A/C Rate Box */}
              <div className="p-2.5 rounded-xl bg-brand-yellow/10 border border-brand-yellow/40 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-yellow text-brand-black text-[8px] font-black px-1.5 py-0.2 rounded-bl-md uppercase">Popular</div>
                <span className="text-[10px] text-brand-yellow uppercase font-extrabold tracking-wider block">A/C Sedan</span>
                <span className="text-2xl font-black text-white text-glow-yellow">₹2,300</span>
                <span className="text-[10px] text-emerald-400 font-bold block mt-0.5">Zero Surge Tolls Extra</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <a
                href="/airport-taxi"
                className="text-xs font-bold text-brand-yellow hover:underline flex items-center space-x-1"
              >
                <span>Full Airport Details →</span>
              </a>
              <a
                href="https://wa.me/919944271322?text=Hello!%20I%20want%20to%20book%20Swift%20Dzire%20for%20Bangalore%20Airport%20Drop/Pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center space-x-1 hover:brightness-110 active:scale-95 transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Global A/C vs Non-A/C selector switch */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-16">
          <span className="text-sm font-bold text-brand-silver">Select Service Class:</span>
          <div className="inline-flex p-1 bg-slate-100 dark:bg-brand-charcoal border border-slate-200/50 dark:border-white/5 rounded-2xl">
            <button
              onClick={() => setIsAc(false)}
              className={`px-5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                !isAc 
                  ? 'bg-brand-yellow text-brand-black shadow-[0_4px_12px_rgba(255,212,59,0.15)] dark:bg-brand-charcoal dark:border dark:border-brand-yellow/30 dark:text-brand-yellow dark:shadow-none' 
                  : 'text-slate-600 dark:text-brand-silver hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              Non-A/C Service
            </button>
            <button
              onClick={() => setIsAc(true)}
              className={`px-5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                isAc 
                  ? 'bg-brand-yellow text-brand-black shadow-[0_4px_12px_rgba(255,212,59,0.15)] dark:bg-brand-charcoal dark:border dark:border-brand-yellow/30 dark:text-brand-yellow dark:shadow-none' 
                  : 'text-slate-600 dark:text-brand-silver hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              Air Conditioned (A/C)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch mb-16">
          {fleets.map((fleet, idx) => {
            const minFare = isAc ? fleet.acMin : fleet.nonAcMin;
            const extraKm = isAc ? fleet.acExtra : fleet.nonAcExtra;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col justify-between p-6 rounded-3xl border transition-all duration-400 cursor-default ${
                  fleet.isPopular
                    ? 'glass-card glass-card-hover gold-gradient-border shadow-[0_15px_30px_rgba(255,212,59,0.08)] scale-100 xl:scale-[1.02]'
                    : 'glass-card glass-card-hover border-white/5'
                }`}
              >
                {fleet.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black px-3.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md">
                    {fleet.tag}
                  </div>
                )}

                <div className="flex flex-col space-y-5">
                  {/* Header */}
                  <div className="text-left">
                    {!fleet.isPopular && (
                      <span className="inline-block text-[9px] uppercase font-bold text-amber-700 dark:text-brand-yellow tracking-wider mb-1 bg-amber-500/10 dark:bg-brand-yellow/5 border border-amber-500/20 dark:border-brand-yellow/15 px-2 py-0.5 rounded-full">
                        {fleet.tag}
                      </span>
                    )}
                    <h3 className="text-lg font-black text-brand-white group-hover:text-brand-yellow transition-colors duration-300 line-clamp-1">{fleet.vehicle}</h3>
                    <p className="text-[10px] text-brand-silver font-semibold mt-0.5 line-clamp-1">{fleet.subTitle}</p>
                    <p className="text-[9px] text-brand-gray font-medium leading-none mt-1 line-clamp-1">{fleet.type}</p>
                  </div>

                  {/* Pricing block */}
                  <div className="flex flex-col space-y-1 py-3 border-y border-white/5 text-left">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-black text-brand-white text-glow-yellow">₹{extraKm}</span>
                      <span className="text-[10px] font-semibold text-brand-silver">/ KM</span>
                    </div>
                    <div className="text-[10px] text-brand-gray font-semibold">
                      Min Fare: <strong className="text-brand-white">₹{minFare}</strong> (4 Kms)
                    </div>
                  </div>

                  {/* Specifications Checklist */}
                  <ul className="flex flex-col space-y-2.5 text-left text-xs text-brand-silver/95 font-medium">
                    <li className="flex items-center space-x-2">
                      <div className="w-4.5 h-4.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] line-clamp-1">Capacity: <strong className="text-brand-white">{fleet.seating}</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-4.5 h-4.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] line-clamp-1">Luggage: <strong className="text-brand-white">{fleet.suitcases}</strong></span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-4.5 h-4.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] line-clamp-1 text-amber-600 dark:text-brand-yellow font-bold">{fleet.notes}</span>
                    </li>
                    <li className="flex items-start space-x-2 pt-1 border-t border-white/5">
                      <div className="w-4.5 h-4.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-[10px] leading-relaxed text-brand-gray/95 font-medium line-clamp-3">{fleet.bestFor}</span>
                    </li>
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-3">
                  <a
                    href="#contact"
                    onClick={() => {
                      const formEl = document.getElementById('contact');
                      if (formEl) {
                        const messageInput = document.getElementById('booking-message');
                        if (messageInput) {
                          messageInput.value = `I'd like to book a ${fleet.vehicle} (${fleet.subTitle}) cab with ${isAc ? 'A/C' : 'Non-A/C'} service. Please confirm availability.`;
                        }
                        formEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full flex items-center justify-center py-2.5 rounded-2xl font-extrabold text-xs tracking-wide transition-all duration-300 cursor-pointer ${
                      fleet.isPopular
                        ? 'bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black shadow-[0_4px_12px_rgba(255,212,59,0.2)] hover:shadow-[0_4px_20px_rgba(255,212,59,0.4)]'
                        : 'bg-slate-100 dark:bg-brand-charcoal hover:bg-slate-200/80 dark:hover:bg-brand-charcoal/80 text-slate-700 dark:text-brand-white border border-slate-200/50 dark:border-white/5 hover:border-brand-yellow/30 dark:hover:border-brand-yellow/30'
                    }`}
                  >
                    Book Fleet Class
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Terms Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Toll info */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/5 flex space-x-4 items-start shadow-md">
            <div className="p-3 bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl text-brand-yellow flex-shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-white uppercase tracking-wider">Toll Gates &amp; Parking</h4>
              <p className="text-xs text-brand-gray/95 mt-1 leading-relaxed font-semibold">
                Toll fees, parking charges, and interstate permit entry taxes are charged at actuals and settled directly.
              </p>
            </div>
          </div>

          {/* Night charge details */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/5 flex space-x-4 items-start shadow-md">
            <div className="p-3 bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl text-brand-yellow flex-shrink-0">
              <Moon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-white uppercase tracking-wider">Driver Night Allowance</h4>
              <p className="text-xs text-brand-gray/95 mt-1 leading-relaxed font-semibold">
                Driver night allowance applies for outstation journeys scheduled between 10:00 PM and 6:00 AM.
              </p>
            </div>
          </div>

          {/* Outstation info */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/5 flex space-x-4 items-start shadow-md">
            <div className="p-3 bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl text-brand-yellow flex-shrink-0">
              <Milestone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-white uppercase tracking-wider">Outstation Trips (₹9 – ₹18 / KM)</h4>
              <p className="text-xs text-brand-gray/95 mt-1 leading-relaxed font-semibold">
                Outstation journeys start at ₹9/km. Round-trip journeys carry a standard daily minimum average of 250 km.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
