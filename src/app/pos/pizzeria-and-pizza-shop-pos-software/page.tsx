import Footer from '@/components/Footer'
import GrowRestaurantSectionPizzeria from '@/components/GrowYourRestaurantPizza'
import { PizzeriaHeroSection } from '@/components/HeroPizza'
import InventoryPizza from '@/components/InventoryPizza'
import ItemsCombosInventoryPizza from '@/components/ItemsCombosAndVariationsPizza'
import MarketPlaceServicePizza from '@/components/MarketServicesPizza'
import Navbar from '@/components/NavBar'
import PosReportsPizza from '@/components/PosReportsPizza'
import TestimonialsPizza from '@/components/TestimonialsPizza'
import TrustedByRestaurantsPizza from '@/components/TrustedRestuarantsPizza'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'POS Software for Pizzeria | Petpooja',
  description: 'The Best Restaurant POS Software for your Pizzeria and Pizza Shop to serve your customers faster. | Sign up for Free Demo',
}
const page = () => {
  return (
    <div>
        <Navbar/>
        <PizzeriaHeroSection/>
        <TrustedByRestaurantsPizza/>
        <InventoryPizza/>
        <ItemsCombosInventoryPizza/>
        <PosReportsPizza/>
        <MarketPlaceServicePizza/>
        <TestimonialsPizza/>
        <GrowRestaurantSectionPizzeria/>
        <ScheduleDemoForm/>
        <Footer/>
    </div>
  )
}

export default page