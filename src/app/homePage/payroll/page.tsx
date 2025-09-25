import "./payroll-animate.css"
import PayrollSection from '@/components/PayrollSection'
import PayrollEffortlessOperation from '@/components/PayrollEffortlessOperation'
import PayrollFeature from '@/components/PayrollFeatures'
import PayrollHero from '@/components/PayrollHero'
import PayrollPerksSection from '@/components/PayrollPerksSection'
import PayrollSme from '@/components/PayrollSme\'s'
import PayrollTrustedBySection from '@/components/PayrollTrustedBySection'
import PayrollUsps from '@/components/PayrollUsps'
import React from 'react'
import PayrollFaq from '@/components/PayrollFaq'
import PayrollForm from '@/components/PayrollForm'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Attendance and Payroll Management Software for Small Business | Petpooja',
  description: 'Petpooja Payroll is a software and hardware-integrated staff management solution for Indian SMBs.',
}

const page = () => {
  return (
    <div className='page-payroll'>
      <PayrollHero/>
      <PayrollTrustedBySection/>
      <PayrollFeature/>
      <PayrollUsps/>
      <PayrollSme/>
      <PayrollPerksSection/>
      <PayrollEffortlessOperation/>
      <PayrollSection/>
      
    </div>
  )
}

export default page
