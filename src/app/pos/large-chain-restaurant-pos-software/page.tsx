import CentralKitchenManagementLargeChains from "@/components/CentralKitchenManamentLargeChains";
import CentralMenuManagament from "@/components/CentralMenuManagementLargeChains";
import CentralMonitory from "@/components/CentralMonitoring";
import ErpIntegrations from "@/components/Erpintegrations";
import GrowRestaurantSectionLargeChains from "@/components/GrowYourRestaurantLargeChains";
import { LargeChainHeroSection } from "@/components/LargeChainHero";
import MarketPlaceServiceLargeChains from "@/components/MarketServicePlaceLargeChains";

import Navbar from "@/components/NavBar";
import PosReportsLargeChains from "@/components/PosReportsLargeChains";
import TestimonialsLargeChains from "@/components/TestimonialLargeChain";
import TrustedByRestaurantsLargeChain from "@/components/TrustedRestaurantsLargeChain";

import ScheduleDemoForm from "@/components/ScheduleDemoPos";

import React from "react";
import Footer from "@/components/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "POS Software for Large Chain Restaurants | Petpooja",
  description:
    "The Best Restaurant POS Software for Large Chain Restaurants and restaurant franchise with central management module. | Sign up for Free Demo",
};
const page = () => {
  return (
    <div>
      <Navbar />
      <LargeChainHeroSection />
      <TrustedByRestaurantsLargeChain />
      <CentralMenuManagament />
      <CentralMonitory />
      <ErpIntegrations />
      <CentralKitchenManagementLargeChains />
      <PosReportsLargeChains />
      <MarketPlaceServiceLargeChains />
      <TestimonialsLargeChains />
      <GrowRestaurantSectionLargeChains />
      <ScheduleDemoForm />
      <Footer />
    </div>
  );
};

export default page;
