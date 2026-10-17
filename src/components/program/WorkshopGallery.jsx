import React from "react";
import { motion } from "framer-motion";

const WorkshopGallery = () => {
  // =========================================
  // SLIDER 01 IMAGES
  // =========================================

  const sliderOne = [
    "/program1.jpeg",
    "/program2.jpeg",
    "/program3.jpeg",
    "/program4.jpeg",
    "/program5.jpeg",
    "/program6.jpeg",
    "/program7.jpeg",
    "/program8.jpeg",
    "/program9.jpeg",
    "/program10.jpeg",
  ];

  // =========================================
  // SLIDER 02 IMAGES
  // =========================================

  const sliderTwo = [
    "/program11.jpeg",
    "/program12.jpeg",
    "/program13.jpeg",
    "/program14.jpeg",
    "/program15.jpeg",
    "/program16.jpeg",
    "/program17.jpeg",
    "/program18.jpeg",
    "/program19.jpeg",
    "/program20.jpeg",
  ];

  // Duplicate images for seamless infinite loop
  const rowOne = [...sliderOne, ...sliderOne];
  const rowTwo = [...sliderTwo, ...sliderTwo];

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F7F4] py-14 sm:py-16 lg:py-20">

      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#F4D058]/10 blur-[150px]" />

        <div className="absolute -left-[200px] bottom-[-200px] h-[420px] w-[420px] rounded-full bg-[#174326]/5 blur-[140px]" />

        <div className="absolute -right-[180px] top-[30%] h-[380px] w-[380px] rounded-full bg-[#F4D058]/8 blur-[130px]" />
      </div>

      {/* =========================================
          HEADING
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-7 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-9 max-w-[800px] text-center sm:mb-12"
        >
          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#A07800]
              sm:text-[12px]
            "
          >
            FPO कार्यशाळा
          </span>

          <h2
            className="
              mt-3
              text-[26px]
              font-semibold
              leading-[1.2]
              tracking-[-0.025em]
              text-[#17291E]

              sm:text-[32px]
              md:text-[36px]
              lg:text-[40px]
            "
          >
            कार्यशाळेतील{" "}
            <span className="text-orange-500">
              काही खास क्षण
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[620px]
              text-[13px]
              font-normal
              leading-[1.7]
              text-[#5C655F]

              sm:text-[14px]
            "
          >
            शेतकरी, FPO प्रतिनिधी आणि कृषी उद्योजकांसोबत झालेल्या
            विविध प्रशिक्षण व मार्गदर्शन कार्यक्रमांची काही क्षणचित्रे.
          </p>
        </motion.div>
      </div>

      {/* =========================================
          SLIDERS
      ========================================== */}

      <div className="relative z-10 space-y-4 sm:space-y-5 lg:space-y-6">

        {/* =========================================
            SLIDER 01
            LEFT SIDE MOVEMENT
        ========================================== */}

        <div className="slider-mask w-full overflow-hidden">
          <div className="workshop-slider workshop-slider-left flex w-max">
            {rowOne.map((image, index) => (
              <div
                key={`row-one-${index}`}
                className="
                  group
                  mx-2
                  w-[260px]
                  flex-none
                  overflow-hidden
                  rounded-[18px]
                  bg-white
                  p-[6px]
                  shadow-[0_8px_28px_rgba(20,45,30,0.09)]

                  sm:w-[320px]
                  md:w-[360px]
                  lg:w-[390px]
                  xl:w-[420px]
                "
              >
                <div
                  className="
                    relative
                    h-[180px]
                    overflow-hidden
                    rounded-[14px]
                    bg-[#ECEDE8]

                    sm:h-[210px]
                    md:h-[235px]
                    lg:h-[250px]
                  "
                >
                  <img
                    src={image}
                    alt={`FPO कार्यशाळा ${index + 1}`}
                    loading="lazy"
                    draggable="false"
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

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/10
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            SLIDER 02
            RIGHT SIDE MOVEMENT
        ========================================== */}

        <div className="slider-mask w-full overflow-hidden">
          <div className="workshop-slider workshop-slider-right flex w-max">
            {rowTwo.map((image, index) => (
              <div
                key={`row-two-${index}`}
                className="
                  group
                  mx-2
                  w-[260px]
                  flex-none
                  overflow-hidden
                  rounded-[18px]
                  bg-white
                  p-[6px]
                  shadow-[0_8px_28px_rgba(20,45,30,0.09)]

                  sm:w-[320px]
                  md:w-[360px]
                  lg:w-[390px]
                  xl:w-[420px]
                "
              >
                <div
                  className="
                    relative
                    h-[180px]
                    overflow-hidden
                    rounded-[14px]
                    bg-[#ECEDE8]

                    sm:h-[210px]
                    md:h-[235px]
                    lg:h-[250px]
                  "
                >
                  <img
                    src={image}
                    alt={`FPO प्रशिक्षण ${index + 1}`}
                    loading="lazy"
                    draggable="false"
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

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/10
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM DECORATION
      ========================================== */}

      <div className="relative z-10 mx-auto mt-10 max-w-[1100px] px-5 sm:mt-12">
        <div className="flex items-center justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#174326]/20" />

          <div className="mx-4 h-[6px] w-[6px] rotate-45 bg-[#D99E20]" />

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#174326]/20" />
        </div>
      </div>

      {/* =========================================
          SLIDER CSS
      ========================================== */}

      <style>{`
        .slider-mask {
          position: relative;
        }

        /* LEFT / RIGHT FADE */
        .slider-mask::before,
        .slider-mask::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 10;
          pointer-events: none;
        }

        .slider-mask::before {
          left: 0;
          background: linear-gradient(
            to right,
            #F8F7F4 0%,
            rgba(248, 247, 244, 0) 100%
          );
        }

        .slider-mask::after {
          right: 0;
          background: linear-gradient(
            to left,
            #F8F7F4 0%,
            rgba(248, 247, 244, 0) 100%
          );
        }

        /* FIRST SLIDER */
        .workshop-slider-left {
          animation: workshopScrollLeft 55s linear infinite;
          will-change: transform;
        }

        /* SECOND SLIDER */
        .workshop-slider-right {
          animation: workshopScrollRight 60s linear infinite;
          will-change: transform;
        }

        /* HOVER PAUSE */
        .workshop-slider:hover {
          animation-play-state: paused;
        }

        @keyframes workshopScrollLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes workshopScrollRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .slider-mask::before,
          .slider-mask::after {
            width: 35px;
          }

          .workshop-slider-left {
            animation-duration: 38s;
          }

          .workshop-slider-right {
            animation-duration: 42s;
          }
        }

        /* REDUCED MOTION */
        @media (prefers-reduced-motion: reduce) {
          .workshop-slider-left,
          .workshop-slider-right {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkshopGallery;