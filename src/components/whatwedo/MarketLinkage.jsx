import React, { useContext, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHandshakeAngle,
  FaBuildingColumns,
  FaBriefcase,
  FaBoxesPacking,
  FaMagnifyingGlassChart,
  FaArrowRight,
  FaCircleCheck,
  FaNetworkWired,
} from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";

const MarketLinkage = () => {
  const { language } = useContext(LanguageContext);
  const [activeFeature, setActiveFeature] = useState(0);

  const content = {
    mr: {
      tag: "बाजारपेठ जोडणी",
      heading: "सशक्त बाजारपेठ जोडणीची निर्मिती",
      desc1:
        "महाएफपीओ शेतकरी उत्पादक संस्थांना (FPOs) आघाडीचे कॉर्पोरेट्स, मोठे व्यापारी, संस्थात्मक खरेदीदार आणि थेट ग्राहक बाजारपेठांशी जोडण्याचे कार्य करते.",
      desc2:
        "बाजारपेठेची साखळी बळकट करून FPOs ला शेतमालाच्या विक्रीसाठी अधिक फायदेशीर दर मिळतात आणि शाश्वत, दीर्घकालीन व्यावसायिक संबंध प्रस्थापित होतात.",
      badge: "थेट खरेदीदार भागीदारी",
      features: [
        {
          id: "01",
          icon: FaHandshakeAngle,
          title: "खरेदीदार जोडणी (Buyer Connections)",
          detail:
            "मोठ्या व्यापारी, खरेदीदार व निर्यातदारांशी थेट समन्वय घडवून मध्यस्थांची साखळी कमी करणे.",
        },
        {
          id: "02",
          icon: FaBuildingColumns,
          title: "संस्थात्मक बाजारपेठ (Institutional Markets)",
          detail:
            "शासकीय खरेदी केंद्रे, नाफेड (NAFED), महामंडळे आणि मोठ्या संस्थांशी व्यावसायिक करार.",
        },
        {
          id: "03",
          icon: FaBriefcase,
          title: "कॉर्पोरेट भागीदारी (Corporate Linkages)",
          detail:
            "अन्न प्रक्रिया उद्योग, रिटेल चेन्स व ॲग्री-बिझनेस कंपन्यांशी शाश्वत सप्लाय-चेन करार.",
        },
        {
          id: "04",
          icon: FaBoxesPacking,
          title: "सामूहिक विक्री (Collective Selling)",
          detail:
            "शेतमालाचे संकलन करून मोठ्या प्रमाणावर (Bulk Quantity) विक्री करून उत्तम दर मिळवणे.",
        },
        {
          id: "05",
          icon: FaMagnifyingGlassChart,
          title: "बाजारपेठ संधी शोधणे (Opportunity Identification)",
          detail:
            "मागणी, दर आणि ट्रेंड्सचे वेळेवर विश्लेषण करून FPOs ला नवीन नफाक्षम संधी मिळवून देणे.",
        },
      ],
      flowLabel: "थेट व्यापार मार्ग (Trade Value Flow)",
      flowFrom: "शेतकरी उत्पादक संस्था (FPO)",
      flowTo: "थेट संस्थात्मक खरेदीदार व कॉर्पोरेट्स",
    },
    en: {
      tag: "Market Linkage",
      heading: "Creating Better Market Linkages",
      desc1:
        "MAHAFPO works towards connecting Farmer Producer Organizations with corporates, traders, institutional buyers and direct markets.",
      desc2:
        "By strengthening market connections, FPOs can explore better opportunities for selling agricultural produce and developing long-term business relationships.",
      badge: "Institutional Trade Alliances",
      features: [
        {
          id: "01",
          icon: FaHandshakeAngle,
          title: "Buyer Connections",
          detail:
            "Establishing structured direct procurement networks with validated bulk traders and institutional off-takers.",
        },
        {
          id: "02",
          icon: FaBuildingColumns,
          title: "Institutional Markets",
          detail:
            "Accessing formal institutional mandates, civil supplies, and apex state procurement operations.",
        },
        {
          id: "03",
          icon: FaBriefcase,
          title: "Corporate Linkages",
          detail:
            "Securing end-to-end supply contracts with food processors, modern retail chains, and agribusinesses.",
        },
        {
          id: "04",
          icon: FaBoxesPacking,
          title: "Collective Selling",
          detail:
            "Consolidating farm-gate harvests to command competitive bulk prices and superior contract margins.",
        },
        {
          id: "05",
          icon: FaMagnifyingGlassChart,
          title: "Market Opportunity Identification",
          detail:
            "Real-time crop market intelligence, demand projections, and arbitrage mapping for farmer groups.",
        },
      ],
      flowLabel: "Trade Value Flow",
      flowFrom: "Aggregated Farm Produce (FPO)",
      flowTo: "Direct Corporate & Institutional Buyers",
    },
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#fafbf9] py-18 sm:py-24 font-sans text-gray-900 overflow-hidden relative select-none">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2e6930_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest text-[#2e6930] uppercase block mb-2">
              {t.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-gray-900 mb-3">
              {t.heading}
            </h2>
            <div className="space-y-1.5 text-sm sm:text-[16px] text-gray-700 font-normal leading-relaxed">
              <p>{t.desc1}</p>
              <p>{t.desc2}</p>
            </div>
          </motion.div>
        </div>

        {/* Unique Split Architecture: Left Interactive Features | Right Trade Corridor Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* डावी बाजू: 5 Interactive Features List (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
            {t.features.map((feat, index) => {
              const IconComponent = feat.icon;
              const isActive = activeFeature === index;

              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onMouseEnter={() => setActiveFeature(index)}
                  className={`relative p-4 sm:p-5 border transition-all duration-300 rounded-none cursor-pointer ${
                    isActive
                      ? "bg-white border-[#2e6930] shadow-md -translate-x-0 sm:translate-x-2"
                      : "bg-[#f4f7f2]/60 border-gray-200/80 hover:bg-white hover:border-gray-300"
                  }`}
                >
                  {/* Left Accent Bar on Active */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 w-[4px] transition-colors duration-300 ${
                      isActive ? "bg-[#f4d058]" : "bg-transparent"
                    }`}
                  />

                  <div className="flex items-start gap-4">
                    {/* Icon Box */}
                    <div
                      className={`w-10 h-10 flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-[#2e6930] text-[#f4d058]"
                          : "bg-white text-gray-700 border border-gray-200"
                      }`}
                    >
                      <IconComponent className="text-lg" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-base font-bold tracking-tight ${
                            isActive ? "text-[#2e6930]" : "text-gray-900"
                          }`}
                        >
                          {feat.title}
                        </h3>
                        <span className="text-[11px] font-black text-gray-300 group-hover:text-gray-400">
                          {feat.id}
                        </span>
                      </div>

                      {/* Expanded description on active/hover */}
                      <p className="text-sm sm:text-[16px] text-gray-700 font-normal leading-relaxed mt-1">
                        {feat.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* उजवी बाजू: Dynamic Trade Corridor & Market Matrix Visual Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-full min-h-[460px] bg-[#112015] text-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden border-t-4 border-[#f4d058] shadow-2xl rounded-none"
            >
              {/* Background Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#2e6930]/40 rounded-full blur-3xl pointer-events-none" />

              {/* Top Meta */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-widest text-[#f4d058] uppercase">
                    {t.badge}
                  </span>
                  <FaNetworkWired className="text-[#a3e670] text-sm" />
                </div>

                <h4 className="text-2xl font-black text-white tracking-tight leading-snug">
                  {t.features[activeFeature].title}
                </h4>

                <p className="text-xs sm:text-sm text-gray-300 font-normal mt-2 leading-relaxed">
                  {t.features[activeFeature].detail}
                </p>
              </div>

              {/* Center Interactive Pulse Corridor Visual */}
              <div className="my-8 py-6 px-5 bg-white/5 border border-white/10 relative z-10">
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase block mb-3">
                  {t.flowLabel}
                </span>

                <div className="flex items-center justify-between gap-3">
                  <div className="bg-[#2e6930] p-3 text-center flex-1 border border-[#a3e670]/30">
                    <span className="text-[11px] font-bold text-white block">
                      {t.flowFrom}
                    </span>
                  </div>

                  <div className="flex items-center text-[#f4d058]">
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        ease: "easeInOut",
                      }}
                    >
                      <FaArrowRight className="text-base" />
                    </motion.div>
                  </div>

                  <div className="bg-white/10 p-3 text-center flex-1 border border-white/20">
                    <span className="text-[11px] font-bold text-[#f4d058] block">
                      {t.flowTo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Badges Tracker */}
              <div className="relative z-10 pt-4 border-t border-white/10">
                <div className="grid grid-cols-5 gap-1.5">
                  {t.features.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFeature(idx)}
                      className={`h-1.5 transition-all duration-300 cursor-pointer ${
                        activeFeature === idx
                          ? "bg-[#f4d058]"
                          : "bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Jump to feature ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-400 mt-3">
                  <span>MAHAFPO Value Network</span>
                  <span className="text-[#f4d058] font-bold">
                    0{activeFeature + 1} / 05
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketLinkage;
