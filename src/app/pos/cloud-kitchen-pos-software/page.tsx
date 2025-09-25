import CentralKitchenManagement from '@/components/CentralKitchenManagement'
import CentralKitchenManagament from '@/components/CentralKitchenManagment'
import { CloudKitchenHeroSection } from '@/components/ClouldKitchenHero'
import CLoudKitchenMultipleOrderManagement from '@/components/ClouldKitchenMultipleOrder'
import MarketPlaceServiceCloudKitchen from '@/components/MarketPlaceServicesCloudKitchen'
import Navbar from '@/components/NavBar'
import PosReportsCloudKitchen from '@/components/PosReportsClouldKitchen'
import TestimonialsCloudKitchen from '@/components/TestimonialsCloudKitchen'
import TrustedByRestaurantsCloudKitchen from '@/components/TrustedRestaurantsCloudKitchen'
import VirtualBrandManagement from '@/components/VirtualBrandManagement'
import React from 'react'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import Footer from '@/components/Footer'
import GrowRestaurantSectionCLoudKitchen from '@/components/GrowYourRestaurantCloudKitchen'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'POS Software for Cloud Kitchen | Petpooja',
  description: 'Manage all your online food orders, online deliveries, online food menu and prices for your CLoud Kitchen using Petpooja POS. | Sign up for Free Demo',
}
const page = () => {
  return (
    <div>
        <Navbar/>
        <CloudKitchenHeroSection/>
        <TrustedByRestaurantsCloudKitchen/>
     <CentralKitchenManagament/>
     <VirtualBrandManagement/>
     <CLoudKitchenMultipleOrderManagement/>
     <PosReportsCloudKitchen/>
     <MarketPlaceServiceCloudKitchen/>
     <TestimonialsCloudKitchen/>
     <GrowRestaurantSectionCLoudKitchen/>
     <ScheduleDemoForm/>
     <Footer/>
    </div>
  )
}

export default page