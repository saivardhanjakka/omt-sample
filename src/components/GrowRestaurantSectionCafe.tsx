import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionCafe() {
  const articles = [
    {
      id: 1,
      image: "/assets/cheating-husband_md.avif",
      title: 
     "Shop and Establishment Act License For Your Cafe-Restaurant",
      description:

      "If you’re a registered shop or commercial establishment covered under the act you need to mandatorily apply for Shop and Establishment...",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/six-pos-cafe_md.avif",
      title: 

      "6 PoS Features That Will Increase Your Cafe Sales!",
      description:
      "Opening a cafe is a herculean task, but the cafe owners know that keeping it in business and increasing sales is a bigger challenge. Particularly...",

      link: "#",
    },
    {
      id: 3,
      image: "/assets/equipment-cafe_md.avif",
      title: 

      "The Equipment You Must Have In Your Cafe!",
      description:

      "The rising coffee culture in India has made cafes trendy and exciting. People are starting to appreciate good coffee in India. The economical...",
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
