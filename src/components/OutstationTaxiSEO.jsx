import { Helmet } from 'react-helmet-async';

export default function OutstationTaxiSEO() {
  const keywords = [
    "Outstation Taxi in Hosur",
    "One Way Taxi from Hosur",
    "Round Trip Taxi in Hosur",
    "Call Taxi in Hosur",
    "Hosur Call Taxi",
    "Taxi Service in Hosur",
    "Hosur Taxi Service",
    "Hosur Outstation Cabs",
    "One Way Drop Taxi Hosur",
    "Outstation Cab Hosur",
    "Hosur to Chennai Drop Taxi",
    "Hosur to Bangalore Taxi",
    "Hosur to Salem Drop Taxi",
    "Hosur to Coimbatore Cab",
    "Hosur to Tirupati Taxi",
    "Hosur to Pondicherry Cab",
    "Hosur to Ooty Taxi",
    "Hosur to Trichy Taxi",
    "Hosur to Madurai Cab",
    "Drop Taxi Hosur",
    "One Way Taxi Hosur",
    "Outstation Drop Taxi Hosur",
    "Hosur Drop Taxi 9944271322",
    "Best Outstation Cab Hosur",
    "Outstation Taxi Service Hosur",
    "Yuva Cabs Outstation",
    "Hosur to Chennai Cab ₹9/km",
    "Hosur to Bangalore Cab ₹10/km",
    "Innova Crysta Outstation Hosur",
    "Tempo Traveller Hosur",
    "Hosur Outstation Taxi 9944271322",
    "Chennai Airport Taxi from Hosur",
    "Hosur to Krishnagiri Taxi",
    "Hosur to Dharmapuri Cab",
    "Outstation Taxi ₹9 per km"
  ];

  const jsonLdSchema = {
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
        "priceRange": "₹9 - ₹45 per km",
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
          {
            "@type": "City",
            "name": "Hosur"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Tamil Nadu"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "TaxiService",
        "@id": "https://www.yuvacalltaxi.com/outstation-taxi#service",
        "name": "Outstation Taxi in Hosur",
        "url": "https://www.yuvacalltaxi.com/outstation-taxi",
        "description": "Affordable outstation taxi, one-way drop cabs and round trip service from Hosur starting at ₹9/km to Chennai, Bangalore, Salem, Coimbatore, Tirupati and more. Zero return fare.",
        "provider": {
          "@id": "https://www.yuvacalltaxi.com/#localbusiness"
        },
        "telephone": "+919944271322",
        "image": "https://www.yuvacalltaxi.com/logo.jpg",
        "logo": "https://www.yuvacalltaxi.com/logo.jpg",
        "priceRange": "₹9 - ₹18 per km",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Card",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919944271322",
          "contactType": "customer service",
          "availableLanguage": ["Tamil", "Telugu", "Kannada", "English"],
          "contactOption": "TollFree",
          "areaServed": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Bangalore" },
          { "@type": "City", "name": "Salem" },
          { "@type": "City", "name": "Coimbatore" },
          { "@type": "City", "name": "Tirupati" },
          { "@type": "City", "name": "Pondicherry" },
          { "@type": "City", "name": "Ooty" },
          { "@type": "City", "name": "Trichy" },
          { "@type": "City", "name": "Madurai" },
          { "@type": "City", "name": "Krishnagiri" },
          { "@type": "City", "name": "Dharmapuri" },
          { "@type": "City", "name": "Vellore" },
          { "@type": "City", "name": "Erode" },
          { "@type": "City", "name": "Namakkal" },
          { "@type": "City", "name": "Mysore" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Outstation Taxi Routes from Hosur",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Hosur to Chennai One Way Drop Taxi",
              "description": "One-way drop taxi from Hosur to Chennai. Distance: 310km, Duration: ~5.5 hours. Affordable outstation cab at ₹9/km.",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "2790",
                "priceCurrency": "INR",
                "unitText": "per trip (310km × ₹9/km)"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Chennai Drop Taxi",
                "description": "Comfortable one-way drop taxi from Hosur to Chennai covering 310km in approximately 5.5 hours. Available 24/7 with AC vehicles."
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://www.yuvacalltaxi.com/outstation-taxi#service"
              }
            },
            {
              "@type": "Offer",
              "name": "Hosur to Bangalore Taxi",
              "description": "Taxi from Hosur to Bangalore. Distance: 35–55km, Duration: 45–75 minutes. Quick intercity cab at ₹10/km.",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "350",
                "priceCurrency": "INR",
                "unitText": "per trip (from ₹10/km)"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Bangalore Taxi",
                "description": "Fast and reliable taxi from Hosur to Bangalore covering 35–55km in approximately 45–75 minutes. Book 24/7."
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://www.yuvacalltaxi.com/outstation-taxi#service"
              }
            },
            {
              "@type": "Offer",
              "name": "Hosur to Salem Drop Taxi",
              "description": "One-way drop taxi from Hosur to Salem. Distance: 160km, Duration: ~2.5 hours. Budget outstation cab at ₹9/km.",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "1440",
                "priceCurrency": "INR",
                "unitText": "per trip (160km × ₹9/km)"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Salem Drop Taxi",
                "description": "Convenient one-way drop taxi from Hosur to Salem covering 160km in approximately 2.5 hours."
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://www.yuvacalltaxi.com/outstation-taxi#service"
              }
            },
            {
              "@type": "Offer",
              "name": "Hosur to Coimbatore Cab",
              "description": "Outstation cab from Hosur to Coimbatore. Distance: 320km, Duration: ~5.5 hours. One-way drop taxi at ₹9/km.",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "2880",
                "priceCurrency": "INR",
                "unitText": "per trip (320km × ₹9/km)"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Coimbatore Cab",
                "description": "Comfortable outstation cab from Hosur to Coimbatore covering 320km in approximately 5.5 hours."
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://www.yuvacalltaxi.com/outstation-taxi#service"
              }
            },
            {
              "@type": "Offer",
              "name": "Hosur to Tirupati Pilgrimage Taxi",
              "description": "Pilgrimage taxi from Hosur to Tirupati. Distance: 245km, Duration: ~4.5 hours. Devotional outstation cab at ₹9/km.",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "2205",
                "priceCurrency": "INR",
                "unitText": "per trip (245km × ₹9/km)"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Tirupati Pilgrimage Taxi",
                "description": "Reliable pilgrimage taxi from Hosur to Tirupati temple town covering 245km in approximately 4.5 hours."
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://www.yuvacalltaxi.com/outstation-taxi#service"
              }
            },
            {
              "@type": "Offer",
              "name": "Hosur to Pondicherry Weekend Cab",
              "description": "Weekend cab from Hosur to Pondicherry. Distance: 260km, Duration: ~5 hours. Scenic outstation taxi at ₹9/km.",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "2340",
                "priceCurrency": "INR",
                "unitText": "per trip (260km × ₹9/km)"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Pondicherry Weekend Cab",
                "description": "Enjoyable weekend cab from Hosur to Pondicherry covering 260km in approximately 5 hours."
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://www.yuvacalltaxi.com/outstation-taxi#service"
              }
            },
            {
              "@type": "Offer",
              "name": "Hosur to Ooty Hill Station Taxi",
              "description": "Hill station taxi from Hosur to Ooty. Distance: 285km, Duration: ~6.5 hours. Scenic ghat road cab at ₹9/km.",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "2565",
                "priceCurrency": "INR",
                "unitText": "per trip (285km × ₹9/km)"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Ooty Hill Station Taxi",
                "description": "Comfortable hill station taxi from Hosur to Ooty covering 285km via scenic ghat roads in approximately 6.5 hours."
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://www.yuvacalltaxi.com/outstation-taxi#service"
              }
            },
            {
              "@type": "Offer",
              "name": "Hosur to Trichy / Madurai Drop Taxi",
              "description": "One-way drop taxi from Hosur to Trichy or Madurai. Distance: 300–390km, Duration: ~5–6.5 hours. Affordable outstation cab at ₹9/km.",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "2700",
                "priceCurrency": "INR",
                "unitText": "per trip (from 300km × ₹9/km)"
              },
              "itemOffered": {
                "@type": "Service",
                "name": "Hosur to Trichy / Madurai Drop Taxi",
                "description": "Reliable one-way drop taxi from Hosur to Trichy or Madurai covering 300–390km in approximately 5–6.5 hours."
              },
              "availability": "https://schema.org/InStock",
              "seller": {
                "@id": "https://www.yuvacalltaxi.com/outstation-taxi#service"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.yuvacalltaxi.com/outstation-taxi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the outstation taxi starting rate from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yuva Call Taxi offers outstation taxi from Hosur starting at just ₹9 per km for one-way drop trips. Call +91 99442 71322 for transparent outstation rates."
            }
          },
          {
            "@type": "Question",
            "name": "Is one way drop taxi available from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Yuva Call Taxi Hosur specialises in one-way drop taxi service from Hosur to all major cities including Chennai, Bangalore, Salem, Coimbatore, Tirupati, and more. You only pay for the one-way distance — zero return charges. Book at +91 99442 71322."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Hosur to Chennai taxi fare?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Hosur to Chennai taxi fare starts at ₹9 per km. The distance is approximately 310km and the journey takes around 5.5 hours. The estimated one-way fare starts from around ₹2,790. Call +91 99442 71322 to get an exact quote."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a Hosur to Bangalore taxi cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hosur to Bangalore taxi is available at ₹10 per km. The distance ranges from 35–55km depending on your pick-up and drop location in Bangalore, taking 45–75 minutes. Call Yuva Call Taxi at +91 99442 71322 for booking."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Hosur to Salem drop taxi fare and distance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Hosur to Salem drop taxi covers approximately 160km and takes about 2.5 hours. The fare starts at ₹9 per km, making the one-way drop estimate around ₹1,440. Book your Salem drop cab at +91 99442 71322."
            }
          },
          {
            "@type": "Question",
            "name": "Can I book a Hosur to Coimbatore cab?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Yuva Call Taxi offers reliable Hosur to Coimbatore cabs. The distance is approximately 320km and the journey takes about 5.5 hours. The one-way fare starts at ₹9/km. Call +91 99442 71322 to book your cab."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a Hosur to Tirupati pilgrimage taxi package?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Yuva Call Taxi provides Hosur to Tirupati pilgrimage taxis. The distance is approximately 245km (~4.5 hours). Our drivers are experienced on the Tirupati route. Fare starts at ₹9/km. Call +91 99442 71322 for packages."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a Hosur to Pondicherry cab?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book a Hosur to Pondicherry cab by calling Yuva Call Taxi at +91 99442 71322. The distance is approximately 260km (~5 hours). Fare starts at ₹9 per km. Our cabs are available 24/7 for outstation trips."
            }
          },
          {
            "@type": "Question",
            "name": "Is the Hosur to Ooty hill station taxi safe on ghat roads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Yuva Call Taxi's Hosur to Ooty taxis are driven by experienced chauffeurs well-versed with the Nilgiris ghat roads. The journey covers approximately 285km in about 6.5 hours. Fare starts at ₹9/km. Call +91 99442 71322 to book."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fare for Hosur to Trichy or Madurai drop taxi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hosur to Trichy is approximately 300km (~5 hours) and Hosur to Madurai is around 390km (~6.5 hours). Both routes are available at ₹9/km one-way drop. Contact Yuva Call Taxi at +91 99442 71322 for exact fares and booking."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Innova Crysta outstation rate from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Innova Crysta outstation taxi from Hosur is available at competitive per-km rates starting from ₹18 per km. Innova Crysta offers 7-seater luxury comfort for long outstation trips. Call +91 99442 71322 for Innova Crysta booking from Hosur."
            }
          },
          {
            "@type": "Question",
            "name": "Does Yuva Call Taxi offer Tempo Traveller for group outstation booking from Hosur?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Yuva Call Taxi offers Tempo Traveller (12–16 seater) for group outstation bookings from Hosur. Ideal for family trips, corporate outings, and pilgrimages. Call +91 99442 71322 to enquire about availability and rates."
            }
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.yuvacalltaxi.com/outstation-taxi#webpage",
        "url": "https://www.yuvacalltaxi.com/outstation-taxi",
        "name": "Outstation Taxi in Hosur | One Way & Round Trip Cabs - Yuva Call Taxi",
        "description": "Book 24/7 outstation taxi in Hosur with Yuva Call Taxi (+91 99442 71322). Affordable one-way drop taxi starting ₹9/km & round trips to Chennai, Bangalore, Salem, Coimbatore, Tirupati, Ooty & Pondicherry. Zero return fare.",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@id": "https://www.yuvacalltaxi.com/#website"
        },
        "publisher": {
          "@id": "https://www.yuvacalltaxi.com/#localbusiness"
        },
        "breadcrumb": {
          "@id": "https://www.yuvacalltaxi.com/outstation-taxi#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yuvacalltaxi.com/outstation-taxi#breadcrumb",
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
            "name": "Outstation Taxi in Hosur",
            "item": "https://www.yuvacalltaxi.com/outstation-taxi"
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* ── JSON-LD Structured Data ── */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdSchema)}
      </script>

      {/* ── Primary Meta Tags ── */}
      <title>Outstation Taxi in Hosur | One Way &amp; Round Trip Cabs - Yuva Call Taxi</title>
      <meta
        name="description"
        content="Book 24/7 outstation taxi in Hosur with Yuva Call Taxi (+91 99442 71322). Affordable one-way drop taxi starting ₹9/km &amp; round trips to Chennai, Bangalore, Salem, Coimbatore, Tirupati, Ooty &amp; Pondicherry. Zero return fare."
      />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Yuva Call Taxi Hosur" />
      <meta name="theme-color" content="#FFD43B" />

      {/* ── Canonical & hreflang ── */}
      <link rel="canonical" href="https://www.yuvacalltaxi.com/outstation-taxi" />
      <link rel="alternate" hreflang="en-IN" href="https://www.yuvacalltaxi.com/outstation-taxi" />
      <link rel="alternate" hreflang="ta" href="https://www.yuvacalltaxi.com/outstation-taxi" />
      <link rel="alternate" hreflang="x-default" href="https://www.yuvacalltaxi.com/outstation-taxi" />

      {/* ── Geo Meta Tags ── */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
      <meta name="geo.position" content="12.7409;77.8253" />
      <meta name="ICBM" content="12.7409, 77.8253" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="business.business" />
      <meta property="og:site_name" content="Yuva Call Taxi Hosur" />
      <meta property="og:url" content="https://www.yuvacalltaxi.com/outstation-taxi" />
      <meta
        property="og:title"
        content="Outstation Taxi in Hosur | One Way &amp; Round Trip Cabs - Yuva Call Taxi"
      />
      <meta
        property="og:description"
        content="Book 24/7 outstation taxi in Hosur with Yuva Call Taxi (+91 99442 71322). Affordable one-way drop taxi starting ₹9/km &amp; round trips to Chennai, Bangalore, Salem, Coimbatore, Tirupati, Ooty &amp; Pondicherry. Zero return fare."
      />
      <meta property="og:image" content="https://www.yuvacalltaxi.com/logo.jpg" />
      <meta property="og:image:alt" content="Yuva Call Taxi Hosur - Outstation Taxi in Hosur" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="ta_IN" />
      <meta property="og:phone_number" content="+919944271322" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Outstation Taxi in Hosur | One Way &amp; Round Trip Cabs - Yuva Call Taxi"
      />
      <meta
        name="twitter:description"
        content="Book 24/7 outstation taxi in Hosur with Yuva Call Taxi (+91 99442 71322). Affordable one-way drop taxi starting ₹9/km &amp; round trips to Chennai, Bangalore, Salem, Coimbatore, Tirupati, Ooty &amp; Pondicherry. Zero return fare."
      />
      <meta name="twitter:image" content="https://www.yuvacalltaxi.com/logo.jpg" />
      <meta name="twitter:image:alt" content="Yuva Call Taxi Hosur - Outstation Taxi in Hosur" />
    </Helmet>
  );
}
