import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  const joinWhatsAppGroup = () => {
    window.open("https://chat.whatsapp.com/C2BGJTtxEvbBUzRTAek8zU", "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-[#DF682D] py-16 sm:py-20 lg:py-24">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1050px] px-5 text-center sm:px-7">
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex
            items-center
            rounded-full
            bg-white/15
            px-5
            py-2
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-white
            sm:text-[12px]
          "
        >
          FPO च्या विकासासाठी पुढचं पाऊल
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mx-auto
            mt-6
            max-w-[900px]
            text-[32px]
            font-bold
            leading-[1.18]
            tracking-[-0.035em]
            text-white
            sm:text-[43px]
            lg:text-[52px]
          "
        >
          तुमच्या FPO ला फक्त संस्था नाही,
          <br className="hidden sm:block" />
          <span className="text-[#FFE2C8]">
            {" "}एक सक्षम व्यवसाय बनवा.
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mx-auto
            mt-5
            max-w-[720px]
            text-[15px]
            font-normal
            leading-7
            text-white/85
            sm:text-[17px]
          "
        >
          FPO व्यवस्थापन, व्यवसाय नियोजन, आर्थिक जोडणी आणि
          बाजारपेठेच्या संधी समजून घेण्यासाठी कार्यशाळेत सहभागी व्हा.
        </motion.p>

        {/* CTA */}
        <motion.button
          type="button"
          onClick={joinWhatsAppGroup}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            group
            relative
            mx-auto
            mt-8
            flex
            min-h-[62px]
            w-full
            max-w-[510px]
            cursor-pointer
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-white
            px-6
            py-4
            text-[15px]
            font-semibold
            text-[#D95722]
            shadow-[0_18px_45px_rgba(91,38,15,0.18)]
            sm:text-[17px]
          "
        >
          {/* SHINE */}
          <motion.span
            animate={{
              x: ["-350%", "700%"],
            }}
            transition={{
              duration: 2.7,
              repeat: Infinity,
              repeatDelay: 2.8,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              top-[-40%]
              h-[180%]
              w-[45px]
              rotate-[20deg]
              bg-[#E86125]/10
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
              h-[34px]
              w-[34px]
              items-center
              justify-center
              rounded-full
              bg-[#FFF0E8]
              text-[20px]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </motion.button>

        {/* FEE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12px] text-white/80 sm:text-[13px]"
        >
          <span>कार्यशाळा फी ₹2,500</span>

          <span className="hidden h-[4px] w-[4px] rounded-full bg-white/50 sm:block" />

          <span>मराठीमध्ये व्यावहारिक मार्गदर्शन</span>
        </motion.div>
      </div>

      {/* TOP LIGHT */}
      <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
};

export default FinalCTA;