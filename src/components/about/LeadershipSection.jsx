import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaQuoteLeft, FaAward, FaBuildingColumns } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const LeadershipSection = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    mr: {
      badge: "नेतृत्व व प्रशासन",
      heading: "संस्थापक व मार्गदर्शक",
      sub: "शेतकरी उत्पादक संस्थांच्या सक्षमीकरणासाठी समर्पित दूरदृष्टी आणि नेतृत्व.",
      name: "डॉ. संजय पांडुरंग पांढरे",
      role: "संस्थापक व संचालक, महाएफपीओ फेडरेशन",
      bio1: "डॉ. संजय पांडुरंग पांढरे हे महाराष्ट्रातील कृषी सहकार आणि शेतकरी उत्पादक संस्था (FPO) चळवळीतील एक अग्रगण्य नाव आहेत. कृषी मूल्य साखळी, सामूहिक शेती आणि ग्रामीण अर्थव्यवस्थेच्या सक्षमीकरणासाठी त्यांनी प्रदीर्घ काळ भरीव योगदान दिले आहे.",
      bio2: "शेतकऱ्यांनी केवळ उत्पादक न राहता व्यावसायिक उद्योजक बनावे या ध्येयाने त्यांनी महाएफपीओ फेडरेशनची स्थापना केली. थेट संस्थात्मक बाजारपेठ जोडणी, शेतमाल प्रतवारी-प्रक्रिया आणि वित्तीय सुलभतेच्या माध्यमातून राज्यातील हजारो शेतकऱ्यांचे जीवनमान उंचावण्यासाठी ते सातत्याने कार्यरत आहेत.",
      quote: "सामूहिक शक्ती, पारदर्शक कारभार आणि आधुनिक तंत्रज्ञानाची जोड मिळाली तरच शेतकरी उत्पादक संस्था कृषी अर्थव्यवस्थेचा खरा कणा बनू शकतात.",
      highlights: [
        { icon: FaAward, title: "कृषी धोरण व सल्लागार", desc: "FPO नियमन, विकास आणि शासकीय योजनांच्या अंमलबजावणीत दांडगा अनुभव." },
        { icon: FaBuildingColumns, title: "संस्थात्मक बांधणी", desc: "राज्यभरातील शेकडो FPCs आणि पाणी वापर संस्थांना एकाच व्यासपीठावर आणण्यात पुढाकार." }
      ]
    },
    en: {
      badge: "Leadership & Governance",
      heading: "Founder & Leadership",
      sub: "Dedicated vision and strategic governance driving the farmer collective movement across Maharashtra.",
      name: "Dr. Sanjay Pandurang Pandhare",
      role: "Founder & Director, MAHAFPO Federation",
      bio1: "Dr. Sanjay Pandurang Pandhare is an esteemed visionary in Maharashtra's agrarian cooperative and Farmer Producer Organization (FPO) landscape. He brings decades of hands-on expertise in rural institution building and agricultural value-chain integration.",
      bio2: "Committed to elevating smallholder farmers from subsistence producers into self-reliant agri-entrepreneurs, he spearheaded the establishment of MAHAFPO Federation. His strategic roadmap focuses on direct institutional market linkage, farm-gate post-harvest handling, and transparent governance.",
      quote: "When collective grassroots strength meets modern enterprise management, farmer collectives transform into formidable drivers of the rural economy.",
      highlights: [
        { icon: FaAward, title: "Agri-Policy & Advisory", desc: "Extensive expertise in FPO corporate governance, legal frameworks, and scalable business design." },
        { icon: FaBuildingColumns, title: "Institutional Architect", desc: "Key driver in uniting hundreds of FPOs and water user collectives under an apex federation." }
      ]
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  return (
    <section className="w-full py-16 sm:py-24 bg-[#fcfdfa] font-sans text-gray-800 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        
       

        {/* Founder Profile Layout (Sharp 12-Column Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with Sharp Borders & Badges (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Background Decorative Accent Box */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#2e6930]/30 z-0 pointer-events-none hidden sm:block" />

            <div className="relative z-10 bg-white p-3 shadow-xl border border-gray-200">
              <div className="w-full h-[440px] sm:h-[500px] overflow-hidden bg-gray-100">
                <img
                  src="/founder.jpg" 
                  alt={t.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder if local image isn't added yet
                    e.currentTarget.src = "";
                  }}
                />
              </div>

              {/* Bottom Gold Accent Bar */}
              <div className="w-full h-[4px] bg-[#f4d058] mt-3" />
            </div>
          </motion.div>

          {/* Right Column: Bio & Credentials (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Name & Designation */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight font-black text-gray-950 mb-1.5">
              {t.name}
            </h3>
            <span className="text-sm sm:text-base font-bold text-[#2e6930] mb-6 block">
              {t.role}
            </span>

            {/* Quote Box */}
            <div className="relative p-5 bg-[#f5f9f3] border-l-4 border-[#2e6930] mb-6 w-full">
              <FaQuoteLeft className="text-[#2e6930]/30 text-2xl absolute top-3 right-4 pointer-events-none" />
              <p className="text-xs sm:text-sm font-semibold text-gray-800 italic leading-relaxed relative z-10">
                "{t.quote}"
              </p>
            </div>

            {/* Analytical Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal mb-8 text-justify">
              <p>{t.bio1}</p>
              <p>{t.bio2}</p>
            </div>

            {/* Key Leadership Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {t.highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-4 bg-white border border-gray-200/80 shadow-sm flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-none bg-[#2e6930]/10 text-[#2e6930] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="text-sm" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-500 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Connect Options */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:krishimitra.sanjay@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2e6930] hover:bg-[#235325] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
              >
                <FaEnvelope className="text-xs" />
                <span>krishimitra.sanjay@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-gray-300 hover:border-[#0077b5] text-gray-600 hover:text-[#0077b5] flex items-center justify-center transition-colors bg-white shadow-sm"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;