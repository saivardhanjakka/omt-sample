"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function MarketPlaceFAQ() {
  const [openItem, setOpenItem] = useState<string>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "What is Petpooja’s marketplace?",
      answer:
        "Petpooja’s Marketplace is your one-stop to solve all your restaurant’s operational issues. The marketplace contains more than 11 different types of services which help your staff efficiently manage your kitchen operations, customer service, order and table management and much more!",
    },
    {
      id: "item-2",
      question: "What are the benefits of Petpooja marketplace services for my restaurant POS operations?",
      answer:
        "Petpooja POS works smoothly with iOS, Windows, and Android laptops, computers, tablets and phones.",
    },
    {
      id: "item-3",
      question: "How to automate my kitchen operations & customer service?",
      answer:
        "Yes! Petpooja POS supports your regular A4 printers and WiFi, LAN, USB, Dot-matrix, Laser, Label, A4 size, A5 size, Bluetooth, etc.!",
    },
    {
      id: "item-4",
      question: "What type of services does the Petpooja POS marketplace offer?",
      answer:
        "You have nothing to worry about! We will make sure your POS migration is quick so that your operations don’t get affected.The team will help migrate all the CRM data from your previous POS to PetpoojaThe team will also help re-install the previous aggregator setup onto Petpooja POS",
    },
    {
      id: "item-5",
      question: "How do the marketplace services simplify my restaurant operations?",
      answer:
        "You have nothing to worry about! We will make sure your POS migration is quick so that your operations don’t get affected.The team will help migrate all the CRM data from your previous POS to PetpoojaThe team will also help re-install the previous aggregator setup onto Petpooja POS",
    },
    
  ]

  return (
    <section className="bg-white lg:my-20  py-8">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-8">How Petpooja add-ons help you?</h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-0"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={`border-0 border-b border-gray-200 ${
                index === faqs.length - 1 ? "border-b-0" : ""
              }`}
            >
              {/* Wrapper to enforce vertical layout */}
              <div className="flex flex-col">
                <AccordionTrigger
                  className={`text-left text-md   hover:no-underline py-6 ${
                    openItem === faq.id
                      ? "text-[#F47537] hover:text-[#F47537]"
                      : "text-black hover:text-gray-900 px-0"
                  }`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-md   leading-relaxed pb-6 px-0">
                  {faq.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
