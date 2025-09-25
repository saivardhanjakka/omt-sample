import Image from "next/image"

export default function QrBasedOrderingFoodCourt() {
  return (
    <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
      <div className="mt-12 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text content - appears first on laptop, second on mobile */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-6 md:mt-0 whitespace-nowrap md:whitespace-normal">
   QR Code Based Ordering
          </h3>

          <p className="mt-4 lg:mt-5 text-gray-700 text-base md:text-lg leading-relaxed lg:leading-8 max-w-none lg:max-w-xl">
       Seamlessly manage all your customers, their orders and the cash flow with Petpooja’s food-court billing system
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-900 text-base md:text-lg">
        With Petpooja restaurant POS your outlet can work on a smooth credit-flow system
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-900 text-base md:text-lg">
        Take customer orders by their assigned and charged cards for faster payments
              </p>
            </div>
          </div>
        </div>

        {/* Image - appears second on laptop, first on mobile */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/QR-Code-Based Ordering-fc_lg.avif"
            alt="Item-combos-variations-qsr"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl sm:w-4/5 md:w-full lg:w-full mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
