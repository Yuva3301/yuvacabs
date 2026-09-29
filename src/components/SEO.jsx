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
          "Yuva Call Taxi Hosur",
          "Yuva Travels Hosur",
          "Best Cab in Hosur"
        ],
        "image": "https://yuvacalltaxi.com/og-image.jpg",
        "description": "Hosur's #1 rated taxi and cab service available 24/7. Affordable outstation cabs starting @ ₹9/km, 24/7 Bangalore Airport transfers (BLR), SIPCOT corporate cabs, and local drops.",
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
          { "@type": "AdministrativeArea", "name": "Krishnagiri" },
          { "@type": "AdministrativeArea", "name": "Dharmapuri" },
          { "@type": "AdministrativeArea", "name": "Salem" },
          { "@type": "AdministrativeArea", "name": "Chennai" },
          { "@type": "AdministrativeArea", "name": "Bangalore" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hosur Taxi & Cab Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Outstation Cab Booking from Hosur",
                "description": "Round trip and one way outstation taxi service starting at ₹9 to ₹12 per km."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport Taxi (BLR)",
                "description": "24/7 on-time Kempegowda International Airport drops and pickups from Hosur."
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
            "name": "What is the taxi fare per km in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Outstation round trips with YUVA CABS start at just ₹9 to ₹12/km. Local Hatchbacks start at ₹9-10/km, Sedans at ₹10-12/km, and Toyota Innova / Innova Crysta at ₹18-19/km."
            }
          },
          {
            "@type": "Question",
            "name": "How to book a cab in Hosur with YUVA CABS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book instantly by calling +91 99442 71322, chatting on WhatsApp at +91 99442 71322, or submitting the quick booking form on yuvacalltaxi.com."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide 24/7 airport taxi from Hosur to Bangalore Airport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, YUVA CABS provides 24/7 dedicated airport drop and pickup service between Hosur and Kempegowda International Airport (BLR) with guaranteed on-time arrival."
            }
          },
          {
            "@type": "Question",
            "name": "Are cabs available 24 hours in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, YUVA CABS operates 24 hours a day, 7 days a week, including midnight emergency pickups and early morning rides across Hosur and SIPCOT."
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>YUVA CABS | Best Taxi Service in Hosur | 24/7 Outstation Cabs ₹9/km</title>
      <meta name="title" content="YUVA CABS | Best Taxi Service in Hosur | 24/7 Outstation Cabs ₹9/km" />
      <meta name="description" content="Book Hosur's #1 rated taxi service. YUVA CABS offers 24/7 outstation cabs @ ₹9/km, Bangalore Airport drops, local city rides, and corporate travel. Call +91 99442 71322 for instant pickup." />
      <meta name="keywords" content="Taxi in Hosur, Cab service Hosur, Hosur taxi booking, Best taxi in Hosur, Hosur to Bangalore Airport taxi, Outstation cabs Hosur, Yuva Cabs, Yuva Call Taxi, 24/7 taxi Hosur, Cheap cab Hosur, SIPCOT Hosur cab service, One way taxi Hosur, Hosur travels, Call Taxi in Hosur" />
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
      <meta property="og:title" content="YUVA CABS | Best Taxi Service in Hosur | 24/7 Cab Booking" />
      <meta property="og:description" content="Hosur's top-rated taxi service. Outstation cabs @ ₹9/km, Bangalore airport transfers, 24/7 local cabs. Call +91 99442 71322." />
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
      <meta property="twitter:title" content="YUVA CABS | Best Taxi Service in Hosur | 24/7 Cab Booking" />
      <meta property="twitter:description" content="Book affordable taxi services in Hosur with YUVA CABS. Outstation trips from ₹9/km. Fast pickup, airport transfer 24/7." />
      <meta property="twitter:image" content="https://yuvacalltaxi.com/og-image.jpg" />

      {/* JSON-LD Schema Structuring */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
