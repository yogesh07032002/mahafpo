import React from 'react'
import HeroSection from '../components/Home/HeroSection'

import AboutFeatureSection from '../components/Home/AboutFeatureSection'
import ServicesCards from '../components/Home/ServicesCards'
import ImpactStatsSection from '../components/Home/ImpactStatsSection'
import WhatWeDoSection from '../components/Home/WhatWeDoSection'
import NetworkFlowSection from '../components/Home/NetworkFlowSection'
import ProgramsSection from '../components/Home/ProgramsSection'
import HomeCTASection from '../components/Home/HomeCTASection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutFeatureSection/>
      <ServicesCards/>
      <ImpactStatsSection/>
      <WhatWeDoSection/>
      <NetworkFlowSection/>
      <ProgramsSection/>
      {/* <HomeCTASection/> */}
    </div>
  )
}

export default Home
