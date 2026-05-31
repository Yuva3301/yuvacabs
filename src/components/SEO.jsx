import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://yuvacabs.in/#localbusiness",
        "name": "YUVA CABS Hosur",
        "image": "https://yuvacabs.in/og-image.jpg",
        "description": "Book premium and affordable taxi services in Hosur. Safe, professional drivers, airport transfers, local and outstation cab booking available 24/7.",
        "telephone": "+91 82487 10285",
        "url": "https://yuvacabs.in",
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
        "priceRange": "₹15 - ₹24 per km"
      },
      {
        "@type": "TaxiService",
        "@id": "https://yuvacabs.in/#taxiservice",
        "provider": {
          "@id": "https://yuvacabs.in/#localbusiness"
        },
        "name": "YUVA Premium Taxi Booking Hosur",
        "description": "24/7 professional cab and outstation taxi service in Hosur, Tamil Nadu. Fast pickup, transparent rates, and luxury fleet.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Hosur"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Bengaluru Airport"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Krishnagiri"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Electronic City"
          }
          ],
        "providerMobility": "dynamic"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>YUVA CABS | Best Taxi Service in Hosur | Affordable Cab Booking 24/7</title>
      <meta name="title" content="YUVA CABS | Best Taxi Service in Hosur | Affordable Cab Booking 24/7" />
      <meta name="description" content="Book affordable taxi services in Hosur with YUVA CABS. Fast pickup, airport transfer, local and outstation cab booking available 24/7. Transparent rates from ₹15/km." />
      <meta name="keywords" content="Taxi in Hosur, Cab service Hosur, Hosur airport taxi, Taxi booking Hosur, Best cab in Hosur, Outstation taxi Hosur, YUVA CABS, Yuva Cabs" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://yuvacabs.in" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yuvacabs.in" />
      <meta property="og:title" content="YUVA CABS | Best Taxi Service in Hosur | Affordable Cab Booking 24/7" />
      <meta property="og:description" content="Book affordable taxi services in Hosur with YUVA CABS. Fast pickup, airport transfer, local and outstation cab booking available 24/7." />
      <meta property="og:image" content="https://yuvacabs.in/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://yuvacabs.in" />
      <meta property="twitter:title" content="YUVA CABS | Best Taxi Service in Hosur | Affordable Cab Booking 24/7" />
      <meta property="twitter:description" content="Book affordable taxi services in Hosur with YUVA CABS. Fast pickup, airport transfer, local and outstation cab booking available 24/7." />
      <meta property="twitter:image" content="https://yuvacabs.in/og-image.jpg" />

      {/* JSON-LD Schema Structuring */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
