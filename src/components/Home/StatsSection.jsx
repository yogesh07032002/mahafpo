import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaBuildingWheat, 
  FaMapLocationDot, 
  FaArrowTrendUp, 
  FaCheckDouble,
  FaArrowRight 
} from 'react-icons/fa6';

// काऊंटर ॲनिमेशनसाठी सोपा कस्टम हुक
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

// स्वतंत्र स्टॅट आयटम कंपोनंट
const StatItem = ({ label, end, suffix, icon: Icon }) => {
  const count = useCounter(end);

  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-3 py-2 border-b sm:border-b-0 sm:border-r last:border-none border-gray-200/80">
      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2e6930] flex items-center gap-1.5 mb-1">
        <Icon className="text-[#8ebd58] text-sm" />
        {label}
      </span>
      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative w-full bg-[#fbfdfa] py-12 sm:py-16 lg:py-20 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ---------------- 1. Hero Image with Floating Stats Card ---------------- */}
        <div className="relative mb-14 sm:mb-20">
          
          {/* Main Top Banner Image (इमेजप्रमाणे राऊंडेड व मॉडर्न) */}
          <div className="w-full h-64 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1600&q=80"
              alt="Farmer in fields"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Floating Stats / Counter Card (इमेजमधील फ्लोटिंग बारप्रमाणे खाली ओव्हरलॅप होणारा) */}
          <div className="relative -mt-12 sm:-mt-16 mx-3 sm:mx-8 lg:mx-12">
            <div className="bg-[#fcfaf6] rounded-2xl shadow-2xl border border-[#e8e4d8] p-5 sm:p-7 backdrop-blur-md">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-2">
                <StatItem label="Registered FPOs" end={500} suffix="+" icon={FaBuildingWheat} />
                <StatItem label="Farmer Members" end={250000} suffix="+" icon={FaUsers} />
                <StatItem label="Districts Covered" end={34} suffix="+" icon={FaMapLocationDot} />
                <StatItem label="Annual Turnover" end={120} suffix=" Cr+" icon={FaArrowTrendUp} />
              </div>
            </div>
          </div>

        </div>

        {/* ---------------- 2. Main Content Details Section ---------------- */}
        <div className="max-w-4xl mx-auto text-left">
          
          {/* Section Tag */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2e6930] bg-[#eef6ec] px-3.5 py-1 rounded-full border border-[#2e6930]/20 inline-block mb-3">
            About The Federation
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            MAHAFPO Federation – <span className="text-[#2e6930]">Maharashtra</span> Farmer Producer Organization
          </h2>

          {/* Highlights & Information */}
          <div className="space-y-4 text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
            <p>
              <strong className="text-gray-900 font-semibold">MAHAFPO Federation</strong> is a collective platform working towards strengthening Farmer Producer Organizations, cooperative institutions, and water user organizations across Maharashtra.
            </p>
            <p className="text-gray-600">
              The Federation focuses on creating business opportunities, improving market access, facilitating financial linkages, and building the managerial and entrepreneurial capabilities of FPOs to ensure long-term sustainability.
            </p>
          </div>

          {/* Key Federation Focus Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 pt-6 border-t border-gray-200">
            {[
              "Direct Market & Institutional Linkages",
              "Access to Working Capital & Credit Schemes",
              "Capacity Building & Corporate Governance",
              "Shared Infrastructure & Value Addition Hubs"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#2e6930]/15 flex items-center justify-center shrink-0">
                  <FaCheckDouble className="text-[#2e6930] text-[10px]" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-9">
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 bg-[#2e6930] hover:bg-[#235326] text-white text-sm sm:text-base font-bold px-7 py-3 rounded-full shadow-lg shadow-[#2e6930]/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Learn More About MAHAFPO</span>
              <FaArrowRight className="text-xs" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;