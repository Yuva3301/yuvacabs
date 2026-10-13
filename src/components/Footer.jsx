import { Phone, Mail, MapPin, Clock, ShieldAlert, Star } from 'lucide-react';
import { FaInstagram, FaGoogle } from 'react-icons/fa6';

export default function Footer({ onAdminToggle }) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Hosur Routes', href: '#local-seo' },
  ];

  const secondaryLinks = [
    { name: 'About YUVA CABS', href: '#about' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'Travel FAQs', href: '#faq' },
    { name: 'Book Now', href: '#contact' },
  ];

  const keywords = [
    'Yuva Call Taxi Hosur',
    'most reliable taxi service in Hosur',
    'taxi service in Hosur',
    'call taxi near me',
    'taxi near me',
    'cab service in Hosur',
    'car rental in Hosur',
    'online taxi booking in Hosur',
    'local taxi service in Hosur',
    'outstation taxi in Hosur',
    'airport taxi in Hosur',
    'airport pickup and drop in Hosur',
    'one way taxi in Hosur',
    'round trip taxi in Hosur',
    '24 hours taxi service in Hosur',
    'seven seater taxi in Hosur',
    'Innova Crysta rental in Hosur',
    'Tempo Traveller rental in Hosur',
    'tour and travel service in Hosur',
    'cheap taxi service in Hosur',
    'call taxi near Hosur bus stand',
    'taxi near Hosur railway station',
    'taxi service near Hosur new bus stand',
    'call taxi in SIPCOT Hosur',
    'taxi service bagalur road Hosur',
    'call taxi denkanikottai road Hosur',
    'call taxi in dinnur hosur',
    'taxi service jeeva nagar hosur',
    'call taxi sanasandiram hosur',
    'taxi service mathigiri hosur',
    'call taxi kelamangalam road hosur',
    'taxi service attibele',
    'call taxi berigai',
    'taxi service mookandapalli hosur',
    'call taxi zuzuvadi hosur',
    'sedan car rental hosur',
    'swift dzire taxi hosur',
    'seven seater car rental hosur',
    'family trip taxi hosur',
    'business trip taxi hosur',
    'chennai airport taxi from hosur',
    'bangalore airport taxi from hosur',
    'hosur to bangalore taxi',
    'SIPCOT Phase 1 taxi',
    'SIPCOT Phase 2 cab',
    'TANSIDCO Hosur taxi',
    'Shanthi Nagar Hosur cab',
    'Old Bengaluru Road taxi',
    'Hosur IT Park taxi',
    'Shoolagiri taxi',
    'Chandapura cab',
    'Anekal taxi Hosur',
    'Bommasandra cab service',
    'Denkanikottai taxi',
    'Kelamangalam taxi'
  ];

  return (
    <footer className="bg-brand-black dark-blue-section border-t border-white/5 pt-16 pb-28 md:pb-12 text-left relative overflow-hidden">
      {/* Radial mesh glowing effect */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-yellow/5 glow-orb blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* Column 1: Brand intro & Local Keywords */}
        <div className="lg:col-span-4 flex flex-col space-y-4 text-left">
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-xl font-black text-white logo-text-yuva">
              YUVA<span className="text-brand-yellow text-glow-yellow">CABS</span>
            </span>
          </a>
          
          <p className="text-xs text-brand-gray/95 font-medium leading-relaxed max-w-sm">
            YUVA CABS is Hosur's premier 24/7 luxury taxi and cab booking service. We specialize in flat-rate airport pickups, reliable outstation travel, and corporate fleet hire. Enjoy safe, air-conditioned, and professional commutes.
          </p>

          {/* Hidden organic SEO keywords wrapper for search crawlers */}
          <div className="pt-2">
            <span className="text-[10px] text-brand-gray/60 uppercase font-bold tracking-wider block mb-1.5">Local Services Matrix</span>
            <div className="flex flex-wrap gap-1.5">
              {keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="text-[10px] text-brand-gray bg-white/5 border border-white/5 px-2 py-0.5 rounded-full font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h4>
          <ul className="flex flex-col space-y-2.5 text-xs text-brand-gray font-bold">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-brand-yellow transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Trust Links */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Company</h4>
          <ul className="flex flex-col space-y-2.5 text-xs text-brand-gray font-bold">
            {secondaryLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-brand-yellow transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Operations details */}
        <div className="lg:col-span-4 flex flex-col space-y-4 text-left">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Headquarters</h4>
          
          <ul className="flex flex-col space-y-3 text-xs text-brand-silver font-medium">
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-brand-yellow mt-0.5 flex-shrink-0" />
              <a 
                href="https://maps.app.goo.gl/gHwiq68N6k8QekBt8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-yellow transition-colors"
              >
                Railway Station Road, Hamman Nagar, Hosur, Tamil Nadu 635109
              </a>
            </li>
            
            <li className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0" />
              <a href="tel:+919944271322" className="hover:text-brand-yellow transition-colors font-bold">
                +91 99442 71322
              </a>
            </li>

            <li className="flex items-center space-x-2.5">
              <FaGoogle className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a 
                href="https://maps.app.goo.gl/gHwiq68N6k8QekBt8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-300 transition-colors font-bold text-blue-400 flex items-center space-x-1"
              >
                <span>Google Business Profile (4.9 ⭐)</span>
              </a>
            </li>

            <li className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-brand-yellow flex-shrink-0" />
              <a href="mailto:bookings@yuvacalltaxi.com" className="hover:text-brand-yellow transition-colors">
                bookings@yuvacalltaxi.com
              </a>
            </li>

            <li className="flex items-center space-x-2.5">
              <FaInstagram className="w-4 h-4 text-pink-400 flex-shrink-0" />
              <a 
                href="https://www.instagram.com/yuva_call_taxi_70?stkn=djVpOHU4aGhjcG1j" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-400 transition-colors font-bold text-pink-400"
              >
                @yuva_call_taxi_70 on Instagram
              </a>
            </li>

            <li className="flex items-center space-x-2.5 text-brand-gray">
              <Clock className="w-4 h-4 text-brand-yellow flex-shrink-0" />
              <span>24 Hours Support (7 Days a Week)</span>
            </li>
          </ul>
        </div>

      </div>

      {/* SEO Footer Content */}
      <div className="border-t border-white/5 pt-8 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-sm font-bold text-brand-silver mb-3">YUVA CABS — Yuva Call Taxi Hosur | Most Reliable Taxi Service in Hosur</h3>
          <p className="text-xs text-brand-gray/80 leading-relaxed font-medium">
            YUVA CABS (<strong className="text-brand-silver">Yuva Call Taxi Hosur</strong>) is recognized as the <strong className="text-brand-silver">most reliable taxi service in Hosur</strong>. Whether you need a <strong className="text-brand-silver">taxi service in Hosur</strong>, searching for <strong className="text-brand-silver">call taxi near me</strong> or <strong className="text-brand-silver">taxi near me</strong>, our 24/7 fleet offers the best <strong className="text-brand-silver">cab service in Hosur</strong> and <strong className="text-brand-silver">car rental in Hosur</strong> with seamless <strong className="text-brand-silver">online taxi booking in Hosur</strong>. We specialize in <strong className="text-brand-silver">local taxi service in Hosur</strong>, <strong className="text-brand-silver">outstation taxi in Hosur</strong>, <strong className="text-brand-silver">airport taxi in Hosur</strong>, <strong className="text-brand-silver">airport pickup and drop in Hosur</strong>, <strong className="text-brand-silver">one way taxi in Hosur</strong>, and <strong className="text-brand-silver">round trip taxi in Hosur</strong> with dedicated <strong className="text-brand-silver">24 hours taxi service in Hosur</strong>.
          </p>
          <p className="text-xs text-brand-gray/80 leading-relaxed font-medium mt-2">
            Looking for vehicle hire? Choose from our <strong className="text-brand-silver">sedan car rental hosur</strong> (<strong className="text-brand-silver">swift dzire taxi hosur</strong>), <strong className="text-brand-silver">seven seater taxi in Hosur</strong>, <strong className="text-brand-silver">seven seater car rental hosur</strong>, <strong className="text-brand-silver">Innova Crysta rental in Hosur</strong>, and <strong className="text-brand-silver">Tempo Traveller rental in Hosur</strong>. We provide end-to-end <strong className="text-brand-silver">tour and travel service in Hosur</strong> with <strong className="text-brand-silver">cheap taxi service in Hosur</strong> tariffs for <strong className="text-brand-silver">family trip taxi hosur</strong> and <strong className="text-brand-silver">business trip taxi hosur</strong>.
          </p>
          <p className="text-xs text-brand-gray/80 leading-relaxed font-medium mt-2">
            Instant 5-10 minute pickups available: <strong className="text-brand-silver">call taxi near Hosur bus stand</strong>, <strong className="text-brand-silver">taxi service near Hosur new bus stand</strong>, <strong className="text-brand-silver">taxi near Hosur railway station</strong>, <strong className="text-brand-silver">call taxi in SIPCOT Hosur</strong>, <strong className="text-brand-silver">taxi service bagalur road Hosur</strong>, <strong className="text-brand-silver">call taxi denkanikottai road Hosur</strong>, <strong className="text-brand-silver">call taxi in dinnur hosur</strong>, <strong className="text-brand-silver">taxi service jeeva nagar hosur</strong>, <strong className="text-brand-silver">call taxi sanasandiram hosur</strong>, <strong className="text-brand-silver">taxi service mathigiri hosur</strong>, <strong className="text-brand-silver">call taxi kelamangalam road hosur</strong>, <strong className="text-brand-silver">taxi service attibele</strong>, <strong className="text-brand-silver">call taxi berigai</strong>, <strong className="text-brand-silver">taxi service mookandapalli hosur</strong>, and <strong className="text-brand-silver">call taxi zuzuvadi hosur</strong>. We also operate daily <strong className="text-brand-silver">chennai airport taxi from hosur</strong>, <strong className="text-brand-silver">bangalore airport taxi from hosur</strong>, and direct <strong className="text-brand-silver">hosur to bangalore taxi</strong> services. Call <a href="tel:+919944271322" className="text-brand-yellow hover:underline font-bold">+91 99442 71322</a>.
          </p>
          <address className="text-xs text-brand-gray/70 mt-3 not-italic">
            YUVA CABS | Railway Station Road, Hamman Nagar, Hosur, Tamil Nadu 635109 | Phone: +91 99442 71322 | yuvacalltaxi.com
          </address>
        </div>
      </div>

      {/* Copyright Bar & Admin trigger */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-gray font-semibold gap-4">
        <div>
          <span>© {new Date().getFullYear()} YUVA CABS Hosur. All rights reserved.</span>
        </div>

        {/* Admin portal trigger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onAdminToggle}
            className="flex items-center space-x-1 hover:text-brand-yellow transition-colors cursor-pointer"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Admin Control Panel</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
