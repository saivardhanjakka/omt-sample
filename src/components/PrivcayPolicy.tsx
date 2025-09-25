"use client";

import React from "react";

const policyData = [
  {
    title: "1. TYPE OF DATA WE COLLECT",
    description:
      "Ordermatic collects personal information for its product, Ordermatic which includes, but is not limited to your name, phone number, and personal food preferences. Our aim in collecting this data is to provide a customized and efficient service for our users.",
  },
  {
    title: "2. USE OF YOUR INFORMATION",
    description:
      "Your personal information is used to facilitate order delivery, create invoices, and customize menus based on personal food preferences. We are committed to using your data responsibly and solely for the purposes of improving and providing our services.",
  },
  {
    title: "3. SHARING OF YOUR INFORMATION",
    description:
      "We may share your personal information with third-party delivery services but only when necessary for the completion of our services. Such relationships are built on strict adherence to confidentiality and we ensure that your data is secure and protected.",
  },
  {
    title: "4. PROTECTION OF YOUR INFORMATION",
    description:
      "We take the security of your information seriously. Your data is encrypted and can only be accessed via the Ordermatic web application and mobile applications. Strict access control measures are in place to prevent any unauthorized access.",
  },
  {
    title: "5. USER CONTROL OVER INFORMATION",
    description:
      "At Ordermatic, we respect your control over your data. You may update your data at any time and new data will be used for all future orders. To delete your account, please send an email to   partners@ordermatic.in with proof of ownership of the associated email or phone number. Unless there are business or legal constraints, your data will be deleted within 72 hours. Invoices are held intact due to business necessities. Final decisions on such matters, if any legal constraints exist, are taken by the CEO and CTO of the Company.",
  },
   {
    title: "6. CONCERNS AND QUESTIONS",
    description:
     `
      Should you have any concerns or queries about your data, you may contact partners@ordermatic.in  
      We take data privacy seriously and handle these concerns with utmost promptness, usually within 24 to 72 hours. 
      Our CEO and CTO personally oversee these issues to ensure they are appropriately addressed.<br/>
      We value your trust in us and commit to maintaining the highest standards of data privacy. 
      Remember that by continuing to use our services, you agree to our collection and use of your information in line with this policy.<br/>
      If you have any further questions or concerns about this Privacy Policy, please contact us at partners@ordermatic.in<br/>
      Thank you for choosing Ordermatic, a product of Order Matic Technologies Private Limited.
    `,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="px-4 md:px-20 py-10 max-w-5xl mx-auto mb-14">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-base mb-6">Effective Date: January 2, 2024</p>

      <p className="mb-6">
        Ordermatic is a product of Order Matic Technologies Private Limited, a
        CIE IIIT Hyderabad incubated startup recognized by Government of India
        under the Startup India program.
      </p>

      <div className="space-y-6 text-justify text-base leading-relaxed">
        {policyData.map((item, index) => (
          <div key={index}>
            <h2 className="font-semibold">{item.title}</h2>
         <p
      dangerouslySetInnerHTML={{
        __html: item.description.trim().replace(/\n/g, "<br />"),
      }}
    />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
