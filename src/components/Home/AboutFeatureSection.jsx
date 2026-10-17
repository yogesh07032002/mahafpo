import React, { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCircleCheck,
  FaSeedling,
  FaHandshakeAngle,
  FaChartLine,
} from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";

const AboutFeatureSection = () => {
  const { language } = useContext(LanguageContext);

  // 🌍 केवळ मराठी आणि इंग्रजी भाषांतर
  const translations = {
    mr: {
      badge: "महाएफपीओ फेडरेशनबद्दल",
      headingPart1: "सामूहिक शक्तीने",
      headingHighlight: "शेतकऱ्यांचे सक्षमीकरण",
      p1Bold: "महाएफपीओ फेडरेशन",
      p1Rest:
        " – महाराष्ट्र शेतकरी उत्पादक संस्था महासंघ – हे राज्यभरातील शेतकरी उत्पादक संस्था (FPOs), सहकारी संस्था आणि पाणी वापर संस्थांना बळकटी देणारे एक सामूहिक व्यासपीठ आहे.",
      p2: "महासंघ FPOs साठी नवीन व्यावसायिक संधी निर्माण करणे, थेट बाजारपेठ उपलब्ध करून देणे, वित्तीय जोडणी सुलभ करणे आणि त्यांचे व्यवस्थापकीय व उद्योजकीय कौशल्य विकसित करण्यावर भर देतो.",
      features: [
        {
          icon: FaHandshakeAngle,
          title: "सामूहिक वाटाघाटी",
          desc: "एकत्रित बाजारपेठीय ताकदीने अल्पभूधारक शेतकऱ्यांना सक्षम करणे.",
        },
        {
          icon: FaChartLine,
          title: "बाजार व वित्तीय जोडणी",
          desc: "थेट खरेदीदार, बँका आणि कृषी मूल्यसाखळीशी सहज जोडणी.",
        },
      ],
      btn: "आमच्याबद्दल अधिक जाणून घ्या",
      overlayTag: "महाराष्ट्र नेटवर्क",
      overlayTitle: "५००+ शेतकरी उत्पादक संस्था",
    },
    en: {
      badge: "About MAHAFPO Federation",
      headingPart1: "Strengthening Farmers Through",
      headingHighlight: "Collective Action",
      p1Bold: "MAHAFPO Federation",
      p1Rest:
        " – Maharashtra Farmer Producer Organization Federation – is a collective platform working towards strengthening Farmer Producer Organizations, cooperative institutions, and water user organizations across Maharashtra.",
      p2: "The Federation focuses on creating business opportunities, improving market access, facilitating financial linkages, and building the managerial and entrepreneurial capabilities of FPOs.",
      features: [
        {
          icon: FaHandshakeAngle,
          title: "Collective Bargaining",
          desc: "Empowering smallholders with united market power.",
        },
        {
          icon: FaChartLine,
          title: "Market & Financial Linkages",
          desc: "Direct access to buyers, banks, and value chains.",
        },
      ],
      btn: "Know More About Us",
      overlayTag: "Maharashtra Network",
      overlayTitle: "500+ Farmer Producer Organizations",
    },
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-28 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ---------------- Left Content Column (7 cols) ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Pill Badge with Gentle Floating Effect */}
            <motion.div 
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f8ed] border border-[#2e6930]/20 mb-5 shadow-sm"
            >
              <FaSeedling className="text-[#2e6930] text-xs" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2e6930]">
                {t.badge}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-bold text-gray-950 leading-[1.2] tracking-tight mb-6"
            >
              {t.headingPart1}{" "}
              <span className="text-[#2e6930] relative inline-block">
                {t.headingHighlight}
              </span>
            </motion.h2>

            {/* Structured Paragraph Content */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed"
            >
              <p>
                <strong className="text-gray-900 font-semibold">
                  {t.p1Bold}
                </strong>
                {t.p1Rest}
              </p>
              <p>{t.p2}</p>
            </motion.div>

            {/* Feature Mini Cards with Staggered Entrance & Interactive Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8 pt-6 border-t border-gray-100">
              {t.features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + idx * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#fbfdfa] border-l-2 border-[#2e6930] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 bg-[#2e6930]/10 text-[#2e6930] rounded-md shrink-0">
                      <IconComponent className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Active CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-9"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-[#2e6930] hover:bg-[#1a4433] text-white text-sm sm:text-base font-bold px-8 py-4 rounded-full shadow-lg shadow-[#2e6930]/25 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
              >
                <span>{t.btn}</span>
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1.5 text-[#f4d058]" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ---------------- Right Image Column (5 cols) ---------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative w-full group"
          >
            {/* Geometric Floating Accent Frame */}
            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#2e6930]/40 rounded-2xl hidden sm:block pointer-events-none transition-transform duration-500 group-hover:scale-102 group-hover:border-[#C9A227]" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#f4d058]/30 rounded-2xl hidden sm:block -z-10 blur-sm" />

            {/* Main Image Container with Glass Glow Effect */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] overflow-hidden bg-gray-100 shadow-2xl">
              <img
                src="/fpo-farmers-group-maharashtra.avif"
                alt="Empowering Farmers in Maharashtra"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* ✨ Glass Glow / Shimmer Sweep on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none z-10" />

              {/* Radial Edge Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.15),transparent_70%)] pointer-events-none z-10" />

              {/* Gradient Scrim at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10" />

              {/* Floating Frosted Glass Badge Overlay */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="absolute bottom-5 left-5 right-5 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/60 border-l-4 border-l-[#f4d058] shadow-lg z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2e6930] text-white rounded-lg flex items-center justify-center shrink-0 shadow-md">
                    <FaCircleCheck className="text-lg text-[#f4d058]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-600">
                      {t.overlayTag}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
                      {t.overlayTitle}
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutFeatureSection;