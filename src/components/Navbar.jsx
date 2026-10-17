import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPhone,
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaArrowRight,
  FaGlobe,
} from "react-icons/fa6";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  
  // Programs पेजसाठी स्क्रोल डिटेक्शन स्टेट
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownRef = useRef(null);
  const location = useLocation();
  const { language, changeLanguage } = useContext(LanguageContext);

  const isProgramsPage = location.pathname === "/programs";

  // फक्त Programs पेजवर खाली/वर स्क्रोल ट्रॅक करणे
  useEffect(() => {
    if (!isProgramsPage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // अगदी वर असताना किंवा वर स्क्रोल करत असताना दाखवा
      if (currentScrollY < 60 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        // खाली स्क्रोल केल्यावर लपवा
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProgramsPage, lastScrollY]);

  // बाहेरील क्लिकवर लँग्वेज ड्रॉपडाउन बंद करण्यासाठी
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🌍 भाषांतर व योग्य राऊट पाथ्स (React Router Paths)
  const translations = {
    mr: {
      brandName: "महाएफपीओ फेडरेशन",
      langName: "मराठी",
      joinCta: "महाएफपीओ मध्ये सामील व्हा",
      address: "१८, रेंज हिल रोड, यशवंत नगर, पुणे",
      nav: [
        { id: "home", name: "मुख्यपृष्ठ", path: "/" },
        { id: "about", name: "आमच्याबद्दल", path: "/about" },
        { id: "network", name: "आमचे नेटवर्क", path: "/network" },
        { id: "what-we-do", name: "आमचे कार्य", path: "/what-we-do" },
        { id: "programs", name: "योजना व उपक्रम", path: "/programs" },
        { id: "gallery", name: "गॅलरी", path: "/gallery" },
        { id: "contact", name: "संपर्क", path: "/contact" },
      ],
    },
    en: {
      brandName: "MAHAFPO FEDERATION",
      langName: "English",
      joinCta: "Join MAHAFPO",
      address: "18, Range Hill Rd, Yashwant Nagar, Pune",
      nav: [
        { id: "home", name: "Home", path: "/" },
        { id: "about", name: "About Us", path: "/about" },
        { id: "network", name: "Our Network", path: "/network" },
        { id: "what-we-do", name: "What We Do", path: "/what-we-do" },
        { id: "programs", name: "Programs & Initiatives", path: "/programs" },
        { id: "gallery", name: "Gallery", path: "/gallery" },
        { id: "contact", name: "Contact Us", path: "/contact" },
      ],
    },
  };

  const t = translations[language] || translations.mr;

  return (
    <header 
      className={`w-full shadow-md font-sans z-50 bg-white transition-transform duration-300 ease-in-out ${
        isProgramsPage 
          ? `fixed top-0 left-0 ${isVisible ? "translate-y-0" : "-translate-y-full"}` 
          : "sticky top-0"
      }`}
    >
      {/* ----------------- TOP BAR ----------------- */}
      <div className="bg-[#2e6930] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Contact Details (Desktop) */}
          <div className="hidden lg:flex flex-wrap items-center gap-6 py-2.5 text-sm font-medium tracking-wide">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-white/10 rounded-full">
                <FaPhone className="text-white text-xs" />
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href="tel:+917020856126"
                  className="hover:text-[#f4d058] transition-colors duration-200"
                >
                  +91 7020856126
                </a>
                <span className="text-white/40">|</span>
                <a
                  href="tel:+918956791701"
                  className="hover:text-[#f4d058] transition-colors duration-200"
                >
                  +91 8956791701
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2 text-white/90">
              <span className="p-1.5 bg-white/10 rounded-full">
                <FaLocationDot className="text-white text-xs" />
              </span>
              <span>{t.address}</span>
            </div>
          </div>

          {/* Social Icons, Language Dropdown & CTA Button */}
          <div className="w-full lg:w-auto flex items-center justify-between lg:justify-end gap-3 sm:gap-4 py-2 lg:py-0">
            {/* Social Media Badges */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/MAHAFPOFEDERATION"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF className="text-xs" />
              </a>

              <a
                href="https://www.instagram.com/mahafpo1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram className="text-xs" />
              </a>
            </div>

            {/* 🌍 Desktop Language Dropdown */}
            <div className="relative hidden lg:block" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition border border-white/20"
              >
                <FaGlobe className="text-xs text-[#f4d058]" />
                <span>{t.langName}</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded-lg shadow-2xl border border-gray-100 overflow-hidden z-[100] text-xs font-bold animate-fadeIn">
                  <button
                    type="button"
                    onClick={() => {
                      changeLanguage("mr");
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 hover:bg-[#eef6ec] hover:text-[#2e6930] transition ${
                      language === "mr"
                        ? "bg-[#eef6ec] text-[#2e6930] font-black"
                        : ""
                    }`}
                  >
                    मराठी
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      changeLanguage("en");
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 hover:bg-[#eef6ec] hover:text-[#2e6930] transition ${
                      language === "en"
                        ? "bg-[#eef6ec] text-[#2e6930] font-black"
                        : ""
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="group relative flex items-center gap-1.5 sm:gap-2 bg-[#f4d058] hover:bg-[#eab308] text-gray-900 font-bold text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 lg:py-2.5 lg:px-6 rounded-sm transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap"
            >
              <span>{t.joinCta}</span>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* ----------------- MAIN NAVBAR ----------------- */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo + Bilingual Federation Brand Name */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <img
                src="/logo.avif"
                alt="MAHAFPO Logo"
                className="w-11 h-11 object-cover rounded-full border-2 border-[#8ebd58] shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#2e6930] leading-none uppercase">
                {t.brandName}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {t.nav.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={`relative px-3.5 py-2 rounded-full text-[14.5px] font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-[#2e6930] text-white shadow-md shadow-[#2e6930]/30"
                        : "text-gray-700 hover:text-[#2e6930] hover:bg-[#eef6ec]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-[#2e6930] hover:bg-[#eef6ec] transition-colors focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {isOpen ? (
                  <HiXMark className="w-7 h-7" />
                ) : (
                  <HiBars3 className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ----------------- MOBILE DROPDOWN MENU ----------------- */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 bg-white ${
            isOpen ? "max-h-[750px] py-4 px-4 shadow-xl" : "max-h-0 py-0 px-4"
          }`}
        >
          {/* 🌍 Mobile Language Switcher */}
          <div className="flex items-center justify-between bg-gray-50 border border-gray-200 p-2 rounded-xl mb-3">
            <span className="text-xs font-bold text-gray-600 flex items-center gap-1.5 pl-2">
              <FaGlobe className="text-[#2e6930]" /> Language / भाषा:
            </span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => changeLanguage("mr")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  language === "mr"
                    ? "bg-[#2e6930] text-white"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                मराठी
              </button>
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  language === "en"
                    ? "bg-[#2e6930] text-white"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-1.5">
            {t.nav.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? "bg-[#2e6930] text-white shadow-sm"
                      : "text-gray-700 hover:bg-[#eef6ec] hover:text-[#2e6930]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#f4d058]"></span>
                  )}
                </Link>
              );
            })}

            {/* Mobile Contact & Address Box */}
            <div className="mt-4 pt-4 border-t border-gray-200 bg-[#f8faf7] p-4 rounded-xl flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2e6930]/10 flex items-center justify-center shrink-0">
                  <FaPhone className="text-[#2e6930] text-sm" />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-gray-800">
                  <a href="tel:+917020856126" className="hover:text-[#2e6930]">
                    +91 7020856126
                  </a>
                  <span className="text-gray-400 font-normal">|</span>
                  <a href="tel:+918956791701" className="hover:text-[#2e6930]">
                    +91 8956791701
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2e6930]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <FaLocationDot className="text-[#2e6930] text-sm" />
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-700 leading-snug">
                  {t.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;