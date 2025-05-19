import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e: any, href: any) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-2'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/static/assets/ms/ms-logo.png"
                            alt="Modern Star Shipping"
                            width={400}
                            height={300}
                            className="w-16 h-auto object-cover"
                        />
                        <span className="ml-3 text-base font-semibold text-black uppercase">Modern Star Shipping LLC</span>
                    </Link>

                    {/* Center Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="text-black hover:text-red-600 font-medium transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Contact Info */}
                    <div className="hidden md:flex items-center space-x-6 text-sm text-right">
                        <a href="mailto:shiva@modernstarshipping.com" className="text-black hover:text-red-600 font-medium">
                            shiva@modernstarshipping.com
                        </a>
                        <a href="tel:+971553446401" className="text-black hover:text-red-600 font-medium">
                            +971 55 34464 01
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg
                            className="w-6 h-6 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white rounded-lg shadow-md py-4 px-4">
                        <nav className="flex flex-col space-y-4 mb-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-black hover:text-red-600 font-medium transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                        <div className="text-sm text-black space-y-1">
                            <a href="mailto:shiva@modernstarshipping.com" className="block hover:text-red-600">shiva@modernstarshipping.com</a>
                            <a href="tel:+971553446401" className="block hover:text-red-600">+971 55 34464 01</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
