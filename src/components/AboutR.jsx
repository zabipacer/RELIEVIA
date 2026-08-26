import React from 'react';

const AboutRelievia = () => {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-medium text-center text-[#2B2622] mb-8 md:mb-10">
          About RELIEVIA
        </h2>

        {/* Body Copy */}
        <div className="space-y-6 text-base md:text-[16px] text-[#2B2622] leading-relaxed font-['Inter']">
          <p>
            RELIEVIA was built on a simple idea: shopping for everyday essentials
            shouldn't mean sorting through thousands of nearly-identical listings to
            find one good product. We curate across nine categories — from office
            supplies to pet essentials — selecting items we'd be comfortable
            recommending to our own families.
          </p>
          <p>
            Every product on RELIEVIA is chosen with the same standard in mind:
            does it hold up, is it worth the price, and would we buy it again.
            That's the filter everything goes through before it reaches our shelves.
          </p>
          <p>
            RELIEVIA LLC is a US-based company, and we plan to keep growing our
            catalog thoughtfully — one well-chosen category at a time.
          </p>
        </div>

        {/* Optional decorative divider or subtle accent - not required, but can be added */}
        <div className="mt-12 w-16 h-0.5 bg-[#D8CFC0] mx-auto" />
      </div>
    </section>
  );
};

export default AboutRelievia;