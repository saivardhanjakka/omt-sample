"use client";
import Image from "next/image";
import evolutionImage from "../../public/images/B2B-food-delivery.png"; // replace with your image

export default function AboutStory() {
  const heading = [
    "From a small-scale B2B food delivery platform to ",
    "India’s no. 1 restaurant billing software provider",
  ];

  const paragraphs = [
    `When Petpooja’s first avatar came into being in 2011, it was a simple B2B food delivery model that took bulk food orders from the corporates & passed them forward to the restaurants. But soon, our founders realised that the restaurants they worked with were not living up to their potential and were shutting down forever.`,
    `Primarily it was due to a lack of coherent technology that could support their daily operations. Their billing machines were as bulky, tedious and old as time. Due to this, the restaurants never had an actual estimate of their profit margins & expenses. Back then, restaurants were suffering more than growing.`,
    `This was when our founders decided to build a robust, user-friendly & cost-effective billing software for SMB restaurants that will automate everyday operations and push businesses towards sustainability.`,
    `And now, a decade into the industry, we have realized our dream of becoming the ideal restaurant billing solution provider to all & every kind of food service business in India.`,
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-10 lg:mt-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-10">
        {/* Left Section: Heading and Image */}
        <div className="flex-1 text-center  lg:ml-4 lg:text-left">
          <h2 className="text-2xl md:text-2xl lg:text-3xl  lg:max-w-lg text-gray-800">
            {heading.map((text, index) => (
              <span
                key={index}
                className={index === 1 ? "text-[rgb(197,32,49)]" : ""}
              >
                {text}
              </span>
            ))}
          </h2>

          <div className="my-6 flex justify-center lg:mt-14 lg:pl-4 lg:justify-start">
            <Image
              src={evolutionImage}
              alt="Evolution"
              className="w-full max-w-md lg:max-w-xl"
              priority
            />
          </div>
        </div>

        {/* Right Section: Paragraphs */}
       <div className="flex-1 text-lg sm:text-left md:text-lg ml-0 sm:ml-14 lg:text-lg lg:max-w-xl text-gray-700 leading-relaxed space-y-4 mt-4 lg:mt-0">
  {paragraphs.map((para, idx) => (
    <p key={idx}>{para}</p>
  ))}
</div>
      </div>
    </section>
  );
}
