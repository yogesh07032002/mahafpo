import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowTrendUp,
  FaBuildingColumns,
  FaChartLine,
  FaSeedling,
  FaStore,
  FaSitemap,
  FaWhatsapp,
} from "react-icons/fa6";

const WorkshopTopics = () => {
  /* =========================================================
     WHATSAPP GROUP LINK
     Actual WhatsApp Group Invite Link इथे paste करा
  ========================================================= */

  const WHATSAPP_GROUP_LINK =
    "https://chat.whatsapp.com/YOUR-WHATSAPP-GROUP-LINK";

  const joinWhatsAppGroup = () => {
    window.open(
      WHATSAPP_GROUP_LINK,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =========================================================
     TOPICS
  ========================================================= */

  const topics = [
    {
      number: "01",
      icon: FaChartLine,
      title: "FPO व्यवसाय विकास",
      text: "FPO साठी सक्षम आणि दीर्घकालीन व्यवसाय मॉडेल तयार करून व्यवसायवाढीची योग्य दिशा समजून घ्या.",
    },
    {
      number: "02",
      icon: FaStore,
      title: "बाजारपेठेशी जोडणी",
      text: "शेतमालासाठी योग्य बाजारपेठ, खरेदीदार आणि Market Linkage च्या संधी समजून घ्या.",
    },
    {
      number: "03",
      icon: FaSitemap,
      title: "शेतमाल खरेदीच्या संधी",
      text: "Procurement प्रक्रिया, त्यातील महत्त्वाचे टप्पे आणि FPO साठी उपलब्ध संधींबाबत मार्गदर्शन.",
    },
    {
      number: "04",
      icon: FaBuildingColumns,
      title: "शासकीय योजना",
      text: "FPO साठी संबंधित शासकीय योजना आणि उपलब्ध विविध संधींची माहिती समजून घ्या.",
    },
    {
      number: "05",
      icon: FaSeedling,
      title: "कृषी निविष्ठा व व्यवसायाच्या संधी",
      text: "कृषी निविष्ठांशी संबंधित व्यवसायाच्या संधी आणि FPO च्या व्यवसाय विस्ताराच्या शक्यता समजून घ्या.",
    },
    {
      number: "06",
      icon: FaArrowTrendUp,
      title: "FPO चे व्यावहारिक व्यवस्थापन",
      text: "दैनंदिन कामकाज, व्यवस्थापन आणि FPO च्या पुढील व्यवसायवाढीसाठी आवश्यक मार्गदर्शन.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F9F3] py-12 sm:py-14 lg:py-16">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-0 h-[450px] w-[450px] rounded-full bg-[#174326]/5 blur-[120px]" />

        <div className="absolute -right-52 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F4D058]/15 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(#174326 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            SECTION HEADING
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-[800px] text-center"
        >
          {/* LABEL */}

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#174326]/10 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#174326] text-[#F4D058]">
              <FaSeedling className="text-[13px]" />
            </span>

            <span className="text-[13px] font-black text-[#174326] sm:text-[14px]">
              कार्यशाळेतील प्रमुख विषय
            </span>
          </div>

          {/* HEADING */}

          <h2 className="text-[31px] font-black leading-tight tracking-[-0.03em] text-[#174326] sm:text-[39px] lg:text-[44px]">
            कार्यशाळेत{" "}
            <span className="relative inline-block">
              <span className="relative z-10">
                काय शिकणार?
              </span>

              <span className="absolute bottom-[2px] left-0 h-[9px] w-full rounded-full bg-[#F4D058]/80" />
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-3 max-w-[700px] text-[15px] font-medium leading-7 text-gray-600 sm:text-[16px]">
            FPO च्या व्यवसायवाढीसाठी आवश्यक असलेल्या{" "}
            <strong className="font-extrabold text-[#174326]">
              6 महत्त्वाच्या विषयांवर
            </strong>{" "}
            एका दिवसात उपयुक्त आणि व्यावहारिक मार्गदर्शन.
          </p>
        </motion.div>

        

        {/* ===================================================
            TOPICS
        ==================================================== */}

        <div className="mx-auto mt-5 grid max-w-[1000px] grid-cols-1 gap-x-10 md:grid-cols-2">
          {topics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group relative flex gap-4 border-b border-[#174326]/10 px-2 py-5 transition-all duration-300 hover:border-[#174326]/30"
              >
                {/* ICON */}

                <div className="relative shrink-0">
                  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-[#174326] text-[#F4D058] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <Icon className="text-[19px]" />
                  </div>

                  {/* NUMBER */}

                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#F7F9F3] bg-[#F4D058] text-[11px] font-black text-[#174326]">
                    {topic.number}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="min-w-0 pt-1">
                  <h3 className="text-[17px] font-black leading-6 text-[#174326] sm:text-[18px]">
                    {topic.title}
                  </h3>

                  <p className="mt-1.5 max-w-[410px] text-[14px] font-medium leading-6 text-gray-600 sm:text-[15px] sm:leading-7">
                    {topic.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-8 max-w-[1000px]"
        >
          <div className="relative overflow-hidden rounded-[22px] bg-[#174326] px-5 py-6 sm:px-8 lg:px-10">
            {/* DECORATION */}

            <div className="absolute -right-16 -top-20 h-[190px] w-[190px] rounded-full bg-[#F4D058]/10" />

            <div className="absolute -bottom-24 -left-16 h-[180px] w-[180px] rounded-full border-[35px] border-[#F4D058]/5" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
              {/* LEFT */}

              <div>
                <span className="text-[13px] font-black text-[#F4D058]">
                  एक दिवस • व्यावहारिक कार्यशाळा
                </span>

                <h3 className="mt-1.5 text-[21px] font-black leading-snug text-white sm:text-[25px]">
                  एका दिवसात FPO व्यवसायाला{" "}
                  <span className="text-[#F4D058]">
                    योग्य दिशा
                  </span>
                </h3>

                <p className="mt-1.5 text-[14px] font-medium leading-6 text-white/75 sm:text-[15px]">
                  व्यवसाय • बाजारपेठ • खरेदी • शासकीय योजना •
                  व्यवस्थापन
                </p>
              </div>

              {/* =============================================
                  NORMAL WHATSAPP BUTTON
                  No Green Patch
              ============================================== */}

              <motion.button
                type="button"
                onClick={joinWhatsAppGroup}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group flex min-h-[54px] shrink-0 cursor-pointer items-center gap-3 rounded-xl bg-[#F4D058] px-5 py-3 text-[14px] font-black text-[#174326] shadow-lg transition-colors duration-300 hover:bg-[#FFDA4D] sm:px-6 sm:text-[16px]"
              >
                <FaWhatsapp className="text-[20px]" />

                <span>
                  WhatsApp Group Join करा
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#174326] text-white">
                  <FaArrowRight className="text-[12px] transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#174326] via-[#F4D058] to-[#174326]" />
    </section>
  );
};

export default WorkshopTopics;