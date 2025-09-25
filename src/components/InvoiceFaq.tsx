'use client';

const faqs = [
  {
    question: 'Why should I use billing software for my business?',
    answer: 'Billing software helps automate invoicing, ensures accuracy, saves time, and improves financial tracking.',
  },
  {
    question: 'Does Petpooja Billing software support GST invoicing and compliance?',
    answer: 'Yes, it supports complete GST invoicing, return filing, and tax compliance features.',
  },
  {
    question: 'Is this solution suitable for my business?',
    answer: 'Absolutely! It is designed for businesses of all sizes, including retail and restaurant outlets.',
  },
  {
    question: 'Does it handle inventory management?',
    answer: 'Yes, it includes real-time inventory tracking, alerts, and reorder management.',
  },
  {
    question: 'Can the software handle multiple outlets or franchises?',
    answer: 'Yes, it supports centralized management across multiple outlets or franchises.',
  },
];

export default function InvoiceFaq() {
  return (
    <section className="max-w-6xl mx-auto px-4  sm:-mt-30 md:py-16 md:mt-4  py-10">
      <div className="flex flex-col lg:flex-row lg:gap-20  gap-8">
        {/* Left Text Block */}
        <div className="lg:w-1/2 text-center lg:text-left lg:-ml-14">
          <span className="inline-block bg-[#E4E7FB] text-[#080D2D] border border-[#B8C0F5] text-sm px-4 py-1 rounded-full font-semibold mb-4">FAQS</span>
          <h2 className="text-3xl lg:text-6xl sm:text-4xl font-bold text-gray-900 mb-4">
            Have a question?<br />
            Here are some solutions
          </h2>
          <p className="text-gray-600 lg:text-md">For more queries, feel free to reach us.</p>
        </div>

        {/* Right Questions Block - Wider on lg */}
        <div className="lg:w-3/5 flex flex-col gap-4 lg:-mr-12 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative border rounded-xl transition-all bg-white  hover:shadow-md cursor-pointer overflow-hidden"
            >
              <div className="flex justify-between items-center p-4">
                <p className="font-medium text-gray-800 text-lg">{faq.question}</p>
                <span className="text-xl text-gray-500 group-hover:rotate-45 transition-transform duration-300">+</span>
              </div>

              {/* Hidden Answer Block */}
              <div className="max-h-0 group-hover:max-h-40 transition-[max-height] duration-300 ease-in-out px-4 overflow-hidden">
                <p className="text-gray-700 text-lg py-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
