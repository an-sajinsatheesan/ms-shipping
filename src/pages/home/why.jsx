const WhyUs = () => {
    const features = [
        {
            title: 'Global Reach',
            description:
                'Our extensive network ensures smooth operations across major trade routes worldwide.',
        },
        {
            title: 'Reliable Services',
            description:
                'With a track record of on-time deliveries, we are committed to consistency and reliability.',
        },
        {
            title: 'Customized Solutions',
            description:
                'We offer tailored shipping plans that align with your business goals and budget.',
        },
        {
            title: 'Advanced Technology',
            description:
                'Track your shipments in real time with our state-of-the-art logistics platform.',
        },
    ];

    return (
        <section id="why-us" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Why Choose Us</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover what makes Modern Star Shipping the trusted partner for logistics excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start mb-8">
                            <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                                <svg
                                    className="w-6 h-6 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
