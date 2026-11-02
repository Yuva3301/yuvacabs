import { Helmet } from 'react-helmet-async';

const keywords = [
  "Red Taxi Hosur",
  "Best Taxi Hosur",
  "Cab Service Hosur",
  "Call Taxi",
  "Cabs Near Me",
  "Local Taxi in Hosur",
  "Call Taxi Near Me",
  "Call Taxi Near Me Hosur",
  "Hosur Call Taxi",
  "Local Cab Hosur",
  "Taxi Near Me Hosur",
  "Call Taxi Hosur",
  "24/7 Local Taxi Hosur",
  "Taxi Near Hosur Railway Station",
  "Call Taxi Near Hosur Bus Stand",
  "SIPCOT Hosur Taxi",
  "Call Taxi in SIPCOT Hosur",
  "Taxi in Bagalur",
  "Bagalur Road Taxi",
  "Taxi in Bathalapalli Hosur",
  "Taxi in Mookandapalli",
  "Call Taxi Mookandapalli",
  "Taxi in Mathigiri",
  "Call Taxi Mathigiri",
  "Taxi in Dinnur Hosur",
  "Taxi in Sanasandiram",
  "Taxi in Jeeva Nagar Hosur",
  "Taxi in Attibele",
  "Taxi in Shoolagiri",
  "Call Taxi Shoolagiri",
  "Local Taxi Service Hosur",
  "Hosur Local Cab Service",
  "Call Taxi Zuzuvadi Hosur",
  "Taxi Service Near Me Hosur",
  "Taxi Stand Hosur Railway Station",
  "Hosur Railway Station Taxi",
  "Hosur Bus Stand Taxi",
  "Cheap Local Taxi Hosur",
  "Best Local Cab Hosur",
  "Yuva Call Taxi Local Hosur",
  "Hosur Taxi 9944271322",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TaxiService", "LocalBusiness"],
      "@id": "https://yuvacalltaxi.com/local-taxi#service",
      "name": "Local Taxi in Hosur | Best Taxi Hosur | Red Taxi Hosur | Cab Service Hosur | Cabs Near Me",
      "telephone": "+919944271322",
      "url": "https://yuvacalltaxi.com/local-taxi",
      "logo": "https://yuvacalltaxi.com/logo.jpg",
      "image": "https://yuvacalltaxi.com/logo.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Railway Station Road, Hamman Nagar",
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
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 12.7409,
          "longitude": 77.8253,
        },
        "geoRadius": "25000",
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "₹150 - ₹500",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "450",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919944271322",
        "contactType": "customer service",
        "availableLanguage": ["Tamil", "Telugu", "Kannada", "English"],
        "contactOption": "TollFree",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59",
        },
      },
      "areaServed": [
        { "@type": "Place", "name": "Hosur Railway Station" },
        { "@type": "Place", "name": "Hosur Bus Stand" },
        { "@type": "Place", "name": "Hosur New Bus Stand" },
        { "@type": "Place", "name": "SIPCOT Phase 1" },
        { "@type": "Place", "name": "SIPCOT Phase 2" },
        { "@type": "Place", "name": "Bagalur Road" },
        { "@type": "Place", "name": "Bathalapalli" },
        { "@type": "Place", "name": "Mookandapalli" },
        { "@type": "Place", "name": "Zuzuvadi" },
        { "@type": "Place", "name": "Mathigiri" },
        { "@type": "Place", "name": "Dinnur" },
        { "@type": "Place", "name": "Sanasandiram" },
        { "@type": "Place", "name": "Jeeva Nagar" },
        { "@type": "Place", "name": "Attibele" },
        { "@type": "Place", "name": "Shoolagiri" },
        { "@type": "Place", "name": "Denkanikottai Road" },
        { "@type": "Place", "name": "Kelamangalam Road" },
        { "@type": "Place", "name": "Berigai" },
        { "@type": "Place", "name": "TANSIDCO" },
        { "@type": "Place", "name": "Hamman Nagar" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hosur Local Taxi Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Local City Cab",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "150",
              "priceCurrency": "INR",
              "minPrice": "150",
              "description": "Minimum fare for local city cab in Hosur",
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Local City Cab in Hosur",
              "description": "Affordable local city cab service covering all areas within Hosur city limits. Minimum fare ₹150 for short-distance trips.",
            },
          },
          {
            "@type": "Offer",
            "name": "SIPCOT Shift Cab",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "150",
              "priceCurrency": "INR",
              "minPrice": "150",
              "description": "Minimum fare for SIPCOT shift cab in Hosur",
            },
            "itemOffered": {
              "@type": "Service",
              "name": "SIPCOT Shift Cab Hosur",
              "description": "Reliable shift cab service to and from SIPCOT Phase 1 & Phase 2 industrial zones. On-time pick-up for all shift timings, starting at ₹150.",
            },
          },
          {
            "@type": "Offer",
            "name": "Station & Bus Stand Pickup",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "150",
              "priceCurrency": "INR",
              "minPrice": "150",
              "description": "Minimum fare for station and bus stand pickup in Hosur",
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Hosur Railway Station & Bus Stand Taxi Pickup",
              "description": "Prompt taxi pickup from Hosur Railway Station and Hosur Bus Stand (old & new). Meet-and-greet service available, starting at ₹150.",
            },
          },
          {
            "@type": "Offer",
            "name": "Residential Area Pickup",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "150",
              "priceCurrency": "INR",
              "minPrice": "150",
              "description": "Minimum fare for residential area pickup in Hosur",
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Area Taxi Pickup Hosur",
              "description": "Doorstep taxi pickup from all residential areas including Hamman Nagar, Jeeva Nagar, Mathigiri, Dinnur, Sanasandiram and more. Starts at ₹150.",
            },
          },
          {
            "@type": "Offer",
            "name": "Industrial Zone Corporate Cab",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "150",
              "priceCurrency": "INR",
              "minPrice": "150",
              "description": "Minimum fare for industrial zone corporate cab in Hosur",
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Industrial Zone Corporate Cab Hosur",
              "description": "Dedicated corporate cab service for employees at SIPCOT, TANSIDCO, Bagalur Road and Bathalapalli industrial zones. Professional, air-conditioned vehicles starting at ₹150.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the starting fare for a local taxi in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The starting fare for a local taxi in Hosur with Yuva Call Taxi is ₹150. This covers short-distance trips within the city. Call us at +91 99442 71322 for exact fare details based on your pickup and drop location.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I book a call taxi near me in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply call Yuva Call Taxi at +91 99442 71322 to book a call taxi near you in Hosur. We operate 24/7 and typically arrive within 5–10 minutes of your booking across all areas in Hosur.",
          },
        },
        {
          "@type": "Question",
          "name": "Is there a taxi near Hosur Railway Station available at any time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Yuva Call Taxi provides 24/7 taxi service near Hosur Railway Station. Whether it's an early morning train or a late-night arrival, our cabs are available round-the-clock. Call +91 99442 71322 for immediate pickup.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide call taxi service in SIPCOT Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Yuva Call Taxi provides dedicated call taxi and shift cab service in SIPCOT Phase 1 and Phase 2, Hosur. We cater to all shift timings for corporate employees. Reach us at +91 99442 71322.",
          },
        },
        {
          "@type": "Question",
          "name": "How fast is the local taxi pickup time in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yuva Call Taxi typically arrives within 5 to 10 minutes of your booking for most locations within Hosur. Our fleet of local cabs ensures fast and reliable pickup across all 36+ areas in and around Hosur.",
          },
        },
        {
          "@type": "Question",
          "name": "In what languages can I communicate with the Hosur call taxi driver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Hosur call taxi drivers and support staff are fluent in Tamil, Telugu, Kannada, and English. We serve both local residents and out-of-station travellers with ease.",
          },
        },
        {
          "@type": "Question",
          "name": "Is there a taxi available near Hosur Bus Stand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Yuva Call Taxi provides 24/7 taxi service near Hosur Bus Stand (both old and new bus stand). Just call +91 99442 71322 and a cab will be with you in minutes.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide taxi service to Mookandapalli from Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Yuva Call Taxi covers Mookandapalli as one of its key service areas. We provide reliable local taxi and call taxi service between Hosur and Mookandapalli at affordable rates starting at ₹150.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I get a local taxi on Bagalur Road in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Yuva Call Taxi operates along Bagalur Road and serves all localities on this route including Bathalapalli and surrounding industrial areas. Call +91 99442 71322 for an instant cab on Bagalur Road.",
          },
        },
        {
          "@type": "Question",
          "name": "Is local taxi service available at night or midnight in Hosur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Yuva Call Taxi offers 24/7 local taxi service in Hosur, including midnight and early morning trips. Our drivers are available all night to ensure your safe and comfortable travel. Call +91 99442 71322 anytime.",
          },
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://yuvacalltaxi.com/local-taxi#webpage",
      "url": "https://yuvacalltaxi.com/local-taxi",
      "name": "Local Taxi in Hosur | Call Taxi Near Me | 24/7 Cab Service - Yuva Cabs",
      "description": "Yuva Call Taxi Hosur (+91 99442 71322) — Best Local Taxi Near Me. Instant 5-10 min pickup across Hosur Railway Station, Bus Stand, SIPCOT, Bagalur & all 36 areas. Local cab from ₹150. 24/7 on-demand call taxi in Hosur.",
      "breadcrumb": {
        "@id": "https://yuvacalltaxi.com/local-taxi#breadcrumb",
      },
      "publisher": {
        "@id": "https://yuvacalltaxi.com/#localbusiness",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://yuvacalltaxi.com/local-taxi#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://yuvacalltaxi.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Local Taxi in Hosur",
          "item": "https://yuvacalltaxi.com/local-taxi",
        },
      ],
    },
  ],
};

