import React from "react";
import { motion } from "framer-motion";

const WorkshopForWho = () => {
  const items = [
    {
      icon: "🌱",
      title: "नवीन FPO स्थापन करू इच्छिणारे शेतकरी",
      description:
        "ज्यांना शेतकरी उत्पादक कंपनीची सुरुवात आणि योग्य रचना समजून घ्यायची आहे.",
    },
    {
      icon: "👥",
      title: "FPO चे संचालक आणि पदाधिकारी",
      description:
        "ज्यांना आपल्या FPO चे व्यवस्थापन अधिक प्रभावीपणे करायचे आहे.",
    },
    {
      icon: "📈",
      title: "FPO चा व्यवसाय वाढवू इच्छिणारे",
      description:
        "ज्यांना नवीन व्यवसाय संधी, बाजारपेठ आणि उत्पन्नाचे मार्ग शोधायचे आहेत.",
    },
    {
      icon: "🤝",
      title: "बाजारपेठेशी थेट जोडणी करू इच्छिणारे",
      description:
        "ज्यांना Buyer-Seller जोडणी आणि शेतमालासाठी योग्य बाजारपेठ मिळवायची आहे.",
    },
    {
      icon: "🏦",
      title: "कर्ज व आर्थिक जोडणी शोधणारे FPO",
      description:
        "ज्यांना बँक कर्ज, आर्थिक नियोजन आणि प्रकल्प आराखड्याबाबत दिशा हवी आहे.",
    },
    {
      icon: "⚙️",
      title: "प्रक्रिया व मूल्यवर्धन सुरू करू इच्छिणारे",
      description:
        "ज्यांना शेतमाल प्रक्रिया, पॅकिंग आणि मूल्यवर्धनातून व्यवसाय वाढवायचा आहे.",
    },
    {
      icon: "💡",
      title: "कृषी उद्योजक आणि Agri Startups",
      description:
        "ज्यांना कृषी क्षेत्रात नवीन व्यवसाय आणि Value Chain संधी विकसित करायच्या आहेत.",
    },
    {
      icon: "🌾",
      title: "FPO अधिक सक्षम करू इच्छिणारे CEO",
      description:
        "ज्यांना उत्पादन नियोजन, व्यवस्थापन आणि व्यवसायाची पुढील दिशा समजून घ्यायची आहे.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const joinWhatsAppGroup = () => {
    window.open("https://chat.whatsapp.com/C2BGJTtxEvbBUzRTAek8zU", "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-[#FFFCF8] py-14 sm:py-16 lg:py-20">
      {/* ================================
          SOFT BACKGROUND
      ================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] -top-[220px] h-[430px] w-[430px] rounded-full border border-[#E76A28]/10" />

        <div className="absolute -right-[170px] top-[40px] h-[430px] w-[430px] rounded-full bg-[#FFF3E7]/45 blur-[90px]" />

        <div className="absolute bottom-[-180px] left-[20%] h-[330px] w-[550px] rounded-full bg-[#F4D058]/5 blur-[120px]" />
      </div>

      {/* DECORATION DOTS */}

      <div className="pointer-events-none absolute left-7 top-[130px] hidden grid-cols-4 gap-3 lg:grid">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="h-[3px] w-[3px] rounded-full bg-[#E76A28]/30"
          />
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-[100px] right-8 hidden grid-cols-4 gap-3 lg:grid">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="h-[3px] w-[3px] rounded-full bg-[#E76A28]/25"
          />
        ))}
      </div>

      {/* ================================
          CONTAINER
      ================================= */}

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-8">
        {/* ================================
            HEADING
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-[850px] text-center sm:mb-12"
        >
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-0.025em] text-[#171713] sm:text-[38px] lg:text-[44px]">
            ही कार्यशाळा{" "}
            <span className="text-[#E86125]">कोणासाठी</span> आहे?
          </h2>

          {/* SMALL ACCENT */}

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#E86125]/50" />
            <span className="h-2 w-2 rotate-45 rounded-[2px] bg-[#F4B942]" />
            <span className="h-px w-8 bg-[#E86125]/50" />
          </div>

          <p className="mx-auto mt-4 max-w-[720px] text-[15px] font-normal leading-7 text-[#6E6A63] sm:text-[16px]">
            खालीलपैकी कोणत्याही गटात तुम्ही असाल, तर ही FPO कार्यशाळा
            तुमच्यासाठी उपयुक्त ठरेल.
          </p>
        </motion.div>

        {/* ================================
            CARDS
        ================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-5"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                flex
                min-h-[118px]
                items-center
                gap-4
                overflow-hidden
                rounded-[22px]
                border
                border-[#E76A28]/10
                bg-white
                px-4
                py-4
                shadow-[0_10px_35px_rgba(75,50,25,0.055)]
                transition-all
                duration-300
                hover:border-[#E76A28]/30
                hover:shadow-[0_18px_45px_rgba(75,50,25,0.10)]
                sm:gap-5
                sm:px-5
              "
            >
              {/* HOVER BACKGROUND */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#FFF5EB]/0
                  via-[#FFF5EB]/0
                  to-[#FFF1E2]/0
                  transition-all
                  duration-500
                  group-hover:from-[#FFF8F2]/60
                  group-hover:to-[#FFF1E5]/60
                "
              />

              {/* ICON */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[70px]
                  w-[70px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[18px]
                  border
                  border-[#F3B895]/45
                  bg-gradient-to-br
                  from-[#FFF9F4]
                  to-[#FFF1E7]
                  text-[32px]
                  shadow-[0_8px_20px_rgba(225,105,38,0.08)]
                  transition-all
                  duration-300
                  group-hover:scale-[1.04]
                  sm:h-[76px]
                  sm:w-[76px]
                  sm:text-[35px]
                "
              >
                {item.icon}
              </div>

              {/* CONTENT */}

              <div className="relative z-10 min-w-0 flex-1">
                <h3 className="text-[16px] font-semibold leading-[1.35] text-[#1E1B17] sm:text-[18px]">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-[13px] font-normal leading-[1.65] text-[#777169] sm:text-[14px]">
                  {item.description}
                </p>
              </div>

              {/* ARROW */}

              <div
                className="
                  relative
                  z-10
                  hidden
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFF5EA]
                  text-[22px]
                  font-normal
                  text-[#E86125]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:bg-[#E86125]
                  group-hover:text-white
                  sm:flex
                "
              >
                ›
              </div>

              {/* BOTTOM HOVER LINE */}

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#E86125]
                  to-transparent
                  transition-all
                  duration-500
                  group-hover:w-[70%]
                "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ================================
            CTA
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col items-center sm:mt-12"
        >
          <motion.button
            type="button"
            onClick={joinWhatsAppGroup}
            whileHover={{
              y: -4,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              relative
              flex
              min-h-[62px]
              w-full
              max-w-[460px]
              cursor-pointer
              items-center
              justify-center
              gap-3
              overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-[#E75B1D]
              via-[#F17724]
              to-[#E95F1F]
              px-6
              py-4
              text-[15px]
              font-semibold
              text-white
              shadow-[0_15px_35px_rgba(229,91,29,0.28)]
              transition-shadow
              duration-300
              hover:shadow-[0_20px_45px_rgba(229,91,29,0.38)]
              sm:text-[17px]
            "
          >
            {/* SHINE */}

            <motion.span
              animate={{
                x: ["-250%", "500%"],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                top-[-30%]
                h-[160%]
                w-[40px]
                rotate-[20deg]
                bg-white/25
                blur-[5px]
              "
            />

            {/* WHATSAPP */}

            <span
              className="
                relative
                z-10
                flex
                h-[38px]
                w-[38px]
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/15
                text-[21px]
              "
            >
              ☎
            </span>

            <span className="relative z-10">
              WhatsApp ग्रुपमध्ये सहभागी व्हा
            </span>

            <span
              className="
                relative
                z-10
                flex
                h-[34px]
                w-[34px]
                items-center
                justify-center
                rounded-full
                bg-[#FFE47C]
                text-[21px]
                text-[#D95119]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopForWho;