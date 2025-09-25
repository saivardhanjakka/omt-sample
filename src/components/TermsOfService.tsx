"use client";

import React from "react";

const termsData = [
  {
    title: "1. Introduction",
    description:
      "Welcome to Ordermatic! We are committed to providing quality services. These Terms of Service (ToS) govern your access to and use of our services.",
  },
  {
    title: "2. Acceptance of Terms",
    description:
      "By accessing and/or using our service, you agree to abide by and be legally bound by these ToS.",
  },
  {
    title: "3. Service Description",
    description:
      "Ordermatic operates as an intermediary platform facilitating the provision of nutritional goods to customers.",
  },
  {
    title: "4. Ordering and Cancelling Orders",
    description:
      "As a user of the service, you have the option to cancel your orders until they are accepted by the Food Business Operator (FBO). Even after orders are accepted, there may be certain cases where orders can be cancelled. However, the final decision rests with the respective FBO.",
  },
  {
    title: "5. Refunds",
    description:
      "Refunds for cancelled orders, if approved, are initiated on the same day of cancellation. However, it may take about 3 to 7 business days for the refunds to be reflected in the user's account. This timeframe is dependent on the user's method of payment.",
  },
  {
    title: "6. Customer Service",
    description:
      "Users can always access real-time updates of their orders through the service. However, the FBO can provide further information relating to the order status. Users may contact the FBO directly for such inquiries.",
  },
  {
    title: "7. User Obligations",
    description:
      "Users must provide accurate information when placing orders and agree to abide by these terms and all applicable laws and regulations.",
  },
  {
    title: "8. Limitation of Liability",
    description:
      "Under no circumstances will Ordermatic be liable for indirect, incidental damages, or loss of income that result from the use of, or the inability to use, the service.",
  },
  {
    title: "9. Violation of Terms",
    description:
      "If a user violates any of these terms, Ordermatic has the right to suspend or permanently ban the user from the service.",
  },
  {
    title: "10. Changes to Terms",
    description:
      "We reserve the right to modify these terms at any time without prior notice. We recommend that you review this document periodically.",
  },
];

const TermsOfService = () => {
  return (
    <div className="px-4 md:px-20 py-10 max-w-5xl mx-auto mb-14 ">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <div className="space-y-6 text-justify text-base leading-relaxed">
        {termsData.map((term, index) => (
          <div key={index}>
            <h2 className="font-semibold">{term.title}</h2>
            <p>{term.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
