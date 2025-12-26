import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SEO from "../components/SEO";

const retrofitServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Structural Retrofitting & Reinforcement",
  description:
    "Advanced structural strengthening techniques including CFRP, steel reinforcement, concrete jacketing, shotcrete, crack repair, and rebar anchoring.",
  provider: {
    "@type": "Organization",
    name: "Concrete Surgeons",
    url: "https://csmisr.com",
  },
  serviceType: [
    "CFRP Strengthening",
    "Steel Reinforcement",
    "Concrete Jacketing",
    "Shotcrete Application",
    "Crack Repair",
    "Rebar Anchoring",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://csmisr.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://csmisr.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Structural Retrofitting",
      item: "https://csmisr.com/services/cutting",
    },
  ],
};

export default function StructuralRetrofitting() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });

  const retrofitSections = t("retrofit.services", { returnObjects: true });

  return (
    <>
      <SEO
        title="Structural Retrofitting & Reinforcement Services - Concrete Surgeons"
        description="Advanced structural retrofitting including CFRP strengthening, steel reinforcement, concrete jacketing, shotcrete, crack repair, and rebar anchoring in Egypt."
        canonical="/services/cutting"
        jsonLd={[retrofitServiceSchema, breadcrumbSchema]}
      />
      <div
        className={`${isRTL ? "rtl text-right" : "ltr text-left"} text-black`}
      >
        {/* HERO */}
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
          <img
            src="/diamond wire cutting.jpg"
            alt="Structural Retrofitting Hero"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight drop-shadow-lg"
            >
              {t("retrofit.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl drop-shadow-md"
            >
              {t("retrofit.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* RETROFIT SECTIONS */}
        <section ref={ref1} className="py-20 px-6 md:px-20 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto space-y-12"
          >
            <h2 className="text-3xl font-bold text-[#093B5D] border-b-2 pb-2 border-[#093B5D]">
              {t("retrofit.servicesTitle")}
            </h2>

            {retrofitSections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <img
                  src={section.img}
                  alt={section.title}
                  className="rounded-xl shadow-md object-cover w-full h-64 md:h-72 hover:scale-105 transition-transform duration-500"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#093B5D]">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.desc
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, index) => {
                        // Remove bullet points and clean the text
                        const cleanText = line.replace(/^•\s*/, "").trim();
                        if (cleanText) {
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className={`flex items-start ${
                                isRTL
                                  ? "space-x-reverse space-x-4"
                                  : "space-x-4"
                              }`}
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                              <p className="text-lg text-gray-700 leading-relaxed">
                                {cleanText}
                              </p>
                            </motion.div>
                          );
                        }
                        return null;
                      })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </>
  );
}
