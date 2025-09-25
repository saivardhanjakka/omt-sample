import Image from "next/image"

export default function EmployeeManagementFineDineIn() {
  return (
    <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
      <div className="mt-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text content - appears first on laptop, second on mobile */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-6 md:mt-0 whitespace-nowrap md:whitespace-normal">
            <span className="text-gray-800">Employee Management</span>
          </h3>

          <p className="mt-4 lg:mt-5 text-gray-700 text-base md:text-lg leading-relaxed lg:leading-8 max-w-none lg:max-w-xl">
            Keep tabs on your staff's performance with our restaurant POS staff reports so that their efforts never go
            unappreciated
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                Regulate billers' rights and task for systemic restaurant management
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                Get reports of their sales data, tables assisted, cash register operations, and much more
              </p>
            </div>
          </div>
        </div>

        {/* Image - appears second on laptop, first on mobile */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/employee-management-fine-dine.avif"
            alt="table-management-pos-software"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl sm:w-4/5 md:w-full lg:w-full mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
