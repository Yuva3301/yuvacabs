import { Helmet } from 'react-helmet-async';

export default function AirportSEO() {
  const airportKeywords = [
    "Airport Taxi in Hosur",
    "Hosur to Bangalore Airport Taxi",
    "Bangalore Airport Pickup and Drop from Hosur",
    "BLR Airport Taxi Hosur",
    "Kempegowda Airport Taxi Hosur",
    "Call Taxi in Hosur",
    "Call Taxi Hosur",
    "Hosur Call Taxi",
    "Taxi Service in Hosur",
    "Taxi in Hosur",
    "Hosur Taxi Number",
    "24 Hours Call Taxi in Hosur",
    "SIPCOT Hosur to Bangalore Airport Taxi",
    "Bagalur to Bangalore Airport Taxi",
    "Attibele to Bangalore Airport Taxi",
    "Krishnagiri to Bangalore Airport Cab",
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
          "Yuva Call Taxi Hosur"
        ],
        "telephone": "+919944271322",
        "url": "https://www.yuvacalltaxi.com/",
        "email": "bookings@yuvacalltaxi.com",
        "logo": "https://www.yuvacalltaxi.com/logo.jpg",
        "image": "https://www.yuvacalltaxi.com/logo.jpg",
        "priceRange": "₹2,200 - ₹3,800",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Net Banking",
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
        "areaServed": [
          { "@type": "City", "name": "Hosur" },
          { "@type": "Airport", "name": "Kempegowda International Airport Bengaluru (BLR)" },
          { "@type": "AdministrativeArea", "name": "SIPCOT Hosur" },
          { "@type": "AdministrativeArea", "name": "Bagalur" },
          { "@type": "AdministrativeArea", "name": "Attibele" }
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
        "url": "https://www.yuvacalltaxi.com/airport-taxi",
        "description": "Book 24/7 Bangalore Airport Taxi from Hosur (BLR Kempegowda Airport Drop & Pickup) starting at fixed ₹2,200. Guaranteed on-time flight pickup, flight radar tracking, and sanitized AC sedans and SUVs.",
        "provider": {
          "@id": "https://www.yuvacalltaxi.com/#localbusiness"
        },
        "priceRange": "₹2,200 - ₹3,800",
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
              "text": "The taxi fare from Hosur to Kempegowda International Airport (BLR) is a fixed rate of ₹2,200 for Non-A/C and ₹2,300 for A/C Sedan (Swift Dzire/Etios), and ₹2,800 for a 6-seater Ertiga SUV. There are zero surge charges."
            }
          },
          {
            "@type": "Question",
            "name": "What is the distance and travel time from Hosur to Kempegowda Airport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The distance between Hosur and Kempegowda International Airport (BLR) is approximately 78 to 82 km via Satellite Town Ring Road (STRR) and NH44. The travel time is typically 75 to 90 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide midnight and early morning airport cabs from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Yuva Call Taxi operates 24/7 with dedicated early morning (2 AM, 3 AM, 4 AM) and late-night airport drops and pickups with a 100% on-time guarantee and zero cancellation."
            }
          },
          {
            "@type": "Question",
            "name": "Will the driver wait if my flight to Bangalore is delayed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We track your flight arrival live using your flight number. Even if your flight is delayed, your assigned driver will be waiting at Terminal 1 or Terminal 2 arrival pickup zone without extra waiting penalties."
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
      {/* Primary HTML Meta Tags */}
      <title>Airport Taxi in Hosur | Hosur to Bangalore Airport Taxi - Yuva Call Taxi</title>
      <meta name="title" content="Airport Taxi in Hosur | Hosur to Bangalore Airport Taxi - Yuva Call Taxi" />
      <meta
        name="description"
        content="Book Hosur to Bangalore Airport (BLR) taxi with Yuva Call Taxi (+91 99442 71322). Fixed fare from ₹2,200, 24/7 flight tracking, on-time pickup & zero surge charges."
      />
      <meta name="keywords" content={airportKeywords.join(", ")} />
      <meta name="application-name" content="Yuva Call Taxi Hosur" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.yuvacalltaxi.com/airport-taxi" />
      <link rel="alternate" hreflang="en-IN" href="https://www.yuvacalltaxi.com/airport-taxi" />
      <link rel="alternate" hreflang="ta" href="https://www.yuvacalltaxi.com/airport-taxi" />
      <link rel="alternate" hreflang="x-default" href="https://www.yuvacalltaxi.com/airport-taxi" />

      {/* Local & Geographic SEO Meta Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
      <meta name="geo.position" content="12.7409;77.8253" />
      <meta name="ICBM" content="12.7409, 77.8253" />
      <meta name="contact" content="+919944271322" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://www.yuvacalltaxi.com/airport-taxi" />
      <meta property="og:site_name" content="Yuva Call Taxi Hosur" />
      <meta property="og:title" content="Airport Taxi in Hosur | Hosur to Bangalore Airport Taxi - Yuva Call Taxi" />
      <meta
        property="og:description"
        content="Book Hosur to Bangalore Airport (BLR) taxi with Yuva Call Taxi (+91 99442 71322). Fixed fare from ₹2,200, 24/7 flight tracking, on-time pickup & zero surge charges."
      />
      <meta property="og:image" content="https://www.yuvacalltaxi.com/logo.jpg" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.yuvacalltaxi.com/airport-taxi" />
      <meta property="twitter:title" content="Airport Taxi in Hosur | Hosur to Bangalore Airport Taxi - Yuva Call Taxi" />
      <meta
        property="twitter:description"
        content="Book Hosur to Bangalore Airport (BLR) taxi with Yuva Call Taxi (+91 99442 71322). Fixed fare from ₹2,200, 24/7 flight tracking, on-time pickup & zero surge charges."
      />
      <meta property="twitter:image" content="https://www.yuvacalltaxi.com/logo.jpg" />

      {/* Structured Data: LocalBusiness, TaxiService, FAQPage, BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify(airportSchema)}
      </script>
    </Helmet>
  );
}
