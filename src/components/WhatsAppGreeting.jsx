import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Phone, MapPin, Clock, CheckCheck, Sparkles } from 'lucide-react';

export default function WhatsAppGreeting() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [customText, setCustomText] = useState('');
  const [isDismissed, setIsDismissed] = useState(false);

  // Auto-open WhatsApp greeting modal 3 seconds after page load for immediate engagement
  useEffect(() => {
    // Check if user already dismissed in this session
    const dismissedSession = sessionStorage.getItem('yuva_wa_dismissed');
    if (dismissedSession) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsDismissed(true);
    sessionStorage.setItem('yuva_wa_dismissed', 'true');
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const quickMessages = [
    { label: '🚕 Instant Pickup Near Me', text: 'Hello YUVA CABS, I need an instant taxi pickup near me in Hosur.' },
    { label: '🚆 Hosur Railway Station', text: 'Hello YUVA CABS, I need a taxi pickup at Hosur Railway Station.' },
    { label: '🚌 Hosur Bus Stand', text: 'Hello YUVA CABS, I need a cab at Hosur Bus Stand.' },
    { label: '🏭 SIPCOT Phase 1 & 2', text: 'Hello YUVA CABS, I need a taxi pickup in SIPCOT Hosur.' },
    { label: '✈️ Bangalore Airport Drop', text: 'Hello YUVA CABS, I need an airport taxi to Bengaluru Airport (BLR).' }
  ];

  const sendWhatsApp = (msg) => {
    const messageToSend = msg || customText || 'Hello YUVA CALL TAXI, I am on your website and need to book a cab in Hosur.';
    const encoded = encodeURIComponent(messageToSend);
    window.open(`https://wa.me/919944271322?text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* 1. Minimized Floating WhatsApp Trigger Orb (Desktop & Mobile) */}
      <div className="fixed bottom-20 md:bottom-8 right-5 md:right-8 z-40 flex flex-col items-end pointer-events-auto">
        
        {/* Unread Message Tooltip Bubble (Visible when modal is closed) */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            onClick={handleOpen}
            className="mb-2.5 bg-brand-charcoal/95 border border-brand-yellow/30 text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md cursor-pointer hover:border-brand-yellow flex items-center space-x-2 group max-w-xs transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
            <span className="font-semibold text-brand-silver group-hover:text-white truncate">
              Need a taxi in Hosur? <strong className="text-brand-yellow">Chat with us</strong> 👋
            </span>
          </motion.div>
        )}

        {/* Floating WhatsApp Button */}
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.45)] cursor-pointer group transition-all"
            title="Chat with YUVA CALL TAXI on WhatsApp"
            aria-label="Open WhatsApp Greeting"
          >
            {/* Animated Ping ring */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
            
            <MessageSquare className="w-7 h-7 fill-white" />

            {/* Unread badge notification */}
            <span className="absolute -top-1 -right-1 bg-brand-yellow text-brand-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md border-2 border-brand-black">
              1
            </span>
          </motion.button>
        )}
      </div>

      {/* 2. Interactive Automated WhatsApp Greeting Card Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-3xl bg-brand-charcoal/95 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden text-left flex flex-col pointer-events-auto"
          >
            {/* Header: Official WhatsApp Business Theme */}
            <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black font-black text-lg shadow-sm">
                    Y
                  </div>
                  {/* Live Online Badge */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#075E54]" />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <h4 className="font-extrabold text-sm tracking-tight text-white">YUVA CALL TAXI</h4>
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-md font-bold">Verified</span>
                  </div>
                  <p className="text-[11px] text-emerald-100 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse mr-1" />
                    Online • Instant 5–10 Min Dispatch
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="p-1.5 rounded-full bg-black/10 hover:bg-black/25 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 max-h-80 overflow-y-auto bg-brand-black/40">
              
              {/* Automated Greeting Message Bubble from Yuva Cabs */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-white/10 border border-white/10 rounded-2xl rounded-tl-sm p-3.5 text-xs text-white space-y-1.5 shadow-sm"
              >
                <div className="flex items-center justify-between text-[10px] text-brand-yellow font-bold uppercase tracking-wider mb-1">
                  <span>YUVA CABS Dispatcher</span>
                  <span className="text-brand-gray text-[9px]">Just now</span>
                </div>
                <p className="font-semibold text-white leading-relaxed">
                  👋 Vanakkam! Welcome to <strong className="text-brand-yellow">YUVA CALL TAXI Hosur</strong>.
                </p>
                <p className="text-brand-silver leading-relaxed">
                  Looking for a taxi near you? Our cabs are stationed 24/7 across <strong className="text-white">Railway Station</strong>, <strong className="text-white">Bus Stand</strong>, <strong className="text-white">SIPCOT</strong> &amp; local Hosur neighborhoods for rapid 5–10 min pickup!
                </p>
                <p className="text-brand-yellow font-semibold pt-1">
                  Tap any option below to book instantly on WhatsApp:
                </p>
              </motion.div>

              {/* Quick Greeting Action Chips */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] text-brand-gray uppercase font-bold tracking-wider block">
                  Quick Select Pickup:
                </span>
                <div className="flex flex-col space-y-1.5">
                  {quickMessages.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendWhatsApp(item.text)}
                      className="w-full text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-[#25D366]/20 border border-white/5 hover:border-[#25D366]/50 text-brand-silver hover:text-white text-xs font-semibold transition-all flex items-center justify-between group cursor-pointer active:scale-98"
                    >
                      <span>{item.label}</span>
                      <Send className="w-3.5 h-3.5 text-brand-gray group-hover:text-[#25D366] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer Input Bar */}
            <div className="p-3 bg-brand-charcoal/80 border-t border-white/5 flex flex-col space-y-2">
              
              {/* Custom message input with Send */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type your pickup address..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendWhatsApp(customText)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-brand-gray/60 focus:outline-none focus:border-[#25D366] transition-colors"
                />
                <button
                  onClick={() => sendWhatsApp(customText)}
                  className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center space-x-1 cursor-pointer transition-all active:scale-95 shadow-sm"
                  title="Send message on WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Instant Call Alternative */}
              <div className="flex items-center justify-between pt-1 text-[11px] text-brand-silver px-1">
                <span>Or call directly 24/7:</span>
                <a
                  href="tel:+919944271322"
                  className="text-brand-yellow font-black hover:underline flex items-center"
                >
                  <Phone className="w-3 h-3 mr-1 fill-brand-yellow" />
                  +91 99442 71322
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
