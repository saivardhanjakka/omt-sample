'use client';

import Image from 'next/image';
import teamImage from '../../public/images/join_us.png';
import handsImage from '../../public/images/Join-the-team.png';

export default function AboutJoinUs() {
  return (
    <div className="w-full py-10 px-4 sm:my-10 lg:py-20 lg:px-10 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">
        {/* Team Image - Shifted right on large screens */}
        <div className="w-full lg:max-w-[600px] flex justify-center lg:justify-start lg:ml-30">
          <Image
            src={teamImage}
            alt="Team Image"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <Image
            src={handsImage}
            alt="Hands Icon"
            className="w-34 h-34 mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
            Join us and shape the <br />
            future of restaurant industry
          </h2>
          <button className="mt-2 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
            View open positions
          </button>
        </div>
      </div>
    </div>
  );
}
