import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, Phone, MessageSquare, Clock, ShieldCheck, MapPin, 
  Calendar, CheckCircle2, ChevronRight, Star, AlertCircle, 
  Users, Briefcase, Sparkles, Navigation, ArrowRightLeft, 
  Car, Info, Compass, ArrowRight, Sun, Moon, ArrowLeft,
  ChevronDown
} from 'lucide-react';
import AirportSEO from './AirportSEO';
import premiumTaxiImg from '../assets/premium_taxi.png';
import suvTaxiImg from '../assets/suv_taxi.png';
import innovaTaxiImg from '../assets/innova_taxi.png';
import tempoTravellerImg from '../assets/tempo_traveller.png';

export default function AirportTaxiPage({ theme, setTheme, onNavigateHome }) {
  // Booking Calculator State
  const [tripType, setTripType] = useState('hosur_to_blr'); // 'hosur_to_blr' or 'blr_to_hosur' or 'round_trip'
  const [pickupLoc, setPickupLoc] = useState('Hosur City (Bus Stand / Railway Station)');
  const [terminal, setTerminal] = useState('Terminal 1 (T1)');
  const [selectedCar, setSelectedCar] = useState('sedan');
  const [flightNumber, setFlightNumber] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  // Form Booking State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: 'Hosur City',
    terminal: 'Terminal 1 (T1)',
    date: '',
    time: '',
    flightNo: '',
    vehicle: 'sedan',
    tripDirection: 'Hosur to BLR Airport Drop',
    specialNotes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Set default date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setPickupDate(today);
    setFormData((prev) => ({ ...prev, date: today }));
  }, []);

  // Fleet configuration for airport trips
  const airportFleet = {
    sedan: {
      name: 'Swift Dzire / Toyota Etios',
      category: 'Executive Sedan',
      image: premiumTaxiImg,
      rateHosur: 2200,
      passengers: '4 Passengers',
      luggage: '2 Large Bags + 2 Hand Bags',
      features: ['Climate Control AC', 'Spacious Trunk Boot', 'Smooth Highway Ride', 'Phone Charging Port'],
      bestFor: 'Solo travelers, couples, business executives'
    },
    suv: {
      name: 'Maruti Ertiga / Triber',
      category: 'Comfort SUV',
      image: suvTaxiImg,
      rateHosur: 2800,
      passengers: '6 Passengers',
      luggage: '3 Large Bags + 3 Hand Bags',
      features: ['Dual Zone AC', 'Extra Legroom', 'Foldable Seats for Luggage', 'Comfortable Long Ride'],
      bestFor: 'Families & small groups with luggage'
    },
    innova: {
      name: 'Toyota Innova & Crysta',
      category: 'Premium Luxury MPV',
      image: innovaTaxiImg,
      rateHosur: 3500,
      passengers: '7 Passengers',
      luggage: '4 Large Bags + 4 Hand Bags',
      features: ['Captain Seats', 'Superior Highway Stability', 'VIP Meet & Greet', 'Maximum Luggage Space'],
      bestFor: 'VIP corporate guests, international long-haul luggage'
    },
    tempo: {
      name: 'Force Tempo Traveller',
      category: 'Group Luxury Van',
      image: tempoTravellerImg,
      rateHosur: 5500,
      passengers: '12 - 16 Passengers',
      luggage: '10+ Large Bags',
      features: ['Pushback Recliner Seats', 'High Roof AC', 'Dedicated Luggage Compartment', 'Audio System'],
      bestFor: 'Wedding delegations, corporate teams, tour groups'
    }
  };

  // Route Pricing Table
  const routeFares = [
    {
      origin: 'Hosur Bus Stand / Central',
      distance: '78 km',
      duration: '80 min',
      sedan: '₹2,200',
      suv: '₹2,800',
      innova: '₹3,500'
    },
    {
      origin: 'SIPCOT Phase 1 & 2 Hosur',
      distance: '82 km',
      duration: '85 min',
      sedan: '₹2,300',
      suv: '₹2,900',
      innova: '₹3,600'
    },
    {
      origin: 'Bagalur Road / Bagalur Junction',
      distance: '65 km',
      duration: '65 min',
      sedan: '₹2,100',
      suv: '₹2,600',
      innova: '₹3,400'
    },
    {
      origin: 'Attibele Border / Circle',
      distance: '72 km',
      duration: '75 min',
      sedan: '₹2,100',
      suv: '₹2,600',
      innova: '₹3,400'
    },
    {
      origin: 'Mathigiri / Kelamangalam Road',
      distance: '82 km',
      duration: '90 min',
      sedan: '₹2,300',
      suv: '₹2,900',
      innova: '₹3,600'
    },
    {
      origin: 'Krishnagiri Central',
      distance: '130 km',
      duration: '130 min',
      sedan: '₹3,400',
      suv: '₹4,400',
      innova: '₹5,500'
    }
  ];

  // Calculate current estimate based on user selections
  const getCalculatedPrice = () => {
    let base = airportFleet[selectedCar].rateHosur;
    if (pickupLoc.includes('SIPCOT') || pickupLoc.includes('Mathigiri')) {
      base += 100;
    } else if (pickupLoc.includes('Bagalur') || pickupLoc.includes('Attibele')) {
      base -= 100;
    } else if (pickupLoc.includes('Krishnagiri')) {
      base += 1200;
    }
    if (tripType === 'round_trip') {
      return base * 1.8; // Discounted round trip package
    }
    return base;
  };

  const handleWhatsAppBooking = () => {
    const tripName = tripType === 'hosur_to_blr' 
      ? 'Hosur to BLR Airport Drop' 
      : tripType === 'blr_to_hosur' 
        ? 'BLR Airport to Hosur Pickup' 
        : 'Hosur ⇄ BLR Airport Round Trip';
    
    const message = `Hello Yuva Cabs! ✈️ I would like to book a Bangalore Airport Taxi:%0A%0A` +
      `• *Trip:* ${tripName}%0A` +
      `• *Pickup Location:* ${pickupLoc}%0A` +
      `• *Airport Terminal:* ${terminal}%0A` +
      `• *Vehicle:* ${airportFleet[selectedCar].name} (${selectedCar.toUpperCase()})%0A` +
      `• *Estimated Fare:* ₹${getCalculatedPrice()}%0A` +
      `• *Date:* ${pickupDate || 'Today'}%0A` +
      `• *Time:* ${pickupTime || 'Immediate / As per schedule'}%0A` +
      (flightNumber ? `• *Flight No:* ${flightNumber}%0A` : '') +
      `%0APlease confirm cab availability and driver details. Thank you!`;

    window.open(`https://wa.me/919944271322?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'Please enter a valid 10-digit phone number';
    if (!formData.date) errors.date = 'Date is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Save airport booking to localStorage matching the existing AdminDashboard schema
    try {
      const existingBookings = JSON.parse(localStorage.getItem('yuva_bookings') || '[]');
      const newBooking = {
        id: 'AIRPORT-' + Date.now().toString().slice(-6),
        name: formData.name,
        phone: formData.phone,
        pickup: formData.pickup,
        drop: `Kempegowda Airport ${formData.terminal}`,
        date: formData.date,
        time: formData.time || 'Immediate',
        vehicle: formData.vehicle,
        service: 'Airport Taxi Drop/Pickup',
        flightNo: formData.flightNo,
        status: 'Pending Confirmation',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('yuva_bookings', JSON.stringify([newBooking, ...existingBookings]));
    } catch (err) {
      console.error('Storage error:', err);
    }

    setFormSubmitted(true);

    // Also trigger WhatsApp confirmation
    setTimeout(() => {
      const msg = `Hi Yuva Cabs! I submitted an Airport Taxi Booking via your website:%0A%0A` +
        `• *Name:* ${formData.name}%0A` +
        `• *Phone:* ${formData.phone}%0A` +
        `• *Pickup:* ${formData.pickup}%0A` +
        `• *Terminal:* ${formData.terminal}%0A` +
        `• *Date & Time:* ${formData.date} at ${formData.time}%0A` +
        `• *Flight No:* ${formData.flightNo || 'N/A'}%0A` +
        `• *Vehicle:* ${formData.vehicle.toUpperCase()}%0A` +
        (formData.specialNotes ? `• *Notes:* ${formData.specialNotes}%0A` : '') +
        `%0APlease confirm my booking.`;
      window.open(`https://wa.me/919944271322?text=${msg}`, '_blank');
    }, 600);
  };

  const airportFaqs = [
    {
      q: 'How much is the taxi fare from Hosur to Bangalore Airport (BLR)?',
      a: 'The taxi fare from Hosur to Kempegowda International Airport (BLR) starts from ₹2,100 - ₹2,200 for an AC Sedan (Swift Dzire / Toyota Etios) and ₹2,800 for a 6-seater SUV (Maruti Ertiga). We provide fixed, transparent fares with zero surge pricing, even during peak rush hours or rain.'
    },
    {
      q: 'What is the distance and travel time from Hosur to Kempegowda Airport?',
      a: 'The distance between Hosur and Kempegowda International Airport (BLR) is approximately 75 to 82 km. Via the Satellite Town Ring Road (STRR) and NH44, travel time is generally 75 to 90 minutes. During morning and evening peak traffic, we recommend allowing 2 hours.'
    },
    {
      q: 'Do you provide early morning (3 AM - 5 AM) and midnight airport pickups?',
      a: 'Yes, absolutely. We operate 24 hours a day, 7 days a week, 365 days a year. Early morning 2 AM, 3 AM, and 4 AM flight drops are our core specialty with a 100% on-time guarantee and 0% cancellation rate.'
    },
    {
      q: 'Will the driver wait if my incoming flight to Bangalore is delayed?',
      a: 'Yes! When you share your flight number (e.g., 6E-204, AI-506), our dispatch team tracks the flight live on aviation radar. Even if your flight is delayed by 1 or 2 hours, your chauffeur will be waiting at Terminal 1 or Terminal 2 arrival pickup zone without extra waiting fees.'
    },
    {
      q: 'Can I get a pickup from both Terminal 1 (T1) and Terminal 2 (T2)?',
      a: 'Yes, our drivers service both Kempegowda Airport Terminal 1 (Domestic & select International) and the new Garden Terminal 2 (International & select Domestic). Chauffeur details and pickup pillar number will be messaged to you upon landing.'
    },
    {
      q: 'Are highway tolls and parking charges included in the fare?',
      a: 'Our base fare covers the complete cab ride and fuel. State border permits/tolls (Fastag) and airport parking tickets can be paid directly or bundled into a single all-inclusive corporate invoice upon request.'
    },
    {
      q: 'Do you provide GST invoices for corporate travel reimbursement?',
      a: 'Yes, we provide official digital GST invoices and trip receipts that you can submit to your company for seamless reimbursement.'
    }
  ];

  return (
    <div className="bg-brand-black text-brand-white min-h-screen relative selection:bg-brand-yellow selection:text-brand-black transition-colors duration-300">
      {/* Helmet SEO Tags for Google Search Ranking */}
      <AirportSEO />

      {/* Top Navbar specifically tailored for Airport Landing Page */}
      <header className="sticky top-0 left-0 w-full z-50 bg-brand-black/95 backdrop-blur-md border-b border-brand-yellow/20 shadow-lg">
        {/* Urgent flight helpline ticker */}
        <div className="w-full bg-[#070a11] border-b border-white/5 py-1 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[10px] sm:text-xs font-bold">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-brand-yellow uppercase tracking-wider">24/7 Airport Hotline:</span>
              <a href="tel:+919944271322" className="text-white hover:text-brand-yellow font-black">
                +91 99442 71322
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-brand-silver">
              <span>✈️ Terminal 1 & 2 Pickups</span>
              <span>•</span>
              <span>⚡ Zero Surge Pricing</span>
              <span>•</span>
              <span>🛡️ 100% On-Time Guarantee</span>
            </div>
          </div>
        </div>

        {/* Main Header Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {onNavigateHome ? (
              <button
                onClick={onNavigateHome}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-brand-silver hover:text-white transition-all flex items-center space-x-1 text-xs"
                title="Back to Home Page"
              >
                <ArrowLeft className="w-4 h-4 text-brand-yellow" />
                <span className="hidden sm:inline font-bold">Main Site</span>
              </button>
            ) : (
              <a
                href="/"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-brand-silver hover:text-white transition-all flex items-center space-x-1 text-xs"
                title="Back to Home Page"
              >
                <ArrowLeft className="w-4 h-4 text-brand-yellow" />
                <span className="hidden sm:inline font-bold">Main Site</span>
              </a>
            )}

            {/* Brand Logo */}
            <a href="#airport-top" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black font-black text-lg shadow-[0_0_15px_rgba(255,212,59,0.3)]">
                ✈️
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm sm:text-base font-black tracking-tight logo-text-yuva leading-none">
                  YUVA CALL TAXI <span className="text-brand-yellow text-glow-yellow">AIRPORT</span>
                </span>
                <span className="text-[9px] text-brand-silver font-extrabold uppercase tracking-widest mt-0.5">
                  Hosur ⇄ Kempegowda Airport (BLR)
                </span>
              </div>
            </a>
          </div>

          {/* Header Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-bold text-brand-silver">
            <a href="#fare-calculator" className="hover:text-brand-yellow transition-colors">Fare Estimator</a>
            <a href="#route-pricing" className="hover:text-brand-yellow transition-colors">Route Rates</a>
            <a href="#fleet" className="hover:text-brand-yellow transition-colors">Our Fleet</a>
            <a href="#why-choose-us" className="hover:text-brand-yellow transition-colors">Why Yuva Cabs</a>
            <a href="#airport-faqs" className="hover:text-brand-yellow transition-colors">FAQs</a>
            <a href="#airport-booking" className="hover:text-brand-yellow transition-colors">Book Online</a>
          </nav>

          {/* Action Call Button */}
          <div className="flex items-center space-x-3">
            {setTheme && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-brand-yellow border border-white/5"
                title="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <motion.a
              href="tel:+919944271322"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-xs sm:text-sm shadow-[0_0_15px_rgba(255,212,59,0.3)]"
            >
              <Phone className="w-4 h-4 fill-brand-black" />
              <span>Call 99442 71322</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* Main Airport Landing Page Content */}
      <main id="airport-top">
        {/* HERO SECTION */}
        <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-white/5">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Breadcrumb for Google Search Robots & Travelers */}
            <div className="flex items-center space-x-2 text-xs text-brand-silver/70 mb-4 font-semibold">
              <a href="/" className="hover:text-brand-yellow">Home</a>
              <span>/</span>
              <span className="text-brand-yellow">Airport Taxi Hosur to Bangalore Airport (BLR)</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Value Proposition & Headlines */}
              <div className="lg:col-span-7 text-left space-y-6">
                {/* Verified Airport Pill */}
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-bold tracking-wide">
                  <Plane className="w-4 h-4 text-brand-yellow animate-pulse" />
                  <span>Hosur's #1 Rated Kempegowda Airport Cab Partner</span>
                </div>

                {/* Primary Targeted H1 for Google Search Results */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15]">
                  Bangalore Airport Taxi <br className="hidden sm:inline" />
                  from <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-amber-300 to-brand-gold text-glow-yellow">Hosur</span>
                </h1>

                <p className="text-sm sm:text-base text-brand-silver font-medium leading-relaxed max-w-2xl">
                  Catch every flight on time with zero stress. 24/7 dedicated airport drop & pickup between <strong className="text-white">Hosur & Kempegowda International Airport (BLR)</strong>. Flat upfront pricing starting at ₹2,100, live flight delay tracking, and 0% driver cancellation.
                </p>

                {/* Trust Badges Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col space-y-1">
                    <div className="flex items-center space-x-1.5 text-brand-yellow">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-black">100% On-Time</span>
                    </div>
                    <span className="text-[10px] text-brand-silver font-medium">Never miss early morning flights</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col space-y-1">
                    <div className="flex items-center space-x-1.5 text-brand-yellow">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-xs font-black">0% Cancellation</span>
                    </div>
                    <span className="text-[10px] text-brand-silver font-medium">Confirmed cab guaranteed</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col space-y-1">
                    <div className="flex items-center space-x-1.5 text-brand-yellow">
                      <Plane className="w-4 h-4" />
                      <span className="text-xs font-black">T1 & T2 Gates</span>
                    </div>
                    <span className="text-[10px] text-brand-silver font-medium">Meet & greet arrival pickup</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col space-y-1">
                    <div className="flex items-center space-x-1.5 text-brand-yellow">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs font-black">₹0 Surge Fees</span>
                    </div>
                    <span className="text-[10px] text-brand-silver font-medium">Fixed rates day & midnight</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="tel:+919944271322"
                    className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-sm shadow-[0_0_20px_rgba(255,212,59,0.3)] hover:scale-105 active:scale-95 transition-all"
                  >
                    <Phone className="w-4 h-4 fill-brand-black" />
                    <span>Call Airport Desk: 99442 71322</span>
                  </a>

                  <a
                    href="#fare-calculator"
                    className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/10 transition-all"
                  >
                    <Navigation className="w-4 h-4 text-brand-yellow" />
                    <span>Estimate Fare & Book</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Live Airport Fare Calculator Widget */}
              <div id="fare-calculator" className="lg:col-span-5 text-left">
                <div className="p-6 rounded-2xl bg-brand-charcoal/80 backdrop-blur-xl border border-brand-yellow/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-brand-yellow to-brand-gold text-brand-black font-black text-[10px] uppercase tracking-wider rounded-bl-xl shadow-md">
                    Instant Fare Estimator
                  </div>

                  <h3 className="text-lg font-black text-white flex items-center space-x-2 mb-4">
                    <Plane className="w-5 h-5 text-brand-yellow" />
                    <span>Airport Cab Fare Calculator</span>
                  </h3>

                  {/* Trip Type Selector */}
                  <div className="grid grid-cols-2 gap-2 mb-4 p-1 bg-black/40 rounded-xl border border-white/5">
                    <button
                      type="button"
                      onClick={() => setTripType('hosur_to_blr')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                        tripType === 'hosur_to_blr' 
                          ? 'bg-brand-yellow text-brand-black shadow-md' 
                          : 'text-brand-silver hover:text-white'
                      }`}
                    >
                      Hosur → Airport Drop
                    </button>
                    <button
                      type="button"
                      onClick={() => setTripType('blr_to_hosur')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                        tripType === 'blr_to_hosur' 
                          ? 'bg-brand-yellow text-brand-black shadow-md' 
                          : 'text-brand-silver hover:text-white'
                      }`}
                    >
                      Airport Pickup → Hosur
                    </button>
                  </div>

                  {/* Pickup & Terminal Selectors */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-silver mb-1">
                        {tripType === 'hosur_to_blr' ? 'Pickup Location in Hosur' : 'Destination in Hosur'}
                      </label>
                      <select
                        value={pickupLoc}
                        onChange={(e) => setPickupLoc(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow"
                      >
                        <option value="Hosur City (Bus Stand / Railway Station)">Hosur City (Bus Stand / Railway Station)</option>
                        <option value="SIPCOT Phase 1 & 2 Hosur">SIPCOT Phase 1 & 2 Hosur</option>
                        <option value="Bagalur Road / Bagalur Junction">Bagalur Road / Bagalur Junction</option>
                        <option value="Attibele Border / Circle">Attibele Border / Circle</option>
                        <option value="Mathigiri / Kelamangalam Road">Mathigiri / Kelamangalam Road</option>
                        <option value="Krishnagiri Central">Krishnagiri Central (+₹1,200)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-silver mb-1">
                          Airport Terminal
                        </label>
                        <select
                          value={terminal}
                          onChange={(e) => setTerminal(e.target.value)}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow"
                        >
                          <option value="Terminal 1 (T1)">Terminal 1 (T1)</option>
                          <option value="Terminal 2 (T2)">Terminal 2 (T2 - Garden)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-silver mb-1">
                          Flight Number (Opt.)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 6E-204"
                          value={flightNumber}
                          onChange={(e) => setFlightNumber(e.target.value)}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-brand-gray focus:outline-none focus:border-brand-yellow"
                        />
                      </div>
                    </div>

                    {/* Vehicle Choice */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-silver mb-1">
                        Select Cab Category
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['sedan', 'suv', 'innova'].map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setSelectedCar(v)}
                            className={`py-2 px-2 rounded-xl border text-center transition-all ${
                              selectedCar === v
                                ? 'border-brand-yellow bg-brand-yellow/15 text-white font-black'
                                : 'border-white/5 bg-white/5 text-brand-silver hover:bg-white/10 font-bold'
                            }`}
                          >
                            <span className="block text-xs capitalize">{v === 'innova' ? 'Innova Crysta' : v.toUpperCase()}</span>
                            <span className="block text-[10px] text-brand-yellow mt-0.5">
                              {v === 'sedan' ? '₹2,200' : v === 'suv' ? '₹2,800' : '₹3,500'}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Calculated Price Display */}
                    <div className="p-3 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-between mt-3">
                      <div>
                        <span className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-silver">
                          Estimated Fixed Rate
                        </span>
                        <span className="text-2xl font-black text-brand-yellow text-glow-yellow">
                          ₹{getCalculatedPrice().toLocaleString()}
                        </span>
                      </div>
                      <div className="text-right text-[10px] text-brand-silver">
                        <span className="block text-white font-bold">~78 - 82 KM</span>
                        <span>75 - 90 Mins Drive</span>
                      </div>
                    </div>

                    {/* CTA Buttons in Widget */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs transition-all shadow-md active:scale-95"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>Book on WhatsApp</span>
                      </button>

                      <a
                        href="tel:+919944271322"
                        className="flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-xs transition-all shadow-md active:scale-95"
                      >
                        <Phone className="w-4 h-4 fill-brand-black" />
                        <span>Call to Confirm</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POPULAR ROUTE PRICING MATRIX */}
        <section id="route-pricing" className="py-16 border-b border-white/5 bg-[#0e121d]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
                Transparent & Fixed Rates
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Hosur to Kempegowda Airport (BLR) Route Rates
              </h2>
              <p className="text-xs sm:text-sm text-brand-silver font-medium">
                Flat upfront fares. No hidden per-minute charges. No surprise midnight surge multipliers.
              </p>
            </div>

            {/* Fares Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-brand-charcoal/60 backdrop-blur-md shadow-xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-brand-silver font-black text-[11px] uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">Pickup Location</th>
                    <th className="py-3.5 px-3">Est. Distance</th>
                    <th className="py-3.5 px-3">Travel Time</th>
                    <th className="py-3.5 px-4 text-brand-yellow">Sedan (Dzire/Etios)</th>
                    <th className="py-3.5 px-4">SUV (Ertiga)</th>
                    <th className="py-3.5 px-4">Innova Crysta</th>
                    <th className="py-3.5 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-brand-silver">
                  {routeFares.map((route, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-white flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                        <span>{route.origin}</span>
                      </td>
                      <td className="py-4 px-3 font-medium text-white">{route.distance}</td>
                      <td className="py-4 px-3 font-medium">{route.duration}</td>
                      <td className="py-4 px-4 font-black text-brand-yellow">{route.sedan}</td>
                      <td className="py-4 px-4 font-bold text-white">{route.suv}</td>
                      <td className="py-4 px-4 font-bold text-white">{route.innova}</td>
                      <td className="py-4 px-4 text-center">
                        <a
                          href="tel:+919944271322"
                          className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-brand-yellow text-brand-black font-extrabold text-xs hover:bg-brand-gold transition-colors"
                        >
                          <Phone className="w-3 h-3 fill-brand-black" />
                          <span>Book</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Route notes */}
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-brand-silver flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Info className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span>Routes optimized via Satellite Town Ring Road (STRR) and NH44 for minimum congestion.</span>
              </div>
              <div className="font-bold text-white">
                Toll charges: Direct Fastag / All-inclusive corporate quotes available.
              </div>
            </div>
          </div>
        </section>

        {/* AIRPORT FLEET SHOWCASE */}
        <section id="fleet" className="py-16 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
                Airport-Ready Fleet
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Sanitized, Spacious Cabs for Every Passenger &amp; Luggage Need
              </h2>
              <p className="text-xs sm:text-sm text-brand-silver font-medium">
                All vehicles feature high-capacity luggage trunks, dual-zone AC, and experienced chauffeurs trained for airport timings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(airportFleet).map(([key, car]) => (
                <div
                  key={key}
                  className="rounded-2xl bg-brand-charcoal/50 border border-white/10 hover:border-brand-yellow/50 transition-all p-5 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-wider text-brand-yellow px-2 py-0.5 rounded bg-brand-yellow/10">
                        {car.category}
                      </span>
                      <span className="text-sm font-black text-white">
                        ₹{car.rateHosur.toLocaleString()}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white mb-3">
                      {car.name}
                    </h3>

                    {/* Car Image Display */}
                    <div className="w-full h-36 flex items-center justify-center mb-4 relative overflow-hidden rounded-xl bg-black/30 p-2">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Capacity Specs */}
                    <div className="grid grid-cols-2 gap-2 py-2 border-y border-white/5 mb-3 text-[11px] text-brand-silver">
                      <div className="flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-brand-yellow" />
                        <span>{car.passengers}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-brand-yellow" />
                        <span>{car.luggage.split('+')[0]}</span>
                      </div>
                    </div>

                    {/* Bullet features */}
                    <ul className="space-y-1.5 mb-4 text-[11px] text-brand-silver/90">
                      {car.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="tel:+919944271322"
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-brand-yellow hover:text-brand-black text-white font-extrabold text-xs text-center transition-all flex items-center justify-center space-x-1.5 group-hover:bg-brand-yellow group-hover:text-brand-black"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Book {car.category}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US / TRUST COMPARISON */}
        <section id="why-choose-us" className="py-16 border-b border-white/5 bg-[#0a0d15]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
                The Yuva Cabs Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Why Hosur Flyers Trust Us Over Ride-Hailing Apps
              </h2>
              <p className="text-xs sm:text-sm text-brand-silver font-medium">
                Relying on aggregator apps at 3 AM can lead to sudden cancellations and missed flights. Here is why Yuva Cabs is Hosur's dependable choice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white">Confirmed Driver Assigned Early</h3>
                <p className="text-xs text-brand-silver leading-relaxed font-medium">
                  We assign your driver and vehicle details hours ahead of time. You will receive vehicle number, driver contact, and GPS ETA well before your departure.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white">Live Inbound Flight Radar</h3>
                <p className="text-xs text-brand-silver leading-relaxed font-medium">
                  Landing late? We actively monitor flight radar. If your flight is delayed, your pickup time adjusts automatically so your cab is waiting when you step out.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-white">Clean Cabs &amp; Luggage Care</h3>
                <p className="text-xs text-brand-silver leading-relaxed font-medium">
                  Sanitized, fragrance-free AC cabs with polite drivers who happily assist with loading and unloading heavy international bags.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP AIRPORT BOOKING PROCESS */}
        <section className="py-14 border-b border-white/5 bg-[#0e121d]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
                Seamless Experience
              </span>
              <h2 className="text-2xl font-black text-white">
                How to Book Your Airport Cab in 3 Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-left relative">
                <span className="text-4xl font-black text-brand-yellow/20 absolute top-4 right-4">01</span>
                <span className="text-xs font-black text-brand-yellow uppercase tracking-wider block mb-1">Step 1</span>
                <h3 className="text-sm font-bold text-white mb-2">Book by Call or WhatsApp</h3>
                <p className="text-xs text-brand-silver font-medium">
                  Share your Hosur pickup address, flight timing, and preferred car type (Sedan, SUV, or Innova).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-left relative">
                <span className="text-4xl font-black text-brand-yellow/20 absolute top-4 right-4">02</span>
                <span className="text-xs font-black text-brand-yellow uppercase tracking-wider block mb-1">Step 2</span>
                <h3 className="text-sm font-bold text-white mb-2">Driver Confirmed in Advance</h3>
                <p className="text-xs text-brand-silver font-medium">
                  Receive chauffeur name, phone number, and car registration on your WhatsApp. No last-minute panic.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-left relative">
                <span className="text-4xl font-black text-brand-yellow/20 absolute top-4 right-4">03</span>
                <span className="text-xs font-black text-brand-yellow uppercase tracking-wider block mb-1">Step 3</span>
                <h3 className="text-sm font-bold text-white mb-2">Smooth &amp; On-Time Flight Ride</h3>
                <p className="text-xs text-brand-silver font-medium">
                  Driver arrives 10 minutes early at your doorstep. Relax and arrive at Kempegowda T1/T2 refreshed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DEDICATED AIRPORT BOOKING FORM */}
        <section id="airport-booking" className="py-16 border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-brand-charcoal/80 border border-brand-yellow/30 shadow-2xl text-left">
              <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
                  Direct Online Reservation
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Reserve Your Airport Cab Now
                </h2>
                <p className="text-xs sm:text-sm text-brand-silver font-medium">
                  Fill in your flight journey details. Our dispatch team will confirm immediately via call or WhatsApp.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">Airport Booking Request Received!</h3>
                  <p className="text-xs sm:text-sm text-brand-silver max-w-md mx-auto">
                    Thank you! We have opened WhatsApp with your booking details and our manager will call you shortly to confirm the assigned driver.
                  </p>
                  <a
                    href="tel:+919944271322"
                    className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-brand-yellow text-brand-black font-black text-xs"
                  >
                    <Phone className="w-4 h-4 fill-brand-black" />
                    <span>Call Us Now: +91 99442 71322</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-silver mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-black/50 border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none ${
                          formErrors.name ? 'border-red-500' : 'border-white/10 focus:border-brand-yellow'
                        }`}
                      />
                      {formErrors.name && <span className="text-[10px] text-red-400">{formErrors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-silver mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-black/50 border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none ${
                          formErrors.phone ? 'border-red-500' : 'border-white/10 focus:border-brand-yellow'
                        }`}
                      />
                      {formErrors.phone && <span className="text-[10px] text-red-400">{formErrors.phone}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-silver mb-1">
                        Pickup Address in Hosur
                      </label>
                      <input
                        type="text"
                        placeholder="Street, Area, Landmark"
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-silver mb-1">
                        Airport Terminal
                      </label>
                      <select
                        value={formData.terminal}
                        onChange={(e) => setFormData({ ...formData, terminal: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow"
                      >
                        <option value="Terminal 1 (T1)">Kempegowda Terminal 1 (T1)</option>
                        <option value="Terminal 2 (T2)">Kempegowda Terminal 2 (T2 - Garden)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-silver mb-1">
                        Date of Travel *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-silver mb-1">
                        Pickup Time
                      </label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-silver mb-1">
                        Flight Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 6E-204"
                        value={formData.flightNo}
                        onChange={(e) => setFormData({ ...formData, flightNo: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-silver mb-1">
                        Select Cab Type
                      </label>
                      <select
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow"
                      >
                        <option value="sedan">Sedan (Swift Dzire / Etios) - ~₹2,200</option>
                        <option value="suv">SUV (Maruti Ertiga 6-seater) - ~₹2,800</option>
                        <option value="innova">Innova Crysta Luxury - ~₹3,500</option>
                        <option value="tempo">Tempo Traveller (12-16 seater) - ~₹5,500</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-silver mb-1">
                        Trip Direction
                      </label>
                      <select
                        value={formData.tripDirection}
                        onChange={(e) => setFormData({ ...formData, tripDirection: e.target.value })}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-yellow"
                      >
                        <option value="Hosur to BLR Airport Drop">Hosur to BLR Airport (Drop)</option>
                        <option value="BLR Airport to Hosur Pickup">BLR Airport to Hosur (Pickup)</option>
                        <option value="Hosur ⇄ BLR Airport Round Trip">Hosur ⇄ BLR Airport (Round Trip)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-silver mb-1">
                      Luggage or Special Requirements
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. 3 large international trolley bags, child seat, require GST bill"
                      value={formData.specialNotes}
                      onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-yellow"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-gold text-brand-black font-black text-sm tracking-wide shadow-[0_0_25px_rgba(255,212,59,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    Confirm Airport Cab Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* AIRPORT FAQS WITH ACCORDION & GOOGLE SNIPPETS */}
        <section id="airport-faqs" className="py-16 border-b border-white/5 bg-[#0b0e17]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Frequently Asked Airport Cab Questions
              </h2>
              <p className="text-xs sm:text-sm text-brand-silver font-medium">
                Everything you need to know about booking, flight delays, fares, and terminal meet &amp; greet.
              </p>
            </div>

            <div className="space-y-3 text-left">
              {airportFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-brand-charcoal/40 backdrop-blur-sm overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                    >
                      <span className="text-xs sm:text-sm font-bold text-white flex items-center space-x-2">
                        <span className="text-brand-yellow">Q.</span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-brand-yellow transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 pb-5 sm:px-5 text-xs text-brand-silver leading-relaxed font-medium border-t border-white/5 pt-3"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO RICH CONTENT & LOCAL KEYWORD MATRIX */}
        <section className="py-12 border-b border-white/5 bg-[#080a10] text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 text-xs text-brand-silver/80 leading-relaxed">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              About Bangalore Airport Taxi Service from Hosur (Kempegowda International Airport BLR)
            </h3>
            <p>
              Looking for a dependable <strong className="text-white">Bangalore airport taxi from Hosur</strong>? Yuva Call Taxi provides 24 hours professional airport transfer services connecting all parts of Hosur — including Hosur Railway Station, New Bus Stand, SIPCOT Phase 1 &amp; Phase 2, Bagalur Road, Mathigiri, Attibele, Moranapalli, and Krishnagiri — directly to Kempegowda International Airport Bengaluru (BLR).
            </p>
            <p>
              Whether you are catching an early morning domestic flight from Terminal 1 (T1) or an international flight from the world-class Garden Terminal 2 (T2), our fleet of air-conditioned Sedans (Swift Dzire, Toyota Etios), 6-seater SUVs (Maruti Ertiga), and luxury executive MPVs (Toyota Innova Crysta) ensure punctual arrivals and pleasant highway journeys via NH44 and the Satellite Town Ring Road (STRR).
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-[10px] text-brand-gray font-medium">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Hosur to BLR Airport Taxi</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Bangalore Airport Taxi from Hosur</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Kempegowda Airport Cab Hosur</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Airport Drop Taxi Hosur</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">SIPCOT Hosur Airport Taxi</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Bagalur to Airport Cab</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Attibele to Bangalore Airport</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Innova Crysta Airport Hosur</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">Yuva Call Taxi 9944271322</span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-black border-t border-white/5 pt-10 pb-20 md:pb-10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-brand-silver">
          <div className="flex flex-col space-y-1">
            <span className="text-base font-black text-white logo-text-yuva">
              YUVA CALL TAXI <span className="text-brand-yellow">AIRPORT</span>
            </span>
            <span className="text-[11px] text-brand-gray">
              Hosur's trusted 24/7 Kempegowda Airport Shuttle &amp; Cab Service.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
            <a href="/" className="hover:text-brand-yellow">Main Website</a>
            <span>•</span>
            <a href="/#services" className="hover:text-brand-yellow">Local Cabs</a>
            <span>•</span>
            <a href="/#pricing" className="hover:text-brand-yellow">Outstation Fares</a>
            <span>•</span>
            <a href="tel:+919944271322" className="text-brand-yellow hover:underline">
              +91 99442 71322
            </a>
          </div>

          <div className="text-[11px] text-brand-gray">
            © {new Date().getFullYear()} Yuva Call Taxi. All rights reserved.
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY FLOATING CTA BAR */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-brand-charcoal/95 backdrop-blur-md border-t border-brand-yellow/30 px-4 py-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <button
          type="button"
          onClick={handleWhatsAppBooking}
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 text-white font-extrabold text-xs shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </button>

        <a
          href="tel:+919944271322"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-gold text-brand-black font-black text-xs shadow-md"
        >
          <Phone className="w-4 h-4 fill-brand-black" />
          <span>Call 99442 71322</span>
        </a>
      </div>
    </div>
  );
}
