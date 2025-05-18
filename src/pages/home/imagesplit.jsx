import Image from 'next/image';

const ImageTextSplit = () => {
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

                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 h-full flex gap-4 flex-col pr-0 lg:pr-8">
                        <div className="flex-1 flex flex-col gap-4 md:flex-row">
                            <div className="w-full md:w-1/2 bg-gray-100 px-3 py-2 flex flex-col justify-center rounded-xl">
                                <h3 className="text-4xl font-bold text-red-600 mb-4">Pharma (Cool Chain)</h3>
                                <p className="text-gray-600">
                                    Specialized shipping for temperature-sensitive pharmaceuticals to ensure product integrity throughout the logistics chain.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center rounded-xl overflow-hidden">
                                <Image
                                    src="https://templates.sparklethings.com/kargix/wp-content/uploads/sites/51/2025/05/image-EEPZJ9X.jpg"
                                    alt="Pharma Shipping"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-4 md:flex-row">
                            <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center rounded-xl overflow-hidden">
                                <Image
                                    src="https://templates.sparklethings.com/kargix/wp-content/uploads/sites/51/2025/05/image-XFFR336.jpg"
                                    alt="Food & Beverage"
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 bg-red-600 px-3 py-2 flex flex-col justify-center rounded-xl">
                                <h3 className="text-4xl font-bold text-white mb-4">Food & Beverage</h3>
                                <p className="text-white">
                                    Safe, compliant transportation with temperature control for food and beverages, meeting all industry regulations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-full mt-8 lg:mt-0">
                        <div className="h-full w-full overflow-hidden rounded-lg relative">
                            <Image
                                src="https://templates.sparklethings.com/kargix/wp-content/uploads/sites/51/2025/05/image-7Z2TRCC-2.jpg"
                                alt="Cosmetics Logistics"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                            <div className="w-full md:w-2/4 bg-white px-3 py-5 flex flex-col justify-center rounded-xl absolute left-4 top-4 shadow-lg">
                                <h3 className="text-4xl font-bold text-red-600 mb-4">Cosmetics</h3>
                                <p className="text-gray-600">
                                    Secure and timely delivery of beauty and personal care products under optimal conditions.
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