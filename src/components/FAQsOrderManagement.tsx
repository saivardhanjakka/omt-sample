"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSectionOrderManagement() {
  const [openItem, setOpenItem] = useState<string>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "Can I use rider management apps with my restaurant POS?",
      answer:
      "Petpooja’s restaurant billing software supports more than 150+ different third-party integrators, including ride management apps like Duzno, Shadowfax, and Pidge",
    },
    {
      id: "item-2",
      question: "Can I use my own payment gateway for online orders?",
      answer:
      "Yes! You can use your Razorpay gateway at the website widget for online orders.",
    },
    {
      id: "item-3",
      question: "How many food aggregators are integrated with Petpooja POS?",
      answer:
      "You can smoothly integrate multiple food aggregators with a single Petpooja POS and use them all without hassle.",
    },
  
    {
      id: "item-4",
      question: "Do I have to pay to integrate zomato & swiggy into Petpooja online ordering system?",
      answer:
      "Petpooja charges zero commission on integrating any third-party aggregator with your restaurant POS. All you have to pay is the charge to the aggregator",
    },
    {
      id: "item-5",
      question: "It is possible to reconcile online orders with a restaurant pos?",
      answer:
      "All your online orders are recorded in your POS system, so you can easily reconcile them with the third-party payout sheets",
    },
   
  ]

  return (
    <section className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-12 md:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">FAQS</h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-0">
          {faqs.map((faq,index) => (
            <AccordionItem key={faq.id} value={faq.id} className={`border-0 border-b border-gray-200 ${index === faqs.length - 1 ? "border-b-0" : ""}`}>
              <AccordionTrigger
                className={`text-left text-lg font-medium hover:no-underline py-6 ${
                  openItem === faq.id ? "text-[#F47537] hover:text-[#F47537]" : "text-black hover:text-gray-900 px-0"
                }`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6 px-0">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
