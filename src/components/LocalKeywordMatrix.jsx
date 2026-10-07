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

  const localPickupHubs = [
    'SIPCOT Phase 1 & 2 Industrial Park',
    'Hosur Railway Station Road',
    'Hosur New Bus Stand & Central',
    'Bagalur Road & TVS Nagar',
    'Mathigiri & Denkanikottai Road',
    'Mookondapalli & Zuzuvadi',
    'Attibele Border & Electronic City',
    'Chennathur & Juvaraj Nagar',
    'Avalapalli Road & Bedrapalli',
    'Rayakottai Road & Moranapalli'
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
            YUVA CABS (Yuva Call Taxi) provides 24/7 transparent cab booking across all major neighborhoods in Hosur and outstation destinations.
          </p>
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
                Our cabs are stationed 24/7 across key Hosur hubs for rapid 10-minute dispatch:
              </p>

              <div className="flex flex-wrap gap-2">
                {localPickupHubs.map((hub, hIdx) => (
                  <span
                    key={hIdx}
                    className="text-[11px] font-semibold text-brand-silver bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg flex items-center space-x-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brand-yellow mr-1" />
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
                  <span className="text-brand-yellow mr-2">✓</span> Zero Surge Pricing during peak hours or rains
                </li>
                <li className="flex items-center">
                  <span className="text-brand-yellow mr-2">✓</span> 100% Guaranteed Driver Assignment (No cancellations)
                </li>
                <li className="flex items-center">
                  <span className="text-brand-yellow mr-2">✓</span> Transparent per-km rates starting @ ₹10/km
                </li>
                <li className="flex items-center">
                  <span className="text-brand-yellow mr-2">✓</span> Experienced highway chauffeurs with clean AC fleet
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
