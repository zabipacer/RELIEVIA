import React from 'react';
import {
  Paperclip,
  Utensils,
  Heart,
  PawPrint,
  Puzzle,
  Bike,
  Plug,
  Package,
  ShoppingBag,
} from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Office & Stationery',
    description: 'Tools that keep your workday organized.',
    icon: Paperclip,
  },
  {
    id: 2,
    name: 'Home & Kitchen',
    description: 'Everyday upgrades for the spaces you live in.',
    icon: Utensils,
  },
  {
    id: 3,
    name: 'Health & Household',
    description: 'Practical essentials for daily wellbeing.',
    icon: Heart,
  },
  {
    id: 4,
    name: 'Pet Supplies',
    description: 'Thoughtful picks for the pets in your life.',
    icon: PawPrint,
  },
  {
    id: 5,
    name: 'Toys & Games',
    description: 'Fun, durable, and built to last.',
    icon: Puzzle,
  },
  {
    id: 6,
    name: 'Sports & Outdoors',
    description: 'Gear for staying active, indoors or out.',
    icon: Bike,
  },
  {
    id: 7,
    name: 'Electronics Accessories',
    description: 'Small tech that makes a big difference.',
    icon: Plug,
  },
  {
    id: 8,
    name: 'Storage & Organization',
    description: 'Solutions for a tidier home.',
    icon: Package,
  },
  {
    id: 9,
    name: 'Everyday Accessories',
    description: 'The small things you reach for daily.',
    icon: ShoppingBag,
  },
];

const ShopByCategory = () => {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-medium text-[#2B2622]">
            Shop by Category
          </h2>
          <p className="mt-2 text-base md:text-lg text-[#2B2622] opacity-80 font-['Inter']">
            Nine categories. One standard of quality.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-lg border border-[#D8CFC0] p-6 hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                {/* Icon */}
                <div className="text-[#B5522E] mb-3">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>

                {/* Name */}
                <h3 className="font-['Inter'] text-lg font-medium text-[#2B2622]">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-[#2B2622] opacity-80 flex-1">
                  {category.description}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#B5522E] hover:text-[#9e4626] transition-colors group"
                >
                  Browse
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;