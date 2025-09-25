import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionPizzeria() {
  const articles = [
    {
      id: 1,
      image: "/assets/namesnack-pizza_sm.avif",
      title: 

     "How To Grow Your Pizzeria Multifold In India?",
      description:

      "Pizza fans are unbeatable, despite the economic slump and global pandemic the sales for independent pizzerias actually went up by 0.58%,",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/pizza-marketing_sm.avif",
      title: 

      "Top 10 Successful Tips for Pizza Marketing",
      description:

      "It is no surprise that Indians love pizza. Pizza has become a go-to food for movie nights, house parties or even the saviour of a bad day at work.",
      link: "#",
    },
    {
      id: 3,
      image: "/assets/pizza-trendy_md.avif",
      title: 

      "How To Open A Trendy Go-To Pizza Shop For Your Customers?",
      description:

      "Hearing the word pizza alone makes our mouths watery and brings a smile to our faces no wonder 5 billion+ pizzas are sold worldwide each year.",
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
