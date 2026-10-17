import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandshake, 
  FaScrewdriverWrench, 
  FaBoxesStacked, 
  FaShop, 
  FaChartLine 
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const OurApproach = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    mr: {
      tag: "कार्यपद्धती",
      heading: "आमचा दृष्टिकोन",
      sub: "शेतकरी उत्पादक संस्थांच्या शाश्वत विकासासाठी टप्प्याटप्प्याने राबवली जाणारी कार्यप्रणाली.",
      steps: [
        {
          step: "STEP 01",
          title: "Connect (जोडा)",
          desc: "शेतकरी संस्था, शासकीय विभाग आणि भागधारकांना एका व्यासपीठावर एकत्र आणणे.",
          icon: FaHandshake,
          accentColor: "text-amber-600",
          bgColor: "bg-amber-50"
        },
        {
          step: "STEP 02",
          title: "Build (बांधणी)",
          desc: "संस्थात्मक, व्यवस्थापकीय आणि उद्योजकीय कौशल्य अधिक बळकट व सक्षम करणे.",
          icon: FaScrewdriverWrench,
          accentColor: "text-emerald-700",
          bgColor: "bg-emerald-50"
        },
        {
          step: "STEP 03",
          title: "Aggregate (एकत्रीकरण)",
          desc: "सामूहिक खरेदी, शेतीमालाचे संकलन आणि प्रतवारी करून साखळी मजबूत करणे.",
          icon: FaBoxesStacked,
          accentColor: "text-teal-700",
          bgColor: "bg-teal-50"
        },
        {
          step: "STEP 04",
          title: "Market (बाजारपेठ)",
          desc: "थेट खरेदीदार, प्रक्रिया उद्योग आणि संस्थांसोबत शाश्वत व्यापारी संधी निर्माण करणे.",
          icon: FaShop,
          accentColor: "text-blue-700",
          bgColor: "bg-blue-50"
        },
        {
          step: "STEP 05",
          title: "Grow (प्रगती)",
          desc: "FPO आणि शेतकरी उद्योगांची दीर्घकालीन व शाश्वत व्यावसायिक प्रगती साध्य करणे.",
          icon: FaChartLine,
          accentColor: "text-[#2e6930]",
          bgColor: "bg-green-50"
        }
      ]
    },
    en: {
      tag: "Process Pipeline",
      heading: "Our Approach",
      sub: "A structured, progressive roadmap designed to scale farmer institutions sustainably.",
      steps: [
        {
          step: "STEP 01",
          title: "Connect",
          desc: "Bring farmer organizations, government agencies, and key stakeholders together.",
          icon: FaHandshake,
          accentColor: "text-amber-600",
          bgColor: "bg-amber-50"
        },
        {
          step: "STEP 02",
          title: "Build",
          desc: "Strengthen institutional, managerial, and entrepreneurial capabilities.",
          icon: FaScrewdriverWrench,
          accentColor: "text-emerald-700",
          bgColor: "bg-emerald-50"
        },
        {
          step: "STEP 03",
          title: "Aggregate",
          desc: "Promote farm-gate aggregation, grading, and collective bulk procurement.",
          icon: FaBoxesStacked,
          accentColor: "text-teal-700",
          bgColor: "bg-teal-50"
        },
        {
          step: "STEP 04",
          title: "Market",
          desc: "Create direct market linkages, corporate tie-ups, and profitable contracts.",
          icon: FaShop,
          accentColor: "text-blue-700",
          bgColor: "bg-blue-50"
        },
        {
          step: "STEP 05",
          title: "Grow",
          desc: "Drive long-term economic sustainability and enterprise growth for FPOs.",
          icon: FaChartLine,
          accentColor: "text-[#2e6930]",
          bgColor: "bg-green-50"
        }
      ]
    }
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <section className="w-full py-16 sm:py-24 bg-[#fafbf9] font-sans text-gray-800 relative overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-[#2e6930] uppercase block mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight font-black text-gray-900 mb-2.5">
            {t.heading}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-normal">
            {t.sub}
          </p>
        </div>

        {/* Process Flow Container */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-[1.5px] bg-gray-200 z-0" />

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {t.steps.map((item, idx) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Icon Circle (Exact same floating style as image) */}
                  <div className="relative mb-6">
                    <div className="w-[74px] h-[74px] rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100/80 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(46,105,48,0.15)]">
                      <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center ${item.accentColor} transition-colors duration-300`}>
                        <IconComponent className="text-xl" />
                      </div>
                    </div>
                  </div>

                  

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight mb-3 transition-colors duration-200 group-hover:text-[#2e6930]">
                    {item.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal max-w-[230px] mb-6">
                    {item.desc}
                  </p>

                  {/* Bottom Dash Lines (Dark grey + Gold accent line as shown in image) */}
                  <div className="flex items-center gap-1.5 mt-auto">
                    <span className="w-5 h-[2px] bg-gray-700/60 rounded-full" />
                    <span className="w-3 h-[2px] bg-amber-500 rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurApproach;