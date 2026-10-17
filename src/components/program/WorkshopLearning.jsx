import React from "react";
import { motion } from "framer-motion";

const WorkshopLearning = () => {
  const modules = [
    {
      id: "01",
      image: "/module1.png",
      title: "FPO म्हणजे काय आणि ते प्रभावीपणे कसे चालवावे?",
      description:
        "शेतकरी उत्पादक कंपनीची रचना, उद्दिष्टे, संचालकांची भूमिका आणि दैनंदिन व्यवस्थापन समजून घ्या.",
    },
    {
      id: "02",
      image: "/module2.png",
      title: "FPO साठी योग्य Business Model कसा तयार करावा?",
      description:
        "आपल्या भागातील पीक, बाजारपेठ आणि उपलब्ध संसाधनांनुसार FPO साठी व्यवहार्य व्यवसाय मॉडेल तयार करण्याची दिशा समजून घ्या.",
    },
    {
      id: "03",
      image: "/module3.png",
      title: "शेतमालाला योग्य बाजारपेठ कशी मिळवावी?",
      description:
        "Market Linkage, Buyer-Seller जोडणी आणि थेट बाजारपेठेच्या माध्यमातून विक्रीच्या नवीन संधी कशा निर्माण करायच्या ते जाणून घ्या.",
    },
    {
      id: "04",
      image: "/module4.png",
      title: "FPO साठी कर्ज आणि आर्थिक नियोजन",
      description:
        "बँक कर्ज, आर्थिक जोडणी, प्रकल्प आराखडा आणि व्यवसायासाठी आवश्यक आर्थिक नियोजनाची प्रक्रिया समजून घ्या.",
    },
    {
      id: "05",
      image: "/module5.png",
      title: "शेतीमाल प्रक्रिया आणि मूल्यवर्धन",
      description:
        "कच्च्या शेतमालापासून प्रक्रिया, पॅकिंग आणि मूल्यवर्धनाद्वारे FPO च्या व्यवसायासाठी नवीन संधी कशा तयार करता येतील ते समजून घ्या.",
    },
    {
      id: "06",
      image: "/module6.png",
      title: "FPO च्या व्यवसाय वाढीसाठी पुढची दिशा",
      description:
        "उत्पादन नियोजन, बाजार माहिती, खरेदी-विक्री, व्यवसाय विस्तार आणि शाश्वत FPO उभारणीसाठी आवश्यक दिशा जाणून घ्या.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F1E7] py-14 sm:py-16 lg:py-20">
      
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#F4D058]/10 blur-[150px]" />

        <div className="absolute -bottom-[200px] -left-[180px] h-[420px] w-[420px] rounded-full bg-[#174326]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">

        {/* =====================================
            HEADING
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-[950px] text-center sm:mb-12 lg:mb-14"
        >
          <h2
            className="
              text-[27px]
              font-semibold
              leading-[1.2]
              tracking-[-0.025em]
              text-[#201B15]

              sm:text-[34px]
              md:text-[38px]
              lg:text-[42px]
            "
          >
            या कार्यशाळेत तुम्हाला{" "}
            <span className="text-[#DF6426]">
              काय शिकायला मिळेल?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[720px]
              text-[13px]
              font-normal
              leading-[1.7]
              text-[#6A5E51]

              sm:text-[14px]
              md:text-[15px]
            "
          >
            FPO व्यवस्थापनापासून बाजारपेठ, आर्थिक नियोजन आणि व्यवसाय
            वाढीपर्यंत महत्त्वाच्या विषयांचे प्रत्यक्ष मार्गदर्शन.
          </p>
        </motion.div>

        {/* =====================================
            MODULE GRID
        ====================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                overflow-hidden
                rounded-[22px]
                border
                border-[#E9DED2]
                bg-white
                shadow-[0_12px_35px_rgba(52,38,25,0.07)]
                transition-all
                duration-300

                hover:border-[#DF6426]/40
                hover:shadow-[0_20px_45px_rgba(52,38,25,0.12)]
              "
            >

              {/* =====================================
                  IMAGE
              ====================================== */}

              <div
                className="
                  relative
                  h-[205px]
                  overflow-hidden
                  bg-[#EEE8DF]

                  sm:h-[170px]
                  lg:h-[210px]
                "
              >
                <img
                  src={module.image}
                  alt={module.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-[1.04]
                  "
                />

                {/* IMAGE BOTTOM FADE */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-[70px]
                    bg-gradient-to-t
                    from-white/60
                    to-transparent
                  "
                />

                {/* MODULE BADGE */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    border
                    border-[#DF6426]/20
                    bg-white
                    px-4
                    py-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#DF6426]
                    shadow-sm

                    sm:text-[11px]
                  "
                >
                  MODULE {module.id}
                </div>
              </div>

              {/* =====================================
                  CONTENT
              ====================================== */}

              <div className="px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
                
                <h3
                  className="
                    text-[17px]
                    font-semibold
                    leading-[1.4]
                    tracking-[-0.015em]
                    text-[#201B15]

                    sm:text-[18px]
                    lg:text-[19px]
                  "
                >
                  {module.title}
                </h3>

                <p
                  className="
                    mt-2.5
                    text-[12px]
                    font-normal
                    leading-[1.7]
                    text-[#6A5E51]

                    sm:text-[13px]
                    lg:text-[13px]
                  "
                >
                  {module.description}
                </p>
              </div>

              {/* BOTTOM HOVER LINE */}
              <div
                className="
                  mx-auto
                  h-[3px]
                  w-0
                  rounded-full
                  bg-[#DF6426]
                  transition-all
                  duration-500

                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopLearning;