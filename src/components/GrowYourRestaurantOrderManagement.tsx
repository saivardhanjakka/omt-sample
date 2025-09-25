import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionOrderManagement() {
  const articles = [
    {
      id: 1,
      image: "/assets/swiggy-and-zomato-delivery-boys_md.avif",
      title: "How to Start Online Ordering for your Restaurant?",
      description:
        "The online ordering industry in India has grown tremendously in recent years. The quantity of food orders received by restaurants has tripled",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/online-ordering-customer_md.avif",
      title: "How To Retain Your Online Ordering Customers",
      description:
        "Getting new customers is always exciting. But your business thrives only when you have loyal customers who visit you regularly. As well as the",
      link: "#",
    },
    {
      id: 3,
      image: "/assets/mistakes-ordering_md.avif",
      title:
        "7 Mistakes Restaurants Should Avoid For Better Online Food Delivery",
      description:
        "Running a restaurant can be an overwhelming experience. There are a million different things to look after on a daily basis. In such a scenario, it is",
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
