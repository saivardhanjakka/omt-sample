import Image from "next/image";

export default function ErpIntegrations() {
  return (
    <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
      <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image - appears first on mobile */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/ERP-Integrations-lc_lg.avif"
            alt="central-kitchen-management"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl sm:w-4/5 md:w-full lg:w-full mx-auto"
          />
        </div>

        {/* Text content - appears second on mobile */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-6 md:mt-0 whitespace-nowrap md:whitespace-normal">
ERP Integrations
          </h3>

          <p className="mt-4 lg:mt-5 text-gray-700 text-base md:text-lg leading-relaxed lg:leading-8 max-w-none lg:max-w-xl">
Do you use an ERP to manage your entire backend? No worries, Petpooja POS has you covered!          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-900 text-base md:text-lg">
Push all your sales, inventory and customer data directly to your ERP management software              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
              <p className="text-gray-900 text-base md:text-lg ">
Get access to a data lake enabling integration with any ERP like Dynamic NAV, Tally, SAP, etc.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
