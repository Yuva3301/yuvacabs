import { Helmet } from 'react-helmet-async';

export default function AirportSEO() {
  const airportKeywords = [
    "Red Taxi Hosur",
    "Best Taxi Hosur",
    "Cab Service Hosur",
    "Call Taxi",
    "Cabs Near Me",
    "Bangalore Airport Taxi from Hosur",
    "Hosur to Bangalore Airport Taxi",
    "Airport Taxi Hosur",
    "Hosur to BLR Airport Taxi",
    "BLR Airport Taxi Hosur",
    "Kempegowda Airport Taxi Hosur",
    "Bangalore Airport to Hosur Cab",
    "Hosur Airport Drop Cab",
    "Hosur Airport Pickup Taxi",
    "Hosur to Bangalore Airport Taxi Fare",
    "Hosur to Kempegowda Airport Cab",
    "Airport Cab Service Hosur",
    "Call Taxi Hosur Airport",
    "Yuva Call Taxi Airport Service",
    "Hosur to Bangalore Airport Drop",
    "Hosur to BLR Terminal 1 Cab",
    "Hosur to BLR Terminal 2 Cab",
    "Attibele to Bangalore Airport Taxi",
    "Bagalur to Bangalore Airport Taxi",
    "SIPCOT Hosur to Bangalore Airport Taxi",
    "Krishnagiri to Bangalore Airport Cab",
    "24 Hours Airport Taxi Hosur",
    "Early Morning Airport Taxi Hosur",
    "Midnight Airport Drop Hosur",
    "Innova Crysta Airport Taxi Hosur",
    "Ertiga Airport Taxi Hosur",
    "Dzire Airport Taxi Hosur",
    "Cheap Airport Taxi Hosur",
    "Best Airport Cab Service Hosur",
    "Yuva Cabs Airport Taxi 9944271322"
  ];

  const airportSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TaxiService", "AirportShuttle", "LocalBusiness"],
        "@id": "https://yuvacalltaxi.com/airport-taxi#service",
        "name": "Bangalore Airport Taxi from Hosur | Yuva Call Taxi",
        "alternateName": [
          "Hosur to Bangalore Airport Taxi Service",
          "Kempegowda International Airport Cab from Hosur",
          "BLR Airport Drop and Pickup Hosur",
          "Airport Taxi Hosur - Yuva Cabs"
        ],
        "telephone": "+919944271322",
        "url": "https://yuvacalltaxi.com/airport-taxi",
        "logo": "https://yuvacalltaxi.com/logo.jpg",
        "image": "https://yuvacalltaxi.com/logo.jpg",
        "priceRange": "₹1,499 - ₹3,800",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Net Banking",
        "description": "Book 24/7 Bangalore Airport Taxi from Hosur (BLR Kempegowda Airport Drop & Pickup) starting at ₹1,499. Guaranteed on-time flight pickup, terminal meet & greet, flight delay tracking, and sanitized AC Sedans & SUVs. Call +91 99442 71322.",
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
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "450",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          { "@type": "City", "name": "Hosur" },
          { "@type": "Airport", "name": "Kempegowda International Airport Bengaluru (BLR)" },
          { "@type": "AdministrativeArea", "name": "SIPCOT Hosur" },
          { "@type": "AdministrativeArea", "name": "Bagalur" },
          { "@type": "AdministrativeArea", "name": "Attibele" },
          { "@type": "AdministrativeArea", "name": "Krishnagiri" },
          { "@type": "AdministrativeArea", "name": "Electronic City" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Bangalore Airport Taxi Routes & Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport Sedan Taxi (Dzire / Etios)",
                "description": "Swift Dzire / Etios AC Sedan for Hosur to Kempegowda Airport BLR drop & pickup. Fixed transparent fares from ₹1,499.",
                "price": "1499",
                "priceCurrency": "INR"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport SUV Taxi (Ertiga)",
                "description": "Spacious Ertiga 6-seater SUV for family airport trips with ample luggage space.",
                "price": "2199",
                "priceCurrency": "INR"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport Luxury Taxi (Innova Crysta)",
                "description": "Executive Innova Crysta luxury cab for business travelers and corporate airport commutes.",
                "price": "2899",
                "priceCurrency": "INR"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://yuvacalltaxi.com/airport-taxi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is the taxi fare from Hosur to Bangalore Airport (BLR)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Taxi fare from Hosur to Kempegowda International Airport (BLR) starts from ₹1,499 for AC Sedan (Swift Dzire/Etios) and ₹2,199 for 6-seater SUV (Ertiga). Fixed flat rates with zero surge pricing."
            }
          },
          {
            "@type": "Question",
            "name": "What is the distance and travel time from Hosur to Kempegowda Airport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The distance between Hosur and Kempegowda International Airport (BLR) is approximately 75 to 80 km via Satellite Town Ring Road (STRR) and NH44. The travel time is typically 75 to 90 minutes depending on traffic."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide midnight and early morning airport cabs from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Yuva Call Taxi operates 24/7 with dedicated early morning (2 AM, 3 AM, 4 AM) and late-night airport drops and pickups with a 100% on-time guarantee and 0% cancellation."
            }
          },
          {
            "@type": "Question",
            "name": "Will the driver wait if my flight to Bangalore is delayed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We track your flight arrival live using your flight number. Even if your flight is delayed, your assigned driver will be stationed at Terminal 1 or Terminal 2 arrival pickup zone without extra waiting penalties."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book an airport taxi from Hosur to BLR Airport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book instantly by calling our 24/7 hotline +91 99442 71322, messaging us on WhatsApp, or using the online airport booking form on our website."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://yuvacalltaxi.com/airport-taxi#webpage",
        "url": "https://yuvacalltaxi.com/airport-taxi",
        "name": "Bangalore Airport Taxi from Hosur | Kempegowda Airport Cab Service - Yuva Cabs",
        "description": "Book 24/7 Bangalore Airport Taxi from Hosur (BLR Kempegowda Airport Drop & Pickup) starting at ₹2,200. Guaranteed on-time flight pickup, flight tracking, terminal meet & greet. Call +91 99442 71322.",
        "isPartOf": { "@id": "https://yuvacalltaxi.com/#website" },
        "breadcrumb": { "@id": "https://yuvacalltaxi.com/airport-taxi#breadcrumb" },
        "inLanguage": "en-IN",
        "publisher": { "@id": "https://yuvacalltaxi.com/#localbusiness" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://yuvacalltaxi.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Bangalore Airport Taxi from Hosur",
            "item": "https://yuvacalltaxi.com/airport-taxi"
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags for Google Search Engine Results */}
      <title>Airport Taxi Service in Hosur | Yuva Call Taxi</title>
      <meta name="title" content="Airport Taxi Service in Hosur | Yuva Call Taxi" />
      <meta 
        name="description" 
        content="Book 24/7 Bangalore Airport Taxi from Hosur (BLR Airport Drop & Pickup) starting at ₹1,499. On-time flight pickup guarantee, flight tracking, terminal meet & greet, clean AC cabs, 0% cancellation. Call +91 99442 71322." 
      />
      <meta name="keywords" content={airportKeywords.join(", ")} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://yuvacalltaxi.com/airport-taxi" />
      <link rel="alternate" hreflang="en-IN" href="https://yuvacalltaxi.com/airport-taxi" />
      <link rel="alternate" hreflang="ta" href="https://yuvacalltaxi.com/airport-taxi" />
      <link rel="alternate" hreflang="x-default" href="https://yuvacalltaxi.com/airport-taxi" />
      <meta name="application-name" content="Yuva Call Taxi Hosur Airport Service" />

      {/* Local & Geographic SEO Meta Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
      <meta name="geo.position" content="12.7409;77.8253" />
      <meta name="ICBM" content="12.7409, 77.8253" />
      <meta name="contact" content="+919944271322" />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://yuvacalltaxi.com/airport-taxi" />
      <meta property="og:site_name" content="Yuva Call Taxi Hosur" />
      <meta property="og:title" content="Airport Taxi Service in Hosur | Yuva Call Taxi" />
      <meta 
        property="og:description" 
        content="Book guaranteed on-time Bangalore Airport Taxi from Hosur (BLR Kempegowda Airport) starting ₹1,499. Best Taxi Hosur | Red Taxi Hosur alternative | Cab Service Hosur | Cabs Near Me. Call +91 99442 71322." 
      />
      <meta property="og:image" content="https://yuvacalltaxi.com/logo.jpg" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yuvacalltaxi.com/airport-taxi" />
      <meta property="twitter:title" content="Airport Taxi Service in Hosur | Yuva Call Taxi" />
      <meta 
        property="twitter:description" 
        content="Reliable 24/7 Bangalore Airport Taxi from Hosur starting ₹1,499. Best Taxi Hosur | Red Taxi Hosur alternative | Cab Service Hosur | Cabs Near Me. Call +91 99442 71322." 
      />
      <meta property="twitter:image" content="https://yuvacalltaxi.com/logo.jpg" />
    </Helmet>
  );
}

