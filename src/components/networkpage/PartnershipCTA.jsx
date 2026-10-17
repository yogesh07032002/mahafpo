import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare, FaHandshake } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const PartnershipCTA = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    mr: {
      tag: "भागीदारी संधी",
      heading: "FPO परिसंस्थेचा एक भाग व्हा",
      text: "तुम्ही खरेदीदार, वित्तीय संस्था अथवा शेतकरी संस्थांसोबत काम करण्यास उत्सुक भागीदार आहात का? चला, शाश्वत भागीदारी घडवूया.",
      btnText: "आमच्यासोबत जोडा"
    },
    en: {
      tag: "PARTNERSHIP OPPORTUNITY",
      heading: "Be Part of the FPO Ecosystem",
      text: "Are you an organization, buyer, financial institution or development partner interested in working with farmer organizations? Let's build meaningful partnerships.",
      btnText: "Partner With Us"
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#fdfcf7] py-6 sm:py-8 font-sans text-gray-800 border-y-2 border-[#f4d058]/80 select-none relative overflow-hidden">
      
      {/* डाव्या बाजूला सूक्ष्म गोल्डन इंडिकेटर बार */}
      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#f4d058]" />

      <div className="max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
          
          {/* डावी बाजू: संक्षिप्त टायटल व मजकूर */}
          <div className="flex items-center gap-4 sm:gap-5 flex-1">
            {/* Soft Yellow Icon Badge */}
            <div className="w-11 h-11 bg-[#fbf2cb] border border-[#f4d058] flex items-center justify-center text-gray-900 shrink-0 shadow-sm rounded-none">
              <FaHandshake className="text-xl text-[#b88e10]" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-0.5">
                <span className="text-[10px] font-bold tracking-widest text-[#9e7a0e] uppercase">
                  {t.tag}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight leading-snug">
                {t.heading}
              </h3>
              
              <p className="text-xs sm:text-[13px] text-gray-600 font-normal leading-relaxed mt-0.5 max-w-4xl">
                {t.text}
              </p>
            </div>
          </div>

          {/* उजवी बाजू: प्रीमियम गोल्डन-यलो बटन */}
          <div className="w-full lg:w-auto flex justify-end shrink-0">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#f4d058] hover:bg-[#eac445] text-gray-950 text-xs sm:text-sm font-bold tracking-wider px-6 py-3 rounded-none shadow-sm hover:shadow-md border border-[#e0bd45] transition-all duration-200 uppercase"
              >
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

export default PartnershipCTA;