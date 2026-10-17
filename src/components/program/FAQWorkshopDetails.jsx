import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "ही FPO कार्यशाळा कोणासाठी आहे?",
    answer:
      "नवीन FPO स्थापन करू इच्छिणारे शेतकरी, विद्यमान FPO चे संचालक, पदाधिकारी, CEO, सदस्य तसेच कृषी उद्योजकांसाठी ही कार्यशाळा उपयुक्त आहे.",
  },
  {
    question: "या कार्यशाळेत नेमकं काय शिकायला मिळेल?",
    answer:
      "FPO स्थापना व व्यवस्थापन, व्यवसाय नियोजन, Market Linkage, Bank Finance, शेतमाल खरेदी-विक्री, Processing, Value Addition आणि उपलब्ध व्यवसाय संधी याबाबत व्यावहारिक मार्गदर्शन मिळेल.",
  },
  {
    question: "नवीन FPO सुरू करायचा असेल तरी ही कार्यशाळा उपयोगी आहे का?",
    answer:
      "होय. FPO सुरू करण्याचा विचार करणाऱ्यांसाठी आवश्यक प्राथमिक माहितीपासून व्यवसायाच्या पुढील नियोजनापर्यंत महत्त्वाच्या बाबी या कार्यशाळेत समजावून सांगितल्या जातील.",
  },
  {
    question: "आधीपासून FPO सुरू असेल तर या कार्यशाळेचा फायदा होईल का?",
    answer:
      "होय. विद्यमान FPO चा व्यवसाय वाढवणे, बाजारपेठेशी जोडणी, आर्थिक नियोजन, प्रक्रिया व मूल्यवर्धन आणि व्यवसायाच्या नवीन संधी समजून घेण्यासाठी ही कार्यशाळा उपयुक्त ठरेल.",
  },
  {
    question: "कार्यशाळेची फी किती आहे?",
    answer:
      "कार्यशाळेची फी ₹2,500 आहे. पुढील प्रक्रिया आणि आवश्यक माहिती WhatsApp ग्रुपच्या माध्यमातून दिली जाईल.",
  },
  {
    question: "कार्यशाळेत सहभागी होण्यासाठी काय करावे?",
    answer:
      "खाली दिलेल्या WhatsApp ग्रुप बटणावर क्लिक करून ग्रुपमध्ये सहभागी व्हा. कार्यशाळेसंबंधी पुढील माहिती आणि अपडेट्स तिथे दिले जातील.",
  },
];

const FAQWorkshopDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF9F2] py-9 sm:py-1 lg:py-10">
      {/* BACKGROUND EFFECT */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#F4D058]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-7">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-9 text-center sm:mb-11"
        >
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D95B25] sm:text-[12px]">
            HAVE QUESTIONS?
          </p>

          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.025em] text-[#181511] sm:text-[35px] lg:text-[39px]">
            वारंवार विचारले जाणारे{" "}
            <span className="text-[#E86125]">
              प्रश्न
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[580px] text-[13px] leading-6 text-[#746B62] sm:text-[14px]">
            MAHAFPO FPO कार्यशाळेबद्दल तुमच्या महत्त्वाच्या प्रश्नांची उत्तरे
          </p>
        </motion.div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className={`
                  overflow-hidden
                  rounded-[17px]
                  border
                  bg-white
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-[#E86125]/35 shadow-[0_12px_30px_rgba(80,50,25,0.08)]"
                      : "border-[#E8DED4] shadow-[0_7px_20px_rgba(80,50,25,0.04)]"
                  }
                `}
              >
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="
                    group
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    gap-5
                    px-5
                    py-5
                    text-left
                    sm:px-7
                    sm:py-6
                  "
                >
                  <span
                    className={`
                      text-[15px]
                      font-semibold
                      leading-6
                      transition-colors
                      duration-300
                      sm:text-[16px]
                      ${
                        isOpen
                          ? "text-[#E86125]"
                          : "text-[#201C18] group-hover:text-[#E86125]"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* PLUS ICON */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`
                      flex
                      h-[32px]
                      w-[32px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-[22px]
                      font-medium
                      transition-colors
                      duration-300
                      ${
                        isOpen
                          ? "bg-[#E86125] text-white"
                          : "bg-[#FFF0E5] text-[#E86125]"
                      }
                    `}
                  >
                    +
                  </motion.span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-7 sm:pb-6">
                        {/* DIVIDER */}
                        <div className="mb-4 h-px w-full bg-[#EFE6DD]" />

                        <motion.p
                          initial={{ y: -5 }}
                          animate={{ y: 0 }}
                          className="
                            max-w-[930px]
                            text-[14px]
                            font-normal
                            leading-[1.75]
                            text-[#655E57]
                            sm:text-[15px]
                          "
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-7 text-center"
        >
          <p className="text-[12px] text-[#857B71] sm:text-[13px]">
            आणखी काही प्रश्न आहेत? WhatsApp ग्रुपमध्ये सहभागी होऊन अधिक माहिती मिळवा.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQWorkshopDetails;