import React from 'react'
import AboutHero from '../components/about/AboutHero'
import WhoWeAreInfo from '../components/about/WhoWeAreInfo'
import AboutStorySection from '../components/about/AboutStorySection'
import VisionMissionSection from '../components/about/VisionMissionSection'
import KeyObjectivesSlider from '../components/about/KeyObjectivesSlider'
import OurApproach from '../components/about/OurApproach'
import LeadershipSection from '../components/about/LeadershipSection'

const About = () => {
  return (
    <div>
      <AboutHero/>
      {/* <WhoWeAreInfo/> */}
      <AboutStorySection/>
      <VisionMissionSection/>
      <KeyObjectivesSlider/>
      <OurApproach/>
      <LeadershipSection/>
    </div>
  )
}

export default About
