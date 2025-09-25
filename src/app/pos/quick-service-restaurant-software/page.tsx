import CentralKitchenManagementQsr from '@/components/CentralKitchenManagement'
import Footer from '@/components/Footer'
import GrowRestaurantSectionQsr from '@/components/GrowRestaurantSectionQsr'
import MarketPlaceServiceQsr from '@/components/MarketServicesQsr'
import MultiTerminalBillingPos from '@/components/MultiTerminalBillingQsr'
import Navbar from '@/components/NavBar'
import QsrCategoryKot from '@/components/QsrCategoryKot'
import { QsrHeroSection } from '@/components/QsrHero'
import QsrItemsCombo from '@/components/QsrItemsCombo'
import PosReportsQsr from '@/components/QsrPosReports'
import TestimonialsQsr from '@/components/TestimonialsQsr'
import TrustedByRestaurantsQsr from '@/components/TrustedByRestaurantsQsr'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Restaurant POS Software for QSR | Petpooja',
  description: 'The best restaurant POS software for all your QSRs · Multi-terminal billing · Item Combos & Variations · Category-wise KOTs · Central Kitchen Management.',
}
const page = () => {
  return (
    <div>
        <Navbar/>
        <QsrHeroSection/>
        <TrustedByRestaurantsQsr/>
        <MultiTerminalBillingPos/>
        <QsrItemsCombo/>
        <QsrCategoryKot/>
        <CentralKitchenManagementQsr/>
        <PosReportsQsr/>
        <MarketPlaceServiceQsr/>
        <TestimonialsQsr/>
        <GrowRestaurantSectionQsr/>
           <ScheduleDemoForm/>
                <Footer/>
        
    </div>
  )
}

export default page