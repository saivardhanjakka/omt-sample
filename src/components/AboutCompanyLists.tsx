"use client";
import Image from "next/image";
import image from "../../public/images/delicious-food_xl.png";

const stats = [
  {
    value: "75,000+",
    description: "Clients across India, UAE, South Africa & expanding further",
  },
  {
    value: "140+",
    description: "Cities covered by our on ground support team",
  },
  {
    value: "25%",
    description: "Online order volume on zomato & swiggy processed on Petpooja",
  },
  {
    value: "60L",
    description: "Bills processed everyday hassle & error free",
  },
];

const AboutCompanyList = () => {
  return (
    <section className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 py-12 lg:py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-[2.5rem] font-bold text-gray-800">
          Serving those who serve delicious food
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl text-md mx-auto">
          We learn, adapt & improve our technology to suit the needs of all our
          modern users
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col mt-20 lg:flex-row lg:items-center lg:gap-24">
        {/* Image */}
        <div className="w-full md:w-3/4 lg:w-[45%] mx-auto mb-8 lg:mb-0">
          <div className="relative w-full h-80 sm:h-96 lg:h-[450px] rounded-lg w-hidden shadow-lg">
            <Image
              src={image}
              alt="Happy Clients with Petpooja"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="w-full mt-10 md:mt-10 lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:gap-y-16 gap-x-12 lg:gap-x-20 text-center lg:text-left lg:pl-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="w-full mx-auto text-center lg:text-left lg:mx-0 lg:max-w-md"
            >
              <p
                className={`text-4xl font-semibold  ${
                  index % 2 === 0 ? "text-[rgb(197,32,49)]" : "text-black"
                }`}
              >
                {item.value}
              </p>
              <p
                className="
    text-gray-700 mt-2 leading-relaxed text-center
    max-w-[90%] sm:max-w-xs md:max-w-sm
    mx-auto lg:mx-0 lg:max-w-none lg:text-left
    text-balance text-lg
  "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompanyList;
