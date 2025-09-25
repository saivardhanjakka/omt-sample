import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GrowRestaurantSectionQsr() {
  const articles = [
    {
      id: 1,
      image: "/assets/franchise_md.avif",
      title: 
     "How To Get Restaurant Franchise Of Large Chain Restaurants?",
      description:
"Getting a restaurant franchise is a big decision financially, emotionally, and mentally. Owning a franchise can give you great entrepreneurial...",
      link: "#",
    },
    {
      id: 2,
      image: "/assets/POS-Blog-Covers-05_md.avif",
      title: 
      "How To Grow Your QSR Business In India?",
      description:
"Widening a QSR business is a million times more difficult than opening one. It takes planning, management, and effective execution to sustain...",
      link: "#",
    },
    {
      id: 3,
      image: "/assets/Training-staff_md.avif",
      title: 
      "5 Steps For Training Staff To Run A Succesful QSR Business",
      description:
"Quick service restaurants are a boon for you if you like your food prepared just in minutes. Are you new to the concept of a QSR business? If yes,...",
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
