import { Phone, Mail, MapPin, Clock, ShieldAlert, Star } from 'lucide-react';
import { FaInstagram, FaGoogle, FaFacebook } from 'react-icons/fa6';

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

  return (
    <footer className="bg-brand-black dark-blue-section border-t border-white/5 pt-16 pb-28 md:pb-12 text-left relative overflow-hidden">
      {/* Radial mesh glowing effect */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-yellow/5 glow-orb blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* Column 1: Brand intro */}
        <div className="lg:col-span-4 flex flex-col space-y-4 text-left">
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-xl font-black text-white logo-text-yuva">
              YUVA<span className="text-brand-yellow text-glow-yellow">CABS</span>
            </span>
          </a>
          
          <p className="text-xs text-brand-gray/95 font-medium leading-relaxed max-w-sm">
            YUVA CABS is Hosur's premier 24/7 luxury taxi and cab booking service. We specialize in flat-rate airport pickups, reliable outstation travel, and corporate fleet hire. Enjoy safe, air-conditioned, and professional commutes.
          </p>
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

            <li className="flex items-center space-x-2.5">
              <FaFacebook className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a 
                href="https://www.facebook.com/share/1BwH4m16r9/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-300 transition-colors font-bold text-blue-400"
              >
                YUVA Call Taxi Hosur on Facebook
              </a>
            </li>

            <li className="flex items-center space-x-2.5 text-brand-gray">
              <Clock className="w-4 h-4 text-brand-yellow flex-shrink-0" />
              <span>24 Hours Support (7 Days a Week)</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Summary, Local Keyword Directory & Contact Info */}
      <div className="border-t border-white/5 pt-10 mt-8">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[11px] font-bold uppercase tracking-wider mb-4">
            <span>Hosur 24/7 Local & Outstation Taxi Directory</span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-white mb-2">
            Yuva Call Taxi Hosur — Most Reliable Taxi Service in Hosur
          </h3>
          <p className="text-xs text-brand-gray/80 leading-relaxed font-medium max-w-3xl mx-auto mb-6">
            YUVA CABS (Yuva Call Taxi Hosur) is the #1 choice for local taxi service in Hosur, 24 hours taxi service in Hosur, call taxi near me dispatch, and instant online taxi booking in Hosur. Enjoy transparent per-km rates starting from ₹9/km, sanitized AC cars, and 5–10 min arrival across all Hosur areas. Call <a href="tel:+919944271322" className="text-brand-yellow hover:underline font-extrabold">+91 99442 71322</a>.
          </p>

          {/* Keyword Quick-Call Directory Matrix for Google Top Ranking & Call Generation */}
          <div className="text-left bg-white/[0.02] border border-white/5 rounded-2xl p-5 mb-8">
            <span className="text-[11px] text-brand-yellow font-extrabold uppercase tracking-wider block mb-3">
              ⚡ Instant 5–10 Min Pickup Hubs & Vehicle Rentals (Tap to Call +91 99442 71322):
            </span>
            <div className="flex flex-wrap gap-2 text-[11px]">
              {[
                { name: 'Yuva Call Taxi Hosur', tel: '+919944271322' },
                { name: 'most reliable taxi service in Hosur', tel: '+919944271322' },
                { name: 'taxi service in Hosur', tel: '+919944271322' },
                { name: 'call taxi near me', tel: '+919944271322' },
                { name: 'taxi near me', tel: '+919944271322' },
                { name: 'cab service in Hosur', tel: '+919944271322' },
                { name: 'car rental in Hosur', tel: '+919944271322' },
                { name: 'online taxi booking in Hosur', tel: '+919944271322' },
                { name: 'local taxi service in Hosur', tel: '+919944271322' },
                { name: 'outstation taxi in Hosur', tel: '+919944271322' },
                { name: 'airport taxi in Hosur', tel: '+919944271322' },
                { name: 'airport pickup and drop in Hosur', tel: '+919944271322' },
                { name: 'one way taxi in Hosur', tel: '+919944271322' },
                { name: 'round trip taxi in Hosur', tel: '+919944271322' },
                { name: '24 hours taxi service in Hosur', tel: '+919944271322' },
                { name: 'seven seater taxi in Hosur', tel: '+919944271322' },
                { name: 'Innova Crysta rental in Hosur', tel: '+919944271322' },
                { name: 'Tempo Traveller rental in Hosur', tel: '+919944271322' },
                { name: 'tour and travel service in Hosur', tel: '+919944271322' },
                { name: 'cheap taxi service in Hosur', tel: '+919944271322' },
                { name: 'call taxi near Hosur bus stand', tel: '+919944271322' },
                { name: 'taxi near Hosur railway station', tel: '+919944271322' },
                { name: 'taxi service near Hosur new bus stand', tel: '+919944271322' },
                { name: 'call taxi in SIPCOT Hosur', tel: '+919944271322' },
                { name: 'taxi service bagalur road Hosur', tel: '+919944271322' },
                { name: 'call taxi denkanikottai road Hosur', tel: '+919944271322' },
                { name: 'call taxi in dinnur hosur', tel: '+919944271322' },
                { name: 'taxi service jeeva nagar hosur', tel: '+919944271322' },
                { name: 'call taxi sanasandiram hosur', tel: '+919944271322' },
                { name: 'taxi service mathigiri hosur', tel: '+919944271322' },
                { name: 'call taxi kelamangalam road hosur', tel: '+919944271322' },
                { name: 'taxi service attibele', tel: '+919944271322' },
                { name: 'call taxi berigai', tel: '+919944271322' },
                { name: 'taxi service mookandapalli hosur', tel: '+919944271322' },
                { name: 'call taxi zuzuvadi hosur', tel: '+919944271322' },
                { name: 'sedan car rental hosur', tel: '+919944271322' },
                { name: 'swift dzire taxi hosur', tel: '+919944271322' },
                { name: 'seven seater car rental hosur', tel: '+919944271322' },
                { name: 'family trip taxi hosur', tel: '+919944271322' },
                { name: 'business trip taxi hosur', tel: '+919944271322' },
                { name: 'chennai airport taxi from hosur', tel: '+919944271322' },
                { name: 'bangalore airport taxi from hosur', tel: '+919944271322' },
                { name: 'hosur to bangalore taxi', tel: '+919944271322' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={`tel:${item.tel}`}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-brand-yellow hover:text-brand-black border border-white/5 hover:border-brand-yellow text-brand-silver transition-all duration-200 inline-flex items-center space-x-1"
                  title={`Call Yuva Call Taxi for ${item.name}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mr-1" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <address className="text-xs text-brand-gray/70 not-italic">
            YUVA CABS (Yuva Call Taxi) | Railway Station Road, Hamman Nagar, Hosur, Tamil Nadu 635109 | Phone: <a href="tel:+919944271322" className="text-brand-yellow font-bold">+91 99442 71322</a> | yuvacalltaxi.com
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
