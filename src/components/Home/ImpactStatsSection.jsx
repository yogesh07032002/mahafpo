import React, { useContext, useMemo } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const ImpactStatsSection = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    mr: {
      stats: [
        {
          number: "2019",
          label: "स्थापना वर्ष"
        },
        {
          number: "500+",
          label: "एफपीओ नेटवर्क"
        },
        {
          number: "36",
          label: "महाराष्ट्र जिल्हे"
        },
        {
          number: "100%",
          label: "शेतकरी दृष्टिकोन"
        }
      ]
    },
    en: {
      stats: [
        {
          number: "2019",
          label: "FEDERATION ESTABLISHED"
        },
        {
          number: "500+",
          label: "FPO NETWORK"
        },
        {
          number: "36",
          label: "DISTRICTS COVERED"
        },
        {
          number: "100%",
          label: "FARMER-CENTRIC APPROACH"
        }
      ]
    }
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <section 
      className="relative w-full py-16 sm:py-20 font-sans bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('/farmer-producer-company-india.avif')`
      }}
    >
      {/* 🌿 Deep Green + Golden Yellow Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e271e]/95 via-[#173F32]/88 to-[#4a3b0d]/88" />

      {/* Stats Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
          {t.stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fde047] tracking-tight mb-2 drop-shadow-sm">
                {item.number}
              </span>
              <span className="text-xs sm:text-sm text-emerald-100 font-medium uppercase tracking-wider leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;