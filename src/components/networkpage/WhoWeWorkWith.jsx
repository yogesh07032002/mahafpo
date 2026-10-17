import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsersViewfinder, 
  FaBuildingColumns, 
  FaHandHoldingDroplet, 
  FaHandshakeSimple, 
  FaVault 
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const WhoWeWorkWith = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    mr: {
      badge: "हितधारक व भागीदार",
      heading: "आम्ही कोणासोबत काम करतो",
      sub: "महाराष्ट्रातील कृषी मूल्यसाखळी सक्षम करण्यासाठी विविध संस्था आणि घटकांसोबत धोरणात्मक सहकार्य.",
      partners: [
        {
          title: "शेतकरी उत्पादक कंपन्या (FPCs)",
          desc: "व्यवसाय विकास, थेट बाजारपेठ जोडणी आणि संस्थात्मक सक्षमीकरणासाठी सर्वसमावेशक मार्गदर्शन आणि सहकार्य.",
          icon: FaUsersViewfinder,
          accent: "border-[#2e6930]"
        },
        {
          title: "सहकारी संस्था (Cooperative Institutions)",
          desc: "सामूहिक कृषी विकास, परस्पर सहकार्य आणि ग्रामीण अर्थव्यवस्थेच्या विस्तारासाठी भागीदारी संधींची निर्मिती.",
          icon: FaBuildingColumns,
          accent: "border-[#f4d058]"
        },
        {
          title: "पाणी वापर संस्था (Water User Organizations)",
          desc: "शेती आणि जलसंपदा व्यवस्थापनात कार्यरत संस्थांना एकत्र जोडून शाश्वत शेतीसाठी पायाभूत सुविधा बळकट करणे.",
          icon: FaHandHoldingDroplet,
          accent: "border-[#2e6930]"
        },
        {
          title: "खरेदीदार व कॉर्पोरेट्स (Buyers & Corporates)",
          desc: "शेतमालासाठी थेट, पारदर्शक आणि संस्थात्मक बाजारपेठांची उपलब्धता करून देऊन मूल्यवर्धन साध्य करणे.",
          icon: FaHandshakeSimple,
          accent: "border-[#f4d058]"
        },
        {
          title: "वित्तीय संस्था (Financial Institutions)",
          desc: "खेळते भांडवल, कृषी कर्ज आणि इतर व्यावसायिक गरजांसाठी सुलभ वित्तीय जोडणी (Financial Linkages) उपलब्ध करणे.",
          icon: FaVault,
          accent: "border-[#2e6930]"
        }
      ]
    },
    en: {
      badge: "Stakeholders & Alliances",
      heading: "Who We Work With",
      sub: "Strategic collaboration across the agricultural ecosystem to drive enterprise scalability.",
      partners: [
        {
          title: "Farmer Producer Companies",
          desc: "Supporting FPCs in business development, market access and organizational strengthening.",
          icon: FaUsersViewfinder,
          accent: "border-[#2e6930]"
        },
        {
          title: "Cooperative Institutions",
          desc: "Creating opportunities for collaboration and collective agricultural development.",
          icon: FaBuildingColumns,
          accent: "border-[#f4d058]"
        },
        {
          title: "Water User Organizations",
          desc: "Connecting organizations involved in agriculture and water resource management.",
          icon: FaHandHoldingDroplet,
          accent: "border-[#2e6930]"
        },
        {
          title: "Buyers & Corporates",
          desc: "Creating direct and institutional market opportunities for agricultural produce.",
          icon: FaHandshakeSimple,
          accent: "border-[#f4d058]"
        },
        {
          title: "Financial Institutions",
          desc: "Facilitating financial linkages for working capital and business requirements.",
          icon: FaVault,
          accent: "border-[#2e6930]"
        }
      ]
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#fbfdfa] py-16 sm:py-20 lg:py-24 font-sans text-gray-800 select-none overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-14 lg:mb-18"
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#2e6930] uppercase block mb-2">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight font-black text-gray-950 mb-3">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            {t.sub}
          </p>
        </motion.div>

        {/* 2-Column Split: Left 5 Cards | Right Premium Sticky Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* डावी बाजू: 5 शार्प व प्रीमियम कार्ड्स (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {t.partners.map((partner, idx) => {
              const IconComponent = partner.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ x: 6 }}
                  className={`group relative bg-white border border-gray-200/90 border-l-4 ${partner.accent} p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 rounded-none cursor-default`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    
                    {/* Square Sharp Icon Box */}
                    <div className="w-12 h-12 bg-[#f4f8f2] border border-[#2e6930]/15 flex items-center justify-center text-[#2e6930] group-hover:bg-[#2e6930] group-hover:text-[#f4d058] transition-colors duration-300 shrink-0">
                      <IconComponent className="text-xl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-1 group-hover:text-[#2e6930] transition-colors duration-200">
                        {partner.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        {partner.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* उजवी बाजू: प्रीमियम स्टिकी इमेज पॅनेल (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28 relative"
          >
            {/* Background Geometric Accent Wireframe */}
            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#2e6930]/30 hidden sm:block pointer-events-none" />

            {/* Image Container */}
            <div className="relative z-10 w-full h-[460px] sm:h-[550px] lg:h-[620px] bg-black overflow-hidden shadow-xl rounded-none border border-gray-200">
              <img
                src="/fpo-market-linkage-india.jpg"
                alt="Agricultural collaboration and stakeholder ecosystem"
                className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />

              {/* Subtle Gradient & Brand Accent Bar */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1611]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Gold-Green Accent Stripe */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#2e6930] via-[#f4d058] to-[#2e6930]" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-[11px] font-bold tracking-widest text-[#f4d058] uppercase block mb-1">
                  MAHAFPO Federation
                </span>
                <p className="text-xs sm:text-sm font-semibold text-gray-200 leading-snug">
                  Uniting Rural Collective Strengths for Industrial & Market Scale
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeWorkWith;