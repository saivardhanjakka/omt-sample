'use client'

import React from 'react'

const plans = [
  {
    title: 'Basic Plan',
    description:
      'Petpooja Billing: Get started invoicing and manage your customers in one place.',
    price: '₹3,500/-',
    highlight: false,
  },
  {
    title: 'Advanced Plan',
    description:
      'Petpooja billing + AI Inventory Agent: All features of billing with AI Agent for auto purchase management.',
    price: '₹6,000/-',
    highlight: true,
    badgeText: '🔥 Best Plan',
  },
]

export default function InvoicePricing() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1 lg:mt-10 mt-8 lg:text-md rounded-full bg-[#E4E7FB] text-[#080D2D] border border-[#B8C0F5] font-medium text-sm">
          PRICING
        </div>
        <h2 className="text-5xl lg:text-6xl mt-4 sm:text-4xl font-bold text-gray-900">
          Powerful POS, priced right
        </h2>
        <p className="text-gray-500 mt-6">
          Start saving time and money with Petpooja POS
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-6 max-w-5xl mx-auto ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative   transition-transform duration-300 ease-in-out hover:scale-105 flex-1 border border-gray-200 rounded-xl p-6 shadow-sm
              ${plan.highlight ? 'bg-indigo-50 shadow-md' : ''}
              sm:w-full md:w-[80%] lg:w-full mx-auto
            `}
          >
            {plan.highlight && (
              <div className="absolute top-4 right-4">
                <span className="bg-indigo-900 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  {plan.badgeText}
                </span>
              </div>
            )}
            <h3 className="sm:text-xl font-semibold mb-6 ml-4 lg:text-3xl mt-4">
              {plan.title}
            </h3>
            <p className="text-gray-600 text-lg mt-8 ml-4 mb-6">
              {plan.description}
            </p>
            <div className="text-5xl font-semibold ml-4 text-gray-900 mb-2">
              {plan.price}{' '}
              <span className="text-sm text-gray-500">Per year</span>
            </div>
            <div className="text-md ml-4 text-gray-400 mb-4">*excl. GST</div>
          </div>
        ))}
      </div>
    </section>
  )
}
