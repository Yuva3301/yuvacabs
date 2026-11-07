import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I book a 24 Hours Call Taxi in Hosur?',
      answer: 'You can book a 24 hours call taxi in Hosur with Yuva Call Taxi by calling our 24/7 hotline at +91 99442 71322 or messaging us on WhatsApp. Our drivers provide prompt 5 to 10 minute pickup anywhere in Hosur with zero midnight surge charges.'
    },
    {
      question: 'What is the Hosur Taxi Number for instant cab booking?',
      answer: 'The official Hosur Call Taxi Number for Yuva Call Taxi is +91 99442 71322. Call or WhatsApp anytime for instant local cabs, airport drop and pickup, and outstation taxi bookings.'
    },
    {
      question: 'What are the fares for Local Taxi Service in Hosur?',
      answer: 'Local taxi service in Hosur starts at just ₹150 for the first 4 kilometers in Non-A/C Hatchback (₹180 for A/C). Sedan cabs (Swift Dzire / Toyota Etios) start from ₹180 Non-A/C and ₹220 A/C with clear per-km billing thereafter.'
    },
    {
      question: 'What is the fare for Hosur to Bangalore Airport Taxi (BLR)?',
      answer: 'Yuva Call Taxi offers an exclusive fixed package for Hosur to Bangalore Kempegowda Airport (BLR): ₹2,200 for Non-A/C Sedan and ₹2,300 for A/C Sedan (Swift Dzire/Etios). 6-seater Ertiga SUV is ₹2,800. We track flight schedules 24/7 with zero waiting charges for delayed landings.'
    },
    {
      question: 'Do you provide Outstation Taxi in Hosur with One Way Drop Taxi rates?',
      answer: 'Yes! We offer affordable outstation taxi service starting at ₹9/km for Hatchback and ₹10/km for Sedan. For one-way drop trips to Bangalore, Chennai, Salem, Coimbatore, or Tirupati, you only pay for one-way distance with zero return charges.'
    },
    {
      question: 'Is taxi service available at Hosur Railway Station and Bus Stand?',
      answer: 'Yes, we provide dedicated 24/7 Railway Station Taxi in Hosur right outside Platforms 1 & 2 on Station Road, as well as immediate pickup at Hosur Central and New Bus Stands with 3 to 5 minute response time.'
    },
    {
      question: 'Do you provide taxi service in SIPCOT, Bagalur, Dinnur, and Jeeva Nagar?',
      answer: 'Yes! Yuva Call Taxi offers rapid 5 to 10 minute pickup for SIPCOT Taxi Service (Phase 1 & Phase 2 industrial belts), Bagalur Taxi Service, Dinnur Call Taxi, and Jeeva Nagar Taxi Service, along with Mookandapalli, Mathigiri, and Bathalapalli.'
    },
    {
      question: 'Can I book 7-seater Innova Crysta or Tempo Traveller in Hosur?',
      answer: 'Yes, we maintain a fleet of 6 & 7-seater Maruti Ertiga and Toyota Innova Crysta MPVs (from ₹18/km) and 12-to-16 seater Force Tempo Travellers (from ₹38/km) for family holidays, wedding transport, and temple tours.'
    }
  ];

  const toggleFAQ = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Glow ambient spots */}
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 rounded-full bg-brand-blue/5 glow-orb blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-yellow/5 glow-orb blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col space-y-4">
          <span className="text-xs text-brand-yellow font-extrabold tracking-widest uppercase">Customer Help Center</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-gold text-glow-yellow">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-gray/90 leading-relaxed">
            Find immediate answers regarding local fares, Bangalore airport drop rates, outstation travel, and Hosur pickup areas.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-charcoal/50 border-brand-yellow/40 shadow-[0_4px_20px_rgba(255,212,59,0.08)]'
                    : 'bg-brand-charcoal/20 border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-brand-yellow text-brand-black rotate-180'
                        : 'bg-white/5 text-brand-silver'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-silver leading-relaxed font-normal border-t border-white/5 mt-1">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Hotline Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10">
          <p className="text-sm text-brand-silver mb-3">
            Have a question about a specific route or immediate cab booking in Hosur?
          </p>
          <a
            href="tel:+919944271322"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-brand-yellow text-brand-black font-extrabold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 fill-brand-black" />
            <span>Call +91 99442 71322</span>
          </a>
        </div>

      </div>
    </section>
  );
}
