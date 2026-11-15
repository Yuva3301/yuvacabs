import { Helmet } from 'react-helmet-async';

export default function AirportSEO() {
  const airportKeywords = [
    "Hosur to Bangalore Airport Taxi",
    "Airport Taxi in Hosur",
    "Bangalore Airport Pickup and Drop from Hosur",
    "BLR Airport Taxi Hosur",
    "Kempegowda Airport Taxi Hosur",
    "Hosur to Bangalore Airport Cab Fare",
    "Hosur to Kempegowda Airport Taxi Cost",
    "Hosur to BLR Airport STRR Taxi",
    "Bangalore Airport to Hosur Taxi Fare",
    "Airport Drop Taxi Hosur",
    "Airport Pickup Taxi Hosur",
    "Call Taxi in Hosur",
    "Call Taxi Hosur",
    "Hosur Call Taxi",
    "Taxi Service in Hosur",
    "Hosur Taxi Number",
    "24 Hours Call Taxi in Hosur",
    "SIPCOT Hosur to Bangalore Airport Taxi",
    "Bagalur to Bangalore Airport Taxi",
    "Attibele to Bangalore Airport Taxi",
    "Krishnagiri to Bangalore Airport Cab",
    "Rayakottai to Bangalore Airport Taxi",
    "Denkanikottai to Bangalore Airport Taxi",
    "Yuva Call Taxi Hosur",
    "Yuva Cabs Hosur"
  ];

  const airportSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": "https://www.yuvacalltaxi.com/#localbusiness",
        "name": "Yuva Call Taxi",
        "alternateName": [
          "Yuva Cabs",
          "Yuva Call Taxi Hosur",
          "Hosur Call Taxi",
          "Taxi Service-Hosur"
        ],
        "telephone": "+919944271322",
        "url": "https://www.yuvacalltaxi.com/",
        "email": "bookings@yuvacalltaxi.com",
        "logo": "https://www.yuvacalltaxi.com/logo.jpg",
        "image": "https://www.yuvacalltaxi.com/logo.jpg",
        "priceRange": "₹2,200 - ₹3,800",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Paytm, Net Banking",
        "hasMap": "https://maps.app.goo.gl/gHwiq68N6k8QekBt8",
        "sameAs": [
          "https://maps.app.goo.gl/gHwiq68N6k8QekBt8",
          "https://www.instagram.com/yuva_call_taxi_70?stkn=djVpOHU4aGhjcG1j",
          "https://www.facebook.com/share/1BwH4m16r9/"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dinnur Main Road, Jeeva Nagar",
          "addressLocality": "Hosur",
          "addressRegion": "Tamil Nadu",
          "postalCode": "635109",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.7409,
          "longitude": 77.8253
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1420",
          "bestRating": "5",
          "worstRating": "1"
        },
        "potentialAction": {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "tel:+919944271322",
            "inLanguage": "en-IN",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "result": {
            "@type": "Reservation",
            "name": "Instant Airport Taxi Booking Hosur"
          }
        },
        "areaServed": [
          { "@type": "City", "name": "Hosur" },
          { "@type": "Airport", "name": "Kempegowda International Airport Bengaluru (BLR)" },
          { "@type": "AdministrativeArea", "name": "SIPCOT Hosur" },
          { "@type": "AdministrativeArea", "name": "Bagalur" },
          { "@type": "AdministrativeArea", "name": "Attibele" },
          { "@type": "AdministrativeArea", "name": "Krishnagiri" },
          { "@type": "AdministrativeArea", "name": "Rayakottai" },
          { "@type": "AdministrativeArea", "name": "Denkanikottai" }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "TaxiService",
        "@id": "https://www.yuvacalltaxi.com/airport-taxi#service",
        "name": "Airport Taxi in Hosur (Hosur to Bangalore Airport BLR)",
        "telephone": "+919944271322",
        "url": "https://www.yuvacalltaxi.com/airport-taxi",
        "description": "Book 24/7 Bangalore Airport Taxi from Hosur (BLR Kempegowda Airport Drop & Pickup) starting at fixed ₹2,200. Guaranteed on-time flight pickup, STRR express highway route, flight radar tracking, sanitized AC sedans and SUVs. Call +91 99442 71322.",
        "provider": {
          "@id": "https://www.yuvacalltaxi.com/#localbusiness"
        },
        "priceRange": "₹2,200 - ₹3,800",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hosur to Bangalore Airport Taxi Fares",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport Sedan (Dzire / Etios)"
              },
              "price": "2200",
              "priceCurrency": "INR",
              "description": "Fixed fare ₹2,200 (Non-AC) / ₹2,300 (AC). Ideal for up to 4 passengers with boot space."
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport SUV (Ertiga / Triber)"
              },
              "price": "2800",
              "priceCurrency": "INR",
              "description": "Fixed fare ₹2,800. Comfortable 6-seater SUV with extra luggage space."
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport Innova Crysta"
              },
              "price": "3800",
              "priceCurrency": "INR",
              "description": "Fixed fare ₹3,800. Luxury 7-seater MPV for corporate travelers & families."
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport Tempo Traveller (12-16 Seater)"
              },
              "price": "5500",
              "priceCurrency": "INR",
              "description": "Fixed fare ₹5,500. Spacious group luxury travel van."
            }
          ]
        },
        "areaServed": [
          { "@type": "City", "name": "Hosur" },
          { "@type": "Airport", "name": "Kempegowda International Airport Bengaluru (BLR)" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yuvacalltaxi.com/airport-taxi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is the taxi fare from Hosur to Bangalore Airport (BLR)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The taxi fare from Hosur to Kempegowda International Airport (BLR) is a fixed rate of ₹2,200 for Sedan (Swift Dzire/Etios), ₹2,800 for 6-seater Ertiga SUV, and ₹3,800 for Toyota Innova Crysta. There are zero surge charges."
            }
          },
          {
            "@type": "Question",
            "name": "What is the phone number to book Hosur to Bangalore Airport taxi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can call or WhatsApp +91 99442 71322 for instant 24/7 airport cab booking from Hosur with zero advance cancellation fees."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take from Hosur to Bangalore Airport via STRR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Via the Satellite Town Ring Road (STRR / NH 648), the travel time between Hosur and Kempegowda International Airport is only 70 to 80 minutes (approx 78 km), bypassing central Bangalore city traffic entirely."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide midnight (2 AM / 3 AM / 4 AM) airport cabs in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Yuva Call Taxi operates 24/7 round-the-clock airport services with a 100% on-time departure guarantee. Drivers arrive 10-15 minutes prior to scheduled pickup time."
            }
          },
          {
            "@type": "Question",
            "name": "Will the driver wait if my flight arriving at BLR Airport is delayed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We track your flight arrival live via flight radar. Even if your flight is delayed by several hours, your assigned driver will be waiting at Terminal 1 or Terminal 2 arrival pickup zone with zero waiting penalty."
            }
          },
          {
            "@type": "Question",
            "name": "Where will the cab pick me up at Bangalore Airport (BLR)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For Terminal 1, our driver picks you up at the dedicated App/Cab pickup zone (P3 / P4). For Terminal 2, driver pickup is at the T2 arrival curb. We provide the driver's contact and vehicle number 30 minutes before landing."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yuvacalltaxi.com/airport-taxi#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.yuvacalltaxi.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Airport Taxi in Hosur",
            "item": "https://www.yuvacalltaxi.com/airport-taxi"
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* High-Intent Primary Ranking Title */}
      <title>Hosur to Bangalore Airport Taxi ₹2,200 | Yuva Cabs +91 99442 71322</title>
      <meta name="title" content="Hosur to Bangalore Airport Taxi ₹2,200 | Yuva Cabs +91 99442 71322" />
      <meta
        name="description"
        content="Book Hosur to Bangalore Airport (BLR) taxi from ₹2,200 fixed fare. Call +91 99442 71322. 24/7 on-time flight pickup, STRR express route (75 min), flight tracking & zero surge."
      />
      <meta name="keywords" content={airportKeywords.join(', ')} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.yuvacalltaxi.com/airport-taxi" />
      <link rel="alternate" hreflang="en-IN" href="https://www.yuvacalltaxi.com/airport-taxi" />
      <link rel="alternate" hreflang="x-default" href="https://www.yuvacalltaxi.com/airport-taxi" />

      {/* Geo tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
      <meta name="geo.position" content="12.7409;77.8253" />
      <meta name="ICBM" content="12.7409, 77.8253" />
      <meta name="contact" content="+919944271322" />

      {/* Open Graph */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://www.yuvacalltaxi.com/airport-taxi" />
      <meta property="og:site_name" content="Yuva Call Taxi Hosur" />
      <meta property="og:title" content="Hosur to Bangalore Airport Taxi ₹2,200 | Yuva Cabs" />
      <meta
        property="og:description"
        content="Book Hosur to Bangalore Airport (BLR) taxi from ₹2,200 fixed fare. Call +91 99442 71322. 24/7 on-time flight pickup, STRR express route (75 min), flight tracking & zero surge."
      />
      <meta property="og:image" content="https://www.yuvacalltaxi.com/logo.jpg" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.yuvacalltaxi.com/airport-taxi" />
      <meta property="twitter:title" content="Hosur to Bangalore Airport Taxi ₹2,200 | Yuva Cabs" />
      <meta
        property="twitter:description"
        content="Book Hosur to Bangalore Airport (BLR) taxi from ₹2,200 fixed fare. Call +91 99442 71322. 24/7 on-time flight pickup, STRR express route (75 min), flight tracking & zero surge."
      />
      <meta property="twitter:image" content="https://www.yuvacalltaxi.com/logo.jpg" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(airportSchema)}
      </script>
    </Helmet>
  );
}
