import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <>
      {/* Permanent Sticky Bottom Action Ribbon (Mobile only, visible immediately) */}
      <div
        className="fixed bottom-0 left-0 w-full z-45 bg-brand-black/95 backdrop-blur-lg border-t border-brand-yellow/30 py-2 px-3 md:hidden shadow-[0_-5px_25px_rgba(255,212,59,0.15)]"
      >
        <div className="flex items-center justify-between text-[10px] text-brand-silver font-bold px-1 pb-1.5 border-b border-white/5 mb-1.5">
          <span className="flex items-center text-brand-yellow">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5" />
            5–10 Min Dispatch: Station • Bus Stand • SIPCOT
          </span>
          <span className="text-emerald-400 font-extrabold">24/7 Available</span>
        </div>

        <div className="grid grid-cols-12 gap-2 w-full max-w-lg mx-auto">
          {/* Call Hotline - 6 cols */}
          <a
            href="tel:+919944271322"
            className="col-span-6 flex items-center justify-center space-x-1.5 py-3 rounded-2xl bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-gold text-brand-black font-black text-xs tracking-tight shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-brand-black text-brand-black animate-pulse" />
            <span>Call Taxi Near Me</span>
          </a>

          {/* WhatsApp Button - 3 cols */}
          <a
            href="https://wa.me/919944271322?text=Hello%20YUVA%20CABS,%20I%20need%20a%20taxi%20pickup%20in%20Hosur."
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3 flex items-center justify-center space-x-1 py-3 rounded-2xl bg-[#25D366] text-white font-extrabold text-xs tracking-tight shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
            <span>WhatsApp</span>
          </a>

          {/* Book Online - 3 cols */}
          <a
            href="#contact"
            className="col-span-3 flex items-center justify-center space-x-1 py-3 rounded-2xl bg-white/10 text-white font-extrabold text-xs tracking-tight shadow-sm border border-white/10 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Book</span>
          </a>
        </div>
      </div>
    </>
  );
}
