const Services = () => {
    const services = [
        {
            title: 'Air Freight',
            description:
                'Fast and efficient air shipping solutions for urgent deliveries worldwide. We handle everything from documentation to customs clearance, ensuring your cargo arrives safely and on time.',
            icon: '✈️',
        },
        {
            title: 'Sea Freight',
            description:
                'Cost-effective sea shipping options for large and heavy consignments. We manage FCL and LCL shipments, providing flexible transit times.',
            icon: '🚢',
        },
        {
            title: 'Land Freight',
            description:
                'Reliable ground transportation for domestic and cross-border shipments. Our extensive network ensures timely delivery of goods via trucks and trailers.',
            icon: '🚛',
        },
        {
            title: 'Temperature-Controlled Warehouse',
            description:
                'Maintain the integrity of sensitive cargo with our temperature-controlled warehousing. Ideal for pharmaceuticals, food, and perishable items.',
            icon: '🌡️',
        },
        {
            title: 'E-Clearance',
            description:
                'Streamline customs clearance with our electronic documentation services. We handle all paperwork for smooth cross-border shipping.',
            icon: '📄',
        },
        {
            title: 'Insurance',
            description:
                'Protect your shipments against potential risks with our comprehensive cargo insurance plans. Stay covered against loss, damage, or theft.',
            icon: '🛡️',
        },
        {
            title: 'Calogi Service',
            description:
                'Seamlessly manage freight and logistics transactions through Calogi – a comprehensive platform designed for efficiency and transparency.',
            icon: '💻',
        },
    ];

    return (
        <section id="services" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Services</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive shipping services tailored to meet your business needs – from freight to warehousing and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
