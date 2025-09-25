import AddonsCarousel from "@/components/AddsOnsCoroussel";
import BillingPosSystem from "@/components/BillingPosSystem";
import FAQSectionOrderManagement from "@/components/FAQsOrderManagement";
import Footer from "@/components/Footer";
import GrowRestaurantSectionOrderManagement from "@/components/GrowYourRestaurantOrderManagement";
import HappyCustomersOrderManagement from "@/components/HappyCustomersOrderManagement";
import Navbar from "@/components/NavBar";
import OnlineOrderManagementFeatures from "@/components/OnlineOrderManagementFeatures";
import { OnlineOrderManagementHeroSection } from "@/components/OnlineOrderManagementHero";
import OrderManagementPosSystem from "@/components/OrderManagementPosSystem";
import QuickSimpleSection from "@/components/QuickSimpleSection";
import ScheduleDemoForm from "@/components/ScheduleDemoPos";

import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Online Order Management Software | Petpooja",
  description:
    "The best restaurant POS software to manage your online food delivery orders, accept online orders, give food discounts.",
};
const page = () => {
  return (
    <div>
      <Navbar />
      <OnlineOrderManagementHeroSection />
      <OnlineOrderManagementFeatures />
      <QuickSimpleSection />
      <OrderManagementPosSystem />
      <HappyCustomersOrderManagement />
      <ScheduleDemoForm />
      <AddonsCarousel />
      <GrowRestaurantSectionOrderManagement />
      <FAQSectionOrderManagement />
      <Footer />
    </div>
  );
};

export default page;
