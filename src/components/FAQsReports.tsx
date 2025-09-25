"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSectionReports() {
  const [openItem, setOpenItem] = useState<string>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "Can I download my restaurant POS reports?",
      answer:
      "Petpooja restaurant POS compiles error-free downloadable reports of your restaurant sales, item-wise consumption, online orders, staff scheduling, etc",
    },
    {
      id: "item-2",
      question: "How can I track the everyday sales of my restaurant?",
      answer:
      "With the help of Petpooja’s reporting module, you can keep track of your everyday sales and payment status directly from the POS and the owner’s dashboard",
    },
    {
      id: "item-3",
      question: "Can I get real-time reports of all my outlets in one place?",
      answer:
      "For our multiple outlet owners, the Petpooja POS system provides reports about all your outlets on a single screen",
    },
  
    {
      id: "item-4",
      question: "Can I set automated report alerts?",
      answer:
      "You can automate your report alerts and get updates on your email",
    },
    {
      id: "item-5",
      question: "Can I add or remove report rights from my POS system?",
      answer:
      "The outlet owner has complete control over report access and can manage it using the Billing screen configurations",
    },
     {
      id: "item-6",
      question: "Can I control the report rights for my different outlets?",
      answer:
      "With the help of the POS, the main outlet owner can create specific outlet-wise reporting rights to manage the business",
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
