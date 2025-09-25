import Image from "next/image";

const logos = [
  { src: "/assets/biggies-new-logo_sm.avif", alt: "biggies-new-logo_sm" },
  { src: "/assets/chowman-new-logo_sm.avif", alt: "chowman-new-logo_sm" },
  { src: "/assets/the-burger-company_xs.avif", alt: "the-burger-company_xs" },
  { src: "/assets/rolls-and-bowls_xs.avif", alt: "rolls-and-bowls_xs" },
  { src: "/assets/rollsking_xs.avif", alt: "rollsking_xs" },
  { src: "/assets/kgn-xprs_xs.avif", alt: "kgn-xprs_xs" },
  { src: "/assets/fruitbae_xs.avif", alt: "fruitbae_xs" },
  { src: "/assets/freezland_xs.avif", alt: "freezland_xs" },
  { src: "/assets/logos-15_xs.avif", alt: "logos-15_xs" },
  { src: "/assets/momomia-logo_xs.avif", alt: "momomia-logo_xs" },
  { src: "/assets/jumbo-king_xs.avif", alt: "jumbo-king_xs" },
  { src: "/assets/star-biryani-logo.avif", alt: "star-biryani-logo" },
];

export default function TrustedByRestaurantsQsr() {
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
