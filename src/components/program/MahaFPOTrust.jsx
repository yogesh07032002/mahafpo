import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaLocationDot,
  FaSeedling,
} from "react-icons/fa6";

const MahaFPOTrust = () => {
  const stats = [
    {
      icon: FaBuilding,
      number: "650+",
      label: "FPO / FPC सदस्य",
    },
    {
      icon: FaLocationDot,
      number: "24",
      label: "जिल्ह्यांमध्ये उपस्थिती",
    },
    {
      icon: FaSeedling,
      number: "2014",
      label: "पासून कार्यरत",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#12391F]">
      {/* subtle background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="pointer-events-none absolute -left-32 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#F4D058]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:items-stretch">

          {/* =========================================
              INTRO
          ========================================== */}

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 border-b border-white/10 py-7 lg:w-[38%] lg:border-b-0 lg:border-r lg:py-8 lg:pr-10"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4D058] text-[17px] text-[#174326]">
              <FaSeedling />
            </div>

            <div>
              <span className="text-[12px] font-black uppercase tracking-[0.12em] text-[#F4D058] sm:text-[13px]">
                विश्वासाचे नेटवर्क
              </span>

              <h2 className="mt-1 text-[24px] font-black leading-tight text-white sm:text-[27px]">
                MahaFPO बद्दल
              </h2>

              <p className="mt-1.5 text-[14px] font-medium leading-6 text-white/65 sm:text-[15px]">
                महाराष्ट्रातील FPO/FPC नेटवर्कसोबत कार्यरत
              </p>
            </div>
          </motion.div>

          {/* =========================================
              STATS
          ========================================== */}

          <div className="grid flex-1 grid-cols-1 sm:grid-cols-3">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  className={`
                    group flex items-center gap-4 py-6
                    sm:px-6
                    lg:px-8 lg:py-8

                    ${
                      index !== stats.length - 1
                        ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                        : ""
                    }
                  `}
                >
                  {/* ICON */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F4D058]/25 bg-[#F4D058]/10 text-[15px] text-[#F4D058] transition-all duration-300 group-hover:bg-[#F4D058] group-hover:text-[#174326]">
                    <Icon />
                  </div>

                  {/* NUMBER + LABEL */}

                  <div>
                    <strong className="block text-[30px] font-black leading-none tracking-[-0.04em] text-white sm:text-[34px]">
                      {item.number}
                    </strong>

                    <span className="mt-2 block text-[13px] font-bold leading-5 text-white/65 sm:text-[14px]">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* bottom accent */}
      <div className="h-[4px] w-full bg-[#F4D058]" />
    </section>
  );
};

export default MahaFPOTrust;