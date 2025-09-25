'use client'

import Image from 'next/image'
import image1 from '../../public/images/matrics-1.svg'
import image2 from '../../public/images/matrics-2.svg'
import image3 from '../../public/images/matrics-3.svg'

export default function KeyMetricsSection() {
  return (
    <section className="bg-[#09151F] text-white py-10 pb-0 pt-1 px-4 md:pb-4 md:pt-4 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-stretch gap-6 sm:gap-10 lg:gap-12">
        
        {/* Left Heading */}
        <div className="w-full lg:w-1/2 flex items-start justify-center lg:justify-start lg:pl-10 text-center lg:text-left">
          <div>
            <p className="text-md font-semibold text-gray-300 mt-10 mb-3 lg:pl-11">How we build trust</p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
              {/* Two lines for small screens */}
              {/* sm only: 2 lines */}
<span className="block sm:block md:hidden text-3xl font-semibold">
  Amplifying The Key <br /> Metrics That Matter
</span>

{/* md only: 1 line */}
<span className="hidden md:block lg:hidden text-4xl font-semibold">
  Amplifying The Key Metrics That Matter
</span>

{/* lg and up: 3 lines */}
<span className="hidden lg:block pl-10">
  <span className="block text-5xl font-semibold">Amplifying The</span>
  <span className="block text-5xl font-semibold">Key Metrics</span>
  <span className="block text-5xl font-semibold">That Matter</span>
</span>

            </h2>
          </div>
        </div>
        

        {/* Right Metrics - Moved somewhat right (subtle adjustment) */}
        {/* <div className="w-full lg:w-1/2 flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center sm:justify-around lg:justify-start items-center 
                        lg:pl-0 lg:pr-0 
                        lg:gap-x-32 
                        lg:ml-[-6rem] 
        "> 
          {[ 
            { img: image1, value: '100k+', label: 'Businesses trust us' },
            { img: image2, value: '14+', label: 'Years of excellence' },
            { img: image3, value: '0%', label: 'Processing errors' }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-row lg:flex-col items-center lg:items-start justify-center text-center lg:text-left py-6 mb-1 gap-3 
                w-full sm:w-1/2 lg:w-auto lg:flex-shrink-0 
                relative 
                lg:pl-0 
                lg:before:content-[''] lg:before:absolute lg:before:left-[-64px] lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:h-2/3 lg:before:w-px lg:before:bg-white 
                first:lg:before:hidden
            ">
              <div className="transition-transform duration-300 hover:scale-110">
                <Image 
                  src={item.img} 
                  alt={item.label} 
                  width={90} 
                  height={90}
                  className="w-[90px] h-[90px] lg:w-[120px] lg:h-[120px]"
                />
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h3 className="text-5xl sm:text-5xl font-semibold">{item.value}</h3>
                <p className="text-md text-gray-300 mt-1">{item.label}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="w-full lg:w-1/2 flex flex-col items-center 
  lg:flex-row lg:justify-start lg:items-start 
  lg:pl-0 lg:pr-0 
  lg:gap-x-32 
  lg:ml-[-6rem]">
  
  {[
    { img: image1, value: '100k+', label: 'Businesses trust us' },
    { img: image2, value: '14+', label: 'Years of excellence' },
    { img: image3, value: '0%', label: 'Processing errors' }
  ].map((item, idx) => (
    <div 
      key={idx} 
      className="flex flex-row lg:flex-col items-center lg:items-start justify-center text-center lg:text-left py-6 mb-1 gap-3 
      w-full sm:w-1/2 lg:w-auto lg:flex-shrink-0 
      relative 
      lg:pl-0 
      lg:before:content-[''] lg:before:absolute lg:before:left-[-32px] lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:h-2/3 lg:before:w-px lg:before:bg-white 
      first:lg:before:hidden
      ">
      <div className="transition-transform duration-300 hover:scale-110 sm:mb-6 md:mb-6 lg:mb-0 mb-2 ">
        <Image 
          src={item.img} 
          alt={item.label} 
          width={90} 
          height={90}
          className="w-[90px] h-[90px] lg:w-[120px] lg:h-[120px]"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="text-5xl sm:text-5xl font-semibold">{item.value}</h3>
        <p className="text-md text-gray-300 mt-1">{item.label}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}