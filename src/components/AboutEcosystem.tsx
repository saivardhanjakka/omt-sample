'use client';
import Image from 'next/image';

// Section logos
import innovationLogo from '../../public/images/Innovation.png';
import simplicityLogo from '../../public/images/Simplicity.png';
import supportLogo from '../../public/images/Customer-support.png';
import pricingLogo from '../../public/images/pricing.png';

// Section images
import innovation1 from '../../public/images/Innovation-1.png';
import innovation2 from '../../public/images/Innovation-2.png';
import innovation3 from '../../public/images/Innovation-3.png';

import simplicity1 from '../../public/images/Simplicity-1.png';
import simplicity2 from '../../public/images/Simplicity-2.png';

import support1 from '../../public/images/Customer-support-2_md.png';
import support2 from '../../public/images/Customer-support-1_sm.png';

import pricing1 from '../../public/images/about-pricing_xl.png';

const sections = [
  {
    title: 'Innovation',
    description:
      'The major force behind our success has always been constant research & innovation.',
    logo: innovationLogo,
    images: [innovation1, innovation2, innovation3],
  },
  {
    title: 'Simplicity',
    description:
      'We believe in creating solutions that come without any confusing instruction manuals.',
    logo: simplicityLogo,
    images: [simplicity1, simplicity2],
  },
  {
    title: 'Customer Support',
    description:
      'We always ensure that our restaurant partners are heard & their problems resolved.',
    logo: supportLogo,
    images: [support1, support2],
  },
  {
    title: 'Pricing',
    description:
      'We are a strong believer in transparent & cost-effective pricing of technology.',
    logo: pricingLogo,
    images: [pricing1],
  },
];

export default function AboutEcosystem() {
  return (
    <section className="w-full px-4 py-12 lg:mt-14">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900">Empowering restaurant ecosystem</h2>
          <p className="text-gray-600 mt-2 max-w-2xl text-md mx-auto">
           Streamline unorganized sector of the food industry Innovation

          </p>
        </div>

        {/* Each Section */}
        {sections.map((section, index) => {
          // Determine grid columns dynamically based on number of images
          const isSingleImage = section.images.length === 1;
          const gridColsClass = isSingleImage ? 'md:grid-cols-1' : 'md:grid-cols-2';

          return (
            <div key={index} className="space-y-8 lg:mt-14 ">
              {/* Top Row */}
              <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between md:gap-x-6 max-w-3xl mx-auto md:px-6">
                {/* Text */}
                <div className="order-last sm:order-none flex-1 text-center md:text-left space-y-1 mt-4 md:mt-0">
                  <h3 className="text-3xl font-semibold text-gray-800">{section.title}</h3>
                  <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">{section.description}</p>
                </div>

                {/* Logo */}
                <div className="order-first sm:order-none flex-shrink-0">
                  <Image
                    src={section.logo}
                    alt={`${section.title} logo`}
                    className="w-[8.5rem] h-[8.5rem] md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                  />
                </div>
              </div>

              {/* Bottom Image Grid - Conditionally apply grid columns */}
              <div className="flex justify-center">
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-5 max-w-3xl w-full md:px-6`}>
                  {section.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="rounded-xl overflow-hidden "
                    >
                      <Image
                        src={img}
                        alt={`${section.title} ${imgIndex + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}