import React from 'react';

const CtaContact = () => {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-medium text-[#2B2622] mb-4">
          Looking for something specific?
        </h2>

        {/* Body Copy */}
        <p className="text-base md:text-[16px] text-[#2B2622] leading-relaxed font-['Inter'] max-w-2xl mx-auto mb-8">
          If you can't find what you need, or have a question about an order, we're glad to help.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:ali@relieviaoro.com"
          className="inline-block px-8 py-3 text-sm font-medium text-white bg-[#B5522E] rounded hover:bg-[#9e4626] transition-colors"
        >
          Get in Touch
        </a>

        {/* Contact Details */}
        <div className="mt-6 space-y-1 text-sm text-[#2B2622] opacity-80 font-['Inter']">
          <p>
            Email:{' '}
            <a
              href="mailto:ali@relieviaoro.com"
              className="text-[#B5522E] hover:underline"
            >
              ali@relieviaoro.com
            </a>
          </p>
          <p>Response time: Within 1–2 business days</p>
        </div>
      </div>
    </section>
  );
};

export default CtaContact;