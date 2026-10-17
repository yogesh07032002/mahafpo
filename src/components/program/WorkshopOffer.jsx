import React from "react";
import { motion } from "framer-motion";

const WorkshopOffer = () => {
  const joinWhatsAppGroup = () => {
    window.open("https://chat.whatsapp.com/C2BGJTtxEvbBUzRTAek8zU", "_blank");
  };

  const benefits = [
    "FPO स्थापना व व्यवस्थापनाचे प्रत्यक्ष मार्गदर्शन",
    "व्यवसाय नियोजन व Business Model समजून घ्या",
    "Bank Finance व आर्थिक जोडणीबाबत मार्गदर्शन",
    "Market Linkage व शेतमाल विक्रीच्या संधी",
    "Processing, Value Addition व सरकारी योजनांची माहिती",
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF7EC] py-14 sm:py-16 lg:py-20">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4D058]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[850px] px-5 sm:px-7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="
            overflow-hidden
            rounded-[26px]
            border
            border-[#E86125]
            bg-white
            shadow-[0_22px_60px_rgba(90,55,25,0.08)]
          "
        >
          {/* =====================================
              TOP OFFER BAR
          ====================================== */}
          <div
            className="
              relative
              overflow-hidden
              bg-gradient-to-r
              from-[#DE5B23]
              via-[#E86C2B]
              to-[#E58B53]
              px-5
              py-4
              text-center
            "
          >
            <motion.div
              animate={{ x: ["-200%", "500%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="absolute top-[-40%] h-[180%] w-[45px] rotate-[20deg] bg-white/20 blur-[5px]"
            />

            <p className="relative z-10 text-[14px] font-semibold text-white sm:text-[16px]">
              🎉 विशेष FPO कार्यशाळा
            </p>
          </div>

          {/* =====================================
              MAIN CONTENT
          ====================================== */}
          <div className="px-5 py-9 sm:px-10 sm:py-11 lg:px-14">
            {/* HEADING */}
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="
                  mx-auto
                  max-w-[680px]
                  text-[27px]
                  font-bold
                  leading-[1.35]
                  tracking-[-0.025em]
                  text-[#181511]
                  sm:text-[34px]
                  lg:text-[39px]
                "
              >
                शेतकरी उत्पादक कंपनीसाठी
                <span className="text-[#E86125]"> संपूर्ण व्यवसाय मार्गदर्शन</span>
              </motion.h2>

              <p className="mt-3 text-[14px] font-normal text-[#71685F] sm:text-[16px]">
                FPO Workshop • मराठी • व्यावहारिक मार्गदर्शन
              </p>
            </div>

            {/* =====================================
                PRICE
            ====================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-7 text-center"
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#81766C]">
                WORKSHOP FEE
              </p>

              <div className="mt-1 flex items-center justify-center">
                <span className="text-[48px] font-bold leading-none text-[#E86125] sm:text-[62px]">
                  ₹2,500
                </span>
              </div>

              <div className="mt-3 inline-flex rounded-full bg-[#EDF6E9] px-5 py-2">
                <span className="text-[12px] font-medium text-[#4D8A45] sm:text-[13px]">
                  FPO व्यवसाय विकासासाठी व्यावहारिक कार्यशाळा
                </span>
              </div>
            </motion.div>

            {/* DIVIDER */}
            <div className="mx-auto my-7 h-px max-w-[620px] bg-[#EEE5DB]" />

            {/* =====================================
                BENEFITS
            ====================================== */}
            <div className="mx-auto max-w-[590px] space-y-3">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + index * 0.06,
                  }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="
                      mt-[2px]
                      flex
                      h-[23px]
                      w-[23px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EDF6E9]
                      text-[13px]
                      font-semibold
                      text-[#559A4D]
                    "
                  >
                    ✓
                  </div>

                  <p className="text-[14px] font-normal leading-6 text-[#332E29] sm:text-[15px]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* =====================================
                CTA
            ====================================== */}
            <div className="mx-auto mt-8 max-w-[590px]">
              <motion.button
                type="button"
                onClick={joinWhatsAppGroup}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[60px]
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#DE5A22]
                  via-[#EC702C]
                  to-[#E68A50]
                  px-6
                  py-4
                  text-center
                  text-[15px]
                  font-semibold
                  text-white
                  shadow-[0_15px_35px_rgba(225,92,31,0.25)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_20px_45px_rgba(225,92,31,0.38)]
                  sm:text-[17px]
                "
              >
                {/* SHINE */}
                <motion.span
                  animate={{
                    x: ["-300%", "700%"],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    top-[-40%]
                    h-[180%]
                    w-[50px]
                    rotate-[20deg]
                    bg-white/25
                    blur-[5px]
                  "
                />

                <span className="relative z-10">
                  WhatsApp ग्रुपमध्ये सहभागी व्हा
                </span>

                <span
                  className="
                    relative
                    z-10
                    ml-3
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    text-[19px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </motion.button>

              {/* BOTTOM NOTE */}
              <div className="mt-4 flex items-center justify-center gap-2 text-center">
                <span className="text-[13px]">🔒</span>

                <p className="text-[11px] font-normal text-[#81766C] sm:text-[12px]">
                  WhatsApp ग्रुपद्वारे पुढील माहिती व अपडेट्स मिळवा
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SMALL TRUST TEXT */}
        <p className="mx-auto mt-5 max-w-[650px] text-center text-[12px] leading-5 text-[#8B8177] sm:text-[13px]">
          MAHAFPO Federation • FPO व्यवसाय विकास • प्रत्यक्ष अनुभवावर आधारित
          मार्गदर्शन
        </p>
      </div>
    </section>
  );
};

export default WorkshopOffer;