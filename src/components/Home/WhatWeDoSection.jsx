import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../context/LanguageContext';

const WhatWeDoSection = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    mr: {
      tag: "आमचे कार्य",
      title: "शेतकरी उत्पादक संस्थांसाठी सर्वसमावेशक सेवा व सहकार्य.",
      desc: "महाएफपीओ फेडरेशन राज्यभरातील शेतकरी उत्पादक कंपन्यांना सक्षम करण्यासाठी व्यवसाय विकास, मूल्यवर्धन आणि शाश्वत बाजारपेठ निर्माण करण्याचे कार्य करते.",
      items: [
        {
          num: "१.",
          title: "बाजारपेठ जोडणी (Market Linkages)",
          desc: "शेतमालाला योग्य दर आणि हमी मिळवून देण्यासाठी FPOs ला खरेदीदार, कॉर्पोरेट्स, व्यापारी आणि संस्थात्मक बाजारपेठांशी जोडणे."
        },
        {
          num: "२.",
          title: "वित्तीय सुलभता (Financial Facilitation)",
          desc: "विविध वित्तीय संस्थांशी भागीदारी करून FPOs ला खेळत्या भांडवलाची उपलब्धता आणि योग्य वित्तीय उपाय मिळवून देणे."
        },
        {
          num: "३.",
          title: "एकत्रीकरण व सामूहिक विपणन (Aggregation & Marketing)",
          desc: "शेतकऱ्यांचा शेतमाल एकत्र करून सामूहिक खरेदी, साठवणूक आणि मोठ्या प्रमाणावर थेट विपणन करण्याची क्षमता निर्माण करणे."
        },
        {
          num: "४.",
          title: "प्रशिक्षण व क्षमता बांधणी (Training & Capacity)",
          desc: "FPO चे नेतृत्व व व्यवस्थापन कौशल्य बळकट करण्यासाठी विशेष कार्यशाळा, कॉन्क्लेव्ह आणि ज्ञान-देवाणघेवाण सत्रे आयोजित करणे."
        }
      ]
    },
    en: {
      tag: "WHAT WE DO",
      title: "Empowering farmer enterprises with comprehensive solutions.",
      desc: "MAHAFPO Federation works closely with Farmer Producer Organizations across Maharashtra to build sustainable business models and market access.",
      items: [
        {
          num: "1.",
          title: "Market Linkages",
          desc: "Connecting FPOs with buyers, corporates, traders and institutional markets."
        },
        {
          num: "2.",
          title: "Financial Facilitation",
          desc: "Facilitating access to working capital and suitable financial solutions through partnerships with financial institutions."
        },
        {
          num: "3.",
          title: "Aggregation & Collective Marketing",
          desc: "Enabling FPOs to aggregate agricultural produce and undertake collective procurement, storage and marketing."
        },
        {
          num: "4.",
          title: "Training & Capacity Building",
          desc: "Organizing workshops, conclaves and knowledge-sharing programs for FPO leadership and management."
        }
      ]
    }
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#eee9df] py-16 sm:py-20 lg:py-24 font-sans text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Intro & 2x2 Feature List */}
          <div className="lg:col-span-7 pr-0 lg:pr-6">
            <motion.span 
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs sm:text-sm font-semibold tracking-widest text-[#a85a3a] uppercase block mb-3"
            >
              {t.tag}
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-[#1f4032] mb-4"
            >
              {t.title}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base text-gray-600 leading-relaxed mb-10 max-w-2xl"
            >
              {t.desc}
            </motion.p>

            {/* 2x2 Text Grid with Re-triggerable Stagger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {t.items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex flex-col cursor-default"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#1f4032] mb-2 flex items-baseline gap-1.5">
                    <span className="text-[#a85a3a] font-serif">{item.num}</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Overlapping Images Layout with Yellow Borders */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-h-[420px] sm:min-h-[500px]">
            
            {/* Top Right Larger Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: -30, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="w-64 sm:w-80 h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C9A227] absolute top-0 right-0 sm:right-4 z-0 cursor-pointer"
            >
              <img
                src="/FPO-agriculture-India.jpg"
                alt="Agricultural Grain & Harvest"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Bottom Left Overlapping Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
              className="w-56 sm:w-72 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C9A227] absolute bottom-0 left-0 sm:left-4 z-10 cursor-pointer bg-white"
            >
              <img
                src="/FPO-training-India.jpg"
                alt="Farming Fields & Produce"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;