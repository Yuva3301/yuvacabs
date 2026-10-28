import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const targetKeywords = [
    "Local Taxi in Hosur | Yuva Call Taxi – 9944271322",
    "Bangalore Airport Taxi from Hosur | Call 9944271322",
    "Outstation Taxi Service in Hosur | Yuva Call Taxi – 9944271322",
    "Local, Airport & Outstation Cabs in Hosur | 9944271322",
    "Local Taxi in Hosur",
    "Bangalore Airport Taxi from Hosur",
    "Outstation Taxi Service in Hosur",
    "Local, Airport & Outstation Cabs in Hosur",
    "Yuva Call Taxi Hosur",
    "most reliable taxi service in Hosur",
    "taxi service in Hosur",
    "call taxi near me",
    "taxi near me",
    "cab service in Hosur",
    "car rental in Hosur",
    "online taxi booking in Hosur",
    "local taxi service in Hosur",
    "outstation taxi in Hosur",
    "airport taxi in Hosur",
    "airport pickup and drop in Hosur",
    "one way taxi in Hosur",
    "round trip taxi in Hosur",
    "24 hours taxi service in Hosur",
    "seven seater taxi in Hosur",
    "Innova Crysta rental in Hosur",
    "Tempo Traveller rental in Hosur",
    "tour and travel service in Hosur",
    "cheap taxi service in Hosur",
    "call taxi near Hosur bus stand",
    "taxi near Hosur railway station",
    "taxi service near Hosur new bus stand",
    "call taxi in SIPCOT Hosur",
    "taxi service bagalur road Hosur",
    "call taxi denkanikottai road Hosur",
    "call taxi in dinnur hosur",
    "taxi service jeeva nagar hosur",
    "call taxi sanasandiram hosur",
    "taxi service mathigiri hosur",
    "call taxi kelamangalam road hosur",
    "taxi service attibele",
    "call taxi berigai",
    "taxi service mookandapalli hosur",
    "call taxi zuzuvadi hosur",
    "sedan car rental hosur",
    "swift dzire taxi hosur",
    "seven seater car rental hosur",
    "family trip taxi hosur",
    "business trip taxi hosur",
    "chennai airport taxi from hosur",
    "bangalore airport taxi from hosur",
    "hosur to bangalore taxi",
    "Outstation Taxi Hosur Call +919944271322",
    "Airport Taxi Hosur Call +919944271322",
    "Local Taxi Hosur Call +919944271322",
    "YUVA CABS",
    "YUVAA CALL TAXI",
    "Yuva Cabs Hosur",
    "Taxi Service Hosur",
    "Taxi in Hosur",
    "Taxi hosur",
    "Call Taxi Near Me Hosur",
    "Taxi Near Me Hosur",
    "Hosur Railway Station Taxi",
    "Hosur Bus Stand Taxi",
    "Local Cab Hosur",
    "Local Taxi Near Me Hosur",
    "Hosur Outstation Cabs",
    "One Way Drop Taxi Hosur",
    "Yuva Travels Hosur",
    "Best Cab in Hosur",
    "Best Taxi in Hosur",
    "Cab in Hosur",
    "Hosur Taxi",
    "Call Taxi Hosur"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TaxiService", "LocalBusiness"],
        "@id": "https://yuvacalltaxi.com/#localbusiness",
        "name": "Yuva Call Taxi Hosur - Most Reliable Taxi Service in Hosur",
        "alternateName": targetKeywords,
        "keywords": targetKeywords.join(", "),
        "image": "https://yuvacalltaxi.com/og-image.jpg",
        "description": "Yuva Call Taxi Hosur (+919944271322) - Most reliable taxi service in Hosur. 24/7 call taxi near me, local taxi service from ₹150, outstation taxi from ₹9/km, Bangalore airport taxi (₹2,200), seven seater Innova & Swift Dzire car rental. Guaranteed 5-10 min pickup.",
        "telephone": "+919944271322",
        "url": "https://yuvacalltaxi.com",
        "email": "bookings@yuvacalltaxi.com",
        "hasMap": "https://maps.app.goo.gl/gHwiq68N6k8QekBt8",
        "sameAs": [
          "https://maps.app.goo.gl/gHwiq68N6k8QekBt8",
          "https://www.instagram.com/yuva_call_taxi_70?stkn=djVpOHU4aGhjcG1j",
          "https://www.facebook.com/share/1BwH4m16r9/"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Railway Station Road, Hamman Nagar",
          "addressLocality": "Hosur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "635109",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.7409",
          "longitude": "77.8253"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "₹9 - ₹45 per km",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Net Banking",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "385",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Hosur" },
          { "@type": "AdministrativeArea", "name": "Hosur Bus Stand" },
          { "@type": "AdministrativeArea", "name": "Hosur New Bus Stand" },
          { "@type": "AdministrativeArea", "name": "Hosur Railway Station" },
          { "@type": "AdministrativeArea", "name": "Hosur Railway Station Road" },
          { "@type": "AdministrativeArea", "name": "SIPCOT Hosur" },
          { "@type": "AdministrativeArea", "name": "SIPCOT Phase 1 Hosur" },
          { "@type": "AdministrativeArea", "name": "SIPCOT Phase 2 Hosur" },
          { "@type": "AdministrativeArea", "name": "Zuzuvadi" },
          { "@type": "AdministrativeArea", "name": "Mookandapalli" },
          { "@type": "AdministrativeArea", "name": "Bagalur Road" },
          { "@type": "AdministrativeArea", "name": "Bagalur Junction" },
          { "@type": "AdministrativeArea", "name": "Denkanikottai Road" },
          { "@type": "AdministrativeArea", "name": "Dinnur" },
          { "@type": "AdministrativeArea", "name": "Jeeva Nagar" },
          { "@type": "AdministrativeArea", "name": "Sanasandiram" },
          { "@type": "AdministrativeArea", "name": "Mathigiri" },
          { "@type": "AdministrativeArea", "name": "Kelamangalam Road" },
          { "@type": "AdministrativeArea", "name": "Attibele" },
          { "@type": "AdministrativeArea", "name": "Berigai" },
          { "@type": "AdministrativeArea", "name": "TANSIDCO Hosur" },
          { "@type": "AdministrativeArea", "name": "Moranapalli" },
          { "@type": "AdministrativeArea", "name": "Thorapalli" },
          { "@type": "AdministrativeArea", "name": "Hamman Nagar" },
          { "@type": "AdministrativeArea", "name": "Shanthi Nagar Hosur" },
          { "@type": "AdministrativeArea", "name": "Nehru Nagar Hosur" },
          { "@type": "AdministrativeArea", "name": "Avalapalli" },
          { "@type": "AdministrativeArea", "name": "Avalapalli Road" },
          { "@type": "AdministrativeArea", "name": "Kamaraj Colony" },
          { "@type": "AdministrativeArea", "name": "Old Bengaluru Road" },
          { "@type": "AdministrativeArea", "name": "MG Road Hosur" },
          { "@type": "AdministrativeArea", "name": "Hosur-Thally Road" },
          { "@type": "AdministrativeArea", "name": "Hosur IT Park" },
          { "@type": "AdministrativeArea", "name": "Viswanathapuram" },
          { "@type": "AdministrativeArea", "name": "Adagurukki" },
          { "@type": "AdministrativeArea", "name": "Doripalli" },
          { "@type": "AdministrativeArea", "name": "Shoolagiri" },
          { "@type": "AdministrativeArea", "name": "Kelamangalam" },
          { "@type": "AdministrativeArea", "name": "Rayakottai" },
          { "@type": "AdministrativeArea", "name": "Krishnagiri" },
          { "@type": "AdministrativeArea", "name": "Anekal" },
          { "@type": "AdministrativeArea", "name": "Chandapura" },
          { "@type": "AdministrativeArea", "name": "Bommasandra" },
          { "@type": "AdministrativeArea", "name": "Electronic City" },
          { "@type": "AdministrativeArea", "name": "Bengaluru Kempegowda Airport (BLR)" },
          { "@type": "AdministrativeArea", "name": "Bangalore" },
          { "@type": "AdministrativeArea", "name": "Chennai" },
          { "@type": "AdministrativeArea", "name": "Salem" },
          { "@type": "AdministrativeArea", "name": "Coimbatore" },
          { "@type": "AdministrativeArea", "name": "Tirupati" },
          { "@type": "AdministrativeArea", "name": "Pondicherry" },
          { "@type": "AdministrativeArea", "name": "Ooty" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hosur Outstation, Airport & Local Taxi Services and Car Rentals",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local, Airport & Outstation Cabs in Hosur | 9944271322",
                "description": "Local, Airport & Outstation Cabs in Hosur | 9944271322. 24/7 on-demand pickup across Hosur Railway Station, Bus Stand, SIPCOT & local areas from ₹150 and outstation from ₹9/km."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local Taxi in Hosur | Yuva Call Taxi – 9944271322",
                "description": "Local Taxi in Hosur | Yuva Call Taxi – 9944271322. Instant 5–10 min pickup across all Hosur areas starting at just ₹150."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bangalore Airport Taxi from Hosur | Call 9944271322",
                "description": "Bangalore Airport Taxi from Hosur | Call 9944271322. Fixed Swift Dzire fare: Non-A/C ₹2,200 | A/C ₹2,300 with 24/7 flight delay tracking."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Outstation Taxi Service in Hosur | Yuva Call Taxi – 9944271322",
                "description": "Outstation Taxi Service in Hosur | Yuva Call Taxi – 9944271322. One-way and round trips starting from ₹9/km to Chennai, Bangalore, Salem, Coimbatore, Tirupati."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Yuva Call Taxi Hosur - Most Reliable Taxi Service in Hosur",
                "description": "Yuva Call Taxi Hosur, the most reliable taxi service in Hosur offering 24 hours taxi service in Hosur, call taxi near me, and local taxi service in Hosur from ₹150 with instant online taxi booking."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Call Taxi Near Hosur Bus Stand & Taxi Near Hosur Railway Station",
                "description": "Instant 3 to 5 minute pickup: call taxi near Hosur bus stand, taxi near Hosur railway station, and taxi service near Hosur new bus stand. 24/7 on-demand booking at +91 99442 71322."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Call Taxi in SIPCOT Hosur, Mookandapalli & Zuzuvadi",
                "description": "Instant corporate and shift commutes: call taxi in SIPCOT Hosur Phase 1 & 2, taxi service mookandapalli hosur, and call taxi zuzuvadi hosur."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Service Bagalur Road, Denkanikottai Road & Kelamangalam Road",
                "description": "Affordable rides: taxi service bagalur road Hosur, call taxi denkanikottai road Hosur, and call taxi kelamangalam road hosur starting @ ₹9/km."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Service Mathigiri, Dinnur, Jeeva Nagar & Sanasandiram",
                "description": "Local city drops: taxi service mathigiri hosur, call taxi in dinnur hosur, taxi service jeeva nagar hosur, and call taxi sanasandiram hosur."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Taxi Service Attibele & Call Taxi Berigai",
                "description": "Interstate border and suburban transit: taxi service attibele and call taxi berigai with fast pickup and transparent fares."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sedan Car Rental Hosur & Swift Dzire Taxi Hosur",
                "description": "Air-conditioned sedan car rental hosur and swift dzire taxi hosur for family trip taxi hosur and business trip taxi hosur."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Seven Seater Taxi in Hosur, Seven Seater Car Rental & Innova Crysta Rental",
                "description": "Seven seater taxi in Hosur, seven seater car rental hosur, and Innova Crysta rental in Hosur for family trip taxi hosur and corporate travel."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tempo Traveller Rental in Hosur & Tour and Travel Service in Hosur",
                "description": "Spacious Tempo Traveller rental in Hosur and complete tour and travel service in Hosur for pilgrimage, marriages, and vacation tours."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bangalore Airport Taxi from Hosur & Chennai Airport Taxi from Hosur",
                "description": "Dedicated airport taxi in Hosur, airport pickup and drop in Hosur, bangalore airport taxi from hosur (fixed ₹2,200), and chennai airport taxi from hosur."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Taxi, One Way Taxi in Hosur & Round Trip Taxi in Hosur",
                "description": "Hosur to bangalore taxi, one way taxi in Hosur, round trip taxi in Hosur, and cheap taxi service in Hosur starting from ₹9/km."
              }
            }
          ]
        },
        "providerMobility": "dynamic"
      },
      {
        "@type": "FAQPage",
        "@id": "https://yuvacalltaxi.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the most reliable taxi service in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yuva Call Taxi Hosur (YUVA CABS) is recognized as the most reliable taxi service in Hosur with a Google 4.9★ rating. We provide 24 hours taxi service in Hosur, online taxi booking in Hosur, cheap taxi service in Hosur, local taxi service from ₹150, and outstation taxi from ₹9/km. Call +91 99442 71322 for instant pickup."
            }
          },
          {
            "@type": "Question",
            "name": "How can I book a call taxi near me or taxi near me in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When you search for 'call taxi near me' or 'taxi near me' in Hosur, simply dial Yuva Call Taxi at +91 99442 71322 or book on WhatsApp. Our nearest GPS cab arrives at your location in 5 to 10 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Is call taxi available near Hosur bus stand and railway station?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We provide 24/7 dedicated call taxi near Hosur bus stand, taxi near Hosur railway station, and taxi service near Hosur new bus stand. Cabs are parked directly outside station platforms and bus stops for immediate departure."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide call taxi in SIPCOT Hosur, Mookandapalli, and Zuzuvadi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Yuva Call Taxi offers rapid 5-10 minute dispatch for call taxi in SIPCOT Hosur (Phase 1 & Phase 2), taxi service mookandapalli hosur, and call taxi zuzuvadi hosur for shift pickups, corporate visits, and airport transfers."
            }
          },
          {
            "@type": "Question",
            "name": "Which local areas in Hosur do you service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cover all local routes: taxi service bagalur road Hosur, call taxi denkanikottai road Hosur, call taxi in dinnur hosur, taxi service jeeva nagar hosur, call taxi sanasandiram hosur, taxi service mathigiri hosur, call taxi kelamangalam road hosur, taxi service attibele, and call taxi berigai."
            }
          },
          {
            "@type": "Question",
            "name": "Can I book a seven seater taxi, Innova Crysta rental, or Tempo Traveller rental in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We offer seven seater taxi in Hosur, seven seater car rental hosur, Innova Crysta rental in Hosur, and Tempo Traveller rental in Hosur. Perfect for family trip taxi hosur, business trip taxi hosur, and complete tour and travel service in Hosur."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer sedan car rental and Swift Dzire taxi in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, YUVA CABS provides spotless AC sedan car rental hosur and swift dzire taxi hosur with verified professional chauffeurs for city rides, corporate transit, and outstation trips."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fare for Bangalore airport taxi and Chennai airport taxi from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bangalore airport taxi from Hosur (Kempegowda BLR Airport) has an exclusive fixed package rate in Swift Dzire: Non-A/C ₹2,200 and A/C ₹2,300 with 24/7 flight delay tracking. Chennai airport taxi from Hosur is available for one way taxi or round trip taxi from ₹9/km."
            }
          },
          {
            "@type": "Question",
            "name": "What are the rates for outstation taxi, one way taxi, and round trip taxi in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Outstation taxi in Hosur starts from ₹9/km for Hatchback, ₹10/km for Sedan (Dzire/Etios), and ₹18/km for Innova Crysta. We also offer one way taxi in Hosur where you pay only one-way for Bangalore, Chennai, Salem, Coimbatore, and Tirupati."
            }
          },
          {
            "@type": "Question",
            "name": "How to contact Yuva Call Taxi Hosur for 24 hours taxi service and online taxi booking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call or WhatsApp Yuva Call Taxi Hosur anytime 24/7 at +91 99442 71322, or complete the online taxi booking form on our website https://yuvacalltaxi.com. Instant confirmation with driver details in minutes."
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://yuvacalltaxi.com/#website",
        "name": "Yuva Call Taxi Hosur",
        "alternateName": "Yuva Call Taxi Hosur - Most Reliable Taxi Service in Hosur",
        "url": "https://yuvacalltaxi.com",
        "description": "Book Hosur's most reliable taxi and cab service. Local taxi from ₹150, outstation taxi from ₹9/km, 24 hours taxi service.",
        "publisher": { "@id": "https://yuvacalltaxi.com/#localbusiness" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://yuvacalltaxi.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://yuvacalltaxi.com/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yuvacalltaxi.com/" },
          { "@type": "ListItem", "position": 2, "name": "Taxi Services in Hosur", "item": "https://yuvacalltaxi.com/#services" },
          { "@type": "ListItem", "position": 3, "name": "Cab Pricing", "item": "https://yuvacalltaxi.com/#pricing" },
          { "@type": "ListItem", "position": 4, "name": "Hosur Routes & Local Areas", "item": "https://yuvacalltaxi.com/#local-seo" },
          { "@type": "ListItem", "position": 5, "name": "Online Taxi Booking", "item": "https://yuvacalltaxi.com/#contact" }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>Local, Airport & Outstation Cabs in Hosur | 9944271322 | Yuva Call Taxi</title>
      <meta name="title" content="Local, Airport & Outstation Cabs in Hosur | 9944271322" />
      <meta name="description" content="Local, Airport & Outstation Cabs in Hosur | 9944271322. Local Taxi in Hosur | Yuva Call Taxi – 9944271322. Bangalore Airport Taxi from Hosur | Call 9944271322. Outstation Taxi Service in Hosur | Yuva Call Taxi – 9944271322. Fast 5-10 min pickup from ₹150, outstation @ ₹9/km." />
      <meta name="keywords" content={targetKeywords.join(", ")} />
      <meta name="application-name" content="Yuva Call Taxi Hosur" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://yuvacalltaxi.com/" />

      {/* Local & Geographic SEO Meta Tags for Google Top 1 Ranking in Hosur */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
      <meta name="geo.position" content="12.7409;77.8253" />
      <meta name="ICBM" content="12.7409, 77.8253" />
      <meta name="contact" content="+919944271322" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://yuvacalltaxi.com/" />
      <meta property="og:site_name" content="Yuva Call Taxi Hosur" />
      <meta property="og:title" content="Local, Airport & Outstation Cabs in Hosur | 9944271322" />
      <meta property="og:description" content="Local, Airport & Outstation Cabs in Hosur | 9944271322. Local Taxi in Hosur | Yuva Call Taxi – 9944271322. Bangalore Airport Taxi from Hosur | Call 9944271322. Outstation Taxi Service in Hosur | Yuva Call Taxi – 9944271322." />
      <meta property="og:image" content="https://yuvacalltaxi.com/og-image.jpg" />
      <meta property="og:locale" content="en_IN" />
      <meta property="business:contact_data:street_address" content="Railway Station Road, Hamman Nagar" />
      <meta property="business:contact_data:locality" content="Hosur" />
      <meta property="business:contact_data:region" content="Tamil Nadu" />
      <meta property="business:contact_data:postal_code" content="635109" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:phone_number" content="+919944271322" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yuvacalltaxi.com/" />
      <meta property="twitter:title" content="Local, Airport & Outstation Cabs in Hosur | 9944271322" />
      <meta property="twitter:description" content="Local, Airport & Outstation Cabs in Hosur | 9944271322. Local Taxi in Hosur | Yuva Call Taxi – 9944271322. Bangalore Airport Taxi from Hosur | Call 9944271322. Outstation Taxi Service in Hosur | Yuva Call Taxi – 9944271322." />
      <meta property="twitter:image" content="https://yuvacalltaxi.com/og-image.jpg" />

      {/* JSON-LD Schema Structuring */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}

