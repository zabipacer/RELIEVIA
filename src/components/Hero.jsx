import React from 'react';

const Hero = () => {
    return (
        <section className="bg-[#FAF7F2] py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-4">
                        {/* Eyebrow */}
                        <p className="text-sm font-medium uppercase tracking-wider text-[#B5522E]">
                            Everyday essentials
                        </p>

                        {/* Headline */}
                        <h1 className="font-['Fraunces'] text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight text-[#2B2622]">
                            Everyday essentials,<br />sourced with care.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base md:text-[16px] text-[#2B2622] leading-relaxed max-w-lg">
                            RELIEVIA curates practical, reliable products across the categories you shop most — from home to office to everyday accessories — so you don't have to dig through endless listings to find something good.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href="#shop"
                                className="inline-block px-6 py-3 text-sm font-medium text-white bg-[#B5522E] rounded hover:bg-[#9e4626] transition-colors"
                            >
                                Shop Now
                            </a>
                            <a
                                href="#categories"
                                className="inline-block px-6 py-3 text-sm font-medium text-[#2B2622] border border-[#D8CFC0] rounded hover:border-[#B5522E] hover:text-[#B5522E] transition-colors"
                            >
                                Explore Categories
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80"
                            alt="Everyday essentials flat lay with notebook, kitchen item, pet accessory, and storage box"
                            className="w-full h-auto rounded shadow-lg object-cover aspect-[4/3]"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;