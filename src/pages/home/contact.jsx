import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'email') {
            if (value && !validateEmail(value)) {
                setEmailError('Please enter a valid email address');
            } else {
                setEmailError('');
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate email before submission
        if (!validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('https://sheetdb.io/api/v1/ldwx9dw6nc0a5', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: [{
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                        timestamp: new Date().toISOString(),
                    }]
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError('There was an error submitting your message. Please try again.');
            console.error('Submission error:', err);
        } finally {
            setIsLoading(false);
        }
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
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                                {error}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name <span className="text-red-600">*</span>
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
                                    Email <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600`}
                                />
                                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                    placeholder="+971 55 123 4567"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Message <span className="text-red-600">*</span>
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
                                    disabled={isLoading || emailError}
                                    className={`bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full ${isLoading || emailError ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-6 text-black">Get in Touch with Us</h3>
                        <p className="text-gray-600 mb-8">
                            Stay connected with us and get the latest shipping updates and logistics insights.
                        </p>

                        <div className="space-y-6 md:space-y-14">
                            <div className="flex items-start">
                                <div className="bg-red-100 p-2 rounded-full mr-4">
                                    📍
                                </div>
                                <div>
                                    <h4 className="font-bold text-black mb-1">Office Location</h4>
                                    <p className="text-gray-600">
                                        Dubai - United Arab Emirates
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-100 p-2 rounded-full mr-4">📧</div>
                                <div>
                                    <h4 className="font-bold text-black mb-1">Email Us</h4>
                                    <p className="text-gray-600">shiva@modernstarshipping.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-100 p-2 rounded-full mr-4">📞</div>
                                <div>
                                    <h4 className="font-bold text-black mb-1">Call Us</h4>
                                    <p className="text-gray-600">+971 55 34464 01</p>
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