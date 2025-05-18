import SectionHeading from "@/components/common/section-heading"; 
import { useEffect, useState } from "react";
import FeildHeading from '../../../shared/json/heading.json'
import ServiceList from '../../../shared/json/feild-card.json'; 
import FeildCard from "@/components/common/feild-card";
import Image from "next/image";
import SpecialFeature from "@/components/common/special-feature-card";
import { NextPageWithLayout } from "@/types/page";
import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";
import ProductList from './../../../shared/json/products.json';

import AOS from 'aos';
import 'aos/dist/aos.css';


const ProductsAndServices: NextPageWithLayout = () => {
    const [heading, setHeading] = useState<Heading>(FeildHeading.products);
    const [benefits, setBenefits] = useState<Heading>(FeildHeading.benefits);
    const [intro, setintro] = useState<Heading>(FeildHeading.expertise);
    const [List, setServiceList] = useState<any>(ServiceList.featureSector);
    const [splList, setSplList] = useState<any>(ServiceList.specialBenefits);
    const router = useRouter();
    const [activeCard, setActiveCard] = useState<number>(1);
    const [hrmsList, setHRMS] = useState<any>(ProductList.Hrms);
    const [trainingManagement, setManagement] = useState<any>(ProductList.TrainingManagement);
    const [selectedSection, setSelectedSection] = useState(0);

    const handleSectionClick = (index: number) => {
        setSelectedSection(index);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Default duration (can be customized)
            easing: 'ease-in-out', // Easing function for smoother effect
        });
    }, []);

    const getActiveList = () => {
        switch (activeCard) {
            case 1:
                return hrmsList;
                return trainingManagement;
            default:
                return hrmsList;
        }
    };

    const activeList = getActiveList();


    const handleCardClick = (id: number) => {
        setActiveCard(id);
        console.log(id)
    };

    const handleContactUsClick = () => {
        router.push('/contactUs');
    };


    return (
        <>
            <div className="bg-[url('./../../public/static/assets/beams-pricing.webp')] bg-no-repeat bg-center bg-cover overflow-hidden h-[430px] mb-16">
                <div className="max-w-6xl mx-auto flex flex-col w-full h-full items-start justify-center md:p-0 gap-2 padding-adj">
                    <div className="max-w-lg text-4xl font-semibold leading-[3rem] pt-10">
                        Human Resource Management System
                    </div>
                    <div className='w-[120px] h-[5px] bg-[#FF9800] rounded-lg'></div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={handleContactUsClick}>
                        <h1 className="text-lg text-black font-semibold tracking-[1px]">CONTACT US</h1>
                        <Image src="/static/assets/arrow.svg" alt="Arrow" width={35} height={35} className='' />
                    </div>
                </div>
            </div>
            <SectionHeading heading={heading.heading} mainTitle={heading.mainTitle} subTitle={heading.subTitle} />
            <div className="p-8"></div>
            <div className="text-4xl font-semibold leading-[3rem] text-center py-4" data-aos="fade-up">KEY <span className="text-[#FF9800] text-4xl font-semibold leading-[3rem]">FEATURES</span></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto gap-8 padding-adj" data-aos="fade-up">
                {List?.length && List.map((item: any, index: any) => (
                    <div key={item.id} data-aos="fade-up" data-aos-delay={`${index * 100}`} >
                        <FeildCard col={item.col} img={item.img} mainTitle={item.mainTitle} subTitle={item.subTitle} key={item.id} />
                    </div>
                ))}
            </div>
            <div className="p-8"></div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-16 z-[1]" data-aos="fade-up">
                <div className="flex flex-col min-h-[20rem] max-h-[30rem]">
                    {activeList?.length && activeList.map((item: any, index: any) => (
                        <div key={index} className={`flex flex-col p-3 pr-0 cursor-pointer max-w-md ${selectedSection === index ? 'border-gray-100 bg-white/50 backdrop-blur backdrop-opacity-10 rounded-l-lg drop-shadow-md' : ''}`}
                            onClick={() => handleSectionClick(index)}>
                            <h1 className='font-medium pb-[0.75rem]'>{item.title}</h1>
                            <p className="text-wrap truncate text-xs leading-6">{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className="img-sec">
                    <Image src={activeList[selectedSection].image} alt="Arrow" width={900} height={700} className='rounded-lg' />
                </div>
            </div>
            <div className="p-8"></div>
            <div className="mt-20 bg-[#fff1fe] h-full md:px-4 md:py-20 padding-adj" data-aos="fade-up">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading heading={intro.heading} mainTitle={intro.mainTitle} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
                        <div className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="100">
                            <Image src="/static/assets/approval.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-7">From managing employee records to automating recruitment processes, we offer end-to-end solutions for streamlined and efficient workforce management across the entire employee lifecycle.</div>
                        </div>
                        <div className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="250">
                            <Image src="/static/assets/allocation.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-7">Right from calculating salaries to processing tax deductions, we provide a complete payroll solution integrated with your financial systems for seamless operations.</div>
                        </div>
                        <div className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="350">
                            <Image src="/static/assets/receipt.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-7">From automating leave requests to ensuring compliance with labor laws, our solution simplifies leave management, ensuring accuracy and efficiency at every step.</div>
                        </div>
                        <div className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="450">
                            <Image src="/static/assets/monitoring.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-7">From tracking employee performance to generating detailed reports, our system offers comprehensive analytics to help you make data-driven HR decisions.</div>
                        </div>
                        <div className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="550">
                            <Image src="/static/assets/tools.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-7">From managing training schedules to tracking certifications, we provide a full suite of tools to ensure continuous employee development and skill enhancement.</div>
                        </div>
                        <div className="flex items-start gap-2" data-aos="fade-up" data-aos-delay="650">
                            <Image src="/static/assets/finance.svg" alt="Arrow" width={245} height={145} className='hover:animate-bounce' />
                            <div className="text-sm leading-7">From updating personal information to accessing pay slips, our self-service portal empowers employees while reducing administrative workload through streamlined processes.</div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="p-8 relative">
                <Image src="/static/assets/box.svg" alt="Arrow" width={150} height={150} className='absolute top-0 right-0' />
                <Image src="/static/assets/box.svg" alt="Arrow" width={150} height={150} className='absolute top-0 left-0 rotate-[270deg] origin-center' />
            </div>
            <div className="mt-20 " data-aos="fade-up">
                <SectionHeading heading={benefits.heading} mainTitle={benefits.mainTitle} />

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 max-w-6xl mx-auto gap-8 padding-adj" data-aos="fade-up">
                    {splList?.length && splList.map((item: any, index: any) =>
                    (
                        <div key={item.id} data-aos="fade-up" data-aos-delay={`${index * 100}`} >
                            <SpecialFeature heading={item} key={index} />
                        </div>
                    )
                    )}
                </div>

            </div >
            <div className="md:p-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto gap-12 md:mt-20 padding-adj">
                <div className="col-span-2 grid items-center justify-center gap-2 bg-[url('/static/assets/design.svg')] bg-cover bg-center" data-aos="fade-right">
                    <h5 className='text-4xl text-slate-800 font-semibold tracking-[1px] leading-normal font-baumans'>Application Management and Administration</h5>
                </div>
                <div className="col-span-2 grid items-center justify-center" data-aos="fade-left">
                    <h5 className='text-sm text-black leading-8'> Application Management and Administration of a Human Resource Management System (HRMS) involves overseeing the entire HR technology ecosystem. This encompasses configuration, updates, data management, and user support. It ensures seamless integration, compliance, and optimization, allowing organizations to streamline HR processes, enhance workforce productivity, and make data-driven decisions for strategic HR planning.
                        Effective HRMS management is critical for maintaining data accuracy, security, and delivering an exceptional employee experience.</h5>
                </div>
            </div>
            <div className="md:p-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto gap-12 md:mt-20 padding-adj flex-reverse-col">
                <div className="col-span-2 grid items-center justify-center" data-aos="fade-right">
                    <h5 className='text-sm text-black leading-8 '>Digital Fulfillment for HRMS customers involves providing a seamless, self-service experience. Users can access, customize, and manage HR-related processes online, from onboarding to benefits enrollment and performance management. This enhances user autonomy, efficiency, and reduces administrative burden,
                        ultimately empowering organizations to deliver a more agile and employee-centric HR service.</h5>
                </div>
                <div className="col-span-2 grid items-center justify-center gap-2 bg-[url('/static/assets/design.svg')] bg-cover bg-center" data-aos="fade-left">
                    <h5 className='text-4xl text-slate-800 font-semibold tracking-[1px] leading-normal font-baumans'>Digital Fulfillment for Customers</h5>
                </div>

            </div>
            <div className="md:p-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto gap-12 md:mt-20 padding-adj">
                <div className="col-span-2 grid items-center justify-center gap-2 bg-[url('/static/assets/design.svg')] bg-cover bg-center" data-aos="fade-right">
                    {/* <h5 className='text-4xl font-semibold tracking-widest text-[#c1b7b7]'>Application Management and Administration</h5> */}
                    <h5 className='text-4xl text-slate-800 font-semibold tracking-[1px] leading-normal font-baumans'>Flexible and scalable For Customers</h5>
                </div>
                <div className="col-span-2 grid items-center justify-center" data-aos="fade-left">
                    <h5 className='text-sm text-black leading-8'> A flexible and scalable HRMS is designed to adapt to varying organizational needs. It accommodates growth, easily integrates with existing systems, and allows customization to match specific HR processes. This empowers customers to tailor their HR technology to evolving
                        requirements, ensuring long-term efficiency and effectiveness in workforce management.</h5>
                </div>
            </div>
 
        </>

    );
};

ProductsAndServices.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};


export default ProductsAndServices;