import AddonsCarousel from '@/components/AddsOnsCoroussel'
import BillingPosSystem from '@/components/BillingPosSystem'
import BillingSoftwareFeatures from '@/components/BillingSoftwareFeatures'
import { BillingSoftwareHeroSection } from '@/components/BillingSoftwareHero'
import FAQSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import GrowRestaurantSection from '@/components/GrowYourRestaurant'
import HappyCustomers from '@/components/HappyCustomers'
import Navbar from '@/components/NavBar'
import QuickSimpleSection from '@/components/QuickSimpleSection'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Ordermatic Restaurant Billing Software | Simplify Billing Process',
  description: 'Simplify your billing process with Ordermatic restaurant billing software. Automate your restaurant operations without hassle.',
}
import React from 'react'

const RestaurantBillingSoftware = () => {
  return (
    <div>
        <Navbar/>
        <BillingSoftwareHeroSection/>
        <BillingSoftwareFeatures/>
        <QuickSimpleSection/>
        <BillingPosSystem/>
        <HappyCustomers/>
        <div className='lg:mt-20 lg:mb-20 mt-5 mb-5 mb:mt-8'>
        <ScheduleDemoForm/>
        </div >
        {/* <AddonsCarousel/>
        <GrowRestaurantSection/>
        <FAQSection/> */}
          <Footer/>
    </div>
  )
}

export default RestaurantBillingSoftware