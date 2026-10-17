import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaBuildingWheat, 
  FaCartShopping, 
  FaLandmark, 
  FaStore 
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const NetworkFlowSection = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    mr: {
      heading: "शेतकरी संस्थांचे विस्तारणारे नेटवर्क",
      desc: "महाएफपीओ फेडरेशन राज्यभरातील शेतकरी उत्पादक कंपन्या, सहकारी संस्था आणि पाणी वापर संस्थांना एकत्र आणून शेतकरी-केंद्रित व्यवसायांसाठी एक बळकट परिसंस्था निर्माण करते.",
      steps: [
        {
          title: "FPO",
          desc: "शेतकरी उत्पादक संस्था",
          icon: FaUsers,
        },
        {
          title: "MAHAFPO",
          desc: "मध्यवर्ती महासंघ",
          icon: FaBuildingWheat,
        },
        {
          title: "Buyers",
          desc: "थेट खरेदीदार व कॉर्पोरेट्स",
          icon: FaCartShopping,
        },
        {
          title: "Financial Institutions",
          desc: "वित्तीय व बँकिंग संस्था",
          icon: FaLandmark,
        },
        {
          title: "Markets",
          desc: "विस्तृत कृषी बाजारपेठा",
          icon: FaStore,
        }
      ]
    },
    en: {
      heading: "A Growing Network of Farmer Organizations",
      desc: "MAHAFPO Federation brings together Farmer Producer Companies, cooperative institutions and water user organizations to create a stronger ecosystem for farmer-led businesses across Maharashtra.",
      steps: [
        {
          title: "FPO",
          desc: "Farmer Producer Organizations",
          icon: FaUsers,
        },
        {
          title: "MAHAFPO",
          desc: "State Apex Federation",
          icon: FaBuildingWheat,
        },
        {
          title: "Buyers",
          desc: "Institutional Buyers & Traders",
          icon: FaCartShopping,
        },
        {
          title: "Financial Institutions",
          desc: "Credit & Capital Partners",
          icon: FaLandmark,
        },
        {
          title: "Markets",
          desc: "Direct & Structured Markets",
          icon: FaStore,
        }
      ]
    }
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-sans text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-[#1f4032] mb-4">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {t.desc}
          </p>
        </motion.div>

        {/* Process Flow Grid (इमेजमधील डिझाइनप्रमाणे) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4 relative">
          {t.steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center"
              >
                
                {/* Curved Dashed Connector Line (मोठ्या स्क्रीनवर दोन आयकॉनच्या मधे दिसेल) */}
                {idx < t.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[62%] w-[76%] h-8 pointer-events-none z-0">
                    <svg className="w-full h-full" viewBox="0 0 100 30" fill="none">
                      <motion.path
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.15 + 0.2 }}
                        d="M 5 22 Q 50 2 95 22"
                        stroke="#c4b59d"
                        strokeWidth="1.8"
                        strokeDasharray="4 4"
                        fill="transparent"
                      />
                    </svg>
                  </div>
                )}

                {/* Circular Icon with Floating Accent Dots */}
                <div className="relative mb-5 z-10">
                  {/* वरचा उजवा फ्लोटिंग ॲक्सेंट डॉट */}
                  <motion.span 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: idx * 0.2 }}
                    className="absolute -top-1 -right-2 w-3.5 h-3.5 rounded-full bg-[#d6c4a8]" 
                  />
                  
                  {/* खालचा डावा लहान ॲक्सेंट डॉट */}
                  <motion.span 
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: idx * 0.2 + 0.3 }}
                    className="absolute -bottom-1 -left-2 w-2.5 h-2.5 rounded-full bg-[#c9b392]" 
                  />

                  {/* मुख्य गोल कार्ड */}
                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#f0eae0] flex items-center justify-center text-[#245C45] text-2xl shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <IconComponent />
                  </motion.div>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-gray-500 max-w-[190px] leading-relaxed font-normal">
                  {step.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default NetworkFlowSection;