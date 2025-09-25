import Image from "next/image";
import { Button } from "@/components/ui/button";
import listIcon from "../../public/images/list-icon (1).avif";

export default function PosReportsBar() {
  return (
    <div className="min-h-screen bg-white">
      {/* Section Wrapper */}
      <section className="bg-slate-900 text-white px-4 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-[#F47537] font-bold mb-4">ANALYTICS</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-8 max-w-4xl mx-auto">
              Petpooja POS bakery reports that help improve your staff and
              customer management
            </h1>
          </div>

          {/* Responsive Layout */}
          <div className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:gap-12 items-start">
            {/* Block 1: Image 1 + Text 1 */}
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <Image
                  src="/assets/Waiter-Performance-Reports_md.avif"
                  alt="Restaurant team meeting with employee management interface"
                  width={900}
                  height={700}
                  className="w-full h-auto object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                  Single Dashboard Monitoring
                </h2>
                <p className="text-gray-300 mb-8 text-lg ">
                  Don't shuffle between multiple screens to keep track of online
                  orders, deliveries, inventory reports and your bakery website!
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={listIcon}
                      alt="icon"
                      width={24}
                      height={24}
                      className="mt-1"
                    />
                    <p className="text-gray-300 lg:max-w-xl ">
                      Accept orders, manage inventory, download reports & much
                      more from a single screen
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Image
                      src={listIcon}
                      alt="icon"
                      width={24}
                      height={24}
                      className="mt-1"
                    />
                    <p className="text-gray-300">
                      Get a detailed report of all your bakery outlets, and
                      every single sale on one dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Image 2 + Text 2 */}
            <div className="flex flex-col gap-8 mt-12 lg:mt-0">
              <div className="w-full">
                <Image
                  src="/assets/Happy-Hour-Sales-Reports_md.avif"
                  alt="Analytics Dashboard"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                  User Right Management
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Have complete control over what your staff sees and does with
                  our Bakery POS software
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={listIcon}
                      alt="icon"
                      width={24}
                      height={24}
                      className="mt-1"
                    />
                    <p className="text-gray-300">
                      Track your staff performance so that their efforts don’t
                      go unnoticed
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Image
                      src={listIcon}
                      alt="icon"
                      width={24}
                      height={24}
                      className="mt-1"
                    />
                    <p className="text-gray-300">
                      Create outlet-wise staff rights for smoother operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
