
import React, {
  useState,
  useContext,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa6";

import { LanguageContext } from "../../context/LanguageContext";

/* ==========================================
   GALLERY IMAGES
   Images in public folder:
   program1.jpeg to program21.jpeg
========================================== */

const galleryImages = Array.from(
  { length: 21 },
  (_, index) => `/program${index + 1}.jpeg`
);

/* ==========================================
   LANGUAGE CONTENT
========================================== */

const content = {
  mr: {
    tag: "क्षणचित्रे",
    heading: "महाएफपीओ उपक्रम गॅलरी",
    desc: "शेतकरी उत्पादक संस्थांचे प्रत्यक्ष संकलन, शेतकरी सहभाग आणि ग्रामीण मूल्य साखळीची वास्तववादी क्षणचित्रे.",
    close: "गॅलरी बंद करा",
    previous: "मागील फोटो",
    next: "पुढील फोटो",
  },

  en: {
    tag: "Visual Archive",
    heading: "MAHAFPO Initiatives & Moments",
    desc: "A photographic perspective capturing grassroots agriculture, aggregation hubs, and farmer enterprises in action.",
    close: "Close Gallery",
    previous: "Previous Image",
    next: "Next Image",
  },
};

/* ==========================================
   MAIN COMPONENT
========================================== */

const GallerySection = () => {
  const { language } = useContext(LanguageContext);

  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [failedImages, setFailedImages] = useState([]);

  const touchStartX = useRef(null);
  const closeButtonRef = useRef(null);

  const t = useMemo(
    () => content[language] || content.mr,
    [language]
  );

  /* ==========================================
     FILTER FAILED IMAGES
  ========================================== */

  const visibleImages = useMemo(
    () =>
      galleryImages.filter(
        (src) => !failedImages.includes(src)
      ),
    [failedImages]
  );

  const handleImageError = useCallback((src) => {
    setFailedImages((prev) =>
      prev.includes(src) ? prev : [...prev, src]
    );
  }, []);

  /* ==========================================
     LIGHTBOX FUNCTIONS
  ========================================== */

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((prev) => {
      if (prev === null || visibleImages.length === 0) {
        return null;
      }

      return (
        (prev - 1 + visibleImages.length) %
        visibleImages.length
      );
    });
  }, [visibleImages.length]);

  const showNextImage = useCallback(() => {
    setActiveImageIndex((prev) => {
      if (prev === null || visibleImages.length === 0) {
        return null;
      }

      return (prev + 1) % visibleImages.length;
    });
  }, [visibleImages.length]);

  /* ==========================================
     KEYBOARD NAVIGATION
  ========================================== */

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    activeImageIndex,
    closeLightbox,
    showNextImage,
    showPreviousImage,
  ]);

  /* ==========================================
     BODY SCROLL LOCK
  ========================================== */

  useEffect(() => {
    if (activeImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [activeImageIndex === null]);

  /* ==========================================
     MOBILE SWIPE
  ========================================== */

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0].clientX;
    const difference = touchStartX.current - endX;

    if (difference > 50) {
      showNextImage();
    } else if (difference < -50) {
      showPreviousImage();
    }

    touchStartX.current = null;
  };

  /* ==========================================
     HANDLE CHANGING IMAGE LIST
  ========================================== */

  useEffect(() => {
    if (activeImageIndex === null) return;

    if (visibleImages.length === 0) {
      closeLightbox();
      return;
    }

    if (activeImageIndex >= visibleImages.length) {
      setActiveImageIndex(visibleImages.length - 1);
    }
  }, [activeImageIndex, visibleImages.length, closeLightbox]);

  return (
    <section className="w-full bg-[#fafbf9] py-16 sm:py-24 font-sans border-t border-gray-100">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 px-5 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <span className="block mb-3 text-sm sm:text-base font-semibold tracking-widest text-[#2e6930] uppercase">
            {t.tag}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-5">
            {t.heading}
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t.desc}
          </p>

        </motion.div>

      </div>

      {/* ======================================
          MASONRY GALLERY
          DESKTOP: 5 COLUMNS
          TABLET: 3 COLUMNS
          MOBILE: 2 COLUMNS
      ====================================== */}

      <div className="w-full max-w-[1500px] mx-auto px-3 sm:px-5 lg:px-8">

        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4">

          {visibleImages.map((src, index) => (

            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.4,
                delay: Math.min((index % 5) * 0.04, 0.16),
              }}
              onClick={() => setActiveImageIndex(index)}
              className="group relative mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100 cursor-pointer"
            >

              {/* ORIGINAL RATIO IMAGE */}

              <img
                src={src}
                alt={`MAHAFPO Gallery Image ${index + 1}`}
                className="block w-full h-auto object-contain"
                loading={index < 5 ? "eager" : "lazy"}
                decoding="async"
                onError={() => handleImageError(src)}
              />

              {/* HOVER OVERLAY */}

              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">

                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center">

                  <FaExpand className="text-base sm:text-lg" />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* ======================================
          FULLSCREEN LIGHTBOX
      ====================================== */}

      <AnimatePresence>

        {activeImageIndex !== null &&
          visibleImages[activeImageIndex] && (

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="MAHAFPO Photo Gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex flex-col p-3 sm:p-6"
          >

            {/* TOP BAR */}

            <div
              className="w-full max-w-7xl mx-auto flex items-center justify-between text-white pb-3 shrink-0"
              onClick={(event) => event.stopPropagation()}
            >

              <span className="text-sm sm:text-base font-medium text-gray-300">
                {activeImageIndex + 1} / {visibleImages.length}
              </span>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                aria-label={t.close}
                className="w-10 h-10 flex items-center justify-center text-white hover:text-[#f4d058] transition-colors cursor-pointer"
              >
                <FaXmark className="text-2xl" />
              </button>

            </div>

            {/* IMAGE AREA */}

            <div
              className="relative flex-1 min-h-0 w-full max-w-7xl mx-auto flex items-center justify-center"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={showPreviousImage}
                aria-label={t.previous}
                className="absolute left-0 sm:left-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#2e6930] text-white border border-white/20 flex items-center justify-center transition-colors"
              >
                <FaChevronLeft className="text-base" />
              </button>

              {/* PREVIEW IMAGE */}

              <AnimatePresence mode="wait">

                <motion.img
                  key={visibleImages[activeImageIndex]}
                  src={visibleImages[activeImageIndex]}
                  alt={`MAHAFPO Moment ${activeImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  onError={() =>
                    handleImageError(
                      visibleImages[activeImageIndex]
                    )
                  }
                  className="block w-auto h-auto max-w-[calc(100%-5.5rem)] max-h-[75vh] sm:max-w-[calc(100%-8rem)] sm:max-h-[82vh] object-contain shadow-2xl rounded-lg"
                />

              </AnimatePresence>

              {/* NEXT */}

              <button
                type="button"
                onClick={showNextImage}
                aria-label={t.next}
                className="absolute right-0 sm:right-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#2e6930] text-white border border-white/20 flex items-center justify-center transition-colors"
              >
                <FaChevronRight className="text-base" />
              </button>

            </div>

            {/* BOTTOM BAR */}

            <div className="w-full max-w-sm mx-auto text-center pt-4 shrink-0">

              <span className="text-xs sm:text-sm font-bold text-[#f4d058] tracking-widest uppercase">
                MAHAFPO Federation
              </span>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default GallerySection;
