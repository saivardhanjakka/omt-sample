import Image from "next/image";

export default function RestaurantReportsPos() {
  return (
   <section className="bg-white px-4 md:px-20 py-6 overflow-x-hidden max-w-screen">
     <div className="mt-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/real-time-restaurant-reports.webp"
            alt="real-time-restaurant-reports"
            width={600}
            height={400}
                className="w-full h-auto rounded-xl sm:w-3/4 md:w-2/3 lg:w-full mx-auto"
          />
        </div>

        {/* Right content */}
         <div className="w-full lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-6 md:mt-0 whitespace-nowrap md:whitespace-normal">
  Get real-time restaurant <span className="text-red-600">Reports</span>
</h3>

          <p className="mt-4 lg:mt-5 text-gray-700 text-base lg:text-lg leading-relaxed lg:leading-8 max-w-none lg:max-w-xl">
            Automate your restaurant reports and go paper free! Let Petpooja POS
            automatically track your business activities and provide you error
            free reports on your restaurant’s day-end sales, online orders,
            staff actions, inventory consumption, and various 80+ essential
            business reports.
          </p>

         <a
  href="/poss/reports-and-analytics"
             className="inline-flex items-center mt-6 text-base md:text-lg font-semibold text-black hover:underline"

>
  Explore all features →
</a>

        </div>
      </div>
    </section>
  );
}
