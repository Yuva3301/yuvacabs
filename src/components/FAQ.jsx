import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Which is the most reliable Hosur Call Taxi and Cab Service?',
      answer: 'Yuva Call Taxi-Hosur is recognized as the top-rated Hosur Call Taxi and premier Cab Service with a Google 4.9★ rating. We provide 24 hours Call Taxi service in Hosur, local rides from ₹150, fixed Airport Taxi Hosur drops from ₹2,200, and outstation taxi from ₹9/km. Call +91 99442 71322 for instant dispatch.'
    },
    {
      question: 'How can I book a Call Taxi Near Me or Taxi Service Near Me in Hosur?',
      answer: 'When searching for "Call Taxi Near Me" or "Taxi Service Near Me" in Hosur, simply call Yuva Call Taxi at +91 99442 71322 or chat on WhatsApp. Our GPS-dispatched drivers arrive in 5 to 10 minutes anywhere in Hosur with flat transparent fares and zero surge fees.'
    },
    {
      question: 'Is call taxi available near Hosur bus stand and railway station?',
      answer: 'Yes! We provide 24/7 dedicated call taxi near Hosur bus stand, taxi near Hosur railway station, and taxi service near Hosur new bus stand. Cabs are parked directly outside station platforms and bus stands for immediate departure.'
    },
    {
      question: 'Do you provide call taxi in SIPCOT Hosur, Mookandapalli, and Zuzuvadi?',
      answer: 'Yes! Yuva Call Taxi offers rapid 5-10 minute dispatch for call taxi in SIPCOT Hosur (Phase 1 & Phase 2), taxi service mookandapalli hosur, and call taxi zuzuvadi hosur for shift pickups, corporate visits, and airport transfers.'
    },
    {
      question: 'Which local areas and roads in Hosur are covered for 24/7 taxi pickup?',
      answer: 'We cover all local routes: taxi service bagalur road Hosur, call taxi denkanikottai road Hosur, call taxi in dinnur hosur, taxi service jeeva nagar hosur, call taxi sanasandiram hosur, taxi service mathigiri hosur, call taxi kelamangalam road hosur, taxi service attibele, and call taxi berigai.'
    },
    {
      question: 'Can I book a seven seater taxi, Innova Crysta rental, or Tempo Traveller rental in Hosur?',
      answer: 'Yes! We offer seven seater taxi in Hosur, seven seater car rental hosur, Innova Crysta rental in Hosur, and Tempo Traveller rental in Hosur. Perfect for family trip taxi hosur, business trip taxi hosur, and complete tour and travel service in Hosur.'
    },
    {
      question: 'Do you offer sedan car rental and Swift Dzire taxi in Hosur?',
      answer: 'Yes, YUVA CABS provides spotless AC sedan car rental hosur and swift dzire taxi hosur with verified professional chauffeurs for city rides, corporate transit, and outstation trips.'
    },
    {
      question: 'What is the fare for Bangalore airport taxi and Chennai airport taxi from Hosur?',
      answer: 'Bangalore airport taxi from Hosur (Kempegowda BLR Airport) has an exclusive fixed package rate in Swift Dzire: Non-A/C ₹2,200 and A/C ₹2,300 with 24/7 flight delay tracking. Chennai airport taxi from Hosur is available for one way taxi or round trip taxi from ₹9/km.'
    },
    {
      question: 'What are the rates for outstation taxi, one way taxi, and round trip taxi in Hosur?',
      answer: 'Outstation taxi in Hosur starts from ₹9/km for Hatchback, ₹10/km for Sedan (Dzire/Etios), and ₹18/km for Innova Crysta. We also offer one way taxi in Hosur where you pay only one-way for Bangalore, Chennai, Salem, Coimbatore, and Tirupati.'
    },
    {
      question: 'What is the Yuva Call Taxi Hosur phone number for 24 hours taxi service and online taxi booking?',
      answer: 'You can reach Yuva Call Taxi Hosur 24 hours a day at +91 99442 71322 for instant dispatch, outstation trips, airport transfers, and online taxi booking in Hosur. Confirmation is delivered in minutes.'
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
          <span className="text-xs text-brand-yellow font-extrabold tracking-widest uppercase">Support Center</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-gold text-glow-yellow">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-gray/90 leading-relaxed">
            Find immediate answers regarding pricing estimates, airport pick-ups, outstation travel policies, and passenger safety.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-brand-yellow/10"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-colors duration-300 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-brand-yellow' : 'text-brand-gray'}`} />
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight hover:text-brand-yellow transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 rounded-full bg-white/5 border border-white/5 text-brand-silver hover:text-brand-yellow"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-0 text-left border-t border-white/5">
                        <p className="text-xs sm:text-sm text-brand-silver/90 leading-relaxed font-semibold mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
