import React, { useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaHubspot,
  FaUsersViewfinder,
  FaHandshakeAngle,
} from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";

const NetworkHero = () => {
  const { language } = useContext(LanguageContext);

  const heroData = {
    mr: {
      badge: "सामूहिक संस्थात्मक नेटवर्क",
      titlePart1: "एकसंध",
      titleHighlight: "FPO परिसंस्था",
      titlePart2: "निर्मिती",
      desc: "शेतकरी उत्पादक संस्था, शासकीय विभाग, संस्थात्मक खरेदीदार आणि वित्तीय भागीदारांना एका व्यासपीठावर जोडून मजबूत कृषी व्यवसाय उभारणे.",
      breadcrumbHome: "मुख्यपृष्ठ",
      breadcrumbCurrent: "नेटवर्क",
      stat1Val: "५००+",
      stat1Label: "संलग्न FPOs",
      stat2Val: "३०+",
      stat2Label: "जिल्हे कव्हर",
      stat3Val: "५०+",
      stat3Label: "बाजार भागीदार",
    },
    en: {
      badge: "CONNECTED INSTITUTIONAL NETWORK",
      titlePart1: "Building a Connected",
      titleHighlight: "FPO Ecosystem",
      titlePart2: "",
      desc: "Bringing together farmer organizations, institutions, corporate buyers, and financial partners to create resilient and commercially viable agricultural enterprises.",
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Network",
      stat1Val: "500+",
      stat1Label: "Affiliated FPOs",
      stat2Val: "30+",
      stat2Label: "Districts Covered",
      stat3Val: "50+",
      stat3Label: "Market Alliances",
    },
  };

  const t = useMemo(() => {
    return heroData[language] || heroData.mr;
  }, [language]);

  return (
    <div className="relative w-full min-h-[460px] lg:h-[500px] bg-[#0c1610] text-white overflow-hidden font-sans select-none border-b border-[#2e6930]/40">
      {/* Background Subtle Tech/Agri Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#2e6930_1px,transparent_1px),linear-gradient(to_bottom,#2e6930_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1500px] mx-auto h-full grid grid-cols-1 lg:grid-cols-12 relative z-10">
        {/* डावी बाजू: प्रीमियम टायपोग्राफी व स्टेटिस्टिक्स (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-0 z-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-5"
          >
            <Link to="/" className="hover:text-[#f4d058] transition-colors">
              {t.breadcrumbHome}
            </Link>
            <FaChevronRight className="text-[10px] text-gray-500" />
            <span className="text-[#f4d058]">{t.breadcrumbCurrent}</span>
          </nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#2e6930]/30 border border-[#2e6930] rounded-none text-[#a3e670] text-xs font-bold tracking-widest uppercase mb-4 w-fit"
          >
            <FaHubspot className="text-[#f4d058]" />
            <span>{t.badge}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-5 text-white"
          >
            {t.titlePart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a2e06f] to-[#f4d058]">
              {t.titleHighlight}
            </span>{" "}
            {t.titlePart2}
          </motion.h1>

          {/* Subtitle / Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-2xl mb-8"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* उजवी बाजू: शार्प अँग्युलर पॉलीगॉन कट इमेज (5 Cols) */}
        <div className="lg:col-span-5 relative w-full h-[320px] lg:h-full overflow-hidden">
          {/* Unique Angular Cutout using CSS clip-path */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full h-full relative"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <img
              src="/fpo-capacity-building-maharashtra.avif"
              alt="Connected Agricultural Network"
              className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
            {/* Deep Tint Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1610] via-transparent to-black/40" />
          </motion.div>

          {/* Sharp Edge Accent Line */}
          <div className="absolute top-0 bottom-0 left-[15%] w-[3px] bg-gradient-to-b from-[#f4d058] via-[#2e6930] to-transparent hidden lg:block z-20 pointer-events-none" />
        </div>
      </div>

      {/* Bottom Border Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2e6930] via-[#f4d058] to-[#2e6930] z-30" />
    </div>
  );
};

export default NetworkHero;
