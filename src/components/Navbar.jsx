import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative z-50 bg-white border-b border-[#D8CFC0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="/"
                        className="font-['Fraunces'] text-2xl md:text-3xl font-semibold tracking-tight text-[#2B2622] hover:opacity-80 transition-opacity"
                    >
                        RELIEVIA
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#categories"
                            className="text-sm font-medium text-[#2B2622] hover:text-[#B5522E] transition-colors"
                        >
                            Categories
                        </a>
                        <a
                            href="#about"
                            className="text-sm font-medium text-[#2B2622] hover:text-[#B5522E] transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="text-sm font-medium text-[#2B2622] hover:text-[#B5522E] transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="#categories"
                            className="inline-block px-5 py-2.5 text-sm font-medium text-white bg-[#B5522E] rounded hover:bg-[#9e4626] transition-colors"
                        >
                            Explore Categories
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[#2B2622] hover:text-[#B5522E] transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white border-t border-[#D8CFC0] transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="px-4 py-4 space-y-4">
                    <a
                        href="#categories"
                        className="block text-sm font-medium text-[#2B2622] hover:text-[#B5522E] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Categories
                    </a>
                    <a
                        href="#about"
                        className="block text-sm font-medium text-[#2B2622] hover:text-[#B5522E] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="block text-sm font-medium text-[#2B2622] hover:text-[#B5522E] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </a>
                    <a
                        href="#categories"
                        className="inline-block w-full text-center px-5 py-2.5 text-sm font-medium text-white bg-[#B5522E] rounded hover:bg-[#9e4626] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Explore Categories
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;