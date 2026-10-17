import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCoins, 
  FaBuildingColumns, 
  FaChartPie, 
  FaShieldHalved, 
  FaCompass 
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const FinancialFacilitation = () => {
  const { language } = useContext(LanguageContext);
  const [activeStep, setActiveStep] = useState(0);

  const content = {
    mr: {
      tag: "वित्तीय सुलभता",
      heading: "वित्तीय भांडवल व पतपुरवठा सुलभता",
      desc1: "शेतकरी उत्पादक संस्थांच्या (FPO) निरंतर वाढीसाठी आणि दैनंदिन व्यवहारांसाठी खेळते भांडवल (Working Capital) अत्यंत आवश्यक असते.",
      desc2: "महाएफपीओ शेतकरी संस्था आणि वित्तीय संस्था यांच्यात सेतूचे काम करते, ज्यामुळे FPOs ला त्यांच्या व्यवसायानुसार योग्य वित्तीय योजना व कर्जपुरवठा उपलब्ध होतो.",
      badgeText: "संस्थात्मक पतपुरवठा साखळी",
      features: [
        {
          id: "०१",
          title: "खेळते भांडवल सुलभता (Working Capital Facilitation)",
          desc: "शेतीमाल खरेदी, साठवणूक आणि दैनंदिन ऑपरेशनल गरजांसाठी वेळेवर खेळते भांडवल मिळवून देणे.",
          icon: FaCoins
        },
        {
          id: "०२",
          title: "वित्तीय संस्थांशी जोडणी (Financial Institution Linkages)",
          desc: "राष्ट्रीयीकृत बँका, नाबार्ड (NABARD) आणि कृषी वित्तीय संस्थांसोबत संस्थात्मक समन्वय घडवून आणणे.",
          icon: FaBuildingColumns
        },
        {
          id: "०३",
          title: "व्यवसाय वित्त साक्षरता (Business Finance Awareness)",
          desc: "FPO संचालक व व्यवस्थापकांना हिशोब, ताळेबंद आणि कॅश-फ्लो मॅनेजमेंटचे व्यावसायिक प्रशिक्षण देणे.",
          icon: FaChartPie
        },
        {
          id: "०४",
          title: "कर्ज सहाय्य परिसंस्था (Credit Support Ecosystem)",
          desc: "क्रेडिट गॅरंटी फंड (CGTMSE / NABSAMRUDDHI) आणि शासकीय अनुदानाचा लाभ घेण्यासाठी सुलभ मार्गदर्शन.",
          icon: FaShieldHalved
        },
        {
          id: "०५",
          title: "आर्थिक व व्यावसायिक मार्गदर्शन (Financial Guidance)",
          desc: "प्रकल्प अहवाल (DPR) तयार करणे आणि व्यवसायाची पतपात्रता (Creditworthiness) वाढवण्यासाठी सातत्यपूर्ण सल्ला.",
          icon: FaCompass
        }
      ]
    },
    en: {
      tag: "Financial Facilitation",
      heading: "Facilitating Access to Finance",
      desc1: "Access to working capital is critical for the continuous growth and operational scale of FPO businesses.",
      desc2: "MAHAFPO facilitates connections between FPOs and financial institutions to help organizations explore suitable financing opportunities for their business requirements.",
      badgeText: "Institutional Credit Pipeline",
      features: [
        {
          id: "01",
          title: "Working Capital Facilitation",
          desc: "Securing operational liquidity for farm-gate aggregation, storage, and timely farmer payments.",
          icon: FaCoins
        },
        {
          id: "02",
          title: "Financial Institution Linkages",
          desc: "Facilitating structured credit dialogues with scheduled commercial banks, NABARD, and NBFCs.",
          icon: FaBuildingColumns
        },
        {
          id: "03",
          title: "Business Finance Awareness",
          desc: "Capacity-building on balance sheet hygiene, cash-flow discipline, and statutory audits.",
          icon: FaChartPie
        },
        {
          id: "04",
          title: "Credit Support Ecosystem",
          desc: "Navigating collateral-free credit guarantee schemes and government-backed interest subventions.",
          icon: FaShieldHalved
        },
        {
          id: "05",
          title: "Financial Guidance & DPR Support",
          desc: "Comprehensive advisory on project feasibility reports to enhance bankability and risk ratings.",
          icon: FaCompass
        }
      ]
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#fdfdfc] py-16 sm:py-22 font-sans text-gray-800 select-none overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Balanced Center Header */}
        <div className="max-w-6xl mx-auto text-center mb-14 sm:mb-18">
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
            <div className="space-y-1 text-sm sm:text-[16px] text-gray-700 font-normal leading-relaxed">
              <p>{t.desc1}</p>
              <p>{t.desc2}</p>
            </div>
          </motion.div>
        </div>

        {/* 2-Column Split: Left 2-Images | Right Pipeline / Non-Card Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* डावी बाजू: दोन ओव्हरलॅपिंग इमेजेस (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-[450px] sm:h-[490px]"
            >
              {/* बॅकग्राउंड ॲक्सेंट वायरफ्रेम */}
              <div className="absolute top-4 left-4 w-[78%] h-[330px] border-2 border-[#2e6930]/30 hidden sm:block pointer-events-none" />

              {/* Image 1: Main Top Image */}
              <div className="absolute top-0 left-0 w-[82%] h-[310px] bg-black shadow-lg overflow-hidden rounded-none border border-gray-200">
                <img
                  src="/fpo-business-development-india.jpg"
                  alt="Agricultural banking and finance consultation"
                  className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2e6930]" />
              </div>

              {/* Image 2: Secondary Bottom Overlapping Image */}
              <div className="absolute bottom-2 right-0 w-[62%] h-[220px] bg-black shadow-2xl overflow-hidden rounded-none border-4 border-white">
                <img
                  src="/fpo-farmer-empowerment-maharashtra.jpg"
                  alt="Rural business enterprise growth"
                  className="w-full h-full object-cover object-center grayscale-[10%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f4d058]" />
              </div>

              {/* Minimal floating tag */}
              <div className="absolute top-6 right-2 bg-[#112015] text-white px-3.5 py-2 shadow-md border-l-2 border-[#f4d058] hidden sm:block">
                <span className="text-[10px] font-semibold text-[#f4d058] uppercase block">MAHAFPO Capital</span>
                <span className="text-xs font-bold text-gray-200">{t.badgeText}</span>
              </div>
            </motion.div>
          </div>

          {/* उजवी बाजू: Financial Pipeline Track (No Boxes/Cards) (7 Cols) */}
          <div className="lg:col-span-7 relative pl-4 sm:pl-6">
            
            {/* Continuous Vertical Tracking Line */}
            <div className="absolute top-3 bottom-3 left-4 sm:left-6 w-[2px] bg-gray-200" />
            
            {/* Dynamic Gold Accent Progress on Tracking Line */}
            <div 
              className="absolute top-3 left-4 sm:left-6 w-[2px] bg-[#f4d058] transition-all duration-500 ease-out"
              style={{ height: `${((activeStep + 1) / t.features.length) * 88}%` }}
            />

            <div className="space-y-6 sm:space-y-7 relative z-10">
              {t.features.map((item, idx) => {
                const IconComp = item.icon;
                const isCurrent = activeStep === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    onMouseEnter={() => setActiveStep(idx)}
                    className="group relative flex items-start gap-5 cursor-pointer"
                  >
                    {/* Step Node / Bullet (Aligns with continuous line) */}
                    <div className="relative -left-[9px] shrink-0 pt-0.5">
                      <div className={`w-[18px] h-[18px] border-2 transition-all duration-300 flex items-center justify-center ${
                        isCurrent 
                          ? 'bg-[#2e6930] border-[#f4d058] scale-110 shadow-sm' 
                          : 'bg-white border-gray-400 group-hover:border-[#2e6930]'
                      }`}>
                        <div className={`w-1.5 h-1.5 ${isCurrent ? 'bg-[#f4d058]' : 'bg-transparent'}`} />
                      </div>
                    </div>

                    {/* Content Column (Completely Borderless & Cardless) */}
                    <div className="flex-1 pb-2 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-[11px] font-bold tracking-wider transition-colors ${
                          isCurrent ? 'text-[#f4d058] bg-[#2e6930] px-1.5 py-0.5' : 'text-gray-400'
                        }`}>
                          {item.id}
                        </span>
                        
                        <h3 className={`text-sm sm:text-base font-bold transition-colors ${
                          isCurrent ? 'text-[#2e6930]' : 'text-gray-900 group-hover:text-gray-700'
                        }`}>
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-[16px] text-gray-700 font-normal leading-relaxed pl-0.5">
                        {item.desc}
                      </p>
                    </div>

                    {/* Subtle Icon on Right Side */}
                    <div className={`text-base pt-1 transition-all duration-300 ${
                      isCurrent ? 'text-[#2e6930] opacity-100 translate-x-0' : 'text-gray-300 opacity-40 group-hover:opacity-70'
                    }`}>
                      <IconComp />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FinancialFacilitation;