export default function LocalTaxiSEO() {
  return (
    <Helmet>
      {/* ── Primary Meta ── */}
      <title>Local Taxi Service in Hosur | Yuva Call Taxi</title>
      <meta
        name="description"
        content="Yuva Call Taxi Hosur (+91 99442 71322) — Best Taxi Hosur | Red Taxi Hosur alternative | Cab Service Hosur | Cabs Near Me. Instant 5-10 min pickup across Hosur Railway Station, Bus Stand, SIPCOT &amp; Bagalur. Local cab from ₹150."
      />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Yuva Call Taxi" />

      {/* ── Canonical ── */}
      <link rel="canonical" href="https://yuvacalltaxi.com/local-taxi" />

      {/* ── hreflang ── */}
      <link rel="alternate" hrefLang="en-IN" href="https://yuvacalltaxi.com/local-taxi" />
      <link rel="alternate" hrefLang="ta" href="https://yuvacalltaxi.com/local-taxi" />
      <link rel="alternate" hrefLang="x-default" href="https://yuvacalltaxi.com/local-taxi" />

      {/* ── Geo Meta Tags ── */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Hosur, Tamil Nadu, India" />
      <meta name="geo.position" content="12.7409;77.8253" />
      <meta name="ICBM" content="12.7409, 77.8253" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Yuva Call Taxi" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="ta_IN" />
      <meta
        property="og:title"
        content="Local Taxi Service in Hosur | Yuva Call Taxi"
      />
      <meta
        property="og:description"
        content="Yuva Call Taxi Hosur (+91 99442 71322) — Best Taxi Hosur | Red Taxi Hosur alternative | Cab Service Hosur | Cabs Near Me. Instant 5-10 min pickup across Hosur Railway Station, Bus Stand, SIPCOT &amp; Bagalur. Local cab from ₹150."
      />
      <meta property="og:url" content="https://yuvacalltaxi.com/local-taxi" />
      <meta
        property="og:image"
        content="https://yuvacalltaxi.com/logo.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Yuva Call Taxi Hosur Logo - Best Taxi Hosur | Red Taxi Hosur | Cab Service Hosur | Cabs Near Me"
      />
      <meta property="og:phone_number" content="+919944271322" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@YuvaCallTaxi" />
      <meta name="twitter:creator" content="@YuvaCallTaxi" />
      <meta
        name="twitter:title"
        content="Local Taxi Service in Hosur | Yuva Call Taxi"
      />
      <meta
        name="twitter:description"
        content="Yuva Call Taxi Hosur (+91 99442 71322) — Best Taxi Hosur | Red Taxi Hosur alternative | Cab Service Hosur | Cabs Near Me. Instant 5-10 min pickup across Hosur Railway Station, Bus Stand, SIPCOT &amp; Bagalur. Local cab from ₹150."
      />
      <meta
        name="twitter:image"
        content="https://yuvacalltaxi.com/logo.jpg"
      />
      <meta
        name="twitter:image:alt"
        content="Yuva Call Taxi Hosur Logo - Best Taxi Hosur | Red Taxi Hosur | Cab Service Hosur | Cabs Near Me"
      />
    </Helmet>
  );
}
