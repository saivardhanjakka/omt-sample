import Image from "next/image";

export default function AddOnSectionMarketPlace() {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36">
        <div className="text-center">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-gray-900 ">
  Add-ons to supercharge your restaurant POS
        </h2>

        <p className="text-lg md:text-xl xl:text-2xl text-gray-600 mt-4 max-w-3xl mx-auto">
     Effective & innovative solutions that upscale your business & simplify operations
        </p>
      </div>
      <div className="relative pt-20 w-full max-w-screen-xl mx-auto xl:max-w-screen-2xl">
        <Image
          src="/assets/m-hero-img.webp" 
          alt="Restaurant Add-on Overview" 
          width={1920}
          height={1080}
          className="w-full h-auto object-contain rounded-xl shadow-md"
          priority
        />
      </div>
    </section>
  );
}
