import Image from 'next/image';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    
    const phrases = [
        'Delivering Excellence in Shipping Solutions',
        'Global Logistics Partner',
        'Your Trusted Shipping Provider'
    ];

    useEffect(() => { 
        AOS.init({
            duration: 1000, // Default duration (can be customized)
            easing: 'ease-in-out', // Easing function for smoother effect
        });
    }, []);

    useEffect(() => {
        const handleTyping = () => {
            const current = loopNum % phrases.length;
            const fullText = phrases[current];

            setText(isDeleting 
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases, typingSpeed]);

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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 h-[5.5rem] md:h-[6.5rem] lg:h-[7.5rem]">
                            {text}
                            <span className="ml-1 animate-pulse">|</span>
                        </h1>
                        <p className="text-lg mb-8">
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

                    <div data-aos="fade-up" data-aos-delay="100">
                        <Image
                            src="/static/assets/ms/banner-mix.png"
                            alt="Logistics"
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;