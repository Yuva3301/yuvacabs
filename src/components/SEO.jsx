import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TaxiService", "LocalBusiness"],
        "@id": "https://yuvacalltaxi.com/#localbusiness",
        "name": "YUVA CABS - Best Taxi Service in Hosur",
        "alternateName": [
          "YUVA CABS",
          "Yuva Cabs Hosur",
          "Hosur Outstation Cabs",
          "Outstation Taxi Hosur",
          "One Way Drop Taxi Hosur",
          "Yuva Call Taxi Hosur",
          "Yuva Travels Hosur",
          "Best Cab in Hosur"
        ],
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
        "priceRange": "₹9 - ₹19 per km",
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
          { "@type": "AdministrativeArea", "name": "SIPCOT Phase 2 Hosur" },
          { "@type": "AdministrativeArea", "name": "Mathigiri" },
          { "@type": "AdministrativeArea", "name": "Bagalur" },
          { "@type": "AdministrativeArea", "name": "Mookandapalli" },
          { "@type": "AdministrativeArea", "name": "Zuzuvadi" },
          { "@type": "AdministrativeArea", "name": "Attibele" },
          { "@type": "AdministrativeArea", "name": "Electronic City" },
          { "@type": "AdministrativeArea", "name": "Bengaluru Kempegowda Airport (BLR)" },
          { "@type": "AdministrativeArea", "name": "Bangalore" },
          { "@type": "AdministrativeArea", "name": "Chennai" },
          { "@type": "AdministrativeArea", "name": "Salem" },
          { "@type": "AdministrativeArea", "name": "Coimbatore" },
          { "@type": "AdministrativeArea", "name": "Tirupati" },
          { "@type": "AdministrativeArea", "name": "Pondicherry" },
          { "@type": "AdministrativeArea", "name": "Ooty" },
          { "@type": "AdministrativeArea", "name": "Madurai" },
          { "@type": "AdministrativeArea", "name": "Trichy" },
          { "@type": "AdministrativeArea", "name": "Mysore" },
          { "@type": "AdministrativeArea", "name": "Krishnagiri" },
          { "@type": "AdministrativeArea", "name": "Dharmapuri" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hosur Outstation & Local Taxi Services",
          "itemListElement": [
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
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>YUVA CABS | Outstation Taxi in Hosur from ₹9/km | Airport Cabs 24/7</title>
      <meta name="title" content="YUVA CABS | Outstation Taxi in Hosur from ₹9/km | Airport Cabs 24/7" />
      <meta name="description" content="Book #1 rated outstation cabs from Hosur starting @ ₹9/km. One-way drop taxi & round trips to Chennai, Bangalore, Salem, Coimbatore, Tirupati, Ooty. Call +91 99442 71322 for instant pickup." />
      <meta name="keywords" content="Outstation taxi Hosur, Outstation cab service Hosur, One way drop taxi Hosur, Best outstation cabs Hosur, Hosur outstation round trip, Hosur to Chennai taxi, Hosur to Bangalore outstation cab, Hosur to Salem taxi, Hosur to Coimbatore cab, Hosur to Tirupati taxi, Hosur to Pondicherry cab, Hosur to Ooty taxi, Taxi in Hosur, Cab service Hosur, Yuva Cabs outstation" />
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
      <meta property="og:site_name" content="YUVA CABS Hosur" />
      <meta property="og:title" content="YUVA CABS | Outstation Taxi in Hosur from ₹9/km | 24/7 Cabs" />
      <meta property="og:description" content="Book outstation cabs in Hosur from ₹9/km. Round trips & one-way drops to Chennai, Bangalore, Salem, Coimbatore, Tirupati. Call +91 99442 71322." />
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
      <meta property="twitter:title" content="YUVA CABS | Outstation Taxi in Hosur from ₹9/km | 24/7 Cabs" />
      <meta property="twitter:description" content="Book affordable outstation taxi services in Hosur with YUVA CABS. Outstation trips from ₹9/km. Fast pickup, airport transfer 24/7." />
      <meta property="twitter:image" content="https://yuvacalltaxi.com/og-image.jpg" />

      {/* JSON-LD Schema Structuring */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
