import Image from "next/image";

const features = [
  {
    title: "Central kitchen module",
    description:"An inventory management software that lets you create a central kitchen for all your single & multiple outlets. Request or supply inventory, manage suppliers, and return the damaged stock back to its source without hassle!",
    image: {
      src: "/assets/central-kitchen-module.avif",
      alt: "Customizable bill format interface showing restaurant invoice with GST, logo, and QR code features",
     
    },
  },
  {
    title: "Raw material management",
    description:"Plan your inventory restocking and set ‘low stock’ alerts on Petpooja’s inventory management system. Easily manage the availability of menu items both for dine-in & online menu.",
    image: {
      src: "/assets/raw-material-management.avif",
      alt: "Multi-terminal billing interface showing Master POS with multiple billing counters and KOT system",
     
    },
  },
   {
    title: "Multi-stage recipe management",
    description:"A restaurant POS system designed to automatically deduct your stock when used. Upload your item-wise recipe in the software & let the smart POS look after your consumption rate at every stage without you having to worry about stock-outs!",
    image: {
      src: "/assets/multistage-recipe.avif",
      alt: "Station-wise kot printing",
     
    },
  },
   {
    title: "Purchase order management",
    description:"Raise & accept purchase order tickets directly from your suppliers or your central kitchen right from the POS dashboard. Keep track of the frequently ordered items from each supplier and particular outlet or zone.",
    image: {
      src: "/assets/purchase-order-management.avif",
      alt: "Table and area management",
     
    },
  },
  
];

export default function InventoryManagementFeatures() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-6 md:px-14 lg:px-4 py-16">
        <div className="mb-18 text-center">
  <h3 className="text-4xl  md:text-4xl font-bold text-gray-900 ">

POS feature for easy inventory management  </h3>
</div>

        <div className="grid lg:grid-cols-2 gap-24">
        {features.map((feature, index) => (
                    <div
                      key={index}
                      className="w-full max-w-2xl mx-auto text-left space-y-6"
                    >
                      {/* Image with same width as text */}
                      <div className="w-full relative aspect-[4/3]  animate-slide-in-from-right"  data-aos="scroll-animation">
                        <Image
                          src={feature.image.src}
                          alt={feature.image.alt}
                          fill
                          className="object-contain rounded-lg"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                        />
                      </div>
        
                      {/* Text */}
                      <div className="text-left mt-12 animate-slide-in-from-left"  data-aos="scroll-animation">
                        <h2 className="text-2xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4">
                          {feature.title}
                        </h2>
                        <p className="text-gray-600 text-lg sm:text-lg leading-relaxed">
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
