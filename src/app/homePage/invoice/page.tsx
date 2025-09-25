import InvoiceHero from '@/components/InvoiceHero'
import InvoiceScroller from '@/components/InvoiceScroller'
import React from 'react'
import InvoiceFeatures from '@/components/InvoiceFeatures'
import InvoiceStrenghts from '@/components/InvoiceStrenghts'
import InvoiceWhyUs from '@/components/InvoiceWhyUs'
import InvoicePricing from '@/components/InvoicePricing'
import InvoiceFaq from '@/components/InvoiceFaq'
import InvoiceForm from '@/components/InvoiceForm'
import './invoice-animation.css'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Streamline Your Billing Process | Retail Billing Software | Petpooja',
  description: 'Simplify your billing process with Petpooja\'s all-in-one retail billing software. Process transactions, generate invoices, and analyze sales data easily. Take your business to the next level!',
}

const page = () => {
  return (
    <div>
    <InvoiceHero/>
    <InvoiceStrenghts/>
    {/* <InvoiceScroller/> */}
    <InvoiceFeatures/>
    <InvoiceWhyUs/>
    <InvoicePricing/>
    <InvoiceFaq/>
    <InvoiceForm/>
    </div>
  )
}

export default page
