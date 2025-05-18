import Image from 'next/image';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative pt-32 pb-8 md:pt-40 md:pb-16"
        >
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                    backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Transport')",
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Delivering Excellence in Shipping Solutions – Worldwide
                        </h1>
                        <p className="text-xl mb-8">
                            Seamless, reliable, and efficient shipping services tailored for your business.
                            Trust us to handle your logistics needs with precision and care.
                            From pharmaceuticals to fashion, food, and industrial equipment — we deliver across all sectors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
                            >
                                Get a Free Quote
                            </a>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/static/assets/ms/banner1.png"
                            alt="Logistics"
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg"
                        />
                        {/* shadow-lg */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;