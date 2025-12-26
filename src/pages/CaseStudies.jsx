import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SEO from "../components/SEO";

// Import images
import client8 from "../assets/client8.png";
import client1 from "../assets/client1.png";
import casestudy1 from "/casestudy1.png";
import casestudy2_1 from "/casestudy2-1.jpg";
import casestudy2_2 from "/casestudy2-2.jpg";
import casestudy2_3 from "/casestudy2-3.jpg";
import casestudy2_4 from "/casestudy.jpeg";
import images from "/images.jpeg";
import results from "/results.jpeg";

const caseStudiesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies - Concrete Surgeons Projects",
  description:
    "Discover our success stories including the pioneering high-reach demolition at GSK and one of the world's largest concrete cutting projects at Damietta Port.",
  url: "https://csmisr.com/case-studies",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "GSK Pharmaceutical High-Reach Demolition",
        description:
          "First 27m high-reach demolition in Egypt and the Gulf region",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Damietta Port Concrete Cutting",
        description:
          "One of the world's largest concrete cutting projects using diamond wire saw technology",
      },
    ],
  },
};

export default function CaseStudies() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const { ref: case1Ref, inView: case1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: case2Ref, inView: case2InView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <SEO
        title="Case Studies | Our Success Stories - Concrete Surgeons"
        description="Explore Concrete Surgeons' success stories: Pioneering 27m high-reach demolition at GSK and world-class concrete cutting at Damietta Port."
        canonical="/case-studies"
        jsonLd={caseStudiesSchema}
      />
      <div className={`${isRTL ? "rtl" : "ltr"} text-black`}>
        {/* Page Header */}
        <section className="pt-40 pb-12 px-6 sm:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                {t("caseStudies.heroTitle")}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-gray-600">
                {t("caseStudies.heroSubtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Study 1 - GSK */}
        <section className="py-16 px-6 sm:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={case1Ref}
              initial={{ opacity: 0, y: 40 }}
              animate={case1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className={`${isRTL ? "lg:order-2" : "lg:order-1"}`}>
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={client8}
                      alt="GSK Logo"
                      className={`h-16 w-auto ${isRTL ? "ml-4" : "mr-4"}`}
                    />
                    <div>
                      <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                        {t("caseStudies.case1.badge")}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        {t("caseStudies.case1.title")}
                      </h2>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t("caseStudies.case1.overviewTitle")}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t("caseStudies.case1.overview")}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t("caseStudies.case1.challengeTitle")}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t("caseStudies.case1.challenge")}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    {t("caseStudies.case1.challenges", {
                      returnObjects: true,
                    }).map((challenge, index) => (
                      <li key={index} className="leading-relaxed">
                        {challenge}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t("caseStudies.case1.solutionTitle")}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t("caseStudies.case1.solution")}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    {t("caseStudies.case1.capabilities", {
                      returnObjects: true,
                    }).map((capability, index) => (
                      <li key={index} className="leading-relaxed">
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t("caseStudies.case1.resultsTitle")}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {t("caseStudies.case1.results", {
                      returnObjects: true,
                    }).map((result, index) => (
                      <li key={index} className="leading-relaxed">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Images */}
              <div className={`${isRTL ? "lg:order-1" : "lg:order-2"}`}>
                <div className="space-y-6">
                  <div className="relative">
                    <img
                      src={casestudy1}
                      alt="GSK High-Reach Demolition"
                      className="w-full h-80 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                  <div className="relative">
                    <img
                      src={casestudy2_4}
                      alt="GSK Project Additional View"
                      className="w-full h-80 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                  <div className="relative">
                    <img
                      src={results}
                      alt="GSK Project Results and Statistics"
                      className="w-full h-80 object-contain sm:object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study 2 - Damietta Port */}
        <section className="py-16 px-6 sm:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              ref={case2Ref}
              initial={{ opacity: 0, y: 40 }}
              animate={case2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Content - Always First on Mobile */}
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <div className="flex flex-col lg:flex-row items-center mb-6">
                    <div className="flex items-center mb-4 lg:mb-0 lg:mr-6">
                      <img
                        src={images}
                        alt="Damietta Port Logo"
                        className="h-16 w-auto mr-4"
                      />
                      <img
                        src={client1}
                        alt="PETROJET Logo"
                        className="h-16 w-auto"
                      />
                    </div>
                    <div className="lg:flex-1">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                        {t("caseStudies.case2.badge")}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        {t("caseStudies.case2.title")}
                      </h2>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t("caseStudies.case2.overviewTitle")}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t("caseStudies.case2.overview")}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t("caseStudies.case2.technologyTitle")}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t("caseStudies.case2.technology")}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t("caseStudies.case2.scopeTitle")}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                    {t("caseStudies.case2.scope", { returnObjects: true }).map(
                      (item, index) => (
                        <li key={index} className="leading-relaxed">
                          {item}
                        </li>
                      )
                    )}
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {t("caseStudies.case2.achievementTitle")}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("caseStudies.case2.achievement")}
                  </p>
                </div>
              </div>

              {/* Image Gallery & Video - Second on Mobile */}
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="space-y-4">
                    <img
                      src={casestudy2_1}
                      alt="Damietta Port Project"
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                    <img
                      src={casestudy2_2}
                      alt="Damietta Port Project"
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img
                      src={casestudy2_3}
                      alt="Damietta Port Project"
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Video Section */}
                <div>
                  <div className="relative">
                    <video
                      className="w-full h-48 object-cover rounded-lg shadow-2xl"
                      controls
                      poster={casestudy2_1}
                    >
                      <source src="/D.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    {t("caseStudies.case2.videoCaption")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
