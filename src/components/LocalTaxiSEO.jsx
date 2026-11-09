import { Helmet } from 'react-helmet-async';

const keywords = [
  "Local Taxi Service in Hosur",
  "Local Cab Booking Hosur",
  "Call Taxi in Hosur",
  "Call Taxi Hosur",
  "Hosur Call Taxi",
  "Taxi Service in Hosur",
  "Taxi in Hosur",
  "Hosur Taxi Service",
  "Hosur Taxi Number",
  "24 Hours Call Taxi in Hosur",
  "Taxi Near Me",
  "Cabs Near Me",
  "Railway Station Taxi Hosur",
  "SIPCOT Taxi Service",
  "Bagalur Taxi Service",
  "Dinnur Call Taxi",
  "Jeeva Nagar Taxi Service",
  "Bathalapalli Taxi Service",
  "Rayakottai Taxi Service",
  "Rayakottai Housing Board Taxi",
  "Denkanikottai Taxi Service",
  "Kelamangalam Call Taxi",
  "Krishnagiri to Hosur Taxi",
  "Hosur to Krishnagiri Cab",
  "Alasanatham Taxi Service Hosur",
  "Anthivadi Taxi Service Hosur",
  "SBM Colony Taxi Hosur",
  "Navadhi Call Taxi Hosur",
  "Anekal to Hosur Taxi",
  "Anekal Call Taxi",
  "Poonapalli Taxi Service",
  "Belagondapalli Taxi Service",
  "Mathakondapalli Call Taxi",
  "Thally Taxi Service Hosur",
  "Perandapalli Call Taxi",
  "Kothur Taxi Hosur",
  "Muneeswar Nagar Call Taxi Hosur",
  "Berigai Call Taxi Service",
  "Mookandapalli Taxi",
  "Mathigiri Taxi Service",
  "Yuva Call Taxi Hosur",
  "Yuva Cabs Hosur"
];

const jsonLd = {
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
      "priceRange": "₹150 - ₹1,500",
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
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.7409,
        "longitude": 77.8253,
      },
      "areaServed": [
        { "@type": "City", "name": "Hosur" },
        { "@type": "AdministrativeArea", "name": "SIPCOT Hosur" },
        { "@type": "AdministrativeArea", "name": "Bagalur" },
        { "@type": "AdministrativeArea", "name": "Dinnur" },
        { "@type": "AdministrativeArea", "name": "Jeeva Nagar" },
        { "@type": "AdministrativeArea", "name": "Hosur Railway Station" },
        { "@type": "AdministrativeArea", "name": "Hosur Bus Stand" },
        { "@type": "AdministrativeArea", "name": "Bathalapalli" },
        { "@type": "AdministrativeArea", "name": "Rayakottai" },
        { "@type": "AdministrativeArea", "name": "Rayakottai Housing Board" },
        { "@type": "AdministrativeArea", "name": "Denkanikottai" },
        { "@type": "AdministrativeArea", "name": "Kelamangalam" },
        { "@type": "AdministrativeArea", "name": "Krishnagiri" },
        { "@type": "AdministrativeArea", "name": "Perandapalli" },
        { "@type": "AdministrativeArea", "name": "Alasanatham" },
        { "@type": "AdministrativeArea", "name": "Berigai" },
        { "@type": "AdministrativeArea", "name": "Anthivadi" },
        { "@type": "AdministrativeArea", "name": "SBM Colony" },
        { "@type": "AdministrativeArea", "name": "Navadhi" },
        { "@type": "AdministrativeArea", "name": "Anekal" },
        { "@type": "AdministrativeArea", "name": "Poonapalli" },
        { "@type": "AdministrativeArea", "name": "Belagondapalli" },
        { "@type": "AdministrativeArea", "name": "Mathakondapalli" },
        { "@type": "AdministrativeArea", "name": "Thally" },
        { "@type": "AdministrativeArea", "name": "Kothur" },
        { "@type": "AdministrativeArea", "name": "Muneeswar Nagar" },
        { "@type": "AdministrativeArea", "name": "Mookandapalli" },
        { "@type": "AdministrativeArea", "name": "Mathigiri" }
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
      "@id": "https://www.yuvacalltaxi.com/local-taxi#service",
      "name": "Local Taxi Service in Hosur & Surrounding Areas",
      "telephone": "+919944271322",
      "url": "https://www.yuvacalltaxi.com/local-taxi",
      "description": "24/7 local taxi and cab booking across Hosur, Rayakottai, Denkanikottai, Kelamangalam, Krishnagiri, Bathalapalli, SBM Colony, Anekal & SIPCOT from ₹150. Fast 5-10 minute pickup.",
      "provider": {
        "@id": "https://www.yuvacalltaxi.com/#localbusiness"
      },
      "priceRange": "₹150 - ₹1,500",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Hosur and Krishnagiri District"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yuvacalltaxi.com/local-taxi#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum fare for local taxi service in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local taxi service in Hosur starts at ₹150 for the first 4 kilometers for Non-A/C Hatchback (₹180 for A/C). Sedan cabs (Swift Dzire/Etios) start from ₹180 Non-A/C and ₹220 A/C with clear per-km billing thereafter."
          }
        },
        {
          "@type": "Question",
          "name": "How fast is your local cab pickup in Hosur, Bathalapalli, and residential colonies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our nearest GPS-tracked driver arrives in 3 to 10 minutes across all Hosur areas. Railway Station and Bus Stand pickups average 3 to 5 minutes, while SIPCOT, Bathalapalli, Alasanatham, Anthivadi, SBM Colony, and Muneeswar Nagar average 5 to 8 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide taxi service in Rayakottai and Rayakottai Housing Board?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Yuva Call Taxi provides 24/7 call taxi service in Rayakottai and Rayakottai Housing Board with fast doorstep pickups, direct drops to Hosur city, Krishnagiri, and Kempegowda Bengaluru Airport."
          }
        },
        {
          "@type": "Question",
          "name": "Is taxi service available in Denkanikottai, Kelamangalam, Thally, and Anekal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We operate 24-hour cabs connecting Denkanikottai, Kelamangalam, Thally, Anekal, Belagondapalli, Mathakondapalli, and Berigai to Hosur and Bengaluru with transparent rates."
          }
        },
        {
          "@type": "Question",
          "name": "Is call taxi available 24 hours in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Yuva Call Taxi operates 24 hours a day, 7 days a week including night emergencies and early morning train/bus connections. Call +91 99442 71322 for instant booking."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.yuvacalltaxi.com/local-taxi#breadcrumb",
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
          "name": "Local Taxi Service in Hosur",
          "item": "https://www.yuvacalltaxi.com/local-taxi"
        }
      ]
    }
  ]
};

