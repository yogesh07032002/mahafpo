import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaBoxesStacked, FaArrowUpRightDots, FaScaleBalanced } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const AggregationStrip = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    mr: {
      tag: "सामूहिक एकत्रीकरण",
      heading: "मोठ्या संधींसाठी सामूहिक शेतमाल संकलन",
      text: "शेतकऱ्यांचा थोड्या प्रमाणातील शेतीमाल जेव्हा सामूहिकरीत्या संकलित केला जातो, तेव्हा त्याला मोठी व्यावसायिक ताकद प्राप्त होते. महाएफपीओ शेतकरी उत्पादक संस्थांना संकलन-आधारित व्यवसाय मॉडेल्स विकसित करण्यासाठी सहकार्य करते; ज्यामुळे व्यवसायाचा विस्तार, कार्यक्षमता आणि थेट बाजारपेठ प्रवेश अधिक सुलभ होतो.",
      metrics: [
        { icon: FaBoxesStacked, label: "शेतमाल संकलन क्षमता", val: "मोठ्या प्रमाणावर पुरवठा" },
        { icon: FaScaleBalanced, label: "उत्तम घासाघीस ताकद", val: "वाजवी दर हमी" },
        { icon: FaArrowUpRightDots, label: "मूल्यवर्धन साखळी", val: "कमी वाहतूक व हाताळणी खर्च" }
      ]
    },
    en: {
      tag: "Collective Aggregation",
      heading: "Collective Aggregation for Greater Opportunity",
      text: "Small quantities of agricultural produce can become commercially significant when aggregated collectively. MAHAFPO supports FPOs in developing aggregation-based business models that can improve scale, efficiency and market access.",
      metrics: [
        { icon: FaBoxesStacked, label: "Volume Aggregation", val: "Commercial Scale" },
        { icon: FaScaleBalanced, label: "Bargaining Advantage", val: "Fair Price Realization" },
        { icon: FaArrowUpRightDots, label: "Supply Efficiency", val: "Optimized Logistics" }
      ]
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="relative w-full py-20 sm:py-24 bg-fixed bg-center bg-cover select-none font-sans overflow-hidden"
      style={{
        backgroundImage: `url('/fpo-conclave-maharashtra.avif')`
      }}
    >
      {/* 1. Deep Dark Gradient Overlay for Maximum Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07130a]/95 via-[#0a1b0e]/90 to-[#07130a]/95 z-[1]" />

      {/* 2. Top & Bottom Golden Border Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f4d058] to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2e6930] to-transparent z-[2]" />

      {/* 3. Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle Tag */}
          <span className="inline-block text-xs font-semibold tracking-widest text-[#f4d058] uppercase mb-3 px-3 py-1 bg-white/5 border border-[#f4d058]/30">
            {t.tag}
          </span>

          {/* Heading (Balanced Bold, No Extrabold) */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug mb-5">
            {t.heading}
          </h2>

          {/* Body Content */}
          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            {t.text}
          </p>

          {/* 3 Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {t.metrics.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center"
                >
                  <IconComp className="text-[#f4d058] text-lg mb-2" />
                  <span className="text-xs text-gray-300 font-medium">{item.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-white mt-0.5">{item.val}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AggregationStrip;