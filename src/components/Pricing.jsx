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
      type: 'Toyota Innova 7+1 Seater',
      nonAcMin: 250, acMin: 280,
      nonAcExtra: 16, acExtra: 17,
      seating: '7 + 1 Passengers',
      suitcases: '4 - 5 Bags',
      notes: 'Local minimum 4 km limit',
      bestFor: 'Family highway trips, pilgrim tours & corporate runs.',
      tag: 'Highway Specialist',
      isPopular: false
    },
    {
      vehicle: 'Innova Crysta',
      subTitle: 'Toyota Innova Crysta Luxury',
      type: 'Gold-Standard Luxury MPV',
      nonAcMin: 300, acMin: 350,
      nonAcExtra: 20, acExtra: 24,
      seating: '7 + 1 Passengers',
      suitcases: '4 - 5 Bags',
      notes: 'Local minimum 4 km limit',
      bestFor: 'VIP corporate transits, luxury family tours & long distance.',
      tag: 'Premium Luxury',
      isPopular: false
    },
    {
      vehicle: 'Tempo Traveller',
      subTitle: '12+1 Seater Coach',
      type: 'Large Multi-Passenger Tourer Coach',
      nonAcMin: 400, acMin: 500,
      nonAcExtra: 38, acExtra: 38,
      seating: '12 + 1 Passengers',
      suitcases: '8 - 10 Bags',
      notes: 'Minimum 10 kms',
      bestFor: 'Mega family excursions, weddings, pilgrim groups & team outings.',
      tag: 'Mega Group Fleet',
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-brand-charcoal/20 dark-blue-section relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[10%] left-[-5%] w-96 h-96 rounded-full bg-brand-gold/5 glow-orb blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 rounded-full bg-brand-blue/5 glow-orb blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col space-y-4">
          <span className="text-xs text-brand-yellow font-extrabold tracking-widest uppercase">Transparent Regional Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white tracking-tight leading-tight">
            Premium Fleet & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-gold text-glow-yellow">Fares Table</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-gray/90 leading-relaxed">
            No hidden costs. No surprises. Our flat regional rates are calculated systematically to provide total clarity for your budget.
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
              <span className="text-[10px] text-brand-silver font-semibold">Tamil Nadu & Karnataka</span>
            </div>
            <div>
              <div className="text-xl font-black text-white">
                Outstation Trips @ <span className="text-brand-yellow text-glow-yellow text-2xl font-black">₹9 – ₹12</span> / KM
              </div>
              <p className="text-xs text-brand-silver/90 mt-1">
                Flat per KM rates for round trips, family excursions & intercity journeys. No surge fees!
              </p>
            </div>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-brand-gray font-medium">Hatchback, Sedan, SUV & Innova available</span>
              <a href="#contact" className="text-xs font-bold text-brand-yellow hover:underline flex items-center space-x-1">
                <span>Book Outstation</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Box 2: Swift Dzire Airport Drop & Pickup Package (Non-AC ₹2200 / AC ₹2300) */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600/15 via-brand-charcoal to-brand-yellow/10 border-2 border-brand-yellow/50 relative overflow-hidden flex flex-col justify-between space-y-3 shadow-[0_0_30px_rgba(255,212,59,0.18)] text-left group">
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-[10px] uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                <Plane className="w-3 h-3 text-brand-black" />
                <span>Airport Fixed Package</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-extrabold flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-emerald-400" /> 24/7 Guaranteed Pickup
              </span>
            </div>

            {/* Car Name & Route */}
            <div>
              <div className="flex items-center space-x-2">
                <Car className="w-4 h-4 text-brand-yellow" />
                <h3 className="text-lg font-black text-white tracking-tight">
                  Swift Dzire <span className="text-brand-yellow font-extrabold">— Airport Drop & Pickup</span>
                </h3>
              </div>
              <p className="text-xs text-brand-silver font-semibold mt-0.5">
                Hosur ⇄ Kempegowda International Airport Bengaluru (BLR)
              </p>
            </div>

            {/* Rates Pills - Non A/C ₹2200 and A/C ₹2300 */}
            <div className="grid grid-cols-2 gap-3 py-1">
              {/* Non-A/C Rate Box */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-yellow/40 transition-all text-center">
                <span className="text-[10px] text-brand-silver uppercase font-extrabold tracking-wider block">Non-A/C Rate</span>
                <span className="text-2xl font-black text-brand-yellow">₹2,200</span>
                <span className="text-[10px] text-brand-gray block mt-0.5">Flat One-Way Fare</span>
              </div>

              {/* A/C Rate Box */}
              <div className="p-2.5 rounded-xl bg-brand-yellow/10 border border-brand-yellow/40 hover:border-brand-yellow transition-all text-center shadow-[0_0_15px_rgba(255,212,59,0.1)]">
                <span className="text-[10px] text-brand-yellow uppercase font-extrabold tracking-wider block">A/C Service Rate</span>
                <span className="text-2xl font-black text-white text-glow-yellow">₹2,300</span>
                <span className="text-[10px] text-brand-silver block mt-0.5">Flat One-Way Fare</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
              <span className="text-[10px] text-brand-gray font-medium">Flight delay tracking included</span>
              <div className="flex items-center space-x-2">
                <a
                  href="tel:+919944271322"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center space-x-1 transition-all"
                >
                  <Phone className="w-3 h-3 text-brand-yellow" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/919944271322?text=Hello! I want to book Swift Dzire for Bangalore Airport Drop/Pickup. (Non-AC ₹2200 / AC ₹2300)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center space-x-1 shadow-sm transition-all"
                >
                  <MessageSquare className="w-3 h-3 fill-white" />
                  <span>Book Swift Dzire</span>
                </a>
              </div>
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
              <h4 className="text-sm font-bold text-brand-white uppercase tracking-wider">Toll Gates & Parking</h4>
              <p className="text-xs text-brand-gray/95 mt-1 leading-relaxed font-semibold">
                Toll fees, parking fees, and interstate permit entry taxes are charged extra at actuals and are settled directly by the customer.
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
                An additional driver night allowance applies for journeys scheduled between 10:00 PM and 6:00 AM.
              </p>
            </div>
          </div>

          {/* Outstation info */}
          <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/5 flex space-x-4 items-start shadow-md">
            <div className="p-3 bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl text-brand-yellow flex-shrink-0">
              <Milestone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-white uppercase tracking-wider">Outstation Trips (₹9 – ₹12 / KM)</h4>
              <p className="text-xs text-brand-gray/95 mt-1 leading-relaxed font-semibold">
                Outstation journeys start at just ₹9 – ₹12 / KM. Round-trip outstation journeys carry a minimum billing average of 250 Kilometers per calendar day.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
