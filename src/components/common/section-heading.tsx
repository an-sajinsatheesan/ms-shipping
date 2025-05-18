import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const SectionHeading = ({ heading, mainTitle, subTitle }: Heading) => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Default duration (can be customized)
            easing: 'ease-in-out', // Easing function for smoother effect
        });
    }, []);

    return <>
        <div className="mb-4">
            <h1 className='max-w-6xl mx-auto w-100 grid justify-center sub-green-heading'  data-aos="fade-up">{heading}</h1>
            <h1 className='max-w-6xl mx-auto w-100 grid justify-center banner-title p-3 md:py-6 text-center' data-aos="fade-up">{mainTitle}</h1>
            <h1 className='max-w-4xl mx-auto w-100 banner-subtitle text-center p-3 md:pb-4' data-aos="fade-up">{subTitle}</h1>
        </div>
    </>
}

export default SectionHeading