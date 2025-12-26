import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Demolition() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  useEffect(() => {
    document.title = t("demolition.title");
  }, [t]);

  return (
    <div className={`${isRTL ? "rtl text-right" : "ltr text-left"} text-black overflow-hidden`}>
      {/* HERO SECTION - Enhanced with Parallax Effect */}
      <section className="relative w-full h-[90vh] mt-[100px] overflow-hidden">
        {/* Background Video with Enhanced Overlay */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/1111.png"
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            >
              {t("demolition.title")}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md"
            >
              {t("demolition.subtitle")}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* HIGH REACH DEMOLITION SECTION - Redesigned */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-blue-900 mx-auto rounded-full"></div>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#093B5D] mb-6">
              {t("demolition.highReachTitle")}
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("demolition.highReachSubtitle")}
            </p>
          </motion.div>

          {/* Content Grid with Enhanced Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t("demolition.whatIsTitle")}
              </h3>
              
              <div className="space-y-4">
                {t("demolition.whatIsList", { returnObjects: true }).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-start ${isRTL ? "space-x-reverse space-x-4" : "space-x-4"}`}

                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image with Enhanced Styling */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/new.png"
                  alt="High Reach Excavator"
                  loading="lazy"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500/10 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SAFETY DEMOLITION SECTION - Enhanced */}
      <section ref={ref1} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                  {t("demolition.safetyTitle")}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-blue-900 rounded-full"></div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                {t("demolition.safetyDesc")}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {t("demolition.safetyList", { returnObjects: true }).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${isRTL ? "space-x-reverse space-x-3" : "space-x-3"} p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors`}

                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image with Enhanced Design */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/demo1.png"
                  loading="lazy"
                  alt={t("demolition.safetyAlt")}
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-3 text-sm font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform">
                    {t("demolition.badgeSafety")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* HIGH-REACH DEMOLITION VIDEO SECTION - Enhanced */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center space-y-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              {t("demolition.toolsTitle")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("demolition.toolsDesc")}
            </p>
          </motion.div>

          {/* Video + Details */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <video
                  className="w-full h-full object-cover"
                  src="/demovid.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  loading="lazy"
                  poster="/demo1.png"
                ></video>
                
                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-6 py-3 text-sm font-bold rounded-full shadow-lg">
                    {t("demolition.badgeHighReach")}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Technical Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8 text-left"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                {t("demolition.toolsHighlightTitle")}
              </h3>
              
              <div className="space-y-6">
                {t("demolition.toolsExtra", { returnObjects: true }).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-start ${isRTL ? "space-x-reverse space-x-4" : "space-x-4"}`}

                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-6 bg-white/10 rounded-xl border border-white/20">
                <p className="text-gray-300 italic text-lg">
                  {t("demolition.toolsNote")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ATTACHMENTS SECTION - Enhanced */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {t("demolition.attachmentsTitle")}
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("demolition.attachmentsDesc")}
                </p>
                
                <div className="space-y-4">
                  {t("demolition.attachmentsList", { returnObjects: true }).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-start ${isRTL ? "space-x-reverse space-x-4" : "space-x-4"} p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors`}

                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4"
              >
                {["/neww1.png", "/new2.png", "/new3.png"].map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <img
                      src={src}
                      alt={`Attachment ${index + 1}`}
                      loading="lazy"
                      className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PIONEERING SECTION - Enhanced */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 items-center gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className="relative">
                <img
                  src="/neww2.png"
                  alt="Pioneering Equipment"
                  loading="lazy"
                  className="w-64 h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
            
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {t("demolition.pioneeringTitle")}
              </h3>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                {t("demolition.pioneeringDesc")}
              </p>
              
              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-sm">
                  {t("demolition.pioneeringBadgeFirst")}
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-sm">
                  {t("demolition.pioneeringBadge27m")}
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-sm">
                  {t("demolition.pioneeringBadgeSafe")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUPPORTING IMAGES SECTION - Enhanced */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Image + Text Blocks */}
          {[
            {
              img: "/new5.png",
              title: t("demolition.urbanTitle"),
              desc: t("demolition.urbanDesc"),
              reverse: false
            },
            {
              img: "/new6.png",
              title: t("demolition.machineryTitle"),
              desc: t("demolition.machineryDesc"),
              reverse: true
            },
            {
              img: "/new7.png",
              title: t("demolition.monitoringTitle"),
              desc: t("demolition.monitoringDesc"),
              reverse: false
            }
          ].map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                block.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${block.reverse ? "lg:order-2" : ""}`}>
                <div className="relative">
                  <img
                    src={block.img}
                    alt={block.title}
                    loading="lazy"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              
              <div className={`${block.reverse ? "lg:order-1" : ""} space-y-6`}>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {block.title}
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {block.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Final Closing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-12 pt-16"
          >
            <div className="relative">
              <img
                src="/new8.png"
                alt="Concrete Surgeons"
                loading="lazy"
                className="mx-auto w-full max-w-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t("demolition.closingText")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTROLLED DEMOLITION SECTION - Enhanced */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900">
              {t("demolition.controlledTitle")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("demolition.controlledDesc")}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-6">
              {t("demolition.controlledList", { returnObjects: true }).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start ${isRTL ? "space-x-reverse space-x-4" : "space-x-4"} p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors`}
                  >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {["/تحميل.jpg", "/تحميل ونش.jpg"].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <img
                    src={src}
                    alt={`Controlled Demo ${index + 1}`}
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


        {/* ROBOTIC DEMOLITION SECTION - Enhanced */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
              {t("demolition.roboticTitle")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t("demolition.roboticDesc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-6">
              {t("demolition.roboticList", { returnObjects: true }).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start ${isRTL ? "space-x-reverse space-x-4" : "space-x-4"} p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors`}

                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {["/robot.jpg", "/robot1.jpg"].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <img
                    src={src}
                    alt={`Brokk Robot ${index + 1}`}
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIAMOND WIRE SAWING SECTION - Enhanced */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900">
              {t("demolition.diamondTitle")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("demolition.diamondDesc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-6">
              {t("demolition.diamondList", { returnObjects: true }).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start ${isRTL ? "space-x-reverse space-x-4" : "space-x-4"} p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
                  >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/diamond wire cutting.jpg"
                alt="Diamond Wire Sawing"
                loading="lazy"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    

      {/* WHY CHOOSE CS SECTION - Enhanced */}
      <section ref={ref3} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                  {t("demolition.whyTitle")}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {t("demolition.whyList", { returnObjects: true }).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${isRTL ? "space-x-reverse space-x-4" : "space-x-4"} p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors`}
                    >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/demo3.png"
                  alt={t("demolition.whyAlt")}
                  loading="lazy"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
