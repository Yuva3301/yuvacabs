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
  "Yuva Call Taxi Hosur",
  "Yuva Cabs Hosur",
  "Mookandapalli Taxi",
  "Bathalapalli Taxi Service",
  "Mathigiri Taxi Service"
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
        { "@type": "AdministrativeArea", "name": "Hosur Bus Stand" }
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
      "name": "Local Taxi Service in Hosur",
      "telephone": "+919944271322",
      "url": "https://www.yuvacalltaxi.com/local-taxi",
      "description": "24/7 local taxi and cab service in Hosur starting from ₹150. Quick 5-10 minute pickup across Hosur Railway Station, Bus Stand, SIPCOT & all local areas.",
      "provider": {
        "@id": "https://www.yuvacalltaxi.com/#localbusiness"
      },
      "priceRange": "₹150 - ₹1,500",
      "areaServed": {
        "@type": "City",
        "name": "Hosur"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yuvacalltaxi.com/local-taxi#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the fare for local taxi service in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local taxi service in Hosur starts from ₹150 for the first 4 kilometers for Non-A/C Hatchback (₹180 for A/C), and ₹180 for Sedan (₹220 for A/C), followed by transparent per-kilometer rates."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can a local cab arrive in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our GPS-dispatched drivers typically arrive within 5 to 10 minutes across all Hosur areas including Railway Station, Bus Stand, SIPCOT, Bagalur Road, Dinnur, and Jeeva Nagar."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book a local taxi in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can instantly book a local taxi in Hosur by calling +91 99442 71322 or messaging us on WhatsApp. We are available 24 hours a day with zero surge charges."
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
      <title>Local Taxi Service in Hosur | 24/7 Local Cab Booking - Yuva Call Taxi</title>
      <meta name="title" content="Local Taxi Service in Hosur | 24/7 Local Cab Booking - Yuva Call Taxi" />
      <meta
        name="description"
        content="Need a local taxi near you in Hosur? Yuva Call Taxi (+91 99442 71322) provides 24/7 local cab booking across SIPCOT, Bagalur, Dinnur & Jeeva Nagar from ₹150. Fast 5-10 min pickup."
      />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
      <meta property="og:title" content="Local Taxi Service in Hosur | 24/7 Local Cab Booking - Yuva Call Taxi" />
      <meta
        property="og:description"
        content="Need a local taxi near you in Hosur? Yuva Call Taxi (+91 99442 71322) provides 24/7 local cab booking across SIPCOT, Bagalur, Dinnur & Jeeva Nagar from ₹150. Fast 5-10 min pickup."
      />
      <meta property="og:image" content="https://www.yuvacalltaxi.com/logo.jpg" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.yuvacalltaxi.com/local-taxi" />
      <meta property="twitter:title" content="Local Taxi Service in Hosur | 24/7 Local Cab Booking - Yuva Call Taxi" />
      <meta
        property="twitter:description"
        content="Need a local taxi near you in Hosur? Yuva Call Taxi (+91 99442 71322) provides 24/7 local cab booking across SIPCOT, Bagalur, Dinnur & Jeeva Nagar from ₹150. Fast 5-10 min pickup."
      />
      <meta property="twitter:image" content="https://www.yuvacalltaxi.com/logo.jpg" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
