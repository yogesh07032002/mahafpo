import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandshakeAngle } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const HomeCTASection = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    mr: {
      tag: "चला एकत्र येऊया",
      heading: "एकत्रितपणे, आपण अधिक सक्षम शेतकरी संस्था उभारू शकतो",
      text: "तुम्ही शेतकरी उत्पादक संस्था (FPO), सहकारी संस्था किंवा शेतकरी संघटना आहात आणि तुमच्या व्यवसायाच्या संधी व बाजारपेठेतील पोहोच वाढवू इच्छिता? महाएफपीओ फेडरेशनशी आजच संपर्क साधा.",
      btnText: "आमच्याशी संपर्क साधा"
    },
    en: {
      tag: "GET IN TOUCH",
      heading: "Together, We Can Build Stronger Farmer Enterprises",
      text: "Are you an FPO, cooperative institution or farmer organization looking to expand your business opportunities and market reach? Connect with MAHAFPO Federation.",
      btnText: "Connect With Us"
    }
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-sans text-gray-800 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Top Accent Icon & Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f8ed] border border-[#245C45]/20 mb-5"
        >
          <FaHandshakeAngle className="text-[#245C45] text-sm" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#245C45]">
            {t.tag}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#173F32] tracking-tight leading-[1.2] max-w-3xl mx-auto mb-6"
        >
          {t.heading}
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
        >
          {t.text}
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-[#245C45] hover:bg-[#173F32] text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-full shadow-lg shadow-[#245C45]/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>{t.btnText}</span>
            <FaArrowRight className="text-xs text-[#f4d058] transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeCTASection;