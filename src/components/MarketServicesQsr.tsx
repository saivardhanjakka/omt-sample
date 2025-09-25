import Image from "next/image";

const features = [
  {
    title: "Online order reconcillation",
    description:
"Upload your aggregator payout reports and get a complete picture of your commissions, discounts, cancellations, pending orders and the real cost of operating on third-party aggregators.",
    image: {
      src: "/assets/online-order-reconcillation.avif",
      alt: "online-order-reconcillation",
      bg:  "from-orange-100 to-orange-200",
    },
  },
  {
    title: "Waiter calling system",
    description:
   "A small and stylish device with different LED colours kept on the table, allowing customers to call for the waiter, ask for water or request a bill, at the click of a button",
    image: {
      src: "/assets/kitchen-display-system.avif",
      alt: "kitchen-display-system",
      bg: "from-blue-100 to-blue-200",
    },
  },
  
  
];

export default function MarketPlaceServiceQsr() {
  return (
    <div className="bg-[#FEF0E9]">
      <main className="max-w-7xl mx-auto px-6 md:px-14 lg:px-4 py-16">
          <p className="text-[#F47537] text-center md:px-36 mb-4">
            MARKETPLACE SERVICES
        </p>
        <div className=" mb-18 text-center">
          
  <h3 className="text-4xl md:text-5xl  font-bold text-gray-900 ">Solutions to level-up your daily operations</h3>
</div>

        <div className="grid lg:grid-cols-2 gap-24">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
             <div className={`bg-gradient-to-br ${feature.image.bg} rounded-lg p-6 sm:p-8 h-72 sm:h-96 flex items-center justify-center`}>

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
