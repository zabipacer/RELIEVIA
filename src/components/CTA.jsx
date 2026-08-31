import React from 'react';

const CtaContact = () => {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-medium text-[#2B2622] mb-4">
          Looking for something specific?
        </h2>

        {/* Body Copy */}
        <p className="text-base md:text-[16px] text-[#2B2622] leading-relaxed font-['Inter'] max-w-2xl mx-auto mb-10">
          If you can't find what you need, or have a question about an order,
          we're glad to help.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Sales Enquiries */}
          <div className="bg-white rounded-lg p-6 border border-[#E8E0D8]">
            <h3 className="font-['Fraunces'] text-xl font-medium text-[#2B2622] mb-2">
              Sales Enquiries
            </h3>

            <p className="text-sm text-[#2B2622] opacity-80 font-['Inter'] mb-4">
              Questions about products, orders, or purchasing? Get in touch
              with us directly.
            </p>

            <a
              href="mailto:ali@relieviapro.com"
              className="text-sm font-medium text-[#B5522E] hover:underline font-['Inter']"
            >
              ali@relieviapro.com
            </a>
          </div>

          {/* Support */}
          <div className="bg-white rounded-lg p-6 border border-[#E8E0D8]">
            <h3 className="font-['Fraunces'] text-xl font-medium text-[#2B2622] mb-2">
              Support
            </h3>

            <p className="text-sm text-[#2B2622] opacity-80 font-['Inter'] mb-4">
              Need help with an order or have a product-related question?
              We're here to help.
            </p>

            <a
              href="mailto:support@relieviapro.com"
              className="text-sm font-medium text-[#B5522E] hover:underline font-['Inter']"
            >
              support@relieviapro.com
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-8 text-sm text-[#2B2622] opacity-80 font-['Inter']">
          <p>Response time: Within 1–2 business days</p>
        </div>
      </div>
    </section>
  );
};

export default CtaContact;