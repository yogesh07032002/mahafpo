import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsersGear, 
  FaShop, 
  FaChartPie, 
  FaGraduationCap 
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const ServicesCards = () => {
  const { language } = useContext(LanguageContext);

  // 🌍 केवळ मराठी आणि इंग्रजी भाषांतर (Exact Content)
  const translations = {
    mr: {
      heading: "आमचे प्रमुख कार्य",
      cards: [
        {
          icon: FaUsersGear,
          title: "शेतकरी सक्षमीकरण",
          englishTitle: "Farmer Empowerment",
          desc: "सामूहिक संघटन, संसाधनांची सहज उपलब्धता आणि बळकट व्यावसायिक संधींच्या माध्यमातून अल्पभूधारक व सीमांत शेतकऱ्यांचे सक्षमीकरण करणे."
        },
        {
          icon: FaShop,
          title: "बाजारपेठ जोडणी",
          englishTitle: "Market Access",
          desc: "शेतमालाला योग्य दर मिळवून देण्यासाठी FPOs ला थेट खरेदीदार, कॉर्पोरेट्स, व्यापारी आणि संस्थात्मक बाजारपेठांशी जोडणे."
        },
        {
          icon: FaChartPie,
          title: "व्यवसाय विकास",
          englishTitle: "Business Development",
          desc: "FPOs साठी शाश्वत व्यवसाय आराखडा तयार करणे, कार्यक्षमता सुधारणे आणि त्यांचा बाजारातील प्रभाव व विक्री वाढवणे."
        },
        {
          icon: FaGraduationCap,
          title: "ज्ञान व क्षमता बांधणी",
          englishTitle: "Knowledge & Capacity Building",
          desc: "FPO चे उत्तम व्यवस्थापन आणि उद्योजकतेला बळ देण्यासाठी आवश्यक कार्यशाळा, प्रत्यक्ष प्रशिक्षण आणि मार्गदर्शन पुरवणे."
        }
      ]
    },
    en: {
      heading: "What We Do",
      cards: [
        {
          icon: FaUsersGear,
          title: "Farmer Empowerment",
          englishTitle: "",
          desc: "Empowering small and marginal farmers through collective organization, better access to resources and stronger business opportunities."
        },
        {
          icon: FaShop,
          title: "Market Access",
          englishTitle: "",
          desc: "Connecting FPOs with buyers, corporates, traders and institutional markets to create better opportunities for agricultural produce."
        },
        {
          icon: FaChartPie,
          title: "Business Development",
          englishTitle: "",
          desc: "Supporting FPOs in developing sustainable business models, improving operations and expanding their market presence."
        },
        {
          icon: FaGraduationCap,
          title: "Knowledge & Capacity Building",
          englishTitle: "",
          desc: "Providing training, workshops and practical guidance to strengthen FPO management and entrepreneurship."
        }
      ]
    }
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#fbfdfa] pt-2 sm:pt-2 pb-20 sm:pb-28 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header with Smooth Fade Down */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-black leading-[1.2] tracking-tight text-gray-900">
            {t.heading}
          </h2>
        </motion.div>

        {/* 4 Cards Grid with Staggered Entrance & Interactive Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {t.cards.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.12, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  y: -8, 
                  transition: { type: "spring", stiffness: 350, damping: 20 } 
                }}
                className="group relative bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:border-[#2e6930] transition-colors duration-300"
              >
                {/* Icon Container with Spring Rotation Animation on Hover */}
                <motion.div 
                  whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 rounded-2xl bg-[#f1f8ed] text-[#2e6930] flex items-center justify-center text-3xl mb-5 group-hover:bg-[#2e6930] group-hover:text-white transition-colors duration-300 shadow-inner"
                >
                  <IconComponent />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1 leading-snug group-hover:text-[#2e6930] transition-colors duration-200">
                  {card.title}
                </h3>

                {/* Subtitle / English title (मराठी निवडलेली असताना) */}
                {language === 'mr' && card.englishTitle && (
                  <span className="text-xs font-semibold text-gray-400 mb-4 block uppercase tracking-wider">
                    {card.englishTitle}
                  </span>
                )}

                {/* Description */}
                <p className={`text-sm leading-relaxed text-gray-600 font-normal ${language !== 'mr' ? 'mt-3' : ''}`}>
                  {card.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="w-8 h-1 bg-gray-200 group-hover:w-16 group-hover:bg-[#f4d058] rounded-full mt-6 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesCards;