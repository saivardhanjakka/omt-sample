import PurchaseFaq from '@/components/PurchaseFaq'
import PurchaseFeatures from '@/components/PurchaseFeatures'
import PurchaseFooter from '@/components/PurchaseFooter'
import PurchaseForm from '@/components/PurchaseForm'
import PurchaseHero from '@/components/PurchaseHero'
import PurchaseHighlight from '@/components/PurchaseHighlight'
import PurchaseHowWorks from '@/components/PurchaseHowWorks'
import PurchasePricing from '@/components/PurchasePricing'
import PurchaseScroller from '@/components/PurchaseScroller'
import PurchaseWhyUs from '@/components/PurchaseWhyUs'
import React from 'react'
import { Metadata } from 'next'
 import "./purchase-animation.css"
export const metadata: Metadata = {
  title: 'Complete Accounts Payables Software | Petpooja Purchase',
  description: 'Streamline your entire expense and inventory management process with our AI automation tool. Digitize invoices, avail purchase insights & spend analytics for better decision-making',
}

const page = () => {
  return (
    <div>
      <PurchaseHero/>
      <PurchaseHighlight/>
      <PurchaseScroller/>
      <PurchaseFeatures/>
      <PurchaseHowWorks/>
      <section className="bg-[#EECB4D]">
        <PurchaseWhyUs />
      </section>
      <PurchasePricing/>
      <PurchaseFaq/>
      <PurchaseForm/>
     
    </div>
  )
}

export default page