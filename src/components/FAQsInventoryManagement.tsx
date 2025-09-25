"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSectionInventoryManagement() {
  const [openItem, setOpenItem] = useState<string>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "Can my inventory management system be completely automated?",
      answer:
      "Petpooja’s inventory management system completely automates your inventory keeping.",
    },
    {
      id: "item-2",
      question: "Can I use Inventory management in offline mode?",
      answer:
      "Petpooja’s inventory management system works even in offline mode without hassle.",
    },
    {
      id: "item-3",
      question: "Can I transfer my stock from one outlet to another outlet?",
      answer:
      "Yes! You can manage your inventory for multiple outlets from a single dashboard. You can also create delivery routes and manage POs and suppliers’ delivery with a few simple clicks",
    },
    {
      id: "item-4",
      question: "How can I track my Orders in real time?",
      answer:
        "Our POS system provides real-time order tracking with live updates on order status, kitchen preparation time, and delivery tracking.",
    },
    {
      id: "item-5",
      question: "How do I upload my menu recipes onto my POS system?",
      answer:
      "All you need is your menu items and their item-wise ingredients ready, and our team will help you upload your entire menu onto the POS system",
    },
    {
      id: "item-6",
      question: "Can I generate an e-way bill with the help of Petpooja inventory management?",
      answer:
      "Yes, you can generate e-way bills for your purchase orders with Petpooja POS. All these bills will be automatically uploaded on the GST portal for you to track",
    },
    {
      id: "item-7",
      question: "Can I directly manage my central kitchen inventory from the inventory management dashboard?",
      answer:
      "Petpooja restaurant billing software lets you create a central kitchen to manage your outlets' inventory from one dashboard.",
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
