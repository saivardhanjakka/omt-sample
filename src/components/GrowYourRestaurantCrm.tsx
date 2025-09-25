import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionCrm() {
  const articles = [
    {
      id: 1,
      image: "/assets/win-customer_md.avif",
      title: "Win Customer Loyalty With Your Restaurant CRM Tools",
      description:
      "A wholesome customer experience in a restaurant goes beyond just serving them food and beverages. Customers like businesses that go",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/restaurant-loyalty-program-ideas_md.avif",
      title: "Top 7 Restaurant Loyalty Programs To Use In India In 2022",
      description:

      "44% of millennials aged between 25 to 34 are more loyal to restaurant brands than ever before and Restaurant loyalty programs have played a",
      link: "#",
    },
    {
      id: 3,
      image: "/assets/losing-loyal_md.avif",
      title:
        "Did You Know Your Restaurant Is Losing Loyal Customers Every day?",
      description:

      "Whether you are looking to open a new restaurant or have been running one for some time, you must have a plan to make profits. And one of the most",
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
