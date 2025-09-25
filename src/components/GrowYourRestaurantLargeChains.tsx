import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionLargeChains() {
  const articles = [
    {
      id: 1,
      image: "/assets/ultimate-guide_md.avif",
      title: 
     "Ultimate Guide To Restaurant Inventory Management For Multiple Outlets",
      description:

      "If you think that maintaining a single restaurant outlet is a difficult job, think about running many of them in the same capacity! But many surveys",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/Simplify-Larg_md.avif",
      title: 
      "Petpooja POS Features That Simplify Large Chain Management",
      description:

      "Running a restaurant is a hectic and overwhelming task. And if we are talking about managing large chains with multiple outlets, then",

      link: "#",
    },
    {
      id: 3,
      image: "/assets/Ultimate-Guide-inventory_md.avif",
      title: 
      "Ultimate Guide To Restaurant Inventory Management For Multiple Outlets",
      description:

      "If you think that maintaining a single restaurant outlet is a difficult job, think about running many of them in the same capacity! But many surveys",
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
