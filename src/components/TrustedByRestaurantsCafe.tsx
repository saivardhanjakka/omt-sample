import Image from "next/image";

const logos = [
  { src: "/assets/cafe_buddyss_expresso.avif", alt: "cafe_buddyss_expresso" },
  { src: "/assets/Cafe_durga.avif", alt: "Cafe_durga" },
  { src: "/assets/cafe_by_de_bella.avif", alt: "cafe_by_de_bella" },
  { src: "/assets/Chai-Sutta-Bar.avif", alt: "Chai-Sutta-Bar" },
  { src: "/assets/Karupatti_house.avif", alt: "Karupatti_house" },
  { src: "/assets/pings_cafe.avif", alt: "pings_cafe" },
  { src: "/assets/Namaste_Chai.avif", alt: "Namaste_Chai" },
  { src: "/assets/Chai_Waale.avif", alt: "Chai_Waale" },
  { src: "/assets/cafe_peter.avif", alt: "cafe_peter" },
  { src: "/assets/Nothing_Before_Coffee.avif", alt: "Nothing_Before_Coffee" },
  { src: "/assets/grace_cafe.avif", alt: "grace_cafe" },
  { src: "/assets/classic_rider_cafe.avif", alt: "classic_rider_cafe" },
];

export default function TrustedByRestaurantsCafe() {
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
