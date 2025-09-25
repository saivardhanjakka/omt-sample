import { Star } from "lucide-react";
import Image from "next/image";

export default function Ratings() {
  return (
    <div className="bg-white sm:-mt-10">
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Statistics Section */}
        <div>
          {/* Mobile Layout - Vertical Stack with Left Margin */}
          <div className="block md:hidden space-y-8 ml-6">
            {/* Happy Customers */}
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/happy-customers.avif"
                alt="Happy customers illustration"
                width={60}
                height={60}
                className="rounded-full flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-3xl font-bold text-[#F47537] mb-1">
                  90K
                </div>
                <div className="text-gray-600 text-base">Happy customers</div>
              </div>
            </div>

            {/* Bills Processed */}
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/bills-processed-everyday.avif"
                alt="Bills processed illustration"
                width={60}
                height={60}
                className="rounded-full flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-3xl font-bold text-[#F47537] mb-1">
                  60L
                </div>
                <div className="text-gray-600 text-base">
                  Bills processed everyday
                </div>
              </div>
            </div>

            {/* Processing Errors */}
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/processing-errors.avif"
                alt="Processing errors illustration"
                width={60}
                height={60}
                className="rounded-full flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-3xl font-bold text-[#F47537] mb-1">0%</div>
                <div className="text-gray-600 text-base">Processing errors</div>
              </div>
            </div>
          </div>

          {/* Tablet Layout - 2x2 Grid */}
          {/* Tablet Layout - 2 Columns */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-x-0 gap-y-6 ml-20 mr-10">
            {/* Happy Customers */}
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/happy-customers.avif"
                alt="Happy customers illustration"
                width={70}
                height={70}
                className="rounded-full flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-3xl font-bold text-[#F47537] mb-1">
                  90K
                </div>
                <div className="text-gray-600 text-base">Happy customers</div>
              </div>
            </div>

            {/* Bills Processed */}
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/bills-processed-everyday.avif"
                alt="Bills processed illustration"
                width={70}
                height={70}
                className="rounded-full flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-3xl font-bold text-[#F47537] mb-1">
                  60L
                </div>
                <div className="text-gray-600 text-md">
                  Bills processed everyday
                </div>
              </div>
            </div>

            {/* Processing Errors - Appears below Happy Customers */}
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/processing-errors.avif"
                alt="Processing errors illustration"
                width={70}
                height={70}
                className="rounded-full flex-shrink-0"
              />
              <div className="text-left">
                <div className="text-3xl font-bold text-[#F47537] mb-1">0%</div>
                <div className="text-gray-600 text-base">Processing errors</div>
              </div>
            </div>

            {/* Empty cell to maintain structure */}
            <div></div>
          </div>

          {/* Desktop Layout - 3 Columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12">
            {/* Happy Customers */}
            <div className="flex items-center justify-center space-x-4">
              <Image
                src="/assets/happy-customers.avif"
                alt="Happy customers illustration"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="text-left">
                <div className="text-4xl font-bold text-[#F47537] mb-1">
                  90K
                </div>
                <div className="text-gray-600 text-lg">Happy customers</div>
              </div>
            </div>

            {/* Bills Processed */}
            <div className="flex items-center justify-center space-x-4">
              <Image
                src="/assets/bills-processed-everyday.avif"
                alt="Bills processed illustration"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="text-left">
                <div className="text-4xl font-bold text-[#F47537] mb-1">
                  60L
                </div>
                <div className="text-gray-600 text-lg">
                  Bills processed everyday
                </div>
              </div>
            </div>

            {/* Processing Errors */}
            <div className="flex items-center justify-center space-x-4">
              <Image
                src="/assets/processing-errors.avif"
                alt="Processing errors illustration"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="text-left">
                <div className="text-4xl font-bold text-[#F47537] mb-1">0%</div>
                <div className="text-gray-600 text-lg">Processing errors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Ratings Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16">
            Industry ratings
          </h2>

          {/* Mobile Layout - Single Column */}
          <div className="block md:hidden space-y-8">
            {/* Capterra */}
            <div className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  Capterra
                </div>
                <div className="flex justify-center items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-3">4.7</div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reviews voted us as the value-for-money billing solution
              </p>
            </div>
          </div>

          {/* Tablet and Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Capterra */}
            <div className="text-center">
              <div className="mb-6">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">
                  Capterra
                </div>
                <div className="flex justify-center items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-xl lg:text-2xl font-bold text-[#F47537] mb-4">
                  4.7
                </div>
              </div>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Reviews voted us as the value-for-money billing solution
              </p>
            </div>

            {/* Software Suggest */}
            <div className="text-center">
              <div className="mb-6">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">
                  <span className="text-blue-500">S</span>oftware
                  <br />
                  <span className="text-blue-500">S</span>uggest
                </div>
                <div className="flex justify-center items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-xl lg:text-2xl font-bold text-[#F47537] mb-4">
                  4.7
                </div>
              </div>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Rated as the most user-friendly restaurant POS
              </p>
            </div>

            {/* Google */}
            <div className="text-center">
              <div className="mb-6">
                <div className="text-2xl lg:text-3xl font-bold mb-2">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </div>
                <div className="text-sm lg:text-base text-gray-600 mb-3">
                  28K Reviews
                </div>
                <div className="flex justify-center items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-xl lg:text-2xl font-bold text-[#F47537] mb-4">
                  4.9
                </div>
              </div>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Restaurateurs rated us the most recommended POS provider
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
