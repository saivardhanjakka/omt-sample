"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSectionMenuManagement() {
  const [openItem, setOpenItem] = useState<string>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "Will I be able to manage multiple online menus for my large chains?",
      answer:
"You can manage the multiple online menus for websites and third-party platforms for your large chains from a single Petpooja's owners dashboard without hassle",
    },
    {
      id: "item-2",
      question: "How much time will it take for me to update my restaurant's menu?",
      answer:
"You can update the entire menu of your restaurant in just one single click!",
    },
    {
      id: "item-3",
      question: "Can I control my online menu on different aggregator platforms?",

      answer:
"Yes! You can toggle on/ off your restaurant's menu on any third-party platform right from the billing screen. You can also regulate your menu's open/ close time so that you sell only when there is stock availability!",
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
