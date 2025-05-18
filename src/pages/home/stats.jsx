import { useState, useEffect } from 'react';

const Stats = () => {
    const [counters, setCounters] = useState({
        clients: 0,
        countries: 0,
        deliveries: 0,
        fleet: 0,
    });

    const targetCounters = {
        clients: 1250,
        countries: 35,
        deliveries: 12500,
        fleet: 220,
    };

    useEffect(() => {
        const duration = 2000;
        const interval = 50;
        const steps = duration / interval;
        const increments = {
            clients: targetCounters.clients / steps,
            countries: targetCounters.countries / steps,
            deliveries: targetCounters.deliveries / steps,
            fleet: targetCounters.fleet / steps,
        };

        const timer = setInterval(() => {
            setCounters((prev) => ({
                clients: Math.min(Math.floor(prev.clients + increments.clients), targetCounters.clients),
                countries: Math.min(Math.floor(prev.countries + increments.countries), targetCounters.countries),
                deliveries: Math.min(Math.floor(prev.deliveries + increments.deliveries), targetCounters.deliveries),
                fleet: Math.min(Math.floor(prev.fleet + increments.fleet), targetCounters.fleet),
            }));
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className="relative py-16 bg-cover bg-center text-white"
            style={{ backgroundImage: 'url("https://www.meta-pharma.com/wp-content/uploads/2021/07/Feature-Imagemp.jpg")' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-60 z-0"></div>

            {/* Stats Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Statistics</h2>
                    <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
                    <p className="text-white max-w-2xl mx-auto">
                        Trusted globally by businesses of all sizes for reliable and efficient logistics.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-bold mb-2">{counters.clients}+</div>
                        <div className="text-lg">Happy Clients</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-bold mb-2">{counters.countries}+</div>
                        <div className="text-lg">Countries Served</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-bold mb-2">{counters.deliveries}+</div>
                        <div className="text-lg">Successful Deliveries</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-bold mb-2">{counters.fleet}+</div>
                        <div className="text-lg">Fleet Vehicles</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
