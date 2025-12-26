import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Demolition from "./pages/Demolition";
import ConcreteCutting from "./pages/ConcreteCutting";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";

import { initGA4, trackPageView } from "./utils/analytics";

// Analytics wrapper component to track page views
function AnalyticsWrapper({ children }) {
  const location = useLocation();

  // Initialize GA4 on mount
  useEffect(() => {
    initGA4();
  }, []);

  // Track page views on route change
  useEffect(() => {
    // Small delay to ensure document.title is updated by Helmet
    const timer = setTimeout(() => {
      trackPageView(location.pathname, document.title);
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return children;
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <AnalyticsWrapper>
        <ScrollToTop />
        <div className="font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/demolition" element={<Demolition />} />
            <Route path="/services/cutting" element={<ConcreteCutting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            {/* 404 - Catch all unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
