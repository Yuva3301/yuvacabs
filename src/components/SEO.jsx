import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TaxiService", "LocalBusiness"],
        "@id": "https://yuvacalltaxi.com/#localbusiness",
        "name": "YUVAA CALL TAXI - Best Taxi Service in Hosur",
        "alternateName": [
          "Outstation Taxi Hosur Call +919944271322",
          "Airport Taxi Hosur Call +919944271322",
          "Local Taxi Hosur Call +919944271322",
          "Outstation Taxi Hosur",
          "Airport Taxi Hosur",
          "Local Taxi Hosur",
          "YUVAA CALL TAXI",
          "Yuva Call Taxi",
          "YUVA CABS",
          "Yuva Cabs Hosur",
          "Yuva Call Taxi Hosur",
          "Taxi Service",
          "Taxi in Hosur",
          "Taxi hosur",
          "Call Taxi Near Me Hosur",
          "Taxi Near Me Hosur",
          "Hosur Railway Station Taxi",
          "Hosur Bus Stand Taxi",
          "Local Cab Hosur",
          "Local Taxi Near Me Hosur",
          "Hosur Outstation Cabs",
          "Outstation Taxi Hosur",
          "One Way Drop Taxi Hosur",
          "Yuva Travels Hosur",
          "Best Cab in Hosur",
          "Best Taxi in Hosur",
          "Cab in Hosur",
          "Hosur Taxi",
          "Call Taxi Hosur",
          "most reliable taxi service in Hosur",
          "cab service in Hosur",
          "car rental in Hosur",
          "online taxi booking in Hosur",
          "local taxi service in Hosur",
          "airport taxi in Hosur",
          "airport pickup and drop in Hosur",
          "24 hours taxi service in Hosur",
          "seven seater taxi in Hosur",
          "Innova Crysta rental in Hosur",
          "Tempo Traveller rental in Hosur",
          "tour and travel service in Hosur",
          "cheap taxi service in Hosur",
          "sedan car rental hosur",
          "swift dzire taxi hosur",
          "seven seater car rental hosur",
          "family trip taxi hosur",
          "business trip taxi hosur",
          "hosur to bangalore taxi"
        ],
        "keywords": "Yuva Call Taxi Hosur, most reliable taxi service in Hosur, taxi service in Hosur, call taxi near me, taxi near me, cab service in Hosur, car rental in Hosur, online taxi booking in Hosur, local taxi service in Hosur, outstation taxi in Hosur, airport taxi in Hosur, airport pickup and drop in Hosur, one way taxi in Hosur, round trip taxi in Hosur, 24 hours taxi service in Hosur, seven seater taxi in Hosur, Innova Crysta rental in Hosur, Tempo Traveller rental in Hosur, tour and travel service in Hosur, cheap taxi service in Hosur, call taxi near Hosur bus stand, taxi near Hosur railway station, taxi service near Hosur new bus stand, call taxi in SIPCOT Hosur, taxi service bagalur road Hosur, call taxi denkanikottai road Hosur, call taxi in dinnur hosur, taxi service jeeva nagar hosur, call taxi sanasandiram hosur, taxi service mathigiri hosur, call taxi kelamangalam road hosur, taxi service attibele, call taxi berigai, taxi service mookandapalli hosur, call taxi zuzuvadi hosur, sedan car rental hosur, swift dzire taxi hosur, seven seater car rental hosur, family trip taxi hosur, business trip taxi hosur, chennai airport taxi from hosur, bangalore airport taxi from hosur, hosur to bangalore taxi, Taxi Service, Taxi in Hosur, Taxi hosur",
        "image": "https://yuvacalltaxi.com/og-image.jpg",
        "description": "Hosur's #1 rated taxi and outstation cab booking service. Round trip & one-way drop cabs starting @ ₹9/km to Chennai, Bangalore, Salem, Coimbatore, Tirupati, Pondicherry & Ooty. 24/7 Kempegowda Airport transfers.",
        "telephone": "+919944271322",
        "url": "https://yuvacalltaxi.com",
        "email": "bookings@yuvacalltaxi.com",
        "hasMap": "https://maps.app.goo.gl/gHwiq68N6k8QekBt8",
        "sameAs": [
          "https://maps.app.goo.gl/gHwiq68N6k8QekBt8",
          "https://www.instagram.com/yuva_call_taxi_70?stkn=djVpOHU4aGhjcG1j"
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
          { "@type": "AdministrativeArea", "name": "SIPCOT Phase 1 Hosur" },
          { "@type": "AdministrativeArea", "name": "Zuzuvadi" },
          { "@type": "AdministrativeArea", "name": "Mookandapalli" },
          { "@type": "AdministrativeArea", "name": "TANSIDCO Hosur" },
          { "@type": "AdministrativeArea", "name": "SIPCOT Phase 2 Hosur" },
          { "@type": "AdministrativeArea", "name": "Moranapalli" },
          { "@type": "AdministrativeArea", "name": "Thorapalli" },
          { "@type": "AdministrativeArea", "name": "Bagalur Road" },
          { "@type": "AdministrativeArea", "name": "Bagalur Junction" },
          { "@type": "AdministrativeArea", "name": "Hosur Railway Station Road" },
          { "@type": "AdministrativeArea", "name": "Hosur Bus Stand" },
          { "@type": "AdministrativeArea", "name": "Hamman Nagar" },
          { "@type": "AdministrativeArea", "name": "Shanthi Nagar Hosur" },
          { "@type": "AdministrativeArea", "name": "Nehru Nagar Hosur" },
          { "@type": "AdministrativeArea", "name": "Denkanikottai Road" },
          { "@type": "AdministrativeArea", "name": "Mathigiri" },
          { "@type": "AdministrativeArea", "name": "Avalapalli" },
          { "@type": "AdministrativeArea", "name": "Avalapalli Road" },
          { "@type": "AdministrativeArea", "name": "Sanasandiram" },
          { "@type": "AdministrativeArea", "name": "Dinnur" },
          { "@type": "AdministrativeArea", "name": "Jeeva Nagar" },
          { "@type": "AdministrativeArea", "name": "Berigai" },
          { "@type": "AdministrativeArea", "name": "Kelamangalam Road" },
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
          { "@type": "AdministrativeArea", "name": "Attibele" },
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
          "name": "Hosur Outstation, Airport & Local Taxi Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Outstation Taxi Hosur Call +919944271322",
                "description": "Outstation Taxi Hosur Call +919944271322. Round trip & one-way outstation cabs from Hosur starting at ₹9/km."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Airport Taxi Hosur Call +919944271322",
                "description": "Airport Taxi Hosur Call +919944271322. 24/7 Bangalore Kempegowda Airport (BLR) transfers starting at ₹2,200."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local Taxi Hosur Call +919944271322",
                "description": "Local Taxi Hosur Call +919944271322. Instant 5-10 min pickup at Hosur Railway Station, Bus Stand, SIPCOT & all local areas from ₹150."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Outstation Round Trip Cabs from Hosur",
                "description": "Round trip outstation taxi service starting at ₹9/km for Hatchback, ₹10/km for Sedan, and ₹18/km for Innova."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "One-Way Drop Taxi from Hosur",
                "description": "Pay only for one-way distance to Chennai, Bangalore, Salem, Coimbatore, or Pondicherry without return kilometer charges."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport Taxi - Swift Dzire",
                "description": "Fixed package airport drop and pickup in Maruti Swift Dzire. Non-A/C ₹2,200 and A/C ₹2,300 with 24/7 flight tracking and on-time arrival."
              },
              "price": "2200",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Tirupati Balaji Temple Darshan Tour Cab",
                "description": "Special round trip pilgrim package from Hosur to Tirupati with waiting time included."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local Hosur City Cab & Hourly Rental",
                "description": "Affordable city ride services across Hosur, Hamman Nagar, SIPCOT, and Mathigiri."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SIPCOT Hosur Corporate Cab Hire",
                "description": "Dedicated corporate transportation, staff pick-and-drop, and executive rides."
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
            "name": "What is the outstation taxi fare per km from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Outstation round trips with YUVA CABS start at just ₹9 to ₹12/km. Hatchbacks start @ ₹9-10/km, Sedans (Dzire/Etios) @ ₹10-12/km, and Toyota Innova / Innova Crysta @ ₹18-19/km, with transparent fixed driver allowance per day."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide one-way drop taxi service from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! YUVA CABS provides one-way drop taxi service from Hosur to Chennai, Bangalore, Salem, Coimbatore, Vellore, and Pondicherry. You only pay for one-way distance with zero return kilometer fees."
            }
          },
          {
            "@type": "Question",
            "name": "How to book an outstation cab from Hosur with YUVA CABS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book instantly by calling +91 99442 71322, chatting on WhatsApp at +91 99442 71322, or submitting the quick booking form on yuvacalltaxi.com. Driver details are confirmed within minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide 24/7 airport taxi from Hosur to Bangalore Airport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, YUVA CABS provides 24/7 dedicated airport drop and pickup service between Hosur and Kempegowda International Airport (BLR). For Maruti Swift Dzire, we offer a fixed package: Non-A/C ₹2,200 and A/C ₹2,300 with flight tracking and zero wait charges."
            }
          },
          {
            "@type": "Question",
            "name": "Which outstation routes are most popular from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Popular outstation routes from Hosur include Hosur to Chennai (310 km), Hosur to Salem (160 km), Hosur to Coimbatore (320 km), Hosur to Tirupati (245 km), Hosur to Pondicherry (260 km), and Hosur to Ooty (285 km)."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best taxi service in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "YUVA CABS (Yuva Call Taxi) is rated #1 on Google with 4.9 stars and 385+ reviews. We offer the most affordable per-km rates starting at ₹9/km with 24/7 availability, professional drivers, and a clean fleet of Hatchbacks, Sedans, Innova, and Tempo Travellers."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a cab in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book a YUVA CABS taxi instantly by calling +91 99442 71322, sending a WhatsApp message to the same number, or filling out the online booking form at yuvacalltaxi.com. Our dispatcher confirms your driver within 5 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "What is the phone number of Yuva Call Taxi Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reach YUVA CABS (Yuva Call Taxi) at +91 99442 71322. We are available 24 hours a day, 7 days a week for local rides, outstation trips, and airport transfers."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a 24/7 taxi available in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! YUVA CABS operates round-the-clock, 24 hours a day, 365 days a year. Whether you need a late-night airport drop, early morning pickup, or emergency ride, our drivers are always available in Hosur and surrounding areas."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a taxi cost in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Taxi fares in Hosur with YUVA CABS start from ₹9/km for Hatchback, ₹10/km for Sedan (Dzire/Etios), ₹15/km for SUV, ₹18/km for Toyota Innova & Crysta, and ₹38/km for Tempo Traveller. Local rides have minimum fare starting from ₹150."
            }
          },
          {
            "@type": "Question",
            "name": "Which areas in Hosur are covered for 24/7 taxi pickup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "YUVA CABS covers every neighborhood and industrial hub in Hosur with 24/7 on-demand pickup: SIPCOT Phase 1 (Zuzuvadi, Mookandapalli), TANSIDCO, SIPCOT Phase 2 (Moranapalli, Thorapalli), Adagurukki, Doripalli, Hosur IT Park (Viswanathapuram), Railway Station Road, Hosur Bus Stand, Mathigiri, Bagalur Road, Shanthi Nagar, Nehru Nagar, Denkanikottai Road, Avalapalli, Sanasandiram, Kamaraj Colony, Old Bengaluru Road, MG Road, Hosur-Thally Road, Attibele, Chandapura, Bommasandra, Electronic City, Shoolagiri, Kelamangalam, Rayakottai, and Krishnagiri."
            }
          },
          {
            "@type": "Question",
            "name": "How fast is taxi pickup in SIPCOT Phase 1, Phase 2, and Hosur Railway Station?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pickup time is guaranteed within 5 to 10 minutes across SIPCOT Phase 1 & 2, TANSIDCO, Hosur Railway Station, Bus Stand, Mathigiri, and central neighborhoods. Our drivers are stationed 24/7 across these key dispatch hubs for fast arrival."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find a call taxi near me in Hosur for instant pickup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To book an instant call taxi near you in Hosur, simply call YUVAA CALL TAXI at +91 99442 71322 or WhatsApp us. Our nearest driver is dispatched immediately to your live GPS location within 5 to 10 minutes with zero surge pricing."
            }
          },
          {
            "@type": "Question",
            "name": "Are taxis available 24/7 at Hosur Railway Station and Hosur Bus Stand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! YUVAA CALL TAXI maintains dedicated cabs 24 hours a day stationed directly outside Hosur Railway Station (Platforms 1 & 2) and Hosur Central & New Bus Stand for immediate local drops, SIPCOT commutes, and Bangalore Airport transfers."
            }
          },
          {
            "@type": "Question",
            "name": "What is the minimum fare for a local cab in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local cab rides in Hosur start at just ₹150 minimum fare for Hatchbacks and ₹180 for Sedans (Dzire, Etios). Extra kilometers are charged at just ₹10–₹12/km, making YUVAA CALL TAXI the most affordable local taxi service in Hosur."
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://yuvacalltaxi.com/#website",
        "name": "YUVAA CALL TAXI",
        "alternateName": "YUVAA CALL TAXI — Best Taxi Service in Hosur",
        "url": "https://yuvacalltaxi.com",
        "description": "Book Hosur's #1 rated taxi and cab service. Local rides, outstation trips, airport transfers from ₹9/km.",
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
          { "@type": "ListItem", "position": 4, "name": "Outstation Routes", "item": "https://yuvacalltaxi.com/#local-seo" },
          { "@type": "ListItem", "position": 5, "name": "Book a Cab", "item": "https://yuvacalltaxi.com/#contact" }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>Outstation Taxi Hosur Call +919944271322 | Airport Taxi Hosur | Local Taxi Hosur</title>
      <meta name="title" content="Outstation Taxi Hosur Call +919944271322 | Airport Taxi Hosur | Local Taxi Hosur" />
      <meta name="description" content="Outstation Taxi Hosur Call +919944271322. Airport Taxi Hosur Call +919944271322. Local Taxi Hosur Call +919944271322. Hosur's #1 24/7 taxi service with instant 5-10 min pickup, transparent rates from ₹9/km, and flat Bangalore airport drops." />
      <meta name="keywords" content="Outstation Taxi Hosur Call +919944271322, Airport Taxi Hosur Call +919944271322, Local Taxi Hosur Call +919944271322, Outstation Taxi Hosur, Airport Taxi Hosur, Local Taxi Hosur, Yuva Call Taxi Hosur, most reliable taxi service in Hosur, taxi service in Hosur, call taxi near me, taxi near me, cab service in Hosur, car rental in Hosur, online taxi booking in Hosur, local taxi service in Hosur, outstation taxi in Hosur, airport taxi in Hosur, airport pickup and drop in Hosur, one way taxi in Hosur, round trip taxi in Hosur, 24 hours taxi service in Hosur, seven seater taxi in Hosur, Innova Crysta rental in Hosur, Tempo Traveller rental in Hosur, tour and travel service in Hosur, cheap taxi service in Hosur, call taxi near Hosur bus stand, taxi near Hosur railway station, taxi service near Hosur new bus stand, call taxi in SIPCOT Hosur, taxi service bagalur road Hosur, call taxi denkanikottai road Hosur, call taxi in dinnur hosur, taxi service jeeva nagar hosur, call taxi sanasandiram hosur, taxi service mathigiri hosur, call taxi kelamangalam road hosur, taxi service attibele, call taxi berigai, taxi service mookandapalli hosur, call taxi zuzuvadi hosur, sedan car rental hosur, swift dzire taxi hosur, seven seater car rental hosur, family trip taxi hosur, business trip taxi hosur, chennai airport taxi from hosur, bangalore airport taxi from hosur, hosur to bangalore taxi, Taxi Service, Taxi in Hosur, Taxi hosur, railway station taxi, busstand taxi, local cab, local taxi near me, yuvaa call taxi, yuva call taxi, yuva cabs, yuva cabs hosur, call taxi hosur, best taxi hosur, best cab hosur, sipcot phase 1 taxi, sipcot phase 2 cab, electronic city cab, hosur to chennai cab, outstation taxi hosur, drop taxi hosur" />
      <meta name="application-name" content="YUVAA CALL TAXI" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://yuvacalltaxi.com/" />

      {/* Local & Geographic SEO Meta Tags for Google Top 5 Ranking */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
      <meta name="geo.position" content="12.7409;77.8253" />
      <meta name="ICBM" content="12.7409, 77.8253" />
      <meta name="contact" content="+919944271322" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://yuvacalltaxi.com/" />
      <meta property="og:site_name" content="YUVAA CALL TAXI" />
      <meta property="og:title" content="Outstation Taxi Hosur Call +919944271322 | Airport Taxi Hosur | Local Taxi Hosur" />
      <meta property="og:description" content="Outstation Taxi Hosur Call +919944271322. Airport Taxi Hosur Call +919944271322. Local Taxi Hosur Call +919944271322. Hosur's #1 24/7 taxi service with instant 5-10 min pickup, transparent rates from ₹9/km, and flat Bangalore airport drops." />
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
      <meta property="twitter:title" content="Outstation Taxi Hosur Call +919944271322 | Airport Taxi Hosur | Local Taxi Hosur" />
      <meta property="twitter:description" content="Outstation Taxi Hosur Call +919944271322. Airport Taxi Hosur Call +919944271322. Local Taxi Hosur Call +919944271322. Hosur's #1 24/7 taxi service with instant 5-10 min pickup, transparent rates from ₹9/km, and flat Bangalore airport drops." />
      <meta property="twitter:image" content="https://yuvacalltaxi.com/og-image.jpg" />

      {/* JSON-LD Schema Structuring */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
