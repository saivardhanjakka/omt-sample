import AddonsCarousel from '@/components/AddsOnsCoroussel'
import BillingPosSystem from '@/components/BillingPosSystem'
import FAQSectionInventoryManagement from '@/components/FAQsInventoryManagement'
import Footer from '@/components/Footer'
import GrowRestaurantSection from '@/components/GrowYourRestaurant'
import GrowRestaurantSectionInventory from '@/components/GrowYourRestaurantInventory'
import HappyCustomers from '@/components/HappyCustomers'
import HappyCustomersInventoryManagement from '@/components/HappyCustomersInventoryManagement'
import InventoryManagementFeatures from '@/components/InventoryManagamentFeatures'
import Navbar from '@/components/NavBar'

import QuickSimpleSectionInventory from '@/components/QuickSimpleSectionInventoryManagement'
import { RestaurantInventoryHeroSection } from '@/components/RestaurantInventoryHeroSection'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'

import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Restaurant Inventory Management Software | Petpooja',
  description: 'The best restaurant POS software to manage your kitchen inventory, raw material stock, give automatic food stock updates.',
}
const page = () => {
  return (
    <div>
      <Navbar/>
      <RestaurantInventoryHeroSection/>
      <InventoryManagementFeatures/>
      <QuickSimpleSectionInventory/>
      <BillingPosSystem/>
       <HappyCustomersInventoryManagement/>
       <ScheduleDemoForm/>
        <AddonsCarousel/>
        <GrowRestaurantSectionInventory/>
        <FAQSectionInventoryManagement/>
        <Footer/>
    </div>
  )
}

export default page