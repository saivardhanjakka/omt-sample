"use client";

import { useState } from "react";
import PayrollForm from "./PayrollForm";

const faqs = [
  {
    question: "Who can use Payroll By Petpooja?",
    answer:
      "Payroll By Petpooja can be used by all restaurants and food businesses using Petpooja's POS ecosystem.",
  },
  {
    question: "What is the sync time between the biometric device & software?",
    answer:
      "The biometric device syncs with the software in real-time or within a few seconds depending on your internet connection.",
  },
  {
    question: "How secure is the payroll solution?",
    answer:
      "Our payroll solution uses encrypted data transmission and secure access protocols to ensure your data is safe and compliant.",
  },
];

export default function PayrollFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Light Blue Background Section */}
      <div className="bg-[#EBF6FD] px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* FAQ Left Heading Section */}
          <div className="w-full lg:w-[40%] text-center lg:text-left">
            <span className="inline-block px-4 py-2 text-sm font-semibold bg-[#E3F1FF] text-[#0D6AC0] border border-[#81b9e3] rounded-full mb-4">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c2431] mb-4 leading-snug">
              Have a question? <br />
              Here are some solutions
            </h2>
            <p className="text-gray-600 text-base">
              For more queries, feel free to reach us.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="w-full lg:w-[60%] mt-8 lg:mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium text-[#0c3c61] focus:outline-none"
                >
                  {faq.question}
                  <span className="text-2xl text-[#c3c8d4]">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-5 text-lg text-gray-700 transition-all duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payroll Form — overlaps slightly upward for visual continuity */}
      {/* <div className="relative z-30 mt-4"> */}
        <PayrollForm />
      {/* </div> */}
    </>
  )}