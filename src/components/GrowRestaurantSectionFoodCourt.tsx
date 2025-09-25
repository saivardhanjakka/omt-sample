import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionFoodCourt() {
  const articles = [
    {
      id: 1,
      image: "/assets/pros-cons_md.avif",
      title: 
     "Pros & Cons Of Opening An Outlet At A Food Court",
      description:
"You and your friends want to dine out but everyone is craving something different. What do you do? Go to a food court!.",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/setp-guid-catering_md.avif",
      title: 

      "The 5 Step Guide To Start A Catering Business in 2022",
      description:
"There is hardly any event that goes without food and drinks. Statistically speaking, the Motilal Oswal Financial Services has predicted that the...",
      link: "#",
    },
    {
      id: 3,
      image: "/assets/aquire-guid_md.avif",
      title: 

      "How To Acquire A Restaurant Franchise in India?",
      description:
"If you are a junk food fan, out of the top 5 places you name, at least 1 will surely be a restaurant franchise. Go on, think about it!",      link: "#",
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
