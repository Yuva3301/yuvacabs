import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const targetKeywords = [
    "Call Taxi in Hosur",
    "Call Taxi Hosur",
    "Hosur Call Taxi",
    "Yuva Call Taxi",
    "Taxi Service in Hosur",
    "Taxi in Hosur",
    "Hosur Taxi Service",
    "Hosur Taxi Number",
    "Hosur Call Taxi Number",
    "24 Hours Call Taxi in Hosur",
    "Taxi Near Me",
    "Cabs Near Me",
    "Local Taxi Service in Hosur",
    "Local Cab Booking Hosur",
    "Airport Taxi in Hosur",
    "Hosur to Bangalore Airport Taxi",
    "Bangalore Airport Pickup and Drop from Hosur",
    "Outstation Taxi in Hosur",
    "One Way Taxi from Hosur",
    "Round Trip Taxi in Hosur",
    "Railway Station Taxi Hosur",
    "SIPCOT Taxi Service",
    "Bagalur Taxi Service",
    "Dinnur Call Taxi",
    "Jeeva Nagar Taxi Service",
    "Yuva Call Taxi Hosur",
    "Yuva Cabs Hosur",
    "Swift Dzire Taxi Hosur",
    "Innova Crysta Rental in Hosur",
    "Tempo Traveller Hosur",
    "Mookandapalli Taxi",
    "Bathalapalli Taxi Service",
    "Mathigiri Taxi Service",
    "Attibele Taxi Service"
  ];

  const schemaData = {
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
        "keywords": targetKeywords.join(", "),
        "serviceType": [
          "Call Taxi in Hosur",
          "Taxi Service in Hosur",
          "Local Taxi Service in Hosur",
          "Airport Taxi in Hosur",
          "Outstation Taxi in Hosur",
          "One Way Drop Taxi Hosur",
          "24 Hours Call Taxi in Hosur"
        ],
        "image": "https://www.yuvacalltaxi.com/logo.jpg",
        "logo": "https://www.yuvacalltaxi.com/logo.jpg",
        "description": "Yuva Call Taxi Hosur (+91 99442 71322) - Reliable 24 hours call taxi and cab service in Hosur. Fast 5-10 min pickup at Hosur Railway Station, Bus Stand, SIPCOT & Bagalur. Local cabs from ₹150, outstation drop taxi from ₹9/km & Bangalore Airport fixed ₹2,200.",
        "telephone": "+919944271322",
        "url": "https://www.yuvacalltaxi.com/",
        "email": "bookings@yuvacalltaxi.com",
        "hasMap": "https://maps.app.goo.gl/gHwiq68N6k8QekBt8",
        "sameAs": [
          "https://maps.app.goo.gl/gHwiq68N6k8QekBt8",
          "https://www.instagram.com/yuva_call_taxi_70?stkn=djVpOHU4aGhjcG1j",
          "https://www.facebook.com/share/1BwH4m16r9/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919944271322",
          "contactType": "customer service",
          "availableLanguage": ["Tamil", "Telugu", "Kannada", "English"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        },
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
          "latitude": "12.7409",
          "longitude": "77.8253"
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "12.7409",
            "longitude": "77.8253"
          },
          "geoRadius": "80000"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "₹150 - ₹2,800",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Net Banking",
        "areaServed": [
          { "@type": "City", "name": "Hosur" },
          { "@type": "AdministrativeArea", "name": "SIPCOT Hosur" },
          { "@type": "AdministrativeArea", "name": "Bagalur" },
          { "@type": "AdministrativeArea", "name": "Dinnur" },
          { "@type": "AdministrativeArea", "name": "Jeeva Nagar" },
          { "@type": "AdministrativeArea", "name": "Hosur Railway Station" },
          { "@type": "AdministrativeArea", "name": "Hosur Bus Stand" },
          { "@type": "AdministrativeArea", "name": "Mookandapalli" },
          { "@type": "AdministrativeArea", "name": "Bathalapalli" },
          { "@type": "AdministrativeArea", "name": "Mathigiri" },
          { "@type": "AdministrativeArea", "name": "Attibele" },
          { "@type": "AdministrativeArea", "name": "Kempegowda International Airport Bengaluru (BLR)" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hosur Local, Airport & Outstation Taxi Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local Taxi Service in Hosur",
                "description": "24/7 on-demand local cab pickup across Hosur Railway Station, Bus Stand, SIPCOT & local areas from ₹150."
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "minPrice": "150",
                "priceCurrency": "INR",
                "unitText": "per trip (local 4 km)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Airport Taxi in Hosur (Hosur to Bangalore Airport BLR)",
                "description": "Fixed Swift Dzire fare: ₹2,200 with 24/7 flight delay tracking and on-time pickup."
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "minPrice": "2200",
                "maxPrice": "2800",
                "priceCurrency": "INR",
                "unitText": "fixed package (Hosur to BLR Airport)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Outstation Taxi in Hosur & One Way Drop Taxi",
                "description": "One-way drop taxi and round trips starting from ₹9/km to Chennai, Bangalore, Salem, Coimbatore & Tirupati."
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "minPrice": "9",
                "maxPrice": "18",
                "priceCurrency": "INR",
                "unitText": "per km (one-way drop)"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yuvacalltaxi.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I book a 24 Hours Call Taxi in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book a 24 hours call taxi in Hosur with Yuva Call Taxi by calling +91 99442 71322 or messaging us on WhatsApp. Our cabs arrive within 5 to 10 minutes anywhere in Hosur with transparent billing and zero surge fees."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Hosur Taxi Number for instant booking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The direct Hosur Call Taxi Number for Yuva Call Taxi is +91 99442 71322. Call or WhatsApp 24/7 for local cabs, airport transfers, and outstation trips."
            }
          },
          {
            "@type": "Question",
            "name": "What is the taxi fare from Hosur to Bangalore Airport (BLR)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The taxi fare from Hosur to Bangalore Kempegowda Airport (BLR) is a fixed rate of ₹2,200 for Non-A/C and ₹2,300 for an A/C Sedan (Swift Dzire/Etios), and ₹2,800 for a 6-seater Ertiga SUV. There are zero midnight surge fees."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide one way drop taxi from Hosur to Chennai, Salem and Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Yuva Call Taxi provides one-way drop taxis starting at ₹9/km. You only pay for one-way kilometers with zero return fare charges to Chennai, Salem, Bangalore, Coimbatore, and Tirupati."
            }
          },
          {
            "@type": "Question",
            "name": "What are the local taxi rates in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local taxi service in Hosur starts from ₹150 for the first 4 kilometers for Non-A/C Hatchback (₹180 for A/C), and ₹180 for Sedan (₹220 for A/C), with transparent per-kilometer rates thereafter."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide taxi service in SIPCOT, Bagalur, Dinnur and Jeeva Nagar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Yuva Call Taxi provides 24/7 coverage across SIPCOT Phase 1 & 2, Bagalur Road, Dinnur, Jeeva Nagar, Hosur Railway Station, and Hosur Bus Stand with 5 to 10 minute pickup."
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.yuvacalltaxi.com/#website",
        "name": "Yuva Call Taxi",
        "alternateName": "Yuva Cabs",
        "url": "https://www.yuvacalltaxi.com/",
        "description": "Book 24/7 reliable taxi service in Hosur. Local taxi from ₹150, airport taxi from ₹2,200, outstation drop taxi from ₹9/km.",
        "publisher": { "@id": "https://www.yuvacalltaxi.com/#localbusiness" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yuvacalltaxi.com/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yuvacalltaxi.com/" },
          { "@type": "ListItem", "position": 2, "name": "Local Taxi in Hosur", "item": "https://www.yuvacalltaxi.com/local-taxi" },
          { "@type": "ListItem", "position": 3, "name": "Outstation Taxi in Hosur", "item": "https://www.yuvacalltaxi.com/outstation-taxi" },
          { "@type": "ListItem", "position": 4, "name": "Airport Taxi in Hosur", "item": "https://www.yuvacalltaxi.com/airport-taxi" },
          { "@type": "ListItem", "position": 5, "name": "Taxi Services in Hosur", "item": "https://www.yuvacalltaxi.com/#services" },
          { "@type": "ListItem", "position": 6, "name": "Cab Pricing", "item": "https://www.yuvacalltaxi.com/#pricing" },
          { "@type": "ListItem", "position": 7, "name": "Online Taxi Booking", "item": "https://www.yuvacalltaxi.com/#contact" }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>Call Taxi in Hosur | 24/7 Taxi Service &amp; Cab Booking - Yuva Call Taxi</title>
      <meta name="title" content="Call Taxi in Hosur | 24/7 Taxi Service &amp; Cab Booking - Yuva Call Taxi" />
      <meta name="description" content="Book 24 hours call taxi in Hosur with Yuva Call Taxi (+91 99442 71322). Fast 5-10 min pickup at Hosur Railway Station, Bus Stand, SIPCOT &amp; Bagalur. Local cab from ₹150, outstation ₹9/km." />
      <meta name="keywords" content={targetKeywords.join(", ")} />
      <meta name="application-name" content="Yuva Call Taxi Hosur" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.yuvacalltaxi.com/" />
      <link rel="alternate" hreflang="en-IN" href="https://www.yuvacalltaxi.com/" />
      <link rel="alternate" hreflang="ta" href="https://www.yuvacalltaxi.com/" />
      <link rel="alternate" hreflang="x-default" href="https://www.yuvacalltaxi.com/" />

      {/* Local & Geographic SEO Meta Tags for Google Top Ranking in Hosur */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
      <meta name="geo.position" content="12.7409;77.8253" />
      <meta name="ICBM" content="12.7409, 77.8253" />
      <meta name="contact" content="+919944271322" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://www.yuvacalltaxi.com/" />
      <meta property="og:site_name" content="Yuva Call Taxi Hosur" />
      <meta property="og:title" content="Call Taxi in Hosur | 24/7 Taxi Service &amp; Cab Booking - Yuva Call Taxi" />
      <meta property="og:description" content="Book 24 hours call taxi in Hosur with Yuva Call Taxi (+91 99442 71322). Fast 5-10 min pickup at Hosur Railway Station, Bus Stand, SIPCOT &amp; Bagalur. Local cab from ₹150, outstation ₹9/km." />
      <meta property="og:image" content="https://www.yuvacalltaxi.com/logo.jpg" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="ta_IN" />
      <meta property="business:contact_data:street_address" content="Dinnur Main Road, Jeeva Nagar" />
      <meta property="business:contact_data:locality" content="Hosur" />
      <meta property="business:contact_data:region" content="Tamil Nadu" />
      <meta property="business:contact_data:postal_code" content="635109" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:phone_number" content="+919944271322" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.yuvacalltaxi.com/" />
      <meta property="twitter:title" content="Call Taxi in Hosur | 24/7 Taxi Service &amp; Cab Booking - Yuva Call Taxi" />
      <meta property="twitter:description" content="Book 24 hours call taxi in Hosur with Yuva Call Taxi (+91 99442 71322). Fast 5-10 min pickup at Hosur Railway Station, Bus Stand, SIPCOT &amp; Bagalur. Local cab from ₹150, outstation ₹9/km." />
      <meta property="twitter:image" content="https://www.yuvacalltaxi.com/logo.jpg" />

      {/* Structured Data: LocalBusiness, TaxiService, FAQPage, BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
