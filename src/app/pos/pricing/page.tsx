import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import Pricing from '@/components/Pricing'
import PricingFAQ from '@/components/PricingFaq'
import PricingNavbar from '@/components/PricingNavBar'
import PricingTestimonials from '@/components/PricingTestimonials'
import PricingWhyUs from '@/components/PricingWhyUs'
import ScheduleDemoForm from "@/components/ScheduleDemoPos"
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Pricing | Ordermatic', 
  description: 'The Most Popular Restaurant POS Software of India is available at the most affordable price. | Sign up for Free Demo',
}
const page = () => {
  return (
    <div>
        <PricingNavbar/>
        <Pricing/>
        {/* <PricingWhyUs/>
        <PricingTestimonials/>
        <PricingFAQ/> */}
        <div className='lg:mt-20 lg:mb-20 mt-5 mb-5 mb:mt-8'>
         <ScheduleDemoForm/>
         </div>
          <Footer/>
        
    </div>
  )
}

export default page