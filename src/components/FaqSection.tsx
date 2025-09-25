"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "What is the importance of restaurant billing software?",
      answer:
        "A restaurant billing system helps businesses manage everyday operations like billing, inventory consumption, online orders, CRM, etc.",
    },
    {
      id: "item-2",
      question: "Is the restaurant billing process complex?",
      answer:
        "Modern restaurant billing software simplifies the entire process with intuitive interfaces and automated features that make billing quick and efficient.",
    },
    {
      id: "item-3",
      question: "How much time does it take to set up a restaurant pos?",
      answer:
        "Setting up a restaurant POS system typically takes less than a day with proper guidance and support from our technical team.",
    },
    {
      id: "item-4",
      question: "How can I track my Orders in real time?",
      answer:
        "Our POS system provides real-time order tracking with live updates on order status, kitchen preparation time, and delivery tracking.",
    },
    {
      id: "item-5",
      question: "Do I need to keep my internet connection ON every time I create an order?",
      answer:
        "No, our POS system works offline as well. Orders can be processed without internet and will sync automatically when connection is restored.",
    },
    {
      id: "item-6",
      question: "Does Petpooja restaurant billing software support digital invoices?",
      answer:
        "Yes, Petpooja supports digital invoices with GST compliance, email delivery, and various digital payment integrations.",
    },
    {
      id: "item-7",
      question: "Can I operate and print my bills in my regional language?",
      answer:
        "Yes, Petpooja supports multiple regional languages for bill printing and operations to cater to local customer preferences.",
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
