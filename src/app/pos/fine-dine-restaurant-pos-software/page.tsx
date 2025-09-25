import { FineDineHeroSection } from '@/components/FineDineInHero'
import Navbar from '@/components/NavBar'
import TableManagementPosFineDineIn from '@/components/TableManagementPosFineDineIn'
import TrustedByRestaurantsFineDineIn from '@/components/TrustedByRestuarantsFineDine'
import React from 'react'
import TaxReportsFineDineIn from '@/components/TaxReportsFineDine'
import EmployeeManagementFineDineIn from '@/components/EmployeeManagementFineDineIn'
import InventoryManagementFineDineIn from '@/components/InventoryManagementFineDineIn'
import MarketPlaceServicesFineDineIn from '@/components/MarketPlaceServicesFineDineIn'
import TestimonialsFineDineIn from '@/components/TestimonialsFineDine'
import GrowRestaurantSectionFineDineIn from '@/components/GrowYourRestaurantFineDine'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import Footer from '@/components/Footer'
import PosReportsFineDineIn from '@/components/PosReportsFineDineIn'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'POS Software for Fine-Dine Restaurants | Petpooja',
  description: 'A 5-star restaurant POS experience awaits your fine dine. Table booking. Fast billing. Easy payments. ',
}
const page = () => {
  return (
    <div>
        <Navbar/>
        <FineDineHeroSection/>
        <TrustedByRestaurantsFineDineIn/>
        <TableManagementPosFineDineIn/>
       <PosReportsFineDineIn/>
        <MarketPlaceServicesFineDineIn/>
       <TestimonialsFineDineIn/>
       <GrowRestaurantSectionFineDineIn/>
        <ScheduleDemoForm/>
        <Footer/>
        
    </div>
  )
}

export default page