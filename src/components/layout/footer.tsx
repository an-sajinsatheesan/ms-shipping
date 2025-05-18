import Image from 'next/image';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Why Us', href: '#why-us' },
        /* { name: 'Testimonials', href: '#testimonials' }, */
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: '📘', href: '#' },
        { name: 'Twitter', icon: '🐦', href: '#' },
        { name: 'LinkedIn', icon: '🔗', href: '#' },
        { name: 'Instagram', icon: '📷', href: '#' },
    ];

    const handleNavClick = (e: any, href: any) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold text-red-600 mb-4">
                            <Image
                                src="/static/assets/ms/ms-logo.png"
                                alt="Pharma Shipping"
                                width={400}
                                height={300}
                                className="w-12 h-auto object-cover"
                            />
                        </h3>
                        <p className="text-gray-400">
                            Seamless, reliable, and efficient shipping solutions tailored to your business needs.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                        <address className="text-gray-400 not-italic">
                            <p className="mb-2">MODERN STAR SHIPPING L.L.C.</p>
                            <p className="mb-2">DUBAI, UAE.</p>
                            <p className="mb-2">Phone: +971 55 34464 01</p>
                            <p>Email: shiva@modernstarshipping.com</p>
                        </address>
                    </div>

                    <div>
                        {/*  <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-gray-400 hover:text-white transition-colors text-2xl"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div> */}
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Modern Star Shipping. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
