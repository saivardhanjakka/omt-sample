import EcoSystem from "@/components/EcoSystem";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";
import HomePageForm from "@/components/HomePageForm";
import KeyMetrics from "@/components/KeyMetrics";
import Partner from "@/components/Partners";
import Solutions from "@/components/Solutions";
import Testimonial from "@/components/Testimonial";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Software for Small and Medium Businesses | Petpooja',
  description: 'Petpooja offers powerful and easy-to-use software solutions designed for small and medium enterprises and businesses.',
}

export default function Home() {
  return (
    <>
    <div className="page-homepage ">
    <HomeHeader/>
    <HomeHero/>
    <Partner/>
    <WhoWeAre/>
    <EcoSystem/>
    <KeyMetrics/>
    <Solutions/>
    <Testimonial/>
    <HomePageForm/>
    </div>
    
    </>
  );
}