export default function LocalTaxiSEO() {
  return (
    <Helmet>
      <title>Local Taxi Service in Hosur | Cabs in Rayakottai, Denkanikottai, Bathalapalli - Yuva Cabs</title>
      <meta name="title" content="Local Taxi Service in Hosur | Cabs in Rayakottai, Denkanikottai, Bathalapalli - Yuva Cabs" />
      <meta
        name="description"
        content="24/7 Call taxi in Hosur, Rayakottai, Denkanikottai, Kelamangalam, Krishnagiri, Bathalapalli, SBM Colony & Anekal (+91 99442 71322). Fast 5-10 min pickup from ₹150."
      />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://www.yuvacalltaxi.com/local-taxi" />
      <link rel="alternate" hreflang="en-IN" href="https://www.yuvacalltaxi.com/local-taxi" />
      <link rel="alternate" hreflang="ta" href="https://www.yuvacalltaxi.com/local-taxi" />
      <link rel="alternate" hreflang="x-default" href="https://www.yuvacalltaxi.com/local-taxi" />

      {/* Geo tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
      <meta name="geo.position" content="12.7409;77.8253" />
      <meta name="ICBM" content="12.7409, 77.8253" />
      <meta name="contact" content="+919944271322" />

      {/* Open Graph */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content="https://www.yuvacalltaxi.com/local-taxi" />
      <meta property="og:site_name" content="Yuva Call Taxi Hosur" />
      <meta property="og:title" content="Local Taxi Service in Hosur | Cabs in Rayakottai, Denkanikottai, Bathalapalli" />
      <meta
        property="og:description"
        content="24/7 Call taxi in Hosur, Rayakottai, Denkanikottai, Kelamangalam, Krishnagiri, Bathalapalli, SBM Colony & Anekal (+91 99442 71322). Fast 5-10 min pickup from ₹150."
      />
      <meta property="og:image" content="https://www.yuvacalltaxi.com/logo.jpg" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.yuvacalltaxi.com/local-taxi" />
      <meta property="twitter:title" content="Local Taxi Service in Hosur | Cabs in Rayakottai, Denkanikottai, Bathalapalli" />
      <meta
        property="twitter:description"
        content="24/7 Call taxi in Hosur, Rayakottai, Denkanikottai, Kelamangalam, Krishnagiri, Bathalapalli, SBM Colony & Anekal (+91 99442 71322). Fast 5-10 min pickup from ₹150."
      />
      <meta property="twitter:image" content="https://www.yuvacalltaxi.com/logo.jpg" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
