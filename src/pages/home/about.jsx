import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">About Our Company</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Welcome to Modern Star Shipping, your trusted partner in global logistics.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2" data-aos="fade-right" data-aos-delay="100">
                        <Image
                            src="/static/assets/ms/vehicle.png"
                            alt="About our company"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="200">
                        <h3 className="text-2xl font-bold mb-4 text-black">Our Story</h3>
                        <p className="text-gray-600 mb-6">
                            Whether you&apos;re shipping locally or internationally, we provide comprehensive solutions designed to meet your unique business needs. From air freight and temperature-controlled warehousing to customs clearance and insurance – we ensure your cargo arrives on time, every time.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center" data-aos="fade-up" data-aos-delay="300">
                                <span className="bg-red-100 p-1 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-gray-600">Global Reach Across Major Trade Routes</span>
                            </li>
                            <li className="flex items-center" data-aos="fade-up" data-aos-delay="400">
                                <span className="bg-red-100 p-1 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-gray-600">Customized Shipping Solutions</span>
                            </li>
                            <li className="flex items-center" data-aos="fade-up" data-aos-delay="500">
                                <span className="bg-red-100 p-1 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-gray-600">Advanced Real-Time Tracking Technology</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
