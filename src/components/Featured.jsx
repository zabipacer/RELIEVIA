import React from 'react';

const products = [
  {
    id: 1,
    name: 'Stackable Storage Bins',
    description: 'Stackable storage bins built for small spaces.',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Ceramic Pour-Over Set',
    description: 'Slow-brew coffee maker with a sleek, minimalist design.',
    price: '$34.50',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Ergonomic Desk Mat',
    description: 'Protect your desk while keeping your workspace comfortable.',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Portable Pet Water Bottle',
    description: 'Leak‑proof bottle with an integrated bowl for walks.',
    price: '$12.95',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&auto=format&fit=crop&q=80',
  },
];

const FeaturedSelection = () => {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-medium text-[#2B2622]">
            Featured Selection
          </h2>
          <p className="mt-2 text-base md:text-lg text-[#2B2622] opacity-80 font-['Inter']">
            A few of the products our customers keep coming back for.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-[#D8CFC0] overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-[#FAF7F2]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-['Inter'] text-lg font-medium text-[#2B2622]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-[#2B2622] opacity-80 flex-1">
                  {product.description}
                </p>
                {product.price && (
                  <p className="mt-2 text-sm font-medium text-[#B5522E]">
                    {product.price}
                  </p>
                )}
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-[#B5522E] hover:text-[#9e4626] transition-colors group"
                >
                  View Product →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 text-sm font-medium text-white bg-[#B5522E] rounded hover:bg-[#9e4626] transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSelection;