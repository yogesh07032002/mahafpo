import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSitemap, 
  FaChartLine, 
  FaCoins, 
  FaShop, 
  FaLandmarkFlag, 
  FaUserTie, 
  FaLightbulb 
} from 'react-icons/fa6';
import { LanguageContext } from '../../context/LanguageContext';

const TrainingCapacity = () => {
  const { language } = useContext(LanguageContext);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const content = {
    mr: {
      tag: "क्षमता बांधणी व नेतृत्व",
      heading: "FPO नेतृत्व विकास व प्रशिक्षण घटक",
      topics: [
        {
          id: "०१",
          title: "FPO व्यवस्थापन",
          desc: "कंपनी कायदा २०१३ चे कायदेशीर अनुपालन, वार्षिक सर्वसाधारण सभा (AGM), पारदर्शक दस्तऐवजीकरण आणि भागधारक शेतकऱ्यांचे हक्क जपणारे संस्थात्मक प्रशासन.",
          icon: FaSitemap
        },
        {
          id: "०२",
          title: "व्यवसाय नियोजन",
          desc: "दीर्घकालीन कृषी-व्यवसाय आराखडा (DPR) तयार करणे, व्यवहार्यता अभ्यास, जोखीम व्यवस्थापन आणि संस्थात्मक भांडवल उभारणीची ठोस रणनीती.",
          icon: FaChartLine
        },
        {
          id: "०३",
          title: "वित्तीय व्यवस्थापन",
          desc: "नफा-तोटा पत्रक व ताळेबंद स्वच्छता, खेळत्या भांडवलाचे सूक्ष्म नियोजन, कॅश-फ्लो मॅनेजमेंट, वैधानिक ऑडिट तयारी आणि बँकेची पतपात्रता मिळवणे.",
          icon: FaCoins
        },
        {
          id: "०४",
          title: "बाजारपेठ विकास",
          desc: "शेतमालाचे संकलन, प्राथमिक प्रतवारी, ब्रँडिंग व पॅकेजिंग. थेट कॉर्पोरेट खरेदीदार व आधुनिक रिटेल चेन्सशी दीर्घकालीन पुरवठा करार करण्याचे वाटाघाटी कौशल्य.",
          icon: FaShop
        },
        {
          id: "०५",
          title: "शासकीय योजना",
          desc: "SMART प्रकल्प, नाबार्ड, राष्ट्रीय कृषी विकास योजना (RKVY) आणि १०,००० FPO योजनेअंतर्गत मिळणारे भांडवली अनुदान व सुविधांचा प्रत्यक्ष लाभ घेणे.",
          icon: FaLandmarkFlag
        },
        {
          id: "०६",
          title: "संस्थात्मक नेतृत्व",
          desc: "शेतकरी सभासदांमध्ये परस्पर विश्वासाचे वातावरण टिकवणे, सामूहिक निर्णयप्रक्रिया सुलभ करणे आणि संकटकाळात FPO ला स्थैर्य देणारे कणखर नेतृत्व घडवणे.",
          icon: FaUserTie
        },
        {
          id: "०७",
          title: "कृषी-उद्योजकता",
          desc: "पारंपरिक शेतीतून बाहेर पडून काढणीपश्चात प्रक्रिया उद्योग, वेअरहाऊसिंग, कोल्ड-चेन आणि नफाक्षम कृषी-स्टार्टअप मॉडेल उभारण्यासाठी लागणारी उद्योजकीय दृष्टी.",
          icon: FaLightbulb
        }
      ]
    },
    en: {
      tag: "Capacity & Leadership",
      heading: "FPO Executive Leadership Dimensions",
      topics: [
        {
          id: "01",
          title: "FPO Governance",
          desc: "Navigating Companies Act mandates, RoC filings, structured Board meetings, AGM resolutions, and building transparent shareholder-first grassroots institutions.",
          icon: FaSitemap
        },
        {
          id: "02",
          title: "Business Planning",
          desc: "Crafting multi-year bankable enterprise roadmaps, Detailed Project Reports (DPR), break-even analyses, and operational risk mitigation plans.",
          icon: FaChartLine
        },
        {
          id: "03",
          title: "Financial Management",
          desc: "Digitized book-keeping, cash-flow discipline, statutory audit readiness, working capital forecasting, and building high enterprise credit ratings.",
          icon: FaCoins
        },
        {
          id: "04",
          title: "Market Linkages",
          desc: "Farm-gate standardization, sorting, branding, and negotiating institutional off-take contracts directly with corporate buyers and food processors.",
          icon: FaShop
        },
        {
          id: "05",
          title: "Government Schemes",
          desc: "Leveraging SMART project funding, NABARD credit interventions, Central Sector 10,000 FPO subventions, and accessing equity matching grants.",
          icon: FaLandmarkFlag
        },
        {
          id: "06",
          title: "Executive Leadership",
          desc: "Cultivating shareholder trust, resolving operational deadlocks, promoting democratic participation, and steering organizational resilience.",
          icon: FaUserTie
        },
        {
          id: "07",
          title: "Agri-Entrepreneurship",
          desc: "Transitioning raw commodity aggregators into food processing entities, warehousing centers, cold-chains, and scalable regional agribusinesses.",
          icon: FaLightbulb
        }
      ]
    }
  };

  const t = useMemo(() => {
    return content[language] || content.mr;
  }, [language]);

  const count = t.topics.length;
  // डेस्कटॉपसाठी ऑर्बिट त्रिज्या (Radius)
  const orbitRadius = 260;

  return (
    <section className="w-full bg-[#fbfdfa] py-16 sm:py-24 font-sans select-none overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        
        {/* Minimal Balanced Header */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#2e6930] uppercase block mb-1.5">
            {t.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-gray-900">
            {t.heading}
          </h2>
        </div>

        {/* Orbit System Container */}
        <div 
          className="relative w-full max-w-[700px] h-[580px] sm:h-[640px] mx-auto hidden md:flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Circular Orbit Guides */}
          <div className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-[#2e6930]/30 pointer-events-none" />
          <div className="absolute w-[560px] h-[560px] rounded-full border border-[#f4d058]/25 pointer-events-none" />

          {/* मध्यवर्ती स्थिर हब: इमेज + ॲक्टिव्ह विषयाचा सविस्तर मजकूर */}
          <div className="relative z-20 w-[300px] h-[300px] rounded-full bg-white shadow-2xl border-4 border-[#2e6930]/20 p-5 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Soft Glow Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-15 grayscale"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80')` }}
            />
            
            {/* Center Content Overlay */}
            <div className="relative z-10 text-center px-2">
              <span className="text-[11px] font-bold text-[#f4d058] bg-[#112015] px-2 py-0.5 mb-2 inline-block">
                {t.topics[activeIdx].id}
              </span>
              <h3 className="text-base font-bold text-gray-950 mb-1.5 leading-snug">
                {t.topics[activeIdx].title}
              </h3>
              <p className="text-[14px] text-gray-700 font-normal leading-relaxed text-center line-clamp-4">
                {t.topics[activeIdx].desc}
              </p>
            </div>

           
          </div>

          {/* सतत फिरणारा ऑर्बिट (Continuous Infinite Rotation) */}
          <motion.div
            animate={isPaused ? {} : { rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
          >
            {t.topics.map((topic, index) => {
              const IconComp = topic.icon;
              const angle = (index / count) * 2 * Math.PI;
              const isActive = activeIdx === index;

              return (
                <div
                  key={index}
                  className="absolute pointer-events-auto cursor-pointer"
                  style={{
                    transform: `translate(${Math.cos(angle) * orbitRadius}px, ${Math.sin(angle) * orbitRadius}px)`
                  }}
                  onMouseEnter={() => setActiveIdx(index)}
                  onClick={() => setActiveIdx(index)}
                >
                  {/* काउंटर-रोटेशन: फिरताना कार्ड्स नेहमी सरळ वाचता येतात */}
                  <motion.div
                    animate={isPaused ? {} : { rotate: -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 40,
                      ease: "linear"
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 border shadow-md transition-all duration-300 rounded-none ${
                      isActive 
                        ? 'bg-[#112015] border-[#f4d058] text-white scale-110 z-30' 
                        : 'bg-white border-gray-200/90 text-gray-800 hover:border-[#2e6930]'
                    }`}
                  >
                    <div className={`w-7 h-7 flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#2e6930] text-[#f4d058]' : 'bg-[#2e6930]/10 text-[#2e6930]'
                    }`}>
                      <IconComp className="text-xs" />
                    </div>

                    <div className="text-left">
                      <span className={`text-sm font-bold block whitespace-nowrap ${
                        isActive ? 'text-white' : 'text-gray-900'
                      }`}>
                        {topic.title}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* मोबाईल व छोट्या स्क्रीनसाठी रेस्पॉन्सिव्ह लिस्ट (जेणेकरून मोबाईलवर मजकूर कट होणार नाही) */}
        <div className="md:hidden flex flex-col space-y-3 text-left mt-6">
          {t.topics.map((topic, idx) => {
            const IconComp = topic.icon;
            return (
              <div 
                key={idx}
                className="p-4 bg-white border border-gray-200/90 border-l-4 border-l-[#2e6930] shadow-sm"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="w-7 h-7 bg-[#2e6930]/10 text-[#2e6930] flex items-center justify-center shrink-0">
                    <IconComp className="text-xs" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-[16px] text-gray-800 font-normal leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrainingCapacity;