import AccurateAndSimpleReports from '@/components/AccurateAndSimpleReports'
import AddonsCarousel from '@/components/AddsOnsCoroussel'
import CrmFeatures from '@/components/CrmFeatures'
import { CRMHeroSection } from '@/components/CRMHeroSection'
import CrmPosSystem from '@/components/CrmPosSystem'
import FAQSectionCrm from '@/components/FAQsCrm'
import Footer from '@/components/Footer'
import GrowRestaurantSectionCrm from '@/components/GrowYourRestaurantCrm'
import HappyCustomersCrmManagement from '@/components/HappyCustomersCrm'
import Navbar from '@/components/NavBar'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'

import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:'Customer Relation Management Software | Petpooja',
  description: 'The best restaurant POS software to manage your restaurant customer data, send marketing offers, store customer information.',
}
const page = () => {
  return (
    <div>
        <Navbar/>
        <CRMHeroSection/>
        <CrmFeatures/>
         <AccurateAndSimpleReports/>
         <CrmPosSystem/>
         <HappyCustomersCrmManagement/>
          <ScheduleDemoForm/>
                 <AddonsCarousel/>
                 <GrowRestaurantSectionCrm/>
                 <FAQSectionCrm/>
                 <Footer/>
    </div>
  )
}

export default page