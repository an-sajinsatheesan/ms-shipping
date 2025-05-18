import SectionHeading from '@/components/common/section-heading';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import IndustryHeadingList from './../../shared/json/heading.json';
import ConatactUs from '../home/landing-contact-us/ContactUs';
import { PageHeading } from '@/components/common/page-heading';
import { ColumnCard } from '@/components/common/column-card';
import Digitalization from '../home/landing-digitalization/digitilization';
import Vision from './vision';
import Mission from './mission';
import Facts from '../home/landing-facts';

const arr = [
    { title: "Agile methodology" },
    { title: "Client Relationships" },
    { title: "Transparent approach" },
    { title: "Scalability" },
    { title: "Customer-centric" },
    { title: "Collaboration" },
]

const AboutUs: React.FC = () => {
    const [heading, setHeading] = useState<Heading>(IndustryHeadingList.aboutUs);

    useEffect(() => {
        document.title = 'About Us | Accinge Technologies';
    }, []);


    return (
        <>
            <PageHeading Title={'About Us'} />
            <div className='max-w-7xl mx-auto py-10 md:py-20'>
                <Mission />
                <Vision />
                <div className="flex flex-col lg:flex-row gap-4 pb-10">
                    <Image src="/static/assets/choose-us.webp" alt="team" width={460} height={460} className='drop-shadow-lg shadow-gray-600/10 hidden md:visible' />
                    <Facts />
                </div>
            </div >
            {/* <Digitalization isShowHeading={true}/> */}
            <ConatactUs />

        </>

    );
};

export default AboutUs;