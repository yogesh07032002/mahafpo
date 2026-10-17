import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCircleCheck,
  FaSeedling,
} from "react-icons/fa6";

const WhatYouTakeBack = () => {
  const outcomes = [
    {
      number: "01",
      title: "FPO व्यवसाय नियोजनाबाबत स्पष्टता",
      text: "FPO च्या व्यवसायाचे नियोजन अधिक व्यवस्थित पद्धतीने कसे करावे, याची प्राथमिक दिशा समजेल.",
    },
    {
      number: "02",
      title: "बाजारपेठ जोडणीच्या संधींची समज",
      text: "शेतमालासाठी योग्य बाजारपेठ, खरेदीदार आणि उपलब्ध बाजारपेठ जोडणीच्या संधींकडे कसे पाहावे, याची समज मिळेल.",
    },
    {
      number: "03",
      title: "शेतमाल खरेदी प्रक्रियेची माहिती",
      text: "Procurement म्हणजेच शेतमाल खरेदी प्रक्रिया, त्यातील महत्त्वाचे टप्पे आणि उपलब्ध संधींबाबत माहिती मिळेल.",
    },
    {
      number: "04",
      title: "संबंधित योजना व संधींबाबत जागरूकता",
      text: "FPO साठी उपयुक्त ठरू शकणाऱ्या शासकीय योजना आणि उपलब्ध संधी शोधताना कोणत्या बाबींकडे लक्ष द्यावे, याची माहिती मिळेल.",
    },
    {
      number: "05",
      title: "पुढील कृतीसाठी दिशा",
      text: "कार्यशाळेत मिळालेल्या माहितीच्या आधारे आपल्या FPO साठी पुढील प्राधान्यक्रम आणि कृतीची दिशा ठरवण्यास मदत होईल.",
    },
  ];

  const scrollToRegistration = () => {
    document
      .getElementById("workshop-registration")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[250px] top-0 h-[500px] w-[500px] rounded-full bg-[#F4D058]/15 blur-[150px]" />

        <div className="absolute -left-[250px] bottom-0 h-[450px] w-[450px] rounded-full bg-[#174326]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-14">
          {/* =====================================================
              LEFT IMAGE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Yellow back shape */}
            <div className="absolute -bottom-4 -left-4 h-[85%] w-[85%] rounded-[30px] bg-[#F4D058] sm:-bottom-5 sm:-left-5" />

            {/* Image */}
            <div className="relative min-h-[400px] overflow-hidden rounded-[28px] sm:min-h-[470px] lg:min-h-[570px]">
              <img
                src="/fpo-program.png"
                alt="FPO कार्यशाळेत सहभागी पदाधिकारी"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12391F]/95 via-[#12391F]/20 to-transparent" />

              {/* Top label */}
              <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[12px] font-black text-[#174326] shadow-lg sm:text-[13px]">
                  <FaSeedling className="text-[#A07800]" />
                  कार्यशाळेनंतर
                </span>
              </div>

              {/* Image bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 lg:p-8">
                <span className="text-[12px] font-black tracking-[0.1em] text-[#F4D058] sm:text-[13px]">
                  माहितीपासून पुढील कृतीपर्यंत
                </span>

                <h3 className="mt-2 max-w-[480px] text-[24px] font-black leading-[1.25] text-white sm:text-[29px]">
                  मिळालेली माहिती आपल्या FPO च्या पुढील नियोजनासाठी वापरा.
                </h3>

                <div className="mt-4 flex items-center gap-3">
                  <span className="h-[3px] w-12 rounded-full bg-[#F4D058]" />

                  <span className="text-[13px] font-bold text-white/75 sm:text-[14px]">
                    समज • स्पष्टता • दिशा
                  </span>
                </div>
              </div>
            </div>

            {/* Floating number */}
            <div className="absolute -right-3 top-[80px] hidden h-[90px] w-[90px] items-center justify-center rounded-full border-[7px] border-white bg-[#174326] shadow-xl sm:flex lg:-right-7">
              <div className="text-center">
                <strong className="block text-[28px] font-black leading-none text-[#F4D058]">
                  05
                </strong>

                <span className="mt-1 block text-[10px] font-black text-white/70">
                  मुख्य मुद्दे
                </span>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F8F1] px-4 py-2">
              <FaCircleCheck className="text-[13px] text-[#174326]" />

              <span className="text-[13px] font-black text-[#174326] sm:text-[14px]">
                कार्यशाळेतील अपेक्षित निष्पत्ती
              </span>
            </div>

            {/* Heading - SAME SIZE */}
            <h2 className="mt-4 max-w-[650px] text-[34px] font-black leading-[1.08] tracking-[-0.035em] text-[#174326] sm:text-[42px] lg:text-[49px]">
              कार्यशाळेनंतर तुम्हाला काय मिळेल?
              <br />

              
            </h2>

           

            {/* =================================================
                OUTCOME ROWS
            ================================================== */}

            <div className="mt-6 border-t border-[#174326]/10">
              {outcomes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="group grid grid-cols-[45px_1fr] gap-3 border-b border-[#174326]/10 py-4 sm:grid-cols-[55px_1fr] sm:gap-4 sm:py-[18px]"
                >
                  {/* Number */}
                  <div>
                    <span className="text-[13px] font-black text-[#A07800] sm:text-[14px]">
                      {item.number}
                    </span>

                    <div className="mt-2 h-[2px] w-5 bg-[#F4D058] transition-all duration-300 group-hover:w-9" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[17px] font-black leading-6 text-[#174326] sm:text-[19px]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 max-w-[620px] text-[14px] font-medium leading-[1.65] text-gray-600 sm:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={scrollToRegistration}
                className="group flex items-center justify-center gap-4 rounded-xl bg-[#174326] px-6 py-3.5 text-[15px] font-black text-white shadow-[0_12px_30px_rgba(23,67,38,0.15)] transition-all duration-300 hover:-translate-y-1 sm:w-auto"
              >
                कार्यशाळेसाठी नोंदणी करा

                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4D058] text-[#174326]">
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              <div className="flex items-center gap-2">
                <FaCircleCheck className="text-[13px] text-[#174326]" />

                <span className="text-[13px] font-bold text-gray-600 sm:text-[14px]">
                  व्यावहारिक आणि माहितीपूर्ण मार्गदर्शन
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouTakeBack;