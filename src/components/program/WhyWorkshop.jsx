import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBuildingColumns,
  FaChartLine,
  FaCircleCheck,
  FaCircleQuestion,
  FaHandshake,
  FaSitemap,
  FaStore,
  FaWhatsapp,
  FaWheatAwn,
} from "react-icons/fa6";

const WhyWorkshop = () => {
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
     PROBLEMS
  ========================================================= */

  const problems = [
    {
      icon: FaHandshake,
      number: "01",
      title: "योग्य Market Linkage कसे मिळवायचे?",
      problem:
        "शेतमालाचे उत्पादन झाले तरी योग्य खरेदीदार, बाजारपेठ आणि विक्रीची संधी मिळवणे हे अनेक FPO आणि शेतकरी गटांसमोरील मोठे आव्हान असते.",
      guidance:
        "FPO आणि शेतकरी गटांसाठी बाजारपेठेच्या संधी कशा ओळखायच्या आणि योग्य Market Linkage कडे कसे पाहायचे याबाबत मार्गदर्शन.",
    },
    {
      icon: FaChartLine,
      number: "02",
      title: "FPO चा Business Model कसा विकसित करायचा?",
      problem:
        "फक्त संस्था स्थापन करून व्यवसाय वाढत नाही. उपलब्ध उत्पादने, सदस्य, बाजारपेठ आणि संधी यांचा विचार करून व्यवसायाची दिशा ठरवावी लागते.",
      guidance:
        "FPO च्या व्यवसायवाढीसाठी Business Model आणि नियोजनाकडे कशा पद्धतीने पाहावे याची समज.",
    },
    {
      icon: FaStore,
      number: "03",
      title: "Procurement Opportunities कशा समजून घ्यायच्या?",
      problem:
        "शेतमाल खरेदीशी संबंधित विविध संधी असतात; मात्र त्या कुठे आहेत, त्यांचे स्वरूप काय आहे आणि त्यासाठी कशी तयारी करावी हे समजणे महत्त्वाचे असते.",
      guidance:
        "Procurement संबंधित संधी समजून घेणे आणि त्यासाठी आवश्यक व्यावसायिक तयारीबाबत दिशा.",
    },
    {
      icon: FaBuildingColumns,
      number: "04",
      title:
        "Government Schemes आणि उपलब्ध संधी कुठे शोधायच्या?",
      problem:
        "FPO आणि कृषी क्षेत्रासाठी विविध शासकीय योजना व सहाय्याच्या संधी उपलब्ध असू शकतात; मात्र योग्य आणि संबंधित माहितीपर्यंत पोहोचणे अनेकदा कठीण जाते.",
      guidance:
        "शासकीय योजना आणि उपलब्ध संधी शोधताना कोणत्या गोष्टींकडे लक्ष द्यावे याबाबत मार्गदर्शन.",
    },
    {
      icon: FaSitemap,
      number: "05",
      title: "FPO ची Growth आणि Operations कशी मजबूत करायची?",
      problem:
        "सदस्य समन्वय, दैनंदिन कामकाज, निर्णय प्रक्रिया आणि व्यवसायवाढ यांचा योग्य मेळ नसेल तर FPO ची पुढील वाटचाल कठीण होऊ शकते.",
      guidance:
        "FPO चे Operations अधिक व्यवस्थित ठेवून संस्थेच्या दीर्घकालीन व्यवसायवाढीकडे कसे पाहावे याची दिशा.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-52 top-0 h-[450px] w-[450px] rounded-full bg-[#F4D058]/10 blur-[120px]" />

        <div className="absolute -left-52 bottom-0 h-[450px] w-[450px] rounded-full bg-[#174326]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "radial-gradient(#174326 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADING
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mx-auto max-w-[900px] text-center"
        >
          {/* BADGE */}

          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#174326]/[0.07] px-4 py-2">
            <FaCircleQuestion className="text-[14px] text-[#174326]" />

            <span className="text-[13px] font-black text-[#174326] sm:text-[14px]">
              FPO आणि शेतकरी व्यवसायात अनेक प्रश्न असतात...
            </span>
          </div>

          {/* TITLE */}

          <h2 className="text-[31px] font-black leading-tight tracking-[-0.025em] text-[#174326] sm:text-[38px] lg:text-[43px]">
            ही कार्यशाळा{" "}
            <span className="relative inline-block">
              <span className="relative z-10">का?</span>

              <span className="absolute bottom-[2px] left-0 h-[9px] w-full rounded-full bg-[#F4D058]/80" />
            </span>
          </h2>

          {/* INTRO */}

          <p className="mx-auto mt-3 max-w-[820px] text-[15px] font-medium leading-7 text-gray-600 sm:text-[16px] sm:leading-7">
            FPO उभा करणे किंवा शेती उत्पादन घेणे ही सुरुवात आहे; पण{" "}
            <strong className="font-extrabold text-[#174326]">
              व्यवसाय सक्षमपणे चालवणे, योग्य बाजारपेठ मिळवणे आणि
              उपलब्ध संधींचा योग्य उपयोग करणे
            </strong>{" "}
            हे खरे आव्हान असते.
          </p>

          
        </motion.div>

        

        {/* ===================================================
            PROBLEM CARDS
        ==================================================== */}

        <div className="mx-auto mt-4 grid max-w-[1100px] grid-cols-1 gap-3 md:grid-cols-2">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -3,
                }}
                className={`
                  group relative overflow-hidden
                  rounded-2xl
                  border border-[#174326]/10
                  bg-white p-4
                  transition-all duration-300
                  hover:border-[#174326]/25
                  hover:shadow-[0_15px_35px_rgba(23,67,38,0.07)]
                  sm:p-5
                  ${index === 4 ? "md:col-span-2" : ""}
                `}
              >
                {/* BACKGROUND NUMBER */}

                <span className="absolute right-4 top-1 text-[56px] font-black leading-none text-[#174326]/[0.04]">
                  {item.number}
                </span>

                <div
                  className={
                    index === 4 ? "mx-auto max-w-[780px]" : ""
                  }
                >
                  {/* =========================================
                      CARD HEADER
                  ========================================== */}

                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.05,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#174326] text-[#F4D058]"
                    >
                      <Icon className="text-[17px]" />
                    </motion.div>

                    <div className="min-w-0">
                      <span className="text-[12px] font-black uppercase tracking-wide text-[#9A7300]">
                        प्रश्न {item.number}
                      </span>

                      <h3 className="mt-1 pr-5 text-[16px] font-black leading-6 text-[#174326] sm:text-[17px]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* =========================================
                      PROBLEM
                  ========================================== */}

                  <div className="mt-4">
                    <span className="mb-1.5 block text-[13px] font-black text-gray-500">
                      नेमकी अडचण
                    </span>

                    <p className="text-[15px] font-medium leading-7 text-gray-600">
                      {item.problem}
                    </p>
                  </div>

                  {/* =========================================
                      GUIDANCE
                  ========================================== */}

                  <div className="mt-3 flex items-start gap-3 rounded-xl bg-[#F7F9F3] p-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#174326]">
                      <FaCircleCheck className="text-[10px] text-[#F4D058]" />
                    </span>

                    <div>
                      <span className="block text-[13px] font-black text-[#9A7300]">
                        कार्यशाळेत मिळणारी दिशा
                      </span>

                      <p className="mt-1 text-[15px] font-semibold leading-7 text-[#174326]">
                        {item.guidance}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================
            FINAL CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mx-auto mt-5 max-w-[1100px]"
        >
          <div className="relative overflow-hidden rounded-[22px] bg-[#174326] px-5 py-6 text-center shadow-[0_18px_45px_rgba(23,67,38,0.15)] sm:px-8 sm:py-7">
            {/* DECORATIONS */}

            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#F4D058]/10" />

            <div className="absolute -bottom-24 -left-12 h-48 w-48 rounded-full border-[38px] border-[#F4D058]/5" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "19px 19px",
              }}
            />

            <div className="relative z-10 mx-auto max-w-[850px]">
              {/* BADGE */}

              <span className="inline-flex rounded-full bg-[#F4D058] px-4 py-1.5 text-[13px] font-black text-[#174326]">
                प्रश्नांपासून योग्य दिशेकडे
              </span>

              {/* TITLE */}

              <h3 className="mt-3 text-[21px] font-black leading-snug text-white sm:text-[25px] lg:text-[28px]">
                या महत्त्वाच्या विषयांवर मिळवा{" "}
                <span className="text-[#F4D058]">
                  Structured Guidance
                </span>
              </h3>

              {/* DESCRIPTION */}

              <p className="mx-auto mt-2 max-w-[750px] text-[15px] font-medium leading-7 text-white/80 sm:text-[16px]">
                बाजारपेठ, Procurement, शासकीय संधी, Business Model
                आणि FPO Operations या महत्त्वाच्या विषयांकडे अधिक
                स्पष्टपणे कसे पाहावे आणि पुढील दिशा कशी ठरवावी यासाठी
                ही कार्यशाळा उपयुक्त ठरेल.
              </p>


              {/* =============================================
                  WHATSAPP CTA
              ============================================== */}

              <motion.button
                type="button"
                onClick={joinWhatsAppGroup}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow:
                    "0 16px 38px rgba(244,208,88,0.25)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative mt-4 inline-flex min-h-[56px] cursor-pointer items-center gap-3 overflow-hidden rounded-xl bg-[#F4D058] px-5 py-3 text-[15px] font-black text-[#174326] transition-colors hover:bg-[#FFDA4D] sm:px-7 sm:text-[16px]"
              >
                {/* SHINE */}

                <motion.span
                  animate={{
                    x: ["-180%", "550%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-[45px] -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />

                {/* ICON */}

                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#174326] text-[18px] text-white">
                  <FaWhatsapp />
                </span>

                {/* TEXT */}

                <span className="relative z-10">
                  WhatsApp Group Join करा
                </span>

                {/* ARROW */}

                <FaArrowRight className="relative z-10 text-[12px] transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden bg-[#174326]">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#F4D058] to-transparent"
        />
      </div>
    </section>
  );
};

export default WhyWorkshop;