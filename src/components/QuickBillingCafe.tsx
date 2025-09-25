import Image from "next/image"

export default function QuickBillingCafe() {
  return (
    <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
      <div className="text-center">
  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
  Provide your customers with the best service!
  </h2>

  <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
 Petpooja Cafe POS keeps track of all your customers and their beverage preferences
  </p>
</div>

      <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/quick-billing_lg.avif"
            alt="quick-billing"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl sm:w-4/5 md:w-full lg:w-full mx-auto"
          />
        </div>

        {/* Right content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-6 md:mt-0 whitespace-nowrap md:whitespace-normal">
            <span className="text-gray-800">Quick Billing</span>
          </h3>

          <p className="mt-4 lg:mt-5 text-gray-700 text-base md:text-lg leading-relaxed lg:leading-8 max-w-none lg:max-w-xl">
        Take orders and print bills in a matter of seconds so your customers can get their favourite freshly brewed coffee in no time 
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
              Was it an Americano or an Iced coffee? Keep track of all your customer orders to avoid goof-ups
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
              Easily serve coffee on the go! Print bills and settle payments with a few simple clicks
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  )
}
