import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionCLoudKitchen() {
  const articles = [
    {
      id: 1,
      image: "/assets/cloud-kitchens_md.avif",
      title: 
     "5 Best Strategies To Increase Online Orders For Your Cloud Kitchen",
      description:
"A decade ago if someone would have suggested that non dine-in restaurants are a real thing and it would be this big in the future they would...",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/cloud-kitchen-pos_md.avif",
      title: 

      "Cloud Kitchen POS Features To Look Out For Your Business",
      description:

"Cloud kitchens are the most cost-effective business model for the restaurant industry in India. For the cloud kitchen business, the main...",
      link: "#",
    },
    {
      id: 3,
      image: "/assets/Chefs_md.avif",
      title: 

      "Complete Guide On Cloud Kitchen Licenses Required In India",
      description:

      "Well, Cloud Kitchens don’t really need heavy investments initially and you can actually kickstart your business quite early. However, don’t...",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Grow Your Restaurant
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Article Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {article.description}
                </p>

                {/* Read More Link */}
                <a
                  href={article.link}
                  className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
                >
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
