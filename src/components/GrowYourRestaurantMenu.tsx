import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionMenuManagement() {
  const articles = [
    {
      id: 1,
      image: "/assets/greate-restaurant.avif",
      title: "How to Start Online Ordering for your Restaurant?",
      description:
      "Menu designing is an art, its science, its psychology.. in short, its very important. An integral part of menu designing is writing",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/top-free-menu-restaurant.avif",
      title: "Top 5 Free Restaurant Menu Designing Tools For Your Restaurant",
      description:
"A menu is the soul of your restaurant! It reflects the personality of your restaurant. A well-designed menu can be a great brand-building",
      link: "#",
    },
    {
      id: 3,
      image: "/assets/secret-restuarant-menu.avif",
      title:
        "Menu Engineering- Secret to a Profitable Restaurant Menu",
      description:
"Great thought and effort go into tailoring a Restaurant Menu. Your restaurant menu is so much more than a beautiful design and a list of",
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
