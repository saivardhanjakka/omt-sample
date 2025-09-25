import AccurateAndSimpleReports from '@/components/AccurateAndSimpleReports'
import AddonsCarousel from '@/components/AddsOnsCoroussel'
import BillingPosSystem from '@/components/BillingPosSystem'
import FAQSectionReports from '@/components/FAQsReports'
import Footer from '@/components/Footer'
import GrowRestaurantSectionReports from '@/components/GrowYourRestaurantReports'
import HappyCustomersReports from '@/components/HappyCustomersReports'
import Navbar from '@/components/NavBar'
import ReportsAndAnalyticsFeatures from '@/components/ReportsAndAnalyticsFeatures'
import { ReportsAnalyticsHeroSection } from '@/components/ReportsAndAnalyticsHeroSection'
import ReportsAndAnalyticsPosSystem from '@/components/ReportsAndAnalyticsPosSystem'
import ScheduleDemoForm from '@/components/ScheduleDemoPos'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Get Real Time insightful Reports & Analytics with Petpooja',
  description: 'The best restaurant POS software to manage your restaurant reports and analytics of daily sales, monthly sales, profits, taxes, online orders, and GST.',
}
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <ReportsAnalyticsHeroSection/>
        <ReportsAndAnalyticsFeatures/>
        <AccurateAndSimpleReports/>
         <ReportsAndAnalyticsPosSystem/>
         <HappyCustomersReports/>
           <ScheduleDemoForm/>
            <AddonsCarousel/>
            <GrowRestaurantSectionReports/>
            <FAQSectionReports/>
             <Footer/>


    </div>
  )
}

export default page