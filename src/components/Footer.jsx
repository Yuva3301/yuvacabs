import { Phone, Mail, MapPin, Clock, ShieldAlert, Plane } from 'lucide-react';
import { FaInstagram, FaGoogle, FaFacebook } from 'react-icons/fa6';

export default function Footer({ onAdminToggle, onNavigateAirport, onNavigateLocal, onNavigateOutstation }) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Local Taxi Hosur', href: '/local-taxi', isLocal: true },
    { name: 'Outstation Drop Taxi', href: '/outstation-taxi', isOutstation: true },
    { name: 'Bangalore Airport Taxi', href: '/airport-taxi', isAirport: true },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Hosur Routes', href: '#local-seo' },
  ];

  const secondaryLinks = [
    { name: 'About Yuva Call Taxi', href: '#about' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'Travel FAQs', href: '#faq' },
    { name: 'Book Now', href: '#contact' },
    { name: 'BLR Airport Drop Rates', href: '/airport-taxi#route-pricing', isAirport: true },
  ];

  const handleLinkClick = (e, link) => {
    if (link.isAirport) {
      if (onNavigateAirport) {
        e.preventDefault();
        onNavigateAirport();
      }
    } else if (link.isLocal) {
      if (onNavigateLocal) {
        e.preventDefault();
        onNavigateLocal();
      }
    } else if (link.isOutstation) {
      if (onNavigateOutstation) {
        e.preventDefault();
        onNavigateOutstation();
      }
    }
  };

  return (
    <footer className="bg-brand-black dark-blue-section border-t border-white/5 pt-16 pb-28 md:pb-12 text-left relative overflow-hidden">
      {/* Radial mesh glowing effect */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-yellow/5 glow-orb blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start mb-12">

        {/* Column 1: Brand intro */}
        <div className="lg:col-span-4 flex flex-col space-y-4 text-left">
          <a href="#home" className="flex items-center space-x-3 group">
            <img
              src="/logo.jpg"
              alt="Yuva Call Taxi Hosur Logo - 24/7 Taxi Service in Hosur"
              className="w-10 h-10 rounded-full object-cover border-2 border-brand-yellow shadow-[0_0_15px_rgba(255,212,59,0.35)] group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col text-left">
              <span className="text-xl font-black text-white logo-text-yuva leading-none">
                YUVA CALL TAXI<span className="text-brand-yellow text-glow-yellow">-HOSUR</span>
              </span>
              <span className="text-[9px] text-brand-silver font-extrabold uppercase tracking-widest mt-1 opacity-80">
                24/7 Taxi Service in Hosur • Cabs Near Me
              </span>
            </div>
          </a>

          <p className="text-xs text-brand-gray/95 font-medium leading-relaxed max-w-sm">
            Yuva Call Taxi is Hosur's trusted 24/7 taxi and cab service. Starting at ₹150 for local city cabs, ₹9/km for outstation one-way drop taxis, and fixed ₹2,200 for Bangalore Kempegowda Airport (BLR) transfers.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h4>
          <ul className="flex flex-col space-y-2.5 text-xs text-brand-gray font-bold">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`transition-colors duration-200 ${link.isAirport ? 'text-brand-yellow hover:underline' : 'hover:text-brand-yellow'
                    }`}
                >
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
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`transition-colors duration-200 ${link.isAirport ? 'text-brand-yellow hover:underline' : 'hover:text-brand-yellow'
                    }`}
                >
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
                Dinnur Main Road, Jeeva Nagar - Hosur 635109
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
                <span>Google Business Profile (Yuva Call Taxi)</span>
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

            <li className="flex items-center space-x-2.5">
              <FaFacebook className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a
                href="https://www.facebook.com/share/1BwH4m16r9/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors font-bold text-blue-400"
              >
                Yuva Call Taxi Hosur on Facebook
              </a>
            </li>

            <li className="flex items-center space-x-2.5 text-brand-gray">
              <Clock className="w-4 h-4 text-brand-yellow flex-shrink-0" />
              <span>24 Hours Support (7 Days a Week)</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Summary & Direct Hotline */}
      <div className="border-t border-white/5 pt-10 mt-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[11px] font-bold uppercase tracking-wider mb-4">
            <span>Hosur 24/7 Local, Outstation &amp; Bangalore Airport Taxi</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
            Yuva Call Taxi Hosur — 24/7 Taxi Service &amp; Cab Booking
          </h3>
          <p className="text-xs sm:text-sm text-brand-gray/80 leading-relaxed font-medium max-w-2xl mx-auto mb-6">
            Instant 5–10 min pickup across Hosur Railway Station, Bus Stand, SIPCOT, Bagalur Road, Bathalapalli, Mookandapalli, Dinnur, Jeeva Nagar &amp; 24/7 BLR Kempegowda Airport drops. Local rides from ₹150, outstation @ ₹9/km, Airport drops from ₹2,200.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href="tel:+919944271322"
              className="px-5 py-2.5 rounded-full bg-brand-yellow text-brand-black font-extrabold text-xs flex items-center space-x-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <Phone className="w-3.5 h-3.5 fill-brand-black" />
              <span>Call +91 99442 71322</span>
            </a>
            <a
              href="https://wa.me/919944271322?text=Hello!%20I%20would%20like%20to%20book%20a%20taxi%20in%20Hosur."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] text-white font-extrabold text-xs flex items-center space-x-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <span>Book via WhatsApp</span>
            </a>
          </div>

          <address className="text-xs text-brand-gray/70 not-italic">
            Yuva Call Taxi | Dinnur Main Road, Jeeva Nagar - Hosur 635109 | Phone: <a href="tel:+919944271322" className="text-brand-yellow font-bold hover:underline">+91 99442 71322</a> | https://www.yuvacalltaxi.com
          </address>
        </div>
      </div>

      {/* Copyright Bar & Admin trigger */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-gray font-semibold gap-4">
        <div>
          <span>© {new Date().getFullYear()} Yuva Call Taxi Hosur. All rights reserved.</span>
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
