import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const BASE_URL = "https://csmisr.com";

export default function SEO({
  title,
  description,
  canonical,
  ogImage = "/og-image.png",
  ogType = "website",
  noindex = false,
  jsonLd = null,
}) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const fullOgImage = `${BASE_URL}${ogImage}`;

  // Alternate language URL
  const altLang = currentLang === "ar" ? "en" : "ar";

  // Fallback: Set document title directly (ensures it works with React 19)
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  // Also update meta description as fallback
  useEffect(() => {
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", description);
      }
    }
  }, [description]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={currentLang} dir={currentLang === "ar" ? "rtl" : "ltr"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical */}
      <link rel="canonical" href={fullCanonical} />

      {/* hreflang for multilingual */}
      <link rel="alternate" hreflang={currentLang} href={fullCanonical} />
      <link rel="alternate" hreflang={altLang} href={fullCanonical} />
      <link rel="alternate" hreflang="x-default" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:locale"
        content={currentLang === "ar" ? "ar_EG" : "en_US"}
      />
      <meta property="og:site_name" content="Concrete Surgeons" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Helmet>
  );
}
