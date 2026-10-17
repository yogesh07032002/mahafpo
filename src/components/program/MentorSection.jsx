import React from "react";
import { motion } from "framer-motion";

const MentorSection = () => {
  const joinWhatsAppGroup = () => {
    window.open("https://chat.whatsapp.com/C2BGJTtxEvbBUzRTAek8zU", "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF9F1] py-12 sm:py-14 lg:py-16">
      
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#F4D058]/8 blur-[120px]" />

        <div className="absolute -right-[180px] bottom-[-100px] h-[440px] w-[440px] rounded-full bg-[#E86125]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-7 lg:px-8">
        <div className="grid items-start gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          
          {/* ==================================================
              LEFT IMAGE
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[530px] lg:sticky lg:top-24"
          >
            {/* IMAGE CARD */}
            <div
              className="
                relative
                flex
                min-h-[300px]
                items-end
                justify-center
                overflow-hidden
                rounded-[28px]

                bg-gradient-to-br
                from-[#FBE5D1]
                via-[#F7D7BD]
                to-[#F2C9A7]

                sm:min-h-[500px]
                lg:min-h-[530px]
              "
            >
              {/* DECORATIVE CIRCLE */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[42%]
                  h-[390px]
                  w-[390px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/40
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-[42%]
                  h-[310px]
                  w-[310px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white/10
                "
              />

              {/* TOP CORNER */}
              <div className="absolute left-6 top-6 h-[2px] w-[48px] bg-[#E86125]/50" />

              <div className="absolute left-6 top-6 h-[48px] w-[2px] bg-[#E86125]/50" />

              {/* IMAGE */}
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                src="/mentor.png"
                alt="डॉ. संजय पांडुरंग पांढरे"
                className="
                  relative
                  z-10
                  block
                  h-auto
                  max-h-[490px]
                  w-auto
                  max-w-[98%]
                  object-contain
                  object-bottom

                  sm:max-h-[580px]
                  lg:max-h-[640px]
                "
              />
            </div>

            {/* ================= BADGE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="
                absolute
                bottom-5
                right-2
                z-20

                rounded-[16px]
                border
                border-[#E86125]/10
                bg-white

                px-5
                py-3

                shadow-[0_15px_40px_rgba(70,45,25,0.14)]

                sm:bottom-7
                sm:right-[-16px]
              "
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#75695D]">
                MAHAFPO FEDERATION
              </p>

              <p className="mt-0.5 text-[17px] font-semibold text-[#E86125]">
                व्यवस्थापकीय संचालक
              </p>
            </motion.div>
          </motion.div>

          {/* ==================================================
              RIGHT CONTENT
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* ================= LABEL ================= */}
            <div
              className="
                inline-flex
                rounded-full
                border
                border-[#E86125]/10
                bg-[#FBE5D3]
                px-5
                py-2
              "
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#D95B25] sm:text-[12px]">
                MEET YOUR MENTOR
              </span>
            </div>

            {/* ================= NAME ================= */}
            <h2
              className="
                mt-4
                text-[30px]
                font-bold
                leading-[1.15]
                tracking-[-0.03em]
                text-[#1B1814]

                sm:text-[38px]
                lg:text-[43px]
              "
            >
              डॉ. संजय पांडुरंग पांढरे
            </h2>

            {/* SUBTITLE */}
            <p className="mt-2 text-[15px] font-medium leading-[1.6] text-[#E86125] sm:text-[17px]">
              कृषी व्यवसाय, FPO विकास, कृषी निर्यात व सेंद्रिय शेती तज्ज्ञ
            </p>

            {/* DIVIDER */}
            <div className="my-4 flex items-center gap-2">
              <span className="h-[2px] w-[48px] bg-[#E86125]" />

              <span className="h-[6px] w-[6px] rotate-45 bg-[#F4C447]" />
            </div>

            {/* ==================================================
                EDUCATION
            ================================================== */}
            <div
              className="
                mb-4
                rounded-[16px]
                border
                border-[#E86125]/10
                bg-white/70
                px-5
                py-4
              "
            >
              <p className="mb-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#D95B25]">
                शिक्षण
              </p>

              <p className="text-[14px] font-normal leading-[1.65] text-[#554F48] sm:text-[16px]">
                एम. एस्सी. कृषी (Extension Education) • पीएच.डी.
                (Agriculture Extension) — 2004
              </p>
            </div>

            {/* ==================================================
                COMPACT BIO CONTENT
            ================================================== */}
            <div
              className="
                space-y-2
                text-[14px]
                font-normal
                leading-[1.65]
                text-[#625C55]

                sm:text-[15px]
                lg:text-[15.5px]
                lg:text-justify
              "
            >
              <p>
                कृषी निविष्ठा विक्रीतून करिअरची सुरुवात करून त्यांनी
                महाराष्ट्र शासनाच्या कृषी विभागात सेवा दिली. त्यानंतर{" "}
                <span className="font-medium text-[#E86125]">
                  ECOCERT
                </span>{" "}
                मध्ये Inspector आणि Manager म्हणून काम करत कृषी निर्यात,
                सेंद्रिय शेती आणि Certification क्षेत्रात व्यापक अनुभव
                मिळवला.
              </p>

              <p>
                Organic, Global GAP, Demeter, Bio Suisse, ISO आणि FSMS अशा
                विविध Certification Systems मध्ये Auditor व Certification
                Manager म्हणून त्यांनी काम केले. भारतातील विविध राज्यांसह{" "}
                <span className="font-medium text-[#E86125]">
                  Nepal, Qatar आणि इतर देशांमध्ये
                </span>{" "}
                Certification Audit व Consultancy चा अनुभव त्यांनी घेतला
                आहे.
              </p>

              <p>
                राज्य व केंद्र सरकारच्या विविध अभ्यासगटांसह{" "}
                <span className="font-medium text-[#E86125]">
                  Doubling Farmers' Income (DFI)
                </span>{" "}
                Task Force मध्ये त्यांनी योगदान दिले. IFAD, World Bank
                सहाय्यित MACP व SMART Project तसेच{" "}
                <span className="font-medium text-[#E86125]">
                  PMFME
                </span>{" "}
                अंतर्गत कृषी व्यवसाय, Enterprise Development आणि शेतकरी
                बाजार जोडणीवर त्यांनी काम केले.
              </p>

              <p>
                गेल्या 20 वर्षांच्या व्यावसायिक कारकिर्दीत FPO Development,
                Marketing, Contract Farming, E-NAM, Value Chain Development
                आणि आर्थिक जोडणीवर प्रत्यक्ष काम केले आहे. सध्या{" "}
                <span className="font-medium text-[#E86125]">
                  MAHAFPO Federation
                </span>{" "}
                मध्ये व्यवस्थापकीय संचालक म्हणून FPO आणि कृषी उद्योजकांना
                व्यवसाय नियोजन, बाजारपेठ, प्रक्रिया, मूल्यवर्धन व आर्थिक
                जोडणीसाठी मार्गदर्शन करत आहेत.
              </p>
            </div>

            {/* ==================================================
                CTA
            ================================================== */}
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
                mt-5
                flex
                min-h-[56px]
                w-full
                max-w-[500px]
                cursor-pointer
                items-center
                justify-center
                overflow-hidden
                rounded-full

                bg-gradient-to-r
                from-[#DF571E]
                via-[#EF7128]
                to-[#E98249]

                px-6
                py-3.5

                text-[14px]
                font-semibold
                text-white

                shadow-[0_14px_32px_rgba(225,92,31,0.25)]

                transition-all
                duration-300

                hover:shadow-[0_20px_45px_rgba(225,92,31,0.35)]

                sm:text-[16px]
              "
            >
              {/* SHINE */}
              <motion.span
                animate={{
                  x: ["-300%", "600%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2.8,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  top-[-30%]
                  h-[160%]
                  w-[45px]
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
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM LINE ================= */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-[85%]
          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#E86125]/20
          to-transparent
        "
      />
    </section>
  );
};

export default MentorSection;