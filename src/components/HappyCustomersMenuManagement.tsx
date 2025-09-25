import Image from "next/image"

export default function HappyCustomersMenuManagement() {
  return (
    <>
      {/* Main hero section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  75,000+ happy
                  <br />
                  customers
                </h1>
                <p className="text-gray-300 text-base sm:text-lg">
                  Our customers are boosting their businesses with Petpooja POS
                </p>
              </div>

              {/* Stats cards - show on mobile and iPad, hide on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
                <div className="bg-slate-800 rounded-xl p-4 md:p-6 md:py-8">
                  <div className="text-2xl font-bold text-white mb-2">18+</div>
                  <div className="text-gray-400 text-sm leading-relaxed">configurable national & international languages</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 md:p-6 md:py-8">
                  <div className="text-2xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400 text-sm leading-relaxed">integrations to support your business</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 md:p-6 md:py-8">
                  <div className="text-2xl font-bold text-white mb-2">200+</div>
                  <div className="text-gray-400 text-sm leading-relaxed">integrations managed from one screen</div>
                </div>
              </div>

              {/* Testimonial section - responsive layout */}
              <div className="space-y-6 lg:space-y-10">
                {/* For mobile: stack vertically, For iPad+: side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:block lg:space-y-6">
                  {/* Image - show on mobile and iPad here, hide on desktop */}
                  <div className="flex justify-center md:justify-end lg:hidden md:order-2">
                    <div className="relative">
                      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-64 md:h-64 rounded-2xl overflow-hidden">
                        <Image
                          src="/assets/kabir-chugh-idily-nama_md.avif"
                          alt="Jaipratap Singh, Managing Director"
                          width={500}
                          height={500}
                          className="w-full h-full object-cover object-center"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Testimonial text and attribution */}
                  <div className="space-y-6 md:order-1">
                    <blockquote className="text-white text-lg sm:text-lg lg:text-lg leading-relaxed">
                     "At Idlinama, we have experimented a lot with customer behavior towards upselling, combos, and add-ons - All of this has increased our ticket size considering south Indian food usually has a small average order value. None of this would have been possible by the simple-to-use backend built by Petpooja along with their dedicated customer helpline. I'm a forever fan!"
                    </blockquote>

                    <div className="space-y-2 text-center md:text-left lg:text-left">
                      <div className="text-white font-semibold text-base lg:text-lg">Kabir Chugh,</div>
                      <div className="text-gray-400 text-sm lg:text-base">Owner of Idlinama</div>
                    </div>

                    {/* Restaurant logo */}
                    <div className="flex items-center justify-center md:justify-start lg:justify-start pt-4">
                      <div className="relative">
                        <Image
                          src="/assets/kabir-chugh-idily.avif"
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
                  <div className="text-3xl font-bold text-white mb-2">18+</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    configurable national & 
                    <br/>international languages
                  
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    integrations to support 
                    <br/>
                    your business
                   
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">200+</div>
                  <div className="text-gray-400 text-sm leading-relaxed">
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
                      src="/assets/kabir-chugh-idily-nama_md.avif"
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
  )
}
