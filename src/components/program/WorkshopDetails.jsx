import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarDays,
  FaClock,
  FaLocationDot,
  FaGraduationCap,
  FaIndianRupeeSign,
  FaUsers,
  FaSeedling,
  FaCircleCheck,
} from "react-icons/fa6";

const WorkshopDetails = () => {
  const details = [
    {
      number: "01",
      icon: FaCalendarDays,
      label: "दिनांक",
      value: "लवकरच जाहीर होईल",
    },
    {
      number: "02",
      icon: FaClock,
      label: "वेळ",
      value: "लवकरच जाहीर होईल",
    },
    {
      number: "03",
      icon: FaLocationDot,
      label: "स्थळ",
      value: "लवकरच जाहीर होईल",
    },
    {
      number: "04",
      icon: FaGraduationCap,
      label: "कालावधी",
      value: "1 दिवस",
    },
    {
      number: "05",
      icon: FaIndianRupeeSign,
      label: "नोंदणी शुल्क",
      value: "₹2,500",
      highlight: true,
    },
    {
      number: "06",
      icon: FaUsers,
      label: "उपलब्ध जागा",
      value: "मर्यादित",
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
    <section className="relative overflow-hidden bg-[#FAFBF7] py-16 sm:py-20 lg:py-24">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[220px] top-[100px] h-[450px] w-[450px] rounded-full bg-[#174326]/5 blur-[140px]" />

        <div className="absolute -right-[220px] bottom-0 h-[450px] w-[450px] rounded-full bg-[#F4D058]/20 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(#174326 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-12">

        {/* =========================================
            HEADING
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[820px] text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#174326]/10 bg-white px-4 py-2 shadow-sm">
            <FaSeedling className="text-xs text-[#174326]" />

            <span className="text-[11px] font-black text-[#174326]">
              महाएफपीओ फेडरेशन आयोजित
            </span>
          </div>

          <h2 className="mt-5 text-[34px] font-black leading-[1.08] tracking-[-0.035em] text-[#174326] sm:text-[42px] lg:text-[50px]">
            कार्यशाळेची
            <span className="relative ml-2 inline-block">
              <span className="relative z-10">
                संपूर्ण माहिती
              </span>

              <span className="absolute bottom-[3px] left-0 h-[10px] w-full rounded-full bg-[#F4D058]/75" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-sm font-medium leading-7 text-gray-500 sm:text-[15px]">
            कार्यशाळेत सहभागी होण्यापूर्वी दिनांक, वेळ, स्थळ,
            कालावधी, नोंदणी शुल्क आणि उपलब्ध जागांची माहिती
            एका नजरेत जाणून घ्या.
          </p>
        </motion.div>

        {/* =========================================
            MAIN INFORMATION BOARD
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-11 max-w-[1180px]"
        >

          {/* Mustard accent */}
          <div className="absolute -bottom-3 left-[4%] right-[4%] h-full rounded-[28px] bg-[#F4D058]" />

          <div className="relative overflow-hidden rounded-[26px] border border-[#174326]/10 bg-white shadow-[0_25px_70px_rgba(23,67,38,0.08)]">

            {/* =====================================
                TOP INTRO
            ====================================== */}

            <div className="flex flex-col justify-between gap-5 border-b border-[#174326]/10 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:px-10">

              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#A07800]">
                  1 DAY FPO WORKSHOP
                </span>

                <h3 className="mt-2 text-xl font-black text-[#174326] sm:text-2xl">
                  1 दिवसीय विशेष FPO कार्यशाळा
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <FaCircleCheck className="text-sm text-[#174326]" />

                <span className="text-xs font-bold text-gray-500">
                  FPO / FPC पदाधिकारी आणि संबंधित व्यक्तींसाठी
                </span>
              </div>

            </div>

            {/* =====================================
                INFORMATION ROWS
            ====================================== */}

            <div className="grid md:grid-cols-2">

              {details.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className={`
                      group relative flex items-center gap-5
                      px-6 py-6 sm:px-8 lg:px-10 lg:py-7

                      ${index % 2 === 0
                        ? "md:border-r md:border-[#174326]/10"
                        : ""
                      }

                      ${index < 4
                        ? "border-b border-[#174326]/10"
                        : ""
                      }

                      ${item.highlight
                        ? "bg-[#FFF9DD]"
                        : "bg-white hover:bg-[#F8FAF5]"
                      }

                      transition-colors duration-300
                    `}
                  >

                    {/* Number */}
                    <span className="absolute right-5 top-4 text-[9px] font-black text-[#174326]/15">
                      {item.number}
                    </span>

                    {/* Icon */}
                    <div
                      className={`
                        flex h-12 w-12 shrink-0 items-center justify-center
                        rounded-full text-sm transition-all duration-300

                        ${
                          item.highlight
                            ? "bg-[#F4D058] text-[#174326]"
                            : "bg-[#F0F5ED] text-[#174326] group-hover:bg-[#174326] group-hover:text-[#F4D058]"
                        }
                      `}
                    >
                      <Icon />
                    </div>

                    {/* Content */}
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400">
                        {item.label}
                      </span>

                      <strong
                        className={`
                          mt-1 block font-black
                          ${
                            item.highlight
                              ? "text-[22px] text-[#174326]"
                              : "text-[15px] text-[#174326]"
                          }
                        `}
                      >
                        {item.value}
                      </strong>

                      {item.highlight && (
                        <span className="mt-1 block text-[9px] font-bold text-[#A07800]">
                          प्रति सहभागी
                        </span>
                      )}
                    </div>

                  </motion.div>
                );
              })}

            </div>

            {/* =====================================
                BOTTOM REGISTRATION
            ====================================== */}

            <div className="border-t border-[#174326]/10 bg-[#F7F9F3] px-6 py-7 sm:px-8 lg:px-10">

              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                <div className="text-center md:text-left">

                  <div className="flex items-center justify-center gap-2 md:justify-start">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A07800] opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A07800]" />
                    </span>

                    <span className="text-[10px] font-black text-[#A07800]">
                      नोंदणी सुरू आहे
                    </span>
                  </div>

                  <h4 className="mt-2 text-lg font-black text-[#174326] sm:text-xl">
                    मर्यादित जागा — तुमची जागा निश्चित करा.
                  </h4>

                  <p className="mt-1 text-xs font-medium text-gray-500">
                    नोंदणी शुल्क ₹2,500 प्रति सहभागी
                  </p>

                </div>

                <button
                  onClick={scrollToRegistration}
                  className="group flex w-full items-center justify-center gap-4 rounded-xl bg-[#174326] px-7 py-4 text-sm font-black text-white shadow-[0_12px_30px_rgba(23,67,38,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_17px_35px_rgba(23,67,38,0.20)] sm:w-auto sm:text-base"
                >
                  कार्यशाळेसाठी नोंदणी करा

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4D058] text-[#174326]">
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>

              </div>

            </div>

          </div>
        </motion.div>

        {/* =========================================
            SMALL NOTE
        ========================================== */}

        <p className="mx-auto mt-8 max-w-[700px] text-center text-[11px] font-medium leading-5 text-gray-400">
          दिनांक, वेळ आणि स्थळ निश्चित झाल्यानंतर अद्ययावत माहिती
          नोंदणीकृत सहभागींना कळवण्यात येईल.
        </p>

      </div>
    </section>
  );
};

export default WorkshopDetails;