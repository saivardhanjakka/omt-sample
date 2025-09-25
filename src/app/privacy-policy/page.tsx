import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/NavBar'
import PrivacyPolicy from '@/components/PrivcayPolicy'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'Privacy Policy | Ordermatic ',
  description: 'Learn how Ordermatic collects, uses, and protects your information. Your privacy matters to us as we help simplify your restaurant operations.',
}

const page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Header/>
      <PrivacyPolicy/>
      <Footer/>

    </div>
  )
}

export default page