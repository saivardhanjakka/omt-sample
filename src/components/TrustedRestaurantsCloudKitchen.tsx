import Image from "next/image";

const logos = [
  { src: "/assets/burgerama.avif", alt: "La Pinoz Pizza" },
  { src: "/assets/bigspoon.avif", alt: "Moti Mahal" },
  { src: "/assets/baking-bad.avif", alt: "Jumboking" },
  { src: "/assets/francescos.avif", alt: "HOCCO Eatery" },
  { src: "/assets/pot-pot.avif", alt: "Yum Yum Cha" },
  { src: "/assets/noshi.avif", alt: "TGI Fridays" },
  { src: "/assets/bb-dirasoi.avif", alt: "Gianis" },
  { src: "/assets/the-red-box (1).avif", alt: "Yangkiez" },
  { src: "/assets/curry-nama.avif", alt: "Kabhi B" },
  { src: "/assets/wicked.avif", alt: "Apsara Ice Creams" },
  { src: "/assets/Bikkgane-Biryani-logo.avif", alt: "Bercos" },
  { src: "/assets/chikeera.avif", alt: "Kailash Parbat" },
];

export default function TrustedByRestaurantsCloudKitchen() {
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
