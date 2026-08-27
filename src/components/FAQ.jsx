import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Where do you ship from, and how long does shipping take?",
    a: "RELIEVIA products ship through Amazon's fulfillment network, so delivery times follow the standard Amazon shipping estimate shown at checkout.",
  },
  {
    q: "What's your return policy?",
    a: "All RELIEVIA products are covered by Amazon's standard return policy. Have a question about a specific order? Reach out and we'll help directly.",
  },
  {
    q: "Is RELIEVIA a real US company?",
    a: "Yes. RELIEVIA LLC is a US-registered company operating as an online retailer, with US-based customer support.",
  },
  {
    q: "How do you choose which products to sell?",
    a: "We don't list everything — we curate. Every product is chosen for durability, usefulness, and value before it makes it into our catalog.",
  },
  {
    q: "How can I contact you?",
    a: "Email us at support@relieviapro.com. We typically respond within 1–2 business days.",
  },
  {
    q: "Do you sell directly, or only through Amazon?",
    a: "Replace this with your real answer — do people buy on this site, or does it point to your Amazon storefront?",
  },
];

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#D8CFC0] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent border-none cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="font-['Fraunces'] text-[1.05rem] font-medium text-[#2B2622] group-hover:text-[#B5522E] transition-colors">
          {item.q}
        </span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#B5522E] flex items-center justify-center text-[#B5522E] group-hover:bg-[#B5522E] group-hover:text-white transition-colors">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[240px]" : "max-h-0"
        }`}
      >
        <p className="font-['Inter'] text-[0.95rem] leading-relaxed text-[#2B2622] opacity-80 pb-6 pr-8">
          {item.a}
        </p>
      </div>
    </div>
  );
};

const RelieviaFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-['Fraunces'] text-3xl md:text-4xl font-medium text-center text-[#2B2622] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="font-['Inter'] text-center text-[#2B2622] opacity-70 text-[0.95rem] mb-10">
          Everything you need to know before you shop.
        </p>

        <div>
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelieviaFAQ;