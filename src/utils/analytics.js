// Google Analytics 4 utility for SPA tracking

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

// Initialize GA4
export function initGA4() {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) {
    console.warn("GA4: Measurement ID not configured");
    return;
  }

  // Load gtag script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll track manually for SPA
  });
}

// Track page views (call on route changes)
export function trackPageView(path, title) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

// Track custom events
export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, params);
}

// Track form submissions
export function trackFormSubmission(formName) {
  trackEvent("form_submission", {
    form_name: formName,
  });
}

// Track CTA clicks
export function trackCTAClick(ctaName, destination) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    destination: destination,
  });
}
