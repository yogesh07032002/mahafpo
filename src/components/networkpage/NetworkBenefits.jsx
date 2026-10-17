import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGlobe, 
  FaUsersLine, 
  FaArrowTrendUp, 
  FaSackDollar, 
  FaGraduationCap 
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const NetworkBenefits = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    mr: {
      badge: "नेटवर्कचे फायदे",
      heading: "महाएफपीओ सोबत जोडले जाण्याचे लाभ",
      sub: "शेतकरी उत्पादक संस्थांच्या सक्षमीकरणासाठी आणि शाश्वत नफ्यासाठी सर्वसमावेशक पाठबळ.",
      benefits: [
        {
          num: "०१",
          title: "विस्तृत बाजारपेठ उपलब्धता (Better Market Access)",
          desc: "राज्य आणि देशपातळीवरील मोठ्या संस्थात्मक खरेदीदार, कॉर्पोरेट्स आणि थेट किरकोळ विक्रेत्यांच्या नेटवर्कशी जोडणी.",
          icon: FaGlobe,
        },
        {
          num: "०२",
          title: "सामूहिक ताकद (Collective Strength)",
          desc: "शेतमालाचे सामूहिक संकलन आणि प्रतवारी करून बाजारपेठेत अधिक चांगली घासाघीस करण्याची क्षमता (Bargaining Power).",
          icon: FaUsersLine,
        },
        {
          num: "०३",
          title: "नवीन व्यावसायिक संधी (Business Opportunities)",
          desc: "मूल्यवर्धन, प्रतवारी, पॅकेजिंग आणि विविध कृषी-प्रक्रिया उद्योगांच्या माध्यमातून उत्पन्नाचे नवे स्रोत निर्माण करणे.",
          icon: FaArrowTrendUp,
        },
        {
          num: "०४",
          title: "वित्तीय जोडणी (Financial Linkages)",
          desc: "खेळत्या भांडवलासाठी आणि व्यवसाय विस्तारासाठी राष्ट्रीयीकृत बँका व वित्तीय संस्थांकडून सुलभ पतपुरवठा मिळवणे.",
          icon: FaSackDollar,
        },
        {
          num: "०५",
          title: "ज्ञान व क्षमता बांधणी (Knowledge & Capacity)",
          desc: "FPO संचालक, व्यवस्थापक आणि शेतकरी सभासदांसाठी सातत्यपूर्ण व्यावसायिक प्रशिक्षण व मार्गदर्शन शिबिरे.",
          icon: FaGraduationCap,
        }
      ]
    },
    en: {
      badge: "Key Advantages",
      heading: "Strategic Benefits of Our Network",
      sub: "Empowering farmer institutions with aggregate market power, credit access, and operational scale.",
      benefits: [
        {
          num: "01",
          title: "Better Market Access",
          desc: "Direct integration with wider institutional buyer networks, processors, and national-level trade channels.",
          icon: FaGlobe,
        },
        {
          num: "02",
          title: "Collective Strength",
          desc: "Significantly greater bargaining power and margin protection achieved through farm-gate produce aggregation.",
          icon: FaUsersLine,
        },
        {
          num: "03",
          title: "Business Opportunities",
          desc: "Enabling FPOs to develop scalable value-addition verticals, grading infrastructure, and sustainable revenue streams.",
          icon: FaArrowTrendUp,
        },
        {
          num: "04",
          title: "Financial Linkages",
          desc: "Accelerated facilitation of working capital lines and structured finance through credible banking partners.",
          icon: FaSackDollar,
        },
        {
          num: "05",
          title: "Knowledge & Skill Building",
          desc: "Continuous executive training programs covering legal governance, financial auditing, and modern supply chains.",
          icon: FaGraduationCap,
        }
      ]
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-sans text-gray-800 select-none overflow-hidden border-t border-gray-100">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Header - Center Aligned & font-bold (Not extrabold/black) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center mb-14 lg:mb-18"
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

        {/* 2-Column Split: Left Sticky Image | Right Editorial List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* डावी बाजू: प्रीमियम स्टिकी इमेज (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28 relative order-2 lg:order-1"
          >
            {/* Background Geometric Accent Wireframe */}
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#2e6930]/30 hidden sm:block pointer-events-none" />

            {/* Image Container */}
            <div className="relative z-10 w-full h-[450px] sm:h-[520px] lg:h-[580px] bg-black overflow-hidden shadow-xl rounded-none border border-gray-200">
              <img
                src="/fpo-collective-marketing-maharashtra.jpg"
                alt="Agricultural growth and collective empowerment"
                className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />

              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1611]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Gold-Green Accent Stripe */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#2e6930] via-[#f4d058] to-[#2e6930]" />

              {/* Bottom Visual Tag */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-[11px] font-semibold tracking-widest text-[#f4d058] uppercase block mb-1">
                  Collective Value
                </span>
                <p className="text-xs sm:text-sm font-medium text-gray-200 leading-snug">
                  Transforming Aggregated Produce into High-Yield Business Power
                </p>
              </div>
            </div>
          </motion.div>

          {/* उजवी बाजू: क्लीन लिस्ट लेआउट (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2 divide-y divide-gray-200">
            {t.benefits.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group py-6 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-6 hover:pl-2 transition-all duration-300"
                >
                  {/* Serial Number */}
                  <span className="text-base sm:text-lg font-bold text-gray-300 group-hover:text-[#f4d058] transition-colors duration-300 pt-0.5 shrink-0">
                    {item.num}
                  </span>

                  {/* Icon Indicator */}
                  <div className="text-lg sm:text-xl text-[#2e6930] group-hover:text-[#2e6930] pt-1 shrink-0">
                    <IconComponent />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight mb-1.5 group-hover:text-[#2e6930] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
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

export default NetworkBenefits;