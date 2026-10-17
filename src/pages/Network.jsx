import React from 'react'
import NetworkHero from '../components/networkpage/NetworkHero'
import WhoWeWorkWith from '../components/networkpage/WhoWeWorkWith'
import NetworkBenefits from '../components/networkpage/NetworkBenefits'
import FpoEcosystem from '../components/networkpage/FpoEcosystem'
import PartnershipCTA from '../components/networkpage/PartnershipCTA'

const Network = () => {
  return (
    <div>
      <NetworkHero/>
      <WhoWeWorkWith/>
      <NetworkBenefits/>
      <FpoEcosystem/>
      <PartnershipCTA/>
    </div>
  )
}

export default Network
