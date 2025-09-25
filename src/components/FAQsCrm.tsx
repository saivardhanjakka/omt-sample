"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSectionCrm() {
  const [openItem, setOpenItem] = useState<string>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "Can I allot loyalty points to my customer directly from the CRM module?",
      answer:
"Yes. Your biller can give reward points to your customers right at the time of billing. You can also edit the CRM data of any particular customer and offer them a special discount or points on their next purchase.",
    },
    {
      id: "item-2",
      question: 
      "Can I download customer data?",
      answer:
      "You can download the customer data as often as you want for free!",
    },
    {
      id: "item-3",
      question: "Can I restrict or block a customer from receiving promotional messages?",
      answer:
      "Absolutely! You can regulate which customers and when they can get your restaurant’s promotional offers."
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
