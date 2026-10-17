import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBriefcase,
  FaSeedling,
  FaUserGroup,
  FaUserTie,
  FaUsers,
} from "react-icons/fa6";

const WhoShouldAttend = () => {
  /* =========================================================
     AUDIENCE
  ========================================================= */

  const audience = [
    {
      icon: FaUserTie,
      title: "FPO संचालक",
      english: "FPO Directors",
      description: "व्यवसायवाढ आणि पुढील दिशा समजून घेण्यासाठी.",
    },
    {
      icon: FaBriefcase,
      title: "FPO CEO / व्यवस्थापन टीम",
      english: "CEO & Management",
      description: "Planning आणि Operations अधिक प्रभावी करण्यासाठी.",
    },
    {
      icon: FaBuilding,
      title: "FPC प्रतिनिधी",
      english: "FPC Representatives",
      description: "Market Linkage आणि Procurement संधी समजण्यासाठी.",
    },
    {
      icon: FaUsers,
      title: "शेतकरी गट",
      english: "Farmer Groups",
      description: "एकत्रित व्यवसाय आणि बाजारपेठेच्या संधींसाठी.",
    },
    {
      icon: FaSeedling,
      title: "कृषी उद्योजक",
      english: "Agri Entrepreneurs",
      description: "कृषी व्यवसायातील नवीन संधी जाणून घेण्यासाठी.",
    },
    {
      icon: FaUserGroup,
      title: "FPO Development क्षेत्रातील व्यक्ती",
      english: "FPO Professionals",
      description: "FPO व्यवसाय आणि व्यवस्थापनाची समज वाढवण्यासाठी.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#10371E]">
      {/* =====================================================
          BACKGROUND IMAGE

          Generated horizontal image:
          public/images/fpo-farmers.jpg
      ====================================================== */}

      <div className="absolute inset-0">
        <img
          src="/program-bg.png"
          alt=""
          aria-hidden="true"
          className="
            h-full w-full
            object-cover object-center
            scale-[1.02]
          "
        />

        {/* DARK GREEN OVERLAY */}

        <div className="absolute inset-0 bg-[#092615]/55" />

        {/* LEFT TO RIGHT GRADIENT */}

        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#092615]/75
            via-[#10371E]/68
            to-[#10371E]/68
          "
        />

        {/* BOTTOM GRADIENT */}

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#092615]/50
            via-transparent
            to-[#092615]/20
          "
        />
      </div>

      {/* =====================================================
          DECORATIVE ELEMENTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* GOLD GLOW */}

        <div
          className="
            absolute -right-[180px] -top-[180px]
            h-[500px] w-[500px]
            rounded-full
            bg-[#F4D058]/10
            blur-[140px]
          "
        />

        {/* GREEN GLOW */}

        <div
          className="
            absolute -bottom-[220px] -left-[180px]
            h-[500px] w-[500px]
            rounded-full
            bg-[#327C48]/20
            blur-[150px]
          "
        />

        {/* PATTERN */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* LARGE FPO TEXT */}

        <span
          className="
            absolute -right-8 top-6
            hidden select-none
            text-[180px] font-black
            leading-none
            tracking-[-0.08em]
            text-white/[0.018]
            xl:block
          "
        >
          FPO
        </span>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto w-full
          max-w-[1350px]
          px-5 py-16
          sm:px-8 sm:py-20
          lg:px-12 lg:py-24
        "
      >
        {/* ===================================================
            HEADING
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
            duration: 0.55,
          }}
          className="mx-auto max-w-[850px] text-center"
        >
          {/* BADGE */}

          <div
            className="
              inline-flex items-center
              gap-2.5 rounded-full
              border border-[#F4D058]/30
              bg-[#F4D058]/10
              px-4 py-2
              backdrop-blur-md
            "
          >
            <FaUserGroup className="text-[14px] text-[#F4D058]" />

            <span
              className="
                text-[13px] font-black
                text-[#F4D058]
                sm:text-[14px]
              "
            >
              सहभागी कोण होऊ शकतात?
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-5
              text-[34px] font-black
              leading-[1.12]
              tracking-[-0.03em]
              text-white
              sm:text-[42px]
              lg:text-[48px]
            "
          >
            ही कार्यशाळा{" "}
            <span className="text-[#F4D058]">
              कोणासाठी आहे?
            </span>
          </h2>

          {/* SHORT DESCRIPTION */}

          <p
            className="
              mx-auto mt-4
              max-w-[720px]
              text-[16px] font-medium
              leading-7 text-white/80
              sm:text-[17px]
            "
          >
            FPO/FPC, शेतकरी गट आणि कृषी व्यवसायाशी प्रत्यक्ष जोडलेल्या
            व्यक्तींसाठी ही कार्यशाळा उपयुक्त आहे.
          </p>
        </motion.div>

        {/* ===================================================
            AUDIENCE CARDS
        ==================================================== */}

        <div
          className="
            mx-auto mt-10
            grid max-w-[1150px]
            grid-cols-1 gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {audience.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 22,
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
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group relative
                  min-h-[160px]
                  overflow-hidden
                  rounded-2xl
                  border border-white/15
                  bg-white/[0.09]
                  px-5 py-5
                  backdrop-blur-[7px]
                  transition-all duration-300
                  hover:border-[#F4D058]/50
                  hover:bg-white/[0.14]
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)]
                  sm:px-6 sm:py-6
                "
              >
                {/* CARD GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute -right-10 -top-10
                    h-[100px] w-[100px]
                    rounded-full
                    bg-[#F4D058]/0
                    blur-[35px]
                    transition-all duration-300
                    group-hover:bg-[#F4D058]/10
                  "
                />

                {/* CONTENT */}

                <div className="relative z-10 flex items-start gap-4">
                  {/* ICON */}

                  <div
                    className="
                      flex h-[52px] w-[52px]
                      shrink-0 items-center
                      justify-center rounded-xl
                      bg-[#F4D058]
                      text-[19px]
                      text-[#174326]
                      shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon />
                  </div>

                  {/* TEXT */}

                  <div className="min-w-0">
                    <h3
                      className="
                        text-[17px] font-black
                        leading-6 text-white
                        sm:text-[18px]
                      "
                    >
                      {item.title}
                    </h3>

                    <span
                      className="
                        mt-1 block
                        text-[13px] font-bold
                        text-[#F4D058]/90
                      "
                    >
                      {item.english}
                    </span>

                    <p
                      className="
                        mt-2
                        text-[14px] font-medium
                        leading-6 text-white/70
                        sm:text-[15px]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* HOVER LINE */}

                <span
                  className="
                    absolute bottom-0 left-0
                    h-[3px] w-0
                    bg-[#F4D058]
                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM SIMPLE MESSAGE
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-8 text-center"
        >
          <div
            className="
              inline-flex items-center
              gap-2.5 rounded-full
              border border-white/10
              bg-black/10
              px-5 py-2.5
              backdrop-blur-sm
            "
          >
            <FaSeedling className="text-[14px] text-[#F4D058]" />

            <p
              className="
                text-[14px] font-semibold
                text-white/75
                sm:text-[15px]
              "
            >
              शेतकरी ते FPO Management — कृषी व्यवसायात पुढे
              जाणाऱ्यांसाठी.
            </p>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#F4D058]" />
    </section>
  );
};

export default WhoShouldAttend;