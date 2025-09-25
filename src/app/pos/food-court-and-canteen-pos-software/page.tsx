import FoodCourtCustomerAccount from '@/components/CustomerAccountTopUpFoodCourt'
import { FoodCourtHeroSection } from '@/components/FoodCourtHero'
import GrowRestaurantSectionFoodCourt from '@/components/GrowRestaurantSectionFoodCourt'
import MarketPlaceServiceFoodCourt from '@/components/MarketServicePlaceFoodCourt'
import Navbar from '@/components/NavBar'
import PosReportsFoodCourt from '@/components/PosReportsFoodCourt'
import QrBasedOrderingFoodCourt from '@/components/QrBasedOrderingFoodCourt'
import TestimonialsFoodCourt from '@/components/TestimonialsFoodCourt'
import TrustedByRestaurantsFoodCourt from '@/components/TrustedRestaurantsFoodCourt'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import React from 'react'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'POS Software for Food Court and Canteen | Petpooja',
  description: 'The Best Restaurant POS Software for Food Courts, food trucks, food restaurant in Malls and Food Canteens in school, colleges, or offices',
}
const page = () => {
  return (
    <div>
        <Navbar/>
        <FoodCourtHeroSection/>
        <TrustedByRestaurantsFoodCourt/>
        <FoodCourtCustomerAccount/>
        <QrBasedOrderingFoodCourt/>
        <PosReportsFoodCourt/>
        <MarketPlaceServiceFoodCourt/>
        <TestimonialsFoodCourt/>
        <GrowRestaurantSectionFoodCourt/>
        <ScheduleDemoForm/>
        <Footer/>
    
    </div>
  )
}

export default page