
import AddOnsSection from '@/components/AddOnSection'
import Corrousel from '@/components/Testimonials'
import Footer from '@/components/Footer'
import IntegrationSection from '@/components/IntegrationSection'
import InventoryManagemntPos from '@/components/InventaryManagementPos'
import Navbar from '@/components/NavBar'
import OnlineOrderingSystemPos from '@/components/OnlineOrderingSystemPos'
import OutletTypes from '@/components/OutLetTypesPos'
import { HeroSection } from '@/components/PossHero'
import Ratings from '@/components/Ratings'
import RestaurantReportsPos from '@/components/RestaurantReportsPos'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import SmartPos from '@/components/SmartPOS'
import TrustedByRestaurants from '@/components/TrustedByRestaurants'
import React from 'react'
import Testimonials from '@/components/Testimonials'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Restaurant POS and Management System | Ordermatic',
  description: 'The best restaurant POS software to manage your restaurant billing, KOTs, inventory, online order, menu, and customers.',
}

const Poss = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <TrustedByRestaurants/>
      <SmartPos/>
      <AddOnsSection/>
      <IntegrationSection/>
      <OutletTypes/>
      <Testimonials/>
      {/* <Ratings/> */}
      <ScheduleDemoForm />
      <Footer/>
    </div>
  ) 
}

export default Poss