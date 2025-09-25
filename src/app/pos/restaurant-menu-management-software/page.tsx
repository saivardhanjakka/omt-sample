import AddonsCarousel from '@/components/AddsOnsCoroussel'
import BillingPosSystem from '@/components/BillingPosSystem'
import FAQSectionMenuManagement from '@/components/FAQsMenu'
import Footer from '@/components/Footer'
import GrowRestaurantSectionMenuManagement from '@/components/GrowYourRestaurantMenu'
import HappyCustomersMenuManagement from '@/components/HappyCustomersMenuManagement'
import MenuManagementFeatures from '@/components/MenuManagementFeatures'
import MenuPosSystem from '@/components/MenuPosSystem'
import Navbar from '@/components/NavBar'
import QuickSimpleSection from '@/components/QuickSimpleSection'
import { RestaurantMenuManagementHeroSection } from '@/components/RestaurantMenuManagementHero'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Restaurant Menu Management Sofware | Petpooja',
  description: 'The best restaurant POS software to manage your restaurant menu, manage your online delivery food menu, change prices, add or delete items.',
}
const page = () => {
  return (
    <div>
        <Navbar/>
        <RestaurantMenuManagementHeroSection/>
        <MenuManagementFeatures/>
        <QuickSimpleSection/>
        <MenuPosSystem/>
        <HappyCustomersMenuManagement/>
            <ScheduleDemoForm/>
            <AddonsCarousel/>
            <GrowRestaurantSectionMenuManagement/>
            < FAQSectionMenuManagement/>
            <Footer/>
    </div>
  )
}

export default page