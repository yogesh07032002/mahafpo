import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare, FaBriefcase, FaHandshakeAngle } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const BusinessDevelopmentCTA = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    mr: {
      tag: "व्यवसाय विकास व सक्षमीकरण",
      heading: "FPOs ना शाश्वत व नफाक्षम उद्योग उभारणीत पाठबळ",
      desc: "महाएफपीओ फेडरेशन शेतकरी संस्थांना केवळ शेतमाल संकलनापुरते मर्यादित न ठेवता, त्यांना दीर्घकालीन, व्यावसायिकदृष्ट्या सक्षम आणि नफाक्षम कृषी उद्योगांमध्ये रूपांतरित करण्यासाठी धोरणात्मक सहकार्य करते.",
      btnText: "व्यवसाय सहकार्यासाठी संपर्क करा",
      subText: "संस्थात्मक मार्गदर्शन • मूल्य साखळी विकास • दीर्घकालीन व्यावसायिक स्थैर्य"
    },
    en: {
      tag: "Business Development & Scaling",
      heading: "Helping FPOs Build Sustainable Businesses",
      desc: "The Federation focuses on enabling FPOs to move beyond raw aggregation and develop enduring, commercially viable, and scalable agricultural business models.",
      btnText: "Explore Business Collaboration",
      subText: "Institutional Strategy • Value Chain Scaling • Commercial Viability"
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#fdfcf7] py-8 sm:py-8 font-sans text-gray-800 border-y-2 border-[#f4d058]/80 select-none relative overflow-hidden">
      
      {/* डाव्या बाजूला सूक्ष्म ब्रँड ॲक्सेंट बार */}
      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#f4d058]" />
      
      {/* उजव्या कोपऱ्यात हलका वॉटरमार्क ॲक्सेंट आयकॉन */}
      <div className="absolute -right-8 -bottom-8 text-gray-200/40 pointer-events-none hidden lg:block">
        <FaBriefcase className="text-[160px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* डावी बाजू: संक्षिप्त टॅग, हेडिंग व सविस्तर मजकूर */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#2e6930]" />
              <span className="text-xs font-semibold tracking-widest text-[#9e7a0e] uppercase">
                {t.tag}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
              {t.heading}
            </h2>

            <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed mb-4">
              {t.desc}
            </p>

            <span className="text-xs text-gray-500 font-medium tracking-wide block">
              {t.subText}
            </span>
          </div>

          {/* उजवी बाजू: प्रीमियम ॲक्शन बटन */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end shrink-0">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#f4d058] hover:bg-[#eac445] text-gray-950 text-xs sm:text-sm font-bold tracking-wider px-7 py-3.5 rounded-none shadow-sm hover:shadow-md border border-[#e0bd45] transition-all duration-200 uppercase"
              >
                <FaHandshakeAngle className="text-base text-gray-900" />
                <span>{t.btnText}</span>
                <FaArrowUpRightFromSquare className="text-xs text-gray-900" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessDevelopmentCTA;