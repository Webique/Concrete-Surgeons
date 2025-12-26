import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SEO from "../components/SEO";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Concrete Surgeons",
  image: "https://csmisr.com/logo.jpg",
  description:
    "The Middle East's leading specialist in safety demolition, concrete cutting, and structural retrofitting.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "70 Joseph Tito Street, New Nozha",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.1254167,
    longitude: 31.3768889,
  },
  telephone: "+20-1028567000",
  email: "contact@csmisr.com",
  openingHours: "Su-Th 09:00-17:00",
  priceRange: "$$",
  url: "https://csmisr.com/contact",
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Concrete Surgeons",
  description:
    "Contact Concrete Surgeons for demolition, cutting, and structural retrofitting services in Egypt and the Gulf.",
  url: "https://csmisr.com/contact",
};

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <>
      <SEO
        title="Contact Us | Concrete Surgeons - Get a Free Quote"
        description="Contact Concrete Surgeons for demolition, cutting, and structural retrofitting services. Located in Cairo, Egypt. Phone: +20 1028567000. Email: contact@csmisr.com"
        canonical="/contact"
        jsonLd={[localBusinessSchema, contactPageSchema]}
      />
      <div
        className={`${isRTL ? "rtl text-right" : "ltr text-left"} text-black`}
      >
        {/* HERO */}
        <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          {/* Background Image */}
          <img
            src="/logo2.png" // Replace with your hero image if needed
            alt="Contact Background"
            loading="lazy" // ✅ lazy load
            className="absolute inset-0 w-full h-full object-cover brightness-90"
          />

          {/* Foggy Overlay */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

          {/* Dark Gradient for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
            >
              {t("contactPage.title", "Get in Touch")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl drop-shadow-md"
            >
              {t(
                "contactPage.subtitle",
                "We’re here to answer your questions and discuss your next project."
              )}
            </motion.p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="py-16 px-6 md:px-20 bg-[#F8F9FA]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FaPhoneAlt className="text-3xl text-[#093B5D]" />,
                title: t("contactPage.phone", "Phone"),
                value: "+20 1028567000\n+20 1062318000\n+20 1028588003",
              },
              {
                icon: <FaEnvelope className="text-3xl text-[#093B5D]" />,
                title: t("contactPage.email", "Email"),
                value: "contact@csmisr.com",
              },
              {
                icon: <FaMapMarkerAlt className="text-3xl text-[#093B5D]" />,
                title: t("contactPage.address"),
                value: t("contactPage.addressValue"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#093B5D]">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-2 whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CONTACT FORM */}
        <section className="py-20 px-6 md:px-20 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-[#F8F9FA] p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[#093B5D] mb-6 text-center">
              {t("contactPage.formTitle", "Send Us a Message")}
            </h2>
            <form
              action="https://formspree.io/f/mzzvroep" // ✅ Replace with your Formspree endpoint
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 mb-2">
                  {t("contactPage.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#093B5D] transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  {t("contactPage.emailInput")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#093B5D] transition"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  {t("contactPage.message")}
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#093B5D] transition"
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1c3b8d] hover:bg-[#062a42] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
              >
                {t("contactPage.submit")}
              </button>
            </form>
          </motion.div>
        </section>

        {/* GOOGLE MAP */}
        <section className="py-20 px-6 md:px-20 bg-[#F8F9FA]">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#093B5D] text-center">
              {t("contactPage.mapTitle", "Our Location")}
            </h2>
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Concrete Surgeons Map"
                src="https://www.google.com/maps?q=30.1254167,31.3768889&z=15&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
