import React from 'react'
import ProgramsHero from '../components/program/ProgramsHero'

import WhyWorkshop from '../components/program/WhyWorkshop'
import WorkshopTopics from '../components/program/WorkshopTopics'
import WhoShouldAttend from '../components/program/WhoShouldAttend'

import WhatYouTakeBack from '../components/program/WhatYouTakeBack'
import MahaFPOTrust from '../components/program/MahaFPOTrust'
import FAQWorkshopDetails from '../components/program/FAQWorkshopDetails'
import WorkshopGallery from '../components/program/WorkshopGallery'
import TrustNumbers from '../components/program/TrustNumbers'
import WorkshopLearning from '../components/program/WorkshopLearning'
import WorkshopForWhom from '../components/program/WorkshopForWhom'
import MentorSection from '../components/program/MentorSection'
import TestimonialsSection from '../components/program/TestimonialsSection'
import WorkshopOffer from '../components/program/WorkshopOffer'
import FinalCTA from '../components/program/FinalCTA'

const Program = () => {
  return (
    <div>
      <ProgramsHero/>
      <TrustNumbers/>
      <WorkshopGallery/>
      <WorkshopLearning/>
      <WorkshopForWhom/>
      <MentorSection/>
      <TestimonialsSection/>
      <WorkshopOffer/>
      <FAQWorkshopDetails/>
      <FinalCTA/>



      {/* <WhyWorkshop/>
      <WorkshopTopics/>
      <WhoShouldAttend/> */}
      {/* <WorkshopDetails/> */}
      {/* <WhatYouTakeBack/>
      <MahaFPOTrust/> */}
      
      

      
      
    </div>
  )
}

export default Program
