import Image from "next/image";

const features = [
  {
    title: "Scan and order",
    description:
"Take orders directly on your POS and automate your order-taking process by placing system-generated QR codes on each table",
    image: {
      src: "/assets/scan-and-order_lg.avif",
      alt: "online-order-reconcillation",

      bg: "from-blue-100 to-blue-200",
    },
  },
  {
    title: "Petpooja Pay",
    description:
"Wasting time on reconciling payments from different channels? Stop such boring tasks by switching to one Petpooja payment app and sync all your payments in one place.",
    image: {
      src: "/assets/petpooja-pay_lg.avif",
      alt: "feedback",
      bg: "from-orange-100 to-orange-200",
    },
  },
];

export default function MarketPlaceServiceFoodCourt() {
  return (
    <div className="bg-[#FEF0E9]">
      <main className="max-w-7xl mx-auto px-6 md:px-14 lg:px-4 py-16">
        <p className="text-[#F47537] text-center md:px-36 mb-4">
          MARKETPLACE SERVICES
        </p>
        <div className=" mb-18 text-center">
          <h3 className="text-4xl md:text-5xl  font-bold text-gray-900 ">
            Solutions to level-up your daily operations
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div
                className={`bg-gradient-to-br ${feature.image.bg} rounded-lg p-6 sm:p-8 h-72 sm:h-96 flex items-center justify-center`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 52vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 sm:mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
