import React, { useState, useEffect, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const AboutHero = () => {
  const { language } = useContext(LanguageContext);

  const heroData = {
    mr: {
      image: '/fpo-meeting-maharashtra.avif',
      titlePart1: 'आमच्या',
      titleHighlight: 'बद्दल',
      breadcrumbHome: 'मुख्यपृष्ठ',
      breadcrumbCurrent: 'आमच्याबद्दल'
    },
    en: {
      image: '/fpo-meeting-maharashtra.avif',
      titlePart1: 'About',
      titleHighlight: 'Us',
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'About Us'
    }
  };

  const t = useMemo(() => {
    return heroData[language] || heroData.mr;
  }, [language]);

  const [numSlices, setNumSlices] = useState(3);

  // स्क्रीनच्या आकारानुसार स्लाइसेसची संख्या ठरवणे
  useEffect(() => {
    const handleResize = () => {
      setNumSlices(window.innerWidth < 768 ? 3 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[370px] lg:h-[400px] overflow-hidden bg-black select-none font-sans">
      
      {/* 1. Base Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${t.image})` }}
      />

      {/* 2. Home Hero प्रमाणे Slices Transition Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(numSlices)].map((_, i) => {
          const widthPct = 100 / numSlices;
          return (
            <div
              key={`slice-container-${numSlices}-${i}`}
              className="absolute top-0 bottom-0 overflow-hidden"
              style={{
                left: `${i * widthPct}%`,
                width: `${widthPct + 0.6}%`,
              }}
            >
              <AnimatePresence initial={true}>
                <motion.div
                  key={`slice-${i}-${language}`}
                  initial={{ x: '100%', opacity: 0.7 }}
                  animate={{ x: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.95,
                    delay: i * 0.1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="absolute top-0 bottom-0 bg-cover bg-center"
                  style={{
                    width: `${numSlices * 100}%`,
                    left: `-${i * 100}%`,
                    backgroundImage: `url(${t.image})`,
                  }}
                />
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* 3. Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 z-[5]" />

      {/* 4. Center Content (Only Title & Breadcrumb) */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-16 flex flex-col justify-center items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={`about-content-${language}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title with Gradient Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
              {t.titlePart1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a2e06f] to-[#f4d058]">
                {t.titleHighlight}
              </span>
            </h1>

            {/* Breadcrumb Navigation */}
            <nav 
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium"
            >
              <Link 
                to="/" 
                className="hover:text-[#f4d058] transition-colors duration-200"
              >
                {t.breadcrumbHome}
              </Link>
              <FaChevronRight className="text-[10px] text-gray-400" />
              <span className="text-[#f4d058] font-semibold">
                {t.breadcrumbCurrent}
              </span>
            </nav>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Subtle Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2e6930] via-[#f4d058] to-[#2e6930] z-20" />

    </div>
  );
};

export default AboutHero;