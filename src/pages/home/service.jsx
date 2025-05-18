const Services = () => {
    const services = [
        {
            title: 'Air Freight',
            description:
                'Fast and efficient air shipping for urgent deliveries worldwide, with full documentation and customs support.',
            icon: '✈️',
        },
        {
            title: 'Ocean Freight',
            description:
                'Cost-effective ocean shipping solutions for large and bulk consignments. FCL and LCL options available.',
            icon: '🚢',
        },
        {
            title: 'Land Transportation',
            description:
                'Reliable domestic and cross-border transportation using trucks, trailers, chiller vans, and refrigerated trucks.',
            icon: '🚛',
        },
        {
            title: 'Customs Clearance',
            description:
                'Simplify international shipping with expert customs handling and e-clearance for seamless cargo movement.',
            icon: '📄',
        },
        {
            title: 'Temperature-Controlled Logistics',
            description:
                'Secure storage and transport for pharmaceuticals and perishables using cool chain warehouses and refrigerated vehicles.',
            icon: '🌡️',
        },
        {
            title: 'Door-to-Door Delivery',
            description:
                'End-to-end logistics solutions delivering goods directly to your customers’ doorstep with reliability and speed.',
            icon: '📦',
        },
        {
            title: 'Calogi Platform Services',
            description:
                'Digital freight and logistics management through Calogi – boosting efficiency and transaction transparency.',
            icon: '💻',
        },
        {
            title: 'Marine Cargo Insurance',
            description:
                'Protect your shipments from risk with comprehensive insurance coverage for loss, damage, or theft.',
            icon: '🛡️',
        },
    ];

    return (
        <section id="services" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Services</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        End-to-end logistics solutions tailored for businesses of every size – from air freight to door delivery and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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


