import { CafeHeroSection } from "@/components/CafeHero";
import CafeItemsVaraition from "@/components/CafeItemVaraitions";
import Footer from "@/components/Footer";
import GrowRestaurantSectionCafe from "@/components/GrowRestaurantSectionCafe";
import MarketPlaceServiceCafe from "@/components/MarketPlaceServicesCafe";
import Navbar from "@/components/NavBar";
import PosReportsCafe from "@/components/PosReportsCafe";
import QuickBillingCafe from "@/components/QuickBillingCafe";
import StationWiseKotsCafe from "@/components/StationWiseKotsCafe";
import TestimonialsCafe from "@/components/TestimonialsCafe";
import TrustedByRestaurantsCafe from "@/components/TrustedByRestaurantsCafe";
import ScheduleDemoForm from "@/components/ScheduleDemoPos";
import React from "react";
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'POS Software for Cafe | Petpooja',
  description: 'Serve your customers their morning coffee with a smile and Petpooja POS for cafes take care of all your management. | Sign up for Free Demo',
}
const page = () => {
  return (
    <div>
      <Navbar />
      <CafeHeroSection />
      <TrustedByRestaurantsCafe />
      <QuickBillingCafe />
      <StationWiseKotsCafe />
      <CafeItemsVaraition />
      <PosReportsCafe />
      <MarketPlaceServiceCafe />
      <TestimonialsCafe />
      <GrowRestaurantSectionCafe />
      <ScheduleDemoForm />
      <Footer />
    </div>
  );
};

export default page;
