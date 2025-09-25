import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TermsOfService from "@/components/TermsOfService";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Terms of Service | Ordermatic Restaurant Billing Software",
  description:
    "Read the terms and conditions for using Ordermatic. Understand your rights, responsibilities, and the rules governing our software.",
};

const page = () => {
  return (
    <div>
      <Header />
      <TermsOfService />
      <Footer />
    </div>
  );
};

export default page;
