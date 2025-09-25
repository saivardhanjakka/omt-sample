import GrowRestaurantSectionIceCream from "@/components/GrowRestaurantIceCream";
import { IceCreamHeroSection } from "@/components/IceCreamHero";
import MarketPlaceServiceIceCream from "@/components/MarketPlaceServicesIceCream";
import Navbar from "@/components/NavBar";
import PosReportsIceCream from "@/components/PosReportsIceCream";
import StockManagement from "@/components/StockManagement";
import TestimonialsIceCream from "@/components/TestimonialIceCream";
import TrustedByRestaurantsIceCream from "@/components/TrustedRestaurantsIceCream";
import VariationAddsOns from "@/components/VariationAndAddOns";
import React from "react";
import ScheduleDemoForm from "@/components/ScheduleDemoPos";
import Footer from "@/components/Footer";
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'POS Software for Ice Cream Shop | Petpooja',
  description: 'The Best Restaurant POS Software for Ice cream parlours and Dessert shops. A sweet delight for you and your customers. | Sign up for Free Demo',
}
const page = () => {
  return (
    <div>
      <Navbar />
      <IceCreamHeroSection />
      <TrustedByRestaurantsIceCream />
      <VariationAddsOns />
      <StockManagement />
      <PosReportsIceCream />
      <MarketPlaceServiceIceCream />
      <TestimonialsIceCream />
      <GrowRestaurantSectionIceCream />
      <ScheduleDemoForm />
      <Footer />
    </div>
  );
};

export default page;
