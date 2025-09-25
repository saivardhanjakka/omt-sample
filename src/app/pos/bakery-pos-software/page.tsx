import BakeryAdvanceOrdering from "@/components/BakeryAdvanceOrdering";
import CentralKitchenManagement from "@/components/BakeryCentralKitchenManagement";
import { BakeryHeroSection } from "@/components/BakeryHero";
import BakeryInventoryManagement from "@/components/BakeryInventoryManagement";
import GrowRestaurantSectionBakery from "@/components/GrowYourRestaurantBakery";
import MarketPlaceServiceBakery from "@/components/MarketPlaceServicesBakery";
import Navbar from "@/components/NavBar";
import TestimonialsBakery from "@/components/TestimonialsBakery";
import TrustedByRestaurantsBakery from "@/components/TrustedByRestaurantsBakery";
import ScheduleDemoForm from "@/components/ScheduleDemoPos";

import React from "react";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import BakeryReportsBar from "@/components/BakeryReportBar";
export const metadata: Metadata = {
  title: 'POS Software for Bakery | Petpooja',
  description: 'Bake more cakes to sell more cakes and manage your bakery operations with Petpooja POS. | Sign up for Free Demo',
}
const page = () => {
  return (
    <div>
      <Navbar />
      <BakeryHeroSection />
      <TrustedByRestaurantsBakery />
      <BakeryAdvanceOrdering />
      <BakeryReportsBar/>
      <MarketPlaceServiceBakery />
      <TestimonialsBakery />
      <GrowRestaurantSectionBakery />
      <ScheduleDemoForm />
      <Footer />
    </div>
  );
};

export default page;
