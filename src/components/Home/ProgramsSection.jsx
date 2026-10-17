import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaPeopleGroup, 
  FaChalkboardUser, 
  FaShop, 
  FaCartFlatbed, 
  FaBoxesStacked, 
  FaLandmarkFlag,
  FaArrowRight 
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const ProgramsSection = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    mr: {
      tag: "उपक्रम व कार्यक्रम",
      heading: "एफपीओ सक्षमीकरणासाठी ",
      headingHighlight: "प्रमुख उपक्रम",
      btnText: "सर्व उपक्रम पहा",
      programs: [
        {
          icon: FaPeopleGroup,
          title: "महाएफपीओ कॉन्क्लेव्ह",
          desc: "तज्ज्ञ, खरेदीदार आणि FPO प्रतिनिधींना एकत्र आणून विचारमंथन व नवीन संधी निर्माण करणारे संमेलन."
        },
        {
          icon: FaChalkboardUser,
          title: "FPO प्रशिक्षण कार्यक्रम",
          desc: "संस्था चालवण्यासाठी लागणारे व्यवस्थापकीय, कायदेशीर आणि उद्योजकतेचे व्यावहारिक प्रशिक्षण."
        },
        {
          icon: FaShop,
          title: "बाजारपेठ जोडणी उपक्रम",
          desc: "शेतमालाला चांगला दर मिळावा म्हणून थेट संस्थात्मक खरेदीदार व मोठ्या कंपन्यांशी व्यावसायिक करार."
        },
        {
          icon: FaCartFlatbed,
          title: "सामूहिक खरेदी मोहीम",
          desc: "बियाणे, खते आणि शेती निविष्ठांची घाऊक दरात सामूहिक खरेदी करून उत्पादन खर्च कमी करणे."
        },
        {
          icon: FaBoxesStacked,
          title: "शेतमाल एकत्रीकरण व साठवणूक",
          desc: "अल्पभूधारक शेतकऱ्यांचा शेतमाल एकत्र करून साठवणूक, प्रतवारी आणि मोठ्या प्रमाणावर विक्री करणे."
        },
        {
          icon: FaLandmarkFlag,
          title: "वित्तीय जोडणी उपक्रम",
          desc: "बँका आणि वित्तीय संस्थांच्या सहकार्याने FPOs साठी सुलभ खेळत्या भांडवलाची व्यवस्था करणे."
        }
      ]
    },
    en: {
      tag: "PROGRAMS & INITIATIVES",
      heading: "Strategic Initiatives for ",
      headingHighlight: "FPO Growth",
      btnText: "View All Programs",
      programs: [
        {
          icon: FaPeopleGroup,
          title: "MAHAFPO Conclave",
          desc: "Flagship summits bringing together FPOs, industry leaders, policymakers, and buyers."
        },
        {
          icon: FaChalkboardUser,
          title: "FPO Training Programs",
          desc: "Specialized workshops covering governance, business operations, and financial management."
        },
        {
          icon: FaShop,
          title: "Market Linkage Initiatives",
          desc: "Buyer-seller meets connecting producer companies directly with institutional markets."
        },
        {
          icon: FaCartFlatbed,
          title: "Collective Procurement",
          desc: "Aggregating input demand to secure competitive wholesale pricing on farm inputs."
        },
        {
          icon: FaBoxesStacked,
          title: "Agricultural Produce Aggregation",
          desc: "Enabling farm-gate aggregation, sorting, and grading to build supply volume."
        },
        {
          icon: FaLandmarkFlag,
          title: "Financial Linkage Initiatives",
          desc: "Facilitating access to formal credit channels, working capital, and credit schemes."
        }
      ]
    }
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <section className="w-full bg-[#eee9df] overflow-hidden border-b border-gray-100">
      {/* 50% - 50% Equal Split Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* Left Side: Exactly 50% Width Image with Smooth Zoom-in Transition */}
        <div className="relative w-full h-72 sm:h-96 lg:h-auto min-h-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.15, opacity: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/agriculture-seminar-India.jpg"
            alt="MAHAFPO Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#173F32]/20 mix-blend-multiply pointer-events-none" />
        </div>

        {/* Right Side: Exactly 50% Content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
          
          {/* Header Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-gray-950">
              {t.heading}
              <span className="text-[#245C45]">{t.headingHighlight}</span>
            </h2>
          </motion.div>

          {/* 6 Points (2-Column Grid with Staggered Entrance & Hover Motion) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
            {t.programs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-white/80 transition-colors duration-200"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-8 h-8 rounded-lg bg-[#eef6ec] text-[#245C45] flex items-center justify-center text-sm shrink-0 mt-0.5 shadow-sm"
                  >
                    <IconComponent />
                  </motion.div>
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-0.5 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-6 pt-3 border-t border-gray-100"
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-2.5 bg-[#245C45] hover:bg-[#1a4433] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-md shadow-[#245C45]/20 transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>{t.btnText}</span>
              <FaArrowRight className="text-[10px] text-[#f4d058] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;