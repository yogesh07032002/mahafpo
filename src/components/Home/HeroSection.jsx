import React, { useState, useEffect, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaSeedling } from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

function HeroSection() {
  const { language } = useContext(LanguageContext);

  // 🌐 SLIDES DATA (Only Marathi & English)
  const slidesData = {
    mr: [
      {
        image: '/FPO%20Maharashtra.jpg',
        tagline: 'महाएफपीओ फेडरेशनमध्ये आपले स्वागत आहे',
        title1: 'एफपीओंचे सक्षमीकरण.',
        title2: 'शेतकऱ्यांना',
        titleHighlight: 'बळ.',
        desc: 'चांगल्या बाजारपेठा, सामूहिक विकास आणि नव्या व्यावसायिक संधींद्वारे शेतकरी उत्पादक कंपन्यांचे सक्षमीकरण.'
      },
      {
        image: '/FPO-farmers-India.jpg',
        tagline: 'शाश्वत शेती व समृद्धीची दिशा',
        title1: 'उत्पादन वाढीस',
        title2: 'शाश्वत तंत्रज्ञानाची',
        titleHighlight: 'साथ.',
        desc: 'कृषी क्षेत्रातील आधुनिक तंत्रज्ञान आणि थेट बाजारपेठेशी जोडणी करून शेतकऱ्यांचे उत्पन्न वाढवणे.'
      },
      {
        image: '/FPO-pune.jpg',
        tagline: 'शेतकऱ्यांचा सामूहिक विकास आणि प्रगती',
        title1: 'सामूहिक शक्ती.',
        title2: 'समृद्ध शेतकरी,',
        titleHighlight: 'उज्वल भविष्य.',
        desc: 'महाराष्ट्रातील शेतकरी उत्पादक संस्थांना संघटित करून मूल्य साखळी मजबूत करणे.'
      }
    ],

    en: [
      {
        image: '/FPO%20Maharashtra.jpg',
        tagline: 'WELCOME TO MAHAFPO FEDERATION',
        title1: 'Empowering FPOs.',
        title2: 'Strengthening',
        titleHighlight: 'Farmers.',
        desc: 'Building stronger FPOs through better markets, collective growth and meaningful opportunities.'
      },
      {
        image: '/FPO-farmers-India.jpg',
        tagline: 'SUSTAINABLE AGRICULTURAL GROWTH',
        title1: 'Sustainable Growth.',
        title2: 'Driven by',
        titleHighlight: 'Technology.',
        desc: 'Connecting farmers with modern agro-practices and direct supply chains for maximum value.'
      },
      {
        image: '/FPO-pune.jpg',
        tagline: 'COLLECTIVE FARMER PROSPERITY',
        title1: 'Collective Action.',
        title2: 'Stronger Value',
        titleHighlight: 'Chains.',
        desc: 'Uniting Farmer Producer Organizations across Maharashtra to create long-term economic independence.'
      }
    ]
  };

  // 🌍 UI TEXT TRANSLATIONS
  const translations = {
    mr: {
      explore: 'आमचे कार्य पहा',
      connect: 'महाएफपीओशी जोडा',
      scroll: 'खाली स्क्रोल करा ↓'
    },
    en: {
      explore: 'Explore Our Work',
      connect: 'Connect With MAHAFPO',
      scroll: 'Scroll Down ↓'
    }
  };

  const slides = useMemo(() => {
    return slidesData[language] || slidesData.mr;
  }, [language]);

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  const [index, setIndex] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [numSlices, setNumSlices] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setNumSlices(window.innerWidth < 768 ? 3 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIndex(0);
    setPrevSlide(0);
  }, [language]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(index);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [index, slides]);

  const handleNext = () => {
    setPrevSlide(index);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setPrevSlide(index);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[580px] sm:h-[620px] lg:h-[85vh] lg:min-h-[620px] lg:max-h-[850px] overflow-hidden bg-black select-none font-sans">
      
      {/* 1. Base Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url("${slides[prevSlide]?.image || slides[0].image}")` }}
      />

      {/* 2. Slices Transition Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(numSlices)].map((_, i) => {
          const widthPct = 100 / numSlices;
          return (
            <div
              key={`slice-box-${numSlices}-${i}`}
              className="absolute top-0 bottom-0 overflow-hidden"
              style={{
                left: `${i * widthPct}%`,
                width: `${widthPct + 0.6}%`,
              }}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={`${index}-${i}-${language}`}
                  initial={{ x: '100%', opacity: 0.8 }}
                  animate={{ x: '0%', opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.95,
                    delay: i * 0.1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="absolute top-0 bottom-0 bg-cover bg-center"
                  style={{
                    width: `${numSlices * 100}%`,
                    left: `-${i * 100}%`,
                    backgroundImage: `url("${slides[index]?.image || slides[0].image}")`,
                  }}
                />
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/50 to-black/30 sm:from-black/70 sm:via-black/65 sm:to-transparent z-[5]" />

      {/* ---------------- Main Content Container ---------------- */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-5 sm:px-8 lg:px-16 flex items-center">
        <div className="max-w-3xl text-white">

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}-${language}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2e6930]/90 border border-[#8ebd58]/50 backdrop-blur-md mb-4 sm:mb-5 shadow-sm">
                <FaSeedling className="text-[#f4d058] text-sm animate-pulse" />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                  {slides[index]?.tagline}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight sm:leading-[1.18] tracking-tight mb-4 sm:mb-5 drop-shadow-md">
                {slides[index]?.title1}{' '}
                <span className="block sm:inline mt-1 sm:mt-0">
                  {slides[index]?.title2}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a2e06f] to-[#f4d058]">
                    {slides[index]?.titleHighlight}
                  </span>
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-lg lg:text-xl text-gray-100 font-medium leading-relaxed mb-6 sm:mb-8 max-w-2xl drop-shadow">
                {slides[index]?.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/what-we-do"
              className="group flex items-center justify-center gap-2.5 bg-[#2e6930] hover:bg-[#255627] text-white text-sm sm:text-base font-bold px-6 py-3 rounded-full shadow-lg shadow-[#2e6930]/40 transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              <span>{t.explore}</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight className="text-xs" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center bg-[#f4d058] hover:bg-[#eab308] text-gray-900 text-sm sm:text-base font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              {t.connect}
            </Link>
          </div>

        </div>
      </div>

      {/* Side Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/30 bg-black/40 hover:bg-[#2e6930] hover:border-transparent text-white items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <FaChevronLeft className="text-sm" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Slide"
        className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/30 bg-black/40 hover:bg-[#2e6930] hover:border-transparent text-white items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            onClick={() => {
              setPrevSlide(index);
              setIndex(dotIdx);
            }}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`transition-all duration-300 rounded-full h-2 ${
              index === dotIdx ? 'w-7 sm:w-8 bg-[#f4d058]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="hidden sm:block absolute bottom-6 right-8 text-white/80 text-xs font-semibold tracking-wider uppercase z-20"
      >
        {t.scroll}
      </motion.div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20 z-20">
        <motion.div
          key={`${index}-${language}`}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
          className="h-full bg-[#f4d058]"
        />
      </div>

    </div>
  );
}

export default HeroSection;