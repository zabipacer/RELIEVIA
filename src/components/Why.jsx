import React from 'react';

const WhyRelievia = () => {
  const values = [
    {
      id: 1,
      title: 'Curated Quality',
      description:
        'We don\'t list everything. We list what works. Every product is chosen for durability, usefulness, and value.',
      icon: (
        <svg
          className="w-8 h-8 text-[#B5522E]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Reliable Fulfillment',
      description:
        'Fast, trackable shipping and dependable service, order after order.',
      icon: (
        <svg
          className="w-8 h-8 text-[#B5522E]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'US-Based Entity',
      description:
        'RELIEVIA LLC operates and is registered in the United States, with US-based customer support.',
      icon: (
        <svg
          className="w-8 h-8 text-[#B5522E]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-medium text-center text-[#2B2622] mb-12 md:mb-16">
          Why RELIEVIA
        </h2>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-lg border border-[#D8CFC0] p-6 md:p-8 hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4">{value.icon}</div>

              {/* Title */}
              <h3 className="font-['Inter'] text-xl font-medium text-[#2B2622]">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-[#2B2622] opacity-80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRelievia;