import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "कार्यशाळेतील सहभागी",
    initial: "स",
    text: "FPO सुरू करण्यापासून त्याचे योग्य व्यवस्थापन आणि व्यवसाय नियोजनापर्यंत अनेक महत्त्वाच्या गोष्टी या कार्यशाळेत स्पष्टपणे समजल्या.",
  },
  {
    name: "FPO प्रतिनिधी",
    initial: "F",
    text: "फक्त माहिती न देता प्रत्यक्ष व्यवसायात येणाऱ्या अडचणी, त्यावरील उपाय आणि FPO साठी उपलब्ध संधी याबद्दल उपयुक्त मार्गदर्शन मिळाले.",
  },
  {
    name: "शेतकरी उद्योजक",
    initial: "शे",
    text: "मार्केट लिंकेज, शेतमाल विक्री, प्रक्रिया आणि मूल्यवर्धन याबद्दलचा दृष्टिकोन या कार्यशाळेमुळे अधिक स्पष्ट झाला.",
  },
  {
    name: "FPO संचालक",
    initial: "F",
    text: "FPO चालवताना आर्थिक नियोजन, बँक जोडणी आणि व्यवसाय आराखडा किती महत्त्वाचा आहे हे सोप्या पद्धतीने समजावून सांगितले.",
  },
  {
    name: "कृषी उद्योजक",
    initial: "कृ",
    text: "सरकारी योजना, बाजारपेठ आणि व्यवसायाच्या संधी यांची माहिती एकाच ठिकाणी समजल्यामुळे पुढील नियोजनासाठी चांगली दिशा मिळाली.",
  },
  {
    name: "FPO सदस्य",
    initial: "F",
    text: "प्रत्यक्ष अनुभवावर आधारित मार्गदर्शन असल्यामुळे विषय समजायला सोपा झाला. FPO चा व्यवसाय वाढवण्यासाठी कोणत्या गोष्टींवर काम करावे हे स्पष्ट झाले.",
  },
];

const TestimonialsSection = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* =====================================================
     GO TO SLIDE
  ===================================================== */
  const goToSlide = (index) => {
    const slider = sliderRef.current;

    if (!slider || window.innerWidth >= 768) return;

    const cards = slider.querySelectorAll(".testimonial-card");
    const targetCard = cards[index];

    if (!targetCard) return;

    slider.scrollTo({
      left:
        targetCard.offsetLeft -
        (slider.clientWidth - targetCard.clientWidth) / 2,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  /* =====================================================
     MOBILE AUTO SLIDE
  ===================================================== */
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 768) return;

      setActiveIndex((current) => {
        const next = (current + 1) % testimonials.length;

        const slider = sliderRef.current;

        if (slider) {
          const cards = slider.querySelectorAll(".testimonial-card");
          const targetCard = cards[next];

          if (targetCard) {
            slider.scrollTo({
              left:
                targetCard.offsetLeft -
                (slider.clientWidth - targetCard.clientWidth) / 2,
              behavior: "smooth",
            });
          }
        }

        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  /* =====================================================
     MANUAL SWIPE ACTIVE INDEX
  ===================================================== */
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let timeout;

    const handleScroll = () => {
      if (window.innerWidth >= 768) return;

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const cards = Array.from(
          slider.querySelectorAll(".testimonial-card")
        );

        if (!cards.length) return;

        const sliderCenter =
          slider.scrollLeft + slider.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
          const cardCenter =
            card.offsetLeft + card.clientWidth / 2;

          const distance = Math.abs(
            sliderCenter - cardCenter
          );

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex);
      }, 80);
    };

    slider.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFF9F2]
        py-12
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[300px]
            w-[90%]
            max-w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#F4D058]/5
            blur-[100px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto
            mb-8
            max-w-[850px]
            text-center
            sm:mb-11
            lg:mb-12
          "
        >
          {/* STARS */}
          <div
            className="
              mb-3
              flex
              justify-center
              gap-1
              text-[19px]
              text-[#E7AA25]
              sm:text-[22px]
            "
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          {/* LABEL */}
          <p
            className="
              mb-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#D95B25]
              sm:text-[12px]
            "
          >
            PARTICIPANT FEEDBACK
          </p>

          {/* HEADING */}
          <h2
            className="
              text-[26px]
              font-bold
              leading-[1.3]
              tracking-[-0.025em]
              text-[#181511]

              sm:text-[34px]
              lg:text-[42px]
            "
          >
            कार्यशाळेबद्दल सहभागींचा{" "}
            <span className="text-[#E86125]">
              अनुभव
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-3
              max-w-[650px]
              px-1
              text-[13px]
              leading-[1.7]
              text-[#71685F]

              sm:text-[15px]
              sm:leading-6
            "
          >
            FPO व्यवस्थापन, व्यवसाय विकास आणि बाजारपेठ जोडणीबद्दल
            कार्यशाळेत सहभागी झालेल्यांचे अनुभव.
          </p>
        </motion.div>

        {/* =====================================================
            MOBILE SLIDER
            TABLET / DESKTOP GRID
        ===================================================== */}
        <div
          ref={sliderRef}
          className="
            testimonials-slider

            -mx-4
            flex
            snap-x
            snap-mandatory
            gap-3
            overflow-x-auto
            scroll-smooth
            px-4
            pb-3

            sm:-mx-6
            sm:gap-4
            sm:px-6

            md:mx-0
            md:grid
            md:grid-cols-2
            md:gap-5
            md:overflow-visible
            md:px-0
            md:pb-0

            lg:grid-cols-3
          "
        >
          {testimonials.map((item, index) => (
            <motion.article
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                testimonial-card
                group
                relative

                flex
                min-h-[250px]

                w-[88%]
                min-w-[88%]
                flex-col

                snap-center
                overflow-hidden

                rounded-[20px]
                border
                border-[#E9DED2]
                bg-white

                p-5

                shadow-[0_8px_25px_rgba(70,45,25,0.05)]

                transition-shadow
                duration-300

                hover:shadow-[0_18px_40px_rgba(70,45,25,0.10)]

                sm:min-h-[260px]
                sm:w-[72%]
                sm:min-w-[72%]
                sm:p-6

                md:w-auto
                md:min-w-0
                md:p-6

                lg:min-h-[270px]
                lg:p-7
              "
            >
              {/* ================= TOP ================= */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  {/* AVATAR */}
                  <div
                    className="
                      flex
                      h-[42px]
                      w-[42px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      bg-gradient-to-br
                      from-[#DF571E]
                      to-[#EE8445]

                      text-[13px]
                      font-semibold
                      text-white

                      sm:h-[44px]
                      sm:w-[44px]
                      sm:text-[14px]
                    "
                  >
                    {item.initial}
                  </div>

                  {/* PERSON */}
                  <div className="min-w-0">
                    <h3
                      className="
                        text-[14px]
                        font-semibold
                        leading-[1.35]
                        text-[#191612]

                        sm:text-[16px]
                      "
                    >
                      {item.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        leading-4
                        text-[#81776D]

                        sm:text-[11px]
                      "
                    >
                      MAHAFPO कार्यशाळा
                    </p>
                  </div>
                </div>

                {/* QUOTE */}
                <span
                  className="
                    shrink-0
                    font-serif
                    text-[32px]
                    leading-none
                    text-[#E86125]/25

                    sm:text-[36px]
                  "
                >
                  “
                </span>
              </div>

              {/* ================= STARS ================= */}
              <div
                className="
                  mt-4
                  flex
                  gap-[2px]
                  text-[15px]
                  leading-none
                  text-[#E7AA25]

                  sm:mt-5
                  sm:text-[17px]
                "
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* ================= REVIEW ================= */}
              <p
                className="
                  mt-3
                  text-[13px]
                  font-normal
                  leading-[1.75]
                  text-[#514B45]

                  sm:text-[14px]
                  sm:leading-[1.8]

                  lg:text-[15px]
                "
              >
                {item.text}
              </p>

              {/* ================= BOTTOM LINE ================= */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  h-[3px]
                  w-0

                  bg-gradient-to-r
                  from-[#DF571E]
                  to-[#F4C447]

                  transition-all
                  duration-500

                  group-hover:w-full
                "
              />
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            MOBILE DOTS
        ===================================================== */}
        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-[7px]
            md:hidden
          "
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Testimonial ${index + 1}`}
              className={`
                h-[6px]
                rounded-full
                transition-all
                duration-300

                ${
                  activeIndex === index
                    ? "w-[24px] bg-[#E86125]"
                    : "w-[6px] bg-[#DFC7B9]"
                }
              `}
            />
          ))}
        </div>

        {/* =====================================================
            MOBILE SWIPE HINT
        ===================================================== */}
        <div
          className="
            mt-3
            flex
            items-center
            justify-center
            gap-2
            md:hidden
          "
        >
          <span className="text-[10px] font-medium text-[#8B8177]">
            अधिक अनुभव पाहण्यासाठी Swipe करा
          </span>

          <motion.span
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[15px] text-[#E86125]"
          >
            →
          </motion.span>
        </div>

        {/* =====================================================
            BOTTOM TRUST
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
          className="
            mt-7
            flex
            justify-center

            sm:mt-9
          "
        >
          <div
            className="
              flex
              w-full
              max-w-[620px]
              flex-wrap
              items-center
              justify-center

              gap-x-3
              gap-y-1.5

              rounded-[16px]
              border
              border-[#E86125]/10

              bg-[#FBE9D8]

              px-4
              py-3

              text-center
              text-[11px]
              leading-5
              text-[#685C51]

              sm:w-auto
              sm:rounded-full
              sm:px-5
              sm:py-2.5
              sm:text-[13px]
            "
          >
            <span className="font-semibold text-[#D95B25]">
              MAHAFPO
            </span>

            <span
              className="
                hidden
                h-[4px]
                w-[4px]
                rounded-full
                bg-[#D9A373]
                sm:block
              "
            />

            <span>
              अनुभवातून मार्गदर्शन • FPO विकासासाठी व्यावहारिक ज्ञान
            </span>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          SLIDER CSS
      ===================================================== */}
      <style>{`
        .testimonials-slider {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
        }

        .testimonials-slider::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 768px) {
          .testimonials-slider {
            scroll-snap-type: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;