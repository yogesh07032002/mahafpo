import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaCalendarDay,
  FaCertificate,
  FaCircleCheck,
  FaSeedling,
  FaUserGroup,
} from "react-icons/fa6";

const FeeSection = () => {
  const inclusions = [
    {
      icon: FaCalendarDay,
      title: "1 दिवसीय कार्यशाळा",
      text: "FPO व्यवसाय व व्यवस्थापनावर मार्गदर्शन",
    },
    {
      icon: FaBookOpen,
      title: "Training Material",
      text: "कार्यशाळेसाठी आवश्यक प्रशिक्षण साहित्य",
    },
    {
      icon: FaCertificate,
      title: "Participation Certificate",
      text: "लागू असल्यास सहभाग प्रमाणपत्र",
      optional: true,
    },
    {
      icon: FaUserGroup,
      title: "Networking & Interaction",
      text: "सहभागींसोबत संवादाची संधी",
      optional: true,
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#F4D058]/12 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "radial-gradient(#174326 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[750px] text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-[#174326]/10 bg-[#F7F9F3] px-4 py-2">

            <FaSeedling className="text-xs text-[#174326]" />

            <span className="text-xs font-black text-[#174326]">
              कार्यशाळा नोंदणी
            </span>

          </div>

          <h2 className="mt-5 text-[32px] font-black leading-[1.1] tracking-[-0.035em] text-[#174326] sm:text-[40px] lg:text-[48px]">
            Workshop Registration
          </h2>

          <p className="mx-auto mt-4 max-w-[580px] text-sm font-medium leading-7 text-gray-500 sm:text-base">
            FPO व्यवसाय आणि व्यवस्थापनाशी संबंधित महत्त्वाच्या
            विषयांवर एका दिवसात उपयुक्त मार्गदर्शन.
          </p>

        </motion.div>

        {/* =====================================================
            PRICE HERO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-10 max-w-[900px]"
        >

          {/* yellow back layer */}
          <div className="absolute -inset-x-3 -bottom-3 top-3 rounded-[30px] bg-[#F4D058]" />

          {/* white pricing area */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#174326]/10 bg-white px-5 py-9 text-center shadow-[0_25px_70px_rgba(23,67,38,0.09)] sm:px-10 sm:py-11">

            {/* decorative text */}

            <span className="pointer-events-none absolute -right-3 -top-12 text-[160px] font-black leading-none text-[#174326]/[0.025]">
              ₹
            </span>

            <div className="relative z-10">

              <span className="text-xs font-black text-[#174326]/55">
                प्रति सहभागी नोंदणी शुल्क
              </span>

              {/* PRICE */}

              <div className="mt-3 flex items-start justify-center">

                <span className="mt-3 text-[28px] font-black text-[#174326] sm:text-[34px]">
                  ₹
                </span>

                <strong className="text-[76px] font-black leading-none tracking-[-0.065em] text-[#174326] sm:text-[95px]">
                  2,500
                </strong>

              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">

                <span className="inline-flex items-center gap-2 rounded-full bg-[#EFF5EC] px-4 py-2 text-[11px] font-black text-[#174326]">

                  <FaCircleCheck />

                  1 दिवसीय कार्यशाळा

                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF6C9] px-4 py-2 text-[11px] font-black text-[#806000]">

                  <FaCircleCheck />

                  मर्यादित जागा

                </span>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            WHAT'S INCLUDED
        ====================================================== */}

        <div className="mx-auto mt-14 max-w-[1100px]">

          <div className="mb-6 text-center">

            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#A07800]">
              REGISTRATION INCLUDES
            </span>

            <h3 className="mt-2 text-xl font-black text-[#174326] sm:text-2xl">
              ₹2,500 च्या नोंदणीमध्ये काय समाविष्ट आहे?
            </h3>

          </div>

          {/* ===============================================
              HORIZONTAL BENEFIT BAR
          ================================================ */}

          <div className="grid overflow-hidden rounded-[22px] border border-[#174326]/10 bg-[#F8FAF6] sm:grid-cols-2 lg:grid-cols-4">

            {inclusions.map((item, index) => {
              const Icon = item.icon;

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
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className={`
                    group relative p-5 text-center
                    transition-all duration-300
                    hover:bg-white sm:p-6

                    ${
                      index !== inclusions.length - 1
                        ? "lg:border-r lg:border-[#174326]/10"
                        : ""
                    }

                    ${
                      index < 2
                        ? "sm:border-b sm:border-[#174326]/10 lg:border-b-0"
                        : ""
                    }

                    ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-[#174326]/10"
                        : ""
                    }
                  `}
                >

                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#174326] text-sm text-[#F4D058] transition-all duration-300 group-hover:-translate-y-1">

                    <Icon />

                  </div>

                  <h4 className="mt-4 text-sm font-black text-[#174326]">
                    {item.title}
                  </h4>

                  {item.optional && (
                    <span className="mt-1 inline-block text-[8px] font-black text-[#A07800]">
                      लागू असल्यास
                    </span>
                  )}

                  <p className="mx-auto mt-2 max-w-[190px] text-[11px] font-medium leading-5 text-gray-500">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            WORKSHOP IMAGE STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-8 max-w-[1100px] overflow-hidden rounded-[22px]"
        >

          <div className="relative h-[220px] sm:h-[260px]">

            <img
              src="/images/fpo-workshop-training.jpg"
              alt="FPO व्यवसाय विकास कार्यशाळा"
              className="h-full w-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#12391F]/95 via-[#12391F]/70 to-[#12391F]/20" />

            {/* CONTENT */}

            <div className="absolute inset-0 flex items-center p-6 sm:p-9">

              <div className="max-w-[570px]">

                <span className="text-[10px] font-black tracking-[0.13em] text-[#F4D058]">
                  MAHAFPO FEDERATION
                </span>

                <h3 className="mt-2 text-[22px] font-black leading-tight text-white sm:text-[28px]">
                  एका दिवसात मिळवा FPO व्यवसायवाढीसाठी
                  आवश्यक दिशा
                </h3>

                <p className="mt-3 hidden max-w-[500px] text-xs font-medium leading-6 text-white/65 sm:block">
                  व्यवसाय, बाजारपेठ, Procurement, शासकीय योजना
                  आणि व्यवस्थापनाशी संबंधित महत्त्वाच्या विषयांवर मार्गदर्शन.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-[1100px]"
        >

          <div className="flex flex-col items-center justify-between gap-6 border-t border-[#174326]/10 pt-7 text-center md:flex-row md:text-left">

            <div>

              <span className="text-[10px] font-black text-[#A07800]">
                नोंदणी सुरू आहे
              </span>

              <h3 className="mt-1 text-lg font-black text-[#174326] sm:text-xl">
                तुमची जागा आजच निश्चित करा.
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-500">
                ₹2,500 प्रति सहभागी • मर्यादित जागा • पूर्व नोंदणी आवश्यक
              </p>

            </div>

            <button
              onClick={scrollToRegistration}
              className="group flex w-full items-center justify-center gap-4 rounded-xl bg-[#174326] px-7 py-4 text-sm font-black text-white shadow-[0_12px_30px_rgba(23,67,38,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(23,67,38,0.22)] sm:w-auto sm:text-base"
            >

              ₹2,500 मध्ये नोंदणी करा

              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4D058] text-[#174326]">

                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />

              </span>

            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default FeeSection;