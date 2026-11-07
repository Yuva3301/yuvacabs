import { Clock, Banknote, UserCheck, Plane, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Service Availability',
      description: 'Ride at any time of night or day. Our dispatch team and driver network are active 24/7 across Hosur.',
      glowColor: 'group-hover:border-brand-yellow/30'
    },
    {
      icon: Banknote,
      title: 'Affordable & Flat Pricing',
      description: 'Transparent rates starting at ₹150 for local rides and ₹9/km for outstation. Zero surprise fees or peak surge charges.',
      glowColor: 'group-hover:border-brand-yellow/30'
    },
    {
      icon: UserCheck,
      title: 'Professional Chauffeurs',
      description: 'Background-verified, licensed drivers with deep knowledge of local routes, highway corridors, and Bangalore traffic.',
      glowColor: 'group-hover:border-brand-yellow/30'
    },
    {
      icon: Plane,
      title: 'Bangalore Airport Transfers',
      description: 'Reliable transfers to Bengaluru Kempegowda International Airport (BLR) with flight tracking to avoid delays.',
      glowColor: 'group-hover:border-brand-yellow/30'
    },
    {
      icon: Zap,
      title: 'Rapid 5-10 Min Pickup',
      description: 'Instant ride confirmation via direct call, WhatsApp, or online booking with rapid dispatch across Hosur.',
      glowColor: 'group-hover:border-brand-yellow/30'
    },
    {
      icon: ShieldCheck,
      title: 'Clean & Sanitized Fleet',
      description: 'Cleaned, air-conditioned premium sedans, SUVs, and luxury Innova Crysta cabs maintained to the highest hygiene standards.',
      glowColor: 'group-hover:border-brand-yellow/30'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="why-us" className="py-24 bg-brand-charcoal/40 dark-blue-section relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-[20%] left-[-5%] w-96 h-96 rounded-full bg-brand-yellow/5 glow-orb blur-[120px]" />
      <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 rounded-full bg-brand-purple/5 glow-orb blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col space-y-4">
          <span className="text-xs text-brand-yellow font-extrabold tracking-widest uppercase">The Yuva Advantage</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-gold text-glow-yellow">Yuva Call Taxi</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-gray/90 leading-relaxed">
            Experience reliable, punctual, and safe cab travel across Hosur, Kempegowda Airport, and outstation destinations.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`group glass-card glass-card-hover p-8 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col space-y-5 transition-all duration-300 ${feature.glowColor}`}
              >
                {/* Embedded Ambient glow in card */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-brand-yellow/5 group-hover:bg-brand-yellow/15 blur-xl transition-all duration-500 pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/5 border border-brand-yellow/15 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-black shadow-[0_0_15px_rgba(255,212,59,0.15)] group-hover:shadow-[0_0_25px_rgba(255,212,59,0.35)] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col space-y-2 text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-brand-gray/95 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
