'use client';

const faqs = [
  {
    question: 'How can Petpooja Tasks help me?',
    answer: 'Petpooja Tasks provides a comprehensive task management system to help you plan, execute, and monitor progress within your project, ensuring deadlines are met.',
  },
  {
    question: 'Who can use this app??',
    answer: "Petpooja Tasks is a scalable task manager software designed to meet the needs of teams of all sizes. Whether you're a startup or a large corporation, our platform adapts to your workflow.",
  },
  {
    question: 'What makes Petpooja Tasks the best task management tools available?',
    answer: 'We offer a user-friendly interface, powerful features like a task manager app, comprehensive reporting, and robust collaboration capabilities, making us one of the best task management tools.',
  },
  {
    question: 'Can we schedule a task in advance?',
    answer: 'Yes, you can schedule the tasks in advance, along with the proper SOPs and verification layer. You will also be notified of those tasks when they are due',
  },
  
];

export default function TasksFaq() {
  return (
    <section className="max-w-6xl mx-auto px-4  sm:-mt-30 md:py-16 md:mt-4  py-10">
      <div className="flex flex-col lg:flex-row lg:gap-20  gap-8">
        {/* Left Text Block */}
        <div className="lg:w-1/2 text-center lg:text-left lg:-ml-14">
          <span className="inline-block bg-[#EBF7ED] text-[#008745] border border-[#A4D5BB] text-sm px-4 py-1 rounded-full font-semibold mb-4">FAQS</span>
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
              className="group relative border rounded-xl transition-all bg-[#FFFFFF] border-[#A5CFAB] hover:shadow-md cursor-pointer overflow-hidden"
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
