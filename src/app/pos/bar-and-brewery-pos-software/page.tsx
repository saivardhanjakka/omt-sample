import AlcohalInventoryMangement from '@/components/AlcoholInventoryManagement'
import { BarAndBreweryHeroSection } from '@/components/BarAndBrewreryHero'
import BillModifactions from '@/components/BillModifactions'
import GrowRestaurantSectionBar from '@/components/GrowRestaurantBar'
import MarketPlaceServiceBar from '@/components/MarketServicePlaceBar'
import MultiTerminalBillingBar from '@/components/MultiTerminalBillingBar'
import Navbar from '@/components/NavBar'
import PosReportsBar from '@/components/PosReportsBar'
import TestimonialsBar from '@/components/TestimonialsBar'
import TrustedByRestaurantsBar from '@/components/TrustedByRestaurantsBar'
import React from 'react'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'POS Software for Bar and Pubs | Petpooja',
  description: 'Handle the rush hourse at your pubs, bars and breweries with a quick and easy-to-use Petpooja POS. | Sign up for Free Demo',
}
const page = () => {
  
  return (
    <div>

        <Navbar />
        <BarAndBreweryHeroSection/>
        <TrustedByRestaurantsBar/>
        <MultiTerminalBillingBar/>
         <PosReportsBar/>
        <MarketPlaceServiceBar/>
        <TestimonialsBar/>
        <GrowRestaurantSectionBar/>
        <ScheduleDemoForm/>
        <Footer/>
    </div>
  )
}

export default page