import React from "react";

import {
  CalendarDays,
  Clock3,
  Languages,
  Hourglass,
  MessageCircle,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const HeroSection = () => {
  const whatsappGroupLink = "https://chat.whatsapp.com/C2BGJTtxEvbBUzRTAek8zU";

  const joinWhatsAppGroup = () => {
    window.open(whatsappGroupLink, "_blank", "noopener,noreferrer");
  };

  const workshopDetails = [
    {
      icon: CalendarDays,
      label: "दिनांक",
      value: "२४ ऑक्टोबर २०२६",
    },
    {
      icon: Clock3,
      label: "वेळ",
      value: "सकाळी ११ ते संध्याकाळी ५",
    },
    {
      icon: Languages,
      label: "भाषा",
      value: "मराठी",
    },
    {
      icon: Hourglass,
      label: "कालावधी",
      value: "७ तास",
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#F8F2E8] mt-30 md:mt-24"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[180px] top-[80px] h-[350px] w-[350px] rounded-full bg-[#F2E5D3]/60 blur-[100px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute -right-[180px] top-[-80px] h-[400px] w-[400px] rounded-full bg-[#F7DCCB]/45 blur-[110px] sm:h-[520px] sm:w-[520px]" />
      </div>

      {/* MAIN CONTAINER */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1480px]
          px-4
          pb-10
          pt-8

          sm:px-6
          sm:pb-12
          sm:pt-10

          md:px-8

          lg:px-10
          lg:pb-16
          lg:pt-12

          xl:px-12
        "
      >
        {/* =========================================
            HEADING
        ========================================= */}

        <div className="mx-auto max-w-[1100px] text-center">
          {/* BADGE */}

          <div className="mb-4 flex justify-center sm:mb-5">
            <div
              className="
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-[#DED6CA]
                bg-white/80
                px-3
                py-2
                shadow-sm
                backdrop-blur-sm
                sm:px-4
              "
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#5A9A61]" />

              <span className="text-[11px] font-medium text-[#4B443B] sm:text-[13px]">
                MAHAFPO विशेष कृषी व्यवसाय कार्यशाळा
              </span>
            </div>
          </div>

          {/* TITLE */}

          <h1
            className="
              mx-auto
              max-w-[1050px]
              text-[30px]
              font-bold
              leading-[1.18]
              tracking-[-0.7px]
              text-[#201B15]

              min-[400px]:text-[33px]

              sm:text-[39px]
              sm:leading-[1.15]

              md:text-[44px]

              lg:text-[49px]

              xl:text-[54px]
            "
          >
            शेतकरी उत्पादक कंपनीला द्या
            <br className="hidden sm:block" />{" "}
            <span className="text-[#2F693A]">व्यवसायाची मजबूत दिशा</span>
            <br />
            <span className="text-orange-500">
              MAHAFPO व्यवसाय विकास कार्यशाळा
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[850px]
              px-1
              text-[15px]
              font-normal
              leading-[1.8]
              text-[#6B645A]

              sm:mt-6
              sm:text-[16px]

              md:text-[17px]
              md:leading-8
            "
          >
            FPO व्यवस्थापन, व्यवसाय आराखडा, अर्थसहाय्य, बाजारपेठ जोडणी,
            मूल्यवर्धन आणि कृषी व्यवसाय वाढीसाठी प्रत्यक्ष मार्गदर्शन.
          </p>
        </div>

        {/* =========================================
            IMAGE + DETAILS
        ========================================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            items-center
            gap-6

            sm:mt-10
            sm:gap-8

            lg:mt-12
            lg:grid-cols-[1.03fr_0.97fr]
            lg:gap-8

            xl:mt-14
            xl:gap-10
          "
        >
          {/* =========================================
              LEFT IMAGE
          ========================================= */}

          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-[18px]
              border
              border-[#E2D7C7]
              bg-[#EDE5D8]
              shadow-[0_20px_55px_rgba(58,43,25,0.10)]

              sm:rounded-[22px]

              lg:rounded-[24px]
            "
          >
            <img
              src="/program-hero1.jpeg"
              alt="डॉ. संजय पांडुरंग पांढरे"
              className="
                h-[330px]
                w-full
                object-cover
                object-center

                min-[400px]:h-[370px]

                sm:h-[450px]

                md:h-[500px]

                lg:h-[490px]

                xl:h-[520px]
              "
            />

            {/* GRADIENT */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-[170px]
                bg-gradient-to-t
                from-black/70
                via-black/30
                to-transparent
              "
            />

            {/* IMAGE TEXT */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-4

                sm:p-6

                md:p-7
              "
            >
              <p className="text-[12px] font-medium text-white/80 sm:text-[13px]">
                कार्यशाळा मार्गदर्शक
              </p>

              <h2
                className="
                  mt-1
                  text-[20px]
                  font-semibold
                  leading-tight
                  text-white

                  sm:text-[24px]

                  md:text-[26px]
                "
              >
                डॉ. संजय पांडुरंग पांढरे
              </h2>

              <p
                className="
                  mt-2
                  max-w-[500px]
                  text-[12px]
                  font-normal
                  leading-5
                  text-white/80

                  sm:text-[14px]
                "
              >
                कृषी व्यवसाय • FPO • बाजारपेठ • मूल्यसाखळी तज्ज्ञ
              </p>
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}

          <div className="w-full min-w-0">
            {/* INFO CARDS */}

            <div
              className="
                grid
                grid-cols-1
                gap-3

                min-[520px]:grid-cols-2

                lg:gap-3.5
              "
            >
              {workshopDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      flex
                      min-h-[88px]
                      items-center
                      gap-3.5
                      rounded-[17px]
                      border
                      border-[#E5DBCE]
                      bg-white
                      px-4
                      py-4
                      shadow-[0_8px_25px_rgba(55,42,26,0.04)]
                      transition-all
                      duration-300

                      sm:gap-4
                      sm:px-5

                      lg:min-h-[96px]

                      hover:-translate-y-1
                      hover:shadow-[0_14px_35px_rgba(55,42,26,0.08)]
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-[46px]
                        w-[46px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F1F1EE]
                        text-[#DF6426]

                        sm:h-[50px]
                        sm:w-[50px]
                      "
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                        className="sm:h-[23px] sm:w-[23px]"
                      />
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0">
                      <p
                        className="
                          text-[10px]
                          font-medium
                          tracking-[1.1px]
                          text-[#81786D]

                          sm:text-[11px]
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[15px]
                          font-semibold
                          leading-5
                          text-[#201C17]

                          sm:text-[17px]
                          sm:leading-6
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =========================================
                PRICE
            ========================================= */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-between
                gap-4
                rounded-[18px]
                border
                border-[#E6DACE]
                bg-white
                px-4
                py-4
                shadow-[0_8px_25px_rgba(55,42,26,0.04)]

                min-[420px]:px-5

                sm:mt-4
                sm:px-6
                sm:py-5
              "
            >
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-[#393229] sm:text-[16px]">
                  कार्यशाळा शुल्क
                </p>

                <p
                  className="
                    mt-1
                    text-[12px]
                    font-normal
                    leading-5
                    text-[#777064]

                    sm:text-[14px]
                  "
                >
                  FPO व्यवसाय विकास मार्गदर्शनासाठी
                </p>
              </div>

              <div className="shrink-0">
                <span
                  className="
                    whitespace-nowrap
                    text-[28px]
                    font-bold
                    text-[#DF6426]

                    sm:text-[35px]

                    lg:text-[38px]
                  "
                >
                  ₹2,500
                </span>
              </div>
            </div>

            {/* =========================================
                WHATSAPP BUTTON
            ========================================= */}

            <button
              type="button"
              onClick={joinWhatsAppGroup}
              className="
                group
                mt-3
                flex
                min-h-[62px]
                w-full
                cursor-pointer
                items-center
                justify-center
                gap-2.5
                rounded-[18px]
                bg-orange-400
                px-4
                py-3
                text-center
                text-[15px]
                font-semibold
                leading-5
                text-white
                shadow-[0_14px_35px_rgba(223,100,38,0.22)]
                transition-all
                duration-300

                sm:mt-4
                sm:min-h-[68px]
                sm:gap-3
                sm:px-5
                sm:text-[18px]

                hover:-translate-y-1
                hover:bg-[#D75B20]
                hover:shadow-[0_18px_42px_rgba(223,100,38,0.28)]
              "
            >
              <MessageCircle size={23} strokeWidth={2} className="shrink-0" />

              <span>WhatsApp Group मध्ये Join करा</span>

              <ArrowRight
                size={20}
                className="
                  hidden
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1

                  min-[390px]:block
                "
              />
            </button>

            {/* =========================================
                STATS
            ========================================= */}

            <div
              className="
                mt-4
                grid
                grid-cols-1
                gap-2

                min-[450px]:grid-cols-3

                lg:mt-5
              "
            >
              {/* FPO */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#E4DACE]
                  bg-white
                  px-3
                  py-2.5
                  text-center
                  shadow-sm
                "
              >
                <Building2 size={16} className="shrink-0 text-[#4D9B5E]" />

                <span className="text-[11px] font-medium leading-4 text-[#29251F] sm:text-[12px] xl:text-[13px]">
                  ९००+ FPO स्थापनेत सहभाग
                </span>
              </div>

              {/* TRAINING */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#E4DACE]
                  bg-white
                  px-3
                  py-2.5
                  text-center
                  shadow-sm
                "
              >
                <GraduationCap size={16} className="shrink-0 text-[#DCA127]" />

                <span className="text-[11px] font-medium leading-4 text-[#29251F] sm:text-[12px] xl:text-[13px]">
                  ५००+ प्रशिक्षण
                </span>
              </div>

              {/* STUDENTS */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#E4DACE]
                  bg-white
                  px-3
                  py-2.5
                  text-center
                  shadow-sm
                "
              >
                <Users size={16} className="shrink-0 text-[#DF6426]" />

                <span className="text-[11px] font-medium leading-4 text-[#29251F] sm:text-[12px] xl:text-[13px]">
                  २०,०००+ प्रशिक्षणार्थी
                </span>
              </div>
            </div>

            {/* BOTTOM NOTE */}

            <div
              className="
                mt-4
                flex
                items-start
                justify-center
                gap-2
                px-2
                text-center
              "
            >
              <CheckCircle2
                size={15}
                className="mt-[2px] shrink-0 text-[#57915D]"
              />

              <p
                className="
                  text-[11px]
                  font-normal
                  leading-5
                  text-[#756E64]

                  sm:text-[13px]
                "
              >
                शेतकरी • FPO संचालक • CEO • कृषी उद्योजकांसाठी
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
