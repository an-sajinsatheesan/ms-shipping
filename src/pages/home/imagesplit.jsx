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

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Pharma + Food */}
                    <div className="lg:w-1/2 flex flex-col gap-8">

                        {/* Row 1 - Pharma */}
                        <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
                            <div className="w-full md:w-1/2 bg-gray-100 px-4 py-5 flex flex-col justify-center rounded-xl min-h-[200px] h-full">
                                <h3 className="text-2xl font-bold text-red-600 mb-4">Pharma (Cool Chain)</h3>
                                <p className="text-gray-600">
                                    Specialized shipping for temperature-sensitive pharmaceuticals to ensure product integrity throughout the logistics chain.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 bg-gray-50 rounded-xl overflow-hidden min-h-[200px] h-full flex">
                                <Image
                                    src="/static/assets/ms/tablet.jpg"
                                    alt="Pharma Shipping"
                                    className="w-full h-full object-cover"
                                    width={400}
                                    height={300}
                                />
                            </div>
                        </div>

                        {/* Row 2 - Food */}
                        <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
                            <div className="w-full md:w-1/2 bg-gray-50 rounded-xl overflow-hidden min-h-[200px] h-full flex">
                                <Image
                                    src="/static/assets/ms/food.jpg"
                                    alt="Food Shipping"
                                    className="w-full h-full object-cover"
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <div className="w-full md:w-1/2 bg-red-600 px-4 py-5 flex flex-col justify-center rounded-xl min-h-[200px] h-full">
                                <h3 className="text-2xl font-bold text-white mb-4">Food & Beverage</h3>
                                <p className="text-white">
                                    Safe, compliant transportation with temperature control for food and beverages, meeting all industry regulations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Cosmetics (Text only on mobile) */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0">

                        {/* Desktop View: Image + Floating Card */}
                        <div className="hidden lg:block h-full w-full overflow-hidden rounded-lg relative">
                            <Image
                                src="https://i.pinimg.com/736x/fd/24/e4/fd24e40e013301751ef5f567b3063c56.jpg"
                                alt="Cosmetics Logistics"
                                className="w-full h-full object-cover"
                                width={600}
                                height={400}
                            />
                            <div className="w-full md:w-2/4 bg-white px-3 py-5 flex flex-col justify-center rounded-xl absolute left-4 top-4 shadow-lg">
                                <h3 className="text-2xl font-bold text-red-600 mb-4">Cosmetics</h3>
                                <p className="text-gray-600">
                                    Secure and timely delivery of beauty and personal care products under optimal conditions.
                                </p>
                            </div>
                        </div>

                        {/* Mobile View: Full Card Matching Other Rows */}
                        <div className="lg:hidden bg-white px-4 py-5 flex flex-col justify-center rounded-xl min-h-[200px] h-full shadow-md">
                            <h3 className="text-2xl font-bold text-red-600 mb-4">Cosmetics</h3>
                            <p className="text-gray-600">
                                Secure and timely delivery of beauty and personal care products under optimal conditions.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ImageTextSplit;


