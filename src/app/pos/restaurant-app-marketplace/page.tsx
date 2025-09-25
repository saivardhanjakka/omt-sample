import AddOnSection from '@/components/AddOn'
import MarketInsights from '@/components/MarketInsights'
import MarketPlaceFAQ from '@/components/MarketPlaceFaq'
import AddOnSectionMarketPlace from '@/components/MarketPlaceHeader'
import MarketPlaceService from '@/components/MarketPlaceService'
import Navbar from '@/components/NavBar'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Restaurant POS and Management System | Petpooja',
  description: 'The best restaurant POS software to manage your restaurant billing, KOTs, inventory, online order, menu, and customers.',
}
  import ScheduleDemoForm from "@/components/ScheduleDemoPos"
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <AddOnSectionMarketPlace/>
        <MarketPlaceService/>
        <MarketInsights/>
        <MarketPlaceFAQ/>
      <ScheduleDemoForm/>
      <Footer/>
    </div>
  )
}

export default page