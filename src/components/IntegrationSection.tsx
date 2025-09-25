import Image from "next/image";
import { Button } from "@/components/ui/button";
import onepowerfulview from "../../public/assets/One-Powerful-View.png"
export default function IntegrationSection() {
  return (
    <section className="bg-white py-16 mb-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="md:w-[48%] text-center md:text-left">
            <h5 className="uppercase tracking-wide text-sm font-semibold text-[#F47537] mb-2">
              Integrations
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Multiple Integrations. One Powerful View.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
           Enjoy unlimited third-party integrations managed seamlessly through Ordermatic POS
            </p>
            {/* <div className="flex justify-center md:justify-start">
              <Button className="bg-[#F47537] hover:bg-[#F47537] text-white px-5 py-6 text-base font-semibold rounded-md shadow-none">
                See all integrations
                <span className="ml-2">→</span>
              </Button>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="md:w-[52%] flex justify-center items-center">
            <Image
              src={ onepowerfulview}
              alt="Integrations Illustration"
              width={800}
              height={500}
              className="w-full h-auto max-w-xl"
            />
          </div>
        </div>

        {/* Bottom Desktop Integrations Image */}
        {/* <div className="hidden md:flex justify-center w-full mt-16">
          <Image
            src="/assets/all-integrations.webp"
            alt="All integrations"
            width={1200}
            height={600}
            className="w-full max-w-6xl h-auto rounded-lg "
          />
        </div>

       
        <div className="flex md:hidden justify-center w-full mt-16">
          <Image
            src="/assets/all-integrations-mobile.avif"
            alt="All integrations mobile"
            width={400}
            height={800}
            className="w-full max-w-sm h-auto rounded-lg "
          />
        </div> */}
      </div>
    </section>
  );
}
