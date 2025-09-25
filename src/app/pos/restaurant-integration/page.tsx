import IntegrationHero from '@/components/IntegrationHero'
import IntegrationShowcase from '@/components/IntegrationShowcase'
import Navbar from '@/components/NavBar'
 import ScheduleDemoForm from "@/components/ScheduleDemoPos"
import Footer from '@/components/Footer'
import React from 'react'
import GrowRestaurantIntegration from '@/components/GrowRestaurantIntegration'

const page = () => {
  return (
    <div>
        <Navbar/>
        <IntegrationHero/>
        <IntegrationShowcase/>
        <GrowRestaurantIntegration/>
        <ScheduleDemoForm/>
        <Footer/>
    </div>
  )
}

export default page