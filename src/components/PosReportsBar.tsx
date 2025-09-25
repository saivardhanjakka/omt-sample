"use client";
import Image from "next/image";
import { BarChart3, Users, FileText, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import Aos from "aos";

const reports = [
  {
    image: "/assets/Waiter-Performance-Reports_md.avif",
    alt: "Waiter Performance",
    title: "Waiter Performance Reports",
    description:
      "With Petpooja Billing Software, you can track the performance of your staff. This way all their efforts will never go underappreciated!",
    features: [
      {
        icon: Users,
        text: "Offer rewards to your star performers",
      },
      {
        icon: BarChart3,
        text: "Regular assessments for improving overall staff performance",
      },
    ],
  },
  {
    image: "/assets/Happy-Hour-Sales-Reports_md.avif",
    alt: "Happy Hour Sales",
    title: "Happy Hour Sales Reports",
    description:
      "As much as customers love happy hours, managing large orders is hectic for the staff. With Petpooja POS, you can easily keep track of all your sales, customers and inventory.",
    features: [
      {
        icon: FileText,
        text: "Saves time in tracking sold drinks & inventory",
      },
      {
        icon: TrendingUp,
        text: "Understand & analyse order-wise sales to reap maximum profits",
      },
    ],
  },
];

export default function PosReportsBar() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white px-4 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#F47537] font-bold mb-4">ANALYTICS</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-4xl mx-auto">
              POS reports made accurate & comprehensive
            </h1>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {reports.map((feature, index) => (
              <div key={index} className="flex flex-col space-y-6 text-left">
                {/* Image */}
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-xl"
                />

                {/* Text Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>

                  <div className="space-y-3">
                    {feature.features.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="bg-gray-800 p-2 rounded-full flex items-center justify-center">
                          <point.icon className="w-5 h-5 text-white" />
                        </span>
                        <p className="text-gray-300">{point.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
