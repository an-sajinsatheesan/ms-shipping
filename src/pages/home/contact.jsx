import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Contact Us</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions or need a quote? Reach out to our team anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-6 text-black">Send us a message</h3>
                        {submitted ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                                Thank you for your message! We&apos;ll get back to you soon.
                            </div>
                        ) : null}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-6 text-black">Get in Touch with Us</h3>
                        <p className="text-gray-600 mb-8">
                            Stay connected with us and get the latest shipping updates and logistics insights. Follow us on social media or contact our support team for more information.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-red-100 p-2 rounded-full mr-4">
                                    📍
                                </div>
                                <div>
                                    <h4 className="font-bold text-black mb-1">Office Location</h4>
                                    <p className="text-gray-600">
                                        2307 Beverley Rd, Brooklyn, NY 11226, United States
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-100 p-2 rounded-full mr-4">📧</div>
                                <div>
                                    <h4 className="font-bold text-black mb-1">Email Us</h4>
                                    <p className="text-gray-600">info@modernstarshipping.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-100 p-2 rounded-full mr-4">📞</div>
                                <div>
                                    <h4 className="font-bold text-black mb-1">Call Us</h4>
                                    <p className="text-gray-600">+1 212 425 8617</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h4 className="font-bold text-black mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-gray-100 hover:bg-red-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">📘</a>
                                    <a href="#" className="bg-gray-100 hover:bg-red-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">🐦</a>
                                    <a href="#" className="bg-gray-100 hover:bg-red-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">🔗</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;