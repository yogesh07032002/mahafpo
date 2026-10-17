import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaWheatAwn, FaHandshakeAngle, FaScaleBalanced, FaUsersViewfinder } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const WhoWeAreInfo = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    mr: {
      lead: "महाएफपीओ फेडरेशन हे महाराष्ट्रभरातील शेतकरी उत्पादक कंपन्या (FPCs), सहकारी संस्था आणि पाणी वापर संस्थांना एकाच छत्राखाली आणून त्यांच्या क्षमतांचे सक्षमीकरण करणारे राज्यस्तरीय व्यासपीठ आहे.",
      p1: "आम्ही शेतकरी-चालित संस्थांना केवळ पारंपरिक शेतमाल उत्पादक न ठेवता, त्यांना व्यावसायिकदृष्ट्या सक्षम, स्वतंत्र आणि शाश्वत कृषी उद्योग (Agri-Enterprises) बनवण्यासाठी धोरणात्मक सहकार्य करतो. गावपातळीवरील अल्पभूधारक शेतकऱ्यांना एकत्र आणून त्यांच्या सामूहिक शक्तीला संस्थात्मक रूप देणे हा आमचा मूळ पाया आहे.",
      p2: "थेट बाजारपेठ जोडणी, खेळत्या भांडवलाची वित्तीय सुलभता, पायाभूत कृषी सुविधा, आधुनिक मूल्यवर्धन आणि सामूहिक खरेदी-विक्री व्यवस्था या पंचसूत्रीद्वारे महाएफपीओ एक असा परिसंस्था (Ecosystem) निर्माण करत आहे, जिथे प्रत्येक शेतकरी उत्पादक कंपनी आत्मनिर्भर होऊन शेतकरी सदस्यांचा नफा वाढवू शकेल.",
      pillars: [
        {
          icon: FaWheatAwn,
          title: "मूल्य साखळी बळकटीकरण",
          desc: "शेतमालाची प्रतवारी, पॅकिंग व ब्रँडिंग करून शेतीमालाला प्रीमियम बाजारपेठा मिळवून देणे."
        },
        {
          icon: FaHandshakeAngle,
          title: "संस्थात्मक समन्वय",
          desc: "शासकीय धोरणे, संशोधन संस्था, कॉर्पोरेट खरेदीदार व FPO यांच्यात भक्कम समन्वय."
        },
        {
          icon: FaScaleBalanced,
          title: "व्यावसायिक पारदर्शकता",
          desc: "उत्तम कॉर्पोरेट गव्हर्नन्स, पारदर्शक हिशोब आणि डिजिटल अकाउंटिंगला चालना."
        },
        {
          icon: FaUsersViewfinder,
          title: "शेतकरी-केंद्रित नेतृत्व",
          desc: "शेतकऱ्यांचे स्वतःचे व्यवस्थापन कौशल्य वाढवून त्यांना निर्णयक्षम बनवणे."
        }
      ]
    },
    en: {
      lead: "MAHAFPO Federation is an apex collective platform dedicated to strengthening Farmer Producer Organizations (FPOs), cooperative institutions, and water user associations across Maharashtra.",
      p1: "We actively work towards transitioning farmer-led entities from raw production collectives into professionally managed, commercially viable, and future-ready agribusiness enterprises. By consolidating fragmented smallholder networks, we transform localized farmer groups into formidable economic engines.",
      p2: "Through institutional market linkages, accessible working capital facilitation, farm-gate post-harvest aggregation, and collective bargaining, MAHAFPO is building a resilient agrarian ecosystem where grassroots enterprises scale cooperatively and sustainably.",
      pillars: [
        {
          icon: FaWheatAwn,
          title: "Value Chain Integration",
          desc: "Enabling post-harvest grading, primary processing, and collective branding for market premiums."
        },
        {
          icon: FaHandshakeAngle,
          title: "Multi-Stakeholder Alliances",
          desc: "Bridging farm communities with corporate aggregators, financial networks, and policy channels."
        },
        {
          icon: FaScaleBalanced,
          title: "Governance & Viability",
          desc: "Instilling professional audit controls, financial compliance, and operational efficiency."
        },
        {
          icon: FaUsersViewfinder,
          title: "Farmer-Centric Leadership",
          desc: "Equipping board members and rural youth with strategic enterprise decision-making skills."
        }
      ]
    }
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#fbfdfa] py-16 sm:py-20 lg:py-24 font-sans text-gray-800 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Core Introductory Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <p className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#141d18] leading-snug tracking-tight">
            {t.lead}
          </p>
        </motion.div>

        {/* Analytical Paragraphs (2 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-l-2 border-[#2e6930] pl-5 sm:pl-6 text-justify"
          >
            {t.p1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l-2 border-[#e5a93c] pl-5 sm:pl-6 text-justify"
          >
            {t.p2}
          </motion.p>
        </div>

        {/* 4 Professional Pillar Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#2e6930] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#eef6ec] text-[#2e6930] flex items-center justify-center text-lg mb-4">
                  <IconComponent />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreInfo;