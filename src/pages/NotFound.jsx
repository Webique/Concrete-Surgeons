import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <>
      <SEO
        title="404 - Page Not Found | Concrete Surgeons"
        description="The page you're looking for doesn't exist. Return to Concrete Surgeons homepage for demolition, cutting, and structural retrofitting services."
        canonical="/404"
        noindex={true}
      />
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-6 text-center ${
          isRTL ? "rtl" : "ltr"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl sm:text-9xl font-black text-[#093B5D] mb-4"
          >
            404
          </motion.h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            {isRTL ? "الصفحة غير موجودة" : "Page Not Found"}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {isRTL
              ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
              : "The page you're looking for doesn't exist or has been moved."}
          </p>

          {/* CTA Button */}
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#093B5D] text-white font-semibold rounded-xl hover:bg-[#072A44] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {isRTL ? "العودة للرئيسية" : "Back to Home"}
          </Link>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              {isRTL ? "أو تصفح خدماتنا:" : "Or explore our services:"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services/demolition"
                className="text-[#093B5D] hover:underline font-medium"
              >
                {isRTL ? "خدمات الهدم" : "Demolition"}
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/services/cutting"
                className="text-[#093B5D] hover:underline font-medium"
              >
                {isRTL ? "التقوية الإنشائية" : "Retrofitting"}
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                to="/contact"
                className="text-[#093B5D] hover:underline font-medium"
              >
                {isRTL ? "تواصل معنا" : "Contact"}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
