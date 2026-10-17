import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaBoxesPacking,
  FaLink,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaHeadset,
} from "react-icons/fa6";
import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    mr: {
      tagline:
        "राज्यभरातील शेतकरी उत्पादक संस्थांना सक्षम करून शाश्वत बाजारपेठ व व्यावसायिक प्रगती निर्माण करणारी शिखर संस्था.",

      col1Title: "प्रमुख सेवा",

      col1Links: [
        {
          label: "बाजारपेठ जोडणी (Market Access)",
          path: "/what-we-do",
        },
        {
          label: "वित्तीय सुलभता (Finance)",
          path: "/what-we-do",
        },
        {
          label: "शेतमाल एकत्रीकरण (Aggregation)",
          path: "/what-we-do",
        },
        {
          label: "सामूहिक खरेदी (Procurement)",
          path: "/what-we-do",
        },
        {
          label: "क्षमता बांधणी व प्रशिक्षण",
          path: "/programs",
        },
        {
          label: "व्यवसाय आराखडा विकास",
          path: "/what-we-do",
        },
      ],

      col2Title: "Quick Links",

      col2Links: [
        {
          label: "मुख्यपृष्ठ",
          path: "/",
        },
        {
          label: "आमच्याबद्दल",
          path: "/about",
        },
        {
          label: "आमचे नेटवर्क",
          path: "/network",
        },
        {
          label: "आमचे कार्य",
          path: "/what-we-do",
        },
        {
          label: "योजना व उपक्रम",
          path: "/programs",
        },
        {
          label: "गॅलरी",
          path: "/gallery",
        },
        {
          label: "संपर्क",
          path: "/contact",
        },
      ],

      col3Title: "संपर्क कार्यालय",

      address: "18, Range Hill Rd, Yashwant Nagar, Pune",

      email: "krishimitra.sanjay@gmail.com",

      phone1: "+91 7020856126",

      phone2: "+91 8956791701",

      status: "सर्व सेवा सुरळीत सुरू आहेत",

      rights: "सर्व हक्क राखीव.",

      designedBy: "संकल्पना व निर्मिती:",
    },

    en: {
      tagline:
        "Empowering Farmer Producer Organizations across Maharashtra with market linkages, finance, and sustainable business models.",

      col1Title: "Services",

      col1Links: [
        {
          label: "Market Linkages",
          path: "/what-we-do",
        },
        {
          label: "Financial Facilitation",
          path: "/what-we-do",
        },
        {
          label: "Produce Aggregation",
          path: "/what-we-do",
        },
        {
          label: "Collective Procurement",
          path: "/what-we-do",
        },
        {
          label: "Training & Capacity Building",
          path: "/programs",
        },
        {
          label: "Business Development",
          path: "/what-we-do",
        },
      ],

      col2Title: "Quick Links",

      col2Links: [
        {
          label: "Home",
          path: "/",
        },
        {
          label: "About Us",
          path: "/about",
        },
        {
          label: "Our Network",
          path: "/network",
        },
        {
          label: "What We Do",
          path: "/what-we-do",
        },
        {
          label: "Programs & Initiatives",
          path: "/programs",
        },
        {
          label: "Gallery",
          path: "/gallery",
        },
        {
          label: "Contact Us",
          path: "/contact",
        },
      ],

      col3Title: "Contact Us",

      address: "18, Range Hill Rd, Yashwant Nagar, Pune",

      email: "krishimitra.sanjay@gmail.com",

      phone1: "+91 7020856126",

      phone2: "+91 8956791701",

      status: "All systems operational",

      rights: "All rights reserved.",

      designedBy: "Designed & Developed by:",
    },
  };

  const t = useMemo(() => {
    return translations[language] || translations.mr;
  }, [language]);

  return (
    <footer className="w-full bg-[#141d18] text-[#9ca3af] font-sans pt-16 pb-8 border-t border-[#23352b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3.5 group mb-5"
            >
              <img
                src="/logo.avif"
                alt="MAHAFPO Federation Logo"
                className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />

              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight leading-none group-hover:text-[#e5a93c] transition-colors">
                  MAHAFPO
                </span>

                <span className="text-xs font-semibold text-[#b8c2cc] tracking-widest mt-1 uppercase">
                  Federation
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed mb-6 font-normal">
              {t.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/MAHAFPOFEDERATION"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-[#1e2c24] text-[#d1d5db] flex items-center justify-center text-sm hover:bg-[#e5a93c] hover:text-[#141d18] transition-all duration-200"
              >
                <FaFacebookF />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mahafpo1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#1e2c24] text-[#d1d5db] flex items-center justify-center text-sm hover:bg-[#e5a93c] hover:text-[#141d18] transition-all duration-200"
              >
                <FaInstagram />
              </a>

            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="lg:col-span-3">

            <h4 className="text-base font-bold text-[#e5a93c] flex items-center gap-2 mb-5">
              <FaBoxesPacking className="text-sm" />
              <span>{t.col1Title}</span>
            </h4>

            <ul className="space-y-3">

              {t.col1Links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm sm:text-base text-[#9ca3af] hover:text-white transition-colors duration-150 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="lg:col-span-2">

            <h4 className="text-base font-bold text-[#e5a93c] flex items-center gap-2 mb-5">
              <FaLink className="text-sm" />
              <span>{t.col2Title}</span>
            </h4>

            <ul className="space-y-3">

              {t.col2Links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-sm sm:text-base text-[#9ca3af] hover:text-white transition-colors duration-150 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="lg:col-span-3">

            <h4 className="text-base font-bold text-[#e5a93c] flex items-center gap-2 mb-5">
              <FaHeadset className="text-sm" />
              <span>{t.col3Title}</span>
            </h4>

            <div className="space-y-4 text-sm sm:text-base text-[#9ca3af]">

              {/* Address */}
              <div className="flex items-start gap-3">
                <FaLocationDot className="text-[#e5a93c] text-base shrink-0 mt-1" />

                <span className="leading-relaxed">
                  {t.address}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">

                <FaEnvelope className="text-[#e5a93c] text-sm shrink-0" />

                <a
                  href={`mailto:${t.email}`}
                  className="hover:text-white hover:underline transition-colors break-all"
                >
                  {t.email}
                </a>

              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">

                <FaPhone className="text-[#e5a93c] text-sm shrink-0 mt-1" />

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">

                  <a
                    href={`tel:${t.phone1.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {t.phone1}
                  </a>

                  <span className="text-[#4b5563]">
                    |
                  </span>

                  <a
                    href={`tel:${t.phone2.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {t.phone2}
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-6 border-t border-[#23352b] flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#838b97]">

          {/* Copyright + Status */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5">

            <span>
              © {new Date().getFullYear()} MAHAFPO. {t.rights}
            </span>

            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">

              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              <span>
                {t.status}
              </span>

            </span>

          </div>

          {/* Developer */}
          <div className="flex items-center gap-1.5 text-[#9ca3af] text-center">

            <span>
              {t.designedBy}
            </span>

            <a
              href="https://hashgridtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e5a93c] font-semibold hover:underline hover:text-white transition-colors"
            >
              Hashgrid Technologies Pvt. Ltd.
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;