import Image from "next/image";
import { ArrowRight } from "lucide-react";
import thirdpartyintegration from "../../public/images/third-party-integration_md.webp"
import mustintegartion from "../../public/images/must-integrations_md.webp"
import swiggyzomato from "../../public/images/swiggy-zomanto_md.avif"
export default function GrowRestaurantIntegration() {
  const articles = [
    {
      id: 1,
      image: thirdpartyintegration,
      title: 
     "Third-Party Integration: 6 Ways It Helps Boost Your Restaurant Business",
      description:
"business has an application or a website, staying on top of trends can be a task. That's where third-party integration comes into the picture.",
      link: "#",
    },
    {
      id: 2,
      image: mustintegartion,
      title: 

      "Must-Have Integrations For Managing Your Restaurant!?",
      description:"There has been an increase in platforms providing affordable third-party technology and integrations to manage...",
      link: "#",
    },
    {
      id: 3,
      image: swiggyzomato,
      title: 

      "Swiggy V/S Zomato: How To Pick Your Ideal Delivery Partner?",
      description:

      "Digitalization has impacted all areas of our life. Without a doubt, food tech startups have transformed the way...",
      link: "#",
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Grow Your Restaurant
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article) => (
            <div
              key={article.id}
              className=" overflow-hidden "
            >
              {/* Article Image */}
              <div className="relative rounded-2xl h-64 w-full">
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
