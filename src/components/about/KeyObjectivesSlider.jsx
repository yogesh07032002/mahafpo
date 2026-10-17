import React, { useState, useEffect, useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsersGear, 
  FaShop, 
  FaBoxesPacking, 
  FaBuildingColumns, 
  FaGraduationCap, 
  FaSeedling, 
  FaHandshakeAngle, 
  FaChartLine,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const KeyObjectivesSlider = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    mr: {
      tag: "प्रमुख उद्दिष्टे",
      heading: "आमची मुख्य उद्दिष्टे",
      sub: "महाराष्ट्रातील शेतकरी उत्पादक संस्थांच्या सर्वांगीण प्रगतीसाठीचे धोरणात्मक संकल्प.",
      objectives: [
        { icon: FaUsersGear, title: "शेतकरी उत्पादक संस्थांचे\nसक्षमीकरण करणे" },
        { icon: FaShop, title: "शेतमालासाठी थेट\nबाजारपेठ उपलब्धता" },
        { icon: FaBoxesPacking, title: "सामूहिक खरेदी आणि\nविपणनास चालना" },
        { icon: FaBuildingColumns, title: "खेळत्या भांडवलाची व\nवित्ताची सुलभता" },
        { icon: FaGraduationCap, title: "व्यवस्थापकीय व व्यावसायिक\nकौशल्य विकास" },
        { icon: FaSeedling, title: "शाश्वत शेतकरी-चालित\nव्यवसाय निर्मिती" },
        { icon: FaHandshakeAngle, title: "खरेदीदार व संस्थांशी\nधोरणात्मक भागीदारी" },
        { icon: FaChartLine, title: "शेतमाल मूल्यवर्धन व\nव्यावसायिक संधी" },
      ]
    },
    en: {
      tag: "Our Key Objectives",
      heading: "Strategic Objectives",
      sub: "Dedicated goals aimed at empowering farmer institutions across Maharashtra.",
      objectives: [
        { icon: FaUsersGear, title: "Strengthen Farmer\nProducer Collectives" },
        { icon: FaShop, title: "Improve Direct\nMarket Linkages" },
        { icon: FaBoxesPacking, title: "Promote Collective\nBulk Procurement" },
        { icon: FaBuildingColumns, title: "Facilitate Working\nCapital & Credit" },
        { icon: FaGraduationCap, title: "Build Strategic\nManagerial Skills" },
        { icon: FaSeedling, title: "Promote Sustainable\nFarm Enterprises" },
        { icon: FaHandshakeAngle, title: "Develop Strategic\nBuyer Alliances" },
        { icon: FaChartLine, title: "Enable Value Addition\n& Business Growth" },
      ]
    }
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = t.objectives.length - visibleCount;

  // दर १ सेकंदाने (1000ms) ऑटो-स्क्रोल (होव्हर केल्यावर थांबेल)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [maxIndex, isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section 
      className="relative w-full py-16 sm:py-20 font-sans overflow-hidden bg-cover bg-center bg-fixed select-none"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/fpo-training-program-india.jpg')`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* 🌟 Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-[#f4d058] uppercase block mb-2">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight font-black text-white mb-2.5 drop-shadow-sm">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-[16px] text-gray-200 font-normal">
            {t.sub}
          </p>
        </motion.div>

        {/* Slider Track Wrapper */}
        <div className="relative px-12 sm:px-14">
          
          {/* Left Arrow with Micro-interactions */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#f4d058", color: "#141d18" }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-white text-gray-900 shadow-2xl border border-gray-200 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <FaChevronLeft className="text-sm font-bold" />
          </motion.button>

          {/* Cards Track */}
          <div className="w-full overflow-hidden py-4">
            <motion.div
              animate={{
                x: `-${currentIndex * (100 / visibleCount)}%`
              }}
              transition={{
                duration: 0.45,
                ease: [0.25, 1, 0.5, 1]
              }}
              className="flex"
            >
              {t.objectives.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="shrink-0 px-2.5"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    {/* 🌟 Interactive Sharp White Card */}
                    <motion.div 
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                      className="group relative max-w-[240px] mx-auto h-[150px] sm:h-[160px] bg-white text-gray-900 p-3.5 flex flex-col items-center justify-center text-center shadow-xl rounded-none border border-gray-100 overflow-hidden cursor-pointer"
                    >
                      {/* ✨ Glass / Shimmer Sweep on Hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none z-10" />

                      {/* Icon Container with Rotation & Bounce Animation */}
                      <div className="w-10 h-10 rounded-full border border-[#2e6930]/25 bg-[#f1f8ed] flex items-center justify-center text-[#2e6930] mb-2.5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#2e6930] group-hover:text-white shadow-inner">
                        <IconComponent className="text-base" />
                      </div>

                      {/* Title: 2 Lines */}
                      <h3 className="text-xs sm:text-[16px] font-bold leading-tight tracking-tight text-gray-800 line-clamp-2 h-[2.6em] flex items-center justify-center whitespace-pre-line group-hover:text-[#2e6930] transition-colors duration-200">
                        {item.title}
                      </h3>

                      {/* Expanding Golden Accent Indicator on Bottom */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-full bg-[#f4d058] transition-all duration-300" />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Arrow with Micro-interactions */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#f4d058", color: "#141d18" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-white text-gray-900 shadow-2xl border border-gray-200 flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <FaChevronRight className="text-sm font-bold" />
          </motion.button>

        </div>

      </div>
    </section>
  );
};

export default KeyObjectivesSlider;