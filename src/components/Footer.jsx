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

      {/* Footer Summary & Contact Info */}
      <div className="border-t border-white/5 pt-8 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-sm font-bold text-brand-silver mb-3">YUVA CABS — Hosur's Most Trusted Taxi & Cab Service</h3>
          <p className="text-xs text-brand-gray/80 leading-relaxed font-medium">
            YUVA CABS provides 24/7 reliable local commutes and outstation travel across Hosur, Bangalore Airport, Chennai, Salem, Coimbatore, and surrounding regions. Enjoy transparent per-km pricing starting from ₹9/km, certified drivers, and a modern fleet of Hatchbacks, Sedans, SUVs, Innova Crysta, and Tempo Travellers. Call us at <a href="tel:+919944271322" className="text-brand-yellow hover:underline font-bold">+91 99442 71322</a> for instant booking.
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
