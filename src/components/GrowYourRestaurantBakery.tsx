import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionBakery() {
  const articles = [
    {
      id: 1,
      image: "/assets/Template-7-Brown_md.avif",
      title: 

     "What Bakery Equipment Do I Need To Start My Bakery Business?",
      description:

      "Mastering the art of baking requires dedication, practice, patience and an appetite to eat 20 different kinds of cheesecakes! And starting a",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/ideas_to_increase_bakery_sales_md.avif",
      title: 

      "5 Essential Tips To Grow Your Bakery Business In India",
      description:

"Are you a small local bakery shop owner or a home baker looking to grow your bakery business? Well, the Indian bakery market was",
      link: "#",
    },
    {
      id: 3,
      image: "/assets/how-to-start-a-bakery-large_md.avif",
      title: 

      "How to Start A Successful Bakery Business In India: A Complete Guide",
      description:

      "Who doesn't like a sweet cupcake on a tired afternoon? or a croissant with their coffees? The demand for bake goods and a good bakery has",
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
