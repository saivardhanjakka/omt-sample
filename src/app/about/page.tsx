
import AboutCompanyList from '@/components/AboutCompanyLists'
import AboutEcosystem from '@/components/AboutEcosystem'
import AboutHero from '@/components/AboutHero'
import AboutJoinUs from '@/components/AboutJoinUs'
import AboutPeopleBehind from '@/components/AboutPeopleBehind'
import AboutStory from '@/components/AboutStory'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import ScheduleDemoForm from "@/components/ScheduleDemoPos"
import React from 'react'

const page = () => {
  return (
    <div>
       <Navbar/>
        <AboutHero/>
        <AboutStory/>
        <AboutEcosystem/>
        <AboutCompanyList/>
        <AboutPeopleBehind/>
        <AboutJoinUs/>
       <ScheduleDemoForm/>
        <Footer/>

    </div>
  )
}

export default page