// "use client";
import React from "react";
import { Mail } from "lucide-react";

const jobData = {
  title: "Customer Experience Engineer",
  company: {
    name: "Order Matic Technologies Private Limited",
    product: "Ordermatic",
    location:
      "8-3-833/251, 2nd Floor, Phase IV, Kamalapuri Colony, Srinagar Colony, Hyderabad, Telangana, India",
  },
  aboutCompany: `At Order Matic Technologies, we’re on a mission to revolutionize the Food & Beverage
industry with innovative technology that drives success. Our flagship product, Order Matic,
empowers F&B business owners to enhance customer satisfaction, maximize revenue, and
reduce operational costs through real-time hospitality excellence. We pride ourselves on
fostering a fun, energetic, and supportive office culture where creativity and dedication thrive.`,
  sections: [
    {
      heading: "Position",
      content: ["Customer Experience Engineer – CX (B2B Sales)"],
    },
    {
      heading: "Roles & Responsibilities",
      bullets: [
        "Achieve monthly, quarterly, and annual B2B sales targets.",
        "Establish and maintain strong relationships with business customers.",
        "Prepare compelling quotations, proformas, invoices and presentations.",
        "Consistently follow up for payments and address customer concerns.",
        "Generate leads and identify sales opportunities in the field.",
        "Conduct live product demonstrations and on-site presentations.",
        "Negotiate and close impactful sales deals.",
        "Accurately maintain sales activity records and lead reports.",
        `Be available for 6-day work weeks and actively travel across the city for:
      • Lead Generation
      • Product Demonstrations
      • Customer Meetings
      • Sales Closures`,
      ],
    },
    {
      heading: "Preferred Candidate Profile",
      bullets: [
        "Proficiency in English, Hindi, and local language (preferred).",
        "Should be a graduate (Full-time role) or pursuing BBA/MBA (Internship).",
        "Must own a two-wheeler and a valid license",
        "Comfortable working in field sales (not an inside/tele-sales role).",
        "Self-motivated, disciplined, and open to individual contributions.",
        "Knowledge of the local geography and active merchant network is a plus.",
      ],
    },
    {
      heading: "Perks & Benefits",
      bullets: [
        "Fixed Salary + Performance-Based Incentives",
        "Annual bonus for exceeding targets",
        "Opportunities to grow with a fast-scaling startup",
        "Fun and collaborative office culture",
        "Direct mentorship from experienced founders and business leaders",
      ],
    },
   {
  heading: "",
  content: [
    "💼 Compensation Range: ₹3 LPA – ₹6 LPA",
    "🎯 Incentives: Based on Performance"
  ]
},
{heading:"",
  content:[],

},
    {
      heading: "Our Work Culture",
      content: [
        "At Order Matic, we believe that productivity comes from passion and purpose. Whether it's collaborating on new ideas or celebrating wins together, we foster a fun, people-first culture. We’re not just building tech – we’re building a team that cares deeply about the success of our clients and each other.",
      ],
       noDivider: true,
    },
    {
      heading: "Note",
      content: [
        "This is a field sales role and is not suitable for tele-sales or inside-sales candidates. We’re seeking on-ground hustlers with deep market understanding.",
      ],
      noDivider: true,
    },
  ],
};

export default function JobDescription() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <section className="w-full max-w-4xl space-y-10 text-gray-800 text-left py-10">
        {/* Company Info */}
        <div className="space-y-1 text-sm sm:text-base">
          <p>
            <strong>Company Name:</strong> {jobData.company.name}
          </p>
          <p>
            <strong>Product:</strong> {jobData.company.product}
          </p>
          <p>
            <strong>Location:</strong> {jobData.company.location}
          </p>
        </div>
        <hr className="border-t-2 border-black my-2" />
        {/* About the Company */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-5">
            About the Company
          </h2>
          
          <p className="text-sm sm:text-base leading-relaxed">
            {jobData.aboutCompany}
          </p>
        </div>

        {/* Job Title */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold bg-black text-white px-6 py-3 rounded  text-center">
            {jobData.title}
          </h1>
        </div>

        {/* Dynamic Sections */}
        {jobData.sections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              {section.heading}
            </h2>
            {!section.noDivider && (
              <hr className="border-t-2 border-black w-full" />
            )}
            {section.bullets ? (
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                {section.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <div className="space-y-2 text-sm sm:text-base">
                {section.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="space-y-2 text-sm mt-2 sm:text-base">
          <p className="flex items-center gap-1.5">
            <span className="font-semibold">Send your resumes to</span>
            <Mail className="w-4 h-4 text-black" />
            <a href="mailto:careers@ordermatic.in" className=" hover:underline">
              careers@ordermatic.in
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
