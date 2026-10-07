import { MapPin, Navigation, ShieldCheck, CheckCircle2, Phone, MessageSquare, Car, Layers } from 'lucide-react';

export default function LocalKeywordMatrix() {
  const routeDistances = [
    { route: 'Hosur to Bangalore Taxi', distance: '45 km', time: '1 hr', rate: '₹10/km', type: 'Local & Outstation' },
    { route: 'Hosur to BLR Airport Taxi', distance: '80 km', time: '1 hr 45 min', rate: 'Fixed ₹2,200', type: 'Kempegowda Airport' },
    { route: 'Hosur to Chennai Cab', distance: '310 km', time: '5.5 hrs', rate: '₹10/km', type: 'One-Way Drop Taxi' },
    { route: 'Hosur to Salem Taxi', distance: '160 km', time: '2.5 hrs', rate: '₹10/km', type: 'NH44 Expressway' },
    { route: 'Hosur to Coimbatore Cab', distance: '320 km', time: '5.5 hrs', rate: '₹10/km', type: 'Textile Hub Outstation' },
    { route: 'Hosur to Tirupati Taxi', distance: '245 km', time: '4.5 hrs', rate: '₹10/km', type: 'Pilgrimage Special' },
    { route: 'Hosur to Ooty Cab', distance: '285 km', time: '6.5 hrs', rate: '₹10/km', type: 'Hill Station Package' },
    { route: 'Hosur to Pondicherry Taxi', distance: '260 km', time: '5 hrs', rate: '₹10/km', type: 'Weekend Getaway' },
    { route: 'Hosur to Madurai Cab', distance: '380 km', time: '6 hrs', rate: '₹10/km', type: 'Heritage Express' },
    { route: 'Hosur to Mysore Taxi', distance: '195 km', time: '3.5 hrs', rate: '₹10/km', type: 'Palace Tour' }
  ];

  const hyperLocalHubs = [
    { name: 'SIPCOT Phase 1 – Zuzuvadi / Mookandapalli', zone: 'Industrial Employment Core', dispatch: '5 - 8 Mins', rate: 'From ₹10/km', badge: 'High Priority' },
    { name: 'TANSIDCO Industrial Estate', zone: 'Hosur Manufacturing Belt', dispatch: '5 - 10 Mins', rate: 'From ₹10/km', badge: 'Industrial' },
    { name: 'SIPCOT Phase 2 – Moranapalli / Thorapalli', zone: 'Automotive & Heavy Industry', dispatch: '5 - 10 Mins', rate: 'From ₹10/km', badge: 'Corporate Fleet' },
    { name: 'Adagurukki & Doripalli Expansion', zone: 'SIPCOT Industrial Expansion', dispatch: '8 - 10 Mins', rate: 'From ₹10/km', badge: 'New Industrial' },
    { name: 'Hosur IT Park / Viswanathapuram', zone: 'Tech Parks & IT Hub', dispatch: '5 - 8 Mins', rate: 'From ₹10/km', badge: 'IT Corridor' },
    { name: 'Railway Station & Station Road', zone: '24/7 Rail Transit Stand', dispatch: '3 - 5 Mins', rate: 'Fixed / ₹10/km', badge: '24/7 Station' },
    { name: 'Hosur Bus Stand & Central Hosur', zone: 'City Center & Ring Road', dispatch: '3 - 5 Mins', rate: 'Fixed / ₹10/km', badge: 'City Core' },
    { name: 'Bagalur Road & Bagalur Junction', zone: 'Airport Route & Commercial', dispatch: '5 Mins', rate: 'From ₹10/km', badge: 'Airport Route' },
    { name: 'Old Bengaluru Road & MG Road', zone: 'Downtown Retail Corridor', dispatch: '3 - 5 Mins', rate: 'From ₹10/km', badge: 'Market Zone' },
    { name: 'Mathigiri Hub', zone: 'Prime Residential & Suburb', dispatch: '5 - 8 Mins', rate: 'From ₹10/km', badge: 'Residential' },
    { name: 'Avalapalli & Avalapalli Road', zone: 'Residential & Outer Ring', dispatch: '5 - 8 Mins', rate: 'From ₹10/km', badge: 'Residential' },
    { name: 'Shanthi Nagar & Kamaraj Colony', zone: 'Residential Communities', dispatch: '5 - 8 Mins', rate: 'From ₹10/km', badge: 'Family Cabs' },
    { name: 'Nehru Nagar / Denkanikottai Road', zone: 'Town Arterial Connector', dispatch: '5 - 8 Mins', rate: 'From ₹10/km', badge: 'Main Road' },
    { name: 'Sanasandiram & Hosur-Thally Road', zone: 'South Hosur Corridor', dispatch: '8 - 10 Mins', rate: 'From ₹10/km', badge: 'Suburban' },
    { name: 'Chandapura & Bommasandra', zone: 'Bangalore Border Industrial', dispatch: '10 - 15 Mins', rate: 'Interstate Flat', badge: 'Interstate' },
    { name: 'Anekal Town & Attibele Border', zone: 'Border Transit Corridor', dispatch: '10 - 12 Mins', rate: 'From ₹10/km', badge: 'Border Cab' },
    { name: 'Shoolagiri side (NH44 Expressway)', zone: 'Krishnagiri Highway Belt', dispatch: '12 - 15 Mins', rate: 'From ₹9/km', badge: 'Highway Cab' },
    { name: 'Denkanikottai, Rayakottai & Kelamangalam', zone: 'Regional Taluk Centers', dispatch: '15 Mins', rate: 'From ₹9/km', badge: 'Regional' }
  ];

  const localPickupHubs = [
    'SIPCOT Phase 1 (Zuzuvadi & Mookandapalli)',
    'TANSIDCO Industrial Estate',
    'SIPCOT Phase 2 (Moranapalli & Thorapalli)',
    'Adagurukki & Doripalli Expansion',
    'Hosur Railway Station Road',
    'Hosur Central Bus Stand',
    'Bagalur Road & Bagalur Junction',
    'Mathigiri & Denkanikottai Road',
    'Avalapalli Road & Bedrapalli',
    'Shanthi Nagar & Kamaraj Colony',
    'Nehru Nagar & Sanasandiram',
    'Old Bengaluru Road & MG Road',
    'Hosur IT Park & Viswanathapuram',
    'Hosur-Thally Road',
    'Bommasandra & Chandapura Belt',
    'Anekal & Attibele Border',
    'Shoolagiri (NH44 side)',
    'Denkanikottai & Kelamangalam',
    'Rayakottai Corridor'
  ];

  return (
    <section className="py-20 bg-brand-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col space-y-3">
          <span className="text-xs text-brand-yellow font-extrabold uppercase tracking-widest flex items-center justify-center space-x-1">
            <Layers className="w-3.5 h-3.5 mr-1" />
            <span>Hosur Taxi Directory & Fare Matrix</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Comprehensive <span className="text-brand-yellow">Hosur Call Taxi & Cab Services</span> Guide
          </h2>
          <p className="text-xs sm:text-sm text-brand-gray/90 leading-relaxed font-medium">
            YUVA CABS (Yuva Call Taxi) provides 24/7 transparent cab booking across SIPCOT industrial corridors, Central Hosur neighborhoods, Bangalore border corridors, and outstation routes.
          </p>
        </div>

        {/* Hyper-Local Hosur Industrial & Neighborhood Matrix Table */}
        <div className="glass-card p-6 rounded-3xl border border-white/5 text-left mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-brand-yellow" />
              <span>Hosur Local Neighborhoods & Industrial Zones Dispatch Table</span>
            </h3>
            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
              Average Arrival: 5 - 10 Minutes
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-brand-gray border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-brand-silver font-bold uppercase text-[10px] tracking-wider">
                  <th className="py-2.5 px-3">Area / Search Term</th>
                  <th className="py-2.5 px-3">Zone Type</th>
                  <th className="py-2.5 px-3">Avg Dispatch</th>
                  <th className="py-2.5 px-3">Tariff</th>
                  <th className="py-2.5 px-3 text-right">Quick Book</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {hyperLocalHubs.map((h, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-2.5 px-3 font-semibold text-white">
                      <span className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                        <span>{h.name}</span>
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-brand-silver">
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                        {h.zone}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-emerald-400 font-semibold">{h.dispatch}</td>
                    <td className="py-2.5 px-3 font-bold text-brand-yellow">{h.rate}</td>
                    <td className="py-2.5 px-3 text-right">
                      <a
                        href="tel:+919944271322"
                        className="inline-flex items-center space-x-1 text-[11px] font-bold text-brand-yellow hover:text-white px-2 py-1 rounded-lg bg-brand-yellow/10 hover:bg-brand-yellow/20 transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Popular Outstation Route Fares Matrix Table */}
          <div className="lg:col-span-7 glass-card p-6 rounded-3xl border border-white/5 text-left">
            <h3 className="text-base font-bold text-white mb-4 flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-brand-yellow" />
              <span>Hosur Outstation Route & Rate Table</span>
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-brand-gray border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-brand-silver font-bold uppercase text-[10px] tracking-wider">
                    <th className="py-2.5 px-3">Route / Keyword</th>
                    <th className="py-2.5 px-3">Distance</th>
                    <th className="py-2.5 px-3">Est. Time</th>
                    <th className="py-2.5 px-3">Start Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {routeDistances.map((r, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-2.5 px-3 font-semibold text-white">{r.route}</td>
                      <td className="py-2.5 px-3 text-brand-silver">{r.distance}</td>
                      <td className="py-2.5 px-3 text-brand-silver">{r.time}</td>
                      <td className="py-2.5 px-3 font-bold text-brand-yellow">{r.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Local Hosur Neighborhood Pickups & Comparison */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            
            {/* Neighborhood Pickup Grid */}
            <div className="glass-card p-6 rounded-3xl border border-white/5">
              <h3 className="text-base font-bold text-white mb-3 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-yellow" />
                <span>Instant Pickup Neighborhoods in Hosur</span>
              </h3>
              <p className="text-xs text-brand-gray/80 mb-4">
                Our cabs are stationed 24/7 across key Hosur hubs for rapid 5-10 minute dispatch:
              </p>

              <div className="flex flex-wrap gap-1.5">
                {localPickupHubs.map((hub, hIdx) => (
                  <span
                    key={hIdx}
                    className="text-[10px] font-semibold text-brand-silver bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg flex items-center space-x-1 hover:border-brand-yellow/20 hover:text-white transition-colors"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-brand-yellow mr-1 flex-shrink-0" />
                    <span>{hub}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Why Yuva Cabs vs App Aggregators */}
            <div className="glass-card p-6 rounded-3xl border border-brand-yellow/20 bg-brand-yellow/5">
              <h4 className="text-sm font-bold text-brand-yellow mb-2 uppercase tracking-wider">
                Why YUVA CABS vs Apps?
              </h4>
              <ul className="text-xs text-brand-silver space-y-2 font-medium">
                <li className="flex items-center">
                  <span className="text-brand-yellow mr-2">✓</span> Zero Surge Pricing during peak hours, factory shift changes or rains
                </li>
                <li className="flex items-center">
                  <span className="text-brand-yellow mr-2">✓</span> 100% Guaranteed Driver Assignment (Zero cancellations)
                </li>
                <li className="flex items-center">
                  <span className="text-brand-yellow mr-2">✓</span> Transparent per-km rates starting @ ₹9/km & ₹10/km
                </li>
                <li className="flex items-center">
                  <span className="text-brand-yellow mr-2">✓</span> Experienced highway chauffeurs with clean AC fleet (Dzire, Etios, Innova)
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
