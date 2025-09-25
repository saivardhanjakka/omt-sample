import Image from "next/image";
import image from "../../public/assets/Serving1000.png"
import KshatriyaFoods from "../../public/assets/Kshatriya Foods 1.png"
export default function HappyCustomers() {
  return (
    <>
      {/* Main hero section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold leading-tight text-center lg:text-left">
                  Serving 1,000+ successful for businesses and counting
                </h1>
                <p className="text-gray-300 text-base sm:text-lg text-center lg:text-left">
                  Ordermatic POS is helping restaurants streamline operations
                  and boost growth.
                </p>
              </div>

              {/* Stats cards - show on mobile and iPad, hide on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
                <div className="bg-slate-800 rounded-xl p-4 md:p-6 md:py-8">
                  <div className="text-2xl font-bold text-white mb-2">2L+</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    bills processed everyday
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 md:p-6 md:py-8">
                  <div className="text-2xl font-bold text-white mb-2">
                    {"<"}1day
                  </div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    to set up the POS system
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 md:p-6 md:py-8">
                  <div className="text-2xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    hardware can be integrated
                  </div>
                </div>
              </div>

              {/* Testimonial section - responsive layout */}
              <div className="space-y-6 lg:space-y-6 mt-10">
                {/* For mobile: stack vertically, For iPad+: side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:block lg:space-y-6">
                  {/* Image - show on mobile and iPad here, hide on desktop */}
                  <div className="flex justify-center md:justify-end lg:hidden md:order-2">
                    <div className="relative">
                      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-64 md:h-64 rounded-2xl overflow-hidden">
                        <Image
                          src={image}
                          alt="serving 1000+ resturants"
                          width={500}
                          height={500}
                          className="w-full h-full object-cover object-center"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Testimonial text and attribution */}
                  <div className="space-y-6 md:order-1 ">
                    <blockquote className="text-white text-md sm:text-lg md:text-md lg:text-lg leading-relaxed">
                      "Ordermatic has been a true game changer for our
                      restaurant operations. The POS system is fast, reliable,
                      and thoughtfully equipped with features that drive real
                      operational value. From QR code-based ordering to seamless
                      billing and smooth kitchen coordination, every aspect is
                      built for efficiency and ease of use. Our staff adapted
                      quickly, and we’ve seen a noticeable uplift in both
                      service speed and customer satisfaction. The ability to
                      remotely monitor and manage our restaurant adds a new
                      level of convenience and control. Ordermatic is an
                      excellent solution for any restaurant looking to
                      modernize, streamline processes, and scale effectively."
                    </blockquote>

                    <div className="space-y-2 text-center md:text-left lg:text-left">
                      <div className="text-white font-semibold text-md lg:text-md">
                      Kshatriya Foods, Hyderabad
                      </div>
                      {/* <div className="text-gray-400 text-sm lg:text-sm">
                        Managing Director
                      </div> */}
                    </div>

                    {/* Restaurant logo */}
                    {/* Restaurant logo */}
                    <div className="flex items-center justify-center md:justify-start lg:justify-start pt-2 -mt:6">
                      <div className="relative">
                        <Image
                          src={KshatriyaFoods}
                          alt="United Farmers Creamery Logo"
                          width={100}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content - Stats and Image (Desktop only) */}
            <div className="space-y-8 hidden lg:block">
              {/* Stats cards - show on desktop only */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">2L+</div>
                  <div className="text-gray-400 text-lg leading-relaxed">
                    bills processed
                    <br />
                    everyday
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    {"<"} 1day
                  </div>
                  <div className="text-gray-400 text-lg leading-relaxed">
                    to set up the POS
                    <br />
                    system
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400 text-lg leading-relaxed">
                    hardware can be
                    <br />
                    integrated
                  </div>
                </div>
              </div>

              {/* Image - show on desktop only */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-72 h-72 xl:w-96 xl:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={image}
                      alt="Jaipratap Singh, Managing Director"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
