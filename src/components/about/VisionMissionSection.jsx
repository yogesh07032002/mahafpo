import React, { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";

const VisionMissionSection = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    mr: {
      badge: "ध्येय आणि उद्दिष्टे",
      heading: "शेतकऱ्यांचा विकास, आमचा संकल्प",
      intro:
        "महाएफपीओ फेडरेशन राज्यातील शेतकरी उत्पादक कंपन्यांना व्यावसायिकदृष्ट्या स्वतंत्र, सक्षम आणि बाजारपेठेत स्पर्धात्मक बनवण्यासाठी वचनबद्ध आहे.",
      visionTitle: "आमचे ध्येय (Vision)",
      visionDesc:
        "एक भक्कम, शाश्वत आणि शेतकरी-केंद्रित परिसंस्था निर्माण करणे; जिथे शेतकरी उत्पादक संस्था व्यावसायिकदृष्ट्या यशस्वी उद्योग बनतील.",
      missionTitle: "आमचे उद्दिष्ट (Mission)",
      missionDesc:
        "थेट बाजारपेठ, भांडवल, क्षमता बांधणी आणि व्यावसायिक भागीदारीद्वारे FPOs चे सर्वांगीण सक्षमीकरण करणे.",
      btnText: "अधिक जाणून घ्या",
    },
    en: {
      badge: "Vision & Mission",
      heading: "Empowering Farmers, Driving Growth",
      intro:
        "MAHAFPO Federation is dedicated to transforming grassroots farmer organizations into commercially viable and competitive agribusiness enterprises.",
      visionTitle: "Our Vision",
      visionDesc:
        "To build a sustainable, farmer-centric ecosystem where FPOs thrive as commercially successful enterprises.",
      missionTitle: "Our Mission",
      missionDesc:
        "To strengthen FPOs through direct market access, working capital, training, and strategic partnerships.",
      btnText: "Learn More",
    },
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full bg-white pt-6 sm:pt-8 pb-14 sm:pb-18 lg:pb-20 font-sans text-gray-800 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* डावी बाजू: थेट ऑटोप्ले होणारा शार्प व्हिडिओ (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative w-full h-[400px] sm:h-[480px] lg:h-[530px] overflow-hidden rounded-none shadow-2xl bg-black group"
          >
            {/* ऑटोप्ले, लूप, म्यूट शेती/हार्वेस्ट व्हिडिओ */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsHCKRNQCC6n39dEevzVofG1ma0gae_UuzQwSrUPoY-YI659fCKynsCWx&s=10"
              alt="Security Services"
              className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
            />

            {/* डार्क ओव्हरले व ग्लास स्वीप */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

            {/* शार्प जिओमेट्रिक कॉर्नर ॲक्सेंट्स */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#f4d058] z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#2e6930] z-10 pointer-events-none" />
          </motion.div>

          {/* उजवी बाजू: मजकूर व ॲनिमेटेड व्हिजन-मिशन (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start pl-0 lg:pl-4"
          >
            {/* Top Tagline Badge */}
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#2e6930] uppercase mb-2 block">
              {t.badge}
            </span>

            {/* Short & Powerful Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight font-black text-gray-950 mb-4">
              {t.heading}
            </h2>

            {/* Short Intro */}
            <p className="text-base text-gray-600 font-normal leading-relaxed mb-6">
              {t.intro}
            </p>

            {/* Vision & Mission Cards with Hover Bounce & Accent Animation */}
            <div className="space-y-4 w-full mb-8">
              {/* Vision Point */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-4 sm:p-5 bg-[#fbfdfa] border-l-4 border-[#2e6930] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mt-1 w-7 h-7 rounded-full bg-[#2e6930]/10 text-[#2e6930] flex items-center justify-center shrink-0">
                  <FaCheck className="text-sm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-950 mb-1 leading-snug">
                    {t.visionTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                    {t.visionDesc}
                  </p>
                </div>
              </motion.div>

              {/* Mission Point */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-4 sm:p-5 bg-[#fbfdfa] border-l-4 border-[#e5a93c] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mt-1 w-7 h-7 rounded-full bg-[#e5a93c]/15 text-[#e5a93c] flex items-center justify-center shrink-0">
                  <FaCheck className="text-sm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-950 mb-1 leading-snug">
                    {t.missionTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                    {t.missionDesc}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Flat CTA Button */}
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-3 bg-[#2e6930] hover:bg-[#1a4433] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-none shadow-lg shadow-[#2e6930]/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>{t.btnText}</span>
              <FaArrowUpRightFromSquare className="text-xs text-[#f4d058]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
