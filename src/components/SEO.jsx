import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TaxiService", "LocalBusiness"],
        "@id": "https://yuvacalltaxi.com/#localbusiness",
        "name": "YUVAA CALL TAXI (YUVA CABS) - Best Taxi Service in Hosur",
        "alternateName": [
          "YUVAA CALL TAXI",
          "Yuva Call Taxi",
          "YUVA CABS",
          "HOSUR CABS",
          "Yuva Cabs Hosur",
          "Call Taxi Hosur",
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
          "Hosur Travels",
          "Best Cab in Hosur",
          "Best Taxi in Hosur",
          "SIPCOT Phase 1 Taxi Service",
          "SIPCOT Phase 2 Cab Service",
          "Zuzuvadi Taxi Hosur",
          "Mookandapalli Cab Service",
          "TANSIDCO Hosur Taxi",
          "Moranapalli Cab Service",
          "Thorapalli Taxi",
          "Bagalur Road Cab Booking",
          "Hosur Railway Station Taxi",
          "Hosur Bus Stand Cab",
          "Shanthi Nagar Taxi Hosur",
          "Nehru Nagar Cab Hosur",
          "Mathigiri Taxi Service",
          "Avalapalli Road Cab",
          "Sanasandiram Taxi",
          "Old Bengaluru Road Taxi",
          "Hosur IT Park Cab Service",
          "Adagurukki Doripalli Taxi",
          "Shoolagiri Taxi Service",
          "Chandapura to Hosur Cab",
          "Anekal Taxi Hosur",
          "Bommasandra Taxi Service",
          "Denkanikottai Cab Service",
          "Rayakottai Taxi",
          "Kelamangalam Cab Booking",
          "Hosur to Bangalore Airport Taxi",
          "Hosur Outstation Cabs",
          "Outstation Taxi Hosur",
          "One Way Drop Taxi Hosur",
          "Cab in Hosur",
          "Hosur Taxi",
          "Cab Near Me",
          "Call Taxi in Hosur"
        ],
        "image": "https://yuvacalltaxi.com/og-image.jpg",
        "description": "Hosur's #1 rated taxi and cab service available 24/7. Fast 5-10 min pickups in SIPCOT Phase 1 & 2, Zuzuvadi, Mookandapalli, TANSIDCO, Mathigiri, Bagalur Rd, Railway Station, Chandapura, Bommasandra, Anekal, Shoolagiri & BLR Airport transfers.",
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
          "streetAddress": "Dinnur main Road, Jeeva Nagar",
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
          { "@type": "AdministrativeArea", "name": "Zuzuvadi Hosur" },
          { "@type": "AdministrativeArea", "name": "Mookandapalli Hosur" },
          { "@type": "AdministrativeArea", "name": "TANSIDCO Hosur" },
          { "@type": "AdministrativeArea", "name": "SIPCOT Phase 2 Hosur" },
          { "@type": "AdministrativeArea", "name": "Moranapalli Hosur" },
          { "@type": "AdministrativeArea", "name": "Thorapalli Hosur" },
          { "@type": "AdministrativeArea", "name": "Bagalur Road Hosur" },
          { "@type": "AdministrativeArea", "name": "Bagalur Junction Hosur" },
          { "@type": "AdministrativeArea", "name": "Hosur Railway Station Road" },
          { "@type": "AdministrativeArea", "name": "Shanthi Nagar Hosur" },
          { "@type": "AdministrativeArea", "name": "Nehru Nagar Hosur" },
          { "@type": "AdministrativeArea", "name": "Denkanikottai Road Hosur" },
          { "@type": "AdministrativeArea", "name": "Mathigiri Hosur" },
          { "@type": "AdministrativeArea", "name": "Avalapalli Road Hosur" },
          { "@type": "AdministrativeArea", "name": "Sanasandiram Hosur" },
          { "@type": "AdministrativeArea", "name": "Kamaraj Colony Hosur" },
          { "@type": "AdministrativeArea", "name": "Old Bengaluru Road Hosur" },
          { "@type": "AdministrativeArea", "name": "MG Road Hosur" },
          { "@type": "AdministrativeArea", "name": "Hosur Bus Stand Central" },
          { "@type": "AdministrativeArea", "name": "Hosur-Thally Road" },
          { "@type": "AdministrativeArea", "name": "Hosur IT Park Viswanathapuram" },
          { "@type": "AdministrativeArea", "name": "Adagurukki Hosur" },
          { "@type": "AdministrativeArea", "name": "Doripalli Hosur" },
          { "@type": "AdministrativeArea", "name": "Shoolagiri" },
          { "@type": "AdministrativeArea", "name": "Chandapura" },
          { "@type": "AdministrativeArea", "name": "Anekal" },
          { "@type": "AdministrativeArea", "name": "Bommasandra" },
          { "@type": "AdministrativeArea", "name": "Denkanikottai" },
          { "@type": "AdministrativeArea", "name": "Rayakottai" },
          { "@type": "AdministrativeArea", "name": "Kelamangalam" },
          { "@type": "AdministrativeArea", "name": "Kelamangalam Road Hosur" },
          { "@type": "AdministrativeArea", "name": "Dinnur Hosur" },
          { "@type": "AdministrativeArea", "name": "Jeeva Nagar Hosur" },
          { "@type": "AdministrativeArea", "name": "Berigai" },
          { "@type": "AdministrativeArea", "name": "Attibele Border" },
          { "@type": "AdministrativeArea", "name": "Hosur New Bus Stand" },
          { "@type": "AdministrativeArea", "name": "Electronic City Bangalore" },
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
                "name": "SIPCOT Phase 1 & 2 Industrial Employee & Corporate Cab Service",
                "description": "Round-the-clock shift drop and employee transportation for SIPCOT Phase 1 (Zuzuvadi, Mookandapalli), SIPCOT Phase 2 (Moranapalli, Thorapalli), TANSIDCO, and Adagurukki/Doripalli expansion."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Airport Taxi - Swift Dzire Fixed Fare",
                "description": "Fixed package airport drop and pickup in Maruti Swift Dzire. Non-A/C ₹2,200 and A/C ₹2,300 with 24/7 flight tracking and on-time arrival."
              },
              "price": "2200",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur City Rapid Point-to-Point Cabs (Railway Station, Bus Stand, Mathigiri)",
                "description": "Instant 5-10 minute cab dispatch across Hosur Railway Station, Hosur Central Bus Stand, Bagalur Road, Shanthi Nagar, Nehru Nagar, Avalapalli, and MG Road."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bangalore Border Industrial Corridor Taxi (Bommasandra, Chandapura, Anekal)",
                "description": "Direct interstate point-to-point and shift rides between Hosur, Attibele, Bommasandra Industrial Area, Chandapura, and Anekal without interstate hassle."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Regional Towns & Highway Drop Taxi (Shoolagiri, Denkanikottai, Rayakottai, Kelamangalam)",
                "description": "Dependable outstation and rural connectivity starting @ ₹9/km across Shoolagiri, Denkanikottai, Rayakottai, Kelamangalam, and Thally."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Outstation Cab Booking from Hosur",
                "description": "Round trip and one way outstation taxi service starting at ₹9 to ₹12 per km to Chennai, Bangalore, Salem, Coimbatore, and Pondicherry."
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
            "name": "Do you provide cabs in SIPCOT Phase 1, Phase 2, Zuzuvadi, and Mookandapalli?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! YUVA CABS operates dedicated cabs stationed directly inside SIPCOT Phase 1 (Zuzuvadi, Mookandapalli) and SIPCOT Phase 2 (Moranapalli, Thorapalli), as well as TANSIDCO and the Adagurukki/Doripalli expansion zones. Drivers arrive within 5 to 10 minutes for industrial shift pickups and corporate trips."
            }
          },
          {
            "@type": "Question",
            "name": "Can I book taxis to and from Chandapura, Bommasandra, and Anekal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We operate frequent point-to-point cabs between Hosur and the Bangalore industrial belt including Bommasandra, Chandapura, Anekal, and Attibele border, offering fixed and per-kilometer rates starting at ₹10/km."
            }
          },
          {
            "@type": "Question",
            "name": "Are cabs available in Shoolagiri, Denkanikottai, Rayakottai, and Kelamangalam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, YUVA CABS provides 24/7 service across all surrounding taluks and highway corridors including Shoolagiri (NH44), Denkanikottai, Rayakottai, Kelamangalam, and Thally with swift dispatch."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can I get a cab at Hosur Railway Station or Hosur Bus Stand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We maintain cabs stationed at Hosur Railway Station Road and Hosur Central Bus Stand 24 hours a day. Pickup is typically within 3 to 7 minutes of booking."
            }
          },
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
              "text": "Yes, YUVA CABS provides 24/7 dedicated airport drop and pickup service between Hosur and Kempegowda International Airport (BLR). For Maruti Swift Dzire, we offer a fixed package: Non-A/C ₹2,200 and A/C ₹2,300 with flight tracking and zero wait charges."
            }
          },
          {
            "@type": "Question",
            "name": "Which is the best taxi service in Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "YUVA CABS (Yuva Call Taxi) is rated #1 on Google with 4.9 stars and 385+ reviews. We offer the most affordable per-km rates starting at ₹9/km with 24/7 availability across SIPCOT, Mathigiri, Bagalur Rd, and outstation routes."
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
      <title>Yuva Call Taxi Hosur | Most Reliable Taxi Service in Hosur | 24/7 Call Taxi Near Me</title>
      <meta name="title" content="Yuva Call Taxi Hosur | Most Reliable Taxi Service in Hosur | 24/7 Call Taxi Near Me" />
      <meta name="description" content="Yuva Call Taxi Hosur — Most reliable taxi service in Hosur. 24/7 call taxi near me with 5-10 min pickup in SIPCOT, Bus Stand, Railway Station, Dinnur, Mathigiri, Bagalur Rd & Bangalore Airport from ₹9/km. Call +91 99442 71322." />
      <meta name="keywords" content="Yuva Call Taxi Hosur, most reliable taxi service in Hosur, taxi service in Hosur, call taxi near me, taxi near me, cab service in Hosur, car rental in Hosur, online taxi booking in Hosur, local taxi service in Hosur, outstation taxi in Hosur, airport taxi in Hosur, airport pickup and drop in Hosur, one way taxi in Hosur, round trip taxi in Hosur, 24 hours taxi service in Hosur, seven seater taxi in Hosur, Innova Crysta rental in Hosur, Tempo Traveller rental in Hosur, tour and travel service in Hosur, cheap taxi service in Hosur, call taxi near Hosur bus stand, taxi near Hosur railway station, taxi service near Hosur new bus stand, call taxi in SIPCOT Hosur, taxi service bagalur road Hosur, call taxi denkanikottai road Hosur, call taxi in dinnur hosur, taxi service jeeva nagar hosur, call taxi sanasandiram hosur, taxi service mathigiri hosur, call taxi kelamangalam road hosur, taxi service attibele, call taxi berigai, taxi service mookandapalli hosur, call taxi zuzuvadi hosur, sedan car rental hosur, swift dzire taxi hosur, seven seater car rental hosur, family trip taxi hosur, business trip taxi hosur, chennai airport taxi from hosur, bangalore airport taxi from hosur, hosur to bangalore taxi, yuvaa call taxi, yuvacalltaxi, yuva cabs, yuva cabs hosur, call taxi hosur, best taxi hosur, sipcot phase 1 taxi, sipcot phase 2 cab, zuzuvadi taxi, mookandapalli cab, tansidco hosur taxi, moranapalli cab, thorapalli taxi, bagalur road taxi, bagalur junction cab, hosur railway station taxi, shanthi nagar hosur taxi, nehru nagar cab, mathigiri taxi service, avalapalli road cab, sanasandiram taxi, kamaraj colony cab, old bengaluru road taxi, mg road hosur taxi, hosur bus stand taxi, hosur it park taxi, viswanathapuram cab, adagurukki taxi, doripalli cab, shoolagiri taxi, chandapura cab, anekal taxi hosur, bommasandra taxi, denkanikottai cab, rayakottai taxi, kelamangalam cab, hosur to bangalore airport taxi, outstation cabs hosur, 24/7 taxi hosur" />
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
      <meta property="og:site_name" content="Yuva Call Taxi Hosur" />
      <meta property="og:title" content="Yuva Call Taxi Hosur | Most Reliable Taxi Service in Hosur | 24/7 Call Taxi Near Me" />
      <meta property="og:description" content="Yuva Call Taxi Hosur — Most reliable taxi service in Hosur. 24/7 call taxi near me with 5-10 min pickups in SIPCOT, Bus Stand, Railway Station, Dinnur, Mathigiri & Bangalore Airport. Call +91 99442 71322." />
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
      <meta property="twitter:title" content="Yuva Call Taxi Hosur | Most Reliable Taxi Service in Hosur | 24/7 Call Taxi Near Me" />
      <meta property="twitter:description" content="Yuva Call Taxi Hosur — Most reliable taxi service in Hosur. 24/7 call taxi near me with 5-10 min pickups in SIPCOT, Bus Stand, Railway Station, Dinnur, Mathigiri & Bangalore Airport. Call +91 99442 71322." />
      <meta property="twitter:image" content="https://yuvacalltaxi.com/og-image.jpg" />

      {/* JSON-LD Schema Structuring */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
