/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white p-4 md:p-8 space-y-4 font-sans">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 mx-auto text-center">
        Terms and Conditions - Our Collective Understanding
      </h1>

      <div className="mb-4 md:flex md:items-center space-y-4 md:space-y-0">
        {/* Image Section */}
        <img src="/T&C-top-image.png" alt="Thennavan Stores" className="w-full md:w-1/2 h-auto my-4 md:mr-4" />
        <div className="md:w-1/2 space-y-4">
          <h1 className="font-bold text-xl md:text-2xl mx-auto text-center">
            Dear Beloved Customers and Collaborators,
          </h1>
          <p className="text-sm md:text-base text-center">
            As we embark on this shared journey at Thennavan Stores, we want to lay out a few understandings that are
            the heart of our relationship. These are not just rules; they are the fibers that weave the tapestry of our
            community.
          </p>
        </div>
      </div>

      <ol className="list-decimal list-inside mb-4 text-justify text-sm md:text-base space-y-2 font-serif">
        <li>
          <strong>Quality Assurance:</strong> When you choose Thennavan, you're choosing products steeped in the
          dedication of farmers and artisans. We're committed to delivering a quality that speaks volumes. If, by any
          chance, a product doesn't meet your satisfaction, please connect with us. We're here to make things right.
        </li>
        <li>
          <strong>Fair Pricing:</strong> Our promise is to provide fair prices that reflect the hard work of our
          community. We believe in honesty, and our pricing mirrors the true value of the effort and care invested in
          every product. Your purchase not only supports our community but ensures fair compensation for their labor.
        </li>
        <li>
          <strong>Collaboration and Community:</strong> "Sell with Us" is an open call for collaboration. By choosing to
          sell with Thennavan, you join a community that cherishes diversity, hard work, and shared success. Your
          presence enriches our platform, and we're here to stand by you, supporting the unique stories you bring.
        </li>
        <li>
          <strong>Privacy and Security:</strong> Your privacy is sacred to us. We employ stringent measures to ensure
          the confidentiality of your information. Your trust is our cornerstone, and we are dedicated to safeguarding
          your data.
        </li>
        <li>
          <strong>Customer Support:</strong> Our customer support team is your ally. We're here to assist, answer
          queries, and address concerns. Your experience matters, and we're committed to offering personalized support
          with a touch of genuine care.
        </li>
        <li>
          <strong>Continuous Improvement:</strong> Thennavan is a living, evolving community. We are constantly learning
          and growing to better serve you. Your feedback is our guiding light, and we welcome suggestions to enhance
          your journey with us.
        </li>

        <li>
          <strong>Acceptance of Terms:</strong> By accessing or using Thennavan Stores, you agree to be bound by these terms and conditions. If you do not agree, please inform us using our platform.
        </li>
        <li>
          <strong>Product Information:</strong> Thennavan Stores aims to provide accurate and detailed information about the products listed. However, we do not guarantee the accuracy, completeness, or reliability of product descriptions. If you have any questions, feel free to contact us.
        </li>
        <li>
          <strong>Sell With Us Agreement:</strong> Farmers and sellers participating in the "Sell With Us" program agree to adhere to the guidelines and policies outlined in the agreement. Thennavan Stores reserves the right to terminate any collaboration that violates these terms.
        </li>
        <li>
          <strong>Pricing and Payment:</strong> All prices are in Indian Rupees (INR) unless stated otherwise. Thennavan Stores reserves the right to modify prices without prior notice. Payments are accepted through secure payment gateways. Currently, we do not offer Cash on Delivery (COD) as a payment option.
        </li>
        <li>
          <strong>Order Confirmation:</strong> Upon placing an order, you will receive a WhatsApp confirmation with details of your purchase. This confirmation does not signify our acceptance of your order, but rather an acknowledgment of its receipt.
        </li>
        <li>
          <strong>Shipping and Delivery:</strong> Thennavan Stores aims to process and dispatch orders promptly. However, we do not guarantee specific delivery dates. Delivery times may vary based on location and external factors beyond our control.
        </li>
        <li>
          <strong>Returns and Refunds:</strong> At present, Thennavan Stores does not have a return policy. We encourage customers to carefully review product details before making a purchase. In case of any concerns or issues, please reach out to our customer support.
        </li>
        <li>
          <strong>User Conduct:</strong> Users are expected to conduct themselves responsibly and ethically while using Thennavan Stores. Any misuse, abuse, or violation of our community guidelines may result in account suspension.
        </li>
        <li>
          <strong>Intellectual Property:</strong> All content on Thennavan Stores, including images, text, and logos, is the intellectual property of Thennavan. Unauthorized use or reproduction of this content is strictly prohibited.
        </li>
        <li>
          <strong>Modification of Terms:</strong> Thennavan Stores reserves the right to update or modify these terms and conditions at any time. Users are encouraged to review this page periodically for changes.
        </li>
        <li>
          <strong>Contact Information:</strong> For any queries or concerns regarding these terms and conditions, please contact us at thennavanstores@gmail.com.
        </li>
      </ol>

      <p className="text-sm md:text-base text-justify">
        Now, a gentle reminder - at this juncture, we currently do not have a return policy, and cash on delivery is
        not an available option. We appreciate your understanding as we work towards creating the best experience for
        you, despite these limitations.
      </p>

      <p className="text-sm md:text-base text-justify">
        By choosing Thennavan, you are not just making a transaction; you are becoming part of a collective story. Our
        terms and conditions embody our commitment to building a community rooted in integrity, fairness, and compassion.
      </p>

      <p className="text-sm md:text-base text-justify">
        Thank you for being an integral part of the Thennavan family. Together, let's nurture a space where every
        interaction is grounded in empathy, understanding, and the shared warmth of a community that genuinely cares.
      </p>

      <p className="mt-4 text-sm md:text-base">
        Warm regards,
        <br />
        The Thennavan Stores Team
      </p>
    </div>
  );
};

export default TermsAndConditions;
