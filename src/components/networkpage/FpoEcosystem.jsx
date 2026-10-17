import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaSitemap, 
  FaBuildingColumns, 
  FaShop, 
  FaBriefcase, 
  FaLandmarkFlag, 
  FaGlobe, 
  FaChartLine, 
  FaArrowDownLong
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const FpoEcosystem = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    mr: {
      badge: "परिसंस्था संरचना",
      heading: "FPO परिसंस्थेचा एकात्मिक आराखडा",
      sub: "तळागाळातील शेतकऱ्यांपासून ते जागतिक बाजारपेठेपर्यंत जोडणारी मजबूत संस्थात्मक साखळी.",
      tiers: {
        farmers: {
          title: "शेतकरी सभासद (Grassroots Farmers)",
          desc: "उत्पादन, प्राथमिक प्रतवारी आणि स्थानिक सहभाग",
          count: "२,५०,०००+ शेतकरी"
        },
        fpo: {
          title: "शेतकरी उत्पादक संस्था (FPOs / FPCs)",
          desc: "सामूहिक संकलन, स्थानिक प्रक्रिया व प्राथमिक व्यवसाय केंद्र",
          count: "५००+ संस्था"
        },
        mahafpo: {
          tag: "सर्वोच्च संस्था (Apex Federation)",
          title: "महाएफपीओ फेडरेशन (MAHAFPO Federation)",
          desc: "धोरणात्मक नेतृत्व, संस्थात्मक क्षमता बांधणी, बाजारपेठ जोडणी आणि वित्त सुलभता व्यासपीठ."
        },
        pillarsTitle: "संस्थात्मक व व्यावसायिक भागीदार (Market & Strategic Pillars)",
        pillars: [
          { icon: FaBuildingColumns, title: "वित्तीय संस्था", subtitle: "भांडवल व पतपुरवठा" },
          { icon: FaShop, title: "थेट खरेदीदार", subtitle: "संस्थात्मक खरेदी" },
          { icon: FaBriefcase, title: "कॉर्पोरेट्स", subtitle: "प्रक्रिया व करार शेती" },
          { icon: FaLandmarkFlag, title: "शासन व संस्था", subtitle: "धोरण व योजना" },
          { icon: FaGlobe, title: "राष्ट्रीय बाजारपेठ", subtitle: "मूल्यवर्धन व निर्यात" }
        ],
        outcome: {
          badge: "अंतिम निष्पत्ती (Ultimate Impact)",
          title: "शाश्वत आणि नफाक्षम शेतकरी उद्योग",
          desc: "व्यावसायिक स्वावलंबन, वाढलेली नफाक्षमता आणि ग्रामीण अर्थव्यवस्थेचा शाश्वत विकास."
        }
      }
    },
    en: {
      badge: "Ecosystem Architecture",
      heading: "The Connected FPO Ecosystem",
      sub: "A cohesive, institutional value-chain linking grassroots producers to scalable commercial markets.",
      tiers: {
        farmers: {
          title: "Individual Smallholder Farmers",
          desc: "Farm-gate production, crop management & local aggregation",
          count: "250,000+ Farmers"
        },
        fpo: {
          title: "Farmer Producer Organizations (FPOs / FPCs)",
          desc: "Primary aggregation, farm-level grading & grassroots governance",
          count: "500+ Member FPOs"
        },
        mahafpo: {
          tag: "Apex Enabling Body",
          title: "MAHAFPO Federation",
          desc: "Strategic orchestration, state-level market facilitation, policy advisory & working capital enablement."
        },
        pillarsTitle: "Institutional & Commercial Stakeholders",
        pillars: [
          { icon: FaBuildingColumns, title: "Financial Bodies", subtitle: "Credit & Capital" },
          { icon: FaShop, title: "Bulk Buyers", subtitle: "Direct Sourcing" },
          { icon: FaBriefcase, title: "Corporates", subtitle: "Processing & Contracts" },
          { icon: FaLandmarkFlag, title: "Government", subtitle: "Schemes & Policy" },
          { icon: FaGlobe, title: "National Markets", subtitle: "Value Chains & Export" }
        ],
        outcome: {
          badge: "Ultimate Outcome",
          title: "Sustainable & Scalable Farmer Enterprises",
          desc: "Empowered agricultural businesses achieving enduring financial autonomy and equitable farmer prosperity."
        }
      }
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#f8faf7] py-16 sm:py-24 font-sans text-gray-800 select-none overflow-hidden relative">
      
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2e69300d_1px,transparent_1px),linear-gradient(to_bottom,#2e69300d_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#2e6930] uppercase block mb-2">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-gray-900 mb-3">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            {t.sub}
          </p>
        </motion.div>

        {/* --- Ecosystem Architecture Diagram --- */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Tier 1: Farmers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full sm:w-[500px] bg-white border border-gray-300/80 p-5 text-center shadow-sm relative group hover:border-[#2e6930] transition-colors rounded-none"
          >
            <div className="w-9 h-9 bg-[#2e6930]/10 text-[#2e6930] mx-auto flex items-center justify-center mb-2">
              <FaUsers className="text-base" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
              {t.tiers.farmers.title}
            </h3>
            <p className="text-xs text-gray-500 mb-2">{t.tiers.farmers.desc}</p>
            <span className="inline-block text-[11px] font-bold text-[#2e6930] bg-[#2e6930]/10 px-2.5 py-0.5 uppercase tracking-wider">
              {t.tiers.farmers.count}
            </span>
          </motion.div>

          {/* Flow Connector Line 1 */}
          <div className="flex flex-col items-center py-2">
            <div className="w-[2px] h-6 bg-[#2e6930]/40" />
            <FaArrowDownLong className="text-xs text-[#2e6930]" />
          </div>

          {/* Tier 2: FPOs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full sm:w-[580px] bg-white border-2 border-[#2e6930]/30 p-5 text-center shadow-sm relative hover:border-[#2e6930] transition-colors rounded-none"
          >
            <div className="w-9 h-9 bg-[#2e6930]/15 text-[#2e6930] mx-auto flex items-center justify-center mb-2">
              <FaSitemap className="text-base" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
              {t.tiers.fpo.title}
            </h3>
            <p className="text-xs text-gray-600 mb-2">{t.tiers.fpo.desc}</p>
            <span className="inline-block text-[11px] font-bold text-[#2e6930] bg-[#2e6930]/10 px-2.5 py-0.5 uppercase tracking-wider">
              {t.tiers.fpo.count}
            </span>
          </motion.div>

          {/* Flow Connector Line 2 */}
          <div className="flex flex-col items-center py-2">
            <div className="w-[2px] h-6 bg-[#2e6930]/50" />
            <FaArrowDownLong className="text-xs text-[#2e6930]" />
          </div>

          {/* Tier 3: MAHAFPO FEDERATION (Central Anchor Hub) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full sm:w-[680px] bg-[#0f2115] text-white p-7 sm:p-8 text-center shadow-2xl relative border-t-4 border-t-[#f4d058] rounded-none overflow-hidden"
          >
            {/* Ambient Corner Accents */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#2e6930]/20 pointer-events-none" />
            
            <span className="text-[11px] font-bold tracking-widest text-[#f4d058] uppercase block mb-2">
              {t.tiers.mahafpo.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
              {t.tiers.mahafpo.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed max-w-xl mx-auto">
              {t.tiers.mahafpo.desc}
            </p>
          </motion.div>

          {/* Multi-Channel Distribution Connector */}
          <div className="flex flex-col items-center pt-2 pb-3 w-full">
            <div className="w-[2px] h-6 bg-[#2e6930]/60" />
            <FaArrowDownLong className="text-xs text-[#2e6930] mb-2" />
            <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
              {t.tiers.pillarsTitle}
            </span>
          </div>

          {/* Tier 4: Five Market & Institutional Pillars */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-3">
            {t.tiers.pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white border border-gray-200 p-3.5 text-center shadow-sm flex flex-col items-center justify-center group hover:border-[#2e6930] hover:shadow-md transition-all rounded-none"
                >
                  <div className="w-8 h-8 rounded-none bg-gray-50 border border-gray-200 text-[#2e6930] flex items-center justify-center mb-2 group-hover:bg-[#2e6930] group-hover:text-[#f4d058] transition-colors">
                    <IconComp className="text-sm" />
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-gray-900 leading-tight mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 leading-tight">
                    {pillar.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Final Convergence Connector */}
          <div className="flex flex-col items-center py-2">
            <div className="w-[2px] h-6 bg-[#2e6930]/60" />
            <FaArrowDownLong className="text-xs text-[#2e6930]" />
          </div>

          {/* Tier 5: Final Outcome (Sustainable Farmer Businesses) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full sm:w-[620px] bg-[#fbfdfa] border-2 border-[#2e6930] p-6 text-center shadow-md relative rounded-none"
          >
            <div className="w-10 h-10 bg-[#2e6930] text-[#f4d058] mx-auto flex items-center justify-center mb-2.5">
              <FaChartLine className="text-lg" />
            </div>
            <span className="text-[10px] font-bold text-[#2e6930] tracking-widest uppercase block mb-1">
              {t.tiers.outcome.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight mb-1.5">
              {t.tiers.outcome.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed max-w-lg mx-auto">
              {t.tiers.outcome.desc}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FpoEcosystem;