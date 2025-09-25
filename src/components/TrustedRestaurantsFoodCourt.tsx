import Image from "next/image";

const logos = [
  { src: "/assets/altag-food-court.avif", alt: "altag-food-court" },
  { src: "/assets/Haldirams-Logo_md.avif", alt: "Haldirams-Logo_md" },
  { src: "/assets/B-13-Logo-1_md.avif", alt: "B-13-Logo-1_md" },
  { src: "/assets/jumbo-king (1).avif", alt: "jumbo-king (1)" },
  { src: "/assets/Al-bek.webp", alt: "Al-bek" },
  { src: "/assets/honest.avif", alt: "honest" },
 
];

export default function TrustedByRestaurantsFoodCourt() {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-[150px] h-[120px] relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
