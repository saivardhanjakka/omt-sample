'use client';

const faqs = [
  {
    question: 'How does Petpooja Purchase save time and reduce errors?',
    answer: 'Petpooja Tasks provides a comprehensive task management system to help you plan, execute, and monitor progress within your project, ensuring deadlines are met.',
  },
  {
    question: 'What types of invoices can Petpooja Purchase process?',
    answer: "It can process printed invoices, handwritten invoices, and recipes. Such invoices can be single-page or multi-page. Even a PDF file containing invoices from multiple suppliers can also be processed effortlessly.",
  },
  {
    question: 'Do I need any special hardware or software to use it?',
    answer: "No, you don't need any special hardware. Petpooja purchase is a cloud-based solution, powered by a mobile app. Users can scan and upload the invoices using the app which can be reviewed on the dashboard. Users can also access further details from the dashboard.",
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24x7 phone support, you can email us at support@petpooja.com. For any sales queries, kindly reach out to us at getpurchase@petpooja.com',
  },
   {
    question: 'Can the software handle multiple outlets or franchises?',
    answer: 'Yes, if you have multiple outlets, the software can centralize operations by syncing data across all locations, allowing you to monitor each outlet.',
  },
  
];

export default function PurchaseFaq() {
  return (
    <section className="max-w-6xl mx-auto px-4  sm:-mt-30 md:py-16 md:mt-4  py-10">
      <div className="flex flex-col lg:flex-row lg:gap-20  gap-8">
        {/* Left Text Block */}
        <div className="lg:w-1/2 text-center lg:text-left lg:-ml-14">
          <span className="inline-block bg-[#FDF6DD] text-[#71632F] border border-[#D8C78B] text-sm px-4 py-1 rounded-full font-semibold mb-4">FAQS</span>
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
              className="group relative border rounded-xl transition-all  border-[#D9D5C9] hover:shadow-md cursor-pointer overflow-hidden"
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
