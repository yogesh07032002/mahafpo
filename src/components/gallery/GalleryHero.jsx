import React, { useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const GalleryHero = () => {
  const { language } = useContext(LanguageContext);

  const heroData = {
    mr: {
      image: 'https://i.pinimg.com/1200x/11/5c/42/115c423b15998f233dbdba9d565ba652.jpg',
      titlePart1: 'आमची',
      titleHighlight: 'गॅलरी',
      breadcrumbHome: 'मुख्यपृष्ठ',
      breadcrumbCurrent: 'गॅलरी'
    },
    en: {
      image: 'https://i.pinimg.com/1200x/11/5c/42/115c423b15998f233dbdba9d565ba652.jpg',
      titlePart1: 'Our',
      titleHighlight: 'Gallery',
      breadcrumbHome: 'Home',
      breadcrumbCurrent: 'Gallery'
    }
  };

  const t = useMemo(() => {
    return heroData[language] || heroData.mr;
  }, [language]);

  return (
    <div className="relative w-full h-[360px] sm:h-[370px] lg:h-[400px] overflow-hidden bg-black select-none font-sans">
      
      {/* 1. Background Image */}
      <img
        src={t.image}
        alt="Gallery Banner"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* 2. Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 z-[5]" />

      {/* 3. Center Content (Title & Breadcrumb) */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-16 flex flex-col justify-center items-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={`gallery-hero-${language}`}
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

      {/* 4. Bottom Subtle Brand Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2e6930] via-[#f4d058] to-[#2e6930] z-20" />

    </div>
  );
};

export default GalleryHero;