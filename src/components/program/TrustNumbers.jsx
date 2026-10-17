import React from "react";

const TrustNumbers = () => {
  const stats = [
    {
      number: "900+",
      text: "शेतकरी उत्पादक कंपनी स्थापनेत सहभाग",
    },
    {
      number: "500+",
      text: "FPO प्रशिक्षण कार्यक्रम",
    },
    {
      number: "20,000+",
      text: "प्रशिक्षणार्थी",
    },
    {
      number: "₹150+ कोटी",
      text: "कर्जवाटपासाठी पुढाकार",
    },
    {
      number: "150+",
      text: "शेतमाल खरेदी केंद्रे",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center">
          <h2
            className="
              text-[22px]
              font-bold
              leading-[1.3]
              text-[#1F1A15]
              sm:text-[26px]
              md:text-[30px]
              lg:text-[34px]
            "
          >
            शेतकरी आणि FPO विकासासाठी{" "}
            <span className="text-orange-600">
              प्रत्यक्ष कामाचा अनुभव
            </span>
          </h2>
        </div>

        {/* STATS */}
        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-x-4
            gap-y-9

            md:mt-12
            md:grid-cols-3

            lg:mt-14
            lg:grid-cols-5
            lg:gap-6
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                justify-start
                text-center
              "
            >
              {/* NUMBER */}
              <h3
                className="
                  whitespace-nowrap
                  text-[30px]
                  font-bold
                  leading-none
                  text-orange-600

                  sm:text-[34px]
                  md:text-[37px]
                  lg:text-[40px]
                  xl:text-[43px]
                "
              >
                {item.number}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-3
                  max-w-[210px]
                  text-[11px]
                  font-normal
                  leading-[1.5]
                  text-[#40382F]

                  sm:text-[12px]
                  lg:text-[13px]
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustNumbers;