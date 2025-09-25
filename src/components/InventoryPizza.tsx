import Image from "next/image";

export default function InventoryPizza() {
  return (
    <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          A restaurant billing software that is as diverse as your pizza menu!
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Manage multiple in-house and online orders from your Petpooja
          restaurant management software without hassle{" "}
        </p>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/Inventory-Raw-Material-Tracking-pp_lg.avif"
            alt="table-management-pos-software"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl sm:w-4/5 md:w-full lg:w-full mx-auto"
          />
        </div>

        {/* Right content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-6 md:mt-0 whitespace-nowrap md:whitespace-normal">
            <span className="text-gray-800">
              Inventory & Raw Material Tracking
            </span>
          </h3>

          <p className="mt-4 lg:mt-5 text-gray-700 text-base md:text-lg leading-relaxed lg:leading-8 max-w-none lg:max-w-xl">
            Pizza without mozzarella is a nightmare! Switch to an inventory
            management system that records item-wise stocks and tracks your
            consumption rate{" "}
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                Pre-plan inventory procurement & easily regulate your online &
                in-house menu item availability
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-base md:text-lg">
                Petpooja POS’ smart system will automatically alert ‘low stocks’
                on your billing screen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
