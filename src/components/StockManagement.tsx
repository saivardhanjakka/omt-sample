import Image from "next/image";

export default function StockManagement() {
  return (
    <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
      <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image - appears first on mobile */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/Stock-Management-Low-Stock-Alert-ice_lg.avif"
            alt="central-kitchen-management"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl sm:w-4/5 md:w-full lg:w-full mx-auto"
          />
        </div>

        {/* Text content - appears second on mobile */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-6 md:mt-0 whitespace-nowrap md:whitespace-normal">
    Stock Management & Low Stock Alert
          </h3>

          <p className="mt-4 lg:mt-5 text-gray-700 text-base md:text-lg leading-relaxed lg:leading-8 max-w-none lg:max-w-xl">
    Never again send a dessert lover away from your shop because of low stocks! Easily regulate your online dessert menu with simple ON/OFF toggle options
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-900 text-base md:text-lg">
      Petpooja POS’s intelligent stock alerts will automatically notify ‘low stocks’ on your billing screen       </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-900 text-base md:text-lg ">
          Get inventory reports showing the accurate picture of your raw materials expenses and incurred costs wherever you want
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
