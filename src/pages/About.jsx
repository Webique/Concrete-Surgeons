import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SEO from "../components/SEO";

import about1 from "/about1.jpg";
import about2 from "/about2.jpg";
import about3 from "/about3.jpg";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Concrete Surgeons",
  description:
    "Learn about Concrete Surgeons, the Middle East's leading specialist in demolition, cutting, and structural retrofitting since 2007.",
  url: "https://csmisr.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Concrete Surgeons",
    foundingDate: "2007",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
    },
  },
};

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
  });
  const { ref: reasonsRef, inView: reasonsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <SEO
        title="About Us | Concrete Surgeons - 20+ Years of Expertise"
        description="Concrete Surgeons is the region's premier specialist in safety demolition, concrete cutting, and structural retrofitting. Over 20 years of experience across Egypt and the Gulf."
        canonical="/about"
        jsonLd={aboutSchema}
      />
      <div className={`${isRTL ? "rtl" : "ltr"} bg-white text-black`}>
        {/* HERO SECTION – Clear & Prominent */}
        <section className="relative w-full h-screen bg-black text-white overflow-hidden">
          {/* Bright Background Image */}
          <img
            src="/about.png"
            loading="lazy" // ✅ lazy load
            alt="Concrete Surgeons Team at Work"
            className="absolute inset-0 w-full h-full object-cover brightness-100"
          />

          {/* Minimal Overlay (only for text readability) */}
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* Centered Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
            {/* Animated Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-5xl leading-tight drop-shadow-md"
            >
              {t("about.hero", "Concrete Surgeons — Precision in Action")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl drop-shadow"
            >
              {t(
                "about.heroSubtitle",
                "Redefining demolition, cutting, and retrofitting across the Middle East since 2007."
              )}
            </motion.p>
          </div>
        </section>

        {/* SECTION 1: WHO WE ARE */}
        <section
          ref={introRef}
          className="py-20 px-6 md:px-20 bg-white text-[#093B5D]"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center"
          >
            <img
              src={about1}
              alt="about-intro"
              loading="lazy" // ✅ lazy load
              className="w-full md:w-1/2 h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold border-b-2 pb-2 border-[#71869A]">
                {t("about.introTitle", "Who We Are")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {t("about.introText")}
              </p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: WHY CHOOSE US */}
        <section
          ref={reasonsRef}
          className="py-20 px-6 md:px-20 bg-[#F8F9FA] text-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#093B5D] border-b-2 pb-2 border-[#093B5D]">
                {t("about.whyTitle")}
              </h2>
              <div className="space-y-4">
                {[
                  t("about.reason1"),
                  t("about.reason2"),
                  t("about.reason3"),
                  t("about.reason4"),
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-start ${
                      isRTL ? "space-x-reverse space-x-4" : "space-x-4"
                    }`}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <img
              src={about2}
              alt="why-choose-us"
              loading="lazy" // ✅ lazy load
              className="w-full md:w-1/2 h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </section>

        {/* SECTION 3: OUR COMMITMENT */}
        <section
          ref={missionRef}
          className="py-20 px-6 md:px-20 bg-[#1c3b8d] text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center"
          >
            <img
              src={about3}
              alt="commitment"
              loading="lazy"
              className="w-full md:w-1/2 h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold border-b-2 pb-2 border-[#71869A]">
                {t("about.commitmentTitle")}
              </h2>
              <p className="text-lg leading-relaxed text-gray-100">
                {t("about.commitmentText")}
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
