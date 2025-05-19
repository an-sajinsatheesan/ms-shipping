import { useEffect, useState } from "react";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageTextSplit = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What We Do Most</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From pharma to food, we handle sensitive and specialized shipments with precision and care.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column */}
                    <div className="lg:w-1/2 flex flex-col gap-8">
                        {/* Pharma */}
                        <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
                            <div
                                className="w-full md:w-1/2 bg-gray-100 px-4 py-5 flex flex-col justify-center rounded-xl min-h-[200px] h-full"
                                data-aos="fade-right"
                                data-aos-delay="100"
                            >
                                <h3 className="text-2xl font-bold text-red-600 mb-4">Pharma (Cool Chain)</h3>
                                <p className="text-gray-600">
                                    Specialized shipping for temperature-sensitive pharmaceuticals to ensure product integrity throughout the logistics chain.
                                </p>
                            </div>
                            <div
                                className="w-full md:w-1/2 bg-gray-50 rounded-xl overflow-hidden min-h-[200px] h-full flex"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <Image
                                    src="/static/assets/ms/tablet.jpg"
                                    alt="Pharma Shipping"
                                    className="w-full h-full object-cover"
                                    width={400}
                                    height={300}
                                />
                            </div>
                        </div>

                        {/* Food */}
                        <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
                            <div
                                className="w-full md:w-1/2 bg-gray-50 rounded-xl overflow-hidden min-h-[200px] h-full flex"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <Image
                                    src="/static/assets/ms/food-bev.jpg"
                                    alt="Food Shipping"
                                    className="w-full h-full object-cover"
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <div
                                className="w-full md:w-1/2 bg-red-600 px-4 py-5 flex flex-col justify-center rounded-xl min-h-[200px] h-full"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">Food & Beverage</h3>
                                <p className="text-white">
                                    Safe, compliant transportation with temperature control for food and beverages, meeting all industry regulations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/2 flex flex-col gap-8">
                        {/* Cosmetics */}
                        <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
                            <div
                                className="w-full md:w-1/2 bg-gray-100 px-4 py-5 flex flex-col justify-center rounded-xl min-h-[200px] h-full"
                                data-aos="fade-down"
                                data-aos-delay="250"
                            >
                                <h3 className="text-2xl font-bold text-red-600 mb-4">Cosmetics</h3>
                                <p className="text-gray-600">
                                    Safe and elegant transport for cosmetic and personal care products, ensuring pristine condition and timely delivery.
                                </p>
                            </div>
                            <div
                                className="w-full md:w-1/2 bg-gray-50 rounded-xl overflow-hidden min-h-[200px] h-full flex"
                                data-aos="flip-left"
                                data-aos-delay="350"
                            >
                                <Image
                                    src="/static/assets/ms/cosmetic.png" // You may want to update this image path
                                    alt="Cosmetics Shipping"
                                    className="w-full h-full object-cover"
                                    width={400}
                                    height={300}
                                />
                            </div>
                        </div>

                        {/* Medical Equipment / General / Vape */}
                        <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
                            <div
                                className="w-full md:w-1/2 bg-gray-50 rounded-xl overflow-hidden min-h-[200px] h-full flex"
                                data-aos="fade-up-right"
                                data-aos-delay="400"
                            >
                                <Image
                                    src="/static/assets/ms/general-trading.jpg"
                                    alt="Medical Equipment and General Trading"
                                    className="w-full h-full object-cover"
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <div
                                className="w-full md:w-1/2 bg-red-600 px-4 py-5 flex flex-col justify-center rounded-xl min-h-[200px] h-full"
                                data-aos="zoom-in-up"
                                data-aos-delay="200"
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">Medical / General / Vape</h3>
                                <p className="text-white">
                                    Reliable logistics for medical devices, general goods, and vape products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageTextSplit;
