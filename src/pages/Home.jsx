// Home.jsx
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

import home1 from "/home1.jpg";
import home2 from "/home2.jpg";
import home3 from "/home3.jpg";
import home4 from "/home4.jpg";
import home5 from "/home5.jpg";
import home6 from "/home6.jpg";
import home7 from "/home7.jpg";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png"; // Main client logo
import client8 from "../assets/client8.png"; // Additional logo for marquee

const logos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
];

const images = [home1, home2, home3, home4, home5, home6, home7];

// Structured Data Schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Concrete Surgeons",
  alternateName: "CS",
  url: "https://csmisr.com",
  logo: "https://csmisr.com/logo.jpg",
  description:
    "The Middle East's leading specialist in safety demolition, concrete cutting, and structural retrofitting.",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "70 Joseph Tito Street, New Nozha",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+20-1028567000",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic"],
  },
  sameAs: [],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Concrete Surgeons | Demolition, Cutting, Retrofitting",
  description:
    "Since 2007, delivering expert concrete solutions across Egypt and the Gulf.",
  url: "https://csmisr.com/",
  isPartOf: {
    "@type": "WebSite",
    name: "Concrete Surgeons",
    url: "https://csmisr.com",
  },
};

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <SEO
        title="Concrete Surgeons | Demolition, Cutting & Structural Retrofitting in Egypt"
        description="Since 2007, Concrete Surgeons delivers expert safety demolition, concrete cutting, and structural retrofitting across Egypt and the Gulf. OSHA-certified teams."
        canonical="/"
        jsonLd={[organizationSchema, webPageSchema]}
      />
      <div className={`${isRTL ? "rtl" : "ltr"} text-black`}>
        {/* HERO SECTION – Premium Cinematic with Word Animation */}
        <section className="relative w-full h-screen overflow-hidden text-white">
          {/* Background Image (swapped from Demolition) */}
          <div
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              backgroundImage: `url('/demohero.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Centered Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 sm:px-12 text-center">
            {/* Headline with Word-by-Word Animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="flex flex-wrap justify-center gap-x-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl text-white text-center"
            >
              {t("home.heroTitle")
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 40, rotate: -5 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 12,
                          duration: 0.8,
                        },
                      },
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl"
            >
              {t("home.heroSubtitle")}
            </motion.p>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section ref={aboutRef} className="py-24 px-6 text-white bg-[#1c3b8d]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="max-w-5xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold border-b-2 pb-2 border-[#71869A]">
              {t("home.aboutTitle")}
            </h2>
            <p className="text-lg leading-relaxed text-[#DFD9D7]">
              {t("home.aboutDescription")}
            </p>
          </motion.div>
        </section>

        {/* CLIENT LOGOS MARQUEE */}
        <section className="bg-white py-12">
          <div className="marquee-container">
            <div className="marquee-content gap-12">
              {/* First set of logos */}
              {logos.map((src, idx) => (
                <img
                  key={`first-${idx}`}
                  src={src}
                  alt={`client-${idx}`}
                  width="80"
                  height="64"
                  className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((src, idx) => (
                <img
                  key={`second-${idx}`}
                  src={src}
                  alt={`client-${idx}`}
                  width="80"
                  height="64"
                  className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>
        {/* CORE SERVICES – Premium Overlapping Style */}
        {/* CORE SERVICES – Premium Overlapping Style */}
        <section
          ref={servicesRef}
          className="w-full bg-[#F8F9FA] overflow-hidden"
        >
          <div className="flex flex-col space-y-24 px-4 md:px-16 py-20">
            {/* Animated Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#093B5D] relative inline-block">
                {t("home.servicesTitle")}
                <span className="block h-1 w-24 bg-[#093B5D] mx-auto mt-4 rounded-full"></span>
              </h2>
              <p className="text-[#093B5D] mt-6 text-base md:text-lg font-light max-w-3xl mx-auto">
                {t("home.servicesSubtitle")}
              </p>
            </motion.div>

            {/* DEMOLITION */}
            <Link to="/services/demolition">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-[45vh] md:h-[55vh] rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={images[1]}
                  alt="Demolition"
                  loading="lazy" // ✅ lazy load
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col justify-center px-6 md:px-16 text-white">
                  <h3 className="text-2xl md:text-4xl font-extrabold mb-2 drop-shadow-lg">
                    {t("home.services.demolition.title")}
                  </h3>
                  <p className="text-sm md:text-lg font-light max-w-3xl drop-shadow-md">
                    {t("home.services.demolition.description")}
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* STRUCTURAL RETROFITTING */}
            <Link to="/services/cutting">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full h-[45vh] md:h-[55vh] rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img
                  src="/structural retrofitting.jpg"
                  alt="Structural Retrofitting"
                  loading="lazy" // ✅ lazy load
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col justify-center px-6 md:px-16 text-white">
                  <h3 className="text-2xl md:text-4xl font-extrabold mb-2 drop-shadow-lg">
                    {t("home.services.structuralRetrofitting.title")}
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>

        {/* QUALIFICATIONS & CERTIFICATIONS SECTION */}
        <section className="w-full bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#093B5D] mb-6">
                {t("home.qualifications.title")}
              </h2>
              <p className="text-[#093B5D] text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                {t("home.qualifications.subtitle")}
              </p>
            </motion.div>

            {/* PDF Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* PDF Icon and Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#093B5D] rounded-2xl mb-6">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#093B5D] mb-4">
                    {t("home.qualifications.pdfTitle")}
                  </h3>

                  <p className="text-[#093B5D] text-lg leading-relaxed mb-8 max-w-2xl">
                    {t("home.qualifications.pdfDescription")}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="/Prequalification+Remarkable Projects.pdf"
                      download
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#093B5D] text-white font-semibold rounded-xl hover:bg-[#072A44] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      {t("home.qualifications.downloadButton")}
                    </a>

                    <a
                      href="/Prequalification+Remarkable Projects.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#093B5D] text-[#093B5D] font-semibold rounded-xl hover:bg-[#093B5D] hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {t("home.qualifications.viewButton")}
                    </a>
                  </div>
                </div>

                {/* PDF Preview Image */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <div className="relative group">
                    <div className="w-64 h-80 bg-white rounded-2xl shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                        <div className="text-center p-6">
                          <svg
                            className="w-16 h-16 mx-auto text-[#093B5D] mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <p className="text-[#093B5D] font-semibold text-sm">
                            {t("home.qualifications.pdfTitle")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">PDF</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

function ImageSlider() {
  return (
    <div className="w-full h-full relative">
      <div className="absolute w-full h-full animate-fadeSlider">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slider-${index}`}
            className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-0 animation-delay"
            loading="lazy" // ✅ lazy load
            style={{ animationDelay: `${index * 6}s` }}
          />
        ))}
      </div>
    </div>
  );
}
