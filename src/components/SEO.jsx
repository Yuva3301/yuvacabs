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
          "YUVAA CALL TAXI",
          "Yuva Call Taxi",
          "YUVA CABS",
          "Yuva Cabs Hosur",
          "Hosur Outstation Cabs",
          "Outstation Taxi Hosur",
          "One Way Drop Taxi Hosur",
          "Yuva Call Taxi Hosur",
          "Yuva Travels Hosur",
          "Best Cab in Hosur",
          "Best Taxi in Hosur",
          "Cab in Hosur",
          "Hosur Taxi",
          "Call Taxi Hosur"
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
      <title>YUVAA CALL TAXI | Best Taxi Service in Hosur | 24/7 Airport &amp; Outstation Taxi Service</title>
      <meta name="title" content="YUVAA CALL TAXI | Best Taxi Service in Hosur | 24/7 Airport & Outstation Taxi Service" />
      <meta name="description" content="YUVAA CALL TAXI (Yuva Call Taxi) — Hosur's #1 rated taxi & cab service. Book local & outstation cabs from ₹9/km. 24/7 airport taxi to Bangalore, one-way drop to Chennai, Salem, Coimbatore. Call +91 99442 71322." />
      <meta name="keywords" content="yuvaa call taxi, yuvacalltaxi, hosur taxi, taxi in hosur, cab in hosur, hosur cab, yuva call taxi, yuva cabs, yuva cabs hosur, call taxi hosur, best taxi hosur, best cab hosur, hosur taxi service, hosur cab service, hosur to bangalore taxi, hosur to chennai cab, hosur to chennai taxi, hosur airport taxi, outstation taxi hosur, outstation cab hosur, local taxi hosur, one way taxi hosur, drop taxi hosur, hosur to bangalore airport taxi, taxi booking hosur, cab booking hosur, yuva call taxi hosur" />
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
      <meta property="og:title" content="YUVAA CALL TAXI | Best Taxi Service in Hosur | 24/7 Airport & Outstation Taxi Service" />
      <meta property="og:description" content="YUVAA CALL TAXI (Yuva Call Taxi) — Hosur's #1 rated taxi & cab service. Book local & outstation cabs from ₹9/km. 24/7 airport taxi to Bangalore, one-way drop to Chennai, Salem, Coimbatore. Call +91 99442 71322." />
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
      <meta property="twitter:title" content="YUVAA CALL TAXI | Best Taxi Service in Hosur | 24/7 Airport & Outstation Taxi Service" />
      <meta property="twitter:description" content="YUVAA CALL TAXI (Yuva Call Taxi) — Hosur's #1 rated taxi & cab service. Book local & outstation cabs from ₹9/km. 24/7 airport taxi to Bangalore, one-way drop to Chennai, Salem, Coimbatore. Call +91 99442 71322." />
      <meta property="twitter:image" content="https://yuvacalltaxi.com/og-image.jpg" />

      {/* JSON-LD Schema Structuring */